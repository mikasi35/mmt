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
<section class="section-mmt-lattice" id="differentiators" aria-labelledby="differentiators-heading">
  <div class="matrix-grid"></div>
  
  <div class="container">
    <div class="section-header section-header--center reveal">
      <span class="section-label">Architectural Advantage</span>
      <h2 id="differentiators-heading">The MMT <span class="teal-text">Lattice</span></h2>
      <div class="divider mx-auto"></div>
      <p class="section-intro">
        Six integrated pillars defining our operational superiority.
      </p>
    </div>

    <div class="lattice-container">
      <svg class="lattice-svg" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
        <path d="M0,100 C200,100 400,500 600,300 S1000,100 1200,500" stroke="#e2e8f0" stroke-width="1" />
        <path class="path-active" d="M0,100 C200,100 400,500 600,300 S1000,100 1200,500" stroke="#14b8a6" stroke-width="2" />
      </svg>

      <div class="lattice-nodes">
        <div class="lattice-node reveal n-top">
          <div class="node-point"></div>
          <div class="node-content">
            <span class="node-num">01</span>
            <h3>End-to-End Supply Chain</h3>
            <p>Requirements analysis through to last-mile delivery under one accountable partner.</p>
          </div>
        </div>

        <div class="lattice-node reveal n-bottom">
          <div class="node-point"></div>
          <div class="node-content">
            <span class="node-num">02</span>
            <h3>Proven Governance</h3>
            <p>Full audit trails and international procurement standards built into every operation.</p>
          </div>
        </div>

        <div class="lattice-node reveal n-top">
          <div class="node-point"></div>
          <div class="node-content">
            <span class="node-num">03</span>
            <h3>Institutional Credibility</h3>
            <p>Backed by MMT Care’s track record in multi-million-dollar government programmes.</p>
          </div>
        </div>

        <div class="lattice-node reveal n-bottom">
          <div class="node-point"></div>
          <div class="node-content">
            <span class="node-num">04</span>
            <h3>Global Sourcing</h3>
            <p>Networks across 50+ countries enabling competitive sourcing for any category.</p>
          </div>
        </div>

        <div class="lattice-node reveal n-top">
          <div class="node-point"></div>
          <div class="node-content">
            <span class="node-num">05</span>
            <h3>Complex Operations</h3>
            <p>Proven experience delivering in conflict-affected regions and fragile states.</p>
          </div>
        </div>

        <div class="lattice-node reveal n-bottom">
          <div class="node-point"></div>
          <div class="node-content">
            <span class="node-num">06</span>
            <h3>Emergency Readiness</h3>
            <p>24/7 activation for crisis logistics with pre-qualified freight routes.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section-mmt-dashboard" id="positioning" aria-labelledby="positioning-heading">
  <div class="matrix-grid"></div>
  
  <div class="container">
    <div class="dashboard-wrapper reveal">
      
      <div class="dashboard-core">
        <div class="core-header">
          <span class="status-dot"></span>
          <span class="core-label">SYSTEM_POSITION: STABLE</span>
        </div>
        
        <div class="core-content">
          <span class="section-label">Core Commitment</span>
          <h2 id="positioning-heading">Strategic <span class="teal-text">Alignment</span></h2>
          
          <div class="quote-block">
            <p class="quote-block-text">"We manage the entire supply chain process from sourcing to last-mile delivery—matching the position of the world's leading procurement and logistics organisations."</p>
            <div class="quote-footer">
              <span class="source-tag">MMT_ALLIANCE // AUTH_01</span>
            </div>
          </div>
        </div>

        <div class="dashboard-stats">
          <div class="stat-module">
            <span class="stat-val">50+</span>
            <span class="stat-unit">GLOBAL_NODES</span>
          </div>
          <div class="stat-module">
            <span class="stat-val">24/7</span>
            <span class="stat-unit">OPS_SUPPORT</span>
          </div>
        </div>
      </div>

      <div class="module-feed">
        
        <div class="data-module reveal reveal-delay-1">
          <div class="module-line"></div>
          <div class="module-body">
            <div class="module-header">
              <span class="module-id">MOD_01</span>
              <h3>Procurement Expertise</h3>
            </div>
            <p>Deep experience in structured procurement across medical, food, and technical goods.</p>
            <div class="module-tags">
              <span>TENDER_MGMT</span>
              <span>VENDOR_EVAL</span>
              <span>NEGOTIATION</span>
            </div>
          </div>
        </div>

        <div class="data-module reveal reveal-delay-2">
          <div class="module-line"></div>
          <div class="module-body">
            <div class="module-header">
              <span class="module-id">MOD_02</span>
              <h3>Supply Chain Control</h3>
            </div>
            <p>End-to-end visibility and control from supplier contract to delivery confirmation.</p>
            <div class="module-tags">
              <span>RT_TRACKING</span>
              <span>QA_LOGISTICS</span>
              <span>DELIVERY_VER</span>
            </div>
          </div>
        </div>

        <div class="data-module reveal reveal-delay-3">
          <div class="module-line"></div>
          <div class="module-body">
            <div class="module-header">
              <span class="module-id">MOD_03</span>
              <h3>Governance Frameworks</h3>
            </div>
            <p>Transparent processes and compliance structures aligned to international standards.</p>
            <div class="module-tags">
              <span>AUDIT_READY</span>
              <span>ETHICAL_SRC</span>
              <span>COMPLIANCE</span>
            </div>
          </div>
        </div>

        <div class="data-module reveal reveal-delay-4">
          <div class="module-line"></div>
          <div class="module-body">
            <div class="module-header">
              <span class="module-id">MOD_04</span>
              <h3>Institutional Strength</h3>
            </div>
            <p>Group backing providing the financial credibility and scale required by global buyers.</p>
            <div class="module-tags">
              <span>FIN_ACCOUNT</span>
              <span>MULTI_STATE</span>
              <span>GOV_TRUST</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<section class="section-mmt-intel" id="metrics" aria-labelledby="metrics-heading">
  <div class="matrix-grid"></div>
  
  <div class="container">
    <div class="section-header section-header--center reveal">
      <span class="section-label">Institutional Capacity</span>
      <h2 id="metrics-heading">Operational <span class="teal-text">Briefing</span></h2>
      <div class="divider mx-auto"></div>
    </div>

    <div class="intel-brief-stack">
      
      <div class="intel-item reveal">
        <div class="intel-visual data-right">
          <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop" alt="UN Partnership" loading="lazy">
          <span class="visual-tag">[ LOG_50_GLOBAL ]</span>
        </div>
        <div class="intel-data text-left">
          <div class="data-header">
            <span class="data-num">50<span class="teal-text">+</span></span>
            <h3>Countries Served</h3>
          </div>
          <p>End-to-end supply chain integration activated across 50+ diverse global environments.</p>
          <div class="status-bar"><span class="status-active">STATUS: ACTIVE // COORD_ALPHA</span></div>
        </div>
      </div>

      <div class="intel-item reveal">
        <div class="intel-data text-right">
          <div class="data-header">
            <span class="data-num">24/7</span>
            <h3>Emergency Response</h3>
          </div>
          <p>Crisis-ready logistics activated rapidly to deliver essential goods in disaster-affected regions.</p>
          <div class="status-bar"><span class="status-urgent">STATUS: URGENT // DEPLOY_ACTIVE</span></div>
        </div>
        <div class="intel-visual data-left">
          <img src="https://hsiassetstorage.sfo2.digitaloceanspaces.com/transforms/blogimages/26619/emergency-response-what-to-do-when-disaster-strikes-vivid-learning-systems_d4bd353bac6a5f3a10ab94d9650d3531.jpg" alt="Emergency response" loading="lazy">
          <span class="visual-tag">[ LOG_REQ_247 ]</span>
        </div>
      </div>

      <div class="intel-item reveal">
        <div class="intel-visual data-right">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" alt="Compliance meeting" loading="lazy">
          <span class="visual-tag">[ LOG_AUDIT_100 ]</span>
        </div>
        <div class="intel-data text-left">
          <div class="data-header">
            <span class="data-num">100<span class="teal-text">%</span></span>
            <h3>Compliance Rate</h3>
          </div>
          <p>Structured procurement processes, full audit trails, and international standards adherence.</p>
          <div class="status-bar"><span class="status-active">STATUS: ACTIVE // ISO_ALIGN</span></div>
        </div>
      </div>

    </div>
  </div>
