import React from "react";

import './App.css';

import data from '../assets/data.json'

import {Clock} from "../components/clock/clock";
import {ExampleData} from "../components/example-data/example-data";
import {DataChanges} from "../components/data-changes/data-changes";

function App() {
    return (
        <div className="App">
            <Clock />
            <DataChanges/>
            <ExampleData dataSize={data.length}/>
        </div>
    );
}

export default App;
