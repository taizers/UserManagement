import './LoginContainer.css';
import React from 'react';
import Button from '../../Button/Button';
import { useNavigate } from 'react-router';
import { pathLinks } from '../../../consts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserRole } from '../../../selectors/singIn';
import { loadUserSuccessed, findData } from '../../../reducer/actionCreators';
import Input from '../../LoginContainer/Login/Input/Input'
import { useState } from 'react';
import { requestForData } from '../../../reducer/actionCreators';
import { getCurrentPage } from '../../../selectors/loadData';

const LoginContainer = ({ userRole, logOut, findUser, requestData, currentPage }) => {
    let [request, setRequest] = useState();

    const navigate = useNavigate();

    const changeRequest = (e) => {
        setRequest(request = e.target.value);
    }

    const onloginClick = () => {
        navigate(pathLinks.login);
    }

    const onlogOutClick = () => {
        logOut(null);
    }

    const onAddEmployeeClick = () => {
        navigate(pathLinks.addEmpl);
    }

    const onFindFormSubmit = (evt) => {
        evt.preventDefault();
        findUser(request);
    }

    const onUpdateButtonClick = () => {
        requestData(currentPage);
    }

    if (userRole) {
        return (
            <div className="header__login login">
                <form action="/" className="login__find-form" onSubmit={onFindFormSubmit}>
                    <Input name="request" type="text" parentClassName="find-form" onChangeValue={changeRequest} />
                    <Button parentClassName="find-form" textButton="Найти" />
                </form>
                <h3 className="login__name">{userRole.login}</h3>
                <Button parentClassName="login" textButton="Выйти" type="button" onClick={onlogOutClick} />
                <Button parentClassName="add-in-employee" textButton="Добавить сотрудника" type="button" onClick={onAddEmployeeClick} />
                <Button parentClassName="login-update-user" textButton="Обновить" type="button" onClick={onUpdateButtonClick} />
            </div>
        );
    }
    return (
        <div className="header__login login">
            <Button parentClassName="login" textButton="Войти" type = "button" onClick={onloginClick} />
        </div>
    );
};

LoginContainer.propTypes = {
    userRole: PropTypes.object,
    logOut: PropTypes.func.isRequired,
    findUser: PropTypes.func.isRequired,
    requestData: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        userRole: getUserRole(state),
        currentPage: getCurrentPage(state),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        logOut: (data) => dispath(loadUserSuccessed(data)),
        findUser: (data) => dispath(findData(data)),
        requestData: (currentPage) => dispath(requestForData(currentPage)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(LoginContainer);