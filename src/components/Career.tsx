import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  onNavigate: (page: string) => void;
}
// { onNavigate }

const Career: React.FC<AboutProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bigLetterRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [bigLetterRef.current, titleRef.current, descriptionRef.current],
        { opacity: 0, y: 50 }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

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
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="career"
      className="min-h-screen bg-white overflow-hidden"
      ref={sectionRef}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[300px] min-h-screen py-20">
          <div className="mb-10 lg:mb-0">
            <div className="flex items-start space-x-8">
              <div
                ref={bigLetterRef}
                className="text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-bold text-gray-900 leading-none"
              >
                {/* Big Letter or Initial */}
              </div>
            </div>
          </div>

          <div className="lg:pl-16">
            <div className="mb-6">
              <p className="text-sm text-neutral-800 font-bold mb-2">
                {" "}
                Join Us
              </p>
              <h1
                ref={titleRef}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold text-neutral-800 mb-6 leading-tight"
              >
                Build Your Future
              </h1>
              <p
                ref={descriptionRef}
                className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed mt-10"
              >
                Join our talented team and work on exciting projects that shape
                the future of digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
