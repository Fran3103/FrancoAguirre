function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-brand-cyan">
            Experiencia profesional
          </p>

          <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
            Experiencia en desarrollo de software
          </h2>

          <p className="leading-relaxed text-gray-400">
            Experiencia profesional participando en el desarrollo de una
            aplicación web full stack y colaborando con un equipo de proyecto.
          </p>
        </div>

        <article className="rounded-2xl border border-brand-border bg-brand-card/40 p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand-cyan">
                Contable App · Pasantía profesional
              </p>

              <h3 className="text-2xl font-bold">
                Desarrollador Full Stack
              </h3>
            </div>

            <span className="font-mono text-sm text-gray-500">
              2024 · 3 meses
            </span>
          </div>

          <p className="mb-6 max-w-4xl leading-relaxed text-gray-400">
            Participé en la actualización de componentes y pantallas de una
            aplicación web, además de implementar nuevas funcionalidades a
            partir de diseños definidos en Figma. Trabajé coordinando cambios
            con mi responsable y con el cliente directo, adaptándome a un stack
            tecnológico diferente al que utilizaba previamente para poder
            integrarme rápidamente al proyecto.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Vue 3",
              "Vuetify",
              "Django",
              "Django REST Framework",
              "Figma",
              "PDF",
              "Trabajo con cliente",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-brand-border bg-brand-dark px-4 py-2 font-mono text-xs uppercase tracking-wider text-gray-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;