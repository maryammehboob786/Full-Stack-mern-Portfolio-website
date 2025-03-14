require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Testimonial = require('./models/Testimonials'); // Import the testimonial model
const Appointment = require('./models/Appointment'); // Import the appointment model

// Import routes for testimonials
const testimonialsRoutes = require('./routes/testimonials');

const app = express();

// Middleware parsers
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGO_URI, {
    socketTimeoutMS: 45000,  // Increase socket timeout to 45 seconds
    connectTimeoutMS: 45000, // Increase initial connection timeout
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if the connection fails
  });

// Use testimonials routes
app.use('/api/testimonials', testimonialsRoutes);

// Create an appointment route
app.post('/api/appointments', async (req, res) => {
  try {
    const { userName, phoneNumber, appointmentTime } = req.body;

    // Validate required fields
    if (!userName || !phoneNumber || !appointmentTime) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Create a new appointment
    const newAppointment = new Appointment({
      userName,
      phoneNumber,
      appointmentTime,
    });

    // Save appointment to DB
    await newAppointment.save();

    res.status(201).json({ message: 'Appointment successfully booked!', appointment: newAppointment });
  } catch (err) {
    console.error('Error creating appointment:', err);
    res.status(500).json({ message: 'Error creating appointment.', error: err.message });
  }
});

// Root route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
