import React from "react";
import classNames from 'classnames'


const CheckedSvgIcon = ({isRead}) => (
    <div className={'svg-wrapper'}>
        <svg className={classNames('checked-svg-icon', {'read': isRead})} version="1.0"
             xmlns="http://www.w3.org/2000/svg"
             width="15.000000pt" height="10.000000pt" viewBox="0 0 100.000000 67.000000"
             preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,67.000000) scale(0.100000,-0.100000)"
               fill="#000000" stroke="none">
                <path d="M592 593 c-21 -18 -258 -345 -293 -403 -10 -18 -12 -17 -118 78 -83
                             74 -108 84 -135 56 -36 -36 -23 -56 114 -174 109 -93 124 -103 150 -95 11 4
                             69 75 128 158 60 84 136 190 170 236 64 87 74 118 46 145 -20 21 -37 20 -62
                             -1z"/>
                <path d="M903 603 c-7 -2 -41 -44 -75 -91 -34 -48 -102 -142 -151 -210 l-89
                             -122 -25 20 c-50 39 -103 12 -89 -46 7 -26 99 -104 123 -104 23 0 58 43 183
                             219 63 89 132 185 153 213 42 58 48 101 18 118 -21 11 -29 11 -48 3z"/>
            </g>
        </svg>
    </div>
);

export default CheckedSvgIcon;
