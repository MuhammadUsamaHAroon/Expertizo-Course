import React from 'react'
import {Navbar, NavDropdown, Container, Nav, Button} from 'react-bootstrap';

export default function NavBar() {
  return (
    <>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">ToDo List</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    <Nav>
     <Button>Logout</Button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}
