import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch() {
    const toggle = this.state.on;
    if (toggle) {
      this.setState({ on: false });
    } else {
      this.setState({ on: true });
    }
  }

  buttonState() {
    if (this.state.on) {
      return ['toggle-on', 'switch-on', 'ON'];
    } else {
      return ['toggle-off', 'switch-off', 'OFF'];
    }
  }

  render() {
    const buttonState = this.buttonState();
    return (
      <div className='container'>
        <div className={`toggle ${buttonState[0]}`} onClick={this.handleSwitch}>
          <div className={`switch ${buttonState[1]}`}></div>
        </div>
        <h1>{buttonState[2]}</h1>
      </div>
    );
  }
}

export default ToggleSwitch;
