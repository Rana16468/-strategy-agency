import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface VerticalMenuProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const VerticalMenu: React.FC<VerticalMenuProps> = ({ activeSection, onSectionChange }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    { id: 'home', letter: 'H' },
    { id: 'about', letter: 'A' },
    { id: 'portfolio', letter: 'P' },
    { id: 'career', letter: 'C' },
    { id: 'contact', letter: 'T' },
  ];

  useEffect(() => {
    const letters = lettersRef.current;
    
    // Initialize all letters to normal size
    gsap.set(letters, {
      scale: 1,
      opacity: 0.6,
      fontWeight: 400,
    });

    // Animate active letter
    const activeIndex = sections.findIndex(section => section.id === activeSection);
    if (activeIndex !== -1 && letters[activeIndex]) {
      gsap.to(letters[activeIndex], {
        scale: 1.8,
        opacity: 1,
        fontWeight: 700,
        duration: 0.6,
        ease: "back.out(1.7)",
      });

      // Animate non-active letters back to normal
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

  const handleLetterClick = (sectionId: string) => {
    onSectionChange(sectionId);
  };

  return (
    <div 
      ref={menuRef}
      className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="flex flex-col space-y-8">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={el => lettersRef.current[index] = el}
            onClick={() => handleLetterClick(section.id)}
            className="cursor-pointer text-4xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 select-none"
            style={{ transformOrigin: 'center' }}
          >
            {section.letter}
          </div>
        ))}
      </div>
      
      {/* Vertical line indicator */}
      <div className="absolute -right-8 top-0 bottom-0 w-px bg-gray-300">
        <div 
          className="w-2 h-2 bg-blue-600 rounded-full absolute -left-0.5 transition-all duration-500 ease-out"
          style={{
            top: `${sections.findIndex(s => s.id === activeSection) * 25}%`,
          }}
        />
      </div>
    </div>
  );
};

export default VerticalMenu;