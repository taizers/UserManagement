import './CardContent.css';
import PropTypes from 'prop-types';

const CardContent = ({ userData }) => {
    return (
        <div className="user__content">
            <h3 className="user__title">
                {userData.last_name} {userData.first_name}
            </h3>
            <p className="user__email">{userData.email}</p>
        </div>
    );
};

CardContent.propTypes = {
    userData: PropTypes.object.isRequired,
};

export default CardContent;
