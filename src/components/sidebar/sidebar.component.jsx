import React from 'react';
import logo from '../../assets/monty.png';
import './sidebar.styles.css'
import { NavLink, withRouter } from 'react-router-dom'

class SideBar extends React.Component {

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
                    <div className="logout"><i className="fa fa-sign-out"></i>Logout</div>
                </div>
                <div></div>
            </div>
        );
    }
}

export default withRouter(SideBar);