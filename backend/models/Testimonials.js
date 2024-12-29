// models/Testimonials.js
const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  message: { type: String, required: true },
  secretCode: { type: String, required: true, unique: true }, // secret code for validating submission
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Testimonial', testimonialSchema, 'Clients');