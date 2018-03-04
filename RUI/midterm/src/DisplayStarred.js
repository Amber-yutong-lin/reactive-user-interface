import React, { Component } from 'react';
import './DisplayStarred.css';

class S extends Component {
  constructor(props){
    super(props);
    this. = this. .bind(this)

    this.state = {

    };}
          add(e){
           this.setState({
                 search : e.target.value
           });
         }

  render() {

    return (
      <div className="App">
       <DisplayNormal/>
      </div>
    );
  }
}

export default AddContact;
