/*
All these details have poluted our app module,
which should be the root of our application.
The other issue is this is hard to reuse on another react project.
It would be nicer we have a seperate HTTP module 
like HTTP service module and all the code was in that module.
We hide axios behind the http module.
So in future if we decide to use a different library than axios,
there is only a single place we need to make that change,
that is the http serive module.
In our App module we don't care what library we are using.
*/

import React, { Component } from "react";
import http from "./services/httpService";
import "./App.css";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await http.get(apiEndpoint);

    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(apiEndpoint, obj);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  /*
  Axios(http) has two methods for updating data,
  patch to update one or more properties,
  put to update all properties.
  */
  handleUpdate = async (post) => {
    post.title = "UPDATED"; //anything we want
    await http.put(apiEndpoint + "/" + post.id, post);

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
      await http.delete(apiEndpoint + "/" + post.id);
      //throw new Error("")
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted.");

      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return {};
  }
}
