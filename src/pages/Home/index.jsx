import React from 'react';
import classNames from 'classnames';

import {Messages,  Avatar, Time, ActiveChatFooter} from 'components';
import {Dialogs} from 'containers';
import './Home.scss'

const Home = () => {

    const messages = [
        {
            _id: 1,
            text: 'Mama, put my guns in the groundI can\'t shoot them anymore',
            isRead: false,
            unreadCount: 3,
            created_at: new Date(),
            user: {
                fullName: 'Bob Dylan',
                avatar: null
            },

        },
        {
            _id: 2,
            text: 'Me haces falta, Explícame qué te hizo falta, amor',
            isRead: false,
            unreadCount: 2,
            created_at: new Date(2020, 5, 5, 1, 2),
            user: {
                fullName: 'Ricky Martin',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTILaH8JOyuwl-OelrddDU6og28UYVOf9Ge-JQTNmAnPLJN8UAY&usqp=CAU',
                online: true
            },
        },
        {
            _id: 3,
            text: 'And it\'s no sacrifice, just a simple word',
            isRead: false,
            unreadCount: 2,
            created_at: new Date(2020, 5, 4, 10, 57),
            user: {
                fullName: 'Elton John',
                avatar: null,
                online: true
            },
        },
        {
            _id: 4,
            text: 'My curiosity sustains me for the period of the shoot',
            isRead: true,
            unreadCount: 0,
            created_at: new Date(2020, 5, 6, 0, 12),
            user: {
                fullName: 'Daniel Del Luis',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDLGIBHYJVp4y-G4TuQXXZ-vDt4m8YitCscDXzJIRsvKsA9X8h&usqp=CAU',
                online: false
            },
        },
        {
            _id: 5,
            text: 'Mama, put my guns in the groundI can\'t shoot them anymore',
            isRead: false,
            unreadCount: 3,
            created_at: new Date(),
            user: {
                fullName: 'Sinéad O’Connor',
                avatar: null
            },

        },
        {
            _id: 6,
            text: 'Me haces falta, Explícame qué te hizo falta, amor',
            isRead: false,
            unreadCount: 2,
            created_at: new Date(2020, 5, 20, 1, 2),
            user: {
                fullName: 'Atticus Finch',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTILaH8JOyuwl-OelrddDU6og28UYVOf9Ge-JQTNmAnPLJN8UAY&usqp=CAU',
                online: true
            },
        },
        {
            _id: 7,
            text: 'And it\'s no sacrifice, just a simple word',
            isRead: false,
            unreadCount: 2,
            created_at: new Date(2020, 4, 25, 10, 57),
            user: {
                fullName: 'John Senna',
                avatar: null,
                online: true
            },
        },
        {
            _id: 8,
            text: 'My curiosity sustains me for the period of the shoot',
            isRead: true,
            unreadCount: 0,
            created_at: new Date(2020, 5, 20, 10, 15),
            user: {
                fullName: 'Donnie Darko',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDLGIBHYJVp4y-G4TuQXXZ-vDt4m8YitCscDXzJIRsvKsA9X8h&usqp=CAU',
                online: false
            },
        },
    ]

    const status = true;

    return (
        <div className='chat'>
            <div className='chat__aside'>
                <Dialogs userId={2}/>
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
                <Messages />
               <ActiveChatFooter />
            </div>
        </div>
    )
};

export default Home;
