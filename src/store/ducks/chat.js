import { createActions, createReducer } from 'reduxsauce';
import { mergeDeepRight } from 'ramda';

const initialState = {
  userLastTalk: {
    _id: '',
    firstName: '',
    secondName: '',
    email: '',
    avatar: '',
  },
  history: [],
};

/* Create Actions e ActionsTypes */
const { Types, Creators } = createActions({
  setUserLastTalk: ['user'],
});
const { setUserLastTalk } = Creators;


/* Reducer Handlers */
const updateUserLastTalk = (state = initialState, action) => ({ history: state.history, userLastTalk: action.user });

const handlers = {
  [Types.SET_USER_LAST_TALK]: updateUserLastTalk,
};

/* Create Reducer */
const chatReducer = createReducer(initialState, handlers);

export { setUserLastTalk};
export default chatReducer;
