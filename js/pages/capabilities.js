/* ============================================================
   pages/capabilities.js — Capabilities page render (ENHANCED)
   ============================================================ */

const CapabilitiesPage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== SEO SCHEMA MARKUP ===== -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "MMT Alliance - Capabilities",
        "description": "Global procurement, supply chain, and logistics capabilities for governments, UN agencies, and humanitarian organisations.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Core Capabilities",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "End-to-End Supply Chain Management",
                "description": "Complete supply chain management from sourcing to last-mile delivery"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Governance & Compliance",
                "description": "Structured procurement processes with full audit trails"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Global Sourcing",
                "description": "International supplier networks across 50+ countries"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency Response",
                "description": "24/7 crisis procurement and logistics activation"
              }
            }
          ]
        },
        "areaServed": {
          "@type": "Country",
          "name": "Global - 50+ Countries"
        }
      }
      </script>

      <!-- ===== HERO SECTION ===== -->
      <div class="page-hero page-hero--capabilities">
        <div class="hero-bg-overlay"></div>
        <div class="container page-hero-content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/" aria-label="Home">Home</a>
            <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span aria-current="page">Capabilities</span>
          </nav>
          
          <h1 class="hero-title">
            <span class="title-line">Our</span>
            <span class="title-line">Capabilities</span>
          </h1>
          
          <p class="hero-subtitle">
            This is what wins contracts. MMT Alliance combines global sourcing power, 
            institutional backing, and proven governance to deliver where others cannot.
          </p>
        </div>
        
        <div class="hero-scroll-indicator">
          <span>Explore capabilities</span>
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </div>
      </div>
<!-- ===== KEY DIFFERENTIATORS ===== -->
<section class="section mmt-differentiators" aria-labelledby="differentiators-heading">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-label">Key Differentiators</span>
      <h2 id="differentiators-heading">What Sets MMT Alliance Apart</h2>
    </div>
    
    <div class="mmt-differentiators-grid">
      <div class="mmt-diff-card reveal reveal-delay-1">
        <div class="mmt-diff-card-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
        <div class="mmt-diff-card-number">01</div>
        <h3>End-to-End Supply Chain Management</h3>
        <p>From requirements analysis through to last-mile delivery, we manage every stage of the supply chain under one accountable partner.</p>
      </div>
      
      <div class="mmt-diff-card reveal reveal-delay-2">
        <div class="mmt-diff-card-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
        <div class="mmt-diff-card-number">02</div>
        <h3>Proven Governance &amp; Compliance</h3>
        <p>Structured procurement processes, full audit trails, and compliance with international procurement standards—built in, not bolted on.</p>
      </div>
      
      <div class="mmt-diff-card reveal reveal-delay-3">
        <div class="mmt-diff-card-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
        <div class="mmt-diff-card-number">03</div>
        <h3>Backed by Established Group</h3>
        <p>MMT Care's track record in multi-million-dollar government programmes gives MMT Alliance the institutional credibility buyers require.</p>
      </div>
      
      <div class="mmt-diff-card reveal reveal-delay-4">
        <div class="mmt-diff-card-icon">
          <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
        <div class="mmt-diff-card-number">04</div>
        <h3>Global Sourcing Capability</h3>
        <p>International supplier networks across more than 50 countries, enabling competitive sourcing for any product category.</p>
      </div>
      
      <div class="mmt-diff-card reveal reveal-delay-5">
        <div class="mmt-diff-card-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
        <div class="mmt-diff-card-number">05</div>
        <h3>Complex Environment Operations</h3>
        <p>Conflict-affected regions, remote access areas, and fragile states—we have the networks and experience to deliver where it is hardest.</p>
      </div>
      
      <div class="mmt-diff-card reveal reveal-delay-6">
        <div class="mmt-diff-card-icon">
          <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
        <div class="mmt-diff-card-number">06</div>
        <h3>Emergency Response Readiness</h3>
        <p>24/7 activation capability for crisis procurement and logistics, with pre-qualified suppliers and established freight routes.</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== CORE POSITIONING ===== -->
