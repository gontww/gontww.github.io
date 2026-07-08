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
          Fique à vontade para entrar em contato comigo para falar sobre oportunidades de desenvolvimento ou projetos acadêmicos!
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
              role="img"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
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
              role="img"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};
