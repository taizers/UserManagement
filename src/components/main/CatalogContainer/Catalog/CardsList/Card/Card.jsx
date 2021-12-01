import './Card.css';
import CardImage from './CardImage/CardImage';
import CardContent from './CardContent/CardContent';
import PropTypes from 'prop-types';

const Card = ({ userData, changePopup }) => {
    const onCardClick = () => {
        changePopup(userData);
    };
    return (

        <li className="results__item product" onClick={onCardClick}>
            <CardImage src={userData.avatar} email={userData.email} id={userData.id} />
            <CardContent userData={userData} />
        </li>
    );
};

Card.propTypes = {
    changePopup: PropTypes.func.isRequired,
    userData: PropTypes.object.isRequired,
};

export default Card;
