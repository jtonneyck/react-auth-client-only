import React, { Component } from 'react'
import {logout} from "../utils/auth";
import Default from "../layout/Default";

class Logout extends Component {

    componentDidMount(){
        logout()
            .then(()=> {
                this.props.history.push("/");
            })
            .catch((err)=> {
                // handle error;
            })
    }

    render() {
        
        return (
            <Default>
                <h1>Logging out...</h1>
            </Default>
        )
    }
}

export default Logout
