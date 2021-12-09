import './Login.css';
import React from 'react';
import Button from '../../Button/Button'
import Input from './Input/Input';
import { useState } from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../../CloseButton/CloseButton';
import { useNavigate } from 'react-router';
import { pathLinks } from '../../../consts';

const Login = ({ onSignIn, isLoading, error }) => {
    let [login, setLogin] = useState();
    let [password, setPassword] = useState();
    let [key, setKey] = useState();
    let [isSignIn, setSignIn] = useState(true);

    const navigate = useNavigate();

    const changeLogin = (e) => {
        setLogin(login = e.target.value);
    }

    const changePassword = (e) => {
        setPassword(password = e.target.value);
    }

    const changeKey = (e) => {
        setKey(key = e.target.value);
    }

    const changeSignIn = () => {
        const isSignInValue = isSignIn;
        setSignIn(isSignIn = !isSignInValue);
    }

    const onCloseButtonClick = () => {
        navigate(pathLinks.home);
    }

    const onSubmitLogin = (evt) => {
        evt.preventDefault();

        if (key === "1111" && !isSignIn) {
            onSignIn(login, password, isSignIn);
        } else {
            if (isSignIn) {
                onSignIn(login, password, isSignIn);
            }
        }
    }
    
    return (
        <div className="login__wrapper">
            <form onSubmit={onSubmitLogin} className="form-login" >
                <CloseButton onClick={onCloseButtonClick} />
                <Input labelValue="Логин" name="email" type="email" parentClassName="login" onChangeValue={changeLogin}/>
                <Input labelValue="Пароль" name="password" type="password" parentClassName="login" onChangeValue={changePassword}/>
                {isSignIn ? null : <Input name="Ключ" type="password" parentClassName="reg" onChangeValue={changeKey} /> }
                <Button parentClassName="form-login" textButton={isSignIn? "Войти": "Зарегистрироваться"} />
                <Button parentClassName="form-signUp" type="button" textButton={isSignIn? "Нет аккаунта?": "К авторизации"} onClick={changeSignIn} />
                {isLoading? <h3 className="form-login__loading">Loading...</h3> : null}
                {error ? <h3 className="form-login__error">{error}</h3> : null}
            </form>
        </div>
    );
};

Login.propTypes = {
    onSignIn: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
};

export default Login;