import React from 'react';
import './login-page.styles.css'
import { ToastContainer, toast } from 'react-toastify';

class LoginPage extends React.Component {
    state = {
        email: "admin@gmail.com",
        password: "123123",
        enteredEmail: "",
        enteredPassword: "",
    }

    componentDidMount() {
        let storageData = localStorage.getItem('profileData')
        let userInfo = JSON.parse(storageData)
        if (userInfo)
            this.setState({ email: userInfo.email, password: userInfo.password })
        const inputs = document.querySelectorAll('.input')

        inputs.forEach(element => {
            element.addEventListener('focus', this.focusFunc)
            element.addEventListener('blur', this.blurFunc)
        });
    }

    componentWillUnmount() {
        const inputs = document.querySelectorAll('.input')

        inputs.forEach(element => {
            element.removeEventListener('focus', this.focusFunc)
            element.removeEventListener('blur', this.blurFunc)
        });
    }

    focusFunc() {
        let parent = this.parentNode.parentNode;
        parent.classList.add('focus')
    }

    blurFunc() {
        let parent = this.parentNode.parentNode;
        if (this.value === "")
            parent.classList.remove('focus')
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.enteredPassword === this.state.password && this.state.enteredEmail === this.state.email) {
            this.props.history.push('dashboard')
            localStorage.setItem('isLoggedIn', true);
        } else
            toast.error('Login Failed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <ToastContainer />
                <div className="login-container">
                    <h1>Login to Dashboard</h1>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-div">
                                <div className="i">
                                    <i className="fa fa-user"></i>
                                </div>
                                <div>
                                    <h5>Email</h5>
                                    <input type="email" className="input" name="enteredEmail" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="input-div">
                                <div className="i">
                                    <i className="fa fa-lock"></i>
                                </div>
                                <div>
                                    <h5>Password</h5>
                                    <input type="password" className="input" name="enteredPassword" onChange={this.handleChange} />
                                </div>
                            </div>
                            <input type="submit" className="btn" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;