import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delContactsThunk, getContactsThunk } from 'redux/contactsThunk';


const ContactList = () => {
  const dispatch = useDispatch();
  const filtered = useSelector((state) => state.filter.filtered);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleRemoveContact = (id) => {
    dispatch(delContactsThunk(id));
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