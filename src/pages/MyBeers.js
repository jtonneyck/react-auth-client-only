import React, { Component } from 'react'
import {getMyBeers} from "../utils/beer";
import Default from "../layout/Default";

class MyBeers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: null
        }
    }
    componentDidMount(){
        getMyBeers()
            .then((response)=> {
                this.setState({
                    beers: response.data
                })
            })
            .catch((err)=> {
                // handle error
            })
    }

    render() {
        return (
            <Default>
                {
                    this.state.beers ? 
                        this.state.beers.length === 0? 
                            <h1>You didn't create any beers yet.</h1>:
                            this.state.beers.map((beer)=> <h1>{beer.name}</h1>)
                        :<h1>Loading...</h1>
                }
            </Default>
        )
    }
}

export default MyBeers
