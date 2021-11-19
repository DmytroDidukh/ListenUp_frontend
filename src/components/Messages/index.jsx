import React from 'react';
import { Message as SemanticMessage, Loader } from 'semantic-ui-react';
import { Empty } from 'antd';

import { Message } from 'components';
import './Messages.scss';

const Messages = ({ messages, isLoading, blockRef }) => (
    <section className='chat__active-dialog__messages-section'>
        <div style={{ overflowY: 'auto' }} ref={blockRef}>
            {isLoading ? (
                <Loader active inline content='Messages are loading ...' />
            ) : messages && !isLoading && messages.length > 0 ? (
                messages.map((message) => <Message key={message._id} message={message} />)
            ) : messages && messages.length === 0 ? (
                <Empty
                    className='chat__error-message'
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description='No messages'
                />
            ) : (
                <SemanticMessage
                    className='chat__error-message'
                    content='Please select a chat to start messaging'
                />
            )}
        </div>
    </section>
);

export default Messages;

// <>
//   <Message
// eslint-disable-next-line max-len
//     avatar={'https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/957/2020/02/06114341/President-Donald-Trump-listens-as-Speaker-of-the-House-Nancy-Pelosi-speaks-during-the-68th-Annual-National-Prayer-Breakfast-at-the-Washington-Hilton-100x100.jpg'}
//     fullName={'Donald Trump'}
//     text={'You can connect Him on telegram... Wow this is amazing.'}
//     isMe
//     isRead
//   />
//   <Message
// eslint-disable-next-line max-len
//     avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMsdK5uG_m9hFaKhjmSZ759q5n1o5Ay64i_j7QKMjlzdtG9plD&usqp=CAU'}
//     fullName={'Vladimir Putin'}
//     text={'Russia the best!'}
//     attachments={attachments}
//
//   />
//   <Message
// eslint-disable-next-line max-len
//     avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMsdK5uG_m9hFaKhjmSZ759q5n1o5Ay64i_j7QKMjlzdtG9plD&usqp=CAU'}
//     fullName={'Vladimir Putin'}
//     // eslint-disable-next-line max-len
//     audio={'https://notificationsounds.com/soundfiles/7750ca3559e5b8e1f44210283368fc16/file-sounds-1159-promise.mp3'}
//
//   />
//   <Message
// eslint-disable-next-line max-len
//     avatar={'https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/957/2020/02/06114341/President-Donald-Trump-listens-as-Speaker-of-the-House-Nancy-Pelosi-speaks-during-the-68th-Annual-National-Prayer-Breakfast-at-the-Washington-Hilton-100x100.jpg'}
//     fullName={'Donald Trump'}
//     isMe
//     attachments={[attachments[0]]}
//   />
//   <Message
// eslint-disable-next-line max-len
//     avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMsdK5uG_m9hFaKhjmSZ759q5n1o5Ay64i_j7QKMjlzdtG9plD&usqp=CAU'}
//     fullName={'Vladimir Putin'}
//     attachments={[attachments[0]]}
//     text={'Russia the best!'}
//   />
//   <Message
// eslint-disable-next-line max-len
//     avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMsdK5uG_m9hFaKhjmSZ759q5n1o5Ay64i_j7QKMjlzdtG9plD&usqp=CAU'}
//     fullName={'Vladimir Putin'}
//     isTyping
//   />
// </>

// const attachments = [
//   {
//     id: 'image.jpg',
// eslint-disable-next-line max-len
//     src: 'https://images.unsplash.com/photo-1586567078458-b5e499305b97?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=100'
//   },
//   {
//     id: 'image.jpg',
// eslint-disable-next-line max-len
//     src: 'https://images.unsplash.com/photo-1590622079638-495071106ecd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=100'
//   },
//   {
//     id: 'image.jpg',
// eslint-disable-next-line max-len
//     src: 'https://images.unsplash.com/photo-1581703577202-b81fbfddb67b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=100'
//   },
// ]
