import './RedactionInput.css';
import PropTypes from 'prop-types';

const RedactionInput = ({ value, name, onChangeValue }) => {
    return (
        <div className="redaction__input">
            <label htmlFor={value + name}>{name}</label>
            <input type="text" id={value + name} name={value} defaultValue={value} onChange={onChangeValue} />
        </div>
    );
};

RedactionInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeValue: PropTypes.func.isRequired,
};

export default RedactionInput;
