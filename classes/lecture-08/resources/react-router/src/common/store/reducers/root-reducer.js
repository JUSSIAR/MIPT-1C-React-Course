import { combineReducers } from 'redux'
import { themeReducer } from './theme-reducers/theme-reducer.js'
import { dataReducer } from './data-reducers/data-reducer.js'

export const rootReducer = combineReducers({
    themeReducer,
    dataReducer,
})
