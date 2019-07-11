// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor(props) {
        super(props);
     
        // Define the initial state:
        this.state = {
            timesClicked: 0
        };
    }
        handleClick = () => {
            
            this.setState({
              timesClicked: this.state.timesClicked +1 
            });
            }
    
    render() {
        console.log(this.state.timesClicked)
        return (
            
            <button onClick={ this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}