import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {dialogsActions} from 'redux/actions'
import {Dialogs} from 'components';

const DialogsContainer = ({userId}) => {
    const items = useSelector(({dialogs}) => dialogs.items);
    const dispatch = useDispatch();

    const [filteredDialogs, setFilteredDialogs] = useState(items);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [isDialogsLoading, setIsDialogsLoading] = useState(true);

    const {fetchDialogs, setActiveDialogId} = dialogsActions;


    const onSearch = (e) => {
        const value = e.target.value;
        const newDialogs = items.filter(dialog => (
            dialog.user.fullName.toLowerCase().includes(value.toLowerCase())
        ))
        setFilteredDialogs(newDialogs);
        setSearchInputValue(value)
    }

    const onSelectDialog = (id) => {
        dispatch(setActiveDialogId(id))
    }

    useEffect(() => {
        if (!items.length) {
            dispatch(fetchDialogs())
        } else  {
            setFilteredDialogs(items);
            setIsDialogsLoading(false)
        }
    }, [items])

    return (
        <Dialogs
            items={filteredDialogs}
            userId={userId}
            onSearch={onSearch}
            inputValue={searchInputValue}
            isDialogsLoading={isDialogsLoading}
            onSelectDialog={onSelectDialog}
        />
    )
};

export default DialogsContainer;
