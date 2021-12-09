import React, { Component } from "react";

class Counter extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value != this.props.counter.value) {
      //AJAX call and get new data from server.
    }
  }

  /*
  componentWillUnmount method is called 
  just before component is removed from DOM.
  React will compare the virtual DOM with old one,
  it figures out one of our counters is removed,
  so then it will call componentWillUnmount
  before removing this counter from the DOM.
  This gives us the opportunity to do any kind of cleanup.
  So if you have timers or listeners you can clean those up.
  Before component is removed from DOM.
  Otherwise we end up with memory leaks.
   */
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
