import { createActions, createReducer } from 'reduxsauce';
import { mergeDeepRight } from 'ramda';

const initialState = [];

/* Create Actions e ActionsTypes */
const { Types, Creators } = createActions({
  updateContacts: ['contacts'],
});
const { updateContacts } = Creators;


/* Reducer Handlers */
const update = (state = initialState, action) => mergeDeepRight(state, action.contacts);

const handlers = {
  [Types.UPDATE_CONTACTS]: update,
};

/* Create Reducer */
const contactsReducer = createReducer(initialState, handlers);

export { updateContacts };
export default contactsReducer;
