/*
Every http request has a property called method 
which specifies the intent of that request. 
The common ones are GET for getting, POST for creating, 
PUT for updating data and DELETE for deleting data.
For security reasons, when an application sends an ajax request to a different domain
the browser always sends an OPTIONS request. 
*/

import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    //pending > resolved (success) OR rejected (failure)
    const promise = axios.get("https://jsonplaceholder.typicode.com/posts");
    const response = await promise;
    //We don't need the above two lines, we can write it cleaner.
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    //  This response has property data,
    // which is the array of posts we get from server.
    // we can use object destructuring and rewrite line as
    const { data: posts } = await axios.get(apiEndpoint);

    this.setState({ posts });
  }

  //as we have used await, we decorate with async, the decoration placement is different.
  //componentDidMount is a method in this class,
  //handleAdd is basically a property we are setting to a function
  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    //get for getting data, post for creating data
    const { data: post } = await axios.post(apiEndpoint, obj);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };
  handleUpdate = (post) => {
    console.log("Update", post);
  };
  handleDelete = (post) => {
    console.log("Delete", post);
  };

  render() {
    return {};
  }
}
