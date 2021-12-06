import './Popup.css';
import CloseButton from '../CloseButton/CloseButton';
import PopupColumns from './PopupColumns/PopupColumns';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { changeActivePopup } from '../../reducer/actionCreators';

const Popup = ({ popup, changePopup }) => {
    const onCloseButtonClick = () => {
        changePopup(null);
    };

    return (
        <section className="popup">
            <div className="popup__inner">
                <CloseButton onClick={onCloseButtonClick} />
                <h3 className="popup__title">{popup.last_name} {popup.first_name}</h3>
                <PopupColumns userData={popup} />
            </div>
        </section>
    );
};

Popup.propTypes = {
    popup: PropTypes.object.isRequired,
    changePopup: PropTypes.func.isRequired,
};

const mapDispathToProps = (dispath) => {
    return {
        changePopup: (popupData) => dispath(changeActivePopup(popupData))
    }
};

export default connect(null, mapDispathToProps)(Popup);
