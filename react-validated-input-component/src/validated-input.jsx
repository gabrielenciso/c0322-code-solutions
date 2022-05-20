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
    /**
    // user must enter password
    // user password must have more than 8 chars
    // must contain a number
    // must contain a capital letter
    // must contain a special char
    */
    const currPassword = this.state.password.split('');
    const response = { mark: 'check', color: 'green', errorMessage: [] };
    if (currPassword.length === 0) {
      response.errorMessage = ['A password is required'];
      response.mark = 'xmark';
      response.color = 'red';
      return response;
    }
    if (currPassword.length < 8) {
      response.errorMessage.push('Your password is too short');
      response.mark = 'xmark';
      response.color = 'red';
    }
    if (currPassword.filter(val => {
      return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(val);
    }).length === 0) {
      response.errorMessage.push('Your password must contain a number');
      response.mark = 'xmark';
      response.color = 'red';
    }
    if (currPassword.filter(val => {
      if (!isNaN(val * 1)) return false;
      return val === val.toUpperCase();
    }).length === 0) {
      response.errorMessage.push('Your password must contain a capital letter'); /** number string is equal to lower case and upper case -- fix */
      response.mark = 'xmark';
      response.color = 'red';
    }
    if (currPassword.filter(val => {
      return ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'].includes(val);
    }).length === 0) {
      response.errorMessage.push('Your password must contain a special character');
      response.mark = 'xmark';
      response.color = 'red';
    }

    console.log(response);
    return response;
  }

  handleMark() {

  }

  render() {
    return (
      <div className='container'>
        <form>
          <label htmlFor="password">Password</label>
          <div className='flex'>
            <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
            <div className="center-all">
              <i className={`fa-solid fa-${this.handleErrorMessage().mark} fa-2xl ${this.handleErrorMessage().color}`}></i> {/* change xmark change to color green or red */}
            </div>
          </div>
          <ul className="requirements">
            {
              this.handleErrorMessage().errorMessage.map(error => (
                <li key={error} className='error-message'>
                  { error }
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
