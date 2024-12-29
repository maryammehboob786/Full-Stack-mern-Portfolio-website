import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [appointment, setAppointment] = useState({
    userName: '',
    phoneNumber: '',
    appointmentTime: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  // Handle form input change
  const handleInputChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  // Submit appointment form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/appointments', appointment); // Replace with your backend URL
      setResponseMessage('Appointment successfully booked!');
      setAppointment({
        userName: '',
        phoneNumber: '',
        appointmentTime: ''
      });
      console.log(response.data); // Optional: Log response for debugging
    } catch (error) {
      setResponseMessage('Error creating appointment. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="mt-12 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white animate__animated animate__fadeIn mb-[50px]">
      Book an Appointment
        </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 backdrop-blur-md bg-white/20 p-6 rounded-lg shadow-lg w-4/5 mx-auto">
        <input
          type="text"
          name="userName"
          value={appointment.userName}
          onChange={handleInputChange}
          placeholder="Full Name"
          required
          className="w-full p-3 border rounded-lg bg-transparent text-white placeholder-white focus:outline-none"
        />
        <input
          type="text"
          name="phoneNumber"
          value={appointment.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone Number"
          required
          className="w-full p-3 border rounded-lg bg-transparent text-white placeholder-white focus:outline-none"
        />
        <input
          type="datetime-local"
          name="appointmentTime"
          value={appointment.appointmentTime}
          onChange={handleInputChange}
          required
          className="w-full p-3 border rounded-lg bg-transparent text-white placeholder-white focus:outline-none"
        />
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="p-[20px] py-[10px] mx-[5px] rounded-[50px] text-[15px] cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105"
            style={{ background: 'linear-gradient(267deg, #DA7C25 0.36%, #B923E1)' }}
          >
            Book Appointment
          </button>
        </div>
      </form>
      {responseMessage && (
        <div className="mt-4 text-white text-center">
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;
