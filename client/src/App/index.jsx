import React from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HashRouter as Router } from 'react-router-dom'; // BrowserRouter For HTML 5 Routing, HashRouter
import Layout from './Layout';
import { globalFetchUserProfile, globalFetchUserProfileExtras } from './actions';
import 'Styles/global.scss';

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    globalFetchUserProfileAction: PropTypes.func.isRequired,
    globalFetchUserProfileExtrasAction: PropTypes.func.isRequired,

  };

  componentDidMount() {
    const {
      globalFetchUserProfileAction,
      globalFetchUserProfileExtrasAction,
    } = this.props;
    globalFetchUserProfileAction();
    globalFetchUserProfileExtrasAction();
  }

  render() {
    const { store, profile } = this.props;
    return (
      <main className="app-wrapper">
        <Router>
          <Provider store={store}>
            <Layout user={profile} />
          </Provider>
        </Router>
      </main>
    );
  }
}


function mapStateToProps(store) {
  return {
    profile: store.user.profile,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    globalFetchUserProfileAction: globalFetchUserProfile,
    globalFetchUserProfileExtrasAction: globalFetchUserProfileExtras,
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
