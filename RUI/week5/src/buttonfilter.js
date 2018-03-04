import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.button1 = this.button1.bind(this)
    this.button2 = this.button2.bind(this)
    this.state = {
      button : '',
      tweets : [
        {username: 'a', body:'first user'},
        {username: 'a', body:'best user'},
        {username: 'a', body:'third user'},
        {username: 'a', body:'forth user'}
      ]
    };}
    button1(){
      this.setState({
          button : '1',
        });
    }

    button2(){
      this.setState({
          button : '2',
        });
    }


  render() {
    let copyList = this.state.tweets.slice();
    if (this.state.button === '2'){
      copyList = copyList.filter(tweet => {
        return tweet.body.match('best')
      })
    }
    const list = copyList.map((tweet, i) => {
      return (
        <div key = {i}>{tweet.username}, {tweet.body}</div>
      );
    });
    return (
      <div className="App">
        {list}
      <button onClick = {this.button1}>show all</button>
      <button onClick = {this.button2}>show best</button></div>
    );
  }
}

export default App;
