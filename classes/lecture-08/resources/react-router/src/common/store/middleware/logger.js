export const actionFireLogger = ({}) => (next) => (action) => {
    console.log(`action [${action.type}] was fired with payload: ${action.payload}`)
    return next(action)
}