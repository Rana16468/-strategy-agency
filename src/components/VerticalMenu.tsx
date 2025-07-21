import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface VerticalMenuProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const VerticalMenu: React.FC<VerticalMenuProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState(false);

  const sections = [
    { id: "home", letter: "H" },
    { id: "about", letter: "A" },
    { id: "portfolio", letter: "P" },
    { id: "career", letter: "C" },
    { id: "contact", letter: "T" },
  ];

  const handleScroll = (event: WheelEvent) => {
    if (scrolling) return;

    setScrolling(true);

    const scrollDirection = event.deltaY;
    const currentIndex = sections.findIndex(
      (section) => section.id === activeSection
    );
    let nextIndex = currentIndex;

    if (scrollDirection > 0) {
      nextIndex = Math.min(currentIndex + 1, sections.length - 1);
    } else {
      nextIndex = Math.max(currentIndex - 1, 0);
    }

    if (nextIndex !== currentIndex) {
      onSectionChange(sections[nextIndex].id);
    }

    setTimeout(() => setScrolling(false), 400);
  };

  useEffect(() => {
    const letters = lettersRef.current;
    const container = containerRef.current;

    if (!container) return;

    gsap.set(letters, {
      scale: 1,
    });

    const activeIndex = sections.findIndex(
      (section) => section.id === activeSection
    );

    if (activeIndex !== -1 && letters[activeIndex]) {
      // Scale up the active letter
      gsap.to(letters[activeIndex], {
        scale: 2,
        duration: 0.2,
      });

      // Center the container based on active letter position
      const centerOffset = (activeIndex - 2) * -80; // 2 is middle index, 80px is spacing
      gsap.to(container, {
        y: centerOffset,
        duration: 0.3,
        ease: "power2.out"
      });

      // Scale down other letters
      letters.forEach((letter, index) => {
        if (index !== activeIndex && letter) {
          gsap.to(letter, {
            scale: 1,
          });
        }
      });
    }
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection]);

  const handleLetterClick = (sectionId: string) => {
    onSectionChange(sectionId);
  };

  return (
    <div
      ref={menuRef}
      className="fixed top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div 
        ref={containerRef}
        className="flex flex-col space-y-20 relative"
      >
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => (lettersRef.current[index] = el)}
            onClick={() => handleLetterClick(section.id)}
            className={`cursor-pointer transition-all duration-300 ease-in-out text-neutral-800
              ${
                activeSection === section.id
                  ? "text-9xl font-extrabold"
                  : "text-lg font-medium"
              }
             `}
            style={{ transformOrigin: "center" }}
          >
            {section.letter}
          </div>
        ))}

        {/* Indicator Dot */}
        <div className="absolute -right-8 top-0 bottom-0 flex items-start justify-center pointer-events-none">
          <div
            className="w-2 h-2 rounded-full transition-all duration-500 ease-out"
            style={{
              transform: `translateY(${
                sections.findIndex((s) => s.id === activeSection) * 80
              }px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalMenu;