import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" z-index="-1" variant="dark">
  <Container>
  <Navbar.Brand as ={Link} to="#home">Creative Studio Photography</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='ms-auto'>
      <Nav.Link as={Link} to="home">Home</Nav.Link>
      <Nav.Link as={Link} to="checkout">Checkout</Nav.Link>
      <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="login">Login</Nav.Link>
      <Nav.Link as={Link} to="about">
       About
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;