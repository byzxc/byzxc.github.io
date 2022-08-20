import "./App.css";
import React from "react";
import {
  Container,
  Navbar,
  Nav /*, NavDropdown */,
  NavbarBrand,
} from "react-bootstrap";
import { Route, Routes, NavLink, BrowserRouter } from "react-router-dom";
import Home from "./Contents/Home";
import AboutMe from "./Contents/AboutMe";

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* NavBar */}
          <Navbar fixed="top-left" bg="dark" variant="dark">
            <Container>
              <ul className="header">
                {/*Brand works like your Logo, so when user press on it, it should return back to homepage*/}
                <li>
                  <NavbarBrand href="/">Home</NavbarBrand>
                </li>
                <li>
                  <NavLink to="/Contents/AboutMe">About Me</NavLink>
                </li>
                <li>
                  <NavLink to="/Contents/Projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/Contents/ContactMe">Contact Me</NavLink>
                </li>
              </ul>
            </Container>
          </Navbar>
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Contents/AboutMe" element={<AboutMe />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
