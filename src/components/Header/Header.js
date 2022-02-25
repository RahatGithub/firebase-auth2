import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const {user, logout} = useAuth();

    return (
        <div className='header'>
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/place_order">Place Order</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <span className='display-username'>{user.displayName}</span>
            {user?.displayName && <button onClick={logout}>Logout</button>}
        </div>
    );
};

export default Header;