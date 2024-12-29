// Example backend (in appointments.js or appointmentsRoutes.js)
const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

router.post('/', async (req, res) => {
  try {
    const { userName, phoneNumber, appointmentTime } = req.body;
    const newAppointment = new Appointment({
      userName,
      phoneNumber,
      appointmentTime
    });
    
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment successfully booked!' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating appointment.' });
  }
});

module.exports = router;
