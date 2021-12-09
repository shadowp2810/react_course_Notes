/*
In a production environment we cannot use console.log.
We must use a logging as a service provider like Sentry.
`npm i raven-js@3.26.4`
You can see all the information about browser and device,
StackTrace, BreadCrumbs.
It tells a whole story about how the error happned.
In breadcrumbs you can see xhr where it shows the https request to endpoints,
then a ui.click event which shows the location of the button,
then shows another xhr xml http request which shows the url,
and the type of error like Netowork error.
In the issues tab you can see list of issues, 
and you can assign it to a person on team.
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
