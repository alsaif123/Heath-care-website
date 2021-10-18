import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/useAuth';

import './Header.css'

const Header = () => {
    const{user , logout} = UseAuth();
    return (
        
            <>
  <Navbar sticky="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">HealtCare</Navbar.Brand>
    <Nav className="me-auto">
        <div className="header">
            <Link to="/home">Home</Link>
      <Link to="/Services">Services</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/contuct">Contuct us</Link>
      <Link to="/login">Login</Link>
      <span className="text-danger">{user.displayName} </span>
     {user?.email && <button onClick={logout} className='btn btn-danger'>Log out</button>}
      </div>
      
    </Nav>
    </Container>
  </Navbar>
  
        </>
    );
};

export default Header;