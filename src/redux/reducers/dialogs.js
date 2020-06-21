const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'DIALOGS:SET_ITEMS':
            return {
                items: action.payload
            }
        default:
            return state;
    }
}
