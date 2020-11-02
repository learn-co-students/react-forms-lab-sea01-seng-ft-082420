import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (e) => {
    if (e.target.value.length <= this.props.maxChars){
      this.setState({message: e.target.value})
    }
  }

  remainingChars = () => {
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
        <input type="text" name="message" id="message" value={this.state.message} onChange={(e) => this.handleChange(e)} />
        {this.remainingChars()}
      </div>
    );
  }
}

export default TwitterMessage;
