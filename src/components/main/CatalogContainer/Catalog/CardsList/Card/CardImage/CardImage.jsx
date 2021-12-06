import './CardImage.css';
import PropTypes from 'prop-types';
import React from 'react';

const CardImage = ({ src, email }) => {
    return (
        <div className="user__image">
            <img src={src} width="200" height="200" alt={email} />
        </div>
    );
};

CardImage.propTypes = {
    src: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default CardImage;
