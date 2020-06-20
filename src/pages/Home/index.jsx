import React from 'react';
import classNames from 'classnames'
import {Input} from 'semantic-ui-react'

import {Message, Dialogs, Avatar, Time} from 'components';
import './Home.scss'

const Home = () => {

    const attachments = [
        {
            id: 'image.jpg',
            src: 'https://images.unsplash.com/photo-1586567078458-b5e499305b97?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=100'
        },
        {
            id: 'image.jpg',
            src: 'https://images.unsplash.com/photo-1590622079638-495071106ecd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=100'
        },
        {
            id: 'image.jpg',
            src: 'https://images.unsplash.com/photo-1581703577202-b81fbfddb67b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=100'
        },
    ]

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
    ]

    const status = true;

    return (
        <div className='chat'>
            <div className='chat__left-side'>
                <Input className='chat__left-side__search-dialog' icon='search' placeholder='Search dialog...'/>
                <Dialogs items={messages} ownerId={2}/>
            </div>
            <div className='chat__right-side'>
                <div className='chat__right-side__header'>
                    <div className='chat__right-side__header__user-info'>
                        <Avatar username='Donald Trump'/>
                        <div>
                            <strong className='chat__right-side__header__user-name'>Donald Trump</strong>
                            <div className={classNames('chat__right-side__header__user-status', {'online': status})}>
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
                </div>
                <div className='chat__right-side__body'>
                    <Message
                        avatar={'https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/957/2020/02/06114341/President-Donald-Trump-listens-as-Speaker-of-the-House-Nancy-Pelosi-speaks-during-the-68th-Annual-National-Prayer-Breakfast-at-the-Washington-Hilton-100x100.jpg'}
                        fullName={'Donald Trump'}
                        text={'You can connect Him on telegram... Wow this is amazing.'}
                        isMe
                        isRead
                    />
                    <Message
                        avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMsdK5uG_m9hFaKhjmSZ759q5n1o5Ay64i_j7QKMjlzdtG9plD&usqp=CAU'}
                        fullName={'Vladimir Putin'}
                        text={'Russia the best!'}
                        attachments={attachments}

                    />
                    <Message
                        avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMsdK5uG_m9hFaKhjmSZ759q5n1o5Ay64i_j7QKMjlzdtG9plD&usqp=CAU'}
                        fullName={'Vladimir Putin'}
                        audio={'https://notificationsounds.com/soundfiles/7750ca3559e5b8e1f44210283368fc16/file-sounds-1159-promise.mp3'}

                    />
                    <Message
                        avatar={'https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/957/2020/02/06114341/President-Donald-Trump-listens-as-Speaker-of-the-House-Nancy-Pelosi-speaks-during-the-68th-Annual-National-Prayer-Breakfast-at-the-Washington-Hilton-100x100.jpg'}
                        fullName={'Donald Trump'}
                        isMe
                        attachments={[attachments[0]]}
                    />
                    <Message
                        avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMsdK5uG_m9hFaKhjmSZ759q5n1o5Ay64i_j7QKMjlzdtG9plD&usqp=CAU'}
                        fullName={'Vladimir Putin'}
                        attachments={[attachments[0]]}
                        text={'Russia the best!'}
                    />
                    <Message
                        avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMsdK5uG_m9hFaKhjmSZ759q5n1o5Ay64i_j7QKMjlzdtG9plD&usqp=CAU'}
                        fullName={'Vladimir Putin'}
                        isTyping
                    />
                </div>
            </div>


        </div>
    )
};

export default Home;
