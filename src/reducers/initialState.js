import cookie from 'js-cookie';
import { AUTH_ACCESS_TOKEN } from '../constants/authConstants';

export default {

  auth: {
    isFetching: false,
    isAuthenticated: cookie.get(AUTH_ACCESS_TOKEN) ? true : false
  },

  users: {
    isFetching: false,
    meta: {
      total: 0,
      perPage: 10,
      page: 1
    },
    data: []
  }

};
