import React, { Component } from 'react';
import LoginService from '../services/LoginService';

class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: '',
        isAuthenticated : false
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (e) => {

    e.preventDefault();
    let credentials = {username: this.state.username, password: this.state.password, isAuthenticated: false};
    console.log('credentials => ' + JSON.stringify(credentials));
    LoginService.loginUser(credentials).then((res) => {
            this.setState({ credentials: res.data});
    });
    if (this.state.isAuthenticated === true) {
      this.props.history.push('/home');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpComponent;
