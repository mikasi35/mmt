/* ============================================================
   ANIMATIONS.JS — Scroll reveal, safe by default.
   Content is ALWAYS visible. JS enhances with entrance
   animations only after the page is fully ready.
   ============================================================ */

const Animations = (() => {
  let observer = null;

  function init() {
    // Disconnect previous observer
    if (observer) {
      observer.disconnect();
      observer = null;
    }

    // Remove js-ready so elements are immediately visible during transition
    document.body.classList.remove('js-ready');

    // No IntersectionObserver support — leave everything visible
    if (!('IntersectionObserver' in window)) return;

    // Wait for paint, then activate scroll animations
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          // Mark body — CSS will now hide .reveal elements pending scroll
          document.body.classList.add('js-ready');

          observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
              }
            });
          }, {
            threshold: 0.05,
            rootMargin: '0px 0px 80px 0px'
          });

          document.querySelectorAll('.reveal').forEach(el => {
            const rect = el.getBoundingClientRect();
            // Already in viewport → show instantly
            if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
              el.classList.add('visible');
            } else {
              observer.observe(el);
            }
          });
        }, 50);
      });
    });
  }

  return { init };
})();
