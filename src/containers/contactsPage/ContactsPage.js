import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm'
import {TileList} from '../../components/tileList/TileList'

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const {contacts, addContact} = props;

  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [duplicateName, setDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    const newContact = {
      name: currentName,
      phone: currentPhone,
      email: currentEmail
    }

    if(duplicateName === false) {
      addContact(newContact);
    }

    setCurrentName('');
    setCurrentPhone('');
    setCurrentEmail('');
    setDuplicateName(false)
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    for(let i=0; i<contacts.length; i++) {
      if(contacts[i].name === currentName) {
        setDuplicateName(true);
        alert('Name is already in the Contact List')
      }
    }
  }, [currentName]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          currentName = {currentName}
          currentPhone = {currentPhone}
          currentEmail = {currentEmail}
          duplicateName = {duplicateName}
          setCurrentName = {setCurrentName}
          setCurrentPhone = {setCurrentPhone}
          setCurrentEmail = {setCurrentEmail}
          setDuplicateName = {setDuplicateName}
          handleSubmit = {handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array = {contacts}/>
      </section>
    </div>
  );
};
