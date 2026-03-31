/* ============================================================
   pages/capability-statement.js — Capability Statement Page
   Unique Class Names: cap-* prefix (BEM methodology)
   ============================================================ */

const CapabilityStatementPage = {
  render(container) {
    container.innerHTML = `
      <!-- Page Hero -->
      <div class="cap-hero">
        <div class="cap-container">
          <h1 class="cap-hero__title">Capability Statement</h1>
          <p class="cap-hero__description">A comprehensive overview of MMT Alliance's services, sector experience, differentiators, and compliance credentials—formatted for procurement panels and tender submissions.</p>
        </div>
      </div>
      </div>
      </div>

      <!-- Main Content -->
      <section class="cap-section">
        <div class="cap-containers">
          <div class="cap-layout">

            <!-- Left Column: Download + Info -->
            <div class="cap-sidebar">
              <div class="cap-info-block cap-info-block--intro reveal">
                <span class="cap-label">Download</span>
                <h2 class="cap-info-block__title">MMT Alliance Capability Statement</h2>
                <div class="cap-divider"></div>
                <p class="cap-info-block__text">Our capability statement is the document serious buyers ask for first. It summarises everything an institutional procurement team needs to assess MMT Alliance as a supply chain partner.</p>
                <p class="cap-info-block__text">Use it for tender pre-qualification, vendor registration, or to share with your procurement panel.</p>
              </div>

              <a href="assets/MMT-Alliance-Capability-Statement.pdf" download class="cap-download-card reveal reveal-delay-1">
                <div class="cap-download-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="1.5"/><polyline points="14 2 14 8 20 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="12" y1="12" x2="12" y2="18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polyline points="9 15 12 18 15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </div>
                <div class="cap-download-card__content">
                  <h4 class="cap-download-card__title">Download Capability Statement (PDF)</h4>
                  <p class="cap-download-card__filename">MMT-Alliance-Capability-Statement.pdf</p>
                </div>
                <div class="cap-download-card__action" aria-hidden="true">
                  <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </div>
              </a>

              <div class="cap-info-block cap-info-block--features reveal reveal-delay-2">
                <h4 class="cap-info-block__subtitle">What Is Included</h4>
                <ul class="cap-features-list">
                  <li class="cap-feature-item">
                    <svg class="cap-feature-item__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="1.5"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                    <span>Company overview & group structure</span>
                  </li>
                  <li class="cap-feature-item">
                    <svg class="cap-feature-item__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="1.5"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                    <span>Full services listing</span>
                  </li>
                  <li class="cap-feature-item">
                    <svg class="cap-feature-item__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="1.5"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                    <span>Sector experience</span>
                  </li>
                  <li class="cap-feature-item">
                    <svg class="cap-feature-item__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="1.5"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                    <span>Key differentiators</span>
                  </li>
                  <li class="cap-feature-item">
                    <svg class="cap-feature-item__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="1.5"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                    <span>Compliance & standards alignment</span>
                  </li>
                  <li class="cap-feature-item">
                    <svg class="cap-feature-item__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="1.5"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                    <span>Contact information</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Right Column: Preview Card -->
            <div class="cap-preview-wrapper reveal reveal-delay-2">
              <div class="cap-preview-card">
                <div class="cap-preview-card__header">
                  <p class="cap-preview-card__brand">MMT Alliance</p>
                  <h3 class="cap-preview-card__headline">Global Procurement, Supply & Logistics Partner</h3>
                </div>

                <div class="cap-preview-card__body">
                  <div class="cap-preview-group">
                    <p class="cap-preview-group__label">Core Services</p>
                    <div class="cap-badges">
                      <span class="cap-badge">Procurement</span>
                      <span class="cap-badge">Supply Solutions</span>
                      <span class="cap-badge">Logistics</span>
                      <span class="cap-badge">Emergency Response</span>
                    </div>
                  </div>

                  <div class="cap-preview-group">
                    <p class="cap-preview-group__label">Sectors</p>
                    <div class="cap-badges">
                      <span class="cap-badge cap-badge--secondary">United Nations</span>
                      <span class="cap-badge cap-badge--secondary">Governments</span>
                      <span class="cap-badge cap-badge--secondary">NGOs</span>
                      <span class="cap-badge cap-badge--secondary">Humanitarian</span>
                      <span class="cap-badge cap-badge--secondary">Infrastructure</span>
                    </div>
                  </div>

                  <div class="cap-preview-group">
                    <p class="cap-preview-group__label">Head Office</p>
                    <p class="cap-preview-card__address">Level 7/80 Dorcas St, Southbank VIC 3006, Australia</p>
                  </div>

                  <div class="cap-preview-group">
                    <p class="cap-preview-group__label">Contact</p>
                    <a href="mailto:info@mmtalliance.com" class="cap-preview-card__email">info@mmtalliance.com</a>
                  </div>
                </div>
              </div>

              <div class="cap-cta-block">
                <p class="cap-cta-block__text">Need a customised capability document for a specific tender?</p>
                <a href="#/contact" class="cap-btn cap-btn--outline">Contact Our Team</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    `;

    // Initialize animations
    this.initReveal();
  },

  initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
};

// Register with router
if (typeof Router !== 'undefined') {
  Router.register('/capability-statement', CapabilityStatementPage.render.bind(CapabilityStatementPage));
}