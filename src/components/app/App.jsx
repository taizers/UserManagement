import './App.css';
import Main from '../Main/Main';
import ErrorPage from '../ErrorPage/ErrorPage';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import RedactionContainer from '../RedactionContainer/RedactionContainer';
import LoginContainer from '../LoginContainer/LoginContainer';
import AddEmployee from '../AddEmployee/AddEmployee';
import { pathLinks } from '../../consts';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserRole } from '../../selectors/singIn';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { useNavigate } from 'react-router';

const App = ({ userRole }) => {
  const navigate = useNavigate();

  const onCloseErrorPage = () => {
    navigate(pathLinks.home);
  }

  return <Routes>
    <Route path={pathLinks.home} element={<Main />} />
    <Route path={pathLinks.error} element={<ErrorPage onCloseErrorPage={onCloseErrorPage}  />} />
    <Route path={pathLinks.login} element={<LoginContainer />} />
    <Route exact path={pathLinks.redaction} element={<PrivateRoute isAuthenticated={userRole? true : false} path={pathLinks.login} />}>
      <Route exact path={pathLinks.redaction} element={<RedactionContainer />}/>
    </Route>
    <Route exact path={pathLinks.addEmpl} element={<PrivateRoute isAuthenticated={userRole? true : false} path={pathLinks.login} />}>
      <Route exact path={pathLinks.addEmpl} element={<AddEmployee />}/>
    </Route>
    <Route path="/" element={<Navigate replace to={pathLinks.home} />} />
    <Route path="*" element={<Navigate replace to={pathLinks.error} />} />
  </Routes>
};

App.propTypes = {
  userRole: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  return {
      ...ownProps,
      userRole: getUserRole(state),
  };
};

export default connect(mapStateToProps)(App);
