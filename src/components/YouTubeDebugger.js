import React from 'react';
export default class YouTubeDebugger extends React.Component {

  constructor() {
    super()
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

  setBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  setResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    });
    // this.setState({
    //   resolution: Object.assign({}, this.state.settings.video, {
    //     video: '720p'
    //   })
    // });
  }

  render() {
    return (
      <div>

      <button className="bitrate" onClick={this.setBitrate} >
        Set Bitrate {this.state.settings.bitrate}
      </button>

      <button className="resolution" onClick={this.setResolution} >
        Set Resolustion {this.state.settings.video.resolution}
      </button>

      </div>
    )
  }

}
