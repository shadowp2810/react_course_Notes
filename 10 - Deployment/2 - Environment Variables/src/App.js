/*
The parameters set in config.json are not environemnt specific.
Every application goes through multiple environments. Development, Test, Production.
Sometimes we want the value of these parameters to be different across different environments.
On development machine we want development backend, 
but when we deploy to production environment we want to use a production backend with real data.
This config.json won't help with that.
Appications made with create-react-app have build in support for environment specific variables.
In root of application we create a new file, ".env".
This this environment file we can store all environemnt variables with default values.
We can also have envireonment specific files.
".env.development", ".env.test" and ".env.production".
In ".env.development" we store all our development environemnt variables.
All variables have a key and value.
Keys should start with "REACT_APP_"
In index.js, if we do a console.log(process.env), where process reprecents all current processes,
and env is proprety of object with represents all environment variables,
which can be set directly in terminal or comes from .env config files.
The expressions that represent an environemtn variable 
are replaced by the actual value of that envornment variable during build time.

*/

import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import auth from "./services/authService";
import Movies from "./component/movies";
import MovieForm from "./component/movieForm";
import Customers from "./component/customers";
import Rentals from "./component/rentals";
import NotFound from "./component/notFound";
import NavBar from "./component/navBar";
import LoginForm from "./component/loginForm";
import RegisterForm from "./component/registerForm";
import Logout from "./component/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  //initialize state to empty object
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    //setting state will cause app component to rerender
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/logout" component={Logout}></Route>
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={user} />}
            ></Route>
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
