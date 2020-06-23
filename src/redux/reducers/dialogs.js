const initialState = {
    items: [],
    activeDialogId: null,
    isLoading: false
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'DIALOGS:SET_ITEMS':
            return {
                ...state,
                items: payload
            }
        case 'DIALOGS:SET_ACTIVE_DIALOG_ID':
            return {
                ...state,
                activeDialogId: payload,
            }
        default:
            return state;
    }
}
