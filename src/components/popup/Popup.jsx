import './Popup.css';
import CloseButton from '../CloseButton/CloseButton';
import PopupColumns from './PopupColumns/PopupColumns';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getActivePopup } from '../../selectors/setActivPopup';
import actionCreators from '../../reducer/actionCreators';

const Popup = ({ currentActivePupup, changePopup }) => {
    const onCloseButtonClick = () => {
        changePopup(null);
    };

    return (
        <section className="popup">
            <div className="popup__inner">
                <CloseButton onClick={onCloseButtonClick} />
                <h3 className="popup__title">{currentActivePupup.last_name} {currentActivePupup.first_name}</h3>
                <PopupColumns userData={currentActivePupup} />
            </div>
        </section>
    );
};

Popup.propTypes = {
    currentActivePupup: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        currentActivePupup: getActivePopup(state),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        changePopup: (popupData) => dispath(actionCreators["CHANGE_ACTIVE_POPUP"](popupData))
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Popup);
