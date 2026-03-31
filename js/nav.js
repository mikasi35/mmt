/**
 * MMT Alliance — Navigation Controller
 * Handles: mobile menu, accordion dropdowns, keyboard nav, scroll effects
 */

document.addEventListener('DOMContentLoaded', () => {
  const navToggle   = document.getElementById('nav-toggle');
  const navMenu     = document.getElementById('nav-menu');
  const navDropdowns = document.querySelectorAll('.nav-dropdown');
  const submenuTriggers = document.querySelectorAll('.submenu-trigger');
  const header      = document.getElementById('site-header');
  const backdrop    = document.querySelector('.nav-backdrop');
  const MOBILE_BP   = 900;

  // ── Inject the dot-grid toggle markup ────────────────────────
  if (navToggle) {
    navToggle.innerHTML = `
      <span class="nav-toggle-inner" aria-hidden="true">
        <span class="nav-toggle-dot"></span>
        <span class="nav-toggle-dot"></span>
        <span class="nav-toggle-dot"></span>
        <span class="nav-toggle-dot"></span>
      </span>
    `;
  }

  // ── Helpers ──────────────────────────────────────────────────
  const isMobile = () => window.innerWidth <= MOBILE_BP;

  function closeAllDropdowns() {
    navDropdowns.forEach(dd => {
      dd.classList.remove('open');
      const trigger = dd.querySelector('.dropdown-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
      dd.querySelectorAll('.dropdown-item.has-submenu').forEach(item => {
        item.classList.remove('open');
        const st = item.querySelector('.submenu-trigger');
        if (st) st.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function closeMobileMenu() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    closeAllDropdowns();
  }

  function openMobileMenu() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  }

  // ── Mobile Menu Toggle ────────────────────────────────────────
  navToggle?.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMobileMenu() : openMobileMenu();
  });

  // ── Level 1: Dropdown Trigger (mobile accordion) ─────────────
  document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', e => {
      if (!isMobile()) return; // desktop: CSS :hover handles it
      e.preventDefault();
      e.stopPropagation();

      const dd = trigger.closest('.nav-dropdown');
      if (!dd) return;
      const willOpen = !dd.classList.contains('open');

      // Accordion — close siblings
      navDropdowns.forEach(other => {
        if (other !== dd) {
          other.classList.remove('open');
          other.querySelector('.dropdown-trigger')?.setAttribute('aria-expanded', 'false');
          other.querySelectorAll('.dropdown-item.has-submenu').forEach(item => {
            item.classList.remove('open');
            item.querySelector('.submenu-trigger')?.setAttribute('aria-expanded', 'false');
          });
        }
      });

      dd.classList.toggle('open', willOpen);
      trigger.setAttribute('aria-expanded', String(willOpen));

      if (willOpen) {
        setTimeout(() => dd.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 160);
      }
    });
  });

  // ── Level 2: Submenu Trigger (mobile accordion) ───────────────
  submenuTriggers.forEach(trigger => {
    trigger.addEventListener('click', e => {
      if (!isMobile()) return; // desktop: CSS :hover handles it
      e.preventDefault();
      e.stopPropagation();

      const item = trigger.closest('.dropdown-item.has-submenu');
      if (!item) return;
      const willOpen = !item.classList.contains('open');

      // Close sibling submenus
      item.parentElement?.querySelectorAll('.dropdown-item.has-submenu').forEach(sib => {
        if (sib !== item) {
          sib.classList.remove('open');
          sib.querySelector('.submenu-trigger')?.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('open', willOpen);
      trigger.setAttribute('aria-expanded', String(willOpen));

      if (willOpen) {
        setTimeout(() => item.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 120);
      }
    });
  });

  // ── Backdrop click → close ────────────────────────────────────
  backdrop?.addEventListener('click', closeMobileMenu);

  // ── Outside click (mobile) ────────────────────────────────────
  document.addEventListener('click', e => {
    if (!isMobile()) return;
    const inside = navMenu?.contains(e.target) || navToggle?.contains(e.target);
    if (!inside && navMenu?.classList.contains('open')) closeMobileMenu();
  });

  // ── Keyboard: Escape + Arrow navigation ──────────────────────
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      document.activeElement?.blur();
      return;
    }

    // Arrow key nav within open dropdown
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      const trigger = document.activeElement;
      if (!trigger?.classList.contains('dropdown-trigger')) return;

      const dd = trigger.closest('.nav-dropdown');
      const menu = dd?.querySelector('.dropdown-menu');
      if (!menu) return;

      e.preventDefault();
      const links = [...menu.querySelectorAll('.dropdown-link, .submenu-link')];
      const idx   = links.indexOf(document.activeElement);
      const next  = e.key === 'ArrowDown'
        ? Math.min(idx + 1, links.length - 1)
        : Math.max(idx - 1, 0);
      links[next]?.focus();
    }
  });

  // ── Resize: clean up on desktop ───────────────────────────────
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (!isMobile()) {
        closeMobileMenu();
        closeAllDropdowns();
      }
    }, 150);
  });

  // ── Scroll: header shrink effect ─────────────────────────────
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.pageYOffset > 50);
  }, { passive: true });

  // ── Active page link highlight ────────────────────────────────
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === currentPath || (currentPath === '/' && href === '/')) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('active');
    }
  });
});