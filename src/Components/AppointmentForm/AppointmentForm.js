import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber });
      setName('');
      setPhoneNumber('');
    console.log('Appointment Date:', appointmentDate);
    console.log('Appointment Time:', appointmentTime);
    };
     const handleDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };
   const handleTimeChange = (event) => {
    setAppointmentTime(event.target.value);
  };
  
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
        <label htmlFor="date">Select Appointment Date:</label>
        <input
          type="date"
          value={appointmentDate}
          onChange={handleDateChange}
          min={new Date().toISOString().split('T')[0]} // restrict past dates
          required
        />
      </div>
      <div className="form-group">
      <label htmlFor="time"> Select Time Slot:</label>
        <input
          type="time"
          value={appointmentTime}
          onChange={handleTimeChange}
          required
        />
      </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm
