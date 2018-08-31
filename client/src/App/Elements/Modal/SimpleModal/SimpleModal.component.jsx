import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const SimpleModal = ({
  children, visible, onOk, onCancel, title,
}) => (
  <Modal
    title={title}
    visible={visible}
    onOk={onOk}
    onCancel={onCancel}
  >
    {children}
  </Modal>
);

SimpleModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node, PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  visible: PropTypes.bool.isRequired,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  title: PropTypes.string.isRequired,
};

SimpleModal.defaultProps = {
  onOk: () => {},
  onCancel: () => {},
};

export default SimpleModal;
