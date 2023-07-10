import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/loginpage';
import DashboardPage from './components/dashboard';

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    );
  };  

export default App;