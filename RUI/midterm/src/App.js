import React, { Component } from 'react';
import './App.css';
//import AddContact from './AddContact';
//import DisplayNormal from './DisplayNormal';
//import DisplayStarred from './DisplayStarred';
//import Button from './Button';


class App extends Component {
  constructor(props){
    super(props);
    this.search = this.search.bind(this)
    this.button1 = this.button1.bind(this)
    this.button2 = this.button2.bind(this)
    this.state = {
      search : '',
      button : '',
      tweets : [
        {username: 'Amber Lin', tag:'DESIGN', phone:"1234567890"},
        {username: 'Amy Ernst', tag:'PR', phone:"1234567890"},
        {username: 'Angela Luo', tag:'ENGNIEER', phone:"1234567890"},
        {username: 'Alex Mattew', tag:'BANKER', phone:"1234567890"}
      ]
    };}
          search(e){
           this.setState({
                 search : e.target.value
           });
         }

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
      return tweet.tag.match("DESIGN")
    })
  }

    if (this.state.search !== ''){
      copyList = copyList.filter(tweet => {
        return tweet.username.match(this.state.search)
      })
    }

    const list = copyList.map((tweet, i) => {
      return (
        <div key = {i}>{tweet.username}  {tweet.tag}  {tweet.phone} </div>
      );
    });
    return (
      <div className="App">
      <input type = "text" onChange = {this.search}/>
      <div>{list}</div>
      <button onClick = {this.button1}>show all</button>
      <button onClick = {this.button2}>show starred</button>
      </div>
    );
  }
}

export default App;
