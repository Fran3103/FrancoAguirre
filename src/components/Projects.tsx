import { PROJECTS } from '../data/projects';
import ProjectCard from '../utils/ProjectCard';

function Projects() {
  const [featuredProject, ...otherProjects] = PROJECTS;

  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-brand-cyan">
            Experiencia práctica
          </p>

          <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
            Proyectos
          </h2>

          <p className="leading-relaxed text-gray-400">
            Aplicaciones desarrolladas para aplicar diseño de APIs, persistencia,
            seguridad, documentación, testing e integración entre frontend y
            backend.
          </p>
        </div>

        <div id="main-project" className="scroll-mt-24">
          <ProjectCard project={featuredProject} featured />
        </div>

        <div id="other-projects" className="mt-20 scroll-mt-24">
          <div className="mb-10">
            <p className="mb-3 font-mono text-sm uppercase tracking-widest text-brand-cyan">
              Otros proyectos
            </p>

            <h3 className="text-3xl font-bold tracking-tight">
              Backend, microservicios y desarrollo web
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;