import React from 'react';
import PropTypes from 'prop-types';

import { CardWithImage } from 'Elements';

import './MemeGrid.styles.scss';

const MemeGrid = ({ memes, onClick }) => (
  <div className="memegrid memegrid__wrapper flex flex--justify-between flex--wrap ">
    <div className="flex">
      {
      memes.map((row, i) => (
        <div key={i} className="flex flex--col memegrid__row"> {/* eslint-disable-line */}
          {
            row.map(meme => (
              <div key={meme.id} className="memegrid__image-tile margin margin--md">
                <CardWithImage
                  title={meme.name}
                  imgUrl={meme.url}
                  onClick={onClick}
                  identifier={meme.id}
                />
              </div>
            ))
          }
        </div>
      ))
    }
    </div>
  </div>
);

MemeGrid.propTypes = {
  memes: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MemeGrid;
