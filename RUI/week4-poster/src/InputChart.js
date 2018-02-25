import React, { Component } from 'react';
import './InputChart.css';

class InputChart extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
       this.props.onChange(e.target.value);
   }

  render() { 
    return (
      <div className="InputChart">
          <p>{this.props.label}</p>
             <input onChange={this.onChange}/>
             </div>

          );
  }
}

export default InputChart;
