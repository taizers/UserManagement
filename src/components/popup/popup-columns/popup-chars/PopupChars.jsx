import './PopupChars.css';
import PopupChar from './PopupChar/PopupChar';
import PropTypes from 'prop-types';

const PopupChars = ({ UserData }) => {
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