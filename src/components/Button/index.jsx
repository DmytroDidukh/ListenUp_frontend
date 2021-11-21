import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Button as BaseButton } from 'antd';

import { BUTTON_SIZE } from '@const';

import './Button.scss';

const Button = ({ size, className, ...rest }) => {
    return (
        <BaseButton
            {...rest}
            className={classNames('button', className, {
                'button--large': size === 'large',
            })}
        />
    );
};

Button.propTypes = {
    size: PropTypes.oneOf(Object.values(BUTTON_SIZE)),
    classNames: PropTypes.string,
};

Button.defaultProps = {
    size: 'medium',
    classNames: undefined,
};

export default Button;
