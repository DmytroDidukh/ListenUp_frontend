import { dialogsApi } from 'utils/api';

const actions = {
    setDialogs: (items) => ({
        type: 'DIALOGS:SET_ITEMS',
        payload: items,
    }),
    setActiveDialogId: (id) => ({
        type: 'DIALOGS:SET_ACTIVE_DIALOG_ID',
        payload: id,
    }),
    fetchDialogs: () => (dispatch) => {
        dialogsApi.getAll().then(({ data }) => {
            dispatch(actions.setDialogs(data));
        });
    },
};

export default actions;
