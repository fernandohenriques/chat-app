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
  const sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('firstName')));
  return sortByNameCaseInsensitive(contacts.filter(c => c.email !== emailLogged));
};

const updateStatus = (state = initialState, action) => {
  const user = R.find(R.propEq('_id', action.id))(state);
  const newState = state.filter(u => u._id !== action.id);
  if (user) {
    user.online = action.status;
    if(action.status)
      newState.unshift(user);
    else
      newState.push(user);
  }
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
