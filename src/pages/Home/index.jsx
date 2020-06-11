import React from 'react';

import {Message, Dialogs} from 'components';


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
                avatar: 'https://www.feeling.com.mx/img/2016/10/Bob-Dylan-150x150.jpg'
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
                avatar: 'https://static1.purepeople.com/articles/8/39/17/18/@/5631449-elton-john-lors-de-la-press-room-de-la-7-100x100-3.jpg',
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
                avatar: 'https://www.biography.com/.image/t_share/MTE5NTU2MzE2MTk1NTU0ODI3/daniel-day-lewis-9268727-2-402.jpg',
                online: false
            },
        },
    ]

    return (
        <div>
            <Dialogs items={messages} ownerId={2}/>


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
            {/*       <Message
                avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMsdK5uG_m9hFaKhjmSZ759q5n1o5Ay64i_j7QKMjlzdtG9plD&usqp=CAU'}
                fullName={'Vladimir Putin'}
                isTyping
            />
            <Message
                avatar={'https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/957/2020/02/06114341/President-Donald-Trump-listens-as-Speaker-of-the-House-Nancy-Pelosi-speaks-during-the-68th-Annual-National-Prayer-Breakfast-at-the-Washington-Hilton-100x100.jpg'}
                fullName={'Donald Trump'}
                isMe
                attachments={[attachments[0]]}
            />

            <Message
                avatar={'https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/957/2020/02/06114341/President-Donald-Trump-listens-as-Speaker-of-the-House-Nancy-Pelosi-speaks-during-the-68th-Annual-National-Prayer-Breakfast-at-the-Washington-Hilton-100x100.jpg'}
                fullName={'Donald Trump'}
                isMe
                attachments={attachments}

            />
            <Message
                avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMsdK5uG_m9hFaKhjmSZ759q5n1o5Ay64i_j7QKMjlzdtG9plD&usqp=CAU'}
                fullName={'Vladimir Putin'}
                text={'USA suck!'}
            />*/}
        </div>
    )
};

export default Home;
