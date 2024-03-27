import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="images/dog_paws.png"
            height="30"
            width="30"
            className="align-top"
          />
          <strong>Sample</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            </Nav>
            <Nav className="ml-auto fw-bold">
            <NavDropdown title="Sign Up" id="basic-nav-dropdown">
              <NavDropdown.Item as = {Link} to ="/signup">Sign up</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as ={Link} to ="/login">
                Log In
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
