import React from "react";
import './ProfileLogin.moule.css'
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Container, Nav, Row,Col} from "react-bootstrap";
import ExpenseForm from "../Expense/ExpensesForm";
import ExpenseList from "../Expense/ExpenseList";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/AuthReducer";
import Notification from "../MainNavigation/Notification";
import { theme } from "../theme";
const ProfileLogin=()=>{
    let item = localStorage.getItem('token');
    let initial = JSON.parse(item);
    const token=initial!==null?initial.idToken:'';
const IsemailVarified=useSelector(state=>state.auth.IsemailVarified)
const mode=useSelector(state=>state.theme.currentTheme)
const notification=useSelector(state=>state.ui.notification)
const dispatch=useDispatch()


    const verifyEmailHandler=async()=>{
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB2IbR8h8-w-hfsXzEWYgYExp3fG4R8PQ8',
            {requestType:"VERIFY_EMAIL",idToken:token})
            //console.log(response.data.email)
            dispatch(authAction.verification())
            alert("Verification link has sent to your email!")
        } catch (error) {
       alert(error.response.data.error.message)
        } 
    }
return  (
    <>
<Container className='profile' fluid >
    <Row>
    <Col>
    <h2 style={{ color: theme[mode].text}}>Welcome to expense tracker!!!</h2>
    </Col>
    <Col style={{justifyContent:'end', display:'flex', gap:'2rem'}}>
  {!IsemailVarified &&  <Nav.Link style={{ color: theme[mode].text }} onClick={verifyEmailHandler}>Verify Email</Nav.Link>}
  <Nav.Link style={{ color: theme[mode].text}}  as={NavLink} to='/userProfile' > Profile</Nav.Link>
</Col>
</Row>
<hr/>
<Row>
{notification&&<Notification status={notification.status} title={notification.title} message={notification.message}/>} 
</Row>
<Row>
    <ExpenseForm />
    <ExpenseList/>
    </Row>
    </Container>
</>
)
}
export default ProfileLogin;