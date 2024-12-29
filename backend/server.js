require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Testimonial = require('./models/Testimonials'); // Import the model

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

// Create a route for adding a sample testimonial
app.get('/create', async (req, res) => {
  try {
    const createdUser = await Testimonial.create({  // Use `Testimonial` (not `Testimonials`)
      name: "Maryam",
      position: "hello",
      message: "Hi",
      secretCode: "unique-code"
    });
    res.status(201).send({ message: 'User created!', user: createdUser });
  } catch (err) {
    console.error('Error creating testimonial:', err);
    res.status(500).send({ message: 'Error creating testimonial', error: err });
  }
});

// Root route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
