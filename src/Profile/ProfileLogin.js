import React, { useContext, useEffect } from "react";
import classes from'./ProfilrLogin.moule.css'
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Container, Navbar, NavbarBrand ,Nav} from "react-bootstrap";
import Econtext from "../store/econtext";
const ProfileLogin=()=>{
    const ctx=useContext(Econtext)
return  (
    <>
<Navbar>
    <NavbarBrand>Welcome to expense tracker!!!</NavbarBrand>

<Nav className='ms-auto'>
    <Container>
your profile is incomplete<Nav.Link as={NavLink} to='/userProfile' style={{color:'green'}}> complete now.</Nav.Link>
</Container>
</Nav>
</Navbar>
<hr/>
</>
)
}
export default ProfileLogin;