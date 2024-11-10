import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import crest from './assets/react.svg'

function BadgerLayout(props) {
return (
    <div>
        <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand as={Link} to="/">To Do: </Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="profile"> Wallet</Nav.Link>
                </Nav>
      </Navbar>
    </div>
);
}

export default BadgerLayout;