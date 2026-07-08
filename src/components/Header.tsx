import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  scrollTo: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, scrollTo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for header background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerNavLinks = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'journey', label: 'Jornada' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' },
  ];

  const handleLinkClick = (id: string) => {
    scrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[1100px] z-50 flex justify-between items-center px-8 border rounded-[50px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'top-2 h-[60px] w-[95%] max-w-[1200px] bg-[#06080f]/85 border-purple-accent/20'
            : 'top-6 h-[65px] bg-[#0a0c16]/40 border-white/5 backdrop-blur-[16px]'
        }`}
        style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="font-title font-extrabold text-xl bg-gradient-to-r from-purple-accent to-cyan-accent bg-clip-text text-transparent flex items-center gap-2"
        >
          <Terminal className="text-purple-accent w-5 h-5" />
          <span>gont</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {headerNavLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className={`relative font-title font-medium text-[0.95rem] py-2 transition-colors duration-300 ${
                    activeSection === link.id ? 'text-text-main' : 'text-text-muted hover:text-text-main'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-accent to-cyan-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="block md:hidden bg-transparent border-none text-text-main cursor-pointer text-2xl"
          aria-label={isMobileMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[90px] left-1/2 w-[90%] bg-[#080a13]/95 border border-purple-accent/15 backdrop-blur-[20px] rounded-[20px] p-8 z-50 flex flex-col gap-6 md:hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
          >
            {headerNavLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={`font-title font-semibold text-lg pb-2 border-b border-white/5 transition-colors ${
                  activeSection === link.id
                    ? 'text-cyan-accent'
                    : 'text-text-muted hover:text-text-main'
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
