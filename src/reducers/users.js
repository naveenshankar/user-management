import { RETRIEVE_USERS } from '../actions';
import { createReducer } from '../utils';

const getUsers = (state, { payload }) => ({ ...state, users: payload });

const handlers = {
  [RETRIEVE_USERS]: getUsers,
};

export default createReducer({}, handlers);
