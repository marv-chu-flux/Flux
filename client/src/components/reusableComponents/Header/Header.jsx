import React from "react";
import "./header.css";
import { Outlet, Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../images/logo.png";
import cart from "../images/cartIcon.png"

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container fluid>        
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/shop" className="hover">
                Shop
              </Nav.Link>
            </Nav>

            <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              {/* <Button variant="outline-success">Search</Button> */}
            </Form>

            <Nav
              // className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/cart" className="hover">
                <img src={cart} alt="Cart" />
              </Nav.Link>
            </Nav>
         
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Header;
