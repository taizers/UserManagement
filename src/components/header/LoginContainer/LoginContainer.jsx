import './LoginContainer.css';
import React from 'react';
import Button from '../../Button/Button';
import { useNavigate } from 'react-router';
import { pathLinks } from '../../../consts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserRole } from '../../../selectors/singIn';
import { loadUserSuccessed } from '../../../reducer/actionCreators';


const LoginContainer = ({ userRole, logOut }) => {
    const navigate = useNavigate();

    const onloginClick = () => {
        navigate(pathLinks.login);
    }

    const onlogOutClick = () => {
        logOut(null);
    }

    const onAddEmployeeClick = () => {
        navigate(pathLinks.addEmpl);
    }

    if (userRole) {
        return (
            <div className="header__login login">
                <h3 className="login__name">{userRole.login}</h3>
                <Button parentClassName="login" textButton="Выйти" type = "button" onClick={onlogOutClick} />
                <Button parentClassName="add-in-employee" textButton="Добавить сотрудника" type = "button" onClick={onAddEmployeeClick} />
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
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        userRole: getUserRole(state),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        logOut: (data) => dispath(loadUserSuccessed(data)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(LoginContainer);