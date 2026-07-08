import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = 'augusto-gontijo@outlook.com';
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      confetti({
        particleCount: 120,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#6366f1', '#06b6d4', '#10b981'],
      });
      setTimeout(() => setIsCopied(false), 2200);
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <section id="contact" className="w-[90%] max-w-[1200px] mx-auto py-24 md:py-32">
      <h2 className="text-4xl font-extrabold font-title mb-12 text-center relative bg-gradient-to-r from-text-main to-text-muted bg-clip-text text-transparent after:content-[''] after:block after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-purple-accent after:to-cyan-accent after:mx-auto after:mt-3 after:rounded-[2px]">
        Contato
      </h2>

      <div className="max-w-[600px] mx-auto text-center flex flex-col items-center gap-8">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-text-muted text-base md:text-lg leading-relaxed px-2"
        >
          Fique à vontade para entrar em contato comigo para falar sobre oportunidades de desenvolvimento, projetos acadêmicos ou apenas bater um papo sobre programação e e-sports!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-card-bg border border-card-border p-4 sm:py-3 sm:px-6 rounded-[24px] sm:rounded-[50px] backdrop-blur-[12px] shadow-[0_10px_35px_rgba(0,0,0,0.2)] hover:border-cyan-accent hover:shadow-[0_10px_40px_rgba(6,182,212,0.25)] transition-all duration-400 w-full sm:w-auto"
        >
          <span className="font-title font-semibold text-base sm:text-lg text-text-main tracking-wide">
            augusto-gontijo@outlook.com
          </span>
          <button
            onClick={handleCopyEmail}
            className={`py-2 px-5 rounded-[50px] font-title font-bold text-xs sm:text-sm cursor-pointer transition-all duration-300 w-full sm:w-auto ${
              isCopied
                ? 'bg-gradient-to-r from-[#10b981] to-[#059669] text-text-main shadow-[0_5px_15px_rgba(16,185,129,0.3)]'
                : 'bg-gradient-to-r from-purple-accent to-[#4f46e5] text-text-main hover:scale-105 hover:shadow-[0_5px_15px_rgba(99,102,241,0.4)]'
            }`}
          >
            {isCopied ? 'Copiado!' : 'Copiar E-mail'}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto"
        >
          <a
            href="https://github.com/gontww"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn flex items-center justify-center gap-3 py-3 px-7 rounded-xl bg-card-bg border border-card-border text-text-main font-title font-semibold text-sm backdrop-blur-[8px] transition-all duration-300 hover:border-text-main hover:bg-white/5 hover:shadow-[0_8px_25px_rgba(255,255,255,0.1)] hover:-translate-y-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/augusto-gontijo"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn flex items-center justify-center gap-3 py-3 px-7 rounded-xl bg-card-bg border border-card-border text-text-main font-title font-semibold text-sm backdrop-blur-[8px] transition-all duration-300 hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 hover:shadow-[0_8px_25px_rgba(59,130,246,0.25)] hover:text-[#3b82f6] hover:-translate-y-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};
