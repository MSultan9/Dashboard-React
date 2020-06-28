import React from 'react';
import { Redirect, Route } from 'react-router-dom';

class AuthenticatedRoute extends React.Component {
    render() {
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            return <Redirect to="/login" />;
        }

        return <Route component={this.props.component} path={this.props.path} />;
    }
}

export default AuthenticatedRoute;