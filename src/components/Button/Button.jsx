import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ parentClassName, textButton, type = "submit", onClick = null, isDisabled = false, }) => {
    return (
        <button disabled={isDisabled} className={parentClassName? parentClassName + "__button button": "button"} type={type}  onClick={onClick} >{textButton}</button>
    );
};

Button.propTypes = {
    parentClassName: PropTypes.string,
    textButton: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
};

export default Button;