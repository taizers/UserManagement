import './Popup.css';
import CloseButton from '../CloseButton/CloseButton';
import PopupColumns from './popup-columns/PopupColumns';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../../reducer';

const Popup = ({ currentActivePupup, changePopup }) => {

    const onCloseButtonClick = () =>{
        changePopup(null);
    };

    return (
        <section className="popup">
            <div className="popup__inner">
                <CloseButton onClick={onCloseButtonClick}/>
                <div className="popup__date">{currentActivePupup.updateAt ? currentActivePupup.updateAt: ""}</div>
                <h3 className="popup__title">{currentActivePupup.last_name} {currentActivePupup.first_name}</h3>
                <PopupColumns UserData = {currentActivePupup}/>
            </div>
        </section>
    );
};

Popup.propTypes = {
    currentActivePupup: PropTypes.object.isRequired,
};

const mapStateToProps = (state,ownProps) => {
    return Object.assign({}, ownProps, {
        currentActivePupup : state.currentActivePupup 
    });
};

const mapDispathToProps = (dispath) => {
    return { 
        changePopup: (popupData) => dispath(ActionCreators["CHANGE_ACTIVE_POPUP"](popupData))
    }
};

export default connect(mapStateToProps,mapDispathToProps)(Popup);
