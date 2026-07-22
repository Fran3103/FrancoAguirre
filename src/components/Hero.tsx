import {
  FiArrowRight,
  FiChevronDown,
  FiDownload,
  FiGithub,
  FiMail,
} from "react-icons/fi";
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden pb-20 pt-32"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center lg:text-left">
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-brand-cyan">
            Backend · APIs REST · Bases de datos
          </p>

          <h1 className="mb-7 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Franco Aguirre
            <span className="mt-3 block text-3xl text-brand-cyan md:text-5xl lg:text-6xl">
              Desarrollador Backend Java
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg lg:mx-0">
            Desarrollo aplicaciones backend con Java, Spring Boot, APIs REST y
            bases de datos SQL. Complemento mi perfil con testing QA y análisis
            funcional, aplicando validaciones, documentación y comprensión de
            requerimientos durante todo el ciclo de desarrollo.
          </p>

          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-cyan px-6 py-3 font-bold text-brand-dark transition-all hover:shadow-neon-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
            >
              Ver proyectos
              <FiArrowRight aria-hidden="true" />
            </a>

            <a
              href="/Franco_Aguirre_CV.pdf"
              download="Franco_Aguirre_CV.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-border px-6 py-3 font-bold text-gray-300 transition-colors hover:border-brand-cyan hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <FiDownload aria-hidden="true" />
              Descargar CV
            </a>

            <a
              href="https://github.com/Fran3103"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-border px-6 py-3 font-bold text-gray-300 transition-colors hover:border-brand-cyan hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <FiGithub aria-hidden="true" />
              GitHub
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-border px-6 py-3 font-bold text-gray-300 transition-colors hover:border-brand-cyan hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <FiMail aria-hidden="true" />
              Contacto
            </a>
          </div>
        </div>

        <div className="hidden lg:block" aria-hidden="true">
          <div className="relative rounded-3xl border border-brand-border bg-brand-card/70 p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between border-b border-brand-border pb-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>

              <span className="font-mono text-xs text-gray-500">
                backend-service.java
              </span>
            </div>

            <div className="space-y-3 font-mono text-sm">
              <p>
                <span className="text-pink-400">@RestController</span>
              </p>

              <p>
                <span className="text-purple-400">public class</span>{" "}
                <span className="text-brand-cyan">BackendController</span> {"{"}
              </p>

              <p className="pl-5 text-gray-400">
                Java · Spring Boot · APIs REST
              </p>

              <p className="pl-5 text-gray-400">PostgreSQL · JPA · Hibernate</p>

              <p className="pl-5 text-gray-400">Security · Testing · Swagger</p>

              <p>{"}"}</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Spring Boot", "PostgreSQL", "Spring Security", "JUnit"].map(
                (technology) => (
                  <div
                    key={technology}
                    className="rounded-lg border border-brand-border bg-brand-dark/80 px-3 py-3 text-center font-mono text-xs text-gray-400"
                  >
                    {technology}
                  </div>
                ),
              )}
            </div>

            <div className="absolute -bottom-4 -right-4 rounded-lg border border-brand-cyan/40 bg-brand-dark px-4 py-2 font-mono text-xs text-brand-cyan shadow-neon">
              API_READY
            </div>
          </div>
        </div>
      </div>
      <a
        href="#profile"
        aria-label="Continuar hacia la sección Perfil"
        className="absolute bottom-6 left-1/2 z-20 inline-flex -translate-x-1/2 rounded-full border border-brand-cyan/20 p-3 text-brand-cyan/50 transition-all hover:border-brand-cyan/60 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
      >
        <FiChevronDown
          aria-hidden="true"
          className="text-3xl pt-2 motion-safe:animate-bounce motion-reduce:animate-none"
        />
      </a>
    </section>
  );
}

export default Hero;
