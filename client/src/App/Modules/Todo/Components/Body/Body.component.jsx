import React from 'react';
import PropTypes from 'prop-types';

import './Body.styles.scss';

const Body = ({ todos, click }) => (
  <div className="tbody tbody__wrapper ant-list-bordered">
    {
      todos.map(item => (
        <p
          style={{ cursor: 'pointer' }}
          className={`ant-list-item ${item.checked ? 'done' : ''}`}
          key={item.id}
          onClick={click}
          data-item-id={item.id}
          role="presentation"
        >
          {item.value}
          {' '}
        </p>
      ))
    }
  </div>
);

Body.propTypes = {
  todos: PropTypes.array.isRequired,
  click: PropTypes.func.isRequired,
};
export default Body;
