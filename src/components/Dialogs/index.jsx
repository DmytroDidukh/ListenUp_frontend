import React from "react";
import orderBy from 'lodash/orderBy';
import {Input, Loader} from 'semantic-ui-react';
import {Empty} from 'antd';


import {DialogItem} from "components";
import './Dialogs.scss';

const Dialogs = ({userId, onSearch, inputValue, items, isDialogsLoading, onSelectDialog}) => {

    return (
        <div className={'dialogs'}>
            <Input className='chat__aside__search-dialog'
                   icon='search'
                   placeholder='Search...'
                   onChange={onSearch}
                   value={inputValue}
            />

            {items.length ? (
                orderBy(items, ['created_at'], 'desc').map((dialog) =>
                    <DialogItem
                        onSelect={onSelectDialog}
                        key={dialog._id}
                        isMe={dialog._id === userId}
                        {...dialog}
                    />)
            ) : isDialogsLoading ? (
                    <Loader active inline />
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Nothing found'/>
            )
            }
        </div>
    )
};

export default Dialogs;
