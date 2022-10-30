import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'

import { rootReducer } from '../common/store/reducers/root-reducer'
import { actionFireLogger } from '../common/store/middleware/logger'

import Layout from '../components/layout/layout'
import HomePage from '../pages/home.page'
import ItemPage from '../pages/item.page'
import ItemsPage from '../pages/items.page'
import ManagerPage from '../pages/manager.page'

import styles from './app.module.scss'

const store = createStore(rootReducer, applyMiddleware(actionFireLogger))

function App() {
    return (
        <Provider store={store}>
            <div className={styles.applicationHolder}>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index path='/' element={<HomePage/>}/>
                        <Route path='/items/:id' element={<ItemPage/>}/>
                        <Route path='/items' element={<ItemsPage/>}/>
                        <Route path='/manager' element={<ManagerPage/>}/>
                        <Route path='*' element={<Navigate to='/'/>}/>
                    </Route>
                </Routes>
            </div>
        </Provider>
    )
}

export default App;
