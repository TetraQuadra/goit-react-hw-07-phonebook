import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'services/fetchData';

export const getContactsThunk = createAsyncThunk(
  'contacts/allContacts',
  async (_, { reject }) => {
    try {
      const data = fetchContacts();
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { reject }) => {
    try {
      const data = addContact(contact);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);

export const delContactsThunk = createAsyncThunk(
  'contacts/delContact',
  async (id, { reject }) => {
    try {
      const data = deleteContact(id);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);
