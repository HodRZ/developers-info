export const devReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_DEVELOPER': {
            return [
                ...state,
                action.payload
            ]
        }
        case 'REMOVE_DEVELOPER': {
            return state.filter(dev => dev.id !== action.payload)
        }



        default:
            throw Error('Unknown action: ' + action.type)
    }
};

export const devActions = {
    ADD: 'ADD_DEVELOPER',
    REMOVE: 'REMOVE_DEVELOPER'
}