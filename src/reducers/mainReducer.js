export default (state = {}, action) => {
    switch (action.type) {
        case 'CALL_DATA':
            // Call the data through fetch API
            return {
                result: action.payload
            }
        default:
            return state
    }
}