import './CardImage.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardImage = ({ src, email, onCardClick}) => {
    return (
        <div className="card__image">
            <Link to = "" onClick ={onCardClick}>
                <img src={src}  width="200" height="200" alt={email} />
            </Link> 
        </div>
    );
};

CardImage.propTypes = {
    onCardClick: PropTypes.func.isRequired,
    src : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
};

export default CardImage;
