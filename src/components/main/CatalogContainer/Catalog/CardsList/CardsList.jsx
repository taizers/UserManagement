import Card from './Card/Card';
import './CardsList.css';
import PropTypes from 'prop-types';
import React from 'react';

const CardsList = ({ cardsData, changePopup }) => {
    return (
        <ul className="results__list">
            {
                cardsData.map(item => (
                    <Card key={item._id} userData={item} changePopup={changePopup} />
                ))
            }
        </ul>
    );
};

CardsList.propTypes = {
    cardsData: PropTypes.arrayOf(Object).isRequired,
    changePopup: PropTypes.func.isRequired,
};

export default CardsList;
