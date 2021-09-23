const contactsOperation = require("./contacts.js");

const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperation.listContacts();
      break;

    case "get":
      const contactById = await contactsOperations.getContactById(id);
      break;

    case "add":
      const addContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      break;

    case "remove":
      const removedContact = await contactsOperations.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
