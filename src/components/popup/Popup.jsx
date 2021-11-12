import { useState } from 'react';
import './Popup.css';
import Redact from './redact/Redact';
import PopupCloseBtn from './redact/popup-close-btn/PopupCloseBtn';
import PopupColumns from './popup-columns/PopupColumns';

const Popup = (props) => {
    let [isRedactActiv, setRedactActiv] = useState(false);
    
    const onCloseBtnClick = () =>{
        props.onChangePopup(false);
    };

    const onRedactBtnClick = () => {
        setRedactActiv(isRedactActiv = true);   
    };
    const onRedactBtnClose = () => {
        setRedactActiv(isRedactActiv = false);   
    };

    if (props.data != null) {
        return (
            <section className="popup popup--active">
                <div className="popup__inner">
                    <PopupCloseBtn onCloseBtnClick = {onCloseBtnClick}/>
                    <div className="popup__date">Дата последнего изменения</div>
                    <h3 className="popup__title">{props.data.last_name} {props.data.first_name}</h3>
                    <PopupColumns onRedactBtnClick = {onRedactBtnClick} data = {props.data}/>
                    <Redact onRedactBtnClose = {onRedactBtnClose} isActiv ={isRedactActiv} data = {props.data}/>
                </div>
            </section>
        );
    }else
    return "";
  }
  
  export default Popup;