import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange=(e) => {
    // console.log(this.state.username)
    // let t = e.target.name

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit=(e) => {
    e.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.handleLogin(this.state)
    }
  }


  render() {
    return (
      <form
      onSubmit = {e => this.handleSubmit(e)}
      >
        <div>
          <label>
            Username
            <input 
            value={this.state.username}
            onChange ={e => this.handleInputChange(e)}
            id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            value={this.state.password}
            onChange={e=> this.handleInputChange(e)}
            id="password" name="password" type="password" />
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
