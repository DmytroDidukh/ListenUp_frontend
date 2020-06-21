import {messagesApi} from 'utils/api';

const actions = {
    setMessages: items => ({
        type: 'MESSAGES:SET_ITEMS',
        payload: items
    }),
    fetchMessages: (dialogId) => async (dispatch) => {
        await messagesApi.getAllByDialogId('/messages?_id=' + dialogId)
            .then(({data}) => {
                dispatch(actions.setMessages(data))
            })
    }
};

export default actions;
