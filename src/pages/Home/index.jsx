import React from 'react';


import {Message} from 'components';

const Home = () => {
    const date = new Date()
    const user = {
        avatar: 'https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/957/2020/02/06114341/President-Donald-Trump-listens-as-Speaker-of-the-House-Nancy-Pelosi-speaks-during-the-68th-Annual-National-Prayer-Breakfast-at-the-Washington-Hilton-100x100.jpg',
        fullName: 'Donald Trump',
        text: 'Wow this is amazing'
    }
    const user2 = {
        avatar: ' https://ruinformer.com/uploads/_pages/5193/putin.jpg',
        fullName: 'Vladimir Putin',
        text: 'You can connect Him on telegram... Wow this is amazing.  I never thought I could earn real money with binary options trading.'
    }

    const attachments = [
        {id: 'image.jpg', src: 'https://images.unsplash.com/photo-1586567078458-b5e499305b97?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=100'},
        {id: 'image.jpg', src: 'https://images.unsplash.com/photo-1590622079638-495071106ecd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=100'},
        {id: 'image.jpg', src: 'https://images.unsplash.com/photo-1581703577202-b81fbfddb67b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=100'},
    ]

    return (
        <div>
            <Message user={user2} date={date}
            attachments={attachments}
            />
            <Message user={user} date={date} isMe isRead={true} attachments={attachments}/>
        </div>
    )
};

export default Home;
