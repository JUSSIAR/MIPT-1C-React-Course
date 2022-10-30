import { initialState } from '../../model/initialState'
import { ActionTypes } from '../../constants'

export const dataReducer = (state = initialState(), action) => {
    switch (action.type) {
        case ActionTypes.changeData: {
            return {
                ...state,
                data: action.payload,
            }
        }
        default: {
            return state
        }
    }
}