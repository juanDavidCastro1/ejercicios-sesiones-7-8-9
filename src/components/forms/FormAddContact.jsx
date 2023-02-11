import React, { useRef } from "react";
import '../../styles/FormAddContact.css';

function FormAddContact({ addContact }) {
  const nameRef = useRef("");
  const emailRef = useRef("");

  return (
    <form
    className="form"
      onSubmit={(e) => {
        addContact({name: nameRef.current.value, email: emailRef.current.value, conectado: false});
        e.preventDefault();
      }}
    >
      <label className="form__title__name" htmlFor="name">Nombre</label>
      <input className="form__input__name" ref={nameRef} type="text" id="name" />

      <label className="form__title__email" htmlFor="email">Correo</label>
      <input className="form__input__email" ref={emailRef} type="email" id="email" />

      <button className="form__button">Crear Contacto</button>
    </form>
  );
}

export default FormAddContact;
