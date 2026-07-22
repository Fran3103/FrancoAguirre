import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

type Status = "idle" | "sending" | "sent" | "error";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const fieldClass =
  "w-full rounded-lg border border-brand-border bg-brand-dark px-4 py-3 text-sm text-gray-200 outline-none transition-colors placeholder:text-gray-600 focus:border-brand-cyan focus-visible:ring-2 focus-visible:ring-brand-cyan/30";

const CONTACT_LINKS = [
  {
    label: "LinkedIn",
    value: "franconahuelaguirre",
    href: "https://www.linkedin.com/in/franconahuelaguirre/",
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    value: "Fran3103",
    href: "https://github.com/Fran3103",
    icon: FiGithub,
  },
];

function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current || status === "sending") {
      return;
    }
    const formData = new FormData(formRef.current);
    const honeypotValue = formData.get("_honey");

    if (honeypotValue) {
      formRef.current.reset();
      setStatus("sent");
      return;
    }
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      formRef.current.reset();
      setStatus("sent");
    } catch (error) {
      console.error("No se pudo enviar el formulario:", error);
      setStatus("error");
    }
  };

  const resetStatus = () => {
    if (status === "sent" || status === "error") {
      setStatus("idle");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-brand-border bg-brand-card/20 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-brand-cyan">
            Contacto
          </p>

          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Conversemos
          </h2>

          <p className="mb-10 max-w-xl leading-relaxed text-gray-400">
            Si querés conocer más sobre mis proyectos, mi experiencia o mi
            formación, podés escribirme mediante el formulario o contactarme por
            LinkedIn.
          </p>

          <div className="space-y-4">
            {CONTACT_LINKS.map((contact) => {
              const Icon = contact.icon;
              const external = contact.href.startsWith("http");

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-xl border border-brand-border bg-brand-card/40 p-4 transition-colors hover:border-brand-cyan/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-border bg-brand-dark text-brand-cyan">
                    <Icon aria-hidden="true" />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-widest text-gray-500">
                      {contact.label}
                    </span>

                    <span className="block truncate text-sm font-bold text-gray-200">
                      {contact.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          onChange={resetStatus}
          aria-busy={status === "sending"}
          className="rounded-3xl border border-brand-border bg-brand-card/50 p-6 md:p-8"
        >
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="mb-5 grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-bold text-gray-300"
              >
                Nombre
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Tu nombre"
                className={fieldClass}
                required
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-bold text-gray-300"
              >
                Correo electrónico
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="nombre@correo.com"
                className={fieldClass}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-bold text-gray-300"
            >
              Mensaje
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows={6}
              placeholder="Contame brevemente el motivo del contacto"
              className={`${fieldClass} resize-y`}
              required
            />
          </div>

          <div className="mb-5 min-h-6" aria-live="polite" aria-atomic="true">
            {status === "sent" && (
              <p className="text-sm font-medium text-green-300">
                El mensaje fue enviado correctamente.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm font-medium text-red-300">
                No se pudo enviar el mensaje. También podés contactarme por
                LinkedIn.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-cyan px-6 py-3 font-bold text-brand-dark transition-all hover:shadow-neon-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FiSend aria-hidden="true" />

            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
