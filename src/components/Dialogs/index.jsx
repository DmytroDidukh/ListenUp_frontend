import React from "react";
import orderBy from 'lodash/orderBy'
import classNames from 'classnames'

import {DialogItem} from "components";
import './Dialogs.scss'

const Dialogs = ({items, ownerId}) => {

    return (
        <div className={'dialogs'}>
            {orderBy( items, ['created_at'], 'desc').map((dialog) =>
                <DialogItem
                    key={dialog._id}
                    isMe={dialog._id === ownerId}
                    {...dialog}
                />)
            }
        </div>
    )
};

export default Dialogs;
