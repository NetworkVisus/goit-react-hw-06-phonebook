import { contactsReducer } from './slices/ContactsSlice/contactsSlice';
import { filterReducer } from './slices/FilterSlice/filterSlice';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const reducer = {
  contacts: persistedContactsReducer,
  filter: filterReducer,
};
