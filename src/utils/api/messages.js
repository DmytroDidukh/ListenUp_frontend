import { axios } from '@core';

const messagesApi = {
    getAllByDialogId: (dialogId) => axios.get('/messages?dialog=' + dialogId),
};

export default messagesApi;
