import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      fetched: false
    };
  }
  componentDidMount() {
    fetch("http://localhost:5555/api/hello")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          data: data,
          fetched: true
        });
      });
  }

  render() {
    console.log(this.state.data, "data from the state");
    let message = ":-( no fetch no party";
    if (this.state.fetched) {
      message = this.state.data.message;
    }
    return (
      <div className="App">
        <h1>The data has been fetched!</h1>
        <h2>{message}</h2>
      </div>
    );
  }
}
