import './ErrorPage.css';
import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../CloseButton/CloseButton';

const ErrorPage = ({ error, onCloseErrorPage }) => {

    return (
        <section className="error">
            <div className="error__inner">
                <CloseButton onClick={onCloseErrorPage} />
                <h2 className="error__title">Ошибка загрузки данных</h2>
                <div className="error__description">
                    <p>Код ошибки: <span>{error ? error : "404"}</span>, проверьте адрес и попробуйте перезагрузить страницу</p>
                </div>
            </div>
        </section>
    );
};

ErrorPage.propTypes = {
    error: PropTypes.string,
    onCloseErrorPage: PropTypes.func.isRequired,
}

export default ErrorPage;
