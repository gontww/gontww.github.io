import { motion } from 'framer-motion';
import { GitBranch, CheckCircle2, ShieldCheck, Box } from 'lucide-react';
import { projects } from '../projectsData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-[90%] max-w-[1200px] mx-auto py-24 md:py-32">
      <h2 className="text-4xl font-extrabold font-title mb-12 text-center relative bg-gradient-to-r from-text-main to-text-muted bg-clip-text text-transparent after:content-[''] after:block after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-purple-accent after:to-cyan-accent after:mx-auto after:mt-3 after:rounded-[2px]">
        Projetos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-[1200px] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="project-card-glow relative group bg-gradient-to-br from-[#0d111e]/70 to-[#080a13]/80 border border-card-border rounded-[24px] p-6 md:p-8 backdrop-blur-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col justify-between h-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(99,102,241,0.15)]"
          >
            <div>
              {project.badge && (
                <div className="inline-block py-1 px-3.5 text-xs font-semibold text-purple-accent bg-purple-accent/10 border border-purple-accent/20 rounded-[20px] uppercase mb-5">
                  {project.badge}
                </div>
              )}

              <div className="flex justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold font-title leading-tight bg-gradient-to-r from-text-main to-slate-300 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-purple-accent font-semibold text-[0.95rem] mt-1 font-title">
                    {project.category}
                  </p>
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/3 border border-white/8 text-text-main flex items-center justify-center transition-all duration-300 hover:bg-purple-accent hover:border-purple-accent hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(99,102,241,0.25)]"
                    aria-label="Ver no GitHub"
                  >
                    <GitBranch className="w-5 h-5" />
                  </a>
                )}
              </div>

              <p className="text-text-muted text-base leading-relaxed mb-6 text-justify">
                {project.description}
              </p>

              {/* Key Features List */}
              <div className="mb-6">
                <h4 className="text-[0.9rem] font-semibold tracking-wider text-cyan-accent uppercase mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Principais Recursos
                </h4>
                <ul className="grid grid-cols-1 gap-2.5">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-text-muted text-[0.92rem]">
                      <ShieldCheck className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stack tags */}
            <div className="mt-auto">
              <h4 className="text-[0.9rem] font-semibold tracking-wider text-cyan-accent uppercase mb-3 flex items-center gap-2">
                <Box className="w-4 h-4" /> Stack Tecnológica
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white/3 border border-white/6 py-1.5 px-3 rounded-lg text-xs md:text-[0.82rem] font-medium text-text-muted transition-all duration-300 group-hover:border-cyan-accent/15 group-hover:text-text-main"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
