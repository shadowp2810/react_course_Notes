import React, { Component, Fragment } from "react";

class Counter1 extends React.Component {
  state = { count: 0 };

  increasedCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <Fragment>
        <div>Count: {this.state.count}</div>
        <button onClick={this.increaseCount}>Increase</button>
      </Fragment>
    );
  }
}

export default Counter1;
