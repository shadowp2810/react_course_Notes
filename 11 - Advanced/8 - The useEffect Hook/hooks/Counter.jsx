import { Fragment } from "react";

//You cannot call hooks inside loops, conditions and nested functions.

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // const [state, setstate] = useState(initialState)

  useEffect(() => {
    document.title = `${name} has clicked ${count} times!`;
  });

  //Only active when count is changed
  useEffect(() => {
    document.title = `${name} has clicked ${count} times!`;
  }, [count]);

  /*
  componentWillUnmount is usually for cleanup 
  like clearing timer or disconnecting for server. 
  */
  useEffect(() => {
    document.title = `${name} has clicked ${count} times!`;
    //Makes it equivalent to componentWillUnmount for cleanup
    return () => {};
  });

  //Having a dependency ensures its not continuouly being called
  useEffect(() => {
    document.title = `${name} has clicked ${count} times!`;
    return () => {};
  }, []);

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
