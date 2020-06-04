import React from 'react';


import {Message} from 'components';

const Home = () => {
    const date = new Date(2020, 5, 2)
    const user = {
        avatar: 'https://lh3.googleusercontent.com/proxy/PJFLyRN85dh3IRn5_JIsi41VLQV9ymoQzDc9exfGCpQVplDL5Gaqergf3PkmrMZB2jUER2YD5SqwvUnKnsZYQZW4-SpWd84tprj2l1L59EDz',
        fullName: 'Donald Trump',
        text: 'Wow this is amazing.  I never thought I could earn real money with binary options trading.  I thought everyone on the platform was just scammers who don\'t have human feelings.  They scammed me many times.  Before I get her, be careful when investing.  I know there are real managers, Mr Charles wesley him  real and legitimate manager who will do anything to get your earnings after the exchange.  Him has done it for me now, I don\'t have to worry about her trading, him will put  smile on your face again if you need help, You can connect Him on telegram...'
    }
    const user2 = {
        avatar: ' https://ruinformer.com/uploads/_pages/5193/putin.jpg',
        fullName: 'Vladimir Putin',
        text: 'You can connect Him on telegram...'
    }

    return (
        <div>
            <Message user={user} date={date} isMe/>
            <Message user={user2} date={date}/>
        </div>
    )
};

export default Home;
