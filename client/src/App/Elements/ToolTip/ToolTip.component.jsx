import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';

const ApptoolTip = ({ tip, children }) => (
  <Tooltip placement="top" title={tip}>
    {children}
  </Tooltip>
);
ApptoolTip.propTypes = {
  tip: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default ApptoolTip;
