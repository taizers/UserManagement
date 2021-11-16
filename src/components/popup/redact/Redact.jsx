import './Redact.css';
import PopupCloseBtn from './popup-close-btn/PopupCloseBtn';
import RedactInput from './redact-input/RedactInput';
import { useState } from 'react/cjs/react.development';
import React from 'react';
import { pathLinks } from '../../../consts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ActionCreators, Operation } from '../../../reducer';
import { generatePath } from 'react-router';

const Redact = (props) => {
    const { currentActivePupup, onChangeUserData, updateServerData } = props;

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

        const formData = {
            first_name: firstName,
            last_name: lastName,
        }

        currentActivePupup.first_name = formData.first_name;
        currentActivePupup.last_name = formData.last_name;

        onChangeUserData(currentActivePupup);
        updateServerData(formData,currentActivePupup.id);
    //currentActivePupup.updateAt = response.data
        /* fetch("https://reqres.in/api/users/" + currentActivePupup.id, {
            method: 'POST',
            body: formData
        })
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
        */
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
    updateServerData: PropTypes.func.isRequired,
};

const mapStateToProps = (state,ownProps) => {
    return Object.assign({}, ownProps, {
        currentActivePupup : state.currentActivePupup 
    });
};

const mapDispathToProps = (dispath) => {
    return { 
        onChangeUserData: (changedPupup) => dispath(ActionCreators['CHANGE_USER_DATA'](changedPupup)),
        updateServerData: (formData, id) => dispath(Operation.uptateServerData(formData, id))
    }
};

export default connect(mapStateToProps,mapDispathToProps)(Redact);