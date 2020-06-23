import React from "react";
import classNames from 'classnames'
import {Icon} from "semantic-ui-react";


const SvgIcons = ({type, isRead}) => {
    const checkedIcon = (
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
        </div>);

    const waveIcon = (
        <svg width="134" height="30" viewBox="0 0 134 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8.53448V20.9483" stroke="white" strokeWidth="3"/>
            <path d="M14.3036 8.53448V20.9483" stroke="white" strokeWidth="3"/>
            <path d="M26.6071 8.53448V20.9483" stroke="white" strokeWidth="3"/>
            <path d="M38.9107 8.7931V21.2069" stroke="white" strokeWidth="3"/>
            <path d="M56.631 8.7931V21.2069" stroke="white" strokeWidth="3"/>
            <path d="M45.3333 9V21.4138" stroke="white" strokeWidth="3"/>
            <path d="M8.15179 0V30" stroke="white" strokeWidth="3"/>
            <path d="M20.4554 0V30" stroke="white" strokeWidth="3"/>
            <path d="M32.7589 0V30" stroke="white" strokeWidth="3"/>
            <path d="M52.0268 0V30" stroke="white" strokeWidth="3"/>
            <path d="M62.7827 0V30" stroke="white" strokeWidth="3"/>
            <path d="M68.9732 0V30" stroke="white" strokeWidth="3"/>
            <path d="M81.2381 8.53448V20.9483" stroke="white" strokeWidth="3"/>
            <path d="M93.5417 8.53448V20.9483" stroke="white" strokeWidth="3"/>
            <path d="M105.845 8.7931V21.2069" stroke="white" strokeWidth="3"/>
            <path d="M118.149 8.7931V21.2069" stroke="white" strokeWidth="3"/>
            <path d="M132 8.7931V21.2069" stroke="white" strokeWidth="3"/>
            <path d="M75.0863 0V30" stroke="white" strokeWidth="3"/>
            <path d="M87.3899 0V30" stroke="white" strokeWidth="3"/>
            <path d="M99.6935 0V30" stroke="white" strokeWidth="3"/>
            <path d="M111.997 0V30" stroke="white" strokeWidth="3"/>
            <path d="M124.301 0V30" stroke="white" strokeWidth="3"/>
        </svg>
    )

    switch (type) {
        case 'checked':
            return checkedIcon;
        case 'wave':
            return waveIcon;
        default:
            return <span>something wrong!</span>
    }
}


export default SvgIcons;
