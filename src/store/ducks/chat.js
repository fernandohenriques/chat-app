import { createActions, createReducer } from 'reduxsauce';
import { mergeDeepRight, pick } from 'ramda';

const initialState = {
  userLastTalk: {
    _id: '',
    firstName: '',
    secondName: '',
    email: '',
    avatar: '',
  },
  history: {
    0: [],
  },
};

/* Create Actions e ActionsTypes */
const { Types, Creators } = createActions({
  setUserLastTalk: ['user'],
  setHistory: ['id','user','message'],
});
const { setUserLastTalk, setHistory } = Creators;


/* Reducer Handlers */
const updateUserLastTalk = (state = initialState, action) => ({ history: state.history, userLastTalk: action.user });

const updateHistory = (state = initialState, action) => {
  const stateHistory = state.history;
  const userDataUtil = ['id', 'firstName', 'secondName', 'email', 'avatar'];
  const newMessage = { user: pick(userDataUtil, action.user), message: action.message };
  const thisHistory = Array.isArray(stateHistory[action.id]) ? stateHistory[action.id] : [];
  thisHistory.push(newMessage);

  const newHistory = mergeDeepRight(stateHistory, { [action.id]: thisHistory });
  return { history: newHistory, userLastTalk: state.userLastTalk };
};

const handlers = {
  [Types.SET_USER_LAST_TALK]: updateUserLastTalk,
  [Types.SET_HISTORY]: updateHistory,
};

/* Create Reducer */
const chatReducer = createReducer(initialState, handlers);

export { setUserLastTalk, setHistory };
export default chatReducer;
