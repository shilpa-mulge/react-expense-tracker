import React, { useContext,useState, useRef } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import classes from './ForgetPass.module.css';
import { Link } from "react-router-dom";
import axios from "axios";
const ForgetPass=()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData]=useState(null);
    const emailRef=useRef()
    const emailSubmiHandler=async(event)=>{
        event.preventDefault()
        setIsLoading(true)
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB2IbR8h8-w-hfsXzEWYgYExp3fG4R8PQ8',
            {requestType:"PASSWORD_RESET",email:emailRef.current.value})
            setData(response.data)
        } catch (error) {
       alert(error.response.data.error.message)
        }  
        setIsLoading(false)
    }
return(
    <>
    <Container className="rounded p-4 mb-4 shadow w-75">
        {isLoading&& <Row><h2>loading....</h2></Row>}
        {!isLoading&&data &&<Row><Link to='/Login'>Login</Link></Row>}
    </Container>
 {!isLoading&& !data&& <Container className="rounded p-4 mb-4 shadow w-75">
     <Row>
<Form onSubmit={emailSubmiHandler}>
    <Form.Group>
        <Form.Label>
            Enter the email with which you have registered
        </Form.Label>
        <Form.Control type="email" ref={emailRef}/>
    </Form.Group>
    <Button type="submit">Send Link</Button>
</Form>
</Row>
<Row>
    <Button variant="info" bg='dark'>Already user? Login</Button>
    </Row>
</Container>}


</>
)
}
export default ForgetPass;