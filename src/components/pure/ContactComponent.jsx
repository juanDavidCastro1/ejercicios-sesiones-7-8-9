import React from 'react'
import '../../styles/ContactComponent.css';

function ContactComponent({contact, removeContact, changeState}) {
  return (
    <div className='card'>
        <h1 className='card__name'>{contact.name}</h1>
        <div className='card__container__email'><p className='card__email'>{contact.email}</p></div>
        <div className='card__container__button'>
          <button className={contact.conectado ? 'card__button-state' : 'card__button-state-disconected'} onClick={()=>{changeState(contact)}} >{contact.conectado ? "Conectado" : "Desconectado"}</button>
          <button className='card__button-delete' onClick={()=>{removeContact(contact)}} >Eliminar</button>
        </div>
    </div>
  )
}

export default ContactComponent