import React from 'react';
import { Outlet, Navigate } from 'react-router';
import PropTypes from 'prop-types';

const PrivateRoute = ({ isAuthenticated, path }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to={path} />;
};

PrivateRoute.propTypes = {
    path: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;