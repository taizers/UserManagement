import './RedactInput.css';

const RedactInput = (props) => {
    
    return (
        <div className="redact__min-square">
            <label htmlFor={props.value + props.name}>{props.name}</label>
            <input type="text" id={props.value + props.name} name={props.value} defaultValue={props.value} onChange = {props.onChangeInputValue} />
        </div>
    );
};

export default RedactInput;