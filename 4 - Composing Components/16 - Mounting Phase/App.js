/*
Constructor method is called only when instance of class is created
one common usecase is to set the state 
based on the properties they recieve from outside.
When a component is redered, 
all its children are rendered recuresively. 
componentDidMount method is called after the component is rendered into DOM.
It is the perfect place to make AJAX calls to get data from server.
Cannot use lifecycle hooks 
in Stateless Lifecycle functions.
If you need lifecycle hooks then you need to use classes.
Order: 
App Constructor, App Rendered, 
NavBar Rendered, Counters Rendered, 
4 instances of the Counter component Rendered,
finally App Mounted to DOM.
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
    /*
    method is called only when instance of class is created
    one common usecase is to set the state 
    based on the properties they recieve from outside.
    */
    super();
    console.log("App - Constructor (1)");
  }

  componentDidMount() {
    /*
    method is called after the component is rendered into DOM.
    Perfect place to make AJAX calls to get data from server.
    */
    console.log("App - Mounted (3)");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.index0f(counter);
    counters[index] = { ...counter };
    counters[index].value++;

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
    /*
      When a component is redered, 
      all its children are rendered recuresively. 
    */
    console.log("App - Rendered (2)");

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
