import React from "react";

import {avatarGenerator} from "utils/helpers";

const Avatar = ({avatar, username}) => {
    const {avatarColor, userInitials} = avatarGenerator(username)

    return (
        <>
            {avatar ? (
                <img src={avatar} alt={username}/>
            ) : (
                <span style={{background: avatarColor}}>{userInitials}</span>
            )}
        </>
    )
}

export default Avatar;
