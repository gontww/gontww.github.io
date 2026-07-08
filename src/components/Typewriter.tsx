import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  phrases: string[];
}

export const Typewriter: React.FC<TypewriterProps> = ({ phrases }) => {
  const [currentText, setCurrentText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentPhrase = phrases[phraseIndex];

    const type = () => {
      if (isDeleting) {
        setCurrentText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setCurrentText((prev) => currentPhrase.substring(0, prev.length + 1));
      }
    };

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === currentPhrase) {
      speed = 2200; // Pause at end of phrase
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, speed);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      speed = 600; // Pause before next phrase
      timer = setTimeout(() => {}, speed);
    } else {
      timer = setTimeout(type, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, phrases]);

  return (
    <span className="text-xl md:text-2xl text-text-muted font-normal">
      {currentText}
      <span className="inline-block w-[3px] h-[1.1em] bg-cyan-accent ml-[3px] animate-blink align-middle"></span>
    </span>
  );
};
