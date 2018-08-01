import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { ROUTE_ERROR } from 'Constants/app/app.constants';

const getRoute = (component, path, exact, roles, user) => {
  try {
    if (typeof roles === 'string' && roles === '*') {
      return <Route exact={exact} component={component} path={path} />;
    }
    if (Array.isArray(roles) && roles.length > 0 && roles.includes(user.role)) {
      return <Route exact={exact} component={component} path={path} />;
    }
    return <Redirect to={`/error/${ROUTE_ERROR.UNAUTHORIZED}`} />;
  } catch (e) {
    return <Redirect to={`/error/${ROUTE_ERROR.FORBIDDEN}`} />;
  }
};

const AuthorizedRoute = ({
  component, path, exact, roles, user,
}) => getRoute(component, path, exact, roles, user);

AuthorizedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  user: PropTypes.object,
  roles: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

AuthorizedRoute.defaultProps = {
  exact: false,
  roles: '*',
};

export default AuthorizedRoute;
