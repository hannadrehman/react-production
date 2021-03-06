import React from 'react';
import PropTypes from 'prop-types';
import { Switch, withRouter, Redirect } from 'react-router-dom';
import Async from 'react-asynchronous-component';
import { ErrorHandler, AuthorizedRoute } from 'Common';
import { ROUTE_ERROR } from 'Constants/app/app.constants';
import authorizationRules from './constants';

import './styles.scss';

const AsyncHome = props => (<Async componentProps={props} load={import('Modules/Home/Home.component' /* webpackChunkName: "home" */)} />);
const AsyncProfile = props => (<Async componentProps={props} load={import('Modules/Profile/Profile.component' /* webpackChunkName: "profile" */)} />);
const AsyncErrorPage = props => (<Async componentProps={props} load={import('Modules/ErrorPage/ErrorPage.component' /* webpackChunkName: "errorpage" */)} />);
const AsyncTodo = props => (<Async componentProps={props} load={import('Modules/Todo/Todo.component'/* webpackChunkName: "todo" */)} />);
const AsyncMemePage = () => (<Async load={import('Modules/MemePage/MemePage.component'/* webpackChunkName: "memepage" */)} />);

const Routes = ({ user, shouldRender }) => (
  <div className="routes-wrapper">
    <ErrorHandler>
      {shouldRender === true
      && (
      <Switch>
        <AuthorizedRoute exact path="/" roles={authorizationRules['*']} component={AsyncHome} user={user} />
        <AuthorizedRoute exact path="/profile" roles={authorizationRules['*']} component={AsyncProfile} user={user} />
        <AuthorizedRoute exact path="/error/:type" roles={authorizationRules.error} component={AsyncErrorPage} user={user} />
        <AuthorizedRoute exact path="/todo" roles={authorizationRules['*']} component={AsyncTodo} />
        <AuthorizedRoute exact path="/meme" roles={authorizationRules['*']} component={AsyncMemePage} />
        <Redirect to={`/error/${ROUTE_ERROR.NOT_FOUND}`} />
      </Switch>
      )}
    </ErrorHandler>
  </div>
);
Routes.propTypes = {
  user: PropTypes.object,
  shouldRender: PropTypes.bool.isRequired,
};
Routes.defaultProps = {
  user: null,
};
export default withRouter(Routes);
