import './Catalog.css';
import CardsList from './CardsList/CardsList';
import Pagination from './Pagination/Pagination';
import PropTypes from 'prop-types';
import React from 'react';

const Catalog = ({ cardsData, totalPages, changePopup }) => {
    return (
        <div className="social-network__results results">
            <CardsList cardsData={cardsData} changePopup={changePopup} />
            <Pagination pages={totalPages} />
        </div>
    );
};

Catalog.propTypes = {
    cardsData: PropTypes.arrayOf(PropTypes.object),
    totalPages: PropTypes.arrayOf(PropTypes.number),
    changePopup: PropTypes.func.isRequired,
};

export default Catalog;
