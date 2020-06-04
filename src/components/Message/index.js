import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import classNames from 'classnames'

import './Message.scss';

const Message = ({user, date = 'Yesterday at 9:24PM', isMe}) => (
    <div className={classNames('message', {'message--is-me' : isMe})}>
        <div className='message__content'>
            <div className='message__avatar'>
                <img className='avatar' src={user.avatar} alt={`${user.fullName} avatar`}/>
            </div>
            <div className='message__info'>
                <div className='message__bubble'>
                    <p className='message__text'>{user.text}</p>
                </div>
                <time className='message__date'>{formatDistanceToNow(date, {addSuffix: true})}</time>
            </div>
        </div>
    </div>
);


export default Message;
