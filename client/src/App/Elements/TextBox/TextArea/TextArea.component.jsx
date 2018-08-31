import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

class AppTextArea extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onTextChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    size: PropTypes.string,
    minRows: PropTypes.number,
    maxRows: PropTypes.number,
  };

  static defaultProps = {
    size: 'default',
    className: '',
    minRows: 2,
    maxRows: 6,
  };

  state ={
    value: '',
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
      minRows, maxRows, id, placeholder,
      size, className,
    } = this.props;
    const { value } = this.state;
    return (
      <Input.TextArea
        id={id}
        placeholder={placeholder}
        onChange={this.handleChange}
        size={size}
        value={value}
        className={className}
        autosize={{ minRows, maxRows }}
      />
    );
  }
}

export default AppTextArea;
