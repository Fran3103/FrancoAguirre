
import React from 'react';
import { TechItem } from '../../types';

const TECH_ITEMS: TechItem[] = [
  { name: 'Java', category: 'Lenguaje Principal', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', category: 'Framework Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Spring Security', category: 'Seguridad', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Arquitectura y APIs', category: 'Arquitectura', icon: 'https://img.icons8.com/ios-filled/50/00f5d4/flow-chart.png' },
  
  
  { name: 'PosgreSQL', category: 'Bases de Datos', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', category: 'Bases de Datos', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/mysql/mysql-original.svg' },
  { name: 'Swagger', category: 'Documentación API', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/swagger/swagger-original.svg' },
  { name: 'Flyway', category: 'Migración DB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@16.6.0/icons/flyway.svg' },
  { name: 'Postman', category: 'Testing API', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'Docker', category: 'Entornos', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/docker/docker-original.svg' },
  { name: 'React JS', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', category: 'Tipado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },{ name: 'Tailwind', category: 'Estilado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'HTML/CSS', category: 'Bases Web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
];

const TechStack: React.FC = () => {
  return (
    <section id="tech" className="py-24 bg-brand-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-cyan text-sm tracking-widest font-mono mb-2 uppercase">Stack Tecnológico</p>
          <h2 className="text-4xl font-bold tracking-tighter uppercase">Herramientas & Tecnologías</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {TECH_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-brand-card/30 border border-brand-border rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:border-brand-cyan/50 hover:bg-brand-cyan/5 hover:shadow-neon"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center p-2 rounded-xl bg-brand-dark border border-brand-border group-hover:border-brand-cyan/30 transition-colors">
                <img src={item.icon} alt={item.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <h3 className="text-sm font-bold mb-1 text-center">{item.name}</h3>
              <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">{item.category}</p>
              
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-brand-border group-hover:border-brand-cyan transition-colors"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-brand-border group-hover:border-brand-cyan transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
