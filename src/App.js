import React from 'react';
import './App.css';
import {Route, Redirect, Switch} from "react-router-dom";
import ProtectRoute from "./components/ProtectRoute";
import {Signup, Logout, Profile, Login, Home, PageNotFound, MyBeers} from "./pages";

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
        <ProtectRoute path="/user/my-beers" redirectTo="/" component={MyBeers}/>

        <Route path="/auth/login" component={Login} /> 
        <Route path="/auth/logout" component={Logout} /> 
        <Route path="/" component={PageNotFound} /> 
      </Switch>


    </div>
  );
}

export default App;
