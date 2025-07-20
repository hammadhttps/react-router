import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, Building, CheckCircle } from 'lucide-react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CheckCircle className="w-16 h-16 text-success-500 mx-auto mb-6" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-4">Message Sent Successfully!</h2>
        <p className="text-lg text-neutral-600 mb-6 max-w-md mx-auto">
          Thank you for contacting us. We'll get back to you within 2 business hours.
        </p>
        <button 
          className="btn btn-primary"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              company: '',
              subject: '',
              message: '',
              inquiryType: 'general'
            });
          }}
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="mt-8">
      {/* Header */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Fill out the form below and we'll get back to you as soon as possible. 
          All fields marked with * are required.
        </p>
      </motion.div>

      <motion.div 
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="card">
          {/* Inquiry Type */}
          <div className="form-group">
            <label className="form-label">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Inquiry Type *
            </label>
            <select 
              name="inquiryType" 
              value={formData.inquiryType}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="general">General Inquiry</option>
              <option value="sales">Sales Question</option>
              <option value="support">Technical Support</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="press">Press & Media</option>
              <option value="careers">Career Inquiry</option>
            </select>
          </div>

          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-group">
              <label className="form-label">
                <User className="w-4 h-4 inline mr-2" />
                First Name *
              </label>
              <input 
                type="text" 
                name="firstName" 
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your first name"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <User className="w-4 h-4 inline mr-2" />
                Last Name *
              </label>
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-group">
              <label className="form-label">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address *
              </label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <Phone className="w-4 h-4 inline mr-2" />
                Phone Number
              </label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Company */}
          <div className="form-group">
            <label className="form-label">
              <Building className="w-4 h-4 inline mr-2" />
              Company/Organization
            </label>
            <input 
              type="text" 
              name="company" 
              value={formData.company}
              onChange={handleChange}
              className="form-input"
              placeholder="Your company name"
            />
          </div>

          {/* Subject */}
          <div className="form-group">
            <label className="form-label">
              Subject *
            </label>
            <input 
              type="text" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              className="form-input"
              placeholder="Brief description of your inquiry"
              required
            />
          </div>

          {/* Message */}
          <div className="form-group">
            <label className="form-label">
              Message *
            </label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              className="form-input"
              rows="6"
              placeholder="Please provide details about your inquiry..."
              required
            />
          </div>

          {/* Privacy Notice */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-neutral-600">
              <strong>Privacy Notice:</strong> By submitting this form, you agree to our privacy policy. 
              We'll only use your information to respond to your inquiry and won't share it with third parties.
            </p>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="btn btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="loading" />
                Sending Message...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>

        {/* Additional Info */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-neutral-600 mb-4">
            Need immediate assistance? Try these alternatives:
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="text-sm">
              <strong>Phone:</strong> +1 (555) 123-4567
            </div>
            <div className="text-sm">
              <strong>Email:</strong> support@techcorp.com
            </div>
            <div className="text-sm">
              <strong>Live Chat:</strong> Available 24/7
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Form;