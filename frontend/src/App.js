import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import PostDetail from './PostDetail'; // Import the PostDetail component
import Login from './Login'; // Import the Login component
import Register from './Register'; // Import the Register component
import authService from './authService'; // Import the auth service
import './App.css';

function App() {
  const [currentUser , setCurrentUser ] = useState(null);

  useEffect(() => {
    const user = authService.getCurrentUser ();
    if (user) {
      setCurrentUser (user);
    }
  }, []);

  const handleLogin = () => {
    const user = authService.getCurrentUser ();
    setCurrentUser (user);
  };

  const handleLogout = () => {
    authService.logout();
    setCurrentUser (null);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            {currentUser  ? (
              <>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;