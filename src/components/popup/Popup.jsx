import './Popup.css';
import PopupCloseBtn from './redact/popup-close-btn/PopupCloseBtn';
import PopupColumns from './popup-columns/PopupColumns';
import { pathLinks } from '../../consts';
import PropTypes from 'prop-types';
import React from 'react';

const Popup = (props) => {
    const { data } = props;

    return (
        <React.Fragment>
            <section className="popup popup--active">
                <div className="popup__inner">
                    <PopupCloseBtn closeSymbol={pathLinks.home}/>
                    <div className="popup__date">Дата последнего изменения</div>
                    <h3 className="popup__title">{data.last_name} {data.first_name}</h3>
                    <PopupColumns data = {data}/>
                </div>
            </section>
        </React.Fragment>
    );

  };
  Popup.propTypes = {
    data: PropTypes.object
  };
  export default Popup;