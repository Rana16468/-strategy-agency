import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft, Filter, ExternalLink } from 'lucide-react';

interface ViewProjectsProps {
  onBack: () => void;
}

const ViewProjects: React.FC<ViewProjectsProps> = ({ onBack }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const tl = gsap.timeline();
    
    gsap.set([titleRef.current, projectsRef.current], {
      opacity: 0,
      y: 50,
    });

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .to(projectsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4");
  }, []);

  const filters = ['All', 'Web Design', 'Branding', 'Mobile App', 'Marketing'];

  const projects = [
    {
      id: 1,
      title: "TechCorp Website",
      category: "Web Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Modern corporate website with clean design"
    },
    {
      id: 2,
      title: "FreshBrand Identity",
      category: "Branding",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Complete brand identity for startup company"
    },
    {
      id: 3,
      title: "FitTracker App",
      category: "Mobile App",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Fitness tracking mobile application"
    },
    {
      id: 4,
      title: "Social Campaign",
      category: "Marketing",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Digital marketing campaign for product launch"
    },
    {
      id: 5,
      title: "E-commerce Platform",
      category: "Web Design",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Full-featured online shopping platform"
    },
    {
      id: 6,
      title: "Restaurant Branding",
      category: "Branding",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Brand identity for premium restaurant chain"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div ref={pageRef} className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-green-400 to-green-600 transform translate-x-32 -translate-y-16 opacity-20"
             style={{ clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-400 to-purple-500 transform -rotate-12 -translate-x-20 translate-y-20 opacity-20 rounded-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our latest work and see how we bring creative visions to life 
            through innovative design and development.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewProjects;