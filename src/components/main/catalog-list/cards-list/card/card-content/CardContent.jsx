import './CardContent.css';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';
import { pathLinks } from '../../../../../../consts';
import PropTypes from 'prop-types';

const CardContent = (props) => {
    const { userData, onCardClick} = props;
    
    const pathToPopup = generatePath(pathLinks.popup, { id: userData.id });

    return (
        <div className="card__content">
            <h3 className="card__title">
                <Link to={pathToPopup} onClick ={onCardClick}>
                    {userData.last_name} {userData.first_name}
                </Link>
            </h3>
            <p className="card__email">{userData.email}</p>
        </div>
    );
};

CardContent.propTypes = {
    onCardClick: PropTypes.func.isRequired,
    userData : PropTypes.object.isRequired,
};

export default CardContent;