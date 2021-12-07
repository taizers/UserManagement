import './Reg.css';
import React from 'react';
import Button from '../Button/Button'
import Input from '../LoginContainer/Login/Input/Input';
import { useState } from 'react';
import CryptoJS from 'crypto-js';

const Reg = () => {
    let [login, setLogin] = useState();
    let [password, setPassword] = useState();
    let [key, setKey] = useState();

    const changeLogin = (e) => {
        setLogin(login = e.target.value);
    }

    const changePassword = (e) => {
        setPassword(password = e.target.value);
    }

    const changeKey = (e) => {
        setKey(key = e.target.value);
    }

    const onRegSubmit = (evt) => {
        evt.preventDefault();
        const data = {
            login: login,
            password: CryptoJS.MD5(password).toString(),
            key: key,
        }

        console.log(data);
    }

    return (
        <div className="reg__wrapper">
            <form onSubmit={onRegSubmit} className="form-reg" >
                <Input name="Логин" type="email" parentClassName="reg" onChange={changeLogin} />
                <Input name="Пароль" type="password" parentClassName="reg" onChange={changePassword} />
                <Input name="Ключ" type="password" parentClassName="reg" onChange={changeKey} />
                <Button parentClassName="form-reg" textButton="Зарегистрироваться" />
            </form>
        </div>
    );
};

export default Reg;