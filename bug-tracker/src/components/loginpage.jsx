import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/loginpage.css';
import logo from '../img/genesys.png';

// Custom logo component
const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo-image" />
    </div>
  );
};

// Login page component
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if username and password match
    if (username === 'baghiz' && password === '123') {
      // Redirect to dashboard page
      navigate('/dashboard');
    } else {
      // Display error message or handle failed login attempt
      console.log('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <Logo />
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
