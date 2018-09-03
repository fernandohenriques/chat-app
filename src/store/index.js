import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './ducks/user';
import contacts from './ducks/contacts';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({user, contacts});
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
