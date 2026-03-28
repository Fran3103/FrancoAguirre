
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "sent" | "error";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const inputClass =
  "bg-brand-dark border border-brand-border rounded-lg p-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-brand-cyan transition-colors";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("sent");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const buttonLabel: Record<Status, string> = {
    idle: "Enviar Mensaje",
    sending: "Enviando...",
    sent: "¡Mensaje Enviado!",
    error: "Reintentar",
  };

  return (
    <section
      id="contact"
      className="py-24 bg-brand-card/20 border-t border-brand-border"
    >
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-brand-cyan text-3xl tracking-widest font-mono mb-2 uppercase">
            Contacto
          </p>
        </div>

        <form className="space-y-4" ref={formRef} onSubmit={handleSubmit}>
          {/* Honeypot anti-spam */}
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="NOMBRE"
              className={inputClass}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="CORREO ELECTRÓNICO"
              className={inputClass}
              required
            />
          </div>

          <textarea
            placeholder="MENSAJE O REQUERIMIENTO TÉCNICO"
            name="message"
            rows={4}
            className={`w-full ${inputClass} resize-none`}
            required
          />

          {status === "sent" && (
            <p className="text-center text-brand-cyan text-xs font-bold tracking-widest uppercase">
              Tu mensaje fue enviado correctamente.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-400 text-xs font-bold tracking-widest uppercase">
              Ocurrió un error. Intentalo de nuevo.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-4 bg-brand-cyan text-brand-dark font-bold uppercase tracking-widest rounded-lg hover:shadow-neon-strong transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {buttonLabel[status]}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
