/* ============================================================
   pages/supplier-code.js — Supplier Code of Conduct
   Unique BEM class names matching css/supplier-code.css
   ============================================================ */

const SupplierCodePage = {
  sections: [
    { num: '1', heading: 'Purpose', body: 'MMT Alliance is committed to conducting business with integrity, accountability, and respect for international standards. This Supplier Code of Conduct outlines the minimum standards expected of all suppliers, contractors, subcontractors, and partners working with MMT Alliance. These standards are aligned with internationally recognised principles, including human rights and dignity, fair labour practices, environmental responsibility, and ethical business conduct.' },
    { num: '2', heading: 'Scope of Application', body: 'This Code applies to all MMT Alliance suppliers, subcontractors and third-party partners, and affiliates and supply chain participants. Suppliers are expected to communicate this Code within their organisation, ensure compliance across their own supply chains, and operate in accordance with these principles at all times.' },
    { num: '3', heading: 'Human Rights', body: 'MMT Alliance expects all suppliers to respect and support internationally recognised human rights, avoid any involvement in human rights abuses, and conduct appropriate due diligence within their operations and supply chain. Suppliers must ensure their operations do not negatively impact individuals, communities, or vulnerable groups.' },
    { 
      num: '4', 
      heading: 'Labour Standards', 
      body: 'Suppliers must comply with applicable labour laws and uphold fair working conditions.', 
      subsections: [
        { num: '4.1', heading: 'Freedom of Association', body: 'Workers must have the right to organise and engage in collective bargaining without fear of retaliation.' },
        { num: '4.2', heading: 'Forced Labour', body: 'All forms of forced, bonded, or compulsory labour are strictly prohibited.' },
        { num: '4.3', heading: 'Human Trafficking', body: 'Suppliers must not engage in or support any form of human trafficking.' },
        { num: '4.4', heading: 'Child Labour', body: 'Child labour is strictly prohibited. Suppliers must comply with minimum legal working age requirements.' },
        { num: '4.5', heading: 'Non-Discrimination', body: 'Employment practices must be fair and free from discrimination based on race, gender, religion, nationality, or other protected characteristics.' },
        { num: '4.6', heading: 'Wages and Working Conditions', body: 'Suppliers must pay fair wages in accordance with local laws, provide safe and reasonable working hours, and ensure fair and humane working conditions.' },
        { num: '4.7', heading: 'Health and Safety', body: 'Suppliers must provide safe working environments, proper training and protective equipment, and measures to prevent accidents and injuries.' }
      ]
    },
    { num: '5', heading: 'Prevention of Exploitation and Abuse', body: 'MMT Alliance enforces a zero-tolerance policy on sexual exploitation and abuse, harassment or intimidation, and inhumane or degrading treatment. Suppliers must take all necessary measures to prevent such conduct within their operations.' },
    { num: '6', heading: 'Environmental Responsibility', body: 'Suppliers are expected to operate in an environmentally responsible manner. This includes compliance with environmental laws and regulations, responsible management of waste and emissions, safe handling of hazardous materials, and minimising environmental impact where possible. Suppliers are encouraged to adopt sustainable practices and improve environmental performance.' },
    { 
      num: '7', 
      heading: 'Ethical Business Conduct', 
      body: '', 
      subsections: [
        { num: '7.1', heading: 'Anti-Corruption', body: 'Suppliers must not engage in bribery, fraud, extortion, or collusion. All business must be conducted with honesty and integrity.' },
        { num: '7.2', heading: 'Conflict of Interest', body: 'Suppliers must disclose any situation that may present a conflict of interest in relation to MMT Alliance.' },
        { num: '7.3', heading: 'Gifts and Hospitality', body: 'Suppliers must not offer gifts, payments, or benefits that could improperly influence business decisions.' },
        { num: '7.4', heading: 'Transparency', body: 'Suppliers must maintain accurate records, cooperate with audits or investigations, and disclose any legal or regulatory issues relevant to operations.' }
      ]
    },
    { num: '8', heading: 'Supply Chain Responsibility', body: 'Suppliers are expected to apply these principles across their own supply chain, monitor subcontractor compliance, and promote continuous improvement in ethical and operational standards.' },
    { num: '9', heading: 'Compliance and Monitoring', body: 'MMT Alliance expects suppliers to implement systems to ensure compliance with this Code, monitor and improve internal practices, and take corrective action where required. Failure to comply may result in termination of contracts and removal from approved supplier lists.' },
    { num: '10', heading: 'Continuous Improvement', body: 'MMT Alliance encourages suppliers to go beyond minimum standards, improve working conditions and environmental practices, and strengthen governance and compliance systems.' },
    { num: '11', heading: 'Commitment', body: 'By working with MMT Alliance, suppliers acknowledge and agree to comply with this Code of Conduct, uphold ethical, legal, and professional standards, and support responsible and sustainable procurement practices.' }
  ],

  render(container) {
    // Generate TOC list items with unique BEM classes
    const tocItems = this.sections.map(s => `
      <li class="toc-item toc-item--supplier-code ${s.subsections ? 'toc-item--has-subitems' : ''}">
        <a href="#section-${s.num}" class="toc-link toc-link--supplier-code" aria-label="Section ${s.num}: ${s.heading}">
          <span class="toc-num toc-num--supplier-code">${s.num}</span>
          <span class="toc-title toc-title--supplier-code">${s.heading}</span>
        </a>
        ${s.subsections && s.subsections.length > 0 ? `
          <ul class="toc-sublist toc-sublist--supplier-code">
            ${s.subsections.map(sub => `
              <li><a href="#subsection-${sub.num}" class="toc-sublink toc-sublink--supplier-code">${sub.num} ${sub.heading}</a></li>
            `).join('')}
          </ul>
        ` : ''}
      </li>
    `).join('');

    container.innerHTML = `
      <!-- ===== HERO SECTION ===== -->
      <header class="page-hero page-hero--supplier-code">
        <div class="container">
          <nav class="breadcrumb breadcrumb--supplier-code" aria-label="Breadcrumb">
            <a href="/" class="breadcrumb__link">Home</a>
            <svg class="breadcrumb__separator" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <a href="/policies" class="breadcrumb__link">Policies</a>
            <svg class="breadcrumb__separator" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span class="breadcrumb__current">Supplier Code of Conduct</span>
          </nav>
          
          <div class="hero-contents">
            <h1 class="hero-content__title">Supplier Code of Conduct</h1>
            <p class="hero-content__subtitle">
              The minimum standards expected of all suppliers, contractors, subcontractors, and partners working with MMT Alliance — aligned with internationally recognised principles.
            </p>
          </div>
        </div>
      </header>

      <!-- ===== MAIN CONTENT CONTAINER ===== -->
      <main class="document-container document-container--supplier-code section">
        <div class="container">
          <div class="doc-wrapper doc-wrapper--supplier-code">
            
            <!-- ===== STICKY TABLE OF CONTENTS ===== -->
            <aside class="sidebar-toc sidebar-toc--supplier-code" aria-label="Table of contents">
              <div class="toc-card toc-card--supplier-code">
                <h3 class="toc-heading toc-heading--supplier-code">Contents</h3>
                <nav role="navigation">
                  <ol class="toc-list toc-list--supplier-code">
                    ${tocItems}
                  </ol>
                </nav>
                
                <div class="toc-actions toc-actions--supplier-code">
                  <a href="/become-a-supplier" class="btn btn--supplier-code-secondary btn-block">
                    Register Your Business
                  </a>
                  <button id="download-pdf" class="btn btn--supplier-code-outline btn-block" style="margin-top: 8px;">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor"/><polyline points="14 2 14 8 20 8" stroke="currentColor"/><line x1="12" y1="18" x2="12" y2="12" stroke="currentColor"/><line x1="9" y1="15" x2="15" y2="15" stroke="currentColor"/></svg>
                    Download PDF
                  </button>
                </div>
              </div>
            </aside>

            <!-- ===== LEGAL DOCUMENT BODY ===== -->
            <article class="content-area content-area--supplier-code" id="document-content">
              
              <!-- Document Meta Header -->
              <div class="doc-meta-header doc-meta-header--supplier-code">
                <div class="badge-icon badge-icon--supplier-code" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="1.5"/>
                    <polyline points="14 2 14 8 20 8" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                </div>
                <div class="meta-info meta-info--supplier-code">
                  <div class="label-tag label-tag--supplier-code">MMT Alliance Policy Document</div>
                  <h2>Supplier Code of Conduct</h2>
                  <div class="meta-details meta-details--supplier-code">
                    <span>Version 2026.1</span> • <span>Last Updated: Jan 2026</span> • <span>Approved by Board</span>
                  </div>
                </div>
              </div>

              <!-- Global Alignment Banner -->
              <div class="banner-compliance banner-compliance--supplier-code">
                <svg class="banner-icon banner-icon--supplier-code" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <p>This Code is aligned with principles reflected in the <strong>United Nations Supplier Code of Conduct</strong> and international best practices.</p>
              </div>

              <!-- Sections Loop with Unique Classes -->
              ${this.sections.map(s => `
                <section id="section-${s.num}" class="doc-section doc-section--supplier-code doc-section--${s.num}">
                  <header class="section-header section-header--supplier-code">
                    <span class="section-number section-number--supplier-code">${s.num}</span>
                    <h3>${s.heading}</h3>
                  </header>
                  
                  ${s.body ? `<p class="section-intro section-intro--supplier-code">${s.body}</p>` : ''}
                  
                  ${s.subsections ? `
                    <div class="subsection-group subsection-group--supplier-code">
                      ${s.subsections.map(sub => `
                        <div id="subsection-${sub.num}" class="subsection subsection--supplier-code subsection--${sub.num.replace(/\./g, '-')}">
                          <h4><span class="subnum subnum--supplier-code">${sub.num}</span> ${sub.heading}</h4>
                          <p>${sub.body}</p>
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}
                </section>
              `).join('')}

              <!-- Final Commitment Box -->
              <div class="doc-footer-box doc-footer-box--supplier-code">
                <h4>Supplier Acknowledgement</h4>
                <p>All suppliers engaging with MMT Alliance must formally acknowledge compliance with this Code of Conduct upon registration and annually thereafter.</p>
                <a href="/become-a-supplier" class="btn btn--supplier-code-primary btn-block" style="margin-top: 1rem;">Sign &amp; Agree</a>
              </div>

            </article>

          </div>
        </div>
      </main>
    `;

    // Optional: Initialize active TOC highlighting on scroll
    this.initActiveTOC();
  },

  // Optional: Highlight active section in TOC on scroll
  initActiveTOC() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.toc-link--supplier-code[href="#${id}"]`);
        const sublink = document.querySelector(`.toc-sublink--supplier-code[href="#${id}"]`);
        
        if (entry.isIntersecting) {
          document.querySelectorAll('.toc-link--supplier-code, .toc-sublink--supplier-code').forEach(l => l.classList.remove('active'));
          if (link) link.classList.add('active');
          if (sublink) sublink.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0.1 });

    document.querySelectorAll('.doc-section--supplier-code, .subsection--supplier-code').forEach(sec => observer.observe(sec));
  }
};

Router.register('/supplier-code-of-conduct', SupplierCodePage.render.bind(SupplierCodePage));