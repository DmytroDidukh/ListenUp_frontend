import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import classNames from 'classnames';

import './Message.scss';

const Message = ({user, date = 'Yesterday at 9:24PM', isMe, isRead, attachments}) => {
    const checkedSvg = (
        <div className={'message__svg-wrapper'}>
            <svg className={classNames('message__checked-svg', {'read': isRead})} version="1.0"
                 xmlns="http://www.w3.org/2000/svg"
                 width="15.000000pt" height="10.000000pt" viewBox="0 0 100.000000 67.000000"
                 preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,67.000000) scale(0.100000,-0.100000)"
                   fill="#000000" stroke="none">
                    <path d="M592 593 c-21 -18 -258 -345 -293 -403 -10 -18 -12 -17 -118 78 -83
74 -108 84 -135 56 -36 -36 -23 -56 114 -174 109 -93 124 -103 150 -95 11 4
69 75 128 158 60 84 136 190 170 236 64 87 74 118 46 145 -20 21 -37 20 -62
-1z"/>
                    <path d="M903 603 c-7 -2 -41 -44 -75 -91 -34 -48 -102 -142 -151 -210 l-89
-122 -25 20 c-50 39 -103 12 -89 -46 7 -26 99 -104 123 -104 23 0 58 43 183
219 63 89 132 185 153 213 42 58 48 101 18 118 -21 11 -29 11 -48 3z"/>
                </g>
            </svg>
        </div>
    )

    return (
        <div className={classNames('message', {'message--is-me': isMe})}>
                <div className='message__avatar'>
                    <img className='avatar' src={user.avatar} alt={`${user.fullName} avatar`}/>
                </div>
                <div className='message__content'>
                    <div className='message__info'>
                        <div className='message__bubble'>
                            <p className='message__text'>{user.text}</p>
                        </div>
                        {isMe && checkedSvg}
                    </div>
                    {attachments && <div className='message__attachments'>
                        {attachments.map(item => <img className={'message__attachments-item'} src={item.src} alt={item.id}/>)}
                    </div>}
                    <time className='message__date'>{formatDistanceToNow(date, {addSuffix: true})}</time>
                </div>

        </div>
    )
}


export default Message;
