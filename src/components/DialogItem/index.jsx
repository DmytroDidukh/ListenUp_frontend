import React from "react";
import classNames from 'classnames'

import {Time, CheckedSvgIcon} from "components";
import './DialogItem.scss'

const DialogItem = (props) => {
    const {user, message} = props.user;

    return (
        <div className={classNames('dialogs__item', {'dialogs__item--online': user.online}) }>
            <div className='dialogs__item__avatar'>
                <img src={user.avatar} alt={user.fullName}/>
            </div>
            <div className='dialogs__item-info'>
                <div className='dialogs__item-info-top'>
                    <b className={'dialogs__item__contact-name'}>{user.fullName}</b>
                    <Time className={''} date={new Date(2020, 4, 15)}/>
                </div>
                <div className='dialogs__item-info-bottom'>
                    <span className={'dialogs__item__last-message'}>{message.text}</span>
                    {
                        message.isRead ? (
                            <CheckedSvgIcon isRead={true}/>
                        ) : (
                            <span className={'dialogs__item__unread-counter'}>{message.unreadCount}</span>
                        )
                    }
                </div>
            </div>

        </div>
    )
};

export default DialogItem;
