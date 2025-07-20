import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { 
  MessageCircle, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  Send
} from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "Phone Support",
      description: "Speak directly with our support team",
      detail: "+1 (555) 123-4567",
      available: "24/7 Available"
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Email Support",
      description: "Send us a detailed message",
      detail: "support@techcorp.com",
      available: "Response within 2 hours"
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Visit Our Office",
      description: "Meet us in person",
      detail: "123 Tech Street, San Francisco, CA",
      available: "Mon-Fri, 9AM-6PM"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Tech Street, Suite 100",
      phone: "+1 (555) 123-4567",
      email: "sf@techcorp.com"
    },
    {
      city: "New York",
      address: "456 Innovation Ave, Floor 25",
      phone: "+1 (555) 234-5678",
      email: "ny@techcorp.com"
    },
    {
      city: "London",
      address: "789 Digital Lane, Canary Wharf",
      phone: "+44 20 1234 5678",
      email: "london@techcorp.com"
    }
  ];

  return (
    <div className="page-container">
      {/* Header */}
      <motion.section 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          Have questions about our products or need support? We're here to help you succeed. 
          Choose the best way to reach us below.
        </p>
      </motion.section>

      {/* Contact Methods */}
      <motion.section 
        className="grid md:grid-cols-3 gap-8 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            className="card text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-center mb-4">{method.icon}</div>
            <h3 className="text-xl font-bold mb-2">{method.title}</h3>
            <p className="text-neutral-600 mb-4">{method.description}</p>
            <div className="font-semibold text-primary mb-2">{method.detail}</div>
            <div className="text-sm text-neutral-500 flex items-center justify-center gap-1">
              <Clock size={14} />
              {method.available}
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Contact Options */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Can We Help?</h2>
          <p className="text-xl text-neutral-600">Choose the option that best fits your needs</p>
        </div>
        
        <div className="contact-buttons">
          <motion.button 
            className="btn btn-primary"
            onClick={() => navigate('info')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={20} />
            Contact Information
            <ArrowRight size={16} />
          </motion.button>
          
          <motion.button 
            className="btn btn-secondary"
            onClick={() => navigate('form')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={20} />
            Send Message
            <Send size={16} />
          </motion.button>
        </div>
      </motion.section>

      {/* Office Locations */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Global Offices</h2>
          <p className="text-xl text-neutral-600">Visit us at any of our worldwide locations</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{office.city}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-neutral-500 mt-1 flex-shrink-0" />
                  <span className="text-neutral-600">{office.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-neutral-500 flex-shrink-0" />
                  <span className="text-neutral-600">{office.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-neutral-500 flex-shrink-0" />
                  <span className="text-neutral-600">{office.email}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="bg-white rounded-2xl p-12 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-neutral-600">Quick answers to common questions</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-2">What's your response time?</h3>
            <p className="text-neutral-600 mb-4">We typically respond to all inquiries within 2 hours during business hours.</p>
            
            <h3 className="font-bold mb-2">Do you offer 24/7 support?</h3>
            <p className="text-neutral-600 mb-4">Yes, our phone support is available 24/7 for all enterprise customers.</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Can I schedule a demo?</h3>
            <p className="text-neutral-600 mb-4">Absolutely! Contact us to schedule a personalized product demonstration.</p>
            
            <h3 className="font-bold mb-2">What about custom solutions?</h3>
            <p className="text-neutral-600 mb-4">We offer custom enterprise solutions tailored to your specific needs.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;