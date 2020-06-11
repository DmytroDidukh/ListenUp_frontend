import React from "react";
import classNames from 'classnames'

import {Time, SvgIcons} from "components";
import './DialogItem.scss'

const DialogItem = ({isMe, user, text, isRead, created_at, unreadCount}) => {


    return (
        <div className={classNames('dialogs__item', {'dialogs__item--online': user.online}) }>
            <div className='dialogs__item__avatar'>
                <img src={user.avatar} alt={user.fullName}/>
            </div>
            <div className='dialogs__item-info'>
                <div className='dialogs__item-info-top'>
                    <b className={'dialogs__item__contact-name'}>{user.fullName}</b>
                    <Time className={''} dateMessage={created_at}/>
                </div>
                <div className='dialogs__item-info-bottom'>
                    <span className={'dialogs__item__last-message'}>{text}</span>
                    {
                         !isMe ? (
                            <SvgIcons type={'checked'} isRead={isRead && true}/>
                        ) : (
                            <span className={'dialogs__item__unread-counter'}>{unreadCount}</span>
                        )
                    }
                </div>
            </div>

        </div>
    )
};

export default DialogItem;
