/*
As the application grows you may want to create different types of contexts.
Here we add a shopping cart context.
And with this we can go to any child component and consume this context.
*/

import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import CartContext from "./context/cartContext";

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
      <CartContext.Provider value={{ cart: [] }}>
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
      </CartContext.Provider>
    );
  }
}
