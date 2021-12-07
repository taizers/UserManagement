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
    ];
    
    if (userData.email) {
        charsArray.push({
            id: "email" + userData.email,
            name: "Почта",
            value: userData.email
        });
    }

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

const PopupColumns = ({ userData, deleteUser, userRole }) => {
    const navigate = useNavigate();
    const pathToRedaction = generatePath(pathLinks.redaction, { id: userData._id });

    const onClickRedactionBtn = () => {
        navigate(pathToRedaction);
    };

    const onClickMoreDetailsBtn = () => {
        navigate(pathToRedaction);
    };

    const onClickDeleteBtn = () => {
        deleteUser(userData._id);
    };

    return (
        <div className="popup__columns">
            <div className="popup__left">
                <img srcSet={userData.avatar} width="520" height="340" alt={userData.email} />
            </div>
            <div className="popup__right">
                <PopupChars userData={getCharsData(userData)} />
                {userRole? 
                    <>
                        <Button parentClassName="popup" type="button" textButton="Подробнее" onClick={onClickMoreDetailsBtn} />
                        <Button parentClassName="popup" type="button" textButton="Редактировать" onClick={onClickRedactionBtn} />
                        <Button parentClassName="popup" type="button" textButton="Удалить" onClick={onClickDeleteBtn} />
                    </>
                :null
                }
            </div>
        </div>
    );
};

PopupColumns.propTypes = {
    userData: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired,
    userRole: PropTypes.string,
};

export default PopupColumns;