<section class="section mmt-positioning section--alt" aria-labelledby="positioning-heading">
  <div class="container">
    <div class="mmt-positioning-hero reveal">
      <div class="mmt-positioning-content">
        <span class="section-label">Core Position</span>
        <h2 id="positioning-heading">Our Commitment</h2>
        <div class="mmt-divider"></div>
        <div class="mmt-positioning-quote">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <p>"We manage the entire supply chain process from sourcing to last-mile delivery—matching the position of the world's leading procurement and logistics organisations."</p>
          <span class="quote-source">MMT Alliance — Core Positioning Statement</span>
        </div>
      </div>
      <div class="mmt-positioning-visual">
        <div class="mmt-visual-card">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=550&fit=crop" alt="Corporate capabilities and institutional strength" loading="lazy" width="800" height="1000">
          <div class="mmt-visual-overlay-stats">
            <div class="mmt-overlay-stat">
              <span class="stat-value">50+</span>
              <span class="stat-label">Countries</span>
            </div>
            <div class="mmt-overlay-stat">
              <span class="stat-value">24/7</span>
              <span class="stat-label">Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mmt-capabilities-grid">
      <div class="mmt-cap-feature-card reveal reveal-delay-1">
        <div class="mmt-cap-feature-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
        <h3>Procurement Expertise</h3>
        <p>Deep experience in structured procurement across medical, food, shelter, logistics, and technical goods categories.</p>
        <ul class="feature-list">
          <li>Tender management</li>
          <li>Vendor evaluation</li>
          <li>Contract negotiation</li>
        </ul>
      </div>
      
      <div class="mmt-cap-feature-card reveal reveal-delay-2">
        <div class="mmt-cap-feature-icon">
          <svg viewBox="0 0 24 24" fill="none"><rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M16 8h4l3 4v4h-7V8z" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
        <h3>Supply Chain Control</h3>
        <p>End-to-end visibility and control from supplier contract through to delivery confirmation and reporting.</p>
        <ul class="feature-list">
          <li>Real-time tracking</li>
          <li>Quality assurance</li>
          <li>Delivery verification</li>
        </ul>
      </div>
      
      <div class="mmt-cap-feature-card reveal reveal-delay-3">
        <div class="mmt-cap-feature-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
        <h3>Governance Frameworks</h3>
        <p>Transparent processes, documented decision trails, and compliance structures aligned to international standards.</p>
        <ul class="feature-list">
          <li>Audit-ready documentation</li>
          <li>Ethical sourcing</li>
          <li>Compliance verification</li>
        </ul>
      </div>
      
      <div class="mmt-cap-feature-card reveal reveal-delay-4">
        <div class="mmt-cap-feature-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
        <h3>Institutional Strength</h3>
        <p>Group backing that provides the financial credibility, scale, and government trust required by institutional buyers.</p>
        <ul class="feature-list">
          <li>Financial accountability</li>
          <li>Multi-state operations</li>
          <li>Government trust</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ===== CAPABILITY METRICS ===== -->
<section class="section mmt-metrics" aria-labelledby="metrics-heading">
  <div class="container">
    <div class="section-header section-header--center reveal">
      <span class="section-label">By The Numbers</span>
      <h2 id="metrics-heading">Our Capabilities at Scale</h2>
      <div class="mmt-divider"></div>
    </div>
    
    <div class="mmt-metrics-grid">
      <div class="mmt-metric-card reveal reveal-delay-1">
        <div class="mmt-metric-value">50+</div>
        <div class="mmt-metric-label">Countries Served</div>
        <div class="mmt-metric-icon">
          <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
      </div>
      
      <div class="mmt-metric-card reveal reveal-delay-2">
        <div class="mmt-metric-value">4</div>
        <div class="mmt-metric-label">Core Service Verticals</div>
        <div class="mmt-metric-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
      </div>
      
      <div class="mmt-metric-card reveal reveal-delay-3">
        <div class="mmt-metric-value">24/7</div>
        <div class="mmt-metric-label">Emergency Response</div>
        <div class="mmt-metric-icon">
          <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
      </div>
      
      <div class="mmt-metric-card reveal reveal-delay-4">
        <div class="mmt-metric-value">100%</div>
        <div class="mmt-metric-label">Compliance Rate</div>
        <div class="mmt-metric-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== FAQ SECTION (SEO) ===== -->
