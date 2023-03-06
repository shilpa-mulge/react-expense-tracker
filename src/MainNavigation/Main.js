import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/AuthReducer";
import { toggleThemeaction } from "../store/ThemeReducer";

const Main=()=>{
const isLogedin=useSelector(state=>state.auth.isLogedin);
const totalExpenses=useSelector(state=>state.expenses.totalExpenses)
const mode = useSelector((state) => state.theme.currentTheme);
const dispatch=useDispatch();
    const logoutHander=()=>{
        dispatch(authAction.logout())
    }
    const handleClick = () => {
        dispatch(toggleThemeaction.toggleTheme());
      };
  
      
    return (
        <Navbar bg="dark" variant="dark">
        <Nav className="me-auto">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
            </Nav.Item>
          {!isLogedin&&  <Nav.Item>
                <Nav.Link as={NavLink} to='/Login' >Login</Nav.Link>
            </Nav.Item>}
          {!isLogedin&&  <Nav.Item>
                <Nav.Link as={NavLink} to='/SignUp' >SignUp</Nav.Link>
            </Nav.Item>}
        </Nav>
        <Nav className="ms-auto">
     <Nav.Item>
     {isLogedin &&  <Nav.Link as={NavLink} to='/Login' onClick={logoutHander}>Logout</Nav.Link>}
            </Nav.Item>
            <Nav.Item>
     {isLogedin&&  <Nav.Link as={NavLink} to='/Profile' >profile</Nav.Link>}
            </Nav.Item>
            <Nav.Item>
     {totalExpenses>10000 && isLogedin&& <Button variant="info">Activate Premium</Button>}
            </Nav.Item>
            <Nav.Item>
            <Button variant="primary" onClick={handleClick}>
      {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
            </Nav.Item>
            </Nav>
    </Navbar>
    )
}
export default Main;