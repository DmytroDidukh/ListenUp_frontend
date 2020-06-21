import {axios} from 'core';

export  default {
    getAllByDialogId: () => axios.get('/messages')
};
