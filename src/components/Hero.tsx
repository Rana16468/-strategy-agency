import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { gsap } from 'gsap';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bigLetterRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set([bigLetterRef.current, titleRef.current, descriptionRef.current, buttonsRef.current], {
      opacity: 0,
      y: 50,
    });

    gsap.set(shapeRef.current, {
      scale: 0,
      rotation: -45,
    });

    // Animation sequence
    tl.to(shapeRef.current, {
      scale: 1,
      rotation: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
    })
    .to(bigLetterRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6")
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4")
    .to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4")
    .to(buttonsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4");
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gray-50" ref={heroRef}>
      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        <div 
          ref={shapeRef}
          className="absolute top-10 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full transform translate-x-32 -translate-y-16 opacity-80"
        />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-400 to-orange-500 transform -rotate-12 -translate-x-20 translate-y-20 opacity-70 rounded-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-600 transform rotate-12 opacity-20 rounded-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            {/* Large Letter */}
            <div className="flex items-start space-x-8">
              <div 
                ref={bigLetterRef}
                className="text-9xl lg:text-[12rem] font-bold text-gray-900 leading-none"
              >
                R
              </div>
              <div className="flex flex-col justify-center space-y-2 pt-8">
                <div className="text-gray-400 text-sm tracking-widest">A</div>
                <div className="text-gray-400 text-sm tracking-widest">L</div>
                <div className="text-gray-400 text-sm tracking-widest">L</div>
                <div className="text-gray-400 text-sm tracking-widest">Y</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-16">
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Creative Agency</p>
              <h1 
                ref={titleRef}
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Rally Creative
                <span className="block text-blue-600">Solutions</span>
              </h1>
              <p 
                ref={descriptionRef}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                We create stunning digital experiences that drive results. 
                From brand identity to web development, we bring your vision to life 
                with innovative design and cutting-edge technology.
              </p>

              {/* Animated Arrow */}
              <div 
                onClick={() => onNavigate('explore-work')}
                className="group cursor-pointer inline-flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors duration-300"
              >
                <span className="text-sm font-medium tracking-wide">EXPLORE OUR WORK</span>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-current animate-ping opacity-20"></div>
                </div>
              </div>
            </div>

            <div 
              ref={buttonsRef}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <button className="group flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                <span>Get Started</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Play size={14} className="ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;