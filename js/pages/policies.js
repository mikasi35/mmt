/* ============================================================
   pages/policies.js — Corporate Policies hub page
   ============================================================ */
function loadCSS(id, href) {
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

const PoliciesPage = {
  policies: [
    {
      id: 'anti-corruption',
      icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/>`,
      title: 'Anti-Corruption & Anti-Bribery Policy',
      tag: 'Governance',
      summary: 'MMT Alliance maintains a zero-tolerance approach to corruption, bribery, fraud, and unethical conduct in all business activities.',
      sections: [
        { heading: 'Purpose', body: 'MMT Alliance is committed to conducting business with the highest standards of integrity, transparency, and accountability.' },
        { heading: 'Scope', body: 'This policy applies to all employees, directors, contractors, suppliers, and partners of MMT Alliance.' },
        { heading: 'Policy Statement', body: 'Strictly prohibits offering, giving, or receiving bribes; facilitation payments; kickbacks or improper commissions.' },
        { heading: 'Gifts and Hospitality', body: 'Gifts must not influence decisions. All benefits must be reasonable, transparent, and lawful.' },
        { heading: 'Compliance', body: 'Violations may result in termination of contracts, legal action, and removal from supplier networks.' },
        { heading: 'Reporting', body: 'Report suspected misconduct to MMT Alliance management confidentially.' }
      ]
    },
    {
      id: 'esg',
      icon: `<path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v4l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
      title: 'Environmental, Social & Governance (ESG) Policy',
      tag: 'ESG',
      summary: 'MMT Alliance is committed to responsible and sustainable business practices contributing positively to society and the environment.',
      sections: [
        { heading: 'Purpose', body: 'Commitment to responsible practices contributing positively to society, the environment, and governance standards.' },
        { heading: 'Environmental Responsibility', body: 'Minimise environmental impact, promote efficient resource use, reduce waste and emissions across operations.' },
        { heading: 'Social Responsibility', body: 'Respect human rights, promote fair labour practices, ensure safe and inclusive working environments.' },
        { heading: 'Governance', body: 'Maintain strong governance through transparent decision-making and ethical business conduct.' }
      ]
    },
    {
      id: 'human-rights',
      icon: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.5"/>`,
      title: 'Human Rights Policy',
      tag: 'Human Rights',
      summary: 'Committed to respecting and supporting internationally recognised human rights across all operations and supply chain relationships.',
      sections: [
        { heading: 'Commitment', body: 'We expect the same commitment from all suppliers and partners regarding international human rights.' },
        { heading: 'Principles', body: 'We do not tolerate human rights abuses. We support fair and safe working conditions and dignity.' },
        { heading: 'Supply Chain Responsibility', body: 'Suppliers must uphold human rights standards, conduct due diligence, and address risks proactively.' }
      ]
    },
    {
      id: 'modern-slavery',
      icon: `<path d="M18 8h1a4 4 0 0 1 0 8h-1" stroke="currentColor" stroke-width="1.5"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="currentColor" stroke-width="1.5"/><line x1="6" y1="1" x2="6" y2="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="10" y1="1" x2="10" y2="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="14" y1="1" x2="14" y2="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
      title: 'Modern Slavery & Ethical Labour Policy',
      tag: 'Labour',
      summary: 'Zero-tolerance approach to forced labour, human trafficking, child labour, and exploitative working conditions.',
      sections: [
        { heading: 'Commitment', body: 'Zero-tolerance approach to forced labour, human trafficking, child labour, and exploitation.' },
        { heading: 'Expectations', body: 'Suppliers must employ workers voluntarily, pay fair wages, provide safe working conditions, and comply with laws.' },
        { heading: 'Due Diligence', body: 'Conducts supplier screening, monitors supply chain risks, and takes action where violations are identified.' }
      ]
    },
    {
      id: 'health-safety',
      icon: `<path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
      title: 'Health & Safety Policy',
      tag: 'Safety',
      summary: 'Committed to maintaining safe and healthy working environments across all operations and supplier relationships.',
      sections: [
        { heading: 'Commitment', body: 'Committed to maintaining safe and healthy working environments across all operations.' },
        { heading: 'Principles', body: 'Prevent workplace injuries, provide training and safety measures, ensure safe handling of equipment.' },
        { heading: 'Supplier Responsibility', body: 'Suppliers must maintain safe working conditions, comply with regulations, and provide protective equipment.' }
      ]
    },
    {
      id: 'procurement-ethics',
      icon: `<path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
      title: 'Procurement & Supplier Ethics Policy',
      tag: 'Procurement',
      summary: 'Committed to fair, transparent, and responsible procurement practices aligned with international standards.',
      sections: [
        { heading: 'Commitment', body: 'Committed to fair, transparent, and responsible procurement practices.' },
        { heading: 'Principles', body: 'Fair selection processes, objective criteria, equal opportunity, and ethical sourcing.' },
        { heading: 'Supplier Expectations', body: 'Comply with MMT Code of Conduct, maintain ethical standards, avoid conflicts of interest.' }
      ]
    },
    {
      id: 'data-protection',
      icon: `<rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
      title: 'Data Protection & Confidentiality Policy',
      tag: 'Data',
      summary: 'Respects the confidentiality and security of all business and client information in accordance with applicable laws.',
      sections: [
        { heading: 'Commitment', body: 'Respects the confidentiality and security of all business and client information.' },
        { heading: 'Principles', body: 'Protect sensitive data from unauthorised access, use information only for legitimate purposes.' },
        { heading: 'Compliance', body: 'All parties must comply with data protection laws. Information is treated with the highest level of discretion.' }
      ]
    }
  ],

  render(container) {
    loadCSS('policies-css', '/../css/policies.css');
    
    container.innerHTML = `
      <!-- ===== HERO SECTION ===== -->
      <div class="page-hero page-hero--policies">
        <div class="container page-hero__content">
          <nav class="breadcrumb breadcrumb--policies" aria-label="Breadcrumb">
            <a href="/" class="breadcrumb__link">Home</a>
            <svg class="breadcrumb__separator" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span class="breadcrumb__current">Corporate Policies</span>
          </nav>
          <h1 class="page-hero__title">Corporate Policies</h1>
          <p class="page-hero__description">MMT Alliance operates in alignment with the highest international standards. Our policies reflect our commitment to integrity, transparency, and responsible business conduct.</p>
        </div>
      </div>

      <!-- ===== UN ALIGNMENT BANNER ===== -->
      <div class="policy-un-banner">
        <div class="container">
          <div class="policy-un-banner__inner">
            <div class="policy-un-banner__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <p class="policy-un-banner__text">We align with principles reflected in the <strong>United Nations Supplier Code of Conduct</strong> and global best practices in ethical procurement and supply chain governance.</p>
          </div>
        </div>
      </div>

      <!-- ===== MAIN POLICIES GRID ===== -->
      <section class="section section--policies" aria-labelledby="policies-heading">
        <div class="container">
          <header class="section-header section-header--policies reveal">
            <span class="section-label section-label--policies">Our Policies</span>
            <h2 id="policies-heading" class="section-header__title">Governance &amp; Compliance Framework</h2>
            <div class="divider divider--policies"></div>
            <p class="section-header__description">Click any policy card below to view the full document details.</p>
          </header>
          
          <div class="policy-grid policy-grid--main" role="list">
            ${this.policies.map((p, i) => `
              <article class="policy-card policy-card--${p.id.replace(/--?/g, '-')} reveal reveal-delay-${(i % 3) + 1}" 
                       role="listitem" 
                       tabindex="0" 
                       data-policy-id="${p.id}" 
                       aria-label="View ${p.title} Policy">
                <div class="policy-card__top">
                  <div class="policy-card__icon" aria-hidden="true">
                    <svg class="policy-card__icon-svg" viewBox="0 0 24 24" fill="none">${p.icon}</svg>
                  </div>
                  <span class="policy-card__tag policy-card__tag--${p.tag.toLowerCase().replace(/\s+/g, '-')}">${p.tag}</span>
                </div>
                <h3 class="policy-card__title">${p.title}</h3>
                <p class="policy-card__summary">${p.summary}</p>
                <div class="policy-card__footer">
                  <span class="policy-card__read-link">
                    View Policy 
                    <svg class="policy-card__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </span>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ===== QUICK LINKS SECTION ===== -->
      <section class="section section--alt section--policy-links" aria-labelledby="download-heading">
        <div class="container">
          <header class="section-header section-header--center section-header--policy-links reveal">
            <span class="section-label section-label--policy-links">Related Documents</span>
            <h2 id="download-heading" class="section-header__title">Download &amp; Reference</h2>
            <div class="divider divider--policy-links"></div>
          </header>
          
          <div class="policy-links-grid policy-links-grid--main reveal reveal-delay-1" role="list">
            <a href="/supplier-code-of-conduct" class="policy-link-card policy-link-card--supplier reveal-item">
              <div class="policy-link-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="1.5"/><polyline points="14 2 14 8 20 8" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="policy-link-card__content">
                <h4 class="policy-link-card__title">Supplier Code of Conduct</h4>
                <p class="policy-link-card__description">Standards expected of all MMT Alliance suppliers and partners</p>
              </div>
              <svg class="policy-link-card__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </a>
            
            <a href="/terms" class="policy-link-card policy-link-card--terms reveal-item">
              <div class="policy-link-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="policy-link-card__content">
                <h4 class="policy-link-card__title">Terms &amp; Conditions</h4>
                <p class="policy-link-card__description">Full terms governing MMT Alliance service engagements</p>
              </div>
              <svg class="policy-link-card__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </a>

            <a href="/become-a-supplier" class="policy-link-card policy-link-card--register reveal-item">
              <div class="policy-link-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
              <div class="policy-link-card__content">
                <h4 class="policy-link-card__title">Become a Supplier</h4>
                <p class="policy-link-card__description">Register your business as an approved MMT Alliance supplier</p>
              </div>
              <svg class="policy-link-card__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </a>

            <a href="/compliance" class="policy-link-card policy-link-card--compliance reveal-item">
              <div class="policy-link-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="1.5"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
              <div class="policy-link-card__content">
                <h4 class="policy-link-card__title">Compliance &amp; Standards</h4>
                <p class="policy-link-card__description">Our compliance framework and international standard alignment</p>
              </div>
              <svg class="policy-link-card__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      <!-- ===== ACCESSIBLE MODAL ===== -->
      <div id="policy-modal" class="article-modal article-modal--policies" role="dialog" aria-modal="true" aria-labelledby="policy-modal-title" hidden>
        <div class="article-modal__backdrop" id="policy-backdrop" tabindex="-1"></div>
        <div class="article-modal__panel article-modal__panel--policy">
          <button class="article-modal__close" id="policy-modal-close" aria-label="Close policy" title="Close">
            <svg class="article-modal__close-icon" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
          <div id="policy-modal-content" class="article-modal__content" aria-live="polite"></div>
        </div>
      </div>
    `;

    this.initAnimations();
    this.initModal();
  },

  initAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  },

  initModal() {
  const modal = document.getElementById('policy-modal');
  const backdrop = document.getElementById('policy-backdrop');
  const closeBtn = document.getElementById('policy-modal-close');
  const content = document.getElementById('policy-modal-content');
  const panel = modal?.querySelector('.article-modal__panel--policy');
  
  if (!modal) return;

  let lastFocusedElement = null;
  let lastScrollPosition = 0;

  function openPolicy(id) {
    const policy = PoliciesPage.policies.find(p => p.id === id);
    if (!policy) return;

    // Store current scroll position
    lastScrollPosition = window.scrollY;
    lastFocusedElement = document.activeElement;

    // Build content
    content.innerHTML = `
      <div class="modal__meta">
        <span class="modal__tag modal__tag--${policy.tag.toLowerCase().replace(/\s+/g, '-')}">${policy.tag}</span>
      </div>
      <h2 id="policy-modal-title" class="modal__title">${policy.title}</h2>
      <div class="modal__divider"></div>
      ${policy.sections.map(s => `
        <div class="policy-section policy-section--${s.heading.toLowerCase().replace(/\s+/g, '-')}">
          <h4 class="policy-section__heading">${s.heading}</h4>
          <p class="policy-section__body">${s.body}</p>
        </div>
      `).join('')}
      <div class="policy-modal__footer">
        <p class="policy-modal__un-note">Aligned with United Nations Supplier Code of Conduct standards.</p>
        <a href="/contact" class="btn btn--modal btn--primary">Contact Us</a>
      </div>
    `;
    
    // CRITICAL: Set body to fixed BEFORE showing modal
    document.body.style.position = 'fixed';
    document.body.style.top = `-${lastScrollPosition}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    
    // Then show modal
    modal.hidden = false;
    
    // Force reflow to ensure animation plays
    void panel.offsetWidth;
    
    // Focus close button for accessibility
    setTimeout(() => closeBtn?.focus(), 50);
  }

  function close() {
    // Hide modal first
    modal.hidden = true;
    
    // Restore scroll position
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    window.scrollTo(0, lastScrollPosition);
    
    // Restore focus
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  // Event delegation for policy cards
  document.querySelector('.policy-grid--main')?.addEventListener('click', (e) => {
    const card = e.target.closest('[data-policy-id]');
    if (card) {
      e.preventDefault();
      openPolicy(card.dataset.policyId);
    }
  });

  document.querySelector('.policy-grid--main')?.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-policy-id]')) {
      e.preventDefault();
      openPolicy(e.target.dataset.policyId);
    }
  });

  // Close handlers
  closeBtn?.addEventListener('click', close);
  backdrop?.addEventListener('click', close);
  
  // Close on backdrop click (not panel click)
  panel?.addEventListener('click', (e) => e.stopPropagation());
  
  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) {
      e.preventDefault();
      close();
    }
  });
}
};

if (typeof Router !== 'undefined') {
  Router.register('/policies', PoliciesPage.render.bind(PoliciesPage));
}