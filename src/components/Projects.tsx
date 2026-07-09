import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Box, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '../projectsData';
import { projects } from '../projectsData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

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
        {project.image && (
          <div className="w-full aspect-[16/10] rounded-[16px] overflow-hidden mb-6 border border-white/5 relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              loading="lazy"
              draggable={false}
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const isPointerDown = useRef(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    setIsMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  const maxIndex = isMobile ? projects.length - 1 : projects.length - 2;
  const showControls = projects.length > (isMobile ? 1 : 2);
  const totalDots = isMobile ? projects.length : projects.length - 1;

  // Clamp current index if isMobile changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [isMobile, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePointerDown = (clientX: number) => {
    if (!showControls) return;
    dragStartX.current = clientX;
    isPointerDown.current = true;
  };

  const handlePointerMove = (clientX: number) => {
    if (!isPointerDown.current || dragStartX.current === null) return;
    const offset = clientX - dragStartX.current;
    
    // Apply resistance if dragging past boundaries
    const isDraggingPastLeft = currentIndex === 0 && offset > 0;
    const isDraggingPastRight = currentIndex === maxIndex && offset < 0;
    
    if (isDraggingPastLeft || isDraggingPastRight) {
      setDragOffset(offset * 0.3);
    } else {
      setDragOffset(offset);
    }
  };

  const handlePointerUp = () => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;
    
    const swipeThreshold = 50;
    if (dragOffset < -swipeThreshold && currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    } else if (dragOffset > swipeThreshold && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
    
    setDragOffset(0);
    dragStartX.current = null;
  };

  const isDragging = dragOffset !== 0;

  return (
    <section id="projects" className="w-[90%] max-w-[1200px] mx-auto py-24 md:py-32">
      <h2 className="text-4xl font-extrabold font-title mb-12 text-center relative bg-gradient-to-r from-text-main to-text-muted bg-clip-text text-transparent after:content-[''] after:block after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-purple-accent after:to-cyan-accent after:mx-auto after:mt-3 after:rounded-[2px]">
        Projetos
      </h2>

      <div className="relative w-full px-0 md:px-16">
        {/* Left Arrow Button (Desktop) */}
        {showControls && (
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#0d111e]/60 border border-card-border text-text-main flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:bg-purple-accent hover:border-purple-accent hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:border-card-border disabled:hover:shadow-none disabled:cursor-not-allowed hidden md:flex cursor-pointer"
            aria-label="Projeto anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        <div className="relative w-full overflow-hidden py-4">
          <div
            className="flex gap-8 items-stretch select-none cursor-grab active:cursor-grabbing"
            style={{
              transform: isMobile
                ? `translateX(calc(-${currentIndex} * (100% + 2rem) + ${dragOffset}px))`
                : `translateX(calc(-${currentIndex} * (50% + 1rem) + ${dragOffset}px))`,
              transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseDown={(e) => handlePointerDown(e.clientX)}
            onMouseMove={(e) => handlePointerMove(e.clientX)}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
            onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
            onTouchEnd={handlePointerUp}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="shrink-0 w-full md:w-[calc(50%-1rem)] flex flex-col"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button (Desktop) */}
        {showControls && (
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#0d111e]/60 border border-card-border text-text-main flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:bg-cyan-accent hover:border-cyan-accent hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:border-card-border disabled:hover:shadow-none disabled:cursor-not-allowed hidden md:flex cursor-pointer"
            aria-label="Próximo projeto"
          >
            {currentIndex < maxIndex ? (
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            ) : (
              <ChevronRight className="w-5 h-5" />
            )}
          </button>
        )}
      </div>

      {showControls && (
        <div className="flex flex-col items-center gap-4 mt-6">
          <div className="flex items-center gap-4">
            {/* Mobile Left Arrow */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full bg-white/3 border border-white/8 text-text-main flex items-center justify-center transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed md:hidden cursor-pointer"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalDots }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index
                      ? 'bg-cyan-accent w-8'
                      : 'bg-white/20 hover:bg-white/40 w-3'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile Right Arrow */}
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="w-10 h-10 rounded-full bg-white/3 border border-white/8 text-text-main flex items-center justify-center transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed md:hidden cursor-pointer"
              aria-label="Próximo projeto"
            >
              {currentIndex < maxIndex ? (
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
