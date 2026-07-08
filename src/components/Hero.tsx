import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Typewriter } from './Typewriter';

interface HeroProps {
  scrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollTo }) => {
  const phrases = [
    'Desenvolvedor Full Stack',
    'Desenvolvedor Java & Kotlin',
    'Desenvolvedor React & Vue',
  ];

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4"
    >
      <div className="text-center z-10 max-w-[800px] flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-title font-semibold text-xs md:text-sm text-cyan-accent mb-4 tracking-widest uppercase py-1.5 px-4 bg-cyan-accent/5 border border-cyan-accent/15 rounded-[20px] inline-block"
        >
          Desenvolvedor Full Stack
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-title tracking-tight leading-[1.1] mb-6 bg-gradient-to-r from-text-main to-[#a5b4fc] bg-clip-text text-transparent"
        >
          Augusto Gontijo
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="h-[40px] mb-10 flex items-center justify-center"
        >
          <Typewriter phrases={phrases} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto px-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('projects');
            }}
            className="inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-[50px] font-title font-semibold bg-gradient-to-r from-purple-accent to-[#4f46e5] text-text-main border border-white/10 shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Ver Projetos <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
            className="inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-[50px] font-title font-semibold bg-white/5 text-text-main border border-white/10 backdrop-blur-[8px] hover:bg-white/10 hover:border-cyan-accent hover:shadow-[0_8px_25px_rgba(6,182,212,0.25)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Fale Comigo <MessageSquare className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          scrollTo('about');
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-text-main text-xs transition-colors duration-300 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
      >
      <span className="w-6 h-10 border-2 border-text-muted rounded-xl relative flex justify-center">
        <span className="w-1 h-2 bg-purple-accent rounded-full absolute top-2 animate-[scroll-wheel_1.6s_infinite]" />
      </span>
      <span>Rolar</span>
      </motion.a>
    </section>
  );
};
