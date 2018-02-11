import React, { Component } from 'react';
import './DisplayingBox.css';

class DisplayingBox extends Component {
  render() {
    return (
      <div className="DisplayingBox">
      You have selected: {this.props.display} Button
      </div>
    );
  }
}

export default DisplayingBox;
