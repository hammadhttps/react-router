import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Globe,
  TrendingUp,
  Lightbulb,
  Shield,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router';

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that shape the future of technology."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Trust",
      description: "Building lasting relationships through transparency, reliability, and unwavering commitment to our clients."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Collaboration",
      description: "Fostering teamwork and partnerships that amplify our collective potential and drive mutual success."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description: "Pursuing the highest standards in everything we do, from product development to customer service."
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-primary" />, number: "500+", label: "Team Members" },
    { icon: <Globe className="w-8 h-8 text-primary" />, number: "50+", label: "Countries Served" },
    { icon: <Award className="w-8 h-8 text-primary" />, number: "100+", label: "Awards Won" },
    { icon: <TrendingUp className="w-8 h-8 text-primary" />, number: "10M+", label: "Users Worldwide" }
  ];

  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Started with a vision to democratize enterprise technology solutions."
    },
    {
      year: "2017",
      title: "First Million Users",
      description: "Reached our first major milestone with rapid global adoption."
    },
    {
      year: "2019",
      title: "Series B Funding",
      description: "Secured $50M in funding to accelerate product development and expansion."
    },
    {
      year: "2021",
      title: "AI Integration",
      description: "Launched our AI-powered platform, revolutionizing business intelligence."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Opened offices in 15 countries, serving clients across 6 continents."
    },
    {
      year: "2024",
      title: "Sustainability Initiative",
      description: "Committed to carbon neutrality and launched our green technology program."
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <motion.section 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-6">About TechCorp</h1>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          We're on a mission to empower businesses worldwide with innovative technology solutions 
          that drive growth, enhance productivity, and create lasting value in the digital economy.
        </p>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section 
        className="grid md:grid-cols-2 gap-12 mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
        >
          <Target className="w-12 h-12 text-primary mb-6" />
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-neutral-600 leading-relaxed">
            To democratize access to enterprise-grade technology solutions, enabling businesses of all sizes 
            to compete and thrive in the digital marketplace through innovative, scalable, and secure platforms.
          </p>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
        >
          <Eye className="w-12 h-12 text-primary mb-6" />
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-neutral-600 leading-relaxed">
            To be the world's most trusted technology partner, creating a future where every organization 
            can harness the full potential of digital transformation to achieve extraordinary outcomes.
          </p>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-neutral-600">Numbers that tell our story</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-neutral-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-neutral-600">The principles that guide everything we do</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="card text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section 
        className="mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-xl text-neutral-600">Key milestones in our growth story</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-8 mb-12 last:mb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                  {item.year}
                </div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="bg-white rounded-2xl p-12 text-center shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
          Be part of a team that's shaping the future of technology and making a positive impact on businesses worldwide.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/jobs')}
          >
            View Open Positions
            <ArrowRight size={18} />
          </button>
          <button 
            className="btn btn-ghost"
            onClick={() => navigate('/contact')}
          >
            Get in Touch
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default About;