import axios from 'axios';
import { API_BASE_URL } from 'config';

const contactAPI = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchContacts = async () => {
  try {
    const response = await contactAPI.get('/contacts');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addContact = async contact => {
  try {
    const response = await contactAPI.post('/contacts', contact);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteContact = async id => {
  try {
    const response = await contactAPI.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
