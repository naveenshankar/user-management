import fetch from 'isomorphic-fetch';
import { RETRIEVE_USERS } from '../actions';

const GET_USERS_API_URL = '/api/users';

export function retrieveUsers(users) {
  return {
    type: RETRIEVE_USERS,
    payload: users,
  };
}

export function getUsers() {
  return dispatch => {
    fetch(GET_USERS_API_URL)
      .then(response => response.json())
      .then(users => dispatch(retrieveUsers(users)));
  };
}
