import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    
    const Logout = () => {
        navigate('/')
    }

    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <button onClick={Logout}>Logout</button>        
            </Container>
        </Navbar>
        </>
    )
}

export default Header;