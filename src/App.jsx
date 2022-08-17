import "./App.css";
import React from "react";
import { Container, Navbar, Nav /*, NavDropdown */ } from "react-bootstrap";

function BasicExample() {
  return (
    <Navbar fixed="top-left" bg="dark" variant="dark">
      <Container>
        {/*Brand works like your Logo, so when user press on it, it should return back to homepage*/}
        <a class="navbar-brand" href="#Home">
          Home
        </a>
        <Nav className="ms-auto">
          <a class="nav-link" href="#AboutMe">
            About Me
          </a>
          <a class="nav-link" href="#Projects">
            Projects
          </a>
          <a class="nav-link" href="#ContactMe">
            Contact Me
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
