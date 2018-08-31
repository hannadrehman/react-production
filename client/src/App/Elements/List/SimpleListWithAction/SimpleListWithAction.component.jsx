import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

const renderAction = (label, onClick, id) => (
  <span
    onClick={() => onClick(id)}
    role="presentation"
    style={{ color: '#1890ff', cursor: 'pointer' }}
  >
    {label}
  </span>
);

const renderListItems = (item, actionLabel, onClick) => (
  <List.Item
    actions={[renderAction(actionLabel, onClick, item.id)]}
  >
    <List.Item.Meta
      title={item.value}
      description={item.meta ? item.meta : null}
    />
  </List.Item>
);


const SimpleListWithAction = ({
  className, dataSource, actionLabel, onClick,
}) => (
  <List
    className={className}
    itemLayout="horizontal"
    dataSource={dataSource}
    renderItem={item => renderListItems(item, actionLabel, onClick)}
  />
);

SimpleListWithAction.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
  actionLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
SimpleListWithAction.defaultProps = {
  className: '',
};

export default SimpleListWithAction;
