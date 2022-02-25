import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please register</h2>
            <form>
                <input type="email" placeholder='email...' />
                <br />
                <input type="password" placeholder='password...' />
                <br />
                <button type="submit">Submit</button>
                <br />
                <Link to="/login">Already a user?</Link>
            </form>
        </div>
    );
};

export default Register;