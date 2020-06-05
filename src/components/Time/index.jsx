import React from "react";
import {
    differenceInHours,
    formatDistanceToNow,
    format
} from 'date-fns';
import classNames from 'classnames'


const Time = ({className, dateMessage}) => {

    const getMessageTime = (dateMessage) => {
        const now = new Date();
        const hoursFromNow = differenceInHours(now, dateMessage);

       if (hoursFromNow === 0) {
           return formatDistanceToNow(dateMessage, {addSuffix: true})
       } else if (hoursFromNow <= 24) {
           return format(dateMessage, 'H:mm')
       } else {
           return format(dateMessage, 'dd/MM/yy')
       }
    }

    return (
        <time className={`${className} date`}>{getMessageTime(dateMessage)}</time>
    )
};

export default Time;
