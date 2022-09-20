import './App.css';

// Components import
import {ExampleClass} from "./components/example-class/example-class";
import {Example} from "./components/example/example";

// Hook import for state
import React, {useState} from "react";

/**
 * General component
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    // State usage for counter task with functional component
    const [counter, setCounter] = useState(22)

    const inc = () => {
        setCounter(oldCounter => oldCounter + 1)
    }

    const dec = () => {
        setCounter(oldCounter => oldCounter - 1)
    }

    const arr = [1, 2, 3, 4, 5]

    return (
        <div className="App">
            <ExampleClass/>
            <div>
                {arr.map(item => <Example value={item}/>)}
            </div>

            <h1> Functional component counter task </h1>
            <div>{counter}</div>
            <div className="cont">
                <div className="button" onClick={inc}>+</div>
            </div>
            <div className="cont">
                <div className="button" onClick={dec}>-</div>
            </div>
        </div>
    );
}

export default App;
