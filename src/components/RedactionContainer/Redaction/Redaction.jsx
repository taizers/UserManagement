import './Redaction.css';
import RedactionInput from './RedactionInput/RedactionInput';
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { pathLinks } from '../../../consts';
import Button from '../../Button/Button';

const Redaction = ({ currentActivePupup, updateServerData, currentPage, changePopup }) => {
    let [lastName, setLastName] = useState(currentActivePupup.last_name);
    let [firstName, setFirstName] = useState(currentActivePupup.first_name);
    let [isDisabled, setDisabledButton] = useState(true);

    const navigate = useNavigate();

    const onChangeInputFamily = (e) => {
        setLastName(lastName = e.target.value);
        changeActivitySaveButton();
    };
    const onChangeInputName = (e) => {
        setFirstName(firstName = e.target.value);
        changeActivitySaveButton();
    };

    const onSubmitForm = (evt) => {
        evt.preventDefault();

        if (firstName !== currentActivePupup.first_name || lastName !== currentActivePupup.last_name) {
            const formData = {
                first_name: firstName,
                last_name: lastName,
            };

            updateServerData(formData, currentActivePupup.id, currentPage);
            setDisabledButton(isDisabled = true);
        }
    };

    const changeActivitySaveButton = () => {
        if (firstName !== currentActivePupup.first_name || lastName !== currentActivePupup.last_name) {
            setDisabledButton(isDisabled = false);
        }else
        {
            setDisabledButton(isDisabled = true);
        }
    };
    
    const onCloseButtonClick = () => {
        changePopup(null);
        navigate(pathLinks.home);
    };

    return (
        <div className="redaction">
            <div className="redaction__inner">
                <form className="redaction__form" action="/" onSubmit={onSubmitForm}>
                    <RedactionInput name="Фамилия" value={lastName} onChangeValue={onChangeInputFamily} />
                    <RedactionInput name="Имя" value={firstName} onChangeValue={onChangeInputName} />

                    <Button parentClassName="redaction" isDisabled={isDisabled} textButton="Сохранить" />
                    <Button parentClassName="redaction" type="button" textButton="Выход" onClick={onCloseButtonClick} />
                </form>
            </div>
        </div>
    );
};

Redaction.propTypes = {
    currentActivePupup: PropTypes.object.isRequired,
    updateServerData: PropTypes.func.isRequired,
    changePopup: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
};

export default Redaction;
