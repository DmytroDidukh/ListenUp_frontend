import React from 'react';
import { Label } from 'semantic-ui-react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Time, SvgIcons, Avatar } from '@components';

import './DialogItem.scss';

const DialogItem = ({
    isMe,
    _id,
    user,
    text,
    isRead,
    created_at,
    unreadCount,
    onSelect,
    activeDialogId,
}) => {
    return (
        <div
            onClick={onSelect.bind(this, _id)}
            className={classNames('dialogs__item', {
                'dialogs__item--online': user.online,
                'dialogs__item--active': _id === activeDialogId,
            })}
        >
            <div className='dialogs__item__avatar'>
                <Avatar avatar={user.avatar} username={user.fullName} />
                {console.log(user._id)}
            </div>
            <div className='dialogs__item-info'>
                <div className='dialogs__item-info-top'>
                    <b className='dialogs__item__contact-name'>{user.fullName}</b>
                    <Time className='' date={created_at} />
                </div>
                <div className='dialogs__item-info-bottom'>
                    <span className='dialogs__item__last-message'>{text}</span>
                    {!isMe ? (
                        <SvgIcons type='checked' isRead={isRead && true} />
                    ) : (
                        <Label className='dialogs__item__unread-counter' circular>
                            {unreadCount}
                        </Label>
                    )}
                </div>
            </div>
        </div>
    );
};

DialogItem.propTypes = {
    isMe: PropTypes.bool,
    _id: PropTypes.string.isRequired,
    user: PropTypes.shape({
        _id: PropTypes.string,
        online: PropTypes.bool,
        fullName: PropTypes.string,
    }).isRequired,
    text: PropTypes.string,
    isRead: PropTypes.bool,
    created_at: PropTypes.string,
    unreadCount: PropTypes.number,
    onSelect: PropTypes.func,
    activeDialogId: PropTypes.string,
};

DialogItem.defaultProps = {
    isMe: undefined,
    text: '',
    isRead: undefined,
    created_at: undefined,
    unreadCount: 0,
    onSelect: () => {},
    activeDialogId: undefined,
};

export default DialogItem;
