import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.search = this.search.bind(this)

    this.state = {
      search : '',
      tweets : [
        {username: 'a', body:'first user'},
        {username: 'a', body:'best user'},
        {username: 'a', body:'third user'},
        {username: 'a', body:'forth user'}
      ]
    };}
          search(e){
           this.setState({
                 search : e.target.value
           });
         }

  render() {
  let copyList = this.state.tweets.slice();
    if (this.state.search !== ''){
      copyList = copyList.filter(tweet => {
        return tweet.body.match(this.state.search)
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
      <input type = "text" onChange = {this.search}/></div>
    );
  }
}

export default App;
