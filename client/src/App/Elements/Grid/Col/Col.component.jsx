import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';

const GridCol = ({
  size,
  children,
  xs, sm, md, lg, xl,
}) => (
  <Col
    span={size}
    xs={xs || size}
    sm={sm || size}
    md={md || size}
    lg={lg || size}
    xl={xl || size}
  >
    {children}
  </Col>
);
GridCol.defaultProps = {
  size: 24,
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
};
GridCol.propTypes = {
  size: PropTypes.number,
  children: PropTypes.node.isRequired,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

export default GridCol;
