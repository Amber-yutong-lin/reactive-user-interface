import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
    handleClick(){
      this.props.onClick(this.props.label)
  }
  render() {

    return (
      <div>
<button onClick={this.handleClick}>{this.props.label}</button>
      </div>
    );
  }
}
export default Button;
