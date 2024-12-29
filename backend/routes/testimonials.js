// routes/testimonials.js
const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonials');

// Get all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    console.log('Testimonials data:', testimonials); // Log data for debugging
    res.json(testimonials);
  } catch (error) {
    console.error('Error:', error); // Log error for debugging
    res.status(500).json({ message: error.message });
  }
});

// Create or update a testimonial based on secret code
router.post('/', async (req, res) => {
  const { name, position, message, secretCode } = req.body;

  // Validate secretCode before proceeding
  if (!secretCode) {
    return res.status(400).json({ message: 'Secret code is required.' });
  }

  try {
    const existingTestimonial = await Testimonial.findOne({ secretCode });

    if (!existingTestimonial) {
      return res.status(401).json({ message: 'Invalid secret code.' }); // If no matching secretCode, reject the submission
    }

    // Proceed to create or update testimonial with matching secretCode
    existingTestimonial.name = name;
    existingTestimonial.position = position;
    existingTestimonial.message = message;
    await existingTestimonial.save();

    res.status(201).json(existingTestimonial); // Successfully saved/updated testimonial
  } catch (error) {
    console.error('Error:', error); // Log error for debugging
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
