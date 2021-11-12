import './Redact.css';
import PopupCloseBtn from './popup-close-btn/PopupCloseBtn';
import RedactInput from './redact-input/RedactInput';
import { useState } from 'react/cjs/react.development';

const Redact = (props) => {
    let [isFamily,setFamily] = useState(props.data.last_name);
    let [isName,setName] = useState(props.data.first_name);

    const onCloseBtnClick = () =>{
        props.onRedactBtnClose();
    };

    const onChangeInputFamily = (e) => {
        setFamily(isFamily = e.target.value);
    };
    const onChangeInputName = (e) => {
        setName(isName = e.target.value);
    };
    const updateDate = (data) =>{
        console.log("++++2 " , data);
    };

    const onRedactBtnClick = () => {
        if (isName !== props.data.first_name || isFamily !== props.data.last_name) {
            const put = {
                "last_name" : isFamily,
                "first_name" : isName
            };

            const requestOptions = {
                method: 'PUT',
                headers: { 'data': 'application/json' },
                body: JSON.stringify(put)
            };

            fetch("https://reqres.in/api/users?page=" + props.data.id, requestOptions)
                .then(response => response.json())
                .then(data => updateDate(data));
        }
    };

    if (props.isActiv) {
        return (
            <div className="redact redact--active">
                <div className="redact__inner">
                    <PopupCloseBtn onCloseBtnClick ={onCloseBtnClick}/>
                    <div className="redact__wrapper">
                        <RedactInput name = "Фамилия" value = {isFamily} onChangeInputValue = {onChangeInputFamily}/>
                        <RedactInput name = "Имя" value = {isName} onChangeInputValue = {onChangeInputName}/>
                        <button className="button popup__button" type="button" onClick = {onRedactBtnClick}>Сохранить</button>
                    </div>
                </div> 
            </div>
        );
    }else
    return ""
    
};

export default Redact;