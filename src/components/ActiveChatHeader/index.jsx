import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { Avatar, Time } from 'components';
import './ActiveChatHeader.scss';

const ActiveChatHeader = () => {
    const { dialogs, activeDialogId } = useSelector(({ dialogs }) => ({
        dialogs: dialogs.items,
        activeDialogId: dialogs.activeDialogId,
    }));

    const activeUserName =
        activeDialogId && dialogs.find((dialog) => dialog._id === activeDialogId).user.fullName;
    const status = false;

    return (
        <section className='chat__active-dialog__header'>
            {activeDialogId && (
                <div className='chat__active-dialog__header__user-info'>
                    <Avatar username={activeUserName} />
                    <div>
                        <strong className='chat__active-dialog__header__user-name'>
                            {activeUserName}
                        </strong>
                        <div
                            className={classNames('chat__active-dialog__header__user-status', {
                                online: status,
                            })}
                        >
                            {status ? (
                                'online'
                            ) : (
                                <>
                                    <span>last seen </span>
                                    <Time date='Tue Oct 27 2009 08:28:44 GMT+0000 (UTC)' />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ActiveChatHeader;
