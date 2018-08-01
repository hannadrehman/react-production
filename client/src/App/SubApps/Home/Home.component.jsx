import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button } from 'Elements';
import { AuthorizedOnly } from 'Common';
import './Home.styles.scss';

class Home extends React.Component {
  static propTypes={
    history: PropTypes.object.isRequired,
  }

  selectUser = (user) => {
    if (user && user.value) {
      const { history } = this.props;
      const encoded = window.encodeURIComponent(user.value);
      history.push(`/book-consultation/${encoded}`);
    }
  }

  render() {
    return (
      <div className="home home__wrapper">
        <h1>
           hello sir
        </h1>
        <section>
          <Button label="primary" onClick={() => { }} />
          <AuthorizedOnly allowedRoles={['a', 'b']} user={{ role: 'a' }}>
            <h1>
               hel
                hello authorized
            </h1>
          </AuthorizedOnly>
        </section>
      </div>
    );
  }
}

export default withRouter(Home);
