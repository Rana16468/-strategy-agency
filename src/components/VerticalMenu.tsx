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

    setTimeout(() => setScrolling(false), 400); // smoother delay
  };

  useEffect(() => {
    const letters = lettersRef.current;

    gsap.set(letters, {
      scale: 1,
      opacity: 0.6,
      fontWeight: 400,
    });

    const activeIndex = sections.findIndex(
      (section) => section.id === activeSection
    );
    if (activeIndex !== -1 && letters[activeIndex]) {
      gsap.to(letters[activeIndex], {
        scale: 1.8,
        opacity: 1,
        fontWeight: 700,
        duration: 0.6,
        ease: "back.out(1.7)",
      });

      letters.forEach((letter, index) => {
        if (index !== activeIndex && letter) {
          gsap.to(letter, {
            scale: 1,
            opacity: 0.6,
            fontWeight: 400,
            duration: 0.4,
            ease: "power2.out",
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
      <div className="flex flex-col space-y-8 relative">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => (lettersRef.current[index] = el)}
            onClick={() => handleLetterClick(section.id)}
            className="cursor-pointer text-6xl font-bold text-neutral-800   "
            style={{ transformOrigin: "center" }}
          >
            {section.letter}
          </div>
        ))}

        {/* Indicator dot only (border removed) */}
        <div className="absolute -right-8 top-0 bottom-0 flex items-start justify-center pointer-events-none">
          <div
            className="w-2 h-2  rounded-full transition-all duration-500 ease-out"
            style={{
              transform: `translateY(${
                sections.findIndex((s) => s.id === activeSection) * 50
              }px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalMenu;
