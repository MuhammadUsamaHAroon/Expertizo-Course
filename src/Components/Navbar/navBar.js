import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

export default function NavBar(props) {
  return (
    <>
       <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">OLX Ads Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Nav.Link href="#action1" onClick={()=>props.changeScreen('AdsView')}>Create Ads</Nav.Link>
            <Nav.Link href="#action1" onClick={()=>props.changeScreen('MyAds')}>My Ads</Nav.Link>
            <Nav.Link href="#action2" onClick={()=>props.changeScreen('Profile')}>Profile</Nav.Link>
          </Nav>
            <Button variant="outline-success" className='mx-5'>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
