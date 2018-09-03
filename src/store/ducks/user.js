
import { createActions, createReducer } from 'reduxsauce';
import { mergeDeepRight, dissoc } from 'ramda';

const initialState = {
  id: '',
  firstName: '',
  secondName: '',
  email: '',
  avatar: '',
  token: '',
  logged: false,
};

/* Create Actions e ActionsTypes */

const { Types } = createActions({
  login: ['token'],
  updateUser: ['userUpdate'],
});

/* Reducer Handlers */
const update = (state = initialState, action) => mergeDeepRight(state, action.userUpdate);

const login = (state = initialState, action) => {
  const { token, user } = action;
  const newUser = dissoc('_id', user);
  return mergeDeepRight(state, { ...newUser, id: user._id, token, logged: true });
};

console.log(Types);

const handlers = {
  [Types.LOGIN]: login,
  [Types.UPDATE_USER]: update
};

/* Create Reducer */
const userReducer = createReducer(initialState, handlers);

export default userReducer;
