import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const { Search } = Input;
class TextBoxWithButton extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    onAction: PropTypes.func.isRequired,
    buttonText: PropTypes.string,
  }

  static defaultProps = {
    buttonText: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onSubmit = (value) => {
    const { onAction } = this.props;
    this.setState({
      value: '',
    });
    onAction(value);
  }

  handleChange = (ev) => {
    this.setState({
      value: ev.target.value,
    });
  }

  render() {
    const { placeholder, buttonText } = this.props;
    const { value } = this.state;
    return (
      <React.Fragment>
        <Search
          placeholder={placeholder}
          onSearch={this.onSubmit}
          enterButton={buttonText}
          value={value}
          onChange={this.handleChange}
        />
      </React.Fragment>

    );
  }
}

export default TextBoxWithButton;
