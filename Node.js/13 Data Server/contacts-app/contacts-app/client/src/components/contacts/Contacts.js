import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  if (contacts.length === 0) {
    return <h2>Please add a contact</h2>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(item => (
              <CSSTransition key={item.id} classNames="item" timeout={500}>
                <ContactItem contact={item} />
              </CSSTransition>
            ))
          : contacts.map(item => (
              <CSSTransition key={item.id} classNames="item" timeout={500}>
                <ContactItem contact={item} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};
export default Contacts;
