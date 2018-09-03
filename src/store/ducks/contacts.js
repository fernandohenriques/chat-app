import { createActions, createReducer } from 'reduxsauce';

const initialState = [];

/* Create Actions e ActionsTypes */
const { Types, Creators } = createActions({
  updateContacts: ['contacts', 'emailLogged'],
});
const { updateContacts } = Creators;


/* Reducer Handlers */
const update = (state = initialState, action) => {
  const { contacts, emailLogged } = action;
  return contacts.filter(c => c.email !== emailLogged);
};

const handlers = {
  [Types.UPDATE_CONTACTS]: update,
};

/* Create Reducer */
const contactsReducer = createReducer(initialState, handlers);

export { updateContacts };
export default contactsReducer;
