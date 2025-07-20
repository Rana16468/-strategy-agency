import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioProps {
  onNavigate: (page: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bigLetterRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [bigLetterRef.current, titleRef.current, descriptionRef.current],
        {
          opacity: 0,
          y: 50,
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      tl.to(bigLetterRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.4'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio"
      className="min-h-screen relative overflow-hidden bg-white"
      ref={sectionRef}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="flex items-start space-x-8">
              <div
                ref={bigLetterRef}
                className="text-9xl lg:text-[12rem] font-bold text-gray-900 leading-none"
              >
                
              </div>
              
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-16">
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Our Work</p>
              <h1
                ref={titleRef}
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Selected
                <span className="block text-green-600">Projects</span>
              </h1>
              <p
                ref={descriptionRef}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Discover our latest work and see how we transform 
                ideas into beautiful digital experiences.
              </p>

              <div
                onClick={() => onNavigate('view-projects')}
                className="group cursor-pointer inline-flex items-center space-x-3 text-green-600 hover:text-green-700 transition-colors duration-300"
              >
                <span className="text-sm font-medium tracking-wide">VIEW PROJECTS</span>
                <div className="relative">
                  <div className="w-12 h-12 border-2 border-current flex items-center justify-center rounded-full group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
