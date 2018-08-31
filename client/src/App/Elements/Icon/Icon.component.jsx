import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

const AppIcon = ({ type, style }) => (
  <Icon type={type} style={style} />
);

AppIcon.propTypes = {
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
};
AppIcon.defaultProps = {
  style: {},
};

export default AppIcon;
