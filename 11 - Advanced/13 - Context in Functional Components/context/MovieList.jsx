import React, { Component } from "react";
import UserContext from "./UserContext";
import MovieRow from "./MovieRow";

export default class MovieList extends Component {
  //Alternatively can say it here
  //static contextType = UserContext;

  componentDidMount() {
    console.log("context", this.context);
  }

  render() {
    return (
      //Consumer component expects a function as its child
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List {userContext.name} <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

MovieList.contextType = UserContext;
