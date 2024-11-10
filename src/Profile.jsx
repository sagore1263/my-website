import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import crest from './assets/react.svg'
import Layout from "./Layout.jsx"
import WalletConnect from "./WallectConnect.jsx";

function Profile(props) {
    return (
        <Container>
            <div style={{ display: 'flex', gap: '20px' }}>
            <Layout />
            </div>
            <div style={{ display: 'flex', padding: '5rem', gap: '20px' }}>
            <WalletConnect />
            </div>
           
        </Container>
    )
    }
export default Profile;