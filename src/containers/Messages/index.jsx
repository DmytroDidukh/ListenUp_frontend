import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { messagesActions } from 'redux/actions';
import { Messages } from 'components';

const MessagesContainer = () => {
    const { items, activeDialogId, isLoading } = useSelector(({ dialogs, messages }) => ({
        items: messages.items,
        isLoading: messages.isLoading,
        activeDialogId: dialogs.activeDialogId,
    }));
    const dispatch = useDispatch();
    const messagesRef = useRef(null);

    const { fetchMessages } = messagesActions;

    useEffect(() => {
        activeDialogId && dispatch(fetchMessages(activeDialogId));
    }, [activeDialogId, dispatch, fetchMessages]);

    useEffect(() => {
        messagesRef.current && messagesRef.current.scrollTo(0, 9999);
    }, [items]);

    return <Messages blockRef={messagesRef} messages={items} isLoading={isLoading} />;
};

export default MessagesContainer;
