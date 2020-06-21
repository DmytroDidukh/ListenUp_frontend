import React from 'react';

import {ActiveChatFooter, ActiveChatHeader} from 'components';
import {DialogsContainer, MessagesContainer} from 'containers';
import './Home.scss'

const Home = () => {

    return (
        <div className='chat'>
            <div className='chat__aside'>
                <DialogsContainer userId={2}/>
            </div>
            <div className='chat__active-dialog'>
                <ActiveChatHeader/>
                <MessagesContainer/>
                <ActiveChatFooter/>
            </div>
        </div>
    )
};

export default Home;
