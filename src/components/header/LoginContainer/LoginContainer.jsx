import './LoginContainer.css';
import React from 'react';
import Button from '../../Button/Button';
import { useNavigate } from 'react-router';
import { pathLinks } from '../../../consts';

const LoginContainer = () => {
    const navigate = useNavigate();

    const onloginClick = () => {
        navigate(pathLinks.login);
    }

    return (
        <div className="login-buttons">
            <Button parentClassName="login" textButton="Войти" type = "button" onClick={onloginClick} />
        </div>
    );
};

export default LoginContainer;