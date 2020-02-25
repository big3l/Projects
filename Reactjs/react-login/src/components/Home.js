import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions";

let fetchedData = [];
class Home extends Component {
  handleRedirect = () => {
    if (this.props.loggedIn) {
      return null;
    } else {
      return <Redirect to="/" />;
    }
  };
  fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        return response.json();
      })
      .then(data => {
        fetchedData = data;
      });

    fetchedData.map(post => {
      return <div>{post.title}</div>;
    });
  };

  render() {
    return (
      <div>
        {this.handleRedirect()}
        <h1>You are logged in as</h1>
        <h2>{this.props.user.username}</h2>
        <button onClick={this.props.LogoutUser}>Log Out</button>
        <button onClick={this.props.delState}>Remove Local Storage</button>
        {this.fetchPosts()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.loggedUser,
  loggedIn: state.loggedIn
});

const mapDispatchedToProps = dispatch => ({
  LogoutUser: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchedToProps)(Home);
