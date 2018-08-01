import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const AppButton = ({
  disabled, url,
  icon, shape,
  loading, type,
  onClick, label,
  meta,
}) => (
  <Button
    disabled={disabled}
    url={url}
    icon={icon}
    loading={loading}
    shape={shape}
    type={type}
    onClick={onClick}
    data-meta={meta}
  >
    {label}

  </Button>
);
AppButton.defaultProps = {
  disabled: false,
  url: null,
  icon: null,
  loading: false,
  shape: null,
  type: 'primary',
  meta: null,
};
AppButton.propTypes = {
  disabled: PropTypes.bool,
  url: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  loading: PropTypes.bool,
  shape: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default AppButton;
