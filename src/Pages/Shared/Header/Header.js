import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar className=''  bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className='d-flex justify-center align-items-center'>
                        <img
                            alt=""
                            src={logo}
                            height="60"
                            className="d-inline-block align-top"
                        /> <span className='brand-name'>Cupcake Corner</span>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Cupcakes</Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                        <Nav.Link href="#pricing">About Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;