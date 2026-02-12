
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-tight mb-6">
            FRANCO AGUIRRE<br />
          
            <span className="text-brand-cyan">  DESARROLLADOR <br /> JAVA</span>
          </h1>
          
          <div className="font-mono bg-brand-card/50 p-6 rounded-lg border border-brand-border mb-8 max-w-xl mx-auto lg:mx-0">
            <p className="text-brand-cyan mb-2 text-sm md:text-base">
              <span className="text-pink-500">{`> `}</span>
              Enfocado en Java con Spring Boot.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Construyo APIs REST y aplicaciones web con foco en backend. Spring Security, Flyway, Swagger, Docker y Postman en el flujo de trabajo. DB: PostgreSQL/MySQL. También desarrollo UI con React/TypeScript cuando el proyecto lo requiere.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#projects" className="group relative bg-brand-cyan text-brand-dark font-bold px-8 py-4 rounded-lg overflow-hidden transition-all hover:shadow-neon-strong text-center">
              <span className="relative z-10 uppercase tracking-widest flex items-center justify-center gap-2">
                Ver Proyectos
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
            <a href="#contact" className="px-8 py-4 border border-brand-border rounded-lg text-gray-400 hover:text-brand-cyan hover:border-brand-cyan transition-all text-center uppercase tracking-widest font-bold">
              Contacto
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 border-2 border-brand-cyan/20 rounded-3xl animate-pulse"></div>
            <div className="absolute inset-4 border-4 border-brand-cyan/10 rounded-2xl"></div>
            <div className="absolute inset-8 bg-brand-dark border-2 border-brand-cyan/30 rounded-xl flex items-center justify-center overflow-hidden">
              <div className="grid grid-cols-6 grid-rows-6 gap-2 w-full h-full p-4 opacity-40">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="bg-brand-cyan/20 rounded-sm"></div>
                ))}
              </div>
              <div className="absolute z-10 flex flex-col items-center">
                <div className="bg-brand-dark/90 px-4 py-2 border border-brand-cyan/50 text-brand-cyan font-mono text-xs rounded mb-2">
                  SPRING_INITIALIZED
                </div>
                <div className="text-[10px] text-gray-500 font-mono">Status: 200 OK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
