import { useEffect, useRef } from 'react';
import { FiExternalLink, FiX } from 'react-icons/fi';
import type { Certificate } from '../types';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!certificate) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', closeWithEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeWithEscape);
    };
  }, [certificate, onClose]);

  if (!certificate?.certificateUrl) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-2 backdrop-blur-sm md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-card shadow-2xl md:h-[88vh]">
        <header className="flex items-start justify-between gap-4 border-b border-brand-border px-5 py-4 md:px-6">
          <div>
            <p className="mb-1 font-mono text-xs uppercase tracking-widest text-brand-cyan">
              {certificate.institution}
            </p>

            <h2
              id="certificate-modal-title"
              className="text-lg font-bold md:text-xl"
            >
              {certificate.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar certificado"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-border text-xl text-gray-300 transition-colors hover:border-brand-cyan hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            <FiX aria-hidden="true" />
          </button>
        </header>

        <div className="min-h-0 flex-1 bg-gray-950 p-2 md:p-4">
          <iframe
            src={certificate.certificateUrl}
            title={`Certificado: ${certificate.title}`}
            className="h-full w-full rounded-lg border-0 bg-white"
          />
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-brand-border px-5 py-4 md:px-6">
          <p className="text-xs text-gray-500">
            Podés cerrar esta ventana presionando Escape.
          </p>

          <a
            href={certificate.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-brand-border px-4 py-2 text-sm font-bold text-gray-300 transition-colors hover:border-brand-cyan hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            Abrir PDF completo
            <FiExternalLink aria-hidden="true" />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default CertificateModal;