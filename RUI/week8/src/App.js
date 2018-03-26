import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.onNewContact = this.onNewContact.bind(this);

    let initial = localStorage.getItem('appData');
    if (initial){
      this.state = JSON.parse(initial);
    }else{
      this.state = {
        contacts:[

        ]
      };
    }
    }

  onNewContact(name, email) {
    const copy = this.state.contacts.slice();
    copy.push({
      name: "Amber",
      email: "Amberlin@qq.com",
      id:this.state.contacts.lengh
    });

    this.setState({
      contacts: copy
    });
  }
  componentDidUpdate() {
      localStorage.setItem('appData', JSON.stringify(this.state));
    }
  render() {
    const list = this.state.contacts.map(p => (
      <p key={p.id}>
        {p.name} - {p.email}
      </p>
    ));

    return (
      <div className="App">
        <h1>The list</h1>
        {list}
       <button onClick={this.addContact}>Add Contact</button>
      </div>
    );
  }
}

export default App;
