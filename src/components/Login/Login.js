import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const {signInUsingGoogle} = useAuth();

    return (
        <div>
            <h3>Please login</h3>
            <button onClick={signInUsingGoogle}>Google Sign in</button>
            <br />
            <Link to="/register">New user?</Link>
        </div>
    );
};

export default Login;