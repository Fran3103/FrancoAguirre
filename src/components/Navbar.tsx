
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const navItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Tecnologías', href: '#tech' },
    { label: 'Contacto', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-400 hover:text-brand-cyan transition-colors font-medium text-sm tracking-widest uppercase"
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <div className="md:hidden flex items-center">
           <span className="text-brand-cyan font-bold tracking-tighter">PORTFOLIO</span>
        </div>
        
        <a className="bg-brand-cyan/10 border border-brand-cyan/50 text-brand-cyan px-6 py-2 rounded-full font-bold text-xs uppercase tracking-tighter hover:bg-brand-cyan hover:text-brand-dark transition-all duration-300 shadow-neon"
          href="/Franco_Aguirre_CV.pdf" 
          taget="_blank" 
          rel="noopener noreferrer"
        >
          Descargar CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
