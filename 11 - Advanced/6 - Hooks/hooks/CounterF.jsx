import { Fragment } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Fragment>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </Fragment>
    </div>
  );
}

export default Counter;
