/*
The current tree is App->MoviePage->MovieList
If App component stores currentUser,
and if you want to access it in MovieList component,
you need to create a context object.
*/

import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/UserContext";

export default class App extends Component {
  state = { currentUser: { name: "Mosh" } };

  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <div>
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}
