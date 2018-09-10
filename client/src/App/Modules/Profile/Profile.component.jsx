import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './Profile.styles.scss';

class Home extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  selectUser = (user) => {
    if (user && user.value) {
      const { history } = this.props;
      const encoded = window.encodeURIComponent(user.value);
      history.push(`/book-consultation/${encoded}`);
    }
  };

  render() {
    return (
      <div className="home home__wrapper">
        <h1>
         hello world
        </h1>
      </div>
    );
  }
}

export default withRouter(Home);
