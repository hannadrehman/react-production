import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';

const GridRow = ({
  children,
}) => (
  <Row>
    {children}
  </Row>
);
GridRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GridRow;
