import React, { useContext, useEffect } from "react";
import classes from'./ProfilrLogin.moule.css'
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Container, Navbar, NavbarBrand ,Nav, Button} from "react-bootstrap";
import Econtext from "../store/econtext";
import ExpenseForm from "../Expense/Expenses";
import ExpenseList from "../Expense/ExpenseList";
const ProfileLogin=()=>{
    const ctx=useContext(Econtext)
    const idToken=ctx.token
    const verifyEmailHandler=async()=>{
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB2IbR8h8-w-hfsXzEWYgYExp3fG4R8PQ8',
            {requestType:"VERIFY_EMAIL",idToken:idToken})
            console.log(response.data)
        } catch (error) {
       alert(error.response.data.error.message)
        } 
    }
return  (
    <>
<Navbar>
    <NavbarBrand>Welcome to expense tracker!!!</NavbarBrand>

<Nav className='ms-auto'>
    <Button  onClick={verifyEmailHandler}>Verify Email</Button>
    <Container>
your profile is incomplete<Nav.Link as={NavLink} to='/userProfile' style={{color:'green'}}> complete now.</Nav.Link>
</Container>
</Nav>
</Navbar>
<hr/>
<Container>
    <ExpenseForm/>
    <ExpenseList/>
</Container>
</>
)
}
export default ProfileLogin;