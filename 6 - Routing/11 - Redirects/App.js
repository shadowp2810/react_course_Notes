/*
Going to an invalid route we are redirected to homepage.
Using exact we can avoid it.
We want to direct users to a notfound page.
We use Redirect Component.
Now based on the order we made, 
an invalid url takes them to not found page.
` <Route path="/not-found" component={NotFound} />
  <Route path="/" exact component={Home} />
  <Redirect to="/not-found" /> `

Another application of Redirect 
is to move resourses from one part of application to another.
`<Redirect from="/messages" to="/posts" />`
*/

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
            <Route path="/products/:id" component={ProductDetails} />
            <Route
              path="/products"
              render={(props) => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Redirect from="/messages" to="/posts" />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
