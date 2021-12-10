import { Fragment } from "react";

//You cannot call hooks inside loops, conditions and nested functions.

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // const [state, setstate] = useState(initialState)

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
