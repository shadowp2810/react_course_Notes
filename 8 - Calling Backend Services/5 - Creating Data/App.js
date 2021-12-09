import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
  state = {
    posts: [],
  };

  /*
  This method returns a promise,
  a promise is an object
  that holds the results of an asyncronous operation. 
  An asyncronous operation is one that will complete in the future.
  When you send a HTTP request there is a delay until you get the HTTP result. 
  It doesn't happen immidetly. a 5ms or 1s or longer.
  This promise object promises to hold the result of an asynchronous operation.
  When promises are first created they are in the pending state.
  When operation is complete that state changes 
  to either resolved in case of success
  or rejected in case of failure. 
  Promise object has a method called then,
  with this method we can get the result of an asynchronous operation.
  But this is the old way of doing things.
  In modern JS we have a keyword called await.
  When we use the await keyword, we need to decorate function with async.
  const response = await get("https://jsonplaceholder.typicode.com/posts");
  This response has property data,
  which is the array of posts we get from server.


  */
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
