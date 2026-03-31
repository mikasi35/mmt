/* ============================================================
   ROUTER.JS — Universal SPA Router
   file:// → hash routing (#/about)
   http(s):// → history API (/about)
   ============================================================ */

const Router = (() => {
  const routes = {};
  const isFileProtocol = window.location.protocol === 'file:';

  function register(path, renderFn) {
    routes[path] = renderFn;
  }

  /* Strip hash-anchor from path, e.g. /services#emergency → /services */
  function resolve(path) {
    const clean = (path || '/').split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';
    if (routes[clean]) return routes[clean];
    if ((clean === '' || clean === '/') && routes['/']) return routes['/'];
    return null;
  }

  /* Get the logical route path (ignoring section anchors) */
  function currentPath() {
    if (isFileProtocol) {
      const hash = window.location.hash; // e.g. #/services or #/services#emergency
      if (!hash || hash === '#' || hash === '#/') return '/';
      // Strip the leading # to get /services or /services#emergency
      const withoutHash = hash.replace(/^#/, '');
      // Strip any section anchor: /services#emergency → /services
      return withoutHash.split('#')[0] || '/';
    }
    return window.location.pathname || '/';
  }

  /* Render page content */
  function renderPage(path) {
    const content = document.getElementById('page-content');
    if (!content) return;

    content.classList.add('fading');
    document.body.classList.remove('js-ready');

    setTimeout(() => {
      content.innerHTML = '';

      const fn = resolve(path);
      if (fn) {
        fn(content);
      } else {
        render404(content);
      }

      content.classList.remove('fading');
      window.scrollTo({ top: 0, behavior: 'instant' });

      updateActiveNav(path);
      if (window.Animations) Animations.init();

      // Handle section anchor after render
      const anchor = getAnchor();
      if (anchor) {
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }, 180);
  }

  /* Get section anchor if any */
  function getAnchor() {
    if (isFileProtocol) {
      // Hash is #/services#emergency — second # is anchor
      const hash = window.location.hash;
      const parts = hash.replace(/^#/, '').split('#');
      return parts[1] || null;
    }
    return window.location.hash ? window.location.hash.replace('#', '') : null;
  }

  /* Navigate to a path */
  function navigate(href) {
    // Strip leading / for anchor extraction
    const routePart = href.split('#')[0];
    const anchorPart = href.includes('#') ? href.split('#')[1] : null;

    if (isFileProtocol) {
      // Build hash: /services#emergency → #/services#emergency
      const hashVal = routePart.startsWith('/') ? routePart : '/' + routePart;
      window.location.hash = anchorPart ? hashVal + '#' + anchorPart : hashVal;
      // hashchange fires renderPage
    } else {
      history.pushState({}, '', href);
      renderPage(routePart);
    }

    closeMobileNav();
  }

  function closeMobileNav() {
    const nav = document.getElementById('nav-menu');
    const toggle = document.querySelector('.nav-toggle');
    if (nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  function updateActiveNav(path) {
    const clean = (path || '/').split('#')[0].replace(/\/+$/, '') || '/';
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      const page = link.dataset.page;
      if (!page) return;
      if (page === 'home' && (clean === '' || clean === '/')) link.classList.add('active');
      else if (page !== 'home' && clean === `/${page}`) link.classList.add('active');
    });

    const header = document.getElementById('site-header');
    if (header) {
      const isHome = (clean === '' || clean === '/');
      header.classList.toggle('nav-transparent', isHome);
    }
  }

  function render404(container) {
    container.innerHTML = `
      <div class="page-hero">
        <div class="container page-hero-content">
          <h1>Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <a href="${isFileProtocol ? '#/' : '/'}" class="btn btn-outline-white" style="margin-top:1.5rem">Return Home</a>
        </div>
      </div>`;
  }

  function init() {
    /* Intercept all internal link clicks */
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;
      if (href.startsWith('http') || href.startsWith('mailto') ||
          href.startsWith('tel') || href.startsWith('blob') ||
          link.hasAttribute('download') || link.target === '_blank') return;
      // In file mode: skip bare #anchor links (not route hashes)
      if (isFileProtocol && href.startsWith('#') && !href.startsWith('#/')) return;
      // In server mode: let bare #anchor scroll naturally
      if (!isFileProtocol && href.startsWith('#')) return;

      e.preventDefault();
      navigate(href);
    });

    if (isFileProtocol) {
      window.addEventListener('hashchange', () => renderPage(currentPath()));
      // Initial load
      if (!window.location.hash || window.location.hash === '#') {
        window.location.hash = '#/';
      } else {
        renderPage(currentPath());
      }
    } else {
      window.addEventListener('popstate', () => renderPage(window.location.pathname));
      renderPage(currentPath());
    }
  }

  return { register, navigate, init };
})();
