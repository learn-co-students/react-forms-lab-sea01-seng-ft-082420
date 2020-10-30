import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    if (event.target.value.length <= this.props.maxChars){
      this.setState({message: event.target.value})
    }
  }

  remainingCharacters = () => {
    if (this.state.message.length < this.props.maxChars-25){
      return <span>{this.props.maxChars - this.state.message.length}</span>
    } else {
      return <span style={{color: 'red'}}>{this.props.maxChars - this.state.message.length}</span>
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.message}/>
        {this.remainingCharacters()}
      </div>
    );
  }
}

export default TwitterMessage;
