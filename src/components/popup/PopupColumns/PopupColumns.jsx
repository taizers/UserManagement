import './PopupColumns.css';
import PopupChars from './PopupChars/PopupChars';
import { generatePath } from 'react-router';
import { pathLinks } from '../../../consts';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import dateFormat, { masks } from "dateformat";

const PopupColumns = ({ userData }) => {
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

    const navigate = useNavigate();
    const pathToRedaction = generatePath(pathLinks.redaction, { id: userData.id });

    const onClickRedactionBtn = () => {
        navigate(pathToRedaction);
    };

    const getDateUpdateDate = () => {
        if (userData.updatedAt) {
            const date = dateFormat(userData.updatedAt, masks.paddedShortDate);
            charsArray.push({
                id: "lastUpdateDate" + userData.updatedAt,
                name: "Дата поcледнего обновления",
                value: date
            });
        }
        return charsArray;
    };

    return (
        <div className="popup__columns">
            <div className="popup__left">
                <img srcSet={userData.avatar} width="520" height="340" alt={userData.email} />
            </div>
            <div className="popup__right">
                <PopupChars
                    userData={getDateUpdateDate()}
                />
                <button className="button popup__button" type="button" onClick={onClickRedactionBtn}>Редактировать</button>
            </div>
        </div>
    );
};

PopupColumns.propTypes = {
    userData: PropTypes.object.isRequired,
};

export default PopupColumns;
