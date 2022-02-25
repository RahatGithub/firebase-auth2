import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h3>Please login</h3>
            <button>Google Sign in</button>
            <br />
            <Link to="/register">New user?</Link>
        </div>
    );
};

export default Login;