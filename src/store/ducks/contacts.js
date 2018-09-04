import * as R from 'ramda';
import { createActions, createReducer } from 'reduxsauce';

const initialState = [];

/* Create Actions e ActionsTypes */
const { Types, Creators } = createActions({
  updateContacts: ['contacts', 'emailLogged'],
  setStatus: ['id','status'],
});
const { updateContacts, setStatus } = Creators;

/* Reducer Handlers */
const update = (state = initialState, action) => {
  const { contacts, emailLogged } = action;
  return contacts.filter(c => c.email !== emailLogged);
};

const updateStatus = (state = initialState, action) => {
  const user = R.find(R.propEq('_id', action.id))(state);
  const newState = state.filter(u => u._id !== action.id);
  user.online = action.status;
  newState.push(user);
  return newState;
};

const handlers = {
  [Types.UPDATE_CONTACTS]: update,
  [Types.SET_STATUS]: updateStatus,
};

/* Create Reducer */
const contactsReducer = createReducer(initialState, handlers);

export { updateContacts, setStatus };
export default contactsReducer;
