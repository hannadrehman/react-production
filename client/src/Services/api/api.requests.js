import { httpGet, httpPost } from './api.requestmaker';
import {
  AUTOCOMPLETE_USERS,
  USER_PROFILE,
  USER_PROFILE_EXTRAS,
  ALL_COACHES,
  AVAILABLE_COACHES,
  EXPERT_INFO,
  EXPERT_SLOTS,
  BOOKING_SOURCES,
  BOOK_SLOT,
  BOOK_SLOT_PREFERED_TIME,
  ALL_LANGUAGES,
  BOOK_AUTOMATIC_CONSULTATION,
  APP_LOGIN,
  MEMES,
} from '../../Constants/api/api.endpoints';

export const login = user => httpPost(APP_LOGIN, user);
export const autocompleteUser = name => httpGet(`${AUTOCOMPLETE_USERS}?username=${name}`);
export const userProfile = () => httpGet(USER_PROFILE);
export const userProfileExtras = () => httpGet(USER_PROFILE_EXTRAS);
export const allCoaches = () => httpGet(ALL_COACHES);
export const activeCoaches = () => httpGet(AVAILABLE_COACHES);
export const expertInfo = expertId => httpGet(`${EXPERT_INFO}${expertId}`);
export const expertSlots = expertId => httpGet(`${EXPERT_SLOTS}?expert_username=${expertId}`);
export const bookingSources = () => httpGet(BOOKING_SOURCES);
export const bookslot = (request, withSlot) => (
  withSlot === true ? httpPost(BOOK_SLOT, request) : httpPost(BOOK_SLOT_PREFERED_TIME, request));
export const languagues = () => httpGet(ALL_LANGUAGES);
export const automaticConsultation = request => httpPost(BOOK_AUTOMATIC_CONSULTATION, request);
export const memes = () => httpGet(MEMES);
