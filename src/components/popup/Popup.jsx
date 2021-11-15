import './Popup.css';
import PopupCloseBtn from './redact/popup-close-btn/PopupCloseBtn';
import PopupColumns from './popup-columns/PopupColumns';
import { pathLinks } from '../../consts';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const Popup = (props) => {
    const { currentActivePupup } = props;

    return (
        <React.Fragment>
            <section className="popup popup--active">
                <div className="popup__inner">
                    <PopupCloseBtn closePath={pathLinks.home}/>
                    <div className="popup__date">Дата последнего изменения</div>
                    <h3 className="popup__title">{currentActivePupup.last_name} {currentActivePupup.first_name}</h3>
                    <PopupColumns UserData = {currentActivePupup}/>
                </div>
            </section>
        </React.Fragment>
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
