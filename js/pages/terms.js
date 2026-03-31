/* ============================================================
   pages/terms.js — Terms & Conditions of Service
   Unique BEM class names matching css/terms.css
   ============================================================ */

const TermsPage = {
  sections: [
    { num: '1', heading: 'Introduction', body: 'These Terms and Conditions ("Terms") govern the provision of procurement, sourcing, supply, logistics, and delivery services by MMT Alliance ("the Company") to its clients ("Client"). By engaging MMT Alliance, the Client agrees to be bound by these Terms.' },
    { num: '2', heading: 'Scope of Services', body: 'MMT Alliance provides end-to-end services including supplier sourcing and procurement, product supply and aggregation, logistics coordination (air, sea, land), warehousing and distribution, and delivery and project support services. All services are provided in accordance with agreed proposals, quotations, or contracts.' },
    { num: '3', heading: 'Contract Formation', body: 'A binding agreement is formed when a quotation is accepted, a purchase order is issued and accepted, or a formal agreement is signed. Any additional or amended terms must be agreed in writing.' },
    { num: '4', heading: 'Pricing and Payment', body: 'All pricing is stated in the agreed currency and excludes applicable taxes unless otherwise stated. Payment terms will be specified in the quotation or agreement. MMT Alliance reserves the right to request advance payments, milestone payments, or full prepayment for certain orders. Late payments may result in suspension of services, delays in delivery, or additional charges.' },
    { num: '5', heading: 'Delivery and Logistics', body: 'Delivery timelines are estimates unless expressly agreed as fixed. MMT Alliance will use reasonable efforts to meet delivery schedules. The Company is not liable for delays caused by customs clearance, transport disruptions, supplier delays, or force majeure events. Risk may transfer to the Client based on agreed Incoterms or delivery terms.' },
    { num: '6', heading: 'Supplier and Product Responsibility', body: 'MMT Alliance acts as a procurement and supply partner. While the Company performs supplier vetting and quality checks, product specifications are based on supplier-provided information, MMT Alliance is not the manufacturer unless explicitly stated, and manufacturer warranties (if any) apply directly.' },
    { num: '7', heading: 'Quality Assurance', body: 'MMT Alliance will conduct reasonable supplier due diligence, verify product specifications where applicable, and coordinate inspections if agreed. Unless explicitly stated, MMT Alliance does not guarantee performance beyond supplier specifications.' },
    { num: '8', heading: 'Compliance and Regulations', body: 'Clients are responsible for ensuring compliance with local import/export laws, permits, licenses, and approvals, and customs and regulatory requirements. MMT Alliance may assist but is not liable for regulatory approvals.' },
    { num: '9', heading: 'Risk and Title', body: 'Risk and ownership of goods transfer in accordance with agreed delivery terms (e.g. Incoterms). Unless otherwise agreed, risk transfers upon dispatch or delivery to carrier, and title may remain with MMT Alliance until full payment is received.' },
    { num: '10', heading: 'Limitation of Liability', body: 'To the maximum extent permitted by law, MMT Alliance shall not be liable for indirect, incidental, or consequential damages. Total liability shall not exceed the value of the relevant contract or order. The Company is not liable for loss of profits, business interruption, or delays outside its control.' },
    { num: '11', heading: 'Force Majeure', body: 'MMT Alliance shall not be liable for failure or delay caused by events beyond its control, including natural disasters, war or conflict, government restrictions, supply chain disruptions, and transportation interruptions.' },
    { num: '12', heading: 'Confidentiality', body: 'Both parties agree to keep confidential all non-public information, use such information only for the purpose of the agreement, and not disclose information without prior consent.' },
    { num: '13', heading: 'Ethics and Compliance', body: 'MMT Alliance operates in accordance with high ethical standards. Clients and partners are expected to comply with applicable anti-corruption laws, avoid conflicts of interest, and adhere to ethical business practices.' },
    { num: '14', heading: 'Termination', body: 'MMT Alliance may terminate services if the Client breaches these Terms, payment obligations are not met, or legal or compliance risks arise. Upon termination, outstanding payments become immediately due and costs incurred up to termination are payable.' },
    { num: '15', heading: 'Dispute Resolution', body: 'In the event of a dispute, parties will first attempt to resolve the matter amicably. If unresolved, disputes may be referred to arbitration or courts as agreed.' },
    { num: '16', heading: 'Governing Law', body: 'These Terms shall be governed by the laws of the agreed jurisdiction specified in the contract.' },
    { num: '17', heading: 'Amendments', body: 'MMT Alliance reserves the right to update these Terms. Updated Terms will apply to new engagements unless otherwise agreed.' },
    { num: '18', heading: 'Entire Agreement', body: 'These Terms, together with any agreement or quotation, constitute the entire agreement between the parties.' }
  ],

  render(container) {
    // Generate TOC items with unique BEM classes
    const tocItems = this.sections.map(s => `
      <li class="legal-toc__item--terms">
        <a href="#tc-${s.num}" class="legal-toc__link--terms" data-section="${s.num}">
          ${s.num}. ${s.heading}
        </a>
      </li>
    `).join('');

    container.innerHTML = `
      <!-- ===== HERO SECTION ===== -->
      <div class="page-hero page-hero--terms">
        <div class="container page-hero__content--terms">
          <nav class="breadcrumb breadcrumb--terms" aria-label="Breadcrumb">
            <a href="/" class="breadcrumb__link">Home</a>
            <svg class="breadcrumb__separator" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <a href="/policies" class="breadcrumb__link">Policies</a>
            <svg class="breadcrumb__separator" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span class="breadcrumb__current">Terms &amp; Conditions</span>
          </nav>
          <h1 class="page-hero__title--terms">Terms &amp; Conditions of Service</h1>
          <p class="page-hero__description--terms">These Terms govern the provision of procurement, sourcing, supply, logistics, and delivery services by MMT Alliance to its clients.</p>
        </div>
      </div>

      <!-- ===== MAIN CONTENT ===== -->
      <section class="section">
        <div class="container">
          <div class="legal-layout legal-layout--terms">
            
            <!-- ===== SIDEBAR TOC ===== -->
            <aside class="legal-toc legal-toc--terms" aria-label="Table of contents">
              <div class="legal-toc__inner--terms">
                <h4 class="legal-toc__title--terms">Contents</h4>
                <nav>
                  <ol class="legal-toc__list--terms">
                    ${tocItems}
                  </ol>
                </nav>
                <div class="legal-toc__cta--terms">
                  <a href="/contact" class="btn btn--terms-outline" style="width:100%;justify-content:center;font-size:0.85rem">Contact Us</a>
                </div>
              </div>
            </aside>

            <!-- ===== LEGAL DOCUMENT BODY ===== -->
            <div class="legal-main legal-main--terms">
              <div class="legal-doc-header legal-doc-header--terms">
                <div class="legal-doc-badge legal-doc-badge--terms" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2" stroke="currentColor" stroke-width="1.5"/></svg>
                </div>
                <div>
                  <div class="legal-doc-label legal-doc-label--terms">MMT Alliance</div>
                  <h2 class="legal-doc-title--terms">Terms &amp; Conditions of Service</h2>
                  <p class="legal-doc-meta--terms">Effective: 2026 | Subject to update</p>
                </div>
              </div>

              <!-- Sections Loop -->
              ${this.sections.map(s => `
                <div class="legal-section legal-section--terms" id="tc-${s.num}" data-num="${s.num}">
                  <h3 class="legal-section__heading--terms">
                    <span class="legal-section__num--terms">${s.num}</span>
                    ${s.heading}
                  </h3>
                  <p class="legal-section__body--terms">${s.body}</p>
                </div>
              `).join('')}

              <!-- Commitment Footer -->
              <div class="legal-commitment-box legal-commitment-box--terms">
                <h3 class="legal-commitment-box__title--terms">Commitment to International Standards</h3>
                <p class="legal-commitment-box__text--terms">MMT Alliance operates in alignment with internationally recognised procurement and ethical standards, including principles reflected in global frameworks such as the United Nations Supplier Code of Conduct.</p>
                <div class="legal-commitment-box__actions--terms">
                  <a href="/policies" class="btn btn--terms-primary">View All Policies</a>
                  <a href="/contact" class="btn btn--terms-outline">Contact Us</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    `;

    // Initialize smooth scroll + active TOC highlighting
    this.initTOC();
    this.initActiveHighlighting();
  },

  // Smooth scroll for TOC links
  initTOC() {
    document.querySelectorAll('.legal-toc__link--terms').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Update active state
          document.querySelectorAll('.legal-toc__link--terms').forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    });
  },

  // Highlight active section in TOC on scroll
  initActiveHighlighting() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const num = entry.target.getAttribute('data-num');
        const link = document.querySelector(`.legal-toc__link--terms[data-section="${num}"]`);
        
        if (entry.isIntersecting) {
          document.querySelectorAll('.legal-toc__link--terms').forEach(l => l.classList.remove('active'));
          if (link) link.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0.1 });

    document.querySelectorAll('.legal-section--terms').forEach(sec => observer.observe(sec));
  }
};

Router.register('/terms', TermsPage.render.bind(TermsPage));