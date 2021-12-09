/*
There are Expected and Unexpected errors.
Expected errors are erros that our API endpoints predict and return.
Deleting a post with an invalid ID, 
a server returns code 404 which means not found. 
400 means bad request, 
which happens when we try to submit a form with invalid data,
that is validation fails on server and server responds.
All these Expected errors are in 400 range, 
and in HTTP protocol we call these CLIENT ERRORS.
and in this case we should display a specific error message to user.
Unexpected errors are erros that should not technically happen under normal circumstances.
Network being down is one, Network being up but server being down is another,
or Network and Server are running by Databse is down,
another is just a bug in application code.
We need to handel these kinds of errors differently.
Firt we need to log them so we can look at them later,
also we should display a generic and frienly message to user.
ex.response is set if we successfully get a response from server.
If Network is down or server crashes we dont get response,
so this property would be null.
ex.request property is set if we can successfully send a request to server,
otherwise would be null.
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
    const { data: posts } = await axios.get(apiEndpoint);

    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await axios.post(apiEndpoint, obj);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  /*
  Axios has two methods for updating data,
  patch to update one or more properties,
  put to update all properties.
  */
  handleUpdate = async (post) => {
    post.title = "UPDATED"; //anything we want
    await axios.put(apiEndpoint + "/" + post.id, post);

    const posts = [...this.state.posts];
    const index = posts.indexOF(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  // We change the UI first now then make call to server.
  handleDelete = async (post) => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await axios.delete(apiEndpoint + "/" + post.id);
      //throw new Error("")
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted.");
      else {
        console.log("Logging the error", ex);
        alert("An unexpected error occured.");
      }
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return {};
  }
}
