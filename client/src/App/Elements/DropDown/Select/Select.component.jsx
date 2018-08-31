import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

class AppSelect extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })).isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    width: PropTypes.number,
    onValueSelect: PropTypes.func.isRequired,
  }

  static defaultProps = {
    width: 200,
  }

  state={
    selected: null,
  }

  handleSelect = (value, option) => {
    const { onValueSelect } = this.props;
    this.setState({
      selected: value,
    });
    onValueSelect({
      id: option.key,
      value,
    });
  }

  renderOptions = options => (
    options.map(current => (
      <Option key={current.id} value={current.value}>
        {current.value}
      </Option>
    ))
  )


  render() {
    const {
      options, placeholder, name, width,
    } = this.props;
    const { selected } = this.state;
    return (
      <Select
        showSearch
        onSelect={this.handleSelect}
        placeholder={placeholder}
        name={name}
        style={{ width }}
        value={selected || undefined}
      >
        {
          this.renderOptions(options)
        }
      </Select>
    );
  }
}

export default AppSelect;
