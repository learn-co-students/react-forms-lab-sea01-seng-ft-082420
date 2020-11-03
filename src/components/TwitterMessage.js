import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  handleChange = e => {
    this.setState({
     input: e.target.value,
    })
  }
  
  render() {
    let charRemain = this.props.maxChars - this.state.input.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.input}/>
        <p>Characters Remaining: {charRemain} </p>
      </div>
    );
  }
}

export default TwitterMessage;
