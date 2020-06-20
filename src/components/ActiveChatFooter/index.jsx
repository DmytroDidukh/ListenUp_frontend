import React, {useState} from "react";
import {Button, Icon, Input} from "semantic-ui-react";

import './ActiveChatFooter.scss';

const ActiveChatFooter = () => {
    const [messageValue, setMessageValue] = useState('')

    return (
        <section className='chat__active-dialog__footer'>
            <Button icon>
                <Icon name='attach'/>
            </Button>
            <Input value={messageValue}
                   onChange={(e) => setMessageValue(e.target.value)}
                   placeholder='Write a message...'/>
            <Button icon>
                <Icon name='smile outline'/>
            </Button>
            {
                messageValue ? (
                    <Button icon>
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
