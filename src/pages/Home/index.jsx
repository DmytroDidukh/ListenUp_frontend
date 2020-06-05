import React from 'react';


import {Message, DialogItem} from 'components';

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

    const user = {
        user: {
            fullName: 'Bob Dylan',
            avatar: 'https://www.feeling.com.mx/img/2016/10/Bob-Dylan-150x150.jpg'
        },
        message: {
            text: 'Mama, put my guns in the groundI can\'t shoot them anymore',
            isRead: false,
            unreadCount: 3,
            created_at: new Date()
        }
    }

    const user2 = {
        user: {
            fullName: 'Ricky Martin',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTILaH8JOyuwl-OelrddDU6og28UYVOf9Ge-JQTNmAnPLJN8UAY&usqp=CAU',
            online: true
        },
        message: {
            text: 'Me haces falta, Explícame qué te hizo falta, amor',
            isRead: true,
            unreadCount: 0,
            created_at: new Date(2020, 3, 23)
        }
    }

    return (
        <div>
            <DialogItem user={user}/>
            <DialogItem user={user2}/>


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
