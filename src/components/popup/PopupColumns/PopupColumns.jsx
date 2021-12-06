import './PopupColumns.css';
import PopupChars from './PopupChars/PopupChars';
import { generatePath } from 'react-router';
import { pathLinks } from '../../../consts';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import dateFormat from "dateformat";
import { DATE_MASK } from '../../../consts';
import Button from '../../Button/Button';
import React from 'react';

const getCharsData = (userData) => {
    const charsArray = [
        {
            id: "LastName" + userData.last_name,
            name: "Фамилия",
            value: userData.last_name
        },
        {
            id: "firstName" + userData.first_name,
            name: "Имя",
            value: userData.first_name
        },
        {
            id: "email" + userData.email,
            name: "Почта",
            value: userData.email
        },
    ];

    if (userData.updatedAt) {
        const lastUpdateDate = dateFormat(userData.updatedAt, DATE_MASK);

        charsArray.push({
            id: "lastUpdateDate" + userData.updatedAt,
            name: "Дата поcледнего обновления",
            value: lastUpdateDate
        });
    }
    return charsArray;
};

const PopupColumns = ({ userData }) => {
    const navigate = useNavigate();
    const pathToRedaction = generatePath(pathLinks.redaction, { id: userData.id });

    const onClickRedactionBtn = () => {
        navigate(pathToRedaction);
    };

    return (
        <div className="popup__columns">
            <div className="popup__left">
                <img srcSet={userData.avatar} width="520" height="340" alt={userData.email} />
            </div>
            <div className="popup__right">
                <PopupChars userData={getCharsData(userData)} />
                <Button parentClassName="popup" type="button" textButton="Редактировать" onClick={onClickRedactionBtn} />
            </div>
        </div>
    );
};

PopupColumns.propTypes = {
    userData: PropTypes.object.isRequired,
};

export default PopupColumns;
