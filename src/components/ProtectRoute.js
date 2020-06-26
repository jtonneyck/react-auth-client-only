import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {userIsLoggedIn} from "../utils/auth";

const ProtectRoute = (props) => {
    if(!userIsLoggedIn()) return <Redirect to={props.redirectTo}/>
    else return <Route path={props.path} component={props.component} />
}

export default ProtectRoute;
