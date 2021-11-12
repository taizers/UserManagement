import './PopupChars.css';
import PopupChar from './popup-char/PopupChar';

const PopupChars = (props) => {
    return (
        <ul className="popup__chars chars">
            {
                props.data.map(item => (
                    <PopupChar key = {item.id} name = {item.name} value = {item.value}/>
                ))
            }
        </ul>
    );
};

export default PopupChars;