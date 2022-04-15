import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';
import login from '../../../images/header/login.png';
import cart from '../../../images/header/cart.png';
import './Header.css';
const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='navbar' variant="light">
                <Container> 
                    <Navbar.Brand href="#home" className='d-flex justify-center align-items-center'>
                        <img
                            alt=""
                            src={logo}
                            className="d-inline-block align-top"
                        /> <span className='brand-name'>Cupcake Corner</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                   
                        <Nav className="navbar-name">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/cupcakes">Cupcakes</Nav.Link>
                        <Nav.Link as={Link} to="/catering">Catering</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/cart">
                            <img src={cart} alt="" />
                        </Nav.Link>
                        <Nav.Link as={Link} to="/login">
                            <img src={login} alt="" />
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;