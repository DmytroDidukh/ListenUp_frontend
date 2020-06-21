import React from 'react';
import classNames from 'classnames';

import {Avatar, Time, ActiveChatFooter} from 'components';
import {DialogsContainer, MessagesContainer} from 'containers';
import './Home.scss'

const Home = () => {

    const status = true;

    return (
        <div className='chat'>
            <div className='chat__aside'>
                <DialogsContainer userId={2}/>
            </div>
            <div className='chat__active-dialog'>
                <section className='chat__active-dialog__header'>
                    <div className='chat__active-dialog__header__user-info'>
                        <Avatar username='Donald Trump'/>
                        <div>
                            <strong className='chat__active-dialog__header__user-name'>Donald Trump</strong>
                            <div className={classNames('chat__active-dialog__header__user-status', {'online': status})}>
                                {
                                    status ?
                                        'online' :
                                        <>
                                            <span>last seen </span>
                                            <Time dateMessage={new Date(2020, 5, 20, 11, 30)}/>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <MessagesContainer />
               <ActiveChatFooter />
            </div>
        </div>
    )
};

export default Home;
