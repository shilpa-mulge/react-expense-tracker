import React,{useCallback, useEffect} from "react";
import classes from'./ProfilrLogin.moule.css'
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Container, Navbar, NavbarBrand ,Nav, Button} from "react-bootstrap";
import ExpenseForm from "../Expense/ExpensesForm";
import ExpenseList from "../Expense/ExpenseList";
import { useDispatch, useSelector } from "react-redux";
import { ExpenseActions } from "../store/ExpenseReducer";
const ProfileLogin=()=>{
    const token=useSelector(state=>state.auth.token)
const dispatch=useDispatch()
const onClickHandler= useCallback(async()=>{
    let expenses=[];
    let amount=0;
    try{
        axios.get("https://expense-tracker-b91f4-default-rtdb.firebaseio.com/expenses.json")
       .then(response=>{
           for(const key in response.data){
               expenses.push({
                   id:key,
                   Expensename:response.data[key].ExpenseName,
                   money:response.data[key].money
               })
               amount=amount+Number(response.data[key].money);
               
           }   
    dispatch(ExpenseActions.addExpenses(expenses))
    dispatch(ExpenseActions.updateExpenseamount(amount))
           
       })
       }
       catch(error){
       alert(error.response.data.error.message);
       } 
    },[])

    useEffect(()=>{
        onClickHandler()
    },[onClickHandler])

    const verifyEmailHandler=async()=>{
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB2IbR8h8-w-hfsXzEWYgYExp3fG4R8PQ8',
            {requestType:"VERIFY_EMAIL",idToken:token})
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
    <ExpenseForm onClick={onClickHandler} />
    <ExpenseList  onClick={onClickHandler}/>
</Container>
</>
)
}
export default ProfileLogin;