import './CardContent.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardContent = ({ userData, onCardClick }) => {
    return (
        <div className="card__content">
            <h3 className="card__title">
                <Link to="" onClick={onCardClick}>
                    {userData.last_name} {userData.first_name}
                </Link>
            </h3>
            <p className="card__email">{userData.email}</p>
        </div>
    );
};

CardContent.propTypes = {
    onCardClick: PropTypes.func.isRequired,
    userData: PropTypes.object.isRequired,
};

export default CardContent;
