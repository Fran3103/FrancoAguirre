
import React, { useState, useEffect } from 'react';
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import TechStack from './src/components/TechStack';
import Projects from './src/components/Projects';
import Contact from './src/components/Contact';

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
    <div className="min-h-screen font-sans selection:bg-brand-cyan/30 selection:text-brand-cyan">
      <Navbar scrolled={scrolled} />
      
      <main className="relative z-10">
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      <footer className="py-12 px-6 border-t border-brand-border bg-brand-dark flex flex-col items-center">
        <p className="text-gray-500 text-sm mb-4 text-center">
          © 2026 Franco Aguirre. Hecho con React + TypeScript.
        </p>
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent"></div>
      </footer>

      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-cyan/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-cyan/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
      </div>
    </div>
  );
};

export default App;
