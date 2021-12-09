/*
Currently when we do CRUD opterations there is a short delay to see changes reflected.
The reason is because in our current implementation 
we are calling the server first and then we are updating the view or UI.
With this implementation, if an error occurs, while calling the server,
the rest of function will not be executed.
This is called Pessimistic Update.
We are not sure if call to server will succeed or fail.
In costrast, we have Optimistic Update.
Where we assume most of time call to server succeeds. 
Instead of calling the server first and then updating the UI,
we update the UI and then call the server.
Creating the illusion of a fast application.
If this call fails, we can revert the UI back to its previous state.
In react this is easy because we never update the state directly 
so we always have a reference to perious state. 
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
  // Creating the illusion of a fast application.
  handleDelete = async (post) => {
    //First we keep reference to original state
    const originalPosts = this.state.posts;

    //update UI before call to server
    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    //wrap the call in a try catch block
    //in catch block we display error and revent UI to original state.
    try {
      await axios.delete(apiEndpoint + "/" + post.id);
      //throw new Error("")
    } catch (ex) {
      alert("Something failed while deleting a post!");
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return {};
  }
}
