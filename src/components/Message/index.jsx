import React from 'react';
import classNames from 'classnames';

import { Time, SvgIcons, MessageAudio, Avatar } from '@components';

import './Message.scss';

const Message = ({
    message: { user, text, created_at },
    audio,
    isMe,
    isRead,
    isTyping,
    attachments = [],
}) => {
    const isMessageImage = attachments.length === 1 && !text;

    return (
        <div
            className={classNames('message', {
                'message--is-me': isMe,
                'message--is-typing': isTyping,
                'message--image': isMessageImage,
                'message--audio': !!audio,
                'message--attachments': !text && attachments.length > 1,
            })}
        >
            <div className='message__avatar'>
                <Avatar avatar={user.avatar} username={user.fullName} />
            </div>
            <div className='message__content'>
                <div className='message__info'>
                    {!isTyping && (text || (!isMessageImage && attachments.length <= 1)) && (
                        <div className='message__bubble'>
                            {!audio ? (
                                <p className='message__text'>{text}</p>
                            ) : (
                                <MessageAudio audioSrc={audio} />
                            )}
                        </div>
                    )}
                    {isTyping && !isMe && (
                        <div className='message__typing'>
                            <span />
                            <span />
                            <span />
                        </div>
                    )}
                    {isMe && !isTyping && <SvgIcons type={'checked'} isRead={isRead} />}
                </div>
                {!!attachments.length && (
                    <div className='message__attachments'>
                        {attachments.map((item, i) => (
                            <img
                                key={i}
                                className={'message__attachments-item'}
                                src={item.src}
                                alt={item.id}
                            />
                        ))}
                    </div>
                )}
                {!isTyping && <Time className='message__date' date={created_at} />}
            </div>
        </div>
    );
};

export default Message;
