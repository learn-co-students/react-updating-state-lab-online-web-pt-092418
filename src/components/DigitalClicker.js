import React from 'react';
export default class DigitalClicker extends React.Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  increment = () => {
    let clickCount = this.state.timesClicked +1
    this.setState({
      timesClicked: clickCount
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>
          {this.state.timesClicked}
        </button>
      </div>
    )
  }
}
