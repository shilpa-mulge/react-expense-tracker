import { useContext, useRef } from "react";
import { Form, Col,Row, Button, Container, Navbar, NavbarBrand,Nav } from "react-bootstrap";
import Econtext from "../store/econtext";
import classes from './Profile.module.css'
import axios from "axios";
const Profile=()=>{
    const ctx=useContext(Econtext)
    const fulNameRef=useRef()
    const urlRef=useRef()
    const profileUpdateHandler=async(event)=>{
        const fulname=fulNameRef.current.value;
        const url=urlRef.current.value
        const idToken=ctx.token;
        event.preventDefault();
            try {
                const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB2IbR8h8-w-hfsXzEWYgYExp3fG4R8PQ8', {
                  idToken:idToken,  fulname:fulname, url:url , returnSecureToken: true
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
    <Container className="rounded p-4 mb-4 shadow w-75" >
        <h2 >Contact details</h2>
    <Form onSubmit={profileUpdateHandler}>
      <Row>
          <Col>  <Form.Label>Full name</Form.Label></Col>
         <Col> <Form.Control type='text' placeholder="Full name" ref={fulNameRef}/></Col>
        <Col>
            <Form.Label>Profile photo url</Form.Label>
            </Col>
            <Col>
          <Form.Control type='text' ref={urlRef} />
        
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