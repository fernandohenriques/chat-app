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
const { Types, Creators } = createActions({
  setUserLogged: ['token', 'user'],
  updateUser: ['userUpdate'],
  removeUser: null,
});
const { setUserLogged, removeUser, updateUser } = Creators;


/* Reducer Handlers */
const update = (state = initialState, action) => mergeDeepRight(state, action.userUpdate);

const login = (state = initialState, action) => {
  const { token, user } = action;
  const newUser = dissoc('_id', user);
  return mergeDeepRight(state, { ...newUser, id: user._id, token, logged: true });
};

const logout = (state = initialState) => mergeDeepRight(state, initialState);

const handlers = {
  [Types.SET_USER_LOGGED]: login,
  [Types.REMOVE_USER]: logout,
  [Types.UPDATE_USER]: update
};

/* Create Reducer */
const userReducer = createReducer(initialState, handlers);

export { setUserLogged, removeUser, updateUser };
export default userReducer;
