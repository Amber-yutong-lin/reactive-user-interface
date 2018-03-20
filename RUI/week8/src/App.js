import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { name: 'Agnes Jin', email: 'AgnesJin@person.com' },
        { name: 'Amber Lin', email: 'AmberLin@person.com' },
        { name: 'Ying Wang', email: 'YingWang@person.com' }
      ]
    };
    this.onNewContact = this.onNewContact.bind(this);
  }

  onNewContact(name, email) {
    const copy = this.state.contacts.slice();
    copy.push({
      name: name,
      email: email
    });
    this.setState({
      contacts: copy
    });
  }

  render() {
    const list = this.state.contacts.map(p => (
      <p key={p.email}>
        {p.name} - {p.email}
      </p>
    ));

    return (
      <div className="App">
        <h1>The list</h1>
        {list}
        <Form onSubmit={this.onNewContact} />
      </div>
    );
  }
}

export default App;
