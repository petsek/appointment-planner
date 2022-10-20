import React from "react";

export const ContactForm = (props) => {

  const handleNameChange = (event) => {
    props.setCurrentName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    props.setCurrentPhone(event.target.value)
  }

  const handleEmailChange = (event) => {
    props.setCurrentEmail(event.target.value)
  }

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
       <label for='name'>Name</label>
       <input 
          type= 'text'
          value = {props.currentName}
          onChange = {handleNameChange}
          placeholder = 'Enter Name' 
          id= 'name'/>
      <label for='phone'>Phone Number</label>
       <input 
          type= 'tel'
          value = {props.currentPhone}
          onChange = {handlePhoneChange}
          placeholder = 'Enter Phone Number' 
          id= 'phone'
          pattern= '^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$'/>
      <label for='email'>E-mail</label>
       <input 
          type= 'email'
          value = {props.currentEmail}
          onChange = {handleEmailChange}
          placeholder = 'Enter E-mail Adress' 
          id= 'email'/>

        <input type= 'submit' value='Add Contact'/>
      </form>
    </div>
    
  );
};


// export const ContactForm = ({
//   name,
//   setName,
//   phone,
//   setPhone,
//   email,
//   setEmail,
//   handleSubmit
// }) => {
//   return (