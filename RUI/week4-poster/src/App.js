
import React, { Component } from 'react';
import './App.css';
import DisplayingChart from './DisplayingChart';
import InputChart from './InputChart';


class App extends Component {
  constructor(props) {
    super(props);
    this.onEventNameChange = this.onEventNameChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);

    this.state = {
      eventName: "IMA SPRING SHOW 2018",
      location: "NYU Shanghai, 9th floor",
      time: "May 11th, 5pm - 7pm"

    };
  }

onEventNameChange(eventName){
  this.setState({
      eventName: eventName,
    });
  }
  onLocationChange(location){
    this.setState({
        location: location,
      });
    }

    onTimeChange(time){
      this.setState({
          time: time,
        });
      }
  render(){

 const eventName = this.state.eventName
 const location = this.state.location
  const time = this.state.time

    return(
  <div className="App">
  <div className = 'InputChart'> <InputChart
    onChange = {this.onEventNameChange} label = 'Event name'/>
    <InputChart
     onChange = {this.onLocationChange} label = 'Location'/>
     <InputChart
      onChange = {this.onTimeChange} label = 'Time'/></div>

     <div className = 'DisplayingChart'>
    <DisplayingChart  display1 = {eventName}/>
    <DisplayingChart display2 = {location}/>
    <DisplayingChart display3 = {time}/></div>
   </div>
 );
}
  }
export default App;
