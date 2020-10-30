import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: " ",
      chars: 0
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
      chars: e.target.value.length
    })
  }

  render() {
    let charNumber = this.props.maxChars - this.state.chars
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleChange(event)}  />
        <p>remaining characters: {charNumber}</p>
      </div>
    );
  }
}

export default TwitterMessage;
