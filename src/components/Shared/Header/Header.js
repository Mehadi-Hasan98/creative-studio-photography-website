import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';
import {BsCamera} from 'react-icons/bs';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
  <Container>
  <h5 className='main-text'>Creative Studio Photography <BsCamera/></h5>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='ms-auto'>
      <Nav.Link as={Link} to="home">Home</Nav.Link>
      <Nav.Link as={Link} to="checkout">Checkout</Nav.Link>
      <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="about">About</Nav.Link>
      {
        user ?
        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
        :
        <Nav.Link as={Link} to="login">Login</Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;