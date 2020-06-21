import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {dialogsActions} from 'redux/actions'
import {DialogsComponent} from 'components';

const Dialogs = ({userId}) => {
    const items = useSelector(({dialogs}) => dialogs.items);
    const dispatch = useDispatch();

    const [filteredDialogs, setFilteredDialogs] = useState(items);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [isDialogsLoading, setIsDialogsLoading] = useState(true);


    const onSearch = (e) => {
        const value = e.target.value;
        const newDialogs = items.filter(dialog => (
            dialog.user.fullName.toLowerCase().includes(value.toLowerCase())
        ))
        setFilteredDialogs(newDialogs);
        setSearchInputValue(value)
    }

    useEffect(() => {
        if (!items.length) {
            dispatch(dialogsActions.fetchDialogs())
        } else  {
            setFilteredDialogs(items);
            setIsDialogsLoading(false)
        }
    }, [items])

    return (
        <DialogsComponent
            dialogs={filteredDialogs}
            userId={userId}
            onSearch={onSearch}
            inputValue={searchInputValue}
            isDialogsLoading={isDialogsLoading}
        />
    )
};

export default Dialogs;
