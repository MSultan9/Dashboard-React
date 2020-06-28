import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/login-page/login-page.component';
import DashboardPage from './pages/dashboard-page/dashboard-page.component';
import TablePage from './pages/table-page/table-page.component';
import UserPage from './pages/user-page/user-page.component';
import SideBar from './components/sidebar/sidebar.component'
import AuthenticatedRoute from './components/autenticated-route/authenticated-route.component'

function App() {
  return (
    <main>
      <SideBar></SideBar>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <AuthenticatedRoute path="/dashboard" component={DashboardPage} />
        <AuthenticatedRoute path="/table" component={TablePage} />
        <AuthenticatedRoute path="/user" component={UserPage} />
        <Route path="*" ><Redirect to="/login" /> </Route>
      </Switch>
    </main>
  );
}

export default App;
