import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft, Eye, Calendar, Users } from 'lucide-react';

interface ExploreWorkProps {
  onBack: () => void;
}

const ExploreWork: React.FC<ExploreWorkProps> = ({ onBack }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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

  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 3,
      title: "Mobile App Design",
      category: "UI/UX Design",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-green-400 to-green-600"
    },
    {
      id: 4,
      title: "Marketing Campaign",
      category: "Digital Marketing",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full transform translate-x-32 -translate-y-16 opacity-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-400 to-purple-500 transform -rotate-12 -translate-x-20 translate-y-20 opacity-20 rounded-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Work</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of creative projects that showcase our expertise 
            in design, development, and digital innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Eye size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 font-medium">{project.category}</span>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>2024</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>Team</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreWork;