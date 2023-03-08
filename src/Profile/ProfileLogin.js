import React,{useCallback, useEffect} from "react";
import classes from'./ProfilrLogin.moule.css'
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Container, Navbar, NavbarBrand ,Nav, Button} from "react-bootstrap";
import ExpenseForm from "../Expense/ExpensesForm";
import ExpenseList from "../Expense/ExpenseList";
import { useDispatch, useSelector } from "react-redux";
import { ExpenseActions } from "../store/ExpenseReducer";
import { authAction } from "../store/AuthReducer";
import { theme } from "../theme";
const ProfileLogin=()=>{
    const token=useSelector(state=>state.auth.token)
const IsemailVarified=useSelector(state=>state.auth.IsemailVarified)
const mode=useSelector(state=>state.theme.currentTheme)
const dispatch=useDispatch()


    const verifyEmailHandler=async()=>{
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB2IbR8h8-w-hfsXzEWYgYExp3fG4R8PQ8',
            {requestType:"VERIFY_EMAIL",idToken:token})
            //console.log(response.data.email)
            dispatch(authAction.verification())
        } catch (error) {
       alert(error.response.data.error.message)
        } 
    }
return  (
    <>
<Navbar>
    <NavbarBrand style={{ color: theme[mode].text}}>Welcome to expense tracker!!!</NavbarBrand>

<Nav className='ms-auto'style={{width:'auto' }}>
  {!IsemailVarified &&  <Nav.Link style={{ color: theme[mode].text}} onClick={verifyEmailHandler}>Verify Email</Nav.Link>}
    <Container>
your profile is incomplete<Nav.Link as={NavLink} to='/userProfile' style={{color:'green'}}> complete now.</Nav.Link>
</Container>
</Nav>
</Navbar>
<hr/>
<Container>
    <ExpenseForm />
    <ExpenseList/>
</Container>
</>
)
}
export default ProfileLogin;