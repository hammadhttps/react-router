import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  MessageSquare,
  Headphones,
  Users,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router';

const Info = () => {
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone Support",
      details: [
        { label: "Sales", value: "+1 (555) 123-4567" },
        { label: "Support", value: "+1 (555) 234-5678" },
        { label: "Enterprise", value: "+1 (555) 345-6789" }
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Addresses",
      details: [
        { label: "General", value: "hello@techcorp.com" },
        { label: "Support", value: "support@techcorp.com" },
        { label: "Sales", value: "sales@techcorp.com" }
      ]
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Headquarters",
      details: [
        { label: "Address", value: "123 Tech Street, Suite 100" },
        { label: "City", value: "San Francisco, CA 94105" },
        { label: "Country", value: "United States" }
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Business Hours",
      details: [
        { label: "Monday - Friday", value: "9:00 AM - 6:00 PM PST" },
        { label: "Saturday", value: "10:00 AM - 4:00 PM PST" },
        { label: "Sunday", value: "Closed" }
      ]
    }
  ];

  const supportChannels = [
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 Available",
      action: "Start Chat"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Help Center",
      description: "Browse our comprehensive knowledge base",
      availability: "Self-service",
      action: "Visit Help Center"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community Forum",
      description: "Connect with other users and experts",
      availability: "Community driven",
      action: "Join Community"
    }
  ];

  return (
    <div className="mt-8">
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Multiple ways to reach us. Choose the method that works best for you.
        </p>
      </motion.div>

      {/* Contact Details Grid */}
      <motion.div 
        className="grid md:grid-cols-2 gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-4">
              {info.icon}
              <h3 className="text-xl font-bold">{info.title}</h3>
            </div>
            <div className="space-y-3">
              {info.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="flex justify-between items-center">
                  <span className="text-neutral-600 font-medium">{detail.label}:</span>
                  <span className="font-semibold">{detail.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Support Channels */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Additional Support Channels</h3>
          <p className="text-neutral-600">More ways to get the help you need</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={index}
              className="card text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">{channel.icon}</div>
              <h4 className="text-lg font-bold mb-2">{channel.title}</h4>
              <p className="text-neutral-600 mb-4 text-sm">{channel.description}</p>
              <div className="text-sm text-primary font-medium mb-4">{channel.availability}</div>
              <button className="btn btn-ghost btn-sm w-full">
                {channel.action}
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div 
        className="bg-error-50 border border-error-200 rounded-xl p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <Phone className="w-6 h-6 text-error-500" />
          <h4 className="text-lg font-bold text-error-700">Emergency Support</h4>
        </div>
        <p className="text-error-600 mb-2">
          For critical system outages or security incidents affecting enterprise customers:
        </p>
        <div className="font-bold text-error-700">+1 (555) 911-HELP (4357)</div>
        <div className="text-sm text-error-600 mt-1">Available 24/7 for enterprise customers only</div>
      </motion.div>

      {/* CTA */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <p className="text-neutral-600 mb-6">
          Prefer to send us a detailed message? Use our contact form for non-urgent inquiries.
        </p>
        <button 
          className="btn btn-primary"
          onClick={() => navigate('/contact/form')}
        >
          <MessageSquare size={18} />
          Send Message
          <ArrowRight size={16} />
        </button>
      </motion.div>
    </div>
  );
};

export default Info;