import { useEffect, useState } from 'react';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  scrolled: boolean;
}

const SECTION_LINKS = [
  { label: 'Inicio', id: 'home' },
  { label: 'Perfil', id: 'profile' },
  { label: 'Proyectos', id: 'projects' },
  { label: 'Stack', id: 'tech' },
  { label: 'Formación', id: 'education' },
  { label: 'Contacto', id: 'contact' },
];

const linkClass =
  'rounded-sm text-xs font-medium uppercase tracking-widest text-gray-400 transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan';

function Navbar({ scrolled }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const getSectionHref = (id: string) =>
    location.pathname === '/' ? `#${id}` : `/#${id}`;

  useEffect(() => {
    setMenuOpen(false);

    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeWithEscape);

    return () => {
      window.removeEventListener('keydown', closeWithEscape);
    };
  }, []);

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-white/5 bg-brand-dark/95 py-3 backdrop-blur-md'
          : 'border-transparent bg-brand-dark/70 py-4 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
        <a
          href={getSectionHref('home')}
          className="shrink-0 rounded-sm font-bold tracking-tight text-white transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
          onClick={() => setMenuOpen(false)}
        >
          FRANCO
          <span className="text-brand-cyan"> AGUIRRE</span>
        </a>

        <div className="hidden items-center justify-center gap-5 lg:flex">
          {SECTION_LINKS.map((item) => (
            <a
              key={item.id}
              href={getSectionHref(item.id)}
              className={linkClass}
            >
              {item.label}
            </a>
          ))}

          <Link
            to="/certificaciones"
            className={linkClass}
            aria-current={
              location.pathname === '/certificaciones' ? 'page' : undefined
            }
          >
            Certificaciones
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="/Franco_Aguirre_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/50 bg-brand-cyan/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-cyan transition-all hover:bg-brand-cyan hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            <FiDownload aria-hidden="true" />
            <span className="hidden sm:inline">Descargar CV</span>
            <span className="sm:hidden">CV</span>
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-border text-xl text-gray-300 transition-colors hover:border-brand-cyan hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan lg:hidden"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? (
              <FiX aria-hidden="true" />
            ) : (
              <FiMenu aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="mt-3 border-t border-brand-border bg-brand-dark/95 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {SECTION_LINKS.map((item) => (
              <a
                key={item.id}
                href={getSectionHref(item.id)}
                className="border-b border-brand-border/60 py-4 text-sm font-medium uppercase tracking-widest text-gray-300 transition-colors last:border-b-0 hover:text-brand-cyan"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <Link
              to="/certificaciones"
              className="py-4 text-sm font-medium uppercase tracking-widest text-brand-cyan"
              onClick={() => setMenuOpen(false)}
            >
              Certificaciones
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;