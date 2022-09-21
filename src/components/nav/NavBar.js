import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./PcBuilder.jpeg";
import "./NavBar.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import { Row, Stack, Image } from "react-bootstrap";

export const NavBar = () => {
    const history = useNavigate();
    
    return (
        // <ul className="navbar-whole">
        //     <div className="navbar__links">
        //         <li className="navbar_item">
        //             <Link className="navbar_link" to="/">Home</Link>
        //         </li>
        //         <li className="navbar_item">
        //             <Link className="navbar_link" to="/builds">User Builds</Link>
        //         </li>
        //         <li className="navbar_item">
        //             <Link className="navbar_link" to="/parts">Parts</Link>
        //         </li>
        //         <li className="navbar_item">
        //             <Link className="navbar_link" to="/builders">Profile</Link>
        //         </li>     
        
        <Navbar bg="primary" variant="dark" fixed="top">
            <Container className="navbar_custom">
                {/* <Navbar.Brand href="/">
                    <Image src={Logo} roundedCircle width="auto" height="300"/>
                </Navbar.Brand> */}
                <Stack direction="horizontal" gap={3}> 
                    <Navbar.Brand href="/">PcBuilder.com</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/builds">User Builds</Nav.Link>
                        <Nav.Link href="/parts">Parts</Nav.Link>
                        <Nav.Link href="/builders">Profile</Nav.Link>
                    </Nav>
                </Stack>
                {
                    (localStorage.getItem("lu_token") !== null) ?
                        <li className="navbar_item">
                            <Button variant="light" onClick={() => {
                                localStorage.removeItem("lu_token");
                                history("/login");
                            }}>Logout</Button>
                        </li>
                        :
                        <li className="navbar_item">
                            <Button variant="light" onClick={() => {
                                history("/login");
                            }}>Login</Button>
                        </li>
                }

            </Container>
        </Navbar>   
        //     </div>
        // </ul>
    );
}
