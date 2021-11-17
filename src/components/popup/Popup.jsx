import './Popup.css';
import PopupCloseBtn from './redaction/popup-close-btn/PopupCloseBtn';
import PopupColumns from './popup-columns/PopupColumns';
import { pathLinks } from '../../consts';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const Popup = ({ currentActivePupup }) => {

    return (
        <section className="popup">
            <div className="popup__inner">
                <PopupCloseBtn closePath={pathLinks.home}/>
                <div className="popup__date">{currentActivePupup.updateAt? currentActivePupup.updateAt: ""}</div>
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

export default connect(mapStateToProps)(Popup);
