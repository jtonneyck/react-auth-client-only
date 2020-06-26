import React from 'react';
import {Link} from "react-router-dom";
import {getUser} from "../utils/auth";
import {Fragment} from "react";
const Navbar = () => {
    let user = getUser();
    return (
        <Fragment>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" class="navbar-menu">
                            {user ?
                                <div class="navbar-end">
                                    <div className="navbar-item">
                                        <p>welcome {user.username}</p>
                                    </div>
                                    <Link className="navbar-item" to="/auth/logout">
                                        logout
                                    </Link>
                                    <Link className="navbar-item" to="/user/profile">
                                        profile
                                    </Link>
                                    <Link className="navbar-item" to="/user/my-beers">
                                        my beers
                                    </Link>
                                </div>
                                :
                                <div class="navbar-end">
                                    <Link className="navbar-item" to="/auth/signup">
                                        Signup
                                    </Link>
                                    <Link className="navbar-item" to="/auth/login">
                                        Login
                                    </Link>
                                    <Link className="navbar-item" to="/home">
                                        Home
                                    </Link>
                                </div>
                            }
                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;
