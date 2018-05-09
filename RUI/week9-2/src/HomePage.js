import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      people:[]
    };
  }

  componentDidMount(){
      fetch('https://swapi.co/api/people/')
        .then(response => {
          return response.json();

        })
        .then(json => {
          console.log(json);
          this.setState({
            isLoading: false,
            people: json.results
          })
        })
  }
  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    const list = this.state.people.map(person => {
      const splitUrl = person.url.split('/');
      const id = splitUrl[splitUrl.length-2];


    return(
      <div key = {person.url}>
        <h2>{person.name}</h2>
        <Link to={"/people/"+id}>Visit Person!!!</Link>
        </div>
    );
  });
   return<div>{list}</div>
  }
}

export default HomePage;
