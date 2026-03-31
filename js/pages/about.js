/* ============================================================
   pages/about.js — About page render (FINAL - NO EMOJIS)
   ============================================================ */

const AboutPage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== SEO SCHEMA MARKUP ===== -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "MMT Alliance - Global Procurement & Logistics Partner",
        "description": "End-to-end procurement, sourcing, supply, and delivery partner supporting governments, UN agencies, and international organisations across 50+ countries.",
        "url": "https://mmtalliance.com/about",
        "logo": "https://mmtalliance.com/assets/logo.jpg",
        "foundingDate": "2024",
        "areaServed": {
          "@type": "Country",
          "name": "Global - 50+ Countries"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Core Capabilities",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Logistics & Supply Chain Solutions",
                "description": "International freight, warehousing, distribution, and last-mile delivery"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "General Procurement & Bulk Supply",
                "description": "Multi-category procurement and strategic sourcing across global networks"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Medical & Humanitarian Supply",
                "description": "Critical response capability for emergency and crisis situations"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Construction & Infrastructure Supply",
                "description": "Supply of construction materials and infrastructure components"
              }
            }
          ]
        },
        "parentOrganization": {
          "@type": "Organization",
          "name": "MMT Care",
          "location": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AU"
            }
          }
        }
      }
      </script>

      <!-- ===== HERO SECTION ===== -->
      <div class="page-hero page-hero--about">
        <div class="hero-bg-overlay"></div>
        <div class="hero-pattern"></div>
        <div class="container page-hero-content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/" aria-label="Home">Home</a>
            <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span aria-current="page">About</span>
          </nav>
          
          <h1 class="hero-title">
            <span class="title-line">About</span>
            <span class="title-line">MMT Alliance</span>
          </h1>
          
          <p class="hero-subtitle">
            A globally positioned procurement and logistics partner, backed by institutional strength, 
            built to operate in the world's most demanding environments.
          </p>
        </div>
        
        <div class="hero-scroll-indicator">
          <span>Learn more</span>
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </div>
      </div>

      <!-- ===== COMPANY OVERVIEW ===== -->
      <section class="section section-overview" aria-labelledby="overview-heading">
        <div class="container">
          <div class="overview-grid">
            <div class="overview-content reveal">
              <span class="section-label">Company Overview</span>
              <h2 id="overview-heading">Global Procurement • Supply • Logistics • Delivery</h2>
              <div class="divider"></div>
              
              <p class="lead">
MMT Alliance is a global end-to-end procurement, sourcing, supply, and delivery partner, supporting governments, United Nations agencies, and international organisations in executing critical supply and infrastructure requirements.
              </p>
              
              <p>
                Backed by our parent company <strong>MMT Care</strong>, we bring a proven track record of delivering essential, government-funded services at scale.
              </p>
              <h3 class="subheading">MMT Care – Capability & Strength</h3>
              <p>
                Trusted and approved NDIS provider managing multi-million-dollar government funding and grants
Delivers disability and community services across multiple Australian states
Provides Supported Independent Living (SIL), in-home care, community access, and complex care
Operates with strong compliance, governance, and regulatory discipline
Focused on person-centred outcomes for individuals with complex needs
              </p>
              <h3 class="subheading">Operational & Logistics Capability</h3>
              <p>
              Coordinates large-scale workforce deployment across Australia
