const contactsOperation = require("./contacts.js");

const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperation.listContacts();
      console.table(contacts);
      break;

    case "get":
      const contactById = await contactsOperation.getContactById(id);
      console.table(contactById);
      break;

    case "add":
      const newContact = await contactsOperation.addContact(name, email, phone);
      console.table(newContact);
      break;

    case "remove":
      const removedContact = await contactsOperation.removeContact(id);
      console.table(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
