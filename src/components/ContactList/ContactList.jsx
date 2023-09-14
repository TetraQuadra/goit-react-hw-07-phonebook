import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';


const ContactList = () => {
  const dispatch = useDispatch();
  const filtered = useSelector((state) => state.filter.filtered);

  const handleRemoveContact = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <ul>
      {filtered && filtered.map((contact) => (
        <li style={{ marginBottom: 16 }} key={contact.id}>
          <span>
            {contact.name} - {contact.number}
          </span>
          <button onClick={() => handleRemoveContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;