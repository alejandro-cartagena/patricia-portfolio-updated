import React, { useState } from 'react';
import { toast } from 'react-hot-toast'; // Optional but recommended for notifications

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // Check file size (10MB limit for Web3Forms)
    if (selectedFile && selectedFile.size > 10 * 1024 * 1024) {
      toast.error('File size must be less than 10MB');
      e.target.value = null;
      return;
    }
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', WEB3FORMS_KEY); // Replace with your Web3Forms access key
      
      // Append form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Append file if exists
      if (file) {
        formDataToSend.append('attachment', file);
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Message sent successfully!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setFile(null);
        if (e.target.attachment) {
          e.target.attachment.value = '';
        }
      } else {
        console.error('Error details:', data); // Add this for debugging
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Submission error:', error); // Add this for debugging
      toast.error(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 md:py-32 px-4">
      <div className="space-y-6">
        <h1 className="text-center md-text:left text-4xl font-bold">Contact Us</h1>
        <p className="text-center md-text:left text-gray-600 text-lg">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-base font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                aria-label="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-base font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                aria-label="Your email address"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-base font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              aria-label="Message subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-base font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2.5 text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              aria-label="Your message"
            />
          </div>

          {/* <div>
            <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">
              Attachment (optional)
            </label>
            <input
              type="file"
              id="attachment"
              name="attachment"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              aria-label="Attach a file"
            />
            <p className="mt-1 text-sm text-gray-500">Max file size: 10MB</p>
          </div> */}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
