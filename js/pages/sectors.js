/* ============================================================
   pages/sectors.js — Sectors page render (ENHANCED)
   ============================================================ */

const SectorsPage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== SEO SCHEMA MARKUP ===== -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "MMT Alliance - Sectors We Serve",
        "description": "Deep expertise across governments, UN agencies, NGOs, humanitarian relief, and infrastructure development sectors.",
        "areaServed": {
          "@type": "Country",
          "name": "Global - 50+ Countries"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Sector Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Government Procurement",
                "description": "Compliance-first procurement for national and regional governments"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "UN Agency Support",
                "description": "UN-aligned vendor registration and procurement services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "NGO Partnerships",
                "description": "Cost-effective procurement for non-governmental organisations"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Humanitarian Relief",
                "description": "Emergency supply operations for disaster-affected regions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Infrastructure Development",
                "description": "Multi-year supply chain management for development projects"
              }
            }
          ]
        }
      }
      </script>

      <!-- ===== HERO SECTION ===== -->
      <div class="page-hero page-hero--sectors">
        <div class="hero-bg-overlay"></div>
        <div class="container page-hero-content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/" aria-label="Home">Home</a>
            <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span aria-current="page">Sectors</span>
          </nav>
          
          <h1 class="hero-title">
            <span class="title-line">Sectors We</span>
            <span class="title-line">Serve</span>
          </h1>
          
          <p class="hero-subtitle">
            Deep expertise across the sectors that drive global procurement. We understand your 
            compliance environment, your buyers, and what it takes to win and deliver contracts.
          </p>
        </div>
      </div>

      <!-- ===== SECTOR OVERVIEW GRID ===== -->
      <section class="section section-sectors-overview" aria-labelledby="sectors-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">Our Expertise</span>
            <h2 id="sectors-heading">Five Core Sectors</h2>
            <div class="divider"></div>
            <p class="section-intro">
              We've built deep sector-specific knowledge to ensure every procurement, supply, 
              and logistics operation meets the unique standards of your industry.
            </p>
          </div>
          
          <div class="sectors-overview-grid">
            <a href="#governments" class="sector-overview-card reveal reveal-delay-1">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="card-number">01</div>
              <h3>Governments</h3>
              <p>Compliance-first procurement for national and regional government programmes</p>
              
            </a>
            
            <a href="#un" class="sector-overview-card reveal reveal-delay-2">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="card-number">02</div>
              <h3>United Nations</h3>
              <p>UN-aligned vendor registration and procurement services across all agencies</p>
              
            </a>
            
            <a href="#ngos" class="sector-overview-card reveal reveal-delay-3">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="card-number">03</div>
              <h3>NGOs</h3>
              <p>Cost-effective, donor-compliant procurement for non-governmental organisations</p>
              
            </a>
            
            <a href="#humanitarian" class="sector-overview-card reveal reveal-delay-4">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="card-number">04</div>
              <h3>Humanitarian Relief</h3>
              <p>Emergency supply operations activated within hours for disaster response</p>
              
            </a>
            
            <a href="#infrastructure" class="sector-overview-card reveal reveal-delay-5">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="card-number">05</div>
              <h3>Infrastructure</h3>
              <p>Multi-year supply chain management for development and construction projects</p>
              
            </a>
          </div>
        </div>
      </section>

      <!-- ===== SECTOR 01: GOVERNMENTS ===== -->
      <section class="section sector-detail-section" id="governments" aria-labelledby="governments-heading">
        <div class="container">
          <div class="sector-detail-grid">
            <div class="sector-detail-content reveal">
              <span class="sector-label">Sector 01</span>
              <h2 id="governments-heading">Governments</h2>
              <div class="divider"></div>
              <p class="lead">
                National and regional governments require procurement partners with proven compliance 
                records, financial accountability, and the scale to deliver across complex, 
                multi-stakeholder environments.
              </p>
              <p>
                MMT Alliance brings institutional credibility—backed by MMT Care's track record in 
                government contract delivery—combined with global sourcing reach and end-to-end 
                supply chain execution.
              </p>
              
              <div class="sector-features">
                <div class="sector-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Compliance-First Approach</h4>
                    <p>All procurement processes are structured to meet government audit and transparency requirements.</p>
                  </div>
                </div>
                
                <div class="sector-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Financial Accountability</h4>
                    <p>Backed by an established group with a proven history of multi-million-dollar government contract delivery.</p>
                  </div>
                </div>
                
                <div class="sector-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Scalable Delivery</h4>
                    <p>Infrastructure and supplier networks capable of handling large-volume, multi-country government programmes.</p>
                  </div>
                </div>
              </div>
              
              <div class="sector-cta">
                <a href="/contact" class="btn btn-primary">
                  Discuss Government Procurement
                  <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </a>
              </div>
            </div>
            
            <div class="sector-detail-visual reveal reveal-delay-2">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1000&fit=crop" alt="Government buildings and institutional procurement" loading="lazy" width="800" height="1000">
                <div class="visual-overlay">
                  <div class="visual-stat">
                    <span class="stat-value">50+</span>
                    <span class="stat-label">Countries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== SECTOR 02: UN ===== -->
      <section class="section section--alt sector-detail-section" id="un" aria-labelledby="un-heading">
        <div class="container">
          <div class="sector-detail-grid sector-detail-grid--reverse">
            <div class="sector-detail-visual reveal">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=1000&fit=crop" alt="United Nations global operations" loading="lazy" width="800" height="1000">
                <div class="visual-badge">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2"/></svg>
                  <span>UN Aligned</span>
                </div>
              </div>
            </div>
            
            <div class="sector-detail-content reveal reveal-delay-2">
              <span class="sector-label">Sector 02</span>
              <h2 id="un-heading">United Nations &amp; International Organisations</h2>
              <div class="divider"></div>
              <p class="lead">
                UN agencies and multilateral organisations operate under strict vendor registration, 
                ethical sourcing, and delivery standards. MMT Alliance is built to meet and 
                exceed these requirements.
              </p>
              
              <div class="un-standards">
                <div class="standard-item">
                  <div class="standard-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>UN Vendor Standards</h4>
                    <p>Our processes align with UNGM vendor registration requirements and UN procurement guidelines.</p>
                  </div>
                </div>
                
                <div class="standard-item">
                  <div class="standard-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Global Reach</h4>
                    <p>Supply capability across more than 50 countries, including challenging access environments.</p>
                  </div>
                </div>
                
                <div class="standard-item">
                  <div class="standard-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Full Documentation</h4>
                    <p>Complete audit trails, delivery confirmations, and financial reporting for all UN-aligned engagements.</p>
                  </div>
                </div>
              </div>
              
              <div class="sector-cta">
                <a href="/contact" class="btn btn-primary">
                  UN Vendor Registration
                  <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== SECTOR 03: NGOS ===== -->
      <section class="section sector-detail-section" id="ngos" aria-labelledby="ngos-heading">
        <div class="container">
          <div class="sector-detail-grid">
            <div class="sector-detail-content reveal">
              <span class="sector-label">Sector 03</span>
              <h2 id="ngos-heading">NGOs</h2>
              <div class="divider"></div>
              <p class="lead">
                Non-governmental organisations require cost-effective, flexible procurement partners 
                who understand donor reporting requirements and field-level delivery realities.
              </p>
              
              <div class="quote-box">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                <p>"NGOs need a procurement partner that matches their mission—agile, accountable, and committed to making every dollar count in the field."</p>
                <span>MMT Alliance Approach to NGO Partnerships</span>
              </div>
              
              <div class="sector-features">
                <div class="sector-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                  </div>
                  <div>
                    <h4>Donor-Compliant Documentation</h4>
                    <p>Complete audit-ready procurement records for all major donors.</p>
                  </div>
                </div>
                
                <div class="sector-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                  </div>
                  <div>
                    <h4>Value-for-Money Sourcing</h4>
                    <p>Competitive pricing without compromising quality or compliance.</p>
                  </div>
                </div>
                
                <div class="sector-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                  </div>
                  <div>
                    <h4>Flexible Contracts</h4>
                    <p>Adaptable arrangements to match NGO funding cycles and requirements.</p>
                  </div>
                </div>
                
                <div class="sector-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                  </div>
                  <div>
                    <h4>Field-Level Delivery</h4>
                    <p>Last-mile capability to reach remote and challenging locations.</p>
                  </div>
                </div>
              </div>
              
              <div class="sector-cta">
                <a href="/contact" class="btn btn-primary">Partner With Us</a>
              </div>
            </div>
            
            <div class="sector-detail-visual reveal reveal-delay-2">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=1000&fit=crop" alt="NGO humanitarian work in the field" loading="lazy" width="800" height="1000">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== SECTOR 04: HUMANITARIAN ===== -->
      <section class="section section--alt sector-detail-section" id="humanitarian" aria-labelledby="humanitarian-heading">
        <div class="container">
          <div class="humanitarian-hero reveal">
            <div class="humanitarian-content">
              <span class="sector-label">Sector 04</span>
              <h2 id="humanitarian-heading">Humanitarian &amp; Disaster Relief</h2>
              <div class="divider"></div>
              <p class="lead">
                In humanitarian crises, speed and reliability are not optional. Our emergency 
                supply capability is purpose-built for rapid activation in disaster-affected 
                environments.
              </p>
            </div>
            <div class="humanitarian-stats">
              <div class="humanitarian-stat">
                <span class="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </span>
                <span class="stat-value">72hrs</span>
                <span class="stat-label">Average Deployment</span>
              </div>
              <div class="humanitarian-stat">
                <span class="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="1.5"/></svg>
                </span>
                <span class="stat-value">24/7</span>
                <span class="stat-label">Response Team</span>
              </div>
            </div>
          </div>
          
          <div class="humanitarian-cards">
            <div class="humanitarian-card reveal reveal-delay-1">
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop" alt="Rapid emergency deployment" loading="lazy" width="600" height="400">
              </div>
              <div class="card-content">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </div>
                <h3>Rapid Activation</h3>
                <p>Emergency supply operations activated within hours of disaster declaration, 24/7 coordination.</p>
              </div>
            </div>
            
            <div class="humanitarian-card reveal reveal-delay-2">
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop" alt="Medical and WASH supplies" loading="lazy" width="600" height="400">
              </div>
              <div class="card-content">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </div>
                <h3>Medical &amp; WASH</h3>
                <p>Medical consumables, water purification, sanitation kits—sourced and dispatched for emergency response.</p>
              </div>
            </div>
            
            <div class="humanitarian-card reveal reveal-delay-3">
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop" alt="Shelter and NFI distribution" loading="lazy" width="600" height="400">
              </div>
              <div class="card-content">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
                </div>
                <h3>Shelter &amp; NFI</h3>
                <p>Emergency shelter materials, non-food items, and household kits delivered to distribution points.</p>
              </div>
            </div>
          </div>
          
          <div class="sector-cta sector-cta--center reveal reveal-delay-4">
            <a href="/contact" class="btn btn-primary btn-lg">
              <svg viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 11 19.79 19.79 0 0 1 1.27 2.2 2 2 0 0 1 3.26 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 15h1z" stroke="currentColor" stroke-width="1.5"/></svg>
              Activate Emergency Response
            </a>
            <p class="cta-note">Available 24/7 for urgent humanitarian crises</p>
          </div>
        </div>
      </section>

      <!-- ===== SECTOR 05: INFRASTRUCTURE ===== -->
      <section class="section sector-detail-section" id="infrastructure" aria-labelledby="infrastructure-heading">
        <div class="container">
          <div class="sector-detail-grid sector-detail-grid--reverse">
            <div class="sector-detail-visual reveal">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=1000&fit=crop" alt="Infrastructure and development projects" loading="lazy" width="800" height="1000">
                <div class="visual-overlay">
                  <div class="visual-stat">
                    <span class="stat-value">Multi-Year</span>
                    <span class="stat-label">Programme Support</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="sector-detail-content reveal reveal-delay-2">
              <span class="sector-label">Sector 05</span>
              <h2 id="infrastructure-heading">Infrastructure &amp; Development</h2>
              <div class="divider"></div>
              <p class="lead">
                Development banks, bilateral donors, and infrastructure project leads require 
                procurement partners with deep supply chain expertise and capacity to coordinate 
                complex, multi-year delivery programmes.
              </p>
              
              <div class="infrastructure-features">
                <div class="infra-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Development Programme Support</h4>
                    <p>Multi-year supply chain management for infrastructure and development projects in emerging markets.</p>
                  </div>
                </div>
                
                <div class="infra-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Donor Compliance</h4>
                    <p>All procurement aligned to World Bank, ADB, USAID, and bilateral donor procurement requirements.</p>
                  </div>
                </div>
                
                <div class="infra-feature">
                  <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Global Supplier Network</h4>
                    <p>International supplier relationships for construction materials, technical equipment, and specialist goods.</p>
                  </div>
                </div>
              </div>
              
              <div class="sector-cta">
                <a href="/contact" class="btn btn-primary">
                  Discuss Your Project
                  <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== FAQ SECTION (SEO) ===== -->
      <section class="section section-faq" aria-labelledby="faq-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">FAQ</span>
            <h2 id="faq-heading">Sector-Specific Questions</h2>
            <div class="divider"></div>
          </div>
          
          <div class="faq-grid">
            <details class="faq-item reveal reveal-delay-1">
              <summary>
                <span class="faq-question">Which government agencies do you work with?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>We work with national and regional government procurement agencies across multiple continents, with particular expertise in Middle East, Africa, and Asia-Pacific regions.</p>
              </div>
            </details>
            
            <details class="faq-item reveal reveal-delay-2">
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
            
            <details class="faq-item reveal reveal-delay-3">
              <summary>
                <span class="faq-question">Can you support emergency humanitarian responses?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Absolutely. Our emergency response team operates 24/7 and can activate supply operations within hours of a crisis declaration, with typical deployment within 72 hours.</p>
              </div>
            </details>
            
            <details class="faq-item reveal reveal-delay-4">
              <summary>
                <span class="faq-question">Do you work with development banks?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Yes, we support projects funded by World Bank, ADB, USAID, and other bilateral donors, with full compliance to their procurement requirements.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <!-- ===== CTA SECTION ===== -->
      <section class="cta-band cta-band--sectors" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cta-heading">We Understand Your World</h2>
            <p>Whatever your sector, we bring the expertise, compliance track record, and delivery capability to support your operations.</p>
            <div class="cta-actions">
              <a href="/contact" class="btn btn-primary btn-lg">
                Get in Touch
                <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="/services" class="btn btn-outline-white btn-lg">
                Our Services
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

Router.register('/sectors', SectorsPage.render.bind(SectorsPage));