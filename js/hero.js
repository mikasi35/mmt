// ========== HERO.JS ==========
(function() {
  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // --- Reveal Animation (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.mmt-reveal');
    
    if (revealElements.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('mmt-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
      
      revealElements.forEach(el => observer.observe(el));
      
      // Fallback: If after 500ms any reveal elements are still not revealed (observer might have failed),
      // reveal them all to ensure content is visible.
      setTimeout(() => {
        const stillHidden = document.querySelectorAll('.mmt-reveal:not(.mmt-revealed)');
        stillHidden.forEach(el => el.classList.add('mmt-revealed'));
      }, 500);
    }
    
    // --- Subtle Parallax Effect on Hero Background (desktop only) ---
    const heroBg = document.querySelector('.mmt-hero-bg-image');
    if (heroBg && window.innerWidth > 768) {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const speed = 0.4;
        heroBg.style.transform = `scale(1.02) translateY(${scrollY * speed}px)`;
      });
    }
    
    // --- Smooth focus for buttons ---
    const btns = document.querySelectorAll('.mmt-btn');
    btns.forEach(btn => {
      btn.addEventListener('focus', () => {
        btn.style.outline = '2px solid var(--mmt-primary)';
        btn.style.outlineOffset = '2px';
      });
      btn.addEventListener('blur', () => {
        btn.style.outline = 'none';
      });
    });
  });
})();