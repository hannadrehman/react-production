import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ROUTE_ERROR } from 'Constants/app/app.constants';
import errorImag from 'Assets/Images/utilities/page-not-found.png';

import './ErrorPage.styles.scss';

const ErrorPage = ({ match }) => {
  const { params: { type } } = match;
  return (
    <div className="errorpage errorpage__wrapper">
      <section className="errorpage__section">
        <img className="errorpage__baseimage" src={errorImag} alt={type || ROUTE_ERROR.NOT_FOUND} />
      </section>
      <section className="errorpage__section">
        <h1>
          ERROR :
          {' '}
          {type || ROUTE_ERROR.NOT_FOUND}
        </h1>
      </section>
    </div>
  );
};

ErrorPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(ErrorPage);
