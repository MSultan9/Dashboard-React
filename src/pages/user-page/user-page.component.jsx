import React from 'react';
import './user-page.styles.css';
import { ToastContainer, toast } from 'react-toastify';

class UserPage extends React.Component {
    state = {
        name: "John",
        phone: "01-123346",
        email: "admin@gmail.com",
        password: "123123",
        role: "employee"
    }

    componentDidMount() {
        let storageData = localStorage.getItem('profileData')
        let userInfo = JSON.parse(storageData)
        if (userInfo)
            this.setState(userInfo)
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let error = false
        let keys = Object.keys(this.state)
        for (let key of keys) {
            if (this.state[key].trim() === "") {
                toast.error('Please Fill All Fields', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                error = true
                break;
            }
        }
        if (error === false) {
            toast.success("Profile Updated", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            localStorage.setItem('profileData', JSON.stringify(this.state));
        }
    }

    render() {
        return (
            <div className="form-container">
                <h1>Edit Profile</h1>
                <form className="profile-form" onSubmit={this.handleSubmit}>
                    <div className="form-content">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" value={this.state.name} id="name" name="name" onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" value={this.state.phone} id="phone" name="phone" onChange={this.handleChange} pattern="[0-9]{2}-[0-9]{6}" />
                            <small>Format: 01-123456</small>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" value={this.state.email} id="email" name="email" onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="role">Role</label>
                            <select id="role" name="role" value={this.state.role} onChange={this.handleChange}>
                                <option value="employee">Employee</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                                <option value="manager">Manager</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" value={this.state.password} id="password" name="password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="submit">
                        <input className="btn" type="submit" value="Submit" />
                    </div>
                </form>
                <ToastContainer />
            </div>
        );
    }
}

export default UserPage;