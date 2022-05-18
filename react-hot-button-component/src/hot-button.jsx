import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state, props) => ({
      counter: state.counter + 1
    }));
  }

  render() {
    const count = this.state.counter;
    let button;
    if (count < 3) {
      button = <button onClick={this.handleClick}>Hot Button</button>;
    } else if (count < 6) {
      button = <button className="blue" onClick={this.handleClick}>Hot Button</button>;
    } else if (count < 9) {
      button = <button className="violet" onClick={this.handleClick}>Hot Button</button>;
    } else if (count < 12) {
      button = <button className="red" onClick={this.handleClick}>Hot Button</button>;
    } else if (count < 15) {
      button = <button className="orange" onClick={this.handleClick}>Hot Button</button>;
    } else if (count < 18) {
      button = <button className="yellow" onClick={this.handleClick}>Hot Button</button>;
    } else {
      button = <button className="white" onClick={this.handleClick}>Hot Button</button>;
    }

    return (button);
  }

}

export default HotButton;
