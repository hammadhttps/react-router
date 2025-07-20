/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  DollarSign, 
  Clock, 
  Users, 
  Calendar,
  CheckCircle,
  ArrowLeft,
  Send,
  Bookmark
} from 'lucide-react';

const JobsDetails = () => {
  const jobDetails = useLoaderData();
  const navigate = useNavigate();

  const requirements = [
    "Bachelor's degree in Computer Science or related field",
    "5+ years of experience in software development",
    "Proficiency in modern JavaScript frameworks (React, Vue, Angular)",
    "Experience with RESTful APIs and microservices architecture",
    "Strong understanding of version control systems (Git)",
    "Excellent problem-solving and communication skills",
    "Experience with cloud platforms (AWS, Azure, GCP)",
    "Knowledge of CI/CD pipelines and DevOps practices"
  ];

  const responsibilities = [
    "Design and develop scalable web applications",
    "Collaborate with cross-functional teams to define and implement features",
    "Write clean, maintainable, and well-documented code",
    "Participate in code reviews and maintain coding standards",
    "Optimize applications for maximum speed and scalability",
    "Stay up-to-date with emerging technologies and industry trends",
    "Mentor junior developers and contribute to team knowledge sharing",
    "Participate in agile development processes and sprint planning"
  ];

  const benefits = [
    "Competitive salary with performance bonuses",
    "Comprehensive health, dental, and vision insurance",
    "401(k) with company matching",
    "Flexible work arrangements and remote options",
    "Professional development budget ($3,000/year)",
    "Unlimited PTO policy",
    "State-of-the-art equipment and workspace",
    "Stock options and equity participation"
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <motion.button
        className="btn btn-ghost mb-6"
        onClick={() => navigate('/jobs')}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ArrowLeft size={18} />
        Back to Jobs
      </motion.button>

      {/* Job Header */}
      <motion.div 
        className="card mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-4">{jobDetails.title}</h1>
            <div className="flex flex-wrap gap-4 text-neutral-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{jobDetails.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>Full-time</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} />
                <span>Engineering Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>Posted 3 days ago</span>
              </div>
            </div>
          </div>
          <button className="btn btn-ghost">
            <Bookmark size={18} />
            Save Job
          </button>
        </div>

        <div className="flex items-center justify-between p-6 bg-primary-50 rounded-xl">
          <div className="flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-primary" />
            <div>
              <div className="text-2xl font-bold text-primary">
                ${jobDetails.salary?.toLocaleString() || '120,000'}/year
              </div>
              <div className="text-sm text-neutral-600">Base salary + benefits</div>
            </div>
          </div>
          <button className="btn btn-primary">
            <Send size={18} />
            Apply Now
          </button>
        </div>
      </motion.div>

      {/* Job Description */}
      <motion.div 
        className="card mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">About This Role</h2>
        <p className="text-neutral-600 leading-relaxed mb-6">
          We're looking for a talented {jobDetails.title} to join our growing engineering team. 
          In this role, you'll be responsible for building and maintaining high-quality software 
          solutions that serve millions of users worldwide. You'll work closely with product 
          managers, designers, and other engineers to deliver features that make a real impact 
          on our customers' businesses.
        </p>
        <p className="text-neutral-600 leading-relaxed">
          This is an excellent opportunity for someone who wants to work with cutting-edge 
          technologies, contribute to architectural decisions, and help shape the future of 
          our platform. We value innovation, collaboration, and continuous learning.
        </p>
      </motion.div>

      {/* Responsibilities */}
      <motion.div 
        className="card mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-6">Key Responsibilities</h2>
        <div className="space-y-3">
          {responsibilities.map((responsibility, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-neutral-700">{responsibility}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Requirements */}
      <motion.div 
        className="card mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6">Requirements</h2>
        <div className="space-y-3">
          {requirements.map((requirement, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <CheckCircle size={20} className="text-success-500 mt-0.5 flex-shrink-0" />
              <span className="text-neutral-700">{requirement}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div 
        className="card mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-6">Benefits & Perks</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-neutral-700 text-sm">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Application CTA */}
      <motion.div 
        className="card text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
        <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
          Join our team and help us build the future of enterprise technology. 
          We're excited to hear from you!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="btn btn-primary">
            <Send size={18} />
            Apply for This Position
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate('/contact')}
          >
            Have Questions? Contact Us
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default JobsDetails;

export const job_Details_Loader = async ({ params }) => {
  const { id } = params;
  
  try {
    const res = await fetch(`http://localhost:5000/jobs/${id}`);
    if (!res.ok) {
      throw new Error("Could not find the job details");
    }
    return res.json();
  } catch (error) {
    // Return mock data if the API is not available
    const mockJobs = {
      1: { id: 1, title: "Senior Frontend Developer", salary: 120000, location: "San Francisco, CA" },
      2: { id: 2, title: "Backend Engineer", salary: 115000, location: "Remote" },
      3: { id: 3, title: "Product Manager", salary: 140000, location: "New York, NY" },
      4: { id: 4, title: "UX Designer", salary: 95000, location: "Austin, TX" }
    };
    
    const job = mockJobs[id];
    if (!job) {
      throw new Error("Could not find the job details");
    }
    return job;
  }
};