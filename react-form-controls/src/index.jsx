import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state: ', this.state);
    // event.target.elements.username.value = '';
    // event.target.elements.password.value = '';
    // this.setState({
    //   username: '',
    //   password: ''
    // });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username
          <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
        </label>
        <label>
          Password
          <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm/>);
