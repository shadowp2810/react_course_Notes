import React, { Component } from "react";

class LoginForm extends React.Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    //prevent submission of form
    e.preventDefault();

    console.log("Submitted");
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>;
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username"></label>
            <input
              autoFocus
              value={this.state.account.username}
              onChange={this.handleChange}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
