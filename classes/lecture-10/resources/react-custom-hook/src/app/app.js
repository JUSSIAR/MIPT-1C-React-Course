import React from 'react'
import { useLocalStorage } from '../hooks/use-local-storage'

const init = () => {
    console.log('init')
    return 'initial value'
}

function App() {
    const [state, setState] = useLocalStorage('state2', init)

    return <input onChange={event => setState(event.target.value)} value={state}/>
}

export default App
