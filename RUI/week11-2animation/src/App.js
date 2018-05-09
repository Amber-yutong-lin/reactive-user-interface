import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.toggleBox = this.toggleBox.bind(this);
    this.state = {
      showBox: false
    };
  }

  ToggleBox(){
    this.setState({
      showBox: !this.state.showBox
    })
  }
  render() {
    return (
      <div className="App">
        <button onclick = {this.ToggleBox} >Please Click Me!!!!</button>
        <CSSTransition
          in={this.state.showBox}
          timeout={500}
          classNames="box"
          unmountOnExit
        >
        <div className="box">你好</div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
