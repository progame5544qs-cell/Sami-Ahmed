import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Dreams from './components/Dreams';
import Skills from './components/Skills';
import Mindset from './components/Mindset';
import GamerProfile from './components/GamerProfile';
import Socials from './components/Socials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-purple-500/30">
      {/* Background Animated Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter gradient-text">SAMI</span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#dreams" className="hover:text-purple-400 transition-colors">Dreams</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#mindset" className="hover:text-purple-400 transition-colors">Mindset</a>
            <a href="#gaming" className="hover:text-purple-400 transition-colors">Gaming</a>
            <a href="#contact" className="px-5 py-2 glass rounded-full hover:bg-white/10 transition-all">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Dreams />
        <Skills />
        <Mindset />
        <GamerProfile />
        <Socials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;