</section>
<!-- ===== FAQ SECTION (SEO) ===== -->
<section class="section-mmt-faq" id="faq" aria-labelledby="faq-heading">
  <div class="matrix-grid"></div>
  
  <div class="container">
    <div class="section-header section-header--center reveal">
      <span class="section-label">Knowledge Base</span>
      <h2 id="faq-heading">Capability <span class="teal-text">Protocol</span></h2>
      <div class="divider mx-auto"></div>
    </div>

    <div class="faq-terminal reveal">
      <div class="faq-index">
        <div class="index-header">QUESTION_INDEX // 04_ENTRIES</div>
        
        <button class="faq-nav active" data-target="q1">
          <span class="nav-id">01</span>
          <span class="nav-text">Unique Value Proposition</span>
        </button>

        <button class="faq-nav" data-target="q2">
          <span class="nav-id">02</span>
          <span class="nav-text">Compliance & Governance</span>
        </button>

        <button class="faq-nav" data-target="q3">
          <span class="nav-id">03</span>
          <span class="nav-text">Emergency Response Ops</span>
        </button>

        <button class="faq-nav" data-target="q4">
          <span class="nav-id">04</span>
          <span class="nav-text">Conflict-Affected Logistics</span>
        </button>
      </div>

      <div class="faq-viewport">
        <div class="viewport-header">RESPONSE_STREAM</div>
        
        <div class="faq-response active" id="q1">
          <span class="resp-label">Question:</span>
          <h3>What makes MMT Alliance different from other procurement companies?</h3>
          <p>We combine institutional credibility (backed by MMT Care's government contract delivery) with global sourcing reach across 50+ countries, plus the agility to operate in complex and fragile environments.</p>
        </div>

        <div class="faq-response" id="q2">
          <span class="resp-label">Question:</span>
          <h3>What compliance standards do you follow?</h3>
          <p>We follow UN procurement guidelines, ISO standards, and maintain full audit-ready documentation for all transactions. Our processes are built to meet government and institutional buyer requirements.</p>
        </div>

        <div class="faq-response" id="q3">
          <span class="resp-label">Question:</span>
          <h3>Can you handle emergency procurement requirements?</h3>
          <p>Yes. Our emergency response team operates 24/7 and can activate supply operations within hours of a crisis declaration, with typical deployment of critical supplies within 72 hours.</p>
        </div>

        <div class="faq-response" id="q4">
          <span class="resp-label">Question:</span>
          <h3>Do you have experience in conflict-affected regions?</h3>
          <p>Yes, we have proven capability operating in complex and fragile environments with security coordination, risk mitigation protocols, and established local partner networks.</p>
        </div>
      </div>
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