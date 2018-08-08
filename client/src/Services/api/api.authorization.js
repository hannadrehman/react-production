/* global process:true */

import axios from 'axios';
import {
  DEV_ORIGIN, USER_ONE_NAME, USER_ONE_PAS, STAGE_ORIGIN, STAGE_ACCESS,
} from 'Constants/app/app.constants';
import { APP_LOGIN } from '../../Constants/api/api.endpoints';

/**
 * @returns {Cookie} csrf
 * @description function return csrf Cookie
 */
export const getCsrfToken = () => {
  const csrf = document.cookie.match('(^|;)\\s*csrftoken\\s*=\\s*([^;]+)');
  return csrf ? csrf.pop() : '';
};

/**
 * @param {string} url
 * @returns {string}
 * @description this function will check weather env is proxy to stage or not.
 * if proxy is to stage it will append and return new url with api key authentication
 */
export const getNewApiUrl = (url) => {
  // proxy origin will only be defined when developing and pointing to stage
  // it should be undefined when deploying
  if (!process.env.PROXY_ORIGIN) { return url; }
  let auth;
  let newUrl = url;
  if (process.env.PROXY_ORIGIN === STAGE_ORIGIN) {
    auth = STAGE_ACCESS;
    if (url.indexOf('?') === -1) {
      newUrl = `${newUrl}?${auth}`;
    } else {
      newUrl = `${newUrl}&${auth}`;
    }
    return newUrl;
  }
  return newUrl;
};
/**
 * @returns {object}
 * @description return api headers required for the apis,
 * ex csrf token
 */
export const getApiHeaders = () => ({
  'X-CSRFToken': getCsrfToken(),
});
// will allow login only when we are proxying to stage and is on Dev url
if (window.location.origin === DEV_ORIGIN && process.env.NODE_ENV === 'development') {
  window.attemptLogin = () => axios.post(APP_LOGIN, {
    username: USER_ONE_NAME, password: USER_ONE_PAS,
  })
    .then(() => {
        console.log('login');// eslint-disable-line
    });
}
