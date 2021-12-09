/*
index.js is a high level module,
and we have polluted our application.
A manager which delgates tasks.
The details of this task should not be here.
And we have poluted index.js with details of our loggin service. 
The second issue is our current implementation 
makes it hard to replace raven with another library in the future.
We would have to make several changes across the application to replace Raven.
To solve this issue we need to replace all the logic 
when working with Raven and put it in a seperate module. 
*/

import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import http from "./services/httpService";
import config from "./config.json";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await http.get(config.apiEndpoint);

    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(config.apiEndpoint, obj);

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
    await http.put(config.apiEndpoint + "/" + post.id, post);

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
      await http.delete(config.apiEndpoint + "/" + post.id);
      //throw new Error("")
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted.");

      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button>Add</button>
        <table>
          <thead></thead>
        </table>
      </React.Fragment>
    );
  }
}
