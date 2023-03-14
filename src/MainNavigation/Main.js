import React,{useState} from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/AuthReducer";
import { toggleThemeaction } from "../store/ThemeReducer";

const Main=()=>{
  const [expanded, setExpanded] = useState(false);
  const Navigate=useNavigate();
const isLogedin=useSelector(state=>state.auth.isLogedin);
const expenses=useSelector(state=>state.expenses.expenses);
const totalAmount=expenses.reduce((cur,expense)=>{
    return cur+=Number(expense.money)
  },0)
const mode = useSelector((state) => state.theme.currentTheme);
const dispatch=useDispatch();
    const logoutHander=()=>{
        dispatch(authAction.logout())
Navigate('/Login')
setExpanded(false)
    }
    const handleClick = () => {
        dispatch(toggleThemeaction.toggleTheme());
        setExpanded(false)
      };
  
      
    return (
        <Navbar fixed='top' bg="dark" variant="dark" expand='lg' expanded={expanded}>
         <Navbar.Brand href="/home">Expense Tracker</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>setExpanded(!expanded)}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
          {!isLogedin&&  <Nav.Item>
                <Nav.Link as={NavLink} to='/Login' onClick={()=>setExpanded(false)}>Login</Nav.Link>
            </Nav.Item>}
          {!isLogedin&&  <Nav.Item>
                <Nav.Link as={NavLink} to='/SignUp' onClick={()=>setExpanded(false)}>SignUp</Nav.Link>
            </Nav.Item>}
            <Nav.Item>
     {isLogedin&&  <Nav.Link as={NavLink} to='/Profile' onClick={()=>setExpanded(false)}>Home</Nav.Link>}
            </Nav.Item>
            <Nav.Item>
     {totalAmount>10000 && isLogedin&& <Nav.Link variant="info"onClick={()=>setExpanded(false)}>Activate Premium</Nav.Link>}
            </Nav.Item>
           
            </Nav>
            <Nav className="ms-auto">
            <Nav.Item>
     {isLogedin &&  <Nav.Link as={NavLink} to='/Login' onClick={logoutHander}>Logout</Nav.Link>}
        </Nav.Item>
            <Nav.Item>
            <Nav.Link  onClick={handleClick}>
      {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Nav.Link>
            </Nav.Item>
            </Nav>
            
        </Navbar.Collapse>
    </Navbar>
    ) 
}
export default Main;