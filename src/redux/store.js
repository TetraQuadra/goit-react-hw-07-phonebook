import { combineReducers } from 'redux';
import contactsReducer from './contactsSlice';
import filterReducer from './filterSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
