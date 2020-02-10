import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
  SET_ALERT,
  REMOVE_ALERT
} from "../type";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: " Dummy Name",
        email: "dummy.name@email.com",
        phone: "999 - 111 - 000",
        type: "personal"
      },
      {
        id: 2,
        name: " Name Dummy",
        email: "name.dummy@email.com",
        phone: "111 - 999 - 000",
        type: "business"
      },
      {
        id: 3,
        name: " Nummy Dame",
        email: "nummy.dame@email.com",
        phone: "000 - 999 - 111",
        type: "business"
      },
      {
        id: 4,
        name: " Dame Nummy",
        email: "Dame.Nummyemail.com",
        phone: "999 - 000 - 111",
        type: "personal"
      }
    ]
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  
  // Update Contact

  // Filter Contact

  // Set Alert

  // Remove Alert

  return (
    <contactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
