const assignId = contacts => {
  if (contacts.length === 0) {
    return 'id-1';
  }
  const maxId = Math.max(
    ...contacts.map(contact => parseInt(contact.id.split('-')[1]))
  );
  return `id-${maxId + 1}`;
};

export default assignId;
