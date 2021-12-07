import './Card.css';
import CardImage from './CardImage/CardImage';
import CardContent from './CardContent/CardContent';
import PropTypes from 'prop-types';
import React from 'react';

const Card = ({ userData, changePopup }) => {
    const onCardClick = () => {
        changePopup(userData);
    };
    return (

        <li className="results__user user" onClick={onCardClick}>
            <CardImage src={userData.avatar} email={userData.email} />
            <CardContent userData={userData} />
        </li>
    );
};

Card.propTypes = {
    changePopup: PropTypes.func.isRequired,
    userData: PropTypes.object.isRequired,
};

export default Card;
