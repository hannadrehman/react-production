import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

class TextBoxWithAddons extends React.PureComponent {
  static propTypes = {
    addonAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    addonBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    prefixIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    suffixIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    defaultValue: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onTextChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.string,
  };

  static defaultProps = {
    addonAfter: '',
    addonBefore: '',
    prefixIcon: '',
    suffixIcon: '',
    defaultValue: '',
    type: 'text',
    size: 'default',
    className: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (ev) => {
    const { onTextChange } = this.props;
    const tempVal = ev.target.value;
    this.setState({
      value: tempVal,
    });
    onTextChange(tempVal);
  }

  render() {
    const {
      addonAfter, addonBefore, prefixIcon, suffixIcon, defaultValue, id, type, placeholder,
      size, className,
    } = this.props;
    const { value } = this.state;
    return (
      <Input
        addonBefore={addonBefore}
        addonAfter={addonAfter}
        prefix={prefixIcon}
        suffix={suffixIcon}
        defaultValue={defaultValue}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={this.handleChange}
        size={size}
        value={value}
        className={className}
      />
    );
  }
}

export default TextBoxWithAddons;
