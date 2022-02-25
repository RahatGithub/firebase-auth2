import React from 'react';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';



const PrivateRoute = (props) => {

    const {children, ...rest} = props
    const {user} = useAuth();

    return (
        <Route
            {...rest}
            render = { ({location}) => user.displayName ? 
                children 
                : 
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                />}
        >

        </Route>
    );
};

export default PrivateRoute;