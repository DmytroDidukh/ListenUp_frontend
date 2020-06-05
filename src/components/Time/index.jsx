import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import classNames from 'classnames'


const Time = ({className, date}) => {
    const readableDateFormat = formatDistanceToNow(date, {addSuffix: true})

    return (
        <time className={`${className} date`}>{readableDateFormat}</time>
    )
};

export default Time;
