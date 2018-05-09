import React, { Component } from 'react';

const API_URL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=09e06417f17c43119d1939fada92a940";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      docs: [],

    };
  }

  componentDidMount() {
    fetch(API_URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data =>
        this.setState({ docs: data.response.docs, isLoading: false })
      )
      .catch(error => this.setState({ error: error, isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }


    const article = this.state.docs[0];
    console.log()

    return (
      <div className="App">
        <h1>{article.headline.main}</h1>
        <p>{article.snippet}</p>
        <a href={article.web_url}>Go to article</a>
      </div>
    );
  }
}

export default App;
