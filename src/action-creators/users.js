import fetch from 'isomorphic-fetch';
import { REVOKE_USERS, REVOKE_INVITE, RETRIEVE_USERS, RESEND_INVITE } from '../actions';
const GET_USERS_API_URL = '/api/users';
const RESEND_INVITE_USERS_API_URL = '/api/users/resendInvite';
const REVOKE_ACCESS_USERS_API_URL = '/api/users/revokeAccess';
const REVOKE_INVITE_USERS_API_URL = '/api/users/revokeInvite';

export function retrieveUsers(users) {
  return {
    type: RETRIEVE_USERS,
    payload: users.users,
  };
}

export function getUsers() {
  return dispatch => {
    fetch(GET_USERS_API_URL)
    .then(response => {
      return response.json();
    })
    .then(users => {
      return dispatch(retrieveUsers(users));
    });
  };
};

export function revokeAccess() {
  return {
    type: REVOKE_USERS,
    payload: users.users,
  };
};

export function revokeAccessAPI() {
  return dispatch => {
    fetch(REVOKE_ACCESS_USERS_API_URL)
    .then(response => {
      return response.json();
    })
    .then(users => {
      return dispatch(revokeAccess(users));
    });
  };
};

export function revokeInvite() {
  return {
    type: REVOKE_INVITE,
    payload: users.users,
  };
};

export function revokeInviteAPI() {
  return dispatch => {
    fetch(REVOKE_INVITE_USERS_API_URL)
    .then(response => {
      return response.json();
    })
    .then(users => {
      return dispatch(revokeInvite(users));
    });
  };
};

export function resendInvite(users) {
  return {
    type: RESEND_INVITE,
    payload: users.users,
  };
};

export function resendInviteAPI() {
  return dispatch => {
    fetch(RESEND_INVITE_USERS_API_URL)
    .then(response => {
      return response.json();
    })
    .then(users => {
      return dispatch(resendInvite(users));
    });
  };
};

