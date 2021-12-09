/*
In react we should not access elements in such ways as 
const username = document.getElementByID('username').value;
We should never work with the document object.
The whole point of react is to 
put an abstraction over document object model or DOM.
So we we do need to access element, we use refs.
As a rule of thumb we need to minimize the use of refs,
and use it only when we know what we are doing.
Like managing focus of an input field 
and get a reference of that dom element,
or working with animations or third party dom libraries.
*/

import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import MovieForm from "./component/MovieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
