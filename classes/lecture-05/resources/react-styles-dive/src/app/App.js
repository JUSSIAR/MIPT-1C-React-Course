import React, {useState} from "react";

import './App.css';

import {List} from "../components/list/list";
import {Grid} from "../components/grid/grid";
import {Flex} from "../components/flex/flex";

function App() {
    const [themeFlag, setThemeFlag] = useState(false)

    const listener = () => {
        setThemeFlag(!themeFlag)
    }

    const theme = themeFlag ? 'dark' : 'light'

    return (
        <div className="App">
            <input type="checkbox" checked={themeFlag} onChange={listener}/>
            <List theme={theme}/>
            <Flex/>
            <Grid/>
        </div>
    );
}

export default App;
