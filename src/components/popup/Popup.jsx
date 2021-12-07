import './Popup.css';
import CloseButton from '../CloseButton/CloseButton';
import PopupColumns from './PopupColumns/PopupColumns';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { deleteUser, changeActivePopup } from '../../reducer/actionCreators';
import { getUserRole } from '../../selectors/singIn';

const Popup = ({ popup, changePopup, deleteUserData, userRole }) => {
    const onCloseButtonClick = () => {
        changePopup(null);
    };

    return (
        <section className="popup">
            <div className="popup__inner">
                <CloseButton onClick={onCloseButtonClick} />
                <h3 className="popup__title">{popup.last_name} {popup.first_name}</h3>
                <PopupColumns userData={popup} deleteUser={deleteUserData} userRole={userRole} />
            </div>
        </section>
    );
};

Popup.propTypes = {
    popup: PropTypes.object.isRequired,
    changePopup: PropTypes.func.isRequired,
    deleteUserData: PropTypes.func.isRequired,
    userRole: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        userRole: getUserRole(state),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        changePopup: (popupData) => dispath(changeActivePopup(popupData)),
        deleteUserData: (id) => dispath(deleteUser(id))
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Popup);
