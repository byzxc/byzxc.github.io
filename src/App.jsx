import "./App.css";
import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

function BasicExample() {
  return (
    <Navbar fixed="top-left" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
