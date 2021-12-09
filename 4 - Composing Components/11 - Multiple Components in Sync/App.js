import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

/* 
You want to lift the state 
of the counters component 
to the App component 
so it can be passed to nav bar 
or all children using props.
*/

class App extends Component {
    render() { 
        return (        
            <React.Fragment>
                <NavBar />
                <main className="container">
                    <Counters />
                </main>
            </React.Fragment>
        );
    }
}
 
export default App;