import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'Elements';

const LoadingFallback = ({ loading, children, size }) => (
  <React.Fragment>
    {
      loading === true
        ? (
          <div className="flex flex--center padding padding--lg">
            <Spinner visible={loading} size={size} />
          </div>
        )
        : children
    }
  </React.Fragment>
);

LoadingFallback.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
};
LoadingFallback.defaultProps = {
  size: 'default',
};

export default LoadingFallback;
