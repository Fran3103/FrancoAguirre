
import  React,{ useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";
const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Extras FormSubmit
    formData.append("_subject", "Nuevo mensaje desde mi portfolio");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    // Honeypot (si el bot lo completa, lo podés ignorar)
    const honey = formData.get("_honey");
    if (honey) return;

    setStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/fn.aguirre@hotmail.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="NOMBRE"
              className="bg-brand-dark border border-brand-border rounded-lg p-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-brand-cyan transition-colors"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="CORREO ELECTRÓNICO"
              className="bg-brand-dark border border-brand-border rounded-lg p-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-brand-cyan transition-colors"
              required
            />
          </div>

          <textarea
            placeholder="MENSAJE O REQUERIMIENTO TÉCNICO"
            name="message"
            rows={4}
            className="w-full bg-brand-dark border border-brand-border rounded-lg p-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-brand-cyan transition-colors resize-none"
            required
          />

          {/* Honeypot invisible */}
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-4 bg-brand-cyan text-brand-dark font-bold uppercase tracking-widest rounded-lg hover:shadow-neon-strong transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
          </button>

          {status === "sent" && (
            <p className="text-xs tracking-widest uppercase text-brand-cyan">
              Mensaje enviado. Te respondo a la brevedad.
            </p>
          )}

          {status === "error" && (
            <p className="text-xs tracking-widest uppercase text-red-400">
              No se pudo enviar. Probá nuevamente o escribime por email.
            </p>
          )}
        </form>

        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-8">
          <a
            href="https://github.com/fran3103"
            target="_blank"
            className="flex items-center gap-2 text-gray-500 hover:text-brand-cyan transition-colors group"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@16.6.0/icons/github.svg"
              alt="GitHub"
              className="w-5 h-5 opacity-70 invert group-hover:opacity-100 group-hover:invert-0 transition"
            />
            <span className="text-xs font-bold tracking-tighter uppercase">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/franconahuelaguirre/"
            target="_blank"
            className="flex items-center gap-2 text-gray-500 hover:text-brand-cyan transition-colors group"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-5 h-5 grayscale group-hover:grayscale-0"
            />
            <span className="text-xs font-bold tracking-tighter uppercase">
              LinkedIn
            </span>
          </a>
          <a
            href="mailto:fn.aguirre@gmail.com"
            className="flex items-center gap-2 text-gray-500 hover:text-brand-cyan transition-colors group"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs font-bold tracking-tighter uppercase">
              Email
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
