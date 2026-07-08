import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Box, ExternalLink } from 'lucide-react';
import type { Project } from '../projectsData';
import { projects } from '../projectsData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [firstFrame, setFirstFrame] = useState<string | null>(null);

  const isGif = project.image?.endsWith('.gif');

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (!isGif || firstFrame) return;
    const img = e.currentTarget;
    try {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        setFirstFrame(dataUrl);
      }
    } catch (err) {
      console.warn('Could not extract first frame of GIF:', err);
    }
  };

  const imgSrc = isGif && project.image
    ? (isHovered ? project.image : (firstFrame || project.image))
    : project.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="project-card-glow relative group bg-gradient-to-br from-[#0d111e]/70 to-[#080a13]/80 border border-card-border rounded-[24px] p-6 md:p-8 backdrop-blur-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col justify-between h-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(99,102,241,0.15)]"
    >
      <div>
        {imgSrc && (
          <div className="w-full aspect-[16/10] rounded-[16px] overflow-hidden mb-6 border border-white/5 relative">
            <img
              src={imgSrc}
              alt={project.title}
              onLoad={handleImageLoad}
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d111e]/30 to-transparent pointer-events-none" />
          </div>
        )}

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

          <div className="flex items-center gap-2 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/3 border border-white/8 text-text-main flex items-center justify-center transition-all duration-300 hover:bg-purple-accent hover:border-purple-accent hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(99,102,241,0.25)]"
                aria-label="Ver no GitHub"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            )}
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/3 border border-white/8 text-text-main flex items-center justify-center transition-all duration-300 hover:bg-cyan-accent hover:border-cyan-accent hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                aria-label="Acessar o site"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
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
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-[90%] max-w-[1200px] mx-auto py-24 md:py-32">
      <h2 className="text-4xl font-extrabold font-title mb-12 text-center relative bg-gradient-to-r from-text-main to-text-muted bg-clip-text text-transparent after:content-[''] after:block after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-purple-accent after:to-cyan-accent after:mx-auto after:mt-3 after:rounded-[2px]">
        Projetos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-[1200px] mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};
