import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Block.scss';

const Block = ({ children, className }) => (
    <div className={classNames('block', className)}>{children}</div>
);

Block.propTypes = {
    className: PropTypes.string,
};

Block.defaultProps = {
    className: undefined,
};

export default Block;
