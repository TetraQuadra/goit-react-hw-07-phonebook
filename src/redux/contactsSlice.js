import { createSlice } from '@reduxjs/toolkit';
import assignId from 'services/asignId';

const contactsInitialState = {
  contacts: [],
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
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
