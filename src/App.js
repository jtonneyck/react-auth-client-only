import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Redirect, Switch} from "react-router-dom";
import {getUser} from "./utils/auth";
import ProtectRoute from "./components/ProtectRoute";

import {Signup,Profile, Home, PageNotFound} from "./pages";


import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/auth/signup" component={Signup} />
          
          {/* 'basic' route protection */}
          {/* <Route exact path="/user/profile">
            {getUser() ?  <Profile/>:<Redirect to="/" />}d
          </Route> */}
          {/* 'advanced' route protection with reuseable component*/}
        <ProtectRoute path="/user/profile" redirectTo="/">
            <Profile />
        </ProtectRoute>

        <Route path="/" component={PageNotFound} /> 
      </Switch>


    </div>
  );
}

export default App;
