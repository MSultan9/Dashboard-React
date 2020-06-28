import React from 'react';
import logo from '../../assets/monty.png';
import './sidebar.styles.css'
import { NavLink, withRouter } from 'react-router-dom'

class SideBar extends React.Component {

    logOut = () => {
        localStorage.setItem("isLoggedIn", false)
        this.props.history.push("/login")
    }

    toggleSidebar() {
        let sidebar = document.querySelector('.sidebar-fixed')
        sidebar.classList.toggle('open')
    }

    render() {
        return (
            <div className={this.props.location.pathname === '/login' ? 'd-none' : 'd-block'}>
                <div className="sidebar sidebar-fixed">
                    <img src={logo} className="logo" alt="logo" />
                    <div className="tabs">
                        <NavLink to="/dashboard"><i className="fa fa-bar-chart"></i>Dashboard</NavLink>
                        <NavLink to="/table"><i className="fa fa-table"></i>Table</NavLink>
                        <NavLink to="/user"><i className="fa fa-user"></i>User Info</NavLink>
                    </div>
                    <div className="logout" onClick={this.logOut}><i className="fa fa-sign-out"></i>Logout</div>
                </div>
                <div className="hamburger" onClick={this.toggleSidebar}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>
            </div>
        );
    }
}

export default withRouter(SideBar);