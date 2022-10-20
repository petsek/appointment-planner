import React from "react";

export const ContactPicker = (props) => {
  const contacts = props.contacts
  // contacts.map((contact) => console.log(contact.name))

  return (
    <select onChange={props.onChange}>
      
        <option key='default' value='' selected= 'selected'>Please select contact</option>
      {  
      contacts.map((contact) => <option key={contact.name} value = {contact.name}>{contact.name}</option>)
      }
    </select>
  )
}

