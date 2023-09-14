import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  delContactsThunk,
  getContactsThunk,
} from './contactsThunk';

const contactsInitialState = {
  contacts: [],
};

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: {
    [getContactsThunk.pending]: handlePending,
    [getContactsThunk.rejected]: handleReject,
    [getContactsThunk.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
    },
    [addContactsThunk.pending]: handlePending,
    [addContactsThunk.rejected]: handleReject,
    [addContactsThunk.fulfilled]: (state, { payload }) => {
      state.contacts = [payload, ...state.contacts];
    },
    [delContactsThunk.pending]: handlePending,
    [delContactsThunk.rejected]: handleReject,
    [delContactsThunk.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.filter(item => item.id !== payload.id);
    },
  },
});

export default contactsSlice.reducer;
