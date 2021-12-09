import React, { Component } from "react";

class LoginForm extends React.Component {
  username = React.createRef();

  // componentDidMount() {
  //   this.username.current.focus();
  // } , alternatively we use autoFocus

  handleSubmit = (e) => {
    //prevent submission of form
    e.preventDefault();

    //Call the server
    //In react we should not be working with domcument object directly.
    //const username = document.getElementByID('username').value;
    const username = this.username.current.value;

    console.log("Submitted");
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
              ref={this.username}
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
