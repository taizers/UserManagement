import './PopupChar.css'

const PopupChar = (props) => {
    return (
        <li className="chars__item">
            <div className="chars__name">{props.name}</div>
            <div className="chars__value">{props.value}</div>
        </li>
    );
};

export default PopupChar;