import './Header.css';
import React from 'react';
import LoginContainer from './LoginContainer/LoginContainer';

const Header = () => {
    return (
        <>
            <h1 className="visually-hidden">Главная</h1>
            <div className="social-network__blueline">
                <LoginContainer />
            </div>
        </>
    );
};

export default Header;
