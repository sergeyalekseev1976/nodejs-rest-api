const fs = require('fs/promises');
const path = require('path');
const {nanoid} = require('nanoid');
const contactsPath = path.join(__dirname, 'contacts.json');


const updateContacts = async(contacts) => await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const contact = contacts.find((contact) => contact.id === contactId);
    return contact || null;

  } catch (error) {
    console.log(error);
  }
}

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      return null;
    }
    const[removedContact] = contacts.splice(index, 1);
    await updateContacts(contacts);
    return removedContact;
  } catch (error) {
    console.log(error);
  }
}

const addContact = async (body) => {
  try {
    const contacts = await listContacts();
    const newContact = {id: nanoid(), ...body};
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
  } catch (error) {
    console.log(error);
  }
}

const updateContact = async (contactId, body) => {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      return null;
    }
    contacts[index] = { ...contacts[index], ...body };
    await updateContacts(contacts);
    return contacts[index];
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
