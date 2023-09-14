import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContactsThunk } from 'redux/contactsThunk';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addContactsThunk(contact))
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={contact.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={contact.number}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <button
        style={{
          padding: '8px',
          background: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          margin: '20px 0 0 280px',
        }}
        type="submit"
      >
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
