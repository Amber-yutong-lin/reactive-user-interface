import React, { Component } from 'react';

class Article extends Component{
  render(){
   return(
     <div className = "article">
      <date>{this.props.date}</date>
        <div className = 'text'>
      <h2>{this.props.tit}</h2>
      <p>{this.props.summery}</p>
      <h4>{this.props.author}</h4>
        </div>
        <figure>
      <img src={this.props.link}/>
        </figure>
     </div>
)}
};

export default Article;
