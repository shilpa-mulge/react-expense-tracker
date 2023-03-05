import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Econtext from "../store/econtext";
const Main=()=>{
    const ctx=useContext(Econtext)
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