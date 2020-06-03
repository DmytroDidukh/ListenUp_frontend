import React from 'react';
import {Message} from 'src/components';

const Home = () => {
const user = {
    avatar: 'https://lh3.googleusercontent.com/proxy/PJFLyRN85dh3IRn5_JIsi41VLQV9ymoQzDc9exfGCpQVplDL5Gaqergf3PkmrMZB2jUER2YD5SqwvUnKnsZYQZW4-SpWd84tprj2l1L59EDz',
    fullName: 'Donald Trump',
    text: 'Hello world'
}

    return (
        <div>
            <Message user={user}/>
        </div>
    )
};

export default Home;
