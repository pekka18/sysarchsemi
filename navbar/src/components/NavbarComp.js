import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NavbarComp() {
  return (
    <div className='navbar'>
        <div className='navlink'>
        <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='link' to ="/">Home</NavLink>
            <NavLink className='link' to ="/about">About</NavLink>
            <NavLink className='link' to ="/contact">Contact</NavLink>
            <NavLink className='link' to ="/login">Login</NavLink>
            <NavLink className='link' to ="/registration">Registration</NavLink>
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    </div>
  )
}

export default NavbarComp;