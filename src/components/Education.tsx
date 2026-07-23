import { Link } from 'react-router-dom';

const EDUCATION_ITEMS = [
  {
    institution: 'Teclab',
    title: 'Tecnicatura en Programación',
    status: 'En curso',
  },
  {
    institution: 'Educación IT',
    title: 'Carrera Analista de Negocios – Functional Analyst',
    status: 'Finalizado · Certificado integral en trámite',
  },
  {
    institution: 'Educación IT',
    title: 'Carrera Testing QA – QA Manager',
    status: 'En curso',
  },
  {
    institution: 'TodoCode Academy',
    title: 'Cursos de Java y Spring',
    status: 'Spring Boot · Spring Security · Spring Cloud',
  },
];

function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-brand-cyan">
            Formación y certificaciones
          </p>

          <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
            Formación orientada al desarrollo y la calidad
          </h2>

          <p className="leading-relaxed text-gray-400">
            Formación técnica principal en programación, desarrollo backend
            Java, análisis funcional y testing de software.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {EDUCATION_ITEMS.map((item) => (
            <article
              key={`${item.institution}-${item.title}`}
              className="rounded-2xl border border-brand-border bg-brand-card/40 p-6 transition-colors hover:border-brand-cyan/40"
            >
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand-cyan">
                {item.institution}
              </p>

              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>

              <p className="text-sm leading-relaxed text-gray-400">
                {item.status}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/certificaciones"
            className="inline-flex rounded-lg bg-brand-cyan px-6 py-3 font-bold uppercase tracking-wider text-brand-dark transition-all hover:shadow-neon-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
          >
            Ver todas las certificaciones
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Education;