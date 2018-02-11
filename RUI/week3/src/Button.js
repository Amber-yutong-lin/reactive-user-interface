import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
    handleClick(MyChoice){
      this.props.onClick(this.props.currentChoice)
  }
  render() {
    return (
      <div className="button">
<p onClick={this.handleClick}>{this.props.currentChoice}</p>
      </div>
    );
  }
}
export default Button;
