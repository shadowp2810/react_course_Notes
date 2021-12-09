/*
Currently user get bundle.js 
which updates all of page and assets.
And on large enterprise applications 
you don't want user to download this 
everytime user navigates from one page to another. 
Gmail is superfast, and entire page is not reloaded everytime. 
We refer to application built this way as 
SPA or Single Page Applications.
In SPA when user navigates from one page to another,
instead of relading the entire page with all its assets,
we should only update what we have in the content area. 

All anchors a in NavBar are replaces with Link.
So no need to redownload the bundle 
everytime user navigates to different page.
Link component prevents additional HTTP requests to server. 
Link component contains an achor, which only updates the url,
and one of the routes will match the current url
and we get a new component in DOM.
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
