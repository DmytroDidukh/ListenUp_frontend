import React from "react";
import orderBy from 'lodash/orderBy';
import {Input} from 'semantic-ui-react';
import {Empty} from 'antd';

import {DialogItem} from "components";
import './Dialogs.scss';

const DialogsComponent = ({dialogs, userId, onSearch, inputValue}) => {

    return (
        <div className={'dialogs'}>
            <Input className='chat__aside__search-dialog'
                   icon='search'
                   placeholder='Search...'
                   onChange={onSearch}
                   value={inputValue}
            />

            {dialogs.length ? (
                orderBy( dialogs, ['created_at'], 'desc').map((dialog) =>
                    <DialogItem
                        key={dialog._id}
                        isMe={dialog._id === userId}
                        {...dialog}
                    />)
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Nothing found' />
            )
            }
        </div>
    )
};

export default DialogsComponent;
