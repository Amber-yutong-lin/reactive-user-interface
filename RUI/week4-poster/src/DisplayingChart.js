import React, { Component } from 'react';
import './DisplayingChart.css';

class DisplayingChart extends Component {
  render(){
    return (
      <div >
      <div className = "display1">{this.props.display1}</div>
      <div className = "display2">{this.props.display2}</div>
      <div className = "display3">{this.props.display3}</div>
</div>
    );
  }
}

export default DisplayingChart;
