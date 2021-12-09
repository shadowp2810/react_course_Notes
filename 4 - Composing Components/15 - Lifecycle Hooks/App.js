/*
Our components go through 
a few phases during thier lifecycle,
first phase in the mounting phase,
and is when an instance of component is created,
and inserted into dom.
There are few methods we can add 
to dom, and react can automatically call them.
We refer to these methods as lifecycle hooks,
and allow us to hook into certain moments,
during the lifecycle of a component,
and do something.
In the mounting phase we have three lifecycle hooks.
consructor, render and componentDidMount.
React will call them in order.
The second lifecycle phase is the Update phase.
And this happens with state 
or props of component get changed.
In this stage we have two lifecycle hooks.
render and componentDidUpdate.
React will call them in order.
The last phase is Unmounting phase.
This is when component is removed from DOM,
such as when we delete a counter.
In this stage the life cycle hook 
is componentWillUnmount.
These lifecycle hooks are the frequenctly used ones.
There are more but 90% of time you will use these.
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
        return (        
            <React.Fragment>
                <NavBar 
                    totalCounters = {this.state.counters.filter(c => c.value > 0).length}
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