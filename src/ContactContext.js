import axios from "axios";
import React, { createContext, useReducer, useState } from "react";

export const contactContext = createContext();

const INIT_STATE = {
  // Начальное состояние
  contacts: [],
  contactToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (
    action.type // Type который к нам приходит
  ) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload }; //payload это данные которые к нам приходят
    case "EDIT_CONTACT":
      return { ...state, contactToEdit: action.payload };
  }
};

const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addContact = async (newContact) => {
    // функция на добавления
    await axios.post("http://localhost:8000/contacts", newContact);
    getContacts();
  };

  const getContacts = async () => {
    // функция на отображеник
    let { data } = await axios("http://localhost:8000/contacts");
    dispatch({
      type: "GET_CONTACTS",
      payload: data,
    });
  };
  //   getContacts();

  const deleteContact = async (id) => {
    // фуекции удаления
    await axios.delete(`http://localhost:8000/contacts/${id}`);
    getContacts();
  };

  const editContact = async (id) => {
    let { data } = await axios(`http://localhost:8000/contacts/${id}`);
    let action = {
      type: "EDIT_CONTACT",
      payload: data,
    };
    dispatch(action);
  };

  const savedContact = async (newContact) => {
    await axios.patch(
      `http://localhost:8000/contacts/${newContact.id}`,
      newContact
    );
    getContacts();
  };

  return (
    <contactContext.Provider
      value={{
        addContact,
        getContacts,
        contactToEdit: state.contactToEdit,
        contacts: state.contacts,
        editContact,
        deleteContact,
        savedContact,
      }}
    >
      {children}
    </contactContext.Provider>
  );
};

export default ContactContextProvider;
