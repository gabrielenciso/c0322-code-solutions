import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      button: false
    };
    this.handleButton = this.handleButton.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  start() {
    this.timerID = setInterval(() =>
      this.tick(), 1000
    );
  }

  stop() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((state, props) => ({
      timer: state.timer + 1
    }));
  }

  handleButton() {
    if (this.state.button) {
      this.stop();
      this.setState({ button: false });
    } else {
      this.start();
      this.setState({ button: true });
    }
  }

  handleButtonIcon() {
    if (this.state.button) {
      return 'pause';
    } else {
      return 'play';
    }
  }

  handleReset() {
    if (this.state.button === false && this.state.timer > 0) {
      this.setState({ timer: 0 });
    }
  }

  getTime() {
    const secondsPerHour = 3600;
    const secondsPerMinute = 60;
    let seconds = this.state.timer;
    let hours = Math.floor(seconds / secondsPerHour);
    seconds -= (secondsPerHour * hours);
    let minutes = Math.floor(seconds / secondsPerMinute);
    seconds -= (secondsPerMinute * minutes);
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  render() {
    return (
      <div className='container'>
        <div className='watch center-all' onClick={this.handleReset}>
          <h2>{this.getTime()}</h2>
        </div>
        <div className='icon center-all'>
          <i className={`fa - solid fa-${this.handleButtonIcon()} fa-2xl`} onClick={this.handleButton}></i>
        </div>
      </div>
    );
  }

}

export default StopWatch;
