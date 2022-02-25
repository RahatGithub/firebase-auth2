import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {

    const {user} = useAuth();

    return (
        <div>
            <h3>Home</h3>
            <h4>User: <span className='display-username'>{user.displayName}</span></h4>
        </div>
    );
};

export default Home;