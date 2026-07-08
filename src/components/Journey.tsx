import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const Journey: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const timelineItems = [
    {
      date: 'abr de 2025 - Presente',
      title: 'Desenvolvedor Full Stack',
      subtitle: 'Youx Group',
      description: 'Desenvolvimento de soluções ponta a ponta com foco em qualidade e escalabilidade. Utilização de tecnologias do ecossistema Java/Spring Boot no backend, Vue.js/React no frontend e bancos de dados relacionais.',
    },
    {
      date: 'mai de 2024 - abr de 2025',
      title: 'Estágio em Desenvolvimento',
      subtitle: 'Youx Group',
      description: 'Início da carreira profissional, participando do ciclo completo de desenvolvimento de software em equipe ágil, consolidando habilidades em APIs RESTful e boas práticas de codificação.',
    },
    {
      date: '2023 - 2027',
      title: 'Sistemas de Informação',
      subtitle: 'UFLA (Universidade Federal de Lavras)',
      description: 'Bacharelado acadêmico voltado para algoritmos, estrutura de dados, modelagem de banco de dados e gestão de projetos tecnológicos.',
    },
    {
      date: '2021 - 2023',
      title: 'E-sports Competitivo (Valorant)',
      subtitle: 'Jogador de Equipe',
      description: 'Vivência competitiva de alto nível que aprimorou competências comportamentais valiosas: comunicação clara em tempo real, resiliência sob pressão extrema e dedicação focada em metas de equipe.',
    },
  ];

  return (
    <section id="journey" className="w-[90%] max-w-[1200px] mx-auto py-24 md:py-32">
      <h2 className="text-4xl font-extrabold font-title mb-12 text-center relative bg-gradient-to-r from-text-main to-text-muted bg-clip-text text-transparent after:content-[''] after:block after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-purple-accent after:to-cyan-accent after:mx-auto after:mt-3 after:rounded-[2px]">
        Minha Jornada
      </h2>

      <div ref={timelineRef} className="relative max-w-[800px] mx-auto py-8">
        {/* Vertical progress lines */}
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-[1px] md:-translate-x-1/2 z-10" />
        <motion.div
          className="absolute left-5 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-purple-accent to-cyan-accent -translate-x-[1px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_#6366f1] origin-top"
          style={{ scaleY, height: '100%' }}
        />

        <div className="flex flex-col gap-12 relative">
          {timelineItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row relative w-full ${
                  isEven ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0.8, backgroundColor: '#030408' }}
                  whileInView={{
                    scale: 1,
                    borderColor: '#06b6d4',
                    backgroundColor: '#06b6d4',
                    boxShadow: '0 0 12px #06b6d4',
                  }}
                  viewport={{ once: true, margin: '-20% 0px' }}
                  className="absolute left-5 md:left-1/2 top-9 w-4 h-4 rounded-full border-3 border-purple-accent -translate-x-1/2 z-20"
                />

                {/* Timeline card wrapper */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.75, ease: 'easeOut' }}
                    className="bg-card-bg border border-card-border p-6 md:p-7 rounded-[16px] backdrop-blur-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:border-card-border-hover hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col gap-2"
                  >
                    <span className="font-title font-bold text-[0.95rem] text-cyan-accent">
                      {item.date}
                    </span>
                    <h4 className="text-xl font-bold font-title text-text-main leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-purple-accent font-title font-semibold text-sm">
                      {item.subtitle}
                    </p>
                    <p className="text-text-muted text-sm md:text-base leading-relaxed mt-2 text-justify">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
