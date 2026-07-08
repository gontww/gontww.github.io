import { useState, useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Intersection Observer to highlight active link in navigation
  useEffect(() => {
    const sections = ['home', 'about', 'journey', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section is in the middle of the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-purple-accent/30 selection:text-text-main">
      {/* Canvas particle background */}
      <ParticleBackground />

      {/* Ambient glows */}
      <div className="ambient-glow glow-purple" />
      <div className="ambient-glow glow-cyan" />

      {/* Header */}
      <Header activeSection={activeSection} scrollTo={scrollTo} />

      {/* Hero */}
      <Hero scrollTo={scrollTo} />

      {/* About */}
      <About />

      {/* Journey */}
      <Journey />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
