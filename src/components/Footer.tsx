import { Heart } from 'lucide-react';

interface FooterProps {
  scrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ scrollTo }) => {
  return (
    <footer className="border-t border-white/5 py-12 text-center bg-[#020306]">
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
          className="font-title font-extrabold text-lg text-text-main hover:text-cyan-accent transition-colors"
        >
          gontww
        </a>
        <p className="text-xs md:text-sm text-text-muted flex items-center gap-1.5 justify-center">
          Desenvolvido com <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> por Augusto Gontijo &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
