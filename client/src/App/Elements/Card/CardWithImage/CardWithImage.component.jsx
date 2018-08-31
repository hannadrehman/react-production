import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const { Meta } = Card;

const CardWithImage = ({
  imgUrl, title, description, imgAlt, loading, onClick, identifier,
}) => (
  <Card
    hoverable
    cover={<img alt={imgAlt} src={imgUrl} data-identifier={identifier} />}
    loading={loading}
    onClick={onClick}
  >
    <Meta
      title={title}
      description={description}
    />
  </Card>
);

CardWithImage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgAlt: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  identifier: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
CardWithImage.defaultProps = {
  imgAlt: 'image',
  description: '',
  loading: false,
  onClick: () => {},
};

export default CardWithImage;
