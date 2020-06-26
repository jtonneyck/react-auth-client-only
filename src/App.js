import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Redirect, Switch} from "react-router-dom";
import {getUser} from "./utils/auth";
import ProtectRoute from "./components/ProtectRoute";
import defaultCOmponent, {Signup, Logout, Profile, Login, Home, PageNotFound, MyBeers} from "./pages";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/auth/signup" component={Signup} />
          
          {/* 'basic' route protection */}
          {/* <Route exact path="/user/profile">
            {getUser() ?  <Profile/>:<Redirect to="/" />}
          </Route> */}
          {/* <Route exact path="/user/profile" component={Profile}/> */}

          
          {/* 'advanced' route protection with reuseable component*/}
        <ProtectRoute path="/user/profile" redirectTo="/" component={Profile}/>
        <ProtectRoute path="/user/friends" redirectTo="/youdonthaveanyfriends" component={Profile}/>
        <ProtectRoute path="/user/my-beers" redirectTo="/youdonthaveanyfriends" component={MyBeers}/>

        <Route path="/auth/login" component={Login} /> 
        <Route path="/auth/logout" component={Logout} /> 
        <Route path="/" component={PageNotFound} /> 
      </Switch>


    </div>
  );
}

export default App;
