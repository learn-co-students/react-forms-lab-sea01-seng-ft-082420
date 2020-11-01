import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  handleInputChange = (event) => {
    console.log(event.target.value)
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleValidation = (event) => {
    event.preventDefault()
    console.log(event)
    console.log(this.state)
    console.log(this.state.username)
    console.log(this.state.password)
    if ( !this.state.username || !this.state.password) {
      alert("Must Enter a Username and Password")
    } else {
      this.props.handleLogin(this.state)
    }
  }



  render() {
    return (
      <form onSubmit={event => this.handleValidation(event)}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={event => this.handleInputChange(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={event => this.handleInputChange(event)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