<section class="section mmt-faq" aria-labelledby="faq-heading">
  <div class="container">
    <div class="section-header section-header--center reveal">
      <span class="section-label">FAQ</span>
      <h2 id="faq-heading">Capability Questions</h2>
      <div class="mmt-divider"></div>
    </div>
    
    <div class="mmt-faq-grid">
      <details class="mmt-faq-item reveal reveal-delay-1">
        <summary>
          <span class="faq-question">What makes MMT Alliance different from other procurement companies?</span>
          <span class="faq-icon">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </span>
        </summary>
        <div class="faq-answer">
          <p>We combine institutional credibility (backed by MMT Care's government contract delivery) with global sourcing reach across 50+ countries, plus the agility to operate in complex and fragile environments.</p>
        </div>
      </details>
      
      <details class="mmt-faq-item reveal reveal-delay-2">
        <summary>
          <span class="faq-question">What compliance standards do you follow?</span>
          <span class="faq-icon">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </span>
        </summary>
        <div class="faq-answer">
          <p>We follow UN procurement guidelines, ISO standards, and maintain full audit-ready documentation for all transactions. Our processes are built to meet government and institutional buyer requirements.</p>
        </div>
      </details>
      
      <details class="mmt-faq-item reveal reveal-delay-3">
        <summary>
          <span class="faq-question">Can you handle emergency procurement requirements?</span>
          <span class="faq-icon">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </span>
        </summary>
        <div class="faq-answer">
          <p>Yes. Our emergency response team operates 24/7 and can activate supply operations within hours of a crisis declaration, with typical deployment of critical supplies within 72 hours.</p>
        </div>
      </details>
      
      <details class="mmt-faq-item reveal reveal-delay-4">
        <summary>
          <span class="faq-question">Do you have experience in conflict-affected regions?</span>
          <span class="faq-icon">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </span>
        </summary>
        <div class="faq-answer">
          <p>Yes, we have proven capability operating in complex and fragile environments with security coordination, risk mitigation protocols, and established local partner networks.</p>
        </div>
      </details>
    </div>
  </div>
</section>
      <!-- ===== DOWNLOAD CTA SECTION ===== -->
      <section class="section section-download-cta" aria-labelledby="download-heading">
        <div class="container">
          <div class="download-card reveal">
            <div class="download-content">
              <span class="section-label">Capability Statement</span>
              <h2 id="download-heading">Everything Buyers Need — In One Document</h2>
              <p>Our capability statement summarises our services, sector experience, differentiators, and compliance credentials in a format ready for procurement panels and tender submissions.</p>
              
              <a href="/capability-statement" class="download-btn">
                <div class="download-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="1.5"/><polyline points="14 2 14 8 20 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="12" y1="12" x2="12" y2="18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><polyline points="9 15 12 18 15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </div>
                <div class="download-text">
                  <h4>Download Capability Statement (PDF)</h4>
                  <p>Full overview of MMT Alliance capabilities, sectors, and compliance credentials</p>
                </div>
                <div class="download-arrow">
                  <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </div>
              </a>
            </div>
            
            <div class="download-visual">
              <div class="document-preview">
                <div class="document-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="1.5"/><polyline points="14 2 14 8 20 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </div>
                <span>PDF Document</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== FINAL CTA ===== -->
      <section class="cta-band cta-band--capabilities" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cta-heading">Ready to Discuss Your Requirements?</h2>
            <p>Our team is ready to understand your specific procurement or logistics needs and provide a tailored solution.</p>
            <div class="cta-actions">
              <a href="/contact" class="btn btn-primary btn-lg">
                Contact Our Team
                <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="/services" class="btn btn-outline-white btn-lg">
                View Services
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
      item.addEventListener('click', function () {
        faqItems.forEach(other => {
          if (other !== item) {
            other.removeAttribute('open');
          }
        });
      });
    });
  }
};

Router.register('/capabilities', CapabilitiesPage.render.bind(CapabilitiesPage));