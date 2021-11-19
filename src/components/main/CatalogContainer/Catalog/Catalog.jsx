import './Catalog.css';
import CardsList from './CardsList/CardsList';
import Pagination from './Pagination/Pagination';
import PropTypes from 'prop-types';

const Catalog = ({ cardsData, totalPages }) => {
    return (
        <div className="social-network-app__results results">
            <CardsList cardsData={cardsData} />
            <Pagination pages={totalPages} />
        </div>
    );
};

Catalog.propTypes = {
    cardsData: PropTypes.arrayOf(PropTypes.object),
    totalPages: PropTypes.arrayOf(PropTypes.number),
};

export default Catalog;
