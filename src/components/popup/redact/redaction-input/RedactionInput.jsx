import './RedactionInput.css';

const RedactionInput = (props) => {
    
    return (
        <div className="redaction__input">
            <label htmlFor={props.value + props.name}>{props.name}</label>
            <input type="text" id={props.value + props.name} name={props.value} defaultValue={props.value} onChange = {props.onChangeInputValue} />
        </div>
    );
};

export default RedactionInput;