/* ==========================================================================
   Typing Effect Logic
   ========================================================================== */
const phrases = [
  'Estudante de Sistemas de Informação',
  'Desenvolvedor Full Stack na Youx Group',
  'Desenvolvedor Java & Kotlin',
  'Desenvolvedor React & Vue'
];
let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function type() {
  const textElement = document.querySelector('.hero-subtitle');
  if (!textElement) return;

  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(0, characterIndex - 1);
    characterIndex--;
  } else {
    textElement.textContent = currentPhrase.substring(0, characterIndex + 1);
    characterIndex++;
  }

  let typeSpeed = isDeleting ? 40 : 80;

  if (!isDeleting && characterIndex === currentPhrase.length) {
    typeSpeed = 2200; // Pause at end of phrase
    isDeleting = true;
  } else if (isDeleting && characterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 600; // Pause before typing next phrase
  }

  setTimeout(type, typeSpeed);
}

/* ==========================================================================
   Interactive Canvas Particles Background
   ========================================================================== */
function initParticles() {
  const canvas = document.getElementById('canvas-bg');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let particles = [];
  
  // Adaptive particle count based on screen size
  const getParticleCount = () => {
    return window.innerWidth < 768 ? 40 : 100;
  };
  
  let particleCount = getParticleCount();
  const connectionDistance = 120;
  let mouse = { x: null, y: null, radius: 150 };

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2.5 + 1.5;
      // Randomly assign primary accent (purple) or secondary accent (cyan)
      this.color = Math.random() > 0.5 ? 'rgba(99, 102, 241, 0.75)' : 'rgba(6, 182, 212, 0.75)';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off boundaries
      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

      // Interaction with mouse cursor (gravity-like attraction)
      if (mouse.x !== null && mouse.y !== null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          let force = (mouse.radius - dist) / mouse.radius;
          this.x += (dx / dist) * force * 0.5;
          this.y += (dy / dist) * force * 0.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function init() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particleCount = getParticleCount();
    init();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Draw lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          let alpha = (1 - dist / connectionDistance) * 0.28;
          ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Connect particles near the mouse directly to the cursor
    if (mouse.x !== null && mouse.y !== null) {
      for (const particle of particles) {
        let dx = particle.x - mouse.x;
        let dy = particle.y - mouse.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius - 20) {
          let alpha = (1 - dist / (mouse.radius - 20)) * 0.35;
          ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  // Setup event listeners & initial execution
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  globalThis.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  globalThis.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  animate();
}

/* ==========================================================================
   Page Initialization & Event Listeners
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Render Projects dynamically from projects.js
  renderProjects();

  // 2. Initialize Lucide Icons
  lucide.createIcons();

  // 2. Initialize Interactive Canvas
  initParticles();

  // 3. Mobile Navigation Menu Toggle
  const menuToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    
    // Change menu icon between hamburger and 'X'
    const icon = menuToggle.querySelector('i');
    if (isOpen) {
      icon.dataset('data-lucide', 'x');
    } else {
      icon.dataset('data-lucide', 'menu');
    }
    lucide.createIcons();
  });

  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.querySelector('i').dataset('data-lucide', 'menu');
      lucide.createIcons();
    });
  });

  // 4. Header background opacity shift on scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 5. Start typing effect
  type();

  // 6. GSAP and ScrollTrigger Animation Setup
  gsap.registerPlugin(ScrollTrigger);

  // Hero Section Entrance Timeline
  const heroTl = gsap.timeline();
  heroTl.from('.hero-greeting', { 
    opacity: 0, 
    y: -20, 
    duration: 0.6, 
    ease: 'power3.out' 
  })
  .from('.hero-title', { 
    opacity: 0, 
    y: 35, 
    duration: 0.8, 
    ease: 'power4.out' 
  }, '-=0.3')
  .from('.hero-subtitle-container', { 
    opacity: 0, 
    duration: 0.4 
  }, '-=0.4')
  .from('.hero-actions .btn', { 
    opacity: 0, 
    y: 20, 
    stagger: 0.15, 
    duration: 0.6, 
    ease: 'power3.out' 
  }, '-=0.2')
  .from('.scroll-indicator', { 
    opacity: 0, 
    y: -10, 
    duration: 0.6, 
    ease: 'power2.out' 
  }, '+=0.2');

  // Set initial position of scroll-indicator including centering
  gsap.set('.scroll-indicator', { xPercent: -50 });

  // Infinite bouncing/floating effect for scroll indicator
  gsap.to('.scroll-indicator', {
    y: 10,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  });

  // Fade out scroll indicator on scroll to prevent overlap
  gsap.to('.scroll-indicator', {
    opacity: 0,
    y: 20,
    scrollTrigger: {
      trigger: '#home',
      start: 'top top',
      end: 'bottom 60%',
      scrub: true
    }
  });

  // Active Navbar link highlighting during scroll
  navLinks.forEach(link => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      const section = document.querySelector(targetId);
      if (section) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => setActiveLink(link),
          onEnterBack: () => setActiveLink(link)
        });
      }
    }
  });

  function setActiveLink(activeLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
  }

  // About Section Content Reveal
  gsap.from('.about-text', {
    opacity: 0,
    x: -50,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#about',
      start: 'top 75%'
    }
  });

  gsap.from('.skills-wrapper', {
    opacity: 0,
    x: 50,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#about',
      start: 'top 75%'
    }
  });

  // Skills Pills staggered back scale animation
  gsap.from('.skill-tag', {
    opacity: 0,
    scale: 0.85,
    y: 15,
    stagger: 0.04,
    duration: 0.5,
    ease: 'back.out(1.5)',
    scrollTrigger: {
      trigger: '.skills-grid',
      start: 'top 85%'
    }
  });

  // Timeline Connecting Vertical Line Progress
  gsap.to('.timeline-progress', {
    height: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.timeline-container',
      start: 'top 25%',
      end: 'bottom 75%',
      scrub: true
    }
  });

  // Timeline Cards staggered reveal
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    const card = item.querySelector('.timeline-card');
    const xOffset = index % 2 === 0 ? -40 : 40;
    
    gsap.from(card, {
      opacity: 0,
      x: xOffset,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 78%',
        toggleActions: 'play none none none',
        onEnter: () => item.classList.add('active'),
        onLeaveBack: () => item.classList.remove('active')
      }
    });
  });

  // Project Card Scale and Glow reveal
  gsap.from('.project-card', {
    opacity: 0,
    y: 50,
    scale: 0.98,
    duration: 0.85,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#projects',
      start: 'top 75%'
    }
  });

  // Contact Section Staggered reveal
  gsap.from('.contact-container > *', {
    opacity: 0,
    y: 25,
    stagger: 0.15,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 80%'
    }
  });

  // 7. Copy Email Address to Clipboard with feedback and robust fallback
  const copyBtn = document.getElementById('copy-email-btn');
  const emailAddress = 'augusto-gontijo@outlook.com';

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyToClipboard(emailAddress);
    });
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && globalThis.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showCopyFeedback();
      }).catch(err => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      navigator.clipboard.writeText(text);
      showCopyFeedback();
    } catch (err) {
      console.error('Erro ao copiar fallback: ', err);
    }
    textArea.remove();
  }

  function showCopyFeedback() {
    copyBtn.textContent = 'Copiado!';
    copyBtn.classList.add('copied');
    
    // Minor feedback bounce animation
    gsap.to(copyBtn, { scale: 1.05, duration: 0.1, yoyo: true, repeat: 1 });
    
    // Reset button state after a small delay
    setTimeout(() => {
      copyBtn.textContent = 'Copiar E-mail';
      copyBtn.classList.remove('copied');
    }, 2200);
  }

  function renderProjects() {
    const container = document.querySelector('.projects-showcase');
    if (!container || typeof projects === 'undefined') return;

    container.innerHTML = projects.map(project => `
      <div class="project-card">
        ${project.badge ? `<div class="project-badge">${project.badge}</div>` : ''}
        
        <div class="project-header-container">
          <div>
            <h3 class="project-title">${project.title}</h3>
            <p style="color: var(--accent-purple); font-weight: 500; font-size: 0.95rem; margin-top: 0.2rem;">
              ${project.category}
            </p>
          </div>
          <div class="project-links">
            ${project.github ? `
              <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link-icon" aria-label="Ver no GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
              </a>
            ` : ''}
          </div>
        </div>

        <p class="project-desc">${project.description}</p>

        <div class="project-section">
          <h4 class="project-section-title">
            <i data-lucide="check-circle-2"></i>Principais Recursos
          </h4>
          <ul class="project-features">
            ${project.features.map(feature => `
              <li><i data-lucide="shield-check"></i>${feature}</li>
            `).join('')}
          </ul>
        </div>

        <div class="project-section">
          <h4 class="project-section-title">
            <i data-lucide="box"></i>Stack Tecnológica
          </h4>
          <div class="project-tags">
            ${project.stack.map(tag => `
              <span class="project-tag">${tag}</span>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }
});
