import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {timesClicked: 0};
  }

  clickHandler = () => {
    // debugger
    this.setState(({timesClicked}) => ({timesClicked: timesClicked + 1
    }));
  };

  render () {
    return (
      <div>
        <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
