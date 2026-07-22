import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CertificationsPage from './pages/CertificationsPage';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-cyan/30 selection:text-brand-cyan">
      <Navbar scrolled={scrolled} />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/certificaciones"
            element={<CertificationsPage />}
          />
        </Routes>
      </main>

      <footer className="flex flex-col items-center border-t border-brand-border bg-brand-dark px-6 py-12">
        <p className="mb-4 text-center text-sm text-gray-500">
          © 2026 Franco Aguirre.
        </p>

        <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
      </footer>

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-brand-cyan/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-brand-cyan/5 blur-[120px]" />
      </div>
    </div>
  );
}

export default App;