/*
Product component 
on react chrome dev tools
has props history, location, match.
These come from Home component.
If the path matches it injects those three props.
history to work witth history object in browser,
to send user to different page,
location which represents where app is now.
match contains information about how this url matched
the path we set in route,
it has properties isexact, path, url, params.
Can look at react router documentation 
to learn more about these objects.
*/

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