Manages scheduling, service delivery, and multi-region operations
Ensures efficiency, reliability, and consistency across complex service networks
Proven capability in logistics coordination and operational execution at scale
              </p>
              <p>
              Leveraging this foundation, MMT Alliance operates with strong governance, financial credibility, and operational discipline. We specialise in rapid sourcing, strategic procurement, and reliable delivery of essential goods and services—particularly in complex, high-demand, and resource-constrained environments.
              </p>
              
              <div class="overview-highlights">
                <div class="highlight-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span>End-to-end accountability</span>
                </div>
                <div class="highlight-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span>Asset-light, scalable model</span>
                </div>
                <div class="highlight-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span>Global supplier ecosystem</span>
                </div>
              </div>
            </div>
            
            <div class="overview-visual reveal reveal-delay-2">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1000&fit=crop" alt="MMT Alliance global operations" loading="lazy" width="800" height="1000">
                <div class="visual-overlay">
                  <div class="visual-stat">
                    <span class="stat-number">End-to-End</span>
                    <span class="stat-label">Supply Chain Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <!-- ===== BUSINESS MODEL ===== -->
      <section class="section section-business-model" aria-labelledby="model-heading">
        <div class="container">
          <div class="model-grid">
            <div class="model-content reveal">
              <span class="section-label">Business Model Advantage</span>
              <h2 id="model-heading">Asset-Light. Outcome-Focused.</h2>
              <div class="divider"></div>
              <p class="lead">
                MMT Alliance operates a non-manufacturing, asset-light model, enabling flexibility, 
                speed, and scalability across diverse client needs.
              </p>
              
              <div class="model-features">
                <div class="model-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Global Supplier Ecosystem</h4>
                    <p>Access to vetted suppliers across multiple continents for competitive sourcing.</p>
                  </div>
                </div>
                
                <div class="model-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </div>
                  <div>
                    <h4>Faster Procurement Cycles</h4>
                    <p>Streamlined processes and pre-qualified suppliers enable rapid deployment.</p>
                  </div>
                </div>
                
                <div class="model-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Competitive Pricing</h4>
                    <p>Strategic sourcing and volume aggregation deliver cost efficiency without compromising quality.</p>
                  </div>
                </div>
                
                <div class="model-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Multi-Industry Flexibility</h4>
                    <p>Capability to serve governments, UN agencies, NGOs, and private sector clients.</p>
                  </div>
                </div>
              </div>
              
              <div class="model-outcome">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                <p>"This model allows us to deliver outcomes—not just products."</p>
              </div>
            </div>
            
            <div class="model-visual reveal reveal-delay-2">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=1000&fit=crop" alt="Strategic sourcing and supplier network" loading="lazy" width="800" height="1000">
                <div class="visual-badge">
                  <span>Asset-Light</span>
                  <span>Scalable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== CORE CAPABILITIES ===== -->
      <section class="section section--alt section-capabilities" aria-labelledby="capabilities-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">Core Capabilities</span>
            <h2 id="capabilities-heading">UNSPSC-Aligned Service Portfolio</h2>
            <div class="divider"></div>
            <p class="section-intro">
              Eight integrated capability areas, aligned with international procurement standards, 
              enabling us to serve diverse client needs across multiple sectors.
            </p>
          </div>
          
          <div class="capabilities-grid">
            <div class="capability-card reveal reveal-delay-1">
              <div class="capability-header">
                <span class="capability-number">01</span>
              </div>
              <h3>Logistics & Supply Chain Solutions</h3>
              <p class="capability-desc">Fully integrated logistics and supply chain services for complex environments.</p>
              <ul class="capability-list">
                <li>International freight (air, sea, land)</li>
                <li>Warehousing and inventory management</li>
                <li>Distribution and last-mile delivery</li>
                <li>Humanitarian logistics support</li>
              </ul>
            </div>
            
            <div class="capability-card reveal reveal-delay-2">
              <div class="capability-header">
                <span class="capability-number">02</span>
              </div>
              <h3>General Procurement & Bulk Supply</h3>
              <p class="capability-desc">Multi-category procurement and strategic sourcing across global networks.</p>
              <ul class="capability-list">
                <li>Bulk goods sourcing and aggregation</li>
                <li>Packaging and storage solutions</li>
                <li>Strategic global supplier networks</li>
                <li>Quality verification protocols</li>
              </ul>
            </div>
            
            <div class="capability-card reveal reveal-delay-3">
              <div class="capability-header">
                <span class="capability-number">03</span>
              </div>
              <h3>Construction & Infrastructure Supply</h3>
              <p class="capability-desc">Supply of construction materials and infrastructure components for large-scale projects.</p>
              <ul class="capability-list">
                <li>Construction materials sourcing</li>
                <li>Equipment for civil projects</li>
                <li>End-to-end procurement support</li>
                <li>Project coordination services</li>
              </ul>
            </div>
            
            <div class="capability-card reveal reveal-delay-4">
              <div class="capability-header">
                <span class="capability-number">04</span>
              </div>
              <h3>Medical & Humanitarian Supply</h3>
              <p class="capability-desc">Critical response capability for emergency and crisis situations.</p>
              <ul class="capability-list">
                <li>Medical equipment and consumables</li>
                <li>Emergency response supplies</li>
                <li>Public health supply solutions</li>
                <li>Humanitarian aid distribution</li>
              </ul>
            </div>
            
            <div class="capability-card reveal reveal-delay-5">
              <div class="capability-header">
                <span class="capability-number">05</span>
              </div>
              <h3>Food & Relief Supply</h3>
              <p class="capability-desc">High-volume deployment for food security and disaster response programs.</p>
              <ul class="capability-list">
                <li>Bulk food sourcing and distribution</li>
                <li>Emergency relief packages</li>
                <li>Refugee and crisis program support</li>
                <li>Food security solutions</li>
              </ul>
            </div>
            
            <div class="capability-card reveal reveal-delay-6">
              <div class="capability-header">
                <span class="capability-number">06</span>
              </div>
              <h3>Industrial & Equipment Supply</h3>
              <p class="capability-desc">Industrial machinery, operational equipment, and technical procurement.</p>
              <ul class="capability-list">
                <li>Industrial machinery sourcing</li>
                <li>Tools and technical equipment</li>
                <li>Energy and power equipment</li>
                <li>Mining and heavy industry procurement</li>
              </ul>
            </div>
            
            <div class="capability-card reveal reveal-delay-7">
              <div class="capability-header">
                <span class="capability-number">07</span>
              </div>
              <h3>Technology Supply & Services</h3>
              <p class="capability-desc">IT infrastructure, telecommunications, and technical deployment support.</p>
              <ul class="capability-list">
                <li>IT hardware and infrastructure</li>
                <li>Telecommunications systems</li>
                <li>Technology deployment services</li>
                <li>Technical operational support</li>
              </ul>
            </div>
            
            <div class="capability-card reveal reveal-delay-8">
              <div class="capability-header">
                <span class="capability-number">08</span>
              </div>
              <h3>Security & Safety Supply</h3>
              <p class="capability-desc">Personal protective equipment, security systems, and safety infrastructure.</p>
              <ul class="capability-list">
                <li>Personal protective equipment (PPE)</li>
                <li>Security systems and equipment</li>
                <li>Safety infrastructure solutions</li>
                <li>Emergency response gear</li>
              </ul>
            </div>
          </div>
          
          <div class="capabilities-cta reveal">
            <a href="/services" class="btn btn-primary">
              Explore All Services
              <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      <!-- ===== OPERATIONAL STRENGTHS ===== -->
      <section class="section section-strengths" aria-labelledby="strengths-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">Operational Strengths</span>
            <h2 id="strengths-heading">What Sets Us Apart</h2>
            <div class="divider"></div>
          </div>
          
          <div class="strengths-grid">
            <div class="strength-item reveal reveal-delay-1">
              <div class="strength-icon">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Global Supplier Network</h3>
              <p>Access to vetted suppliers across multiple continents for competitive, reliable sourcing.</p>
            </div>
            
            <div class="strength-item reveal reveal-delay-2">
              <div class="strength-icon">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
              <h3>Rapid Deployment</h3>
              <p>Fast turnaround for urgent procurement needs with 24/7 emergency response capability.</p>
            </div>
            
            <div class="strength-item reveal reveal-delay-3">
              <div class="strength-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>End-to-End Accountability</h3>
              <p>Single point of responsibility for full delivery, from sourcing through final handover.</p>
            </div>
            
            <div class="strength-item reveal reveal-delay-4">
              <div class="strength-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Scalable Operations</h3>
              <p>From small contracts to large multi-country projects, we scale to meet your demands.</p>
            </div>
            
            <div class="strength-item reveal reveal-delay-5">
              <div class="strength-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Cost Efficiency</h3>
              <p>Competitive pricing through strategic sourcing and volume aggregation without quality compromise.</p>
            </div>
            
            <div class="strength-item reveal reveal-delay-6">
              <div class="strength-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Complex Environment Expertise</h3>
              <p>Proven capability operating in conflict-affected, remote, and resource-constrained regions.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== GOVERNANCE & COMPLIANCE ===== -->
      <section class="section section--alt section-governance" aria-labelledby="governance-heading">
        <div class="container">
          <div class="governance-grid">
            <div class="governance-content reveal">
              <span class="section-label">Governance & Compliance</span>
              <h2 id="governance-heading">Operating to International Standards</h2>
              <div class="divider"></div>
              <p class="lead">
                MMT Alliance operates in line with international procurement and compliance standards, 
                ensuring transparency, accountability, and ethical practice across all engagements.
              </p>
              
              <div class="compliance-list">
                <div class="compliance-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span>Transparent procurement processes</span>
                </div>
                <div class="compliance-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span>Supplier due diligence and vetting</span>
                </div>
                <div class="compliance-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span>Ethical sourcing practices</span>
                </div>
                <div class="compliance-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span>Contractual accountability and reporting</span>
                </div>
                <div class="compliance-item">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span>Risk-managed delivery frameworks</span>
                </div>
              </div>
            </div>
            
            <div class="governance-visual reveal reveal-delay-2">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=1000&fit=crop" alt="Compliance and governance documentation" loading="lazy" width="800" height="1000">
                <div class="compliance-badges">
                  <span class="compliance-badge">UN Aligned</span>
                  <span class="compliance-badge">ISO Standards</span>
                  <span class="compliance-badge">Audit Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== TARGET CLIENTS & REACH ===== -->
      <section class="section section-clients" aria-labelledby="clients-heading">
        <div class="container">
          <div class="clients-grid">
            <div class="clients-content reveal">
              <span class="section-label">Who We Serve</span>
              <h2 id="clients-heading">Target Clients & Partners</h2>
              <div class="divider"></div>
              
              <div class="client-types">
                <div class="client-type">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <h4>United Nations Agencies</h4>
                </div>
                <div class="client-type">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/></svg>
                  <h4>International NGOs</h4>
                </div>
                <div class="client-type">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" stroke="currentColor" stroke-width="1.5"/></svg>
                  <h4>Government Bodies</h4>
                </div>
                <div class="client-type">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/></svg>
                  <h4>Humanitarian Organisations</h4>
                </div>
                <div class="client-type">
                  <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="1.5"/></svg>
                  <h4>Infrastructure Programs</h4>
                </div>
              </div>
            </div>
            
            <div class="geographic-reach reveal reveal-delay-2">
              <span class="section-label">Geographic Reach</span>
              <h3>Global Operations Across Key Regions</h3>
              <div class="divider"></div>
              
              <div class="regions-list">
                <div class="region-item">
                  <div class="region-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <strong>Middle East</strong>
                    <span>Hub: Dubai, UAE</span>
                  </div>
                </div>
                <div class="region-item">
                  <div class="region-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <strong>Africa</strong>
                    <span>East, West & Southern regions</span>
                  </div>
                </div>
                <div class="region-item">
                  <div class="region-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <strong>Asia-Pacific</strong>
                    <span>Including Australia (MMT Care)</span>
                  </div>
                </div>
                <div class="region-item">
                  <div class="region-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <strong>Europe</strong>
                    <span>Strategic partnerships</span>
                  </div>
                </div>
              </div>
              
              <p class="reach-note">
                With the capability to mobilise quickly into new regions based on client requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== VALUE PROPOSITION ===== -->
      <section class="section section--alt section-value-prop" aria-labelledby="value-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">Value Proposition</span>
            <h2 id="value-heading">Why Partner With MMT Alliance</h2>
            <div class="divider"></div>
          </div>
          
          <div class="value-grid">
            <div class="value-item reveal reveal-delay-1">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
              <h3>Speed</h3>
              <p>Rapid sourcing and execution for time-critical requirements.</p>
            </div>
            
            <div class="value-item reveal reveal-delay-2">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Reliability</h3>
              <p>Consistent delivery in all environments, from stable to complex.</p>
            </div>
            
            <div class="value-item reveal reveal-delay-3">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Flexibility</h3>
              <p>Multi-sector capability to adapt to diverse client needs.</p>
            </div>
            
            <div class="value-item reveal reveal-delay-4">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Scale</h3>
              <p>Ability to grow with project demands, from pilot to multi-country.</p>
            </div>
            
            <div class="value-item reveal reveal-delay-5">
              <div class="value-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <h3>Simplicity</h3>
              <p>One partner, full solution—eliminating coordination complexity.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== CONCLUSION & CTA ===== -->
      <section class="cta-band cta-band--about" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cta-heading">MMT Alliance: Your Trusted Global Partner</h2>
            <p class="cta-intro">
              Positioned as a trusted global procurement and supply partner, capable of delivering 
              critical goods and services across complex environments with efficiency, reliability, and accountability.
            </p>
            <p class="cta-tagline">
              <strong>We do not simply supply products — we deliver complete solutions.</strong>
            </p>
            <div class="cta-actions">
              <a href="/capabilities" class="btn btn-primary btn-lg">
                View Full Capabilities
                <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="/contact" class="btn btn-outline-white btn-lg">
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    `;

    // Initialize animations
    this.initAnimations();
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

    window.addEventListener('scroll', revealOnScroll, { passive: true });
    revealOnScroll(); // Trigger on load
  }
};

Router.register('/about', AboutPage.render.bind(AboutPage));