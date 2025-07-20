import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { Home, Search, ArrowLeft, HelpCircle } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  const suggestions = [
    { icon: <Home size={18} />, text: "Go to Homepage", action: () => navigate('/') },
    { icon: <Search size={18} />, text: "Browse Products", action: () => navigate('/product') },
    { icon: <HelpCircle size={18} />, text: "Contact Support", action: () => navigate('/contact') },
    { icon: <ArrowLeft size={18} />, text: "Go Back", action: () => navigate(-1) }
  ];

  return (
    <div className="page-container">
      <div className="error-container">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <div className="error-code">404</div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="error-message">Oops! Page Not Found</h1>
          <p className="text-lg text-neutral-600 mb-12 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, let's get you back on track!
          </p>
        </motion.div>

        {/* Suggestions */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {suggestions.map((suggestion, index) => (
            <motion.button
              key={index}
              className="btn btn-secondary flex-col h-auto p-6 text-center"
              onClick={suggestion.action}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="mb-2">{suggestion.icon}</div>
              <span className="text-sm font-medium">{suggestion.text}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          className="relative max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full blur-3xl opacity-30" />
          <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
            <h3 className="text-xl font-bold mb-3">Need Help?</h3>
            <p className="text-neutral-600 mb-4">
              If you believe this is an error, please contact our support team.
            </p>
            <button 
              className="btn btn-primary w-full"
              onClick={() => navigate('/contact')}
            >
              Contact Support
            </button>
          </div>
        </motion.div>

        {/* Fun Animation */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-primary-400 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;