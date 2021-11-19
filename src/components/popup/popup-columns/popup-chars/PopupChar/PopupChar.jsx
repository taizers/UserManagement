import './PopupChar.css'

const PopupChar = ({ name, value }) => {
    return (
        <li className="chars__item">
            <div className="chars__name">{name}</div>
            <div className="chars__value">{value}</div>
        </li>
    );
};

export default PopupChar;
