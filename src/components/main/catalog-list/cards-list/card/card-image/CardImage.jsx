import './CardImage.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';
import { pathLinks } from '../../../../../../consts';

const CardImage = (props) => {
    const { src, email, id, onCardClick} = props;
    const pathToPopup = generatePath(pathLinks.popup, { id: id });
    return (
        <div className="product__image">
            <Link to = {pathToPopup} onClick ={onCardClick}>
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
