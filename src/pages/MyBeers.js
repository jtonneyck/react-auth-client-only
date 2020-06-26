import React, { Component } from 'react'
import {getMyBeers} from "../utils/beer";

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
            <div>
                {
                    this.state.beers ? 
                        this.state.beers.map((beer)=> <h1>{beer.name}</h1>):
                        <h1>Loading...</h1>
                }
            </div>
        )
    }
}

export default MyBeers
