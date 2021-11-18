import './Card.css';
import CardImage from './card-image/CardImage';
import CardContent from './card-content/CardContent';
import { connect } from 'react-redux';
import { Operation, ActionCreators } from '../../../../../reducer';
import PropTypes from 'prop-types';

const Card = ({ userData, changePopup }) => {
    const onCardClick = () =>{
        //changePopup(userData.id);
        changePopup(userData);
    }; 
    return (
        <li className="results__item product">
            <CardImage src = {userData.avatar} email = {userData.email} id = {userData.id} onCardClick = {onCardClick}/>
            <CardContent userData = {userData} onCardClick = {onCardClick}/>
        </li>
    );
};

Card.propTypes = {
    changePopup: PropTypes.func.isRequired,
    userData : PropTypes.object.isRequired,
};

const mapDispathToProps = (dispath) => {
    return { 
        //changePopup: (id) => dispath(Operation.changePopup(id))
        changePopup: (userData) => dispath(ActionCreators["CHANGE_ACTIVE_POPUP"](userData))
    }
};

export default connect(null, mapDispathToProps)(Card);
