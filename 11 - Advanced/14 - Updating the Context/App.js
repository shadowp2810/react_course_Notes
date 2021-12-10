/*
The current tree is App->MoviePage->MovieList
If App component stores currentUser,
and if you want to access it in MovieList component,
you need to create a context object.
*/

import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";

export default class App extends Component {
  /*
  To update the context we added this method to our App Component
  This method is responsible for updating state
  We then pass the mothod down in context object onLoggedIn: this.handleLoggedIn
  And with that any component in our component tree can call this method.
  */
  handleLoggedIn = (username) => {
    console.log("Getting the user: " + username);
    const user = { name: "Mosh" };
    this.setState({ currentUser: user });
  };

  state = { currentUser: null };

  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handleLoggedIn,
        }}
      >
        <div>
          <MoviePage />
          <Login />
        </div>
      </UserContext.Provider>
    );
  }
}
