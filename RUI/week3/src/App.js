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
    buttonWasClicked(currentChoice){
      this.setState({
      myChoice: currentChoice
  });
}
  render() {
    return (
      <div className='App'>
<Button label='First Button' currentChoice="First" onClick={this.buttonWasClicked} />
<Button label='Second Button' currentChoice="Second" onClick={this.buttonWasClicked} />
<Button label='Third Button' currentChoice="Third" onClick={this.buttonWasClicked} />
<div className = 'box'> <DisplayingBox display={this.state.myChoice}/></div>
      </div>
    );
  }
}
export default App;
