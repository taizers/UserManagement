import './Card.css';
import CardImage from './card-image/CardImage';
import CardContent from './card-content/CardContent';
import { connect } from 'react-redux';
import { ActionCreators } from '../../../../../reducer';
import PropTypes from 'prop-types';

const Card = (props) => {
    const { data, onChangePopup } = props;
    const onCardClick = () =>{
        onChangePopup(data.id);
    }; 
    return (
        <li className="results__item product">
            <CardImage src = {data.avatar} email = {data.email} onCardClick = {onCardClick}/>
            <CardContent data = {data} onCardClick = {onCardClick}/>
        </li>
    );
};

Card.propTypes = {
    onChangePopup: PropTypes.func.isRequired,
    data : PropTypes.object.isRequired,
    currentActivePupup: PropTypes.number.isRequired
};


const mapStateToProps = (state,ownProps) => {
    return Object.assign({}, ownProps, {
        currentActivePupup : state.currentActivePupup 
    });
};

const mapDispathToProps = (dispath) => {
    return { 
        onChangePopup: (id) => dispath(ActionCreators['CHANGE_ACTIVE_POPUP'](id))
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Card);
