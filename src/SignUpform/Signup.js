import React,{useState} from "react";
import axios from "axios";
import { Form, Button, Container,Row } from "react-bootstrap";
import classes from './Signup.module.css'
const Signup=props=>{
    const [isLoding, setIsLoading] = useState(false)
    // Initialize state for form fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        if (password === confirmPassword) {
            try {
                const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB2IbR8h8-w-hfsXzEWYgYExp3fG4R8PQ8', {
                    email: email, password: password, returnSecureToken: true
                })
              console.log("User has successfully signed up.")
            } catch (error) {
                alert(error.response.data.error.message)
            }
            setEmail('')
            setConfirmPassword('')
            setPassword('')
        } else {
            alert("Password and Confirm Password do not match")
        }
        setIsLoading(false)
    };
return (
    <>
    <Container className="rounded p-4 mb-4 shadow w-75">
    {isLoding && <p>Loading...</p>}
    <Row>
{!isLoding&&  <Form onSubmit={handleSubmit}>
    <h2>SignUp</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" value={email}
     onChange={(event) => setEmail(event.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formConfirmPassword">
        <Form.Control type="password" placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)} required/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>}
    </Row>
    <Row>
    <Button variant="info" bg='dark'>Have an account? Login</Button>
    </Row>
    </Container>
    </>
)
}
export default Signup;