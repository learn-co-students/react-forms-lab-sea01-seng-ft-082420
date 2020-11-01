import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleChange = (event) => {
    // console.log(event.target.value.length)
    this.setState({
      ...this.state,
      input: event.target.value,
      maxChars: this.props.maxChars - event.target.value.length
    })
    
  }


  render() {
    // console.log(this.props)
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={event => this.handleChange(event)}
          type="text"
          name="message"
          id="message"
          // value={this.state.message}
        />
          <h3>{this.state.maxChars}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
