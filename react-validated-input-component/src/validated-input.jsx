import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleErrorMessage() {
    const currPassword = this.state.password.split('');
    const response = { mark: 'check', color: 'green', errorMessage: [] };
    if (currPassword.length === 0) {
      response.errorMessage = ['A password is required'];
      response.mark = 'xmark';
      response.color = 'red';
      return response;
    }
    if (currPassword.length < 8) {
      response.errorMessage.push('Password must be more than 8 characters');
      response.mark = 'xmark';
      response.color = 'red';
    }
    if (currPassword.filter(val => {
      return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(val);
    }).length === 0) {
      response.errorMessage.push('Password must contain a number');
      response.mark = 'xmark';
      response.color = 'red';
    }
    if (currPassword.filter(val => {
      if (!isNaN(val * 1)) return false;
      const specialChars = /[~`!#$%^&@*+=\-[\]\\';,/{}|\\":<>?]/g;
      if (specialChars.test(val)) return false;

      return val === val.toUpperCase();
    }).length === 0) {
      response.errorMessage.push('Password must contain a capital letter');
      response.mark = 'xmark';
      response.color = 'red';
    }
    if (currPassword.filter(val => {
      const specialChars = /[~`!#$%^&@*+=\-[\]\\';,/{}|\\":<>?]/g;
      return specialChars.test(val);
    }).length === 0) {
      response.errorMessage.push('Password must contain a special character');
      response.mark = 'xmark';
      response.color = 'red';
    }
    return response;
  }

  render() {
    const { mark, color, errorMessage } = this.handleErrorMessage();

    return (
      <div className='container'>
        <form>
          <label htmlFor="password">Password</label>
          <div className='flex'>
            <input className={color} type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
            <div className="center-all">
              <i className={`fa-solid fa-${mark} fa-2xl ${color}`}></i>
            </div>
          </div>
          <ul className="requirements">
            {
              errorMessage.map((errorMsg, index) => (
                <li key={index} className='error-message'>
                  { errorMsg }
                </li>
              ))
            }
          </ul>
        </form>
      </div>
    );
  }
}

export default ValidatedInput;
