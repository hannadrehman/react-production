import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';

const AppDatePicker = ({
  showTime, format, placeholder, onChange, onOk,
}) => (
  <DatePicker
    showTime={showTime === true}
    format={format}
    placeholder={placeholder}
    onChange={onChange}
    onOk={onOk}
  />
);
AppDatePicker.propTypes = {
  showTime: PropTypes.bool,
  format: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};
AppDatePicker.defaultProps = {
  showTime: false,
  format: 'DD-MM-YYYY HH:mm:ss',
  placeholder: 'Select Date',
  onOk: () => {},
};
export default AppDatePicker;
