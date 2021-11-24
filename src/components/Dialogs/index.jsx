import React from 'react';
import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';
import { Input, Loader } from 'semantic-ui-react';
import { Empty } from 'antd';

import { DialogItem } from '@components';
import { ChatSettingsContainer } from '@containers';

import './Dialogs.scss';

const Dialogs = ({
    userId,
    onSearch,
    inputValue,
    items,
    isDialogsLoading,
    onSelectDialog,
    activeDialogId,
}) => {
    return (
        <div className='chat__dialogs'>
            <div className='dialogs__header'>
                <ChatSettingsContainer />
                <Input
                    className='dialogs__header__search-dialog'
                    icon='search'
                    placeholder='Search...'
                    onChange={onSearch}
                    value={inputValue}
                />
            </div>

            <div className='dialogs__body'>
                {items.length ? (
                    orderBy(items, ['created_at'], 'desc').map((dialog) => (
                        <DialogItem
                            onSelect={onSelectDialog}
                            key={dialog._id}
                            isMe={dialog._id === userId}
                            activeDialogId={activeDialogId}
                            {...dialog}
                        />
                    ))
                ) : isDialogsLoading ? (
                    <Loader active inline />
                ) : (
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Nothing found' />
                )}
            </div>
        </div>
    );
};

Dialogs.propTypes = {
    userId: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    inputValue: PropTypes.func,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            author: PropTypes.shape({
                confirmed: PropTypes.bool,
                last_seen: PropTypes.string,
                _id: PropTypes.string,
                email: PropTypes.string,
                fullname: PropTypes.string,
                password: PropTypes.string,
                createdAt: PropTypes.string,
                updatedAt: PropTypes.string,
            }),
            partner: {
                confirmed: PropTypes.bool,
                last_seen: PropTypes.string,
                _id: PropTypes.string,
                email: PropTypes.string,
                fullname: PropTypes.string,
                password: PropTypes.string,
                createdAt: PropTypes.string,
                updatedAt: PropTypes.string,
            },
            createdAt: PropTypes.string,
            updatedAt: PropTypes.string,
        }),
    ),
    isDialogsLoading: PropTypes.bool,
    onSelectDialog: PropTypes.func.isRequired,
    activeDialogId: PropTypes.string,
};

Dialogs.defaultProps = {
    inputValue: '',
    items: [],
    isDialogsLoading: false,
    activeDialogId: undefined,
};

export default Dialogs;
