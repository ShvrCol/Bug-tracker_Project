import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './components/loginpage';
import DashboardPage from './components/dashboard';

const App = () => {
  const isLoggedIn = false;

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          {isLoggedIn ? <Redirect to="/dashboard" /> : <LoginPage />}
        </Route>
        <Route path="/dashboard">
          {isLoggedIn ? <DashboardPage /> : <Redirect to="/login" />}
        </Route>
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default App;