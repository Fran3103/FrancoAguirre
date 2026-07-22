import { FiAward, FiCalendar, FiClock, FiEye } from "react-icons/fi";
import type { Certificate, CertificateStatus } from "../types";

interface CertificateCardProps {
  certificate: Certificate;
  onView: (certificate: Certificate) => void;
}

const STATUS_CLASSES: Record<CertificateStatus, string> = {
  Aprobado: "border-green-400/30 bg-green-400/10 text-green-300",
  Finalizado: "border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan",
  "En curso": "border-yellow-400/30 bg-yellow-400/10 text-yellow-300",
  Participación: "border-gray-400/30 bg-gray-400/10 text-gray-300",
};

function CertificateCard({ certificate, onView }: CertificateCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-brand-card/40 p-6 transition-all hover:-translate-y-1 ${
        certificate.featured
          ? "border-brand-cyan/30 hover:border-brand-cyan/60"
          : "border-brand-border hover:border-brand-cyan/40"
      }`}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="inline-flex rounded-xl border border-brand-border bg-brand-dark p-3 text-xl text-brand-cyan">
          <FiAward aria-hidden="true" />
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
            STATUS_CLASSES[certificate.status]
          }`}
        >
          {certificate.status}
        </span>
      </div>

      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand-cyan">
        {certificate.institution}
      </p>

      <h3 className="mb-4 text-xl font-bold leading-tight">
        {certificate.title}
      </h3>

      {(certificate.date || certificate.duration) && (
        <div className="mb-5 space-y-2 text-sm text-gray-400">
          {certificate.date && (
            <p className="flex items-center gap-2">
              <FiCalendar
                aria-hidden="true"
                className="shrink-0 text-brand-cyan"
              />
              {certificate.date}
            </p>
          )}

          {certificate.duration && (
            <p className="flex items-center gap-2">
              <FiClock
                aria-hidden="true"
                className="shrink-0 text-brand-cyan"
              />
              {certificate.duration}
            </p>
          )}
        </div>
      )}

      {certificate.note && (
        <p className="mb-5 text-sm leading-relaxed text-gray-400">
          {certificate.note}
        </p>
      )}

      <div className="mt-auto pt-3">
        {certificate.certificateUrl ? (
          <button
            type="button"
            onClick={() => onView(certificate)}
            className="inline-flex items-center gap-2 rounded-lg border border-brand-border px-4 py-2 text-sm font-bold text-gray-300 transition-colors hover:border-brand-cyan hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            <FiEye aria-hidden="true" />
            Ver certificado
          </button>
        ) : (
          <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
            Certificado no disponible todavía
          </p>
        )}
      </div>
    </article>
  );
}

export default CertificateCard;
