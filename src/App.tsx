import React, { useState, useEffect } from 'react';
import VerticalMenu from './components/VerticalMenu';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Career from './components/Career';
import Contact from './components/Contact';
import ExploreWork from './pages/ExploreWork';
import LearnMore from './pages/LearnMore';
import ViewProjects from './pages/ViewProjects';
import JoinTeam from './pages/JoinTeam';
import GetInTouch from './pages/GetInTouch';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (currentPage !== 'home') return;
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'career', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setActiveSection(sectionId);
  };

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setActiveSection('home');
  };

  // Render different pages
  if (currentPage === 'explore-work') {
    return <ExploreWork onBack={navigateToHome} />;
  }
  
  if (currentPage === 'learn-more') {
    return <LearnMore onBack={navigateToHome} />;
  }
  
  if (currentPage === 'view-projects') {
    return <ViewProjects onBack={navigateToHome} />;
  }
  
  if (currentPage === 'join-team') {
    return <JoinTeam onBack={navigateToHome} />;
  }
  
  if (currentPage === 'get-in-touch') {
    return <GetInTouch onBack={navigateToHome} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <VerticalMenu 
        activeSection={activeSection} 
        onSectionChange={scrollToSection} 
      />
      <Hero onNavigate={navigateToPage} />
      <About onNavigate={navigateToPage} />
      <Portfolio onNavigate={navigateToPage} />
      <Career onNavigate={navigateToPage} />
      <Contact onNavigate={navigateToPage} />
    </div>
  );
}

export default App;