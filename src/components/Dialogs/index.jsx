import React from "react";
import classNames from 'classnames'

import {DialogItem} from "components";
import './Dialogs.scss'

const Dialogs = ({items}) => {




    return (
        <div className={'dialogs'}>
            {
                items.map( ({_id, user, message}) => <DialogItem key={_id} user={user} message={message}/>)
            }
        </div>
    )
};

export default Dialogs;
