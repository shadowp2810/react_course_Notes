/*
In class components we have lifecyclecomponets like
componentDidMount()
componentDidUpdate()
componentWillUnmount()

In functional components we have a hook 
which does all the job of all three methods.
useEffect(func)

*/

import "./App.css";
import Users from "./hooks/Users";

function App() {
  return <Users />;
}

export default App;
