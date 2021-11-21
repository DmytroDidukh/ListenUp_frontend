import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { messagesActions } from '@store/actions';
import { messagesSelectors } from '@store/selectors';
import { Messages } from '@components';

const MessagesContainer = () => {
    const { items, activeDialogId, isLoading } = useSelector(messagesSelectors.getMessages);
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
