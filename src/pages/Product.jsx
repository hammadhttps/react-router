import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Database, 
  Shield, 
  Smartphone, 
  BarChart3, 
  Cpu, 
  Check,
  ArrowRight,
  Star
} from 'lucide-react';
import { useNavigate } from 'react-router';

const Product = () => {
  const navigate = useNavigate();

  const products = [
    {
      icon: <Cloud className="w-12 h-12 text-primary" />,
      name: "CloudSync Pro",
      category: "Cloud Infrastructure",
      description: "Enterprise-grade cloud infrastructure with automatic scaling, global CDN, and 99.99% uptime guarantee.",
      features: ["Auto-scaling", "Global CDN", "24/7 Monitoring", "Disaster Recovery"],
      price: "$99/month",
      popular: false
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      name: "DataVault Enterprise",
      category: "Data Management",
      description: "Secure, scalable database solutions with real-time analytics and advanced backup systems.",
      features: ["Real-time Analytics", "Automated Backups", "Multi-region Sync", "Advanced Security"],
      price: "$149/month",
      popular: true
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      name: "SecureGuard",
      category: "Cybersecurity",
      description: "Comprehensive cybersecurity suite with AI-powered threat detection and response.",
      features: ["AI Threat Detection", "Real-time Monitoring", "Incident Response", "Compliance Tools"],
      price: "$199/month",
      popular: false
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      name: "MobileFirst",
      category: "Mobile Development",
      description: "Cross-platform mobile development framework with native performance and cloud integration.",
      features: ["Cross-platform", "Native Performance", "Cloud Integration", "Push Notifications"],
      price: "$79/month",
      popular: false
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      name: "Analytics Pro",
      category: "Business Intelligence",
      description: "Advanced analytics platform with machine learning insights and customizable dashboards.",
      features: ["ML Insights", "Custom Dashboards", "Real-time Reports", "Data Visualization"],
      price: "$129/month",
      popular: false
    },
    {
      icon: <Cpu className="w-12 h-12 text-primary" />,
      name: "AI Engine",
      category: "Artificial Intelligence",
      description: "Powerful AI and machine learning platform for building intelligent applications.",
      features: ["Pre-trained Models", "Custom Training", "API Integration", "Edge Deployment"],
      price: "$299/month",
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="page-container">
      {/* Header */}
      <motion.section 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-6">Our Products</h1>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          Discover our comprehensive suite of enterprise-grade solutions designed to accelerate 
          your digital transformation and drive business growth.
        </p>
      </motion.section>

      {/* Products Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`card relative ${product.popular ? 'ring-2 ring-primary-500' : ''}`}
            whileHover={{ scale: 1.02 }}
          >
            {product.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star size={14} fill="currentColor" />
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="mb-6">{product.icon}</div>
            
            <div className="mb-2">
              <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">{product.description}</p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-success-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-primary-600">{product.price}</span>
                <span className="text-sm text-neutral-500">per month</span>
              </div>
              
              <button 
                className={`btn w-full ${product.popular ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => navigate('/contact')}
              >
                Get Started
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Enterprise Section */}
      <motion.section 
        className="bg-white rounded-2xl p-12 text-center shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
          Our enterprise team can create tailored solutions that perfectly fit your unique business requirements.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/contact')}
          >
            Contact Sales
            <ArrowRight size={18} />
          </button>
          <button 
            className="btn btn-ghost"
            onClick={() => navigate('/about')}
          >
            Learn More
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default Product;