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
    <div className="max-w-4xl mx-auto p-4 mt-[100px]">
      <div className="mb-8">
      <h2 className="text-4xl font-bold text-center text-white animate__animated animate__fadeIn mb-[50px]">
      Submit a Testimonial
        </h2>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {submitStatus && <p className="text-green-500 mb-4">{submitStatus}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 backdrop-blur-md bg-white/20 p-6 rounded-lg shadow-lg">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-transparent text-white placeholder-white focus:outline-none"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Your Position"
            value={formData.position}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-transparent text-white placeholder-white focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg h-32 bg-transparent text-white placeholder-white focus:outline-none"
            required
          />
          <input
            type="text"
            name="secretCode"
            placeholder="Secret Code"
            value={formData.secretCode}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-transparent text-white placeholder-white focus:outline-none"
            required
          />
          
          <button
            type="submit"
            className="p-[20px] py-[10px] mx-[5px] rounded-[50px] text-[15px] cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 mt-4 mx-auto block"
            style={{ background: 'linear-gradient(267deg, #DA7C25 0.36%, #B923E1)' }}
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
