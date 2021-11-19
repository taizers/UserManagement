import './Redaction.css';
import PopupCloseBtn from '../../CloseButton/CloseButton';
import RedactionInput from './RedactionInput/RedactionInput';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ActionCreators } from '../../../reducer';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Redaction = ({ currentActivePupup, updateServerData, page }) => {
    let [lastName, setLastName] = useState(currentActivePupup.last_name);
    let [firstName, setFirstName] = useState(currentActivePupup.first_name);
    const navigate = useNavigate();

    const onChangeInputFamily = (e) => {
        setLastName(lastName = e.target.value);
    };
    const onChangeInputName = (e) => {
        setFirstName(firstName = e.target.value);
    }; 
    const onSubmitForm = (evt) =>{
        evt.preventDefault();

        if (firstName !== currentActivePupup.first_name || lastName !== currentActivePupup.last_name) {
            const formData = {
                first_name: firstName,
                last_name: lastName,
            };

            currentActivePupup.first_name = formData.first_name;
            currentActivePupup.last_name = formData.last_name;
    
            updateServerData(formData, page, currentActivePupup);
        }
    }; 

    const onCloseButtonClick = () => {
        navigate(-1);
    };

    return (
        <div className="redaction">
            <div className="redaction__inner">
                <PopupCloseBtn onClick={onCloseButtonClick}/>
                <form className="redaction__form" action="/" onSubmit = {onSubmitForm}>
                    <RedactionInput name = "Фамилия" value = {lastName} onChangeInputValue = {onChangeInputFamily}/>
                    <RedactionInput name = "Имя" value = {firstName} onChangeInputValue = {onChangeInputName}/>
                    <button className="button popup__button" type="submit">Сохранить</button>
                </form>
            </div> 
        </div>
    );
};

Redaction.propTypes = {
    currentActivePupup: PropTypes.object.isRequired,
    updateServerData: PropTypes.func.isRequired,
    //page: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {
        currentActivePupup : state.currentActivePupup,
        page: state.currentPage,
    });
};
//ActionCreators['FETCHED_DATA'](currentPage)
const mapDispathToProps = (dispath) => {
    return { 
        updateServerData: (formData, page, popup) => dispath(ActionCreators['PUSHED_DATA'](formData, page, popup)),
    }
};

export default connect(mapStateToProps,mapDispathToProps)(Redaction);