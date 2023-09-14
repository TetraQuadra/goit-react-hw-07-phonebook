import { createSlice } from '@reduxjs/toolkit';
import assignId from 'services/asignId';
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
  reducers: {
    addContact: (state, action) => {
      if (
        state.contacts.find(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        alert('Contact already exists!');
      } else {
        const newContact = {
          name: action.payload.name,
          number: action.payload.number,
          id: assignId(state.contacts),
        };
        return { ...state, contacts: [...state.contacts, newContact] };
      }
    },
    removeContact: (state, action) => {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
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
        state.contacts = [payload, ...state.items];
      })
      .addCase(delContactsThunk.pending, handlePending)
      .addCase(delContactsThunk.rejected, handleReject)
      .addCase(delContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.items.filter(item => item.id !== payload.id);
      });
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
