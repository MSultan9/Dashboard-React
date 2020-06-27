import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/login-page/login-page.component';
import DashboardPage from './pages/dashboard-page/dashboard-page.component';
import TablePage from './pages/table-page/table-page.component';
import UserPage from './pages/user-page/user-page.component';
import SideBar from './components/sidebar/sidebar.component'

function App() {
  return (
    <main>
      <SideBar></SideBar>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/table" component={TablePage} />
        <Route path="/user" component={UserPage} />
        <Route path="*" ><Redirect to="/login" /> </Route>
      </Switch>
    </main>
  );
}

export default App;
