import { Project } from "@/types";
import React, { useEffect, useRef, useState } from "react";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const images = project.image ?? [];
  const hasImages = images.length > 0;

  const [active, setActive] = useState(0);
  const timerRef = useRef<number | null>(null);

  const startAuto = () => {
    if (images.length <= 1) return;
    stopAuto();
    timerRef.current = window.setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 1200);
  };

  const stopAuto = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = null;
    setActive(0); // vuelve a la primera cuando salís
  };

  useEffect(() => {
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="bg-brand-card/50 border border-brand-border rounded-3xl p-6 md:p-8 flex flex-col h-full hover:border-brand-cyan/30 transition-all group"
      onMouseEnter={startAuto}
      onMouseLeave={stopAuto}
    >
      <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-tight group-hover:text-brand-cyan transition-colors">
        {project.title}
      </h3>

      <p className="text-gray-400 text-sm mb-8 leading-relaxed">
        {project.description}
      </p>

      <div className="flex-grow bg-brand-dark/80 rounded-2xl border border-brand-border p-6 mb-8 relative overflow-hidden">
        <div className="absolute top-3 left-3 flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="absolute top-3 right-3 flex gap-1.5">
         
          <a
           href={project.github ? project.github : undefined}
            className="px-3 py-1 bg-brand-border text-gray-400 text-[10px] font-bold uppercase rounded-full"
          >
            {project.github ? 'GitHub' : 'No GitHub'}
          </a>
          <a href={project.demo ? project.demo : undefined} className="px-3 py-1 bg-brand-border text-gray-400 text-[10px] font-bold uppercase rounded-full"
          >{project.demo ? 'Demo' : 'No Demo'}</a>
    
        </div>
        {hasImages ? (
          <>
            <img
              src={images[active]}
              alt={`${project.title} screenshot ${active + 1}`}
              className="mt-8 w-full h-44 md:h-52 object-cover rounded-lg border border-brand-border shadow-lg
                         opacity-90 group-hover:opacity-100 transition-all duration-500"
              loading="lazy"
            />

            {images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      idx === active ? "bg-brand-cyan" : "bg-gray-600/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <p className="text-gray-600 italic text-center mt-12">
            Diagrama no disponible
          </p>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-brand-border text-gray-400 text-[10px] font-bold uppercase rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
