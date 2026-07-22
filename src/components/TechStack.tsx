import {
  FiCheckCircle,
  FiLayers,
  FiServer,
} from 'react-icons/fi';

const PRINCIPAL_STACK = [
  'Java',
  'Spring Boot',
  'Spring Security',
  'APIs REST',
  'JPA / Hibernate',
  'SQL',
  'PostgreSQL',
  'Flyway',
];

const QUALITY_STACK = [
  'JUnit',
  'Mockito',
  'Postman',
  'Swagger / OpenAPI',
  'Git / GitHub',
  'Docker',
  'GitHub Actions / CI',
];

const COMPLEMENTARY_STACK = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML / CSS',
  'QA Manual',
  'Análisis funcional',
  'User Stories',
  'UML',
  'Scrum',
];

const chipClass =
  'rounded-full border border-brand-border bg-brand-dark px-4 py-2 font-mono text-xs text-gray-300 transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan';

function TechStack() {
  return (
    <section
      id="tech"
      className="scroll-mt-24 border-y border-brand-border bg-brand-dark/50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-brand-cyan">
            Stack técnico
          </p>

          <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
            Tecnologías organizadas por especialización
          </h2>

          <p className="leading-relaxed text-gray-400">
            Mi stack principal está orientado al desarrollo backend con Java.
            Las herramientas de calidad, frontend y análisis complementan la
            construcción y validación de las aplicaciones.
          </p>
        </div>

        <article className="mb-8 overflow-hidden rounded-3xl border border-brand-cyan/30 bg-brand-card/60 p-7 shadow-neon md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 p-3 text-2xl text-brand-cyan">
                <FiServer aria-hidden="true" />
              </div>

              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand-cyan">
                Especialización principal
              </p>

              <h3 className="mb-4 text-3xl font-bold tracking-tight">
                Backend Java
              </h3>

              <p className="text-sm leading-relaxed text-gray-400">
                Desarrollo de APIs, lógica de negocio, persistencia, seguridad
                y migraciones de bases de datos.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {PRINCIPAL_STACK.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-brand-cyan/30 bg-brand-cyan/5 px-5 py-3 font-mono text-sm font-medium text-gray-200 transition-colors hover:bg-brand-cyan/10 hover:text-brand-cyan"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </article>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-brand-border bg-brand-card/40 p-7 md:p-8">
            <div className="mb-5 inline-flex rounded-xl border border-brand-border bg-brand-dark p-3 text-xl text-brand-cyan">
              <FiCheckCircle aria-hidden="true" />
            </div>

            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand-cyan">
              Calidad y herramientas
            </p>

            <h3 className="mb-4 text-2xl font-bold">
              Pruebas, documentación y flujo de trabajo
            </h3>

            <p className="mb-7 text-sm leading-relaxed text-gray-400">
              Herramientas utilizadas para probar APIs, documentar contratos,
              gestionar versiones y automatizar verificaciones.
            </p>

            <div className="flex flex-wrap gap-3">
              {QUALITY_STACK.map((technology) => (
                <span key={technology} className={chipClass}>
                  {technology}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-brand-border bg-brand-card/40 p-7 md:p-8">
            <div className="mb-5 inline-flex rounded-xl border border-brand-border bg-brand-dark p-3 text-xl text-brand-cyan">
              <FiLayers aria-hidden="true" />
            </div>

            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand-cyan">
              Conocimientos complementarios
            </p>

            <h3 className="mb-4 text-2xl font-bold">
              Frontend, testing y análisis
            </h3>

            <p className="mb-7 text-sm leading-relaxed text-gray-400">
              Conocimientos que utilizo para integrar interfaces, comprender
              requerimientos y evaluar la aplicación más allá del código.
            </p>

            <div className="flex flex-wrap gap-3">
              {COMPLEMENTARY_STACK.map((technology) => (
                <span key={technology} className={chipClass}>
                  {technology}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default TechStack;