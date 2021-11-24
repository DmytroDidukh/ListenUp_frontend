import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { dialogsActions } from '@store/actions';
import { dialogsSelectors } from '@store/selectors';
import { Dialogs } from '@components';

const mock = [
    {
        _id: '619aa60830a2704bdc153ec5',
        author: {
            confirmed: false,
            last_seen: '2021-11-21T19:18:23.571Z',
            _id: '619a9bad0063421b341f6ce5',
            email: 'dimon@gmail.com',
            fullname: 'Dmytro Didukh',
            password: '$2b$10$HHyxP8IlA2Z9Y3Rs6bgQtuM7ToxIQA/OrWciShEKJ9YDkSz.XZYoe',
            createdAt: '2021-11-21T19:19:09.346Z',
            updatedAt: '2021-11-21T19:19:09.346Z',
            __v: 0,
        },
        partner: {
            confirmed: false,
            last_seen: '2020-06-30T19:39:38.000Z',
            _id: '5efb95ed1fdce63d00c78fd5',
            email: 'donaldtrump@gmail.com',
            fullname: 'Donald Trump',
            password: '$2b$10$0xaVFLa4Zu2qSpzPrxjhkeU4tm5AUGQe0DBDrZhuk5VMj51TMcNgS',
            createdAt: '2020-06-30T19:43:41.054Z',
            updatedAt: '2020-06-30T19:43:41.054Z',
            __v: 0,
        },
        createdAt: '2021-11-21T20:03:20.660Z',
        updatedAt: '2021-11-21T20:03:20.660Z',
        __v: 0,
    },
];

const DialogsContainer = ({ userId }) => {
    const { items: dialogs, activeDialogId } = useSelector(dialogsSelectors.getDialogs);
    const dispatch = useDispatch();

    const [filteredDialogs, setFilteredDialogs] = useState(dialogs);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [isDialogsLoading, setIsDialogsLoading] = useState(true);

    const onSearch = (e) => {
        const value = e.target.value;
        const newDialogs = dialogs.filter((dialog) =>
            dialog.user.fullName.toLowerCase().includes(value.toLowerCase()),
        );
        setFilteredDialogs(newDialogs);
        setSearchInputValue(value);
    };

    const onSelectDialog = (id) => {
        dispatch(dialogsActions.setActiveDialogId(id));
    };

    useEffect(() => {
        if (!dialogs.length) {
            dispatch(dialogsActions.fetchDialogs());
        } else {
            setFilteredDialogs(dialogs);
            setIsDialogsLoading(false);
        }
    }, [dispatch, dialogs]);

    return (
        <Dialogs
            items={mock}
            userId='619a9bad0063421b341f6ce5'
            onSearch={onSearch}
            inputValue={searchInputValue}
            isDialogsLoading={isDialogsLoading}
            onSelectDialog={onSelectDialog}
            activeDialogId={activeDialogId}
        />
    );
};

DialogsContainer.propTypes = {
    userId: PropTypes.string.isRequired,
};

export default DialogsContainer;
