import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    message: '',
    secretCode: ''
  });
  const [error, setError] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/testimonials');
      setTestimonials(response.data);
    } catch (error) {
      console.error('Fetch error:', error);
      setError('Failed to fetch testimonials');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitStatus('');

    try {
      const response = await axios.post('http://localhost:5000/api/testimonials', formData);
      setFormData({ name: '', position: '', message: '', secretCode: '' });
      setSubmitStatus('Testimonial submitted successfully!');
      fetchTestimonials();
    } catch (error) {
      console.error('Submit error:', error);
      setError(error.response?.data?.message || 'Failed to submit testimonial');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-black">Submit a Testimonial</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {submitStatus && <p className="text-green-500 mb-4 text-center">{submitStatus}</p>}
        
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-8 rounded-lg shadow-lg bg-gradient-to-br from-gray-200/40 to-gray-300/30 backdrop-blur-md border border-gray-400/50"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-100/70 placeholder-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Your Position"
            value={formData.position}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-100/70 placeholder-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-100/70 placeholder-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
            required
          />
          <input
            type="text"
            name="secretCode"
            placeholder="Secret Code"
            value={formData.secretCode}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-100/70 placeholder-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-bold hover:opacity-90 transition"
          >
            Submit Testimonial
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mb-6 text-black">Testimonials</h2>
        <div className="grid gap-4">
          {Array.isArray(testimonials) && testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <div key={testimonial._id} className="border p-4 rounded-lg shadow-md bg-gray-100/50 backdrop-blur-sm">
                <p className="text-lg font-semibold text-black">{testimonial.name}</p>
                <p className="text-gray-800">{testimonial.position}</p>
                <p className="mt-2 text-black">{testimonial.message}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {new Date(testimonial.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No testimonials available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
