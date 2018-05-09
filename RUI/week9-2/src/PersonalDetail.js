import React, { Component } from "react";
import { Link } from "react-router-dom";

class PersonDetail extends Component {
    constructor(props){
      super(props);
      this.state = {
        isLoading: true,
        person:null
      };
    }

componentDidMount(){
        fetch("https://swapi.co/api/people/" + this.props.match.params.id + '/')
          .then(response => {
            return response.json();

          })
          .then(json => {
            //console.log(json);
            this.setState({
              isLoading: false,
              person: json
            })
          })
    }
  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    return (
     <div>
       <p> Person Detail:{this.state.person.name}</p>
       <ul>
          <li>Eye color: {this.state.person.eye_color}</li>
          <li>Gender: {this.state.person.gender}</li>
          <li>Height: {this.state.person.height}</li>
          <li>Mass: {this.state.person.mass}</li>
        </ul>
        <Link to="/">Go back</Link>
      </div>
    );
  }
}

export default PersonDetail;
