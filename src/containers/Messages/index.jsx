import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {messagesActions} from 'redux/actions'
import {Messages} from 'components';

const MessagesContainer = ({userId}) => {
    const {items, activeDialogId} = useSelector(({dialogs, messages}) => ({
        items: messages.items,
        activeDialogId: dialogs.activeDialogId
    }));
    const dispatch = useDispatch();
    const [isDialogsLoading, setIsDialogsLoading] = useState(true);

    const {fetchMessages} = messagesActions;
    console.log(activeDialogId)

    useEffect(() => {
        dispatch(fetchMessages(activeDialogId))
    }, [activeDialogId])

    return (
        <Messages
            messages={items}
            isDialogsLoading={isDialogsLoading}
        />
    )
};

export default MessagesContainer;
