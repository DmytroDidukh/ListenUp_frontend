import React from "react";


import './Message.scss';

const Message = ({user, date = 'Yesterday at 9:24PM'}) => (
    <div className='message'>
        <div className='message__avatar'>
            <img src={user.avatar} alt={`${user.fullName} avatar`}/>
        </div>
        <div className='message__content'>
            <div className='message__bubble'>
                <p className='message__text'>{user.text}</p>
            </div>
            <time className='message__date'>{date}</time>
        </div>
    </div>
);


export default Message;
