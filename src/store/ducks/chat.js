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
  notification: false,
};

/* Create Actions e ActionsTypes */
const { Types, Creators } = createActions({
  setUserLastTalk: ['user'],
  setHistory: ['id','user','message'],
  removeNotification: null,
});
const { setUserLastTalk, setHistory, removeNotification } = Creators;


/* Reducer Handlers */
const updateUserLastTalk = (state = initialState, action) => {
  return { ...state, userLastTalk: action.user, notification: false };
};

const updateHistory = (state = initialState, action) => {
  const stateHistory = state.history;
  const userLastTalkId = state.userLastTalk._id;
  const stateNotification = state.notification;
  const contactFullName = `${action.user.firstName} ${action.user.secondName}`;
  const userDataUtil = ['id', 'firstName', 'secondName', 'email', 'avatar'];

  const newMessage = { user: pick(userDataUtil, action.user), message: action.message };
  const thisHistory = Array.isArray(stateHistory[action.id]) ? stateHistory[action.id] : [];
  thisHistory.push(newMessage);

  let newNotification = stateNotification;
  if(userLastTalkId && userLastTalkId !== action.id) newNotification = { name: contactFullName };

  const newHistory = mergeDeepRight(stateHistory, { [action.id]: thisHistory });
  return { ...state, history: newHistory, notification: newNotification };
};

const deleteNotification = (state = initialState) => ({ ...state, notification: false });

const handlers = {
  [Types.SET_USER_LAST_TALK]: updateUserLastTalk,
  [Types.SET_HISTORY]: updateHistory,
  [Types.REMOVE_NOTIFICATION]: deleteNotification,
};

/* Create Reducer */
const chatReducer = createReducer(initialState, handlers);

export { setUserLastTalk, setHistory, removeNotification };
export default chatReducer;
