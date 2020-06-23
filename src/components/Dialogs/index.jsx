import React from "react";
import orderBy from 'lodash/orderBy';
import {Input, Loader} from 'semantic-ui-react';
import {Empty} from 'antd';


import {DialogItem} from "components";
import {ChatSettingsContainer} from "containers";
import './Dialogs.scss';

const Dialogs = ({userId, onSearch, inputValue, items, isDialogsLoading, onSelectDialog}) => {

    return (
        <div className={'chat__dialogs'}>
            <div className={'dialogs__header'}>
                <ChatSettingsContainer/>
                <Input className='dialogs__header__search-dialog'
                       icon='search'
                       placeholder='Search...'
                       onChange={onSearch}
                       value={inputValue}
                />
            </div>

            <div className='dialogs__body'>
                {items.length ? (
                    orderBy(items, ['created_at'], 'desc').map((dialog) =>
                        <DialogItem
                            onSelect={onSelectDialog}
                            key={dialog._id}
                            isMe={dialog._id === userId}
                            {...dialog}
                        />)
                ) : isDialogsLoading ? (
                    <Loader active inline/>
                ) : (
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Nothing found'/>
                )
                }
            </div>
        </div>
    )
};

export default Dialogs;
