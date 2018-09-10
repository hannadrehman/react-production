import React from 'react';
import PropTypes from 'prop-types';
import { Spinner, SkeletonLoader } from 'Elements';

const LoadingFallback = ({
  type, loading, children, size, avatar,
}) => (
  <React.Fragment>
    {
      loading === true
        ? (
          <div className="flex flex--center padding padding--lg">
            {
              type === 'default'
                ? <Spinner visible={loading} size={size} />
                : <SkeletonLoader avatar={avatar === true} />
            }
          </div>
        )
        : children
    }
  </React.Fragment>
);

LoadingFallback.propTypes = {
  type: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  avatar: PropTypes.bool,
};
LoadingFallback.defaultProps = {
  size: 'default',
  type: 'default',
  avatar: false,
};

export default LoadingFallback;
