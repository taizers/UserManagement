import './PopupChar.css'
import React from 'react';
import PropTypes from 'prop-types';

const PopupChar = ({ name, value }) => {
    return (
        <li className="chars__item">
            <div className="chars__name">{name}</div>
            <div className="chars__value">{value}</div>
        </li>
    );
};

PopupChar.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default PopupChar;
