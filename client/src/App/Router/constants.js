import { USER_ROLES } from 'Constants/app/app.constants';

export default {
  '*': '*',
  error: '*',
  profile: [USER_ROLES.ADMIN, USER_ROLES.CSM, USER_ROLES.EXPERT, USER_ROLES.USER],
};
