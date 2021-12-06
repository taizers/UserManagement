import './PopupChars.css';
import PopupChar from './PopupChar/PopupChar';
import PropTypes from 'prop-types';
import React from 'react';

const PopupChars = ({ userData }) => {
    return (
        <ul className="popup__chars chars">
            {
                userData.map(item => (
                    <PopupChar key={item.id} name={item.name} value={item.value} />
                ))
            }
        </ul>
    );
};

PopupChars.propTypes = {
    userData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PopupChars;
