import React from 'react';
import PropTypes from 'prop-types';
import { differenceInHours, formatDistanceToNow, format } from 'date-fns';

const Time = ({ className, date }) => {
    const getMessageTime = (time) => {
        const now = new Date();
        const hoursFromNow = differenceInHours(now, time);

        if (hoursFromNow === 0) {
            return formatDistanceToNow(time, { addSuffix: true });
        } else if (hoursFromNow <= 23) {
            return format(time, 'H:mm');
        } else {
            return format(time, 'dd/MM/yy');
        }
    };

    return <time className={`${className} date`}>{getMessageTime(new Date(date))}</time>;
};

Time.propTypes = {
    className: PropTypes.string,
    date: PropTypes.string,
};

Time.defaultProps = {
    className: undefined,
    date: new Date(),
};

export default Time;
