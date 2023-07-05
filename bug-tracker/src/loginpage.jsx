import React from 'react';
import './loginpage.css';
import logo from './img/genesys.png';

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
  return (
    <div className="login-container">
      <div className="login-form">
        <Logo />
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
