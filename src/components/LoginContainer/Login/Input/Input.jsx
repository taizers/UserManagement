import './Input.css';
import PropTypes from 'prop-types';
import React from 'react';

const Input = ({ value, name, onChangeValue = null, type = "text", parentClassName, labelValue="" }) => {
    return (
        <div className={parentClassName ? parentClassName + "__input input" : "input"}>
            {labelValue ? <label htmlFor={value + name}>{labelValue}</label> : null}
            <input type={type} id={value + name} name={name} defaultValue={value} onChange={onChangeValue} />
        </div>
    );
};

Input.propTypes = {
    parentClassName: PropTypes.string.isRequired,
    name: PropTypes.string,
    value: PropTypes.string,
    onChangeValue: PropTypes.func,
    type: PropTypes.string,
    labelValue: PropTypes.string,
};

export default Input;
