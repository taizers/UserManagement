import './PopupColumns.css';
import PopupChars from './popup-chars/PopupChars';
import { generatePath } from 'react-router';
import { pathLinks } from '../../../consts';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PopupColumns = ({ UserData }) => {
    const navigate = useNavigate();
    const pathToRedaction = generatePath(pathLinks.redaction, { id: UserData.id });

    const onClickRedactionBtn = () =>{
        navigate(pathToRedaction);
    };

    return (
        <div className="popup__columns">
        <div className="popup__left">
            <img srcSet={UserData.avatar}  width="520" height="340" alt={UserData.email} />
        </div>
        <div className="popup__right">
            <PopupChars 
                UserData = {
                    [
                        {
                            id : "Фамилия" + UserData.last_name,
                            name : "Фамилия",
                            value : UserData.last_name
                        },
                        {
                            id : "Имя" + UserData.first_name,
                            name : "Имя",
                            value : UserData.first_name
                        },
                        {
                            id : "Почта" + UserData.email,
                            name : "Почта",
                            value : UserData.email
                        }
                    ]
                }
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