import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Menu</header>
          <div className="wrapper">
            <aside>sidebar!!!!</aside>
              <main>
              <p>content 1</p>
              <p>content 2</p>
              <p>content 3</p>
              <p>content 4</p>
              <p>content 5</p>
              </main>
          </div>
      </div>
    );
  }
}

export default App;
