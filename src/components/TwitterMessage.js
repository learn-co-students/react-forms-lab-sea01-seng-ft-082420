import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      tweet: e.target.value
    })
  }

  render() {
    const {maxChars} = this.props
    let remainingChars = maxChars - this.state.tweet.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.tweet}/>
        <p>Remaining Characters: {remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
