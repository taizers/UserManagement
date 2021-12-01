import './CardContent.css';
import PropTypes from 'prop-types';

const CardContent = ({ userData }) => {
    return (
        <div className="card__content">
            <h3 className="card__title">
                {userData.last_name} {userData.first_name}
            </h3>
            <p className="card__email">{userData.email}</p>
        </div>
    );
};

CardContent.propTypes = {
    userData: PropTypes.object.isRequired,
};

export default CardContent;
