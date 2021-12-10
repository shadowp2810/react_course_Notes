import React, { useState, Fragment } from "react";
import useDocumentTitle from "./useDocumentTitle";

//You cannot call hooks inside loops, conditions and nested functions.

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // const [state, setstate] = useState(initialState)

  useDocumentTitle(`${name} had clicked ${count} times!`);

  return (
    <div>
      <Fragment>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <div>
          {name} has clicked {count} times
        </div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </Fragment>
    </div>
  );
}

export default Counter;
