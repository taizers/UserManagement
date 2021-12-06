import './LoginContainer.css';
import React from 'react';
import Button from '../../Button/Button';

const LoginContainer = () => {
    const onRegClick = () => {

    }

    const onloginClick = () => {
        
    }

    return (
        <>
            <Button parentClassName="login" textButton="Войти" type = "button" onClick={onRegClick} />
            <Button parentClassName="reg" textButton="Регистрация" type = "button" onClick={onloginClick} />
        </>
    );
};

export default LoginContainer;