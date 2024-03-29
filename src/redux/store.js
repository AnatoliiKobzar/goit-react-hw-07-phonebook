import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contactsSlice';
import { filterReduser } from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});

export const store = configureStore({
  reducer: rootReducer,
});
