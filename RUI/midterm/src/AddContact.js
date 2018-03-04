import React, { Component } from 'react';
import './AddContact.css';

class AddContact extends Component {
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

      </div>
    );
  }
}

export default AddContact;
