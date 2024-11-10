import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import crest from './assets/react.svg'
import Layout from "./Layout.jsx"
function Profile(props) {
    return (
        <div>
            <Layout/>
         <img
                            alt="BadgerChat Logo"
                            src={crest}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
        </div>
    )
    }
export default Profile;