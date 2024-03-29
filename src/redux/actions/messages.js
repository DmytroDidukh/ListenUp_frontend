import {messagesApi} from 'utils/api';

const actions = {
    setMessages: items => ({
        type: 'MESSAGES:SET_ITEMS',
        payload: items
    }),
    setIsLoading: boolean => ({
        type: 'MESSAGES:SET_IS_LOADING',
        payload: boolean
    }),
    fetchMessages: (dialogId) => (dispatch) => {
        dispatch(actions.setIsLoading(true))
        messagesApi.getAllByDialogId(dialogId)
            .then(({data}) => {
                dispatch(actions.setMessages(data))
            })
            .catch(() => dispatch(actions.setIsLoading(false)))
    }
};

export default actions;
