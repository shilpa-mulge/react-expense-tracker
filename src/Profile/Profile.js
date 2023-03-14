import {useState, useEffect } from "react";
import { Form, Col,Row, Button, Container,Nav } from "react-bootstrap";
import classes from './Profile.module.css'
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const Profile=()=>{
    const Navigate=useNavigate()
    let item = localStorage.getItem('token');
    let initial = JSON.parse(item);
    const token=initial!==null?initial.idToken:'';
    const [user, setUser]=useState({displayName:'', photoUrl:''});
    const userUpdateFunction=async()=>{
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyB2IbR8h8-w-hfsXzEWYgYExp3fG4R8PQ8',{idToken:token})
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


    const profileUpdateHandler=async(event)=>{
        event.preventDefault();
            try {
                const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB2IbR8h8-w-hfsXzEWYgYExp3fG4R8PQ8', {
                    idToken:token,  displayName:user.displayName, photoUrl:user.photoUrl , returnSecureToken: true
                })
             alert("Updated successfully!")

            } catch (error) {
                alert(error.response.data.error.message)
            } 
    
    }
    const onCancleHandler=()=>{
        Navigate('/Profile')
    }
return (
    <>
    <Container fluid style={{height: '100%', overflow: 'auto' }}>
   <Row>
            <h3>Winners never quite, quiters never win</h3>
        <p > your profile is 64% complete. complete now</p>
      </Row>
        <hr/>
    <Row className="rounded p-4 mb-4 shadow w-100 bg-info bg-opacity-25 justify-content-center" >
        <h2 >Contact details</h2>
    <Form className="bg-info bg-opacity-25 rounded w-75 " onSubmit={profileUpdateHandler}>
      <Row >
          <Col xs={12}>  <Form.Label>Full name</Form.Label></Col>
         <Col> <Form.Control value={user.displayName} type='text'  onChange={(event) => setUser({ ...user, displayName: event.target.value })}/></Col>
        <Col xs={12}>
            <Form.Label>Profile photo url</Form.Label>
            </Col>
            <Col>
          <Form.Control value={user.photoUrl} type='text' onChange={(event) => setUser({ ...user, photoUrl: event.target.value })} />
        
        </Col>
        </Row>
     <Container className="rounded p-4 mb-4  ">
     <Button variant="secondary" type='submit'>Update</Button>{' '}
     
     <Button variant="secondary" onClick={onCancleHandler}>Cancel</Button>
     </Container>
    </Form>
    </Row>
    <Row>
    <Nav.Link as={NavLink} to='/Profile' style={{textAlign:'end', color:'black', display:'inline'}}>Back</Nav.Link>
    </Row>
    </Container>
    </>
)
}
export default Profile;