import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface CareerProps {
  onNavigate: (page: string) => void;
}

const Career: React.FC<CareerProps> = ({ onNavigate }) => {
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
          start: "top 80%",
        },
      });

      tl.to(
        bigLetterRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
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
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="career"
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
              ></div>
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
                Join our talented team and work on exciting projects that shape
                the future of digital experiences.
              </p>

              {/* Animated Arrow */}
              <div
                onClick={() => onNavigate("join-team")}
                className="group cursor-pointer inline-flex items-center space-x-3 text-pink-600 hover:text-pink-700 transition-colors duration-300"
              >
                <span className="text-sm font-medium tracking-wide">
                  JOIN OUR TEAM
                </span>
                <div className="relative">
                  <div className="w-12 h-12 border-2 border-current flex items-center justify-center rounded-full group-hover:bg-pink-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full border border-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
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
