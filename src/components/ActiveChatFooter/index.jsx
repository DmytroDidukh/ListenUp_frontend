import React, {useState} from "react";
import {Button, Icon, Input} from "semantic-ui-react";
import { Picker } from 'emoji-mart'
import {UploadField} from '@navjobs/upload'

import './ActiveChatFooter.scss';

const ActiveChatFooter = () => {
    const [messageValue, setMessageValue] = useState('');



    return (
        <section className='chat__active-dialog__footer'>
            <UploadField
                onFiles={files => console.log(files)}
                containerProps={{
                    className: 'image-attach'
                }}
                uploadProps={{
                    accept: '.jpg, .jpeg, .gif, .png',
                    multiple: 'multiple',
                }}>
                <Button icon>
                    <Icon name='image'/>
                </Button>
            </UploadField>
            <Input value={messageValue}
                   onChange={(e) => setMessageValue(e.target.value)}
                   placeholder='Write a message...'/>
            <Button icon>
                <Icon name='smile outline'/>
            </Button>
            {
                messageValue ? (
                    <Button icon className='send-message'>
                        <Icon name='send'/>
                    </Button>
                ) : (
                    <Button icon>
                        <Icon name='microphone'/>
                    </Button>
                )
            }
        </section>
    )
};

export default ActiveChatFooter;
