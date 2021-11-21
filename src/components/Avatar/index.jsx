import React from 'react';

import { avatarGenerator } from '@utils/helpers';

import './Avatar.scss';

const Avatar = ({ avatar, username }) => {
    const { avatarColor, userInitials } = avatarGenerator(username);

    return (
        <div className='avatar'>
            {avatar ? (
                <img src={avatar} alt={username} />
            ) : (
                <span style={{ background: avatarColor }}>
                    <span>{userInitials}</span>
                </span>
            )}
        </div>
    );
};

export default Avatar;
