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
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if username and password are empty
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please fill in the username and password fields!');
      return;
    }

    // Check if username and password match
    if (username === 'baghiz' && password === '123') {
      // Redirect to dashboard page
      navigate('/dashboard');
    } else {
      // Display error message or handle failed login attempt
      setErrorMessage('Invalid username or password');
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
