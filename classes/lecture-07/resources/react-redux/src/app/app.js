import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Item from '../components/item/item.jsx'
import Manager from '../components/manager/manager.jsx'

import { rootReducer } from '../common/store/reducers/root-reducer.js'

const store = createStore(rootReducer)

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Item />
                <Manager />
            </div>
        </Provider>
    )
}

export default App;
