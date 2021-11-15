import './PopupColumns.css';
import PopupChars from './popup-chars/PopupChars';
import { Link } from 'react-router-dom';

const PopupColumns = (props) => {
    const { data } = props;
    return (
        <div className="popup__columns">
        <div className="popup__left">
            <img srcSet={data.avatar}  width="520" height="340" alt={data.email} />
        </div>
        <div className="popup__right">
            <PopupChars 
                data = {
                    [
                        {
                            id : "Фамилия" + data.last_name,
                            name : "Фамилия",
                            value : data.last_name
                        },
                        {
                            id : "Имя" + data.first_name,
                            name : "Имя",
                            value : data.first_name
                        },
                        {
                            id : "Почта" + data.email,
                            name : "Почта",
                            value : data.email
                        }
                    ]
                }
            />
            <Link to="/redaction">
                <button className="button popup__button" type="button">Редактировать</button>
            </Link>
        </div>
    </div>
    );
};

export default PopupColumns;