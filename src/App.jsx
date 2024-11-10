import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Tasks from "./Tasks.jsx"
import Profile from "./Profile.jsx"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Tasks />} />
      <Route path="/profile" element={<Profile />} />  
    </Routes>
  </BrowserRouter>
  
  )
}

export default App;
