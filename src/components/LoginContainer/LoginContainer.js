import './LoginContainer.css';
import Login from './Login/Login';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser, signUpUser } from '../../reducer/actionCreators';
import { getUserRole, getUserIsLoading, getUserError } from '../../selectors/singIn';
import React from 'react';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router';

const LoginContainer = ({ signIn, isLoading, error, signUp }) => {
    const history = useNavigate();
    const onSignIn = (login, password, isLogin) => {
        const data = {
            login: login,
            password: CryptoJS.MD5(password).toString(),
            role: "manager",
        };
        if (isLogin) {
            signIn(data, history);
        }else 
            signUp(data, history);
    };

    return <Login onSignIn={onSignIn} error={error} isLoading={isLoading} />
};

LoginContainer.propTypes = {
    signIn: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    error: PropTypes.string,
    isLoading: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        userRole: getUserRole(state),
        error: getUserError(state),
        isLoading: getUserIsLoading(state),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        signIn: (data, history) => dispath(loadUser(data, history)),
        signUp: (data, history) => dispath(signUpUser(data, history)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(LoginContainer);
