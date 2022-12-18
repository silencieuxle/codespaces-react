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

import { AuthContext } from './providers/AuthContext'
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Navbar />  
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
  );
}

function useAuth() {
  return React.useContext(AuthContext);
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
