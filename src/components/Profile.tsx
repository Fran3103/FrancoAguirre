function Profile() {
  return (
    <section
      id="profile"
      className="scroll-mt-24 border-y border-brand-border bg-brand-card/20 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-brand-cyan">
            Perfil
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Backend como especialización principal
          </h2>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-gray-400 md:text-lg">
          <p>
            Mi especialización principal es el desarrollo backend con Java y
            Spring Boot. Construyo APIs REST, modelo bases de datos relacionales
            e implemento seguridad, validaciones, documentación y pruebas.
          </p>

          <p>
            Mi formación en análisis funcional y testing QA me permite
            comprender requerimientos, documentar procesos, diseñar casos de
            prueba y evaluar una aplicación más allá del código. También puedo
            integrar interfaces con React y TypeScript cuando el proyecto lo
            requiere.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {[
              'APIs REST',
              'Bases de datos SQL',
              'Seguridad',
              'Testing',
              'Documentación',
            ].map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-brand-border bg-brand-dark px-4 py-2 font-mono text-xs uppercase tracking-wider text-gray-300"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;