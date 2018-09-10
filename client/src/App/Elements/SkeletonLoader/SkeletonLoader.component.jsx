import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';

const SkeletonLoader = ({ avatar }) => (
  <Skeleton loading active avatar={avatar === true} />
);

SkeletonLoader.propTypes = {
  avatar: PropTypes.bool,
};

SkeletonLoader.defaultProps = {
  avatar: false,
};

export default SkeletonLoader;
