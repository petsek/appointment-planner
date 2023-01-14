import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

export const AppointmentForm = (props) => {

  const handleTitleChange = (event) => {
    props.setCurrentTitle(event.target.value);
  }

  const handleDateChange = (event) => {
    props.setCurrentDate(event.target.value)
  }

  const handleTimeChange = (event) => {
    props.setCurrentTime(event.target.value)
  }

  const handleContact = (event) => {
    props.setCurrentContact(event.target.value)
  }

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
    <form onSubmit={props.handleSubmit}>
     <label for='title'>Title</label>
     <input 
        type= 'text'
        value = {props.currentTitle}
        onChange = {handleTitleChange}
        placeholder = 'Appointment Title' 
        id= 'title'/>
    <label for='date'>Date</label>
     <input 
        type= 'date'
        value = {props.currentDate}
        onChange = {handleDateChange}
        placeholder = 'Enter Date'
        // data-date-format = 'DD MM YYYY'
        id= 'date'/>
    <label for='time'>Time</label>
     <input 
        type= 'time'
        value = {props.currentTime}
        onChange = {handleTimeChange}
        placeholder = 'Enter Time' 
        id= 'time'
        min = {getTodayString}
        />
    <label for='contact'>Contact</label>
      <ContactPicker
      value= {props.currentContact}
      onChange = {handleContact}
      contacts ={props.contacts}
      id='contact'/>

      <input type= 'submit' value='Add Contact'/>
    </form>
  </div>
  );
};
