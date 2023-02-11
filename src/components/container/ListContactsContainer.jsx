import React, { useState } from "react";
import FormAddContact from "../forms/FormAddContact";
import ContactComponent from "../pure/ContactComponent";
import '../../styles/ListContactsContainer.css';

function ListContactsContainer() {
  const contactsDefault = [
    { name: "Juan", email: "correo1@email.com", conectado: true },
    { name: "David", email: "correo2@email.com", conectado: false },
  ];

  const [contacts, setContacts] = useState(contactsDefault);

  function addContact(contact) {
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }

  function removeContact(contact) {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  }

  function changeState(contact) {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];

    tempContacts[index].conectado = !tempContacts[index].conectado;
    setContacts(tempContacts);
  }

  return (
    <>
      <div className="container__form"><FormAddContact addContact={addContact}/></div>

      <div className="container__cards">
        {contacts.map((contact, index) => {
          return (
            <ContactComponent
              key={index}
              contact={contact}
              removeContact={removeContact}
              changeState={changeState}
            />
          );
        })}
      </div>
    </>
  );
}

export default ListContactsContainer;
