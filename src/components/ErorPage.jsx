import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useRouteError } from 'react-router';
import { AlertTriangle, Home, RefreshCw, ArrowLeft } from 'lucide-react';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="page-container">
      <div className="error-container">
        {/* Error Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <AlertTriangle className="w-24 h-24 text-warning-500 mx-auto" />
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4 text-neutral-800">Something Went Wrong</h1>
          <div className="bg-error-50 border border-error-200 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <h2 className="text-lg font-semibold text-error-700 mb-2">Error Details:</h2>
            <p className="text-error-600 font-mono text-sm break-words">
              {error?.message || 'An unexpected error occurred'}
            </p>
          </div>
          <p className="text-lg text-neutral-600 mb-12 max-w-md mx-auto">
            We apologize for the inconvenience. This error has been logged and our team will investigate.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="btn btn-primary"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home size={18} />
            Go to Homepage
          </motion.button>
          
          <motion.button
            className="btn btn-secondary"
            onClick={handleRefresh}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw size={18} />
            Try Again
          </motion.button>
          
          <motion.button
            className="btn btn-ghost"
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={18} />
            Go Back
          </motion.button>
        </motion.div>

        {/* Support Info */}
        <motion.div 
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h3 className="text-xl font-bold mb-4 text-center">Need Immediate Help?</h3>
          <div className="space-y-3 text-center">
            <div>
              <strong>Email:</strong> support@techcorp.com
            </div>
            <div>
              <strong>Phone:</strong> +1 (555) 123-4567
            </div>
            <div>
              <strong>Live Chat:</strong> Available 24/7
            </div>
          </div>
          <button 
            className="btn btn-primary w-full mt-6"
            onClick={() => navigate('/contact')}
          >
            Contact Support
          </button>
        </motion.div>

        {/* Error ID for Support */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-sm text-neutral-500">
            Error ID: {Date.now().toString(36).toUpperCase()}
          </p>
          <p className="text-xs text-neutral-400 mt-1">
            Please reference this ID when contacting support
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;