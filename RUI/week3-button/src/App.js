import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import DisplayingBox from './DisplayingBox';

class App extends Component {
  constructor(props){
    super(props);
  this.state = {
  myChoice: 'No',
};

  this.buttonWasClicked = this.buttonWasClicked.bind(this);
  }
    buttonWasClicked(label){
      this.setState({
      myChoice: label
  });
}
  render() {
    return (
      <div className='App'>
<Button label='First' myChoice = {this.state.myChoice === "First"} onClick={this.buttonWasClicked}/>
<Button label='Second' myChoice = {this.state.myChoice === "Second"} onClick={this.buttonWasClicked} />
<Button label='Third' myChoice = {this.state.myChoice === "Third"} onClick={this.buttonWasClicked} />
<div className = 'box'> <DisplayingBox display={this.state.myChoice}/></div>
      </div>
    );
  }
}
export default App;
