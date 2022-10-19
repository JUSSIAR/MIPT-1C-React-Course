import { ActionTypes } from '../constants'

export const actionChangeData = (data) => ({
    type: ActionTypes.changeData,
    payload: data
})