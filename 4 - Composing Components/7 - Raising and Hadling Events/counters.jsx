/*
The component that owns a piece of the state 
should be the one modifying it.
Counter Component will raise the event,
`onDelete`,
and its parent,
Counters Component wil handle the event,
`handleDelete()`.
*/

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = () => {
    console.log("Event Handler Called");
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
