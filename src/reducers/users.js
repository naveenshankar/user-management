import { REVOKE_USERS, REVOKE_INVITE, RETRIEVE_USERS, RESEND_INVITE } from '../actions';
import { createReducer } from '../utils';

const getUsers = (state, { payload }) => ({ ...state, users: payload });
const revokeUsers = (state, { payload }) => ({ ...state, users: payload });
const resendInvite = (state, { payload }) => ({ ...state, users: payload });
const revokeInvite = (state, { payload }) => ({ ...state, users: payload });

const handlers = {
  [RETRIEVE_USERS]: getUsers,
  [REVOKE_USERS]: revokeUsers,
  [REVOKE_INVITE]: revokeInvite,
  [RESEND_INVITE]: resendInvite,
};

export default createReducer({ }, handlers);
