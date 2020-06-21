import React from "react";
import { Label } from 'semantic-ui-react'
import classNames from 'classnames';

import {Time, SvgIcons, Avatar} from "components";
import './DialogItem.scss'

const DialogItem = ({
                        isMe,
                        _id,
                        user,
                        text,
                        isRead,
                        created_at,
                        unreadCount,
                        onSelect
}) => {

    return (
        <div onClick={onSelect.bind(this, _id)}
            className={classNames('dialogs__item', {'dialogs__item--online': user.online})}>
            <div className='dialogs__item__avatar'>
                <Avatar avatar={user.avatar} username={user.fullName} />
            </div>
            <div className='dialogs__item-info'>
                <div className='dialogs__item-info-top'>
                    <b className={'dialogs__item__contact-name'}>{user.fullName}</b>
                    <Time className={''} date={created_at}/>
                </div>
                <div className='dialogs__item-info-bottom'>
                    <span className={'dialogs__item__last-message'}>{text}</span>
                    {
                        !isMe ? (
                            <SvgIcons type={'checked'} isRead={isRead && true}/>
                        ) : (
                            <Label className='dialogs__item__unread-counter' circular>
                                {unreadCount}
                            </Label>
                        )
                    }
                </div>
            </div>

        </div>
    )
};

export default DialogItem;
