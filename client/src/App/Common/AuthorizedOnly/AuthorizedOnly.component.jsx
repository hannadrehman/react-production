import React from 'react';
import PropTypes from 'prop-types';

const AuthorizeOnly = ({ children, allowedRoles, user }) => (
  allowedRoles.includes(user.role)
  && (
  <React.Fragment>
    {children}
  </React.Fragment>
  )
);

AuthorizeOnly.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default AuthorizeOnly;
