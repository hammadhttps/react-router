import React from 'react';
import { Outlet } from 'react-router';
import { motion } from 'framer-motion';

const JobsLayout = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Outlet />
      </motion.div>
    </div>
  );
};

export default JobsLayout;