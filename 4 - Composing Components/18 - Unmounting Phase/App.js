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

import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
  }

  componentDidMount() {}

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.index0f(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    /*
    Updates state of app component
    which schedules a call to render method,
    so app is going to be rendered,
    which means all its children will be rendered as well.
    */
    this.setState({ counters });
    l;
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
