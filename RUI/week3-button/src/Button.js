import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
    handleClick(MyChoice){
      this.props.onClick(this.props.label)
  }
  render() {
    const newClass = this.props.myChoice ? 'myChoice': 'notMyChoice';
    return (
      <div>
<button className = {'button ' + newClass} onClick={this.handleClick}>{this.props.label}</button>
      </div>
    );
  }
}
export default Button;
