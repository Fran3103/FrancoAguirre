import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import CertificateCard from "../components/CertificateCard";
import { CERTIFICATE_CATEGORIES, CERTIFICATES } from "../data/certificates";
import { useState } from "react";
import CertificateModal from "../components/CertificateModal";
import type { Certificate, CertificateCategory } from "../types";
import PageMetadata from "../components/PageMetadata";

const FORMAL_EDUCATION = [
  {
    id: "teclab-programacion",
    institution: "Teclab Instituto Técnico Superior",
    title: "Tecnicatura en Programación",
    status: "En curso",
    description:
      "Formación superior orientada a programación, desarrollo de software y fundamentos técnicos.",
  },
  {
    id: "functional-analyst",
    institution: "Educación IT",
    title: "Carrera Analista de Negocios – Functional Analyst",
    status: "Trayecto finalizado",
    description:
      "Formación en análisis funcional, gestión de proyectos, User Stories, Scrum, OKR y UML. Certificado integral en trámite.",
  },
  {
    id: "testing-qa-manager",
    institution: "Educación IT",
    title: "Carrera Testing QA – QA Manager",
    status: "En curso",
    description:
      "Formación orientada a testing manual, diseño de pruebas y calidad de software.",
  },
];

const CATEGORY_INFORMATION: Record<
  CertificateCategory,
  {
    id: string;
    description: string;
  }
> = {
  "Backend Java": {
    id: "backend-java",
    description:
      "Formación directamente relacionada con desarrollo backend, APIs, seguridad, microservicios y bases de datos.",
  },
  "Análisis funcional": {
    id: "analisis-funcional",
    description:
      "Herramientas para comprender requerimientos, modelar soluciones, documentar procesos y trabajar con equipos ágiles.",
  },
  "Testing QA": {
    id: "testing-qa",
    description:
      "Formación en curso orientada a validación funcional, diseño de pruebas y calidad de software.",
  },
  "Desarrollo web": {
    id: "desarrollo-web",
    description:
      "Conocimientos complementarios para construir e integrar interfaces web.",
  },
};

function CertificationsPage() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const visibleCategories = CERTIFICATE_CATEGORIES.filter((category) =>
    CERTIFICATES.some((certificate) => certificate.category === category),
  );
  return (
    <section className="min-h-screen pb-24 pt-32">
      <PageMetadata
        title="Formación y certificaciones | Franco Aguirre"
        description="Certificaciones de Franco Aguirre en backend Java, Spring Boot, análisis funcional, testing QA y desarrollo web."
        path="/certificaciones"
      />
      <div className="mx-auto max-w-7xl px-6">
        <Link
          to="/#education"
          className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-gray-400 transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
        >
          <FiArrowLeft aria-hidden="true" />
          Volver al portfolio
        </Link>

        <header className="mb-14 max-w-4xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-brand-cyan">
            Formación profesional
          </p>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Formación y certificaciones
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-gray-400 md:text-lg">
            Selección de formaciones relacionadas con mi especialización backend
            Java y con capacidades complementarias de análisis funcional,
            testing QA y desarrollo web.
          </p>
        </header>
        <section aria-labelledby="formal-education-title" className="mb-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand-cyan">
              Formación académica
            </p>

            <h2
              id="formal-education-title"
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
            >
              Educación formal y certificaciones
            </h2>

            <p className="leading-relaxed text-gray-400">
              Formación académica y profesional actualmente en curso o
              finalizada.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {FORMAL_EDUCATION.map((education) => (
              <article
                key={education.id}
                className="rounded-2xl border border-brand-border bg-brand-card/40 p-6 transition-colors hover:border-brand-cyan/40"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
                    {education.institution}
                  </p>

                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      education.status === "En curso"
                        ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-300"
                        : "border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan"
                    }`}
                  >
                    {education.status}
                  </span>
                </div>

                <h3 className="mb-4 text-xl font-bold leading-tight">
                  {education.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-400">
                  {education.description}
                </p>
              </article>
            ))}
          </div>
        </section>
        <nav
          aria-label="Categorías de certificaciones"
          className="mb-20 flex flex-wrap gap-3"
        >
          {visibleCategories.map((category) => (
            <a
              key={category}
              href={`#${CATEGORY_INFORMATION[category].id}`}
              className="rounded-full border border-brand-border bg-brand-card/40 px-4 py-2 font-mono text-xs text-gray-300 transition-colors hover:border-brand-cyan hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              {category}
            </a>
          ))}
        </nav>

        <div className="space-y-24">
          {visibleCategories.map((category) => {
            const categoryCertificates = CERTIFICATES.filter(
              (certificate) => certificate.category === category,
            );

            if (categoryCertificates.length === 0) {
              return null;
            }

            return (
              <section
                key={category}
                id={CATEGORY_INFORMATION[category].id}
                className="scroll-mt-28"
              >
                <div className="mb-10 max-w-3xl">
                  <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand-cyan">
                    Categoría
                  </p>

                  <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                    {category}
                  </h2>

                  <p className="leading-relaxed text-gray-400">
                    {CATEGORY_INFORMATION[category].description}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {categoryCertificates.map((certificate) => (
                    <CertificateCard
                      key={certificate.id}
                      certificate={certificate}
                      onView={setSelectedCertificate}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-24 rounded-3xl border border-brand-cyan/20 bg-brand-cyan/5 p-8 text-center md:p-12">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Formación aplicada en proyectos backend y full stack
          </h2>

          <p className="mx-auto mb-7 max-w-2xl leading-relaxed text-gray-400">
            Estos conocimientos se aplican en proyectos backend como
            CocktailOps, Ticketing API y la demo de microservicios Ecommerce.
          </p>

          <Link
            to="/#projects"
            className="inline-flex rounded-lg bg-brand-cyan px-6 py-3 font-bold text-brand-dark transition-all hover:shadow-neon-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            Ver proyectos
          </Link>
        </div>
      </div>
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}

export default CertificationsPage;
