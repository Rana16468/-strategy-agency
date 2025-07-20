import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bigLetterRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(
      [
        bigLetterRef.current,
        titleRef.current,
        descriptionRef.current,
        buttonsRef.current,
      ],
      {
        opacity: 0,
        y: 50,
      }
    );

    tl.to(bigLetterRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-white overflow-hidden"
      ref={heroRef}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
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
                We create stunning digital experiences that drive results. From
                brand identity to web development, we bring your vision to life
                with innovative design and cutting-edge technology.
              </p>

              <div
                onClick={() => onNavigate("explore-work")}
                className="group cursor-pointer inline-flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors duration-300"
              >
                <span className="text-sm font-medium tracking-wide">
                  EXPLORE OUR WORK
                </span>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-current animate-ping opacity-20"></div>
                </div>
              </div>
            </div>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
