import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectUser } from '../redux/Reducers/auth/selector';

const PrivateRoute = ({component: Component, ...rest }) => {
    const isAuthorized = useSelector(store => selectUser(store));
    const location = useLocation();

    return (
        <Route {...rest}>
            {
                isAuthorized
                    ? <Component />
                    : <Redirect to={{ pathname: "/auth", state: { from: location } }} />
            }
        </Route>
    )
}

export default PrivateRoute;
