const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  appointmentTime: {
    type: Date,
    required: true
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
