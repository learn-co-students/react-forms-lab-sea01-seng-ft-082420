import React from "react";
import LoginForm from "./LoginForm";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      chars: 0,
      message: ""
    };
  }

  handleChange=(e) => {
   
    this.setState({
      chars: e.target.value.length,
      message: e.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        value={this.state.message}
        onChange={e => this.handleChange(e)}
        name="message" id="message" />
        <p>remaining chars: {this.state.maxChars - this.state.chars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
