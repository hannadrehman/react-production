/* global process:true */
const { API_KEY, PROXY_USER, PROXY_USER_META } = process.env;
export const DEV_ORIGIN = 'http://localhost:9000';
export const DEV_NAVI_HEALTH_ORIGIN = 'http://localhost:8000';
export const STAGE_ORIGIN = 'https://x123healthifyme.com';
export const STAGE_ACCESS = window.atob(API_KEY || '');
export const USER_ONE_NAME = window.atob(PROXY_USER || '');
export const USER_ONE_PAS = window.atob(PROXY_USER_META || '');
export const ROUTE_ERROR = {
  INVALID_ROUTE: 'INVALID_ROUTE',
  FORBIDDEN: 'FORBIDDEN',
  UNAUTHORIZED: 'UNAUTHORIZED',
  NOT_FOUND: 'NOT_FOUND',
};
export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const TIME_PARAMS = {
  AM: 'AM',
  PM: 'PM',
};
export const TIME_SLOTS = {
  MORNING: 'Morning Slot',
  AFTERNOON: 'Afternoon Slot',
  EVENING: 'Evening Slot',
  LATE_EVENING: 'Late Evening Slot',
};
export const USER_ROLES = {
  CSM: 'csm,',
  USER: 'user',
  ADMIN: 'admin',
  EXPERT: 'expert',
};
