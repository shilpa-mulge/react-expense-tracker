import { useContext,useState, useEffect } from "react";
import { Form, Col,Row, Button, Container } from "react-bootstrap";
import Econtext from "../store/econtext";
import classes from './Profile.module.css'
import axios from "axios";
const Profile=()=>{
    const ctx=useContext(Econtext)
    const [user, setUser]=useState({displayName:'', photoUrl:''});
    const userUpdateFunction=async()=>{
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyB2IbR8h8-w-hfsXzEWYgYExp3fG4R8PQ8',{idToken:ctx.token})
         const name=response.data.users[0].displayName;
         const url=response.data.users[0].photoUrl;
    setUser({displayName:name, photoUrl:url})
        } catch (error) {
            alert(error.response.data.error.message)
        } 
    }
    useEffect(()=>{
        userUpdateFunction()
    },[]);
    const idToken=ctx.token;

    const profileUpdateHandler=async(event)=>{
        event.preventDefault();
            try {
                const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB2IbR8h8-w-hfsXzEWYgYExp3fG4R8PQ8', {
                    idToken:idToken,  displayName:user.displayName, photoUrl:user.photoURL , returnSecureToken: true
                })
             console.log(response.data)

            } catch (error) {
                alert(error.response.data.error.message)
            } 
    }
return (
    <>
    <Container  className="rounded p-4 mb-4 shadow w-75">
            <h3>Winners never quite, quiters never win</h3>
        <p > your profile is 64% complete. complete now</p>
        </Container>
        <hr/>
    <Container className="rounded p-4 mb-4 shadow w-75" >
        <h2 >Contact details</h2>
    <Form onSubmit={profileUpdateHandler}>
      <Row>
          <Col>  <Form.Label>Full name</Form.Label></Col>
         <Col> <Form.Control value={user.displayName} type='text'  onChange={(event) => setUser({ ...user, displayName: event.target.value })}/></Col>
        <Col>
            <Form.Label>Profile photo url</Form.Label>
            </Col>
            <Col>
          <Form.Control value={user.photoUrl} type='text' onChange={(event) => setUser({ ...user, photoURL: event.target.value })} />
        
        </Col>
        </Row>
     <Container className="rounded p-4 mb-4  ">
     <Button variant="secondary" type='submit'>Update</Button>{' '}
     
     <Button variant="secondary">Cancel</Button>
     </Container>
    </Form>
   
    </Container>
    </>
)
}
export default Profile;