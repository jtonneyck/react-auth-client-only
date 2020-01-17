# Authentication with React (Client Only)

Authentication with react works a bit differently than with traditional web applications, especially on the client side. The backend-end stays largely the same. During this lesson and the lab we are fully going to focus on the client side. We'll use an api that also provides auth routes. You can find the documentation of that api <a href="https://ih-beers-api.herokuapp.com">here</a>. This is a different beer api than the previous one! Make really sure that you are using the right one.

We are going to make 3 pages: `<Login /> <Signup />` and `<Profile />`. We are also going to make a utilities directory with an auth.js file. auth.js is going to handle all our authentication logic on the front-end. It's in this file where the meat of the lesson is. The file structure of our project is going to be as follows:
```
-src
    -components
        Navbar.js
    -pages
        Profile.js
        Login.js
        Signup.js
    -utils
        auth.js
    App.js
```
For sake of simplicity the scss files are disregarded. The final example code is making use of bulma.

There're are 3 main differences between authentication with React and how we did it in module 2 (traditional web apps).

    1. We have to keep some session data of the user on the client. This will allow us to make, for example, a personalized navbar with the users name in it. There're several techniques to do that. This lesson is going to use localstorage.
    2. We are sending the signup and login data to the backend with axios instead of making use of the default behaviour of forms.
    3. Nowadays the client and the backend are often hosted on different servers. Therefore you can get a lot of CORS errors. We will deal with that by enabling CORS on the front-end. When you're going to create your're own back-end, you need to enable there as well. 

Let's get to it!

The code snippets highlight areas that are different from React code we've seen previously. Code that is essentially the same as previous code we covered is left out. Code that is left out is indicated by '...'. In the signup code snippe all the input fields with the onChange eventhandlers are for example left out. It's also not shown how we're navigating between pages. If you do want to see that code, please checkout <a href="https://github.com/Piepongwong/react-auth-client-only"> this repo </a>. This repo does not include a login form or a decent profile page. Those are left up to you.

/pages/Signup.js
```
    import React, { Component } from 'react' 
    import {signup} from "../utils/auth";
    /* see next code snippet to find out how this works */
    ...

    handleSignupClick(){
        /* 
            we're using a special signup auth function
            that abstracts away the signup logic from this component
        */

        signup(this.state.user)
        .then((reponse)=> {
            this.setState({
                error: null
            }, ()=> {
                this.props.history.push("/user/profile") 
                /* 
                    we're redirecting programatically using the history props that react-router adds to every
                    component rendered through <Route />
                */
            })
        })
        .catch((error)=> {
            this.setState({error: error.response && error.response.data})
        })
    }

    render() .... the form

```

We don't want to have our auth logic scattered around all over the place. We also want to prevent code duplication, but even more importantly: we want to have a separation of concerns. React components are primarily intented to handle the VIEWS, not the app logic.

/utils/auth.js
```
    import Axios from "axios";
    import qs from "qs"; 
    /* 
        qs this is a very small library that turns js objects into 
        the query string format, which is equal to the x-www-form-urlencoded
        format
    */

    const axios = Axios.create({
        baseURL: 'https://ih-beers-api.herokuapp.com/auth/',
        withCredentials: true, // this prevents cors errors, they also could have called it 'withCors'
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    });
-
    export const signup = (user)=>{
        return axios({
            method: "POST",
            url: "signup",
            data: qs.stringify(user) // using qs to put the js object into the right format
        })
        .then((response)=> {        
            setUser(response.data);
        })
    }

    export const setUser = (user)=> {
        /* 
            keeping the user in localStorage
            localStorage can only save strings
        */
        window.localStorage.setItem("user", JSON.stringify(user));
    }

    export const getUser = (user)=> {
        /*
            a function that gets the user out of the localstorage and 
            turns it intor a js object again

            use this function to protect routes, your profile page navbar
            or anywhere else where you need userdata
        */
        return JSON.parse(window.localStorage.getItem("user"));
}
```
This file should also contain a logout function and fetchUser function.

```
import React from 'react';
import {Link} from "react-router-dom";
import {getUser} from "../utils/auth";
/* 
    now we can use the getUser function to personalize our navbar
    if there's no user, you have to show links to the signup and login page
    otherwise you have to show a link to the profile page and logout
*/
const Navbar = () => {
    let user = getUser()

    return ...
```
