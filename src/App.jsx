// src/App.jsx
import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AppRoutes from "./routes/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" data-bs-theme="dark" expand="sm" className="mb-3">
        <Container>
          <Navbar.Brand href="/">React CRUD</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/users">Tous les utilisateurs</Nav.Link>
            <Nav.Link as={NavLink} to="/users/new">Ajouter un utilisateur</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="pb-5">
        <AppRoutes />
      </Container>
    </BrowserRouter>
  );
}




/*
import logo from './logo.svg';
import './App.css';
import CRUD from "./CRUD";

function App() {
  return (
    <div className="App">
      <CRUD/>
    </div>
  );
}

export default App;
*/