import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/abcs.jpeg'; // Make sure to import your logo

function NavBar() {
  return (
    <Navbar variant='dark' expand="lg" fixed="top" className="nav py-3">
      <Container>
        <Navbar.Brand href="/home">
          <img
            alt="ABCS Logo"
            src={logo}
            width="60"
            height="30"
            className="logo-img d-inline-block align-top"
          />
          {' Texas ABCS'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
            <Nav.Link href="/sponsors">Sponsors</Nav.Link>
            <Nav.Link href="/members">Members</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;