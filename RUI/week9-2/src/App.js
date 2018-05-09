import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage"
import PersonalDetail from "./PersonalDetail"
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
     <div>
       <Route exact path = "/" component = {HomePage} />
       <Route path = "/people/:id" component = {PersonalDetail} />


     </div>
    </Router>
    );
  }
}

export default App;
