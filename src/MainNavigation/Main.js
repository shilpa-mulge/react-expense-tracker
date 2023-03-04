import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Main=()=>{
    return (
        <Navbar bg="dark" variant="dark">
        <Nav className="me-auto">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/Login' >Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/SignUp' >SignUp</Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar>
    )
}
export default Main;