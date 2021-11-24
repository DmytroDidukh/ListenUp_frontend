import React from 'react';
import PropTypes from "prop-types";

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

Avatar.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
};

Avatar.defaultProps = {
    avatar: undefined,
    username: '',
};

export default Avatar;
