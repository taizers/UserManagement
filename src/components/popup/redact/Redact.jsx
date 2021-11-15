import './Redact.css';
import PopupCloseBtn from './popup-close-btn/PopupCloseBtn';
import RedactInput from './redact-input/RedactInput';
import { useState } from 'react/cjs/react.development';
import React from 'react';
import { pathLinks } from '../../../consts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ActionCreators } from '../../../reducer';
import { generatePath } from 'react-router';

const Redact = (props) => {
    const { currentActivePupup, onChangeUserData } = props;

    let [lastName,setLastName] = useState(currentActivePupup.last_name);
    let [firstName,setFirstName] = useState(currentActivePupup.first_name);

    const pathToPopup = generatePath(pathLinks.popup, { id: currentActivePupup.id });

    const onChangeInputFamily = (e) => {
        setLastName(lastName = e.target.value);
    };
    const onChangeInputName = (e) => {
        setFirstName(firstName = e.target.value);
    }; 
    const onSubmitForm = (evt) =>{
        evt.preventDefault();
        currentActivePupup.first_name = firstName;
        currentActivePupup.last_name = lastName;
        console.log(currentActivePupup);
        onChangeUserData(currentActivePupup);
    };

    return (
        <div className="redact redact--active">
            <div className="redact__inner">
                <PopupCloseBtn closePath={pathToPopup}/>
                <form className="redact__form" action="" onSubmit = {onSubmitForm}>
                    <RedactInput name = "Фамилия" value = {lastName} onChangeInputValue = {onChangeInputFamily}/>
                    <RedactInput name = "Имя" value = {firstName} onChangeInputValue = {onChangeInputName}/>
                    <button className="button popup__button" type="submit">Сохранить</button>
                </form>
            </div> 
        </div>
    );
    
};

Redact.propTypes = {
    currentActivePupup: PropTypes.object.isRequired,
    onChangeUserData: PropTypes.func.isRequired,
};

const mapStateToProps = (state,ownProps) => {
    return Object.assign({}, ownProps, {
        currentActivePupup : state.currentActivePupup 
    });
};

const mapDispathToProps = (dispath) => {
    return { 
        onChangeUserData: (changedPupup) => dispath(ActionCreators['CHANGE_USER_DATA'](changedPupup))
    }
};

export default connect(mapStateToProps,mapDispathToProps)(Redact);