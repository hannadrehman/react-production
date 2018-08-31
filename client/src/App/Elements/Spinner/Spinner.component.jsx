import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

const Spinner = ({ visible, size }) => (
  <React.Fragment>
    {
      visible
      && <Spin size={size} />
    }
  </React.Fragment>
);

Spinner.propTypes = {
  visible: PropTypes.bool.isRequired,
  size: PropTypes.string,
};
Spinner.defaultProps = {
  size: 'default',
};

export default Spinner;
