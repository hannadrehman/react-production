import React from 'react';
import PropTypes from 'prop-types';

import { Alert } from 'antd';

const AppAlert = ({
  message, description, type, closable, onClose,
}) => (
  <div>
    <Alert
      message={message}
      description={description}
      type={type}
      closable={closable === true}
      onClose={onClose}
      showIcon
    />
  </div>
);

AppAlert.propTypes = {
  message: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string,
  closable: PropTypes.bool,
  onClose: PropTypes.func,
};
AppAlert.defaultProps = {
  closable: false,
  onClose: () => {},
  type: 'error',
  description: '',
};


export default AppAlert;
