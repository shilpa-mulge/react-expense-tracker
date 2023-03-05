import React,{useContext, useState} from "react";
import axios from "axios";
import { Form, Button, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Econtext from "../store/econtext";
import classes from './Login.module.css'
const Login=()=>{
    const ctx=useContext(Econtext)
    const [isLoding, setIsLoading] = useState(false)
    // Initialize state for form fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
const Navigate=useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)
            try {
                const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB2IbR8h8-w-hfsXzEWYgYExp3fG4R8PQ8', {
                    email: email, password: password, returnSecureToken: true
                })
                const nameId = response.data.email.split('@')[0];
                ctx.login(response.data.idToken, nameId)
Navigate('/profile')

            } catch (error) {
                alert(error.response.data.error.message)
            }
            setEmail('')
            setPassword('')
            setIsLoading(false)
    };


return (
    <>
    <Container  className="rounded p-4 mb-4 shadow w-75">
        <Row>
    {isLoding && <p>Loading...</p>}
{!isLoding&&  <Form onSubmit={handleSubmit}>
    <h2>Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" value={email}
     onChange={(event) => setEmail(event.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)} required/>
      </Form.Group>  
      <Button variant="primary" type="submit">
Login      </Button>
<hr/>
      <Link to='/ForgetPassword'>forgot password?</Link>
    </Form>}
    </Row>
    <Row>
    <Button variant="info" bg='dark'>Dont have an account? signUp</Button>
    </Row>
    </Container>
   
    </>
)
}
export default Login;