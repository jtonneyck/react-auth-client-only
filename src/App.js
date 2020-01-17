import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">

      <Route exact path="/auth/signup" component={Signup} />
      <Route exact path="/user/profile" component={Profile} />

    </div>
  );
}

export default App;
