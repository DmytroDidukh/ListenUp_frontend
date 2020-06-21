import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {messagesActions} from 'redux/actions'
import {Messages} from 'components';

const MessagesContainer = () => {
    const {items, activeDialogId, isLoading} = useSelector(({dialogs, messages}) => ({
        items: messages.items,
        isLoading: messages.isLoading,
        activeDialogId: dialogs.activeDialogId
    }));
    const dispatch = useDispatch();

    const {fetchMessages} = messagesActions;

    useEffect(() => {
        activeDialogId && dispatch(fetchMessages(activeDialogId))
    }, [activeDialogId])

    return (
        <Messages
            messages={items}
            isLoading={isLoading}
        />
    )
};

export default MessagesContainer;
