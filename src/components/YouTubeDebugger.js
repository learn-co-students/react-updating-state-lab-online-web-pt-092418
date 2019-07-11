// Code YouTubeDebugger Component Here
import React, { Component} from 'react'

export default class YouTUbeDebugger extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }
    handleClick = () => {
        this.setState({
            settings:{
                ...this.state.settings, 
                bitrate: 12
            }
            })
        }
    handleResolutionClick = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                video: {resolution: '720p'}
            }
        })
    }
    

    render() {
        console.log(this.state.settings)
        return (
            <div>
            <button className = 'bitrate' onClick = {this.handleClick}> change bit rate   </button>
            <button className = 'resolution' onClick = {this.handleResolutionClick}> Change Resolution</button>
            </div>
        )
    }
}