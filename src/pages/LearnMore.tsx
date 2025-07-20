import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft, Award, Users, Globe, Zap } from 'lucide-react';

interface LearnMoreProps {
  onBack: () => void;
}

const LearnMore: React.FC<LearnMoreProps> = ({ onBack }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    gsap.set([titleRef.current, contentRef.current], {
      opacity: 0,
      y: 50,
    });

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4");
  }, []);

  const features = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in design and innovation",
      color: "text-orange-600"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Talented professionals with years of experience",
      color: "text-blue-600"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with local expertise",
      color: "text-green-600"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality",
      color: "text-purple-600"
    }
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full transform -translate-x-32 -translate-y-16 opacity-20" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-blue-400 to-blue-500 transform rotate-12 translate-x-20 translate-y-20 opacity-20 rounded-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-600">Rally</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a creative agency passionate about transforming ideas into 
            exceptional digital experiences that drive results and inspire audiences.
          </p>
        </div>

        {/* Content */}
        <div ref={contentRef} className="space-y-16">
          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, Rally has grown from a small team of passionate 
                designers to a full-service creative agency. We believe in the power 
                of great design to solve complex problems and create meaningful connections.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to help businesses tell their stories through 
                innovative design, cutting-edge technology, and strategic thinking.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={32} className={feature.color} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-orange-100">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-orange-100">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4</div>
                <div className="text-orange-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;