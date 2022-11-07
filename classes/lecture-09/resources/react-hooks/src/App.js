import React, {
    useState, // context state manager
    useEffect, // side-effect provider
    useRef, // ref for working with dom item
    useReducer, // advanced context state manager
    useCallback, // callback with deps
    useContext, // context provider
    useMemo, // memoization for any needs
} from "react";

import './App.css'


// function instance for state init
function initialState() {
    console.log('init')

    return new Array(10)
        .fill(null)
        .reduce((acc, _, id) => [...acc, id], [])
}

// Item with side-effect on state change
function Item({state}) {

    useEffect(() => {
        console.log('changed')
    }, [state])

    return <h2> {`[${state.join(' ')}]`} </h2>
}

function App({x, y}) {
    const [state, setState] = useState(initialState)

    const ref = useRef(null)

    const callback = () => {
        ref.current.value = ''
    }

    useEffect(() => {
        // after mounting

        return () => {
            // before unmounting
        }
    }, [])

    useEffect(() => {
        // every render
    })

    const callbackWithDeps = useCallback(callback, [])

    // Example with cleaning the input value by using useRef
    return (
        <div className="App">
            <input type='text' ref={ref}/>
            <button onClick={callback}> clear </button>
        </div>
    );
}

export default App;
