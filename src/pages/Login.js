import React, { Component } from 'react'
import DefaultLayout from "../layout/Default";
import {Form} from "../layout/Form";
import {login} from "../utils/auth";

export default class Login extends Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    state = {
        user: {
            username: "",
            password: ""
        },
        error: null
    }

    handleInputChange(e){
        let userCopy = {...this.state.user};
        userCopy[e.target.name] =  e.target.value;
        this.setState({
            user: userCopy
        })
    }

    handleLoginClick(){
        login(this.state.user)
        .then(()=> {
            this.setState({
                error: null
            }, ()=> {
                this.props.history.push("/user/profile")
            })
        })
        .catch((error)=> {
            this.setState({error: error.response && error.response.data})
        })
    }

    render() {
        return (
        <DefaultLayout>
            <Form>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input 
                            onChange={this.handleInputChange}
                            value={this.state.username} 
                            className="input" 
                            name="username" 
                            type="text" 
                            placeholder="email"
                        />
                    </div>
                </div>                       
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input 
                            onChange={this.handleInputChange} 
                            value={this.state.password} 
                            className="input" 
                            name="password" 
                            type="password" 
                            placeholder="password"
                        />
                    </div>
                </div>
                <button 
                    className="is-primary button"
                    onClick={this.handleLoginClick}>
                    Login
                </button>
                {this.state.error && 
                    <p className="has-text-danger">{this.state.error.message || "error"}</p>
                }
            </Form>
        </DefaultLayout>
        )
    }
}
