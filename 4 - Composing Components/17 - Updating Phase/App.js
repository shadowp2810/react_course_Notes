/*
  Update phase happens when state of props of component changes.
  Updates state of app component
  which schedules a call to render method,
  so app is going to be rendered,
  which means all its children will be rendered as well.
  When entire component tree is rendered,
  that doesn't mean entire dom is updated.
  Only updates virtual DOM.
  At this point react has old and new virutal DOM.
  componentDidUpdate method is called after component is updated,
  so you have new state and props.
  We can compare this state with ond state
  or new props with old props.
  And if there is a change, 
  we can make an AJAX request to get new data from server. 
  If there are no changes 
  you don't want to make an additional AJAX request.
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
