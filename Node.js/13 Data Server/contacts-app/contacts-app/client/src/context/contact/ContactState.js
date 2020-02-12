import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  // SET_ALERT,
  // REMOVE_ALERT
} from "../type";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: " Hari Bo",
        email: "hari.bo@email.com",
        phone: "111 - 999 - 000",
        type: "personal"
      },
      {
        id: 2,
        name: " Fruit Pastel",
        email: "fruit.pastel@email.com",
        phone: "222 - 999 - 000",
        type: "business"
      },
      {
        id: 3,
        name: " Wine Gums",
        email: "wine.gums@email.com",
        phone: "333 - 999 - 111",
        type: "business"
      },
      {
        id: 4,
        name: " Star Burst",
        email: "star.burst@email.com",
        phone: "444 - 000 - 111",
        type: "personal"
      }
    ],
    current: null, filtered : null
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Update Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Contact
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  // Set Alert
  // Remove Alert

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        filtered:state.filtered
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
