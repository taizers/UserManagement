import './PopupColumns.css';
import PopupChars from './popup-chars/PopupChars';

const PopupColumns = (props) => {
    return (
        <div className="popup__columns">
        <div className="popup__left">
            <img srcSet={props.data.avatar}  width="520" height="340" alt={props.data.email} />
        </div>
        <div className="popup__right">
            <PopupChars 
                data = {
                    [
                        {
                            id : "Фамилия" + props.data.last_name,
                            name : "Фамилия",
                            value : props.data.last_name
                        },
                        {
                            id : "Имя" + props.data.first_name,
                            name : "Имя",
                            value : props.data.first_name
                        },
                        {
                            id : "Почта" + props.data.email,
                            name : "Почта",
                            value : props.data.email
                        }
                    ]
                }
            />
            <button className="button popup__button" type="button" onClick = {props.onRedactBtnClick}>Редактировать</button>
        </div>
    </div>
    );
};

export default PopupColumns;