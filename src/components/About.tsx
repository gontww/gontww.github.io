import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Code2,
  Coffee,
  Braces,
  Cpu,
  Atom,
  Layout,
  Database,
  Container,
  GitBranch,
  Settings,
  Terminal,
} from 'lucide-react';

export const About: React.FC = () => {
  const skills = [
    { name: 'Kotlin', icon: Code2, highlight: 'purple' },
    { name: 'Java', icon: Coffee, highlight: '' },
    { name: 'TypeScript', icon: Braces, highlight: '' },
    { name: 'Spring Boot', icon: Cpu, highlight: 'purple' },
    { name: 'React', icon: Atom, highlight: '' },
    { name: 'Vue.js', icon: Layout, highlight: '' },
    { name: 'PostgreSQL', icon: Database, highlight: 'cyan' },
    { name: 'MySQL', icon: Database, highlight: 'cyan' },
    { name: 'Docker', icon: Container, highlight: '' },
    { name: 'Git & GitHub', icon: GitBranch, highlight: '' },
    { name: 'APIs RESTful', icon: Settings, highlight: '' },
    { name: 'Linux (Bash)', icon: Terminal, highlight: '' },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const skillTagVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 150, damping: 15 },
    },
  };

  return (
    <section id="about" className="w-[90%] max-w-[1200px] mx-auto py-24 md:py-32">
      <h2 className="text-4xl font-extrabold font-title mb-12 text-center relative bg-gradient-to-r from-text-main to-text-muted bg-clip-text text-transparent after:content-[''] after:block after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-purple-accent after:to-cyan-accent after:mx-auto after:mt-3 after:rounded-[2px]">
        Sobre Mim
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-title bg-gradient-to-r from-text-main to-purple-accent bg-clip-text text-transparent">
            Criando soluções de ponta a ponta com qualidade e eficiência.
          </h3>
          <p className="text-text-muted text-base md:text-lg leading-relaxed text-justify">
            Sou <strong className="text-text-main font-semibold">Desenvolvedor Full Stack na Youx Group</strong> e também estudante de <strong className="text-text-main font-semibold">Sistemas de Informação</strong> na Universidade Federal de Lavras (UFLA). Tenho experiência prática no desenvolvimento de soluções web modernas, integrando front-ends responsivos a back-ends escaláveis.
          </p>
          <p className="text-text-muted text-base md:text-lg leading-relaxed text-justify">
            Busco sempre entregar código limpo, consistente e seguro. Possuo forte interesse em engenharia de software e inteligência artificial, além de certificação de proficiência em inglês nível <strong className="text-text-main font-semibold">C2 pelo EF SET</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-xl md:text-2xl font-bold font-title text-text-main">
            Habilidades e Tecnologias
          </h3>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              const isPurple = skill.highlight === 'purple';
              const isCyan = skill.highlight === 'cyan';
              
              let hoverClass = 'hover:border-purple-accent hover:bg-purple-accent/10 hover:shadow-[0_5px_15px_rgba(99,102,241,0.2)]';
              if (isPurple) {
                hoverClass = 'hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 hover:shadow-[0_5px_15px_rgba(139,92,246,0.25)]';
              } else if (isCyan) {
                hoverClass = 'hover:border-cyan-accent hover:bg-cyan-accent/10 hover:shadow-[0_5px_15px_rgba(6,182,212,0.25)]';
              }

              let iconColorClass = 'text-purple-accent';
              if (isPurple) {
                iconColorClass = 'text-[#8b5cf6]';
              } else if (isCyan) {
                iconColorClass = 'text-cyan-accent';
              }
              
              return (
                <motion.div
                  key={index}
                  variants={skillTagVariants}
                  className={`bg-card-bg border border-card-border py-2.5 px-4 rounded-xl font-medium text-[0.85rem] md:text-sm flex items-center gap-2 backdrop-blur-[8px] transition-all duration-300 hover:-translate-y-0.5 ${hoverClass}`}
                >
                  <IconComponent className={`w-4 h-4 ${iconColorClass}`} />
                  <span>{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
