/* ============================================================
   pages/compliance.js — Compliance page render (ENHANCED)
   ============================================================ */

const CompliancePage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== SEO SCHEMA MARKUP ===== -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "MMT Alliance - Compliance & Standards",
        "description": "Full compliance with international procurement standards, UN guidelines, and regulatory frameworks across all operations.",
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "UNGM Vendor Registration",
            "description": "United Nations Global Marketplace vendor registration standards"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "UN Procurement Manual Alignment",
            "description": "Aligned with UN procurement guidelines and standards"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "World Bank Procurement Framework",
            "description": "Compliance with World Bank procurement requirements"
          }
        ],
        "knowsAbout": [
          "International Procurement Standards",
          "UN Compliance Frameworks",
          "Anti-Bribery & Corruption",
          "Modern Slavery Prevention",
          "Ethical Sourcing",
          "Supply Chain Transparency"
        ]
      }
      </script>

      <!-- ===== HERO SECTION ===== -->
      <div class="page-hero page-hero--compliance">
        <div class="hero-bg-overlay"></div>
        <div class="container page-hero-content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/" aria-label="Home">Home</a>
            <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span aria-current="page">Compliance</span>
          </nav>
          
          <h1 class="hero-title">
            <span class="title-line">Compliance &</span>
            <span class="title-line">Standards</span>
          </h1>
          
          <p class="hero-subtitle">
            Serious buyers check compliance first. MMT Alliance is built on a foundation of 
            transparency, ethical sourcing, and regulatory alignment across every engagement.
          </p>
        </div>
        
        <div class="hero-scroll-indicator">
          <span>View standards</span>
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </div>
      </div>

      <!-- ===== COMPLIANCE STANDARDS ===== -->
      <section class="section section-standards" aria-labelledby="standards-heading">
        <div class="container">
          <div class="section-header reveal">
            <span class="section-label">Our Standards</span>
            <h2 id="standards-heading">What Serious Buyers Check</h2>
            <div class="divider"></div>
            <p class="section-intro">
              Top procurement organisations emphasise transparency and control across supply chains. 
              MMT Alliance applies these same standards to every engagement—from initial sourcing 
              through to final delivery confirmation.
            </p>
          </div>
          
          <div class="compliance-standards-grid">
            <div class="standard-card reveal reveal-delay-1">
              <div class="standard-card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Ethical Sourcing</h3>
              <p>All suppliers are subject to ethical sourcing reviews. We do not engage with suppliers who fail to meet labour, environmental, or human rights standards.</p>
              <ul class="standard-list">
                <li>Labour standards verification</li>
                <li>Environmental compliance</li>
                <li>Human rights assessment</li>
              </ul>
            </div>
            
            <div class="standard-card reveal reveal-delay-2">
              <div class="standard-card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Supplier Due Diligence</h3>
              <p>Pre-qualification, financial assessment, reference checking, and site verification where applicable—before any supplier enters our approved network.</p>
              <ul class="standard-list">
                <li>Financial assessment</li>
                <li>Reference verification</li>
                <li>Site audits</li>
              </ul>
            </div>
            
            <div class="standard-card reveal reveal-delay-3">
              <div class="standard-card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Quality Assurance</h3>
              <p>Product specifications, inspection protocols, and quality verification at origin and on receipt—ensuring goods meet agreed standards before delivery.</p>
              <ul class="standard-list">
                <li>Origin inspection</li>
                <li>Quality verification</li>
                <li>Delivery confirmation</li>
              </ul>
            </div>
            
            <div class="standard-card reveal reveal-delay-4">
              <div class="standard-card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Regulatory Compliance</h3>
              <p>Full compliance with applicable import/export regulations, customs requirements, and sanctions frameworks across all operating jurisdictions.</p>
              <ul class="standard-list">
                <li>Import/export regulations</li>
                <li>Customs compliance</li>
                <li>Sanctions screening</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== INTERNATIONAL FRAMEWORKS ===== -->
      <section class="section section--alt section-frameworks" aria-labelledby="frameworks-heading">
        <div class="container">
          <div class="frameworks-hero reveal">
            <div class="frameworks-content">
              <span class="section-label">Frameworks</span>
              <h2 id="frameworks-heading">International Alignment</h2>
              <div class="divider"></div>
              <p class="lead">
                MMT Alliance operates in alignment with internationally recognised procurement 
                and compliance frameworks, ensuring our processes meet the highest standards 
                expected by institutional buyers.
              </p>
            </div>
            <div class="frameworks-visual">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=450&fit=crop" alt="Compliance documentation and standards" loading="lazy" width="800" height="1000">
                <div class="visual-badge">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2"/></svg>
                  <span>Certified</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="standards-list-grid">
            <div class="framework-item reveal reveal-delay-1">
              <div class="framework-icon">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div>
                <h4>UNGM Standards</h4>
                <p>United Nations Global Marketplace Vendor Registration Standards</p>
              </div>
            </div>
            
            <div class="framework-item reveal reveal-delay-2">
              <div class="framework-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div>
                <h4>UN Procurement Manual</h4>
                <p>Full alignment with UN procurement guidelines and procedures</p>
              </div>
            </div>
            
            <div class="framework-item reveal reveal-delay-3">
              <div class="framework-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div>
                <h4>World Bank Framework</h4>
                <p>Compliance with World Bank procurement requirements when applicable</p>
              </div>
            </div>
            
            <div class="framework-item reveal reveal-delay-4">
              <div class="framework-icon">
                <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div>
                <h4>INCOTERMS 2020</h4>
                <p>Standard trade term application across all international transactions</p>
              </div>
            </div>
            
            <div class="framework-item reveal reveal-delay-5">
              <div class="framework-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div>
                <h4>Australian Government Standards</h4>
                <p>Compliance standards via MMT Care group backing</p>
              </div>
            </div>
            
            <div class="framework-item reveal reveal-delay-6">
              <div class="framework-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div>
                <h4>Anti-Bribery & Corruption</h4>
                <p>Comprehensive policy and enforcement across all operations</p>
              </div>
            </div>
            
            <div class="framework-item reveal reveal-delay-7">
              <div class="framework-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div>
                <h4>Modern Slavery Policy</h4>
                <p>Human trafficking prevention and ethical labour practices</p>
              </div>
            </div>
            
            <div class="framework-item reveal reveal-delay-8">
              <div class="framework-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div>
                <h4>Environmental Standards</h4>
                <p>Sustainable sourcing and environmental compliance verification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== TRANSPARENCY SECTION ===== -->
      <section class="section section-transparency" aria-labelledby="transparency-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">Transparency</span>
            <h2 id="transparency-heading">Transparency Across Every Engagement</h2>
            <div class="divider"></div>
            <p class="section-intro">
              Top firms emphasise transparency and control across supply chains. 
              Here is how MMT Alliance delivers that in practice.
            </p>
          </div>
          
          <div class="transparency-grid">
            <div class="transparency-card reveal reveal-delay-1">
              <div class="transparency-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Full Audit Trails</h3>
              <p>Every procurement decision, supplier selection, and delivery confirmation is documented and available for audit.</p>
              <div class="transparency-metric">
                <span class="metric-value">100%</span>
                <span class="metric-label">Documented</span>
              </div>
            </div>
            
            <div class="transparency-card reveal reveal-delay-2">
              <div class="transparency-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Structured Reporting</h3>
              <p>Regular progress reports, financial summaries, and delivery confirmations formatted to client and donor requirements.</p>
              <div class="transparency-metric">
                <span class="metric-value">Monthly</span>
                <span class="metric-label">Reports</span>
              </div>
            </div>
            
            <div class="transparency-card reveal reveal-delay-3">
              <div class="transparency-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Supplier Accountability</h3>
              <p>Contractual quality, delivery, and compliance obligations on all suppliers—enforced and monitored throughout each engagement.</p>
              <div class="transparency-metric">
                <span class="metric-value">All</span>
                <span class="metric-label">Suppliers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== COMPLIANCE METRICS ===== -->
      <section class="section section--alt section-compliance-metrics" aria-labelledby="metrics-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">By The Numbers</span>
            <h2 id="metrics-heading">Compliance at Scale</h2>
            <div class="divider"></div>
          </div>
          
          <div class="compliance-metrics-grid">
            <div class="compliance-metric reveal reveal-delay-1">
              <div class="metric-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="metric-value">100%</div>
              <div class="metric-label">Compliance Rate</div>
            </div>
            
            <div class="compliance-metric reveal reveal-delay-2">
              <div class="metric-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="metric-value">50+</div>
              <div class="metric-label">Countries Compliant</div>
            </div>
            
            <div class="compliance-metric reveal reveal-delay-3">
              <div class="metric-icon">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="metric-value">8+</div>
              <div class="metric-label">International Standards</div>
            </div>
            
            <div class="compliance-metric reveal reveal-delay-4">
              <div class="metric-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="metric-value">24/7</div>
              <div class="metric-label">Compliance Support</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== FAQ SECTION (SEO) ===== -->
      <section class="section section-faq" aria-labelledby="faq-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">FAQ</span>
            <h2 id="faq-heading">Compliance Questions</h2>
            <div class="divider"></div>
          </div>
          
          <div class="faq-grid">
            <details class="faq-item reveal reveal-delay-1">
              <summary>
                <span class="faq-question">Are you registered with UN procurement agencies?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Yes, we maintain active vendor registration with multiple UN agencies and follow UNGM vendor registration requirements and UN procurement guidelines.</p>
              </div>
            </details>
            
            <details class="faq-item reveal reveal-delay-2">
              <summary>
                <span class="faq-question">What anti-corruption measures do you have in place?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>We have comprehensive anti-bribery and corruption policies, mandatory staff training, supplier code of conduct, and regular compliance audits across all operations.</p>
              </div>
            </details>
            
            <details class="faq-item reveal reveal-delay-3">
              <summary>
                <span class="faq-question">Do you conduct supplier audits?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Yes, we conduct pre-qualification audits, periodic compliance reviews, and site verification visits for key suppliers in our network.</p>
              </div>
            </details>
            
            <details class="faq-item reveal reveal-delay-4">
              <summary>
                <span class="faq-question">Can you provide compliance documentation for tenders?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Absolutely. We maintain audit-ready documentation including compliance certificates, policy documents, and supplier due diligence records ready for procurement panels.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <!-- ===== CTA SECTION ===== -->
      <section class="cta-band cta-band--compliance" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cta-heading">Ready to Review Our Compliance Documentation?</h2>
            <p>Contact our team for full compliance documentation, supplier due diligence frameworks, or to discuss specific procurement compliance requirements.</p>
            <div class="cta-actions">
              <a href="/contact" class="btn btn-primary btn-lg">
                Contact Compliance Team
                <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="/capability-statement" class="btn btn-outline-white btn-lg">
                <svg viewBox="0 0 20 20" fill="none"><path d="M10 3v10M6 9l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="3" y="15" width="14" height="2" rx="1" fill="currentColor"/></svg>
                Download Capability Statement
              </a>
            </div>
          </div>
        </div>
      </section>
    `;

    // Initialize animations and FAQ
    this.initAnimations();
    this.initFAQ();
  },

  initAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;
      
      revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
  },

  initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      item.addEventListener('click', function() {
        faqItems.forEach(other => {
          if (other !== item) {
            other.removeAttribute('open');
          }
        });
      });
    });
  }
};

Router.register('/compliance', CompliancePage.render.bind(CompliancePage));