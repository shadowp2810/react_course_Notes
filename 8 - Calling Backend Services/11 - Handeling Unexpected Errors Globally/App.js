/*
If we have an error, we should log that error,
and display a generic friendly error message to user.
We dont want to repeat this everywhere.
Which is when we use an interceptor in AXIOS.
In AXIOS we can intercept requests and responses,
and if we have a response with an unexpected error,
we can handle that error in one place.
Log and display in one place.
*/

import React, { Component } from "react";
import axios from "axios";
import "./App.css";

/*
error goes to a code block.
With this implementation,
whenever we have a response with an error, 
this function will be called first
and then control passes to catch block below in handleDelete.
With this we are handeling unexpected errors globally.
We use the try catch block for specifics, 
otherwise we leave it to interceptor to handle globally.
*/
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
    alert("An unexpected error occured");
  }

  return Promise.reject(error);
});

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

      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return {};
  }
}
