import './Login.css';
import React from 'react';
import Button from '../../Button/Button';
import Input from './Input/Input';

const Login = () => {
    const onLoginSubmit = () => {

    }
    return (
        <form onSubmit={onLoginSubmit} >
            <Input name="Логин" type="email" parentClassName="login" />
            <Input name="Пароль" type="password" parentClassName="login" />
            <Button parentClassName="reg" textButton="Регистрация" />
        </form>
    );
};

export default Login;