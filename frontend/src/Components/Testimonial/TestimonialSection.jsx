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
      console.log('Fetched data:', response.data);
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
        <h2 className="text-2xl font-bold mb-4">Submit a Testimonial</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {submitStatus && <p className="text-green-500 mb-4">{submitStatus}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Your Position"
            value={formData.position}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
            required
          />
          <input
            type="text"
            name="secretCode"
            placeholder="Secret Code"
            value={formData.secretCode}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit Testimonial
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
        <div className="grid gap-4">
          {Array.isArray(testimonials) && testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <div key={testimonial._id} className="border p-4 rounded shadow-sm">
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.position}</p>
                <p className="mt-2">{testimonial.message}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(testimonial.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p>No testimonials available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
