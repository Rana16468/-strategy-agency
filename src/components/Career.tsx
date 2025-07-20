import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CareerProps {
  onNavigate: (page: string) => void;
}

const Career: React.FC<CareerProps> = ({ onNavigate }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bigLetterRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([bigLetterRef.current, titleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 50,
      });

      gsap.set(shapeRef.current, {
        scale: 0,
        rotation: -30,
      });

      // Animation sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

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
      }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="career" className="min-h-screen relative overflow-hidden bg-white" ref={sectionRef}>
      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        <div 
          ref={shapeRef}
          className="absolute top-10 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-pink-600 transform -translate-x-32 -translate-y-16 opacity-80"
          style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}
        />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-indigo-400 to-indigo-500 transform rotate-45 translate-x-20 translate-y-20 opacity-70 rounded-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-600 transform -rotate-45 opacity-20 rounded-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            {/* Large Letter */}
            <div className="flex items-start space-x-8">
              <div 
                ref={bigLetterRef}
                className="text-9xl lg:text-[12rem] font-bold text-gray-900 leading-none"
              >
                C
              </div>
              <div className="flex flex-col justify-center space-y-2 pt-8">
                <div className="text-gray-400 text-sm tracking-widest">A</div>
                <div className="text-gray-400 text-sm tracking-widest">R</div>
                <div className="text-gray-400 text-sm tracking-widest">E</div>
                <div className="text-gray-400 text-sm tracking-widest">E</div>
                <div className="text-gray-400 text-sm tracking-widest">R</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-16">
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Join Us</p>
              <h1 
                ref={titleRef}
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Build Your
                <span className="block text-pink-600">Future</span>
              </h1>
              <p 
                ref={descriptionRef}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Join our talented team and work on exciting projects 
                that shape the future of digital experiences.
              </p>

              {/* Animated Arrow */}
              <div 
                onClick={() => onNavigate('join-team')}
                className="group cursor-pointer inline-flex items-center space-x-3 text-pink-600 hover:text-pink-700 transition-colors duration-300"
              >
                <span className="text-sm font-medium tracking-wide">JOIN OUR TEAM</span>
                <div className="relative">
                  <div className="w-12 h-12 border-2 border-current flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110"
                       style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute -inset-2 border border-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"
                       style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;