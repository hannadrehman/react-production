import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu, Dropdown, Button, Icon,
} from 'antd';

const renderMenu = (dataSet, handleClick) => (
  <Menu onClick={handleClick}>
    {
      dataSet.map(currentItem => (
        <Menu.Item key={currentItem.id}>
          {currentItem.value}
        </Menu.Item>
      ))
    }
  </Menu>
);

const AppDropDown = ({
  dataSet,
  onValueSelect,
}) => (
  <Dropdown overlay={renderMenu(dataSet, onValueSelect)}>
    <Button style={{ marginLeft: 8 }}>
        Select
      <Icon type="down" />
    </Button>
  </Dropdown>
);
AppDropDown.propTypes = {
  dataSet: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  })).isRequired,
  onValueSelect: PropTypes.func.isRequired,
};

export default AppDropDown;
