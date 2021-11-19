import './PopupColumns.css';
import PopupChars from './popup-chars/PopupChars';
import { generatePath } from 'react-router';
import { pathLinks } from '../../../consts';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import dateFormat, { masks } from "dateformat";

const PopupColumns = ({ UserData }) => {
    const charsArray = [
        {
            id : "LastName" + UserData.last_name,
            name : "Фамилия",
            value : UserData.last_name
        },
        {
            id : "firstName" + UserData.first_name,
            name : "Имя",
            value : UserData.first_name
        },
        {
            id : "email" + UserData.email,
            name : "Почта",
            value : UserData.email
        },
    ];

    const navigate = useNavigate();
    const pathToRedaction = generatePath(pathLinks.redaction, { id: UserData.id });

    const onClickRedactionBtn = () =>{
        navigate(pathToRedaction);
    };

    const getDateUpdateDate = () =>{
        if (UserData.createdAt) {
            const date = dateFormat(UserData.createdAt, masks.paddedShortDate); 
            charsArray.push({
                id : "dateLastUpdate" + UserData.email,
                name : "Дата поcледнего обновления",
                value : date
            });
        }
        return charsArray;
    };

    return (
        <div className="popup__columns">
        <div className="popup__left">
            <img srcSet={UserData.avatar}  width="520" height="340" alt={UserData.email} />
        </div>
        <div className="popup__right">
            <PopupChars 
                UserData = { getDateUpdateDate() }
            />
            <button className="button popup__button" type="button" onClick = {onClickRedactionBtn}>Редактировать</button>
        </div>
    </div>
    );
};

PopupColumns.propTypes = {
    UserData: PropTypes.object.isRequired,
};

export default PopupColumns;