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
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.rejected, handleReject)
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.rejected, handleReject)
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = [payload, ...state.contacts];
      })
      .addCase(delContactsThunk.pending, handlePending)
      .addCase(delContactsThunk.rejected, handleReject)
      .addCase(delContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(item => item.id !== payload.id);
      });
  },
});

export default contactsSlice.reducer;
