/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { motion } from 'framer-motion';
import { MapPin, DollarSign, Clock, Users, ArrowRight, Briefcase } from 'lucide-react';

const Jobs = () => {
  const jobsData = useLoaderData();

  const jobTypes = [
    { type: 'Full-time', count: jobsData.length },
    { type: 'Remote', count: Math.floor(jobsData.length * 0.8) },
    { type: 'Contract', count: Math.floor(jobsData.length * 0.3) }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health insurance",
    "Flexible work arrangements",
    "Professional development budget",
    "Unlimited PTO policy",
    "State-of-the-art equipment"
  ];

  return (
    <div>
      {/* Header Section */}
      <motion.section 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-6">
          <Briefcase className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          Be part of a dynamic team that's shaping the future of technology. 
          We're looking for passionate individuals who want to make a real impact.
        </p>
      </motion.section>

      {/* Job Stats */}
      <motion.section 
        className="grid grid-cols-3 gap-6 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {jobTypes.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center p-6 bg-white rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
          >
            <div className="text-2xl font-bold text-primary mb-2">{stat.count}</div>
            <div className="text-neutral-600 font-medium">{stat.type} Positions</div>
          </motion.div>
        ))}
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="card">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                <span className="text-neutral-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Jobs List */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
        
        {jobsData.length > 0 ? (
          <div className="space-y-6">
            {jobsData.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <Link to={`/jobs/${job.id}`} className="job-card">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="job-title">{job.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-neutral-600">
                        <div className="job-location">
                          <MapPin size={16} />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          Full-time
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={16} />
                          Engineering
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-neutral-400" />
                  </div>
                  
                  <p className="text-neutral-600 mb-4">
                    Join our team as a {job.title} and help us build the next generation of 
                    enterprise software solutions. We're looking for someone passionate about 
                    technology and innovation.
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="job-salary">
                      <DollarSign size={18} />
                      ${job.salary.toLocaleString()}/year
                    </div>
                    <div className="text-sm text-primary-600 font-medium">
                      View Details →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Briefcase className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Open Positions</h3>
            <p className="text-neutral-600 mb-6">
              We don't have any open positions at the moment, but we're always looking for great talent.
            </p>
            <button className="btn btn-primary">
              Join Our Talent Pool
              <ArrowRight size={16} />
            </button>
          </motion.div>
        )}
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="mt-16 text-center bg-white rounded-2xl p-12 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
        <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
          We're always interested in connecting with talented individuals. 
          Send us your resume and we'll keep you in mind for future opportunities.
        </p>
        <button className="btn btn-primary">
          Send Your Resume
          <ArrowRight size={18} />
        </button>
      </motion.section>
    </div>
  );
};

export const jobs_Loader = async () => {
  try {
    const res = await fetch('http://localhost:5000/jobs');
    if (!res.ok) {
      throw new Error('Failed to fetch jobs');
    }
    return res.json();
  } catch (error) {
    // Return mock data if the API is not available
    return [
      {
        id: 1,
        title: "Senior Frontend Developer",
        salary: 120000,
        location: "San Francisco, CA"
      },
      {
        id: 2,
        title: "Backend Engineer",
        salary: 115000,
        location: "Remote"
      },
      {
        id: 3,
        title: "Product Manager",
        salary: 140000,
        location: "New York, NY"
      },
      {
        id: 4,
        title: "UX Designer",
        salary: 95000,
        location: "Austin, TX"
      }
    ];
  }
};

export default Jobs;