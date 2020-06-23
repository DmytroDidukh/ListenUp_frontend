import React, {useState} from 'react';

import {ActiveChatFooter, ActiveChatHeader} from 'components';
import {DialogsContainer, MessagesContainer} from 'containers';
import './Home.scss'

const Home = () => {
    const [emojiPopupVisible, setEmojiPopupVisible] = useState(false);

    const toggleEmojiPopup = (e) => {
        const target = e.target;
        if (target.closest('.emoji-mart')) {
            return
        }

        target.closest('.emoji-block') ?
            setEmojiPopupVisible(!emojiPopupVisible) :
            setEmojiPopupVisible(false)
    }

    return (
        <div className='chat' onClick={toggleEmojiPopup}>
            <DialogsContainer userId={2}/>
            <div className='chat__active-dialog'>
                <ActiveChatHeader/>
                <MessagesContainer/>
                <ActiveChatFooter
                    emojiPopupVisible={emojiPopupVisible}
                    toggleEmojiPopup={toggleEmojiPopup}/>
            </div>
        </div>
    )
};

export default Home;
