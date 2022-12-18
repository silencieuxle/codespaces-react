import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import HomePage from './pages/home/Index';
import MessagesPage from './pages/messages/Index';
import LoginPage from './pages/login/Index';
import useAuth from './providers/AuthHook';
import { Nav, Navbar } from 'react-bootstrap';

function App() {
  let auth = useAuth();
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Messages</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {
                auth.isAuthenticated ? <Nav.Link href="/message">Messages</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <Routes>
          <Route exact path='/' element={< HomePage />}></Route>
          <Route exact path='/login' element={< LoginPage />}></Route>
          <Route exact path='/messages' element={
            <RequireAuth>
              <MessagesPage />
            </RequireAuth>
          }></Route>
        </Routes>
      </Container>
    </div>
  );
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default App;
