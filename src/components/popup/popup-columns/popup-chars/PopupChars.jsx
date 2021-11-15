import './PopupChars.css';
import PopupChar from './popup-char/PopupChar';
import PropTypes from 'prop-types';

const PopupChars = (props) => {
    const { UserData } = props;
    return (
        <ul className="popup__chars chars">
            {
                UserData.map(item => (
                    <PopupChar key = {item.id} name = {item.name} value = {item.value}/>
                ))
            }
        </ul>
    );
};

PopupChars.propTypes = {
    UserData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PopupChars;