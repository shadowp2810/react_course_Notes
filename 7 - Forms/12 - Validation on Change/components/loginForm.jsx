/*

*/

import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends React.Component {
  state = {
    account: { username: "", password: "" },
    error: {},
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required.";
    if (account.password.trim() === "")
      errors.password = "Password is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    //prevent submission of form
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;

    console.log("Submitted");
  };

  validateProperty = (name, value) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required";
      // ...
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
      // ...
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <h1>Login</h1>;
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
