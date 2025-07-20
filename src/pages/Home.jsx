import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, Zap, Shield, Globe, Users, TrendingUp, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized solutions that deliver results in milliseconds."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-grade security protocols protect your data with end-to-end encryption and advanced threat detection."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Scale",
      description: "Reach customers worldwide with our globally distributed infrastructure and 99.9% uptime guarantee."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Team Collaboration",
      description: "Seamlessly collaborate with your team using our intuitive tools designed for modern workflows."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Analytics & Insights",
      description: "Make data-driven decisions with comprehensive analytics and real-time performance insights."
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Premium Support",
      description: "Get 24/7 expert support from our dedicated team of professionals whenever you need assistance."
    }
  ];

  const stats = [
    { number: "10M+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "150+", label: "Countries" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your Business with TechCorp
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empower your organization with cutting-edge technology solutions designed to accelerate growth, 
            enhance productivity, and drive innovation in the digital age.
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/contact')}
            >
              Start Free Trial
              <ArrowRight size={18} />
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/product')}
            >
              View Products
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-neutral-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose TechCorp?</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Discover the powerful features that make us the preferred choice for businesses worldwide
          </p>
        </div>
        
        <div className="card-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="text-center mt-20 p-12 bg-white rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
          Join thousands of companies already using TechCorp to transform their business operations
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/contact')}
          >
            Start Your Journey
            <ArrowRight size={18} />
          </button>
          <button 
            className="btn btn-ghost"
            onClick={() => navigate('/jobs')}
          >
            Join Our Team
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;