import { useEffect, useRef, useState } from 'react';
import {
  FiBookOpen,
  FiCheck,
  FiExternalLink,
  FiGithub,
} from 'react-icons/fi';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  const [activeImage, setActiveImage] = useState(0);
  const timerRef = useRef<number | null>(null);

  const startCarousel = () => {
    if (project.images.length <= 1) {
      return;
    }

    if (timerRef.current) {
      window.clearInterval(timerRef.current);
    }

    timerRef.current = window.setInterval(() => {
      setActiveImage(
        (current) => (current + 1) % project.images.length,
      );
    }, 1800);
  };

  const stopCarousel = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setActiveImage(0);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, []);

  const visibleFeatures = featured
    ? project.features
    : project.features.slice(0, 4);

  return (
    <article
      className={`overflow-hidden rounded-3xl border bg-brand-card/50 transition-colors ${
        featured
          ? 'border-brand-cyan/30 shadow-neon'
          : 'border-brand-border hover:border-brand-cyan/30'
      }`}
    >
      <div
        className={
          featured
            ? 'grid lg:grid-cols-[1.05fr_0.95fr]'
            : 'flex h-full flex-col'
        }
      >
        <div
          className={`relative overflow-hidden border-brand-border bg-brand-dark ${
            featured
              ? 'min-h-[300px] border-b lg:min-h-full lg:border-b-0 lg:border-r'
              : 'h-56 border-b'
          }`}
          onMouseEnter={startCarousel}
          onMouseLeave={stopCarousel}
        >
          <div className="absolute left-4 top-4 z-10 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>

          <div className="absolute right-4 top-4 z-10 rounded-full border border-brand-border bg-brand-dark/90 px-3 py-1 font-mono text-[10px] text-gray-400">
            {activeImage + 1}/{project.images.length}
          </div>

          <img
            src={project.images[activeImage]}
            alt={`Captura de ${project.title} ${activeImage + 1}`}
            className={`h-full w-full object-cover object-top transition-opacity duration-300 ${
              featured ? 'min-h-[380px]' : 'h-56'
            }`}
            loading={featured ? 'eager' : 'lazy'}
          />

          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full border border-brand-border bg-brand-dark/90 px-3 py-2">
              {project.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  aria-label={`Mostrar captura ${index + 1} de ${project.title}`}
                  className={`h-2 rounded-full transition-all ${
                    activeImage === index
                      ? 'w-6 bg-brand-cyan'
                      : 'w-2 bg-gray-600 hover:bg-gray-400'
                  }`}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        <div
          className={`flex flex-1 flex-col ${
            featured ? 'p-7 md:p-10' : 'p-6'
          }`}
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
              {project.category}
            </p>

            <span className="rounded-full border border-brand-border bg-brand-dark px-3 py-1 text-[10px] uppercase tracking-wider text-gray-400">
              {project.status}
            </span>
          </div>

          <h3
            className={`mb-4 font-bold tracking-tight ${
              featured ? 'text-4xl' : 'text-2xl'
            }`}
          >
            {project.title}
          </h3>

          <p className="mb-7 leading-relaxed text-gray-400">
            {project.summary}
          </p>

          <div
            className={`mb-7 grid gap-5 ${
              featured ? 'md:grid-cols-2' : ''
            }`}
          >
            <div>
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-white">
                Problema
              </h4>

              <p className="text-sm leading-relaxed text-gray-400">
                {project.problem}
              </p>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-white">
                Solución
              </h4>

              <p className="text-sm leading-relaxed text-gray-400">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="mb-7">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Funcionalidades comprobables
            </h4>

            <ul className="space-y-3">
              {visibleFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-relaxed text-gray-400"
                >
                  <FiCheck
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-brand-cyan"
                  />

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-7 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-cyan px-4 py-2 text-sm font-bold text-brand-dark transition-all hover:shadow-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <FiGithub aria-hidden="true" />
              Código
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-brand-border px-4 py-2 text-sm font-bold text-gray-300 transition-colors hover:border-brand-cyan hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <FiExternalLink aria-hidden="true" />
                Demo
              </a>
            )}

            {project.docs && (
              <a
                href={project.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-brand-border px-4 py-2 text-sm font-bold text-gray-300 transition-colors hover:border-brand-cyan hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <FiBookOpen aria-hidden="true" />
                Documentación
              </a>
            )}
          </div>

          <div className="mt-auto flex flex-wrap gap-2 border-t border-brand-border pt-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-brand-dark px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;