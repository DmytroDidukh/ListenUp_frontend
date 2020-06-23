import React from "react";
import classNames from 'classnames';
import {Icon} from "semantic-ui-react";

import {Avatar} from 'components';

import './ChatSettings.scss'

const ChatSettings = ({togglePopup, isPopupVisible}) => {

    return (
        <div className='dialogs__header__settings'>
            <Icon name='bars' onClick={togglePopup}/>
            <div className={classNames('settings-popup', {'active': isPopupVisible})}>
                <div className={'settings-popup__user-info'}>
                    <Icon name='close' onClick={togglePopup}/>
                    <Avatar username='Luke Skywalker'/>
                    <span className='user-name'>Luke Skywalker</span>
                </div>
                <ul className='settings-popup__options-list'>
                    <li>
                        Contacts
                    </li>
                    <li>
                        Settings
                    </li>
                    <li>
                        Night mode
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default ChatSettings;
