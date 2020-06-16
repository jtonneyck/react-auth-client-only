import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {userIsLoggedIn} from "../utils/auth";

const ProtectRoute = (props) => {
    return (
        <Route path="/user/profile">
            {userIsLoggedIn()?
                props.children
                :
                <Redirect to="/home" />
            }
        </Route>
    );
}

export default ProtectRoute;
