import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft, MapPin, Clock, DollarSign, Users } from 'lucide-react';

interface JoinTeamProps {
  onBack: () => void;
}

const JoinTeam: React.FC<JoinTeamProps> = ({ onBack }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    gsap.set([titleRef.current, jobsRef.current], {
      opacity: 0,
      y: 50,
    });

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .to(jobsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4");
  }, []);

  const jobs = [
    {
      id: 1,
      title: "Senior UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "$80k - $120k",
      description: "Lead design projects and mentor junior designers in creating exceptional user experiences.",
      requirements: ["5+ years experience", "Figma expertise", "Portfolio required"]
    },
    {
      id: 2,
      title: "Frontend Developer",
      department: "Development",
      location: "New York",
      type: "Full-time",
      salary: "$90k - $130k",
      description: "Build responsive web applications using modern frameworks and technologies.",
      requirements: ["React/Vue expertise", "TypeScript", "3+ years experience"]
    },
    {
      id: 3,
      title: "Brand Strategist",
      department: "Strategy",
      location: "Remote",
      type: "Contract",
      salary: "$60k - $90k",
      description: "Develop brand strategies and positioning for our diverse client portfolio.",
      requirements: ["Brand strategy experience", "Creative thinking", "Client management"]
    },
    {
      id: 4,
      title: "Motion Designer",
      department: "Design",
      location: "Los Angeles",
      type: "Full-time",
      salary: "$70k - $100k",
      description: "Create engaging animations and motion graphics for digital campaigns.",
      requirements: ["After Effects", "Cinema 4D", "Creative portfolio"]
    }
  ];

  const benefits = [
    "Health & Dental Insurance",
    "Flexible Working Hours",
    "Remote Work Options",
    "Professional Development",
    "Unlimited PTO",
    "Team Retreats"
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-pink-600 transform -translate-x-32 -translate-y-16 opacity-20"
             style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-indigo-400 to-indigo-500 transform rotate-45 translate-x-20 translate-y-20 opacity-20 rounded-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-pink-600">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Be part of a creative team that's passionate about innovation, 
            collaboration, and creating exceptional digital experiences.
          </p>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-8 text-white mb-12">
            <h3 className="text-2xl font-bold mb-6">Why Work With Us?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-200 rounded-full" />
                  <span className="text-pink-100">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div ref={jobsRef} className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="group bg-gray-50 hover:bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-pink-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                      {job.title}
                    </h3>
                    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                      {job.department}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Clock size={16} />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <DollarSign size={16} />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, reqIndex) => (
                      <span
                        key={reqIndex}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 lg:mt-0 lg:ml-8">
                  <button className="w-full lg:w-auto bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors duration-300 font-medium">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Don't see the right position?
          </h3>
          <p className="text-gray-600 mb-8">
            We're always looking for talented individuals. Send us your resume!
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium">
            Send Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;