import Card from './card/Card';
import './CardsList.css';
import PropTypes from 'prop-types';

const CardsList = ({ cardsData }) => {
    return (
        <ul className="results__list">
            {
                cardsData.map(item => (
                    <Card key = {item.id} userData = {item}/>
                ))
            }
        </ul>
    );
};

CardsList.propTypes = {
    cardsData: PropTypes.arrayOf(Object).isRequired,
};
 
export default CardsList;
