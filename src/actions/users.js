import { USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE } from "../constants/actionTypes";
import cFetch from "../utils/cFetch";
import { API_CONFIG } from "../config/api";
import { message } from "antd";


function requestUsers() {

  return {
    type: USERS_REQUEST,
    isFetching: true
  };
}

function receiveUsers(users) {

  return {
    type: USERS_SUCCESS,
    isFetching: false,
    users
  };
}

function usersError(message) {

  return {
    type: USERS_FAILURE,
    isFetching: false,
    message
  };
}

export function fetchUsers(params = { page: 1, per_page: 10 }) {

  return dispatch => {
    dispatch(requestUsers());
    return cFetch(API_CONFIG.users, { method: "GET", params: params })
      .then((response) => {
        if (response.jsonResult.error_code === 401) {
          dispatch(usersError(response.jsonResult.error_message));
          message.error(response.jsonResult.error_message);
        } else {
          dispatch(receiveUsers(response.jsonResult));
        }
      });
  };
}
