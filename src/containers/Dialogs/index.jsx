import React, {useState} from "react";

import {DialogsComponent} from 'components';

const Dialogs = ({dialogs, userId}) => {
    const [filteredDialogs, setFilteredDialogs] = useState(dialogs);
    const [searchInputValue, setSearchInputValue] = useState('');

    const onSearch = (e) => {
        const value = e.target.value;
        const newDialogs = dialogs.filter( dialog => (
            dialog.user.fullName.toLowerCase().includes(value.toLowerCase())
        ))
        setFilteredDialogs(newDialogs);
        setSearchInputValue(value)
    }


    return (
        <DialogsComponent
            dialogs={filteredDialogs}
            userId={userId}
            onSearch={onSearch}
            inputValue={searchInputValue}
        />
    )
};

export default Dialogs;
