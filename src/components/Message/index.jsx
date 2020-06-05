import React from "react";
import classNames from 'classnames';

import {Time} from 'components'

import './Message.scss';
import CheckedSvgIcon from "../checkedSvgIcon";

const Message = ({avatar, text, /*date = new Date(),*/ fullName, isMe, isRead, isTyping, attachments = []}) => {
    const isMessageImage = attachments.length === 1;

    const random = () => {
        return Math.round(1 + Math.random() * (9 - 1))
    }

    const year = '200' + random();
    const date = new Date(+year, random(), random())

    return (
        <div className={classNames('message', {
            'message--is-me': isMe,
            'message--is-typing': isTyping,
            'message--image': isMessageImage,
            'message--attachments': !text && attachments.length > 1
        })}>
            <div className='message__avatar'>
                <img className='avatar' src={avatar} alt={`${fullName} avatar`}/>
            </div>
            <div className='message__content'>
                <div className='message__info'>
                    {
                        !isTyping && (text || !isMessageImage && !(attachments.length > 1))  &&
                        <div className='message__bubble'>
                            <p className='message__text'>{text}</p>
                        </div>
                    }
                    {
                        isTyping && !isMe &&
                        <div className="message__typing">
                            <span/><span/><span/>
                        </div>
                    }
                    {isMe && !isTyping && <CheckedSvgIcon isRead={isRead}/>}
                </div>
                {!!attachments.length && <div className='message__attachments'>
                    {attachments.map(item => <img className={'message__attachments-item'} src={item.src}
                                                  alt={item.id}/>)}
                </div>}
                {!isTyping && <Time className='message__date' date={date}/>}
            </div>
        </div>
    )
}


export default Message;
