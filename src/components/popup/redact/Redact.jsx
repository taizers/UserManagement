import './Redact.css';
import PopupCloseBtn from './popup-close-btn/PopupCloseBtn';
import RedactInput from './redact-input/RedactInput';
import { useState } from 'react/cjs/react.development';
import React from 'react';
import { pathLinks } from '../../../consts';

const Redact = (props) => {
    const { data } = props;

    let [isFamily,setFamily] = useState(data.last_name);
    let [isName,setName] = useState(data.first_name);

    const onChangeInputFamily = (e) => {
        setFamily(isFamily = e.target.value);
    };
    const onChangeInputName = (e) => {
        setName(isName = e.target.value);
    };
    const onSubmitForm = (evt) =>{
        evt.preventDefault();
        alert(isFamily +" "+  isName);
    };

    return (
        <div className="redact redact--active">
            <div className="redact__inner">
                <PopupCloseBtn closeSymbol={pathLinks.popup}/>
                <form className="redact__form" action="" onSubmit = {onSubmitForm}>
                    <RedactInput name = "Фамилия" value = {isFamily} onChangeInputValue = {onChangeInputFamily}/>
                    <RedactInput name = "Имя" value = {isName} onChangeInputValue = {onChangeInputName}/>
                    <button className="button popup__button" type="submit">Сохранить</button>
                </form>
            </div> 
        </div>
    );
    
};

export default Redact;