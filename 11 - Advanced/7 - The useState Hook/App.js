/*
Functional componets are stateless
and Class components are stateful.
If you want to store states you have to user classes.
But since React 16.8 we got a new feature called hooks,
which allow us to build functional components 
with all the features they have in class components.
So we can use state and lifecycle features of class components.
So why was hooks introduced?
Classes are a bit difficult to understand.
And JS classes are different from classes in other languages.
They are essentially syntactic sugar over constructor componenets.
The other issue is this keyword is confusing.
The third issue is writing class components requres boilerplate code,
that is creating a class that extents react.component,
and a constructor and so on.
*/
import "./App.css";
import Counter from "./hooks/Counter";

function App() {
  return <Counter />;
}

export default App;
