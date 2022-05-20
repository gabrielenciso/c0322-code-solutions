import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };

    this.handleMenuToggle = this.handleMenuToggle.bind(this);
  }

  handleMenuToggle(event) {
    if (event.target.tagName !== 'H2' && event.target.className !== 'modal modal-on' && event.target.tagName !== 'I') {
      return;
    }

    const toggleState = this.state.toggle;
    if (toggleState) {
      this.setState({ toggle: false });
    } else {
      this.setState({ toggle: true });
    }
  }

  handleHidden() {
    if (this.state.toggle) {
      return { toggle: 'hidden', modal: 'modal-on', menu: 'slide' };
    } else {
      return { toggle: '', modal: '', menu: '' };
    }
  }

  render() {
    return (
      <div className="container">
        <div className={`toggle-menu ${this.handleHidden().toggle}`} onClick={this.handleMenuToggle}>
          <i className="fa-solid fa-bars fa-2xl"></i>
        </div>
        <div className="flex">
          <div className={`modal ${this.handleHidden().modal}`} onClick={this.handleMenuToggle}>
          </div>
          <div className={`menu ${this.handleHidden().menu}`} onClick={this.handleMenuToggle}>
            <h1>Menu</h1>
            <h2>About</h2>
            <h2>Get Started</h2>
            <h2>Sign In</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
