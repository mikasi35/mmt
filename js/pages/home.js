/* ============================================================
   pages/home.js — Home page render (ENHANCED)
   ============================================================ */

const HomePage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== SEO SCHEMA MARKUP ===== -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "MMT Alliance - Global Procurement & Logistics Partner",
        "description": "End-to-end supply chain management for governments, UN agencies, NGOs, and humanitarian organisations. Global procurement, logistics, and emergency response across 50+ countries.",
        "url": "https://mmtalliance.com",
        "logo": "https://mmtalliance.com/assets/logo.jpg",
        "areaServed": {
          "@type": "Country",
          "name": "Global - 50+ Countries"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Core Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Procurement & Strategic Sourcing",
                "description": "Full sourcing lifecycle management with international procurement standards"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Supply Solutions",
                "description": "Medical supplies, food, shelter materials, and custom-sourced goods"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Logistics & Delivery",
                "description": "Air, sea, and land freight with customs clearance and last-mile delivery"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency Response",
                "description": "Rapid-deployment crisis supply operations activated within hours"
              }
            }
          ]
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "General Enquiries",
          "email": "info@mmtalliance.com",
          "areaServed": "Worldwide"
        }
      }
      </script>

      <!-- ===== HERO SECTION ===== -->
<section class="hero hero--home" aria-label="Homepage hero">
  <div class="hero-bg-image" style="background-image: url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&h=1080&fit=crop')" aria-hidden="true"></div>
  <div class="hero-overlay"></div>
  
  <div class="container hero-content">
    <div class="hero-label reveal">
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/><path d="M6 10a4 4 0 0 1 8 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="10" cy="10" r="1.5" fill="currentColor"/></svg>
      <span>Trusted UN & Government Supply Partner</span>
    </div>
    
    <h1 class="hero-title reveal reveal-delay-1">
      End-to-End Procurement, Sourcing,<br>
      Supply and Delivery Partner
    </h1>
    
    <p class="hero-subtitle reveal reveal-delay-2">
      Integrated solutions for governments, NGOs, and humanitarian operations worldwide.
    </p>
    
    <div class="hero-actions reveal reveal-delay-3">
      <a href="/contact" class="btn btn-primary btn-lg">
        <span>Speak to Our Team</span>
      </a>
      <a href="/capabilities" class="btn btn-outline-white btn-lg">
        <span>Explore Capabilities</span>
      </a>
    </div>
  </div>
</section>

<!-- ===== CAPABILITIES STRIP ===== -->
<div class="capabilities-strip">
  <div class="container">
    <div class="capabilities-list">
      <div class="capability-item reveal reveal-delay-1">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/>
          <path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <span>Global Procurement</span>
      </div>
      
      <div class="capability-item reveal reveal-delay-2">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <span>Humanitarian Supply</span>
      </div>
      
      <div class="capability-item reveal reveal-delay-3">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <span>Infrastructure Support</span>
      </div>
      
      <div class="capability-item reveal reveal-delay-4">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span>Medical & Relief</span>
      </div>
      
      <div class="capability-item reveal reveal-delay-5">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" stroke-width="1.5"/>
          <path d="M16 8h4l3 4v4h-7V8z" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <span>Logistics & Delivery</span>
      </div>
    </div>
  </div>
</div>

    <section class="trust-strip-section">
  <div class="trust-container">
    <div class="trust-header">
      <span class="pulse-dot"></span>
      <p class="trust-label">Empowering the world's most trusted institutions</p>
    </div>
    
    <div class="marquee-viewport">
      <div class="marquee-track">
        
        <div class="marquee-group">
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <span class="badge-text">United Nations</span>
          </div>
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <span class="badge-text">Governments</span>
          </div>
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <span class="badge-text">International NGOs</span>
          </div>
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <span class="badge-text">Humanitarian Orgs</span>
          </div>
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </div>
            <span class="badge-text">Infrastructure Bodies</span>
          </div>
        </div>

        <div class="marquee-group" aria-hidden="true">
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <span class="badge-text">United Nations</span>
          </div>
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <span class="badge-text">Governments</span>
          </div>
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <span class="badge-text">International NGOs</span>
          </div>
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <span class="badge-text">Humanitarian Orgs</span>
          </div>
          <div class="trust-badge">
            <div class="icon-glow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </div>
            <span class="badge-text">Infrastructure Bodies</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


      <section class="section-kinetic-flow" id="services-overview">
  <div class="container">
    
    <div class="section-header section-header--center reveal">
      <span class="section-label">What We Do</span>
      <h2 id="services-heading">Complete Supply Chain Management</h2>
      <div class="divider"></div>
      <p class="section-intro">
        We manage the entire supply chain process from sourcing to last-mile delivery 
        so your mission never stalls.
      </p>
    </div>

    <div class="kinetic-container">
      
      <div class="kinetic-panel reveal" style="--panel-index: 1;">
        <div class="panel-image-wrap">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&q=80" alt="Procurement">
          <div class="panel-overlay"></div>
        </div>
        <div class="panel-content">
          <div class="panel-header">
            <span class="panel-num">01</span>
            <h3>Procurement & <br>Strategic Sourcing</h3>
          </div>
          <div class="panel-detailed-content">
            <p>Rigorous supplier identification, tender management, and contract negotiation for high-stakes missions.</p>
            <ul class="service-list">
              <li class="service-tag" style="color:white;">Supplier identification</li>
              <li class="service-tag" style="color:white;">Tender management</li>
              <li class="service-tag" style="color:white;">Vendor evaluation</li>
            </ul>
            <a href="/services#procurement" class="service-card-link">Learn More <span>→</span></a>
          </div>
        </div>
      </div>

      <div class="kinetic-panel reveal" style="--panel-index: 2;">
        <div class="panel-image-wrap">
          <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1000&q=80" alt="Supply">
          <div class="panel-overlay"></div>
        </div>
        <div class="panel-content">
          <div class="panel-header">
            <span class="panel-num">02</span>
            <h3>Supply <br>Solutions</h3>
          </div>
          <div class="panel-detailed-content">
            <p>Medical supplies, food, and infrastructure materials delivered with absolute precision and compliance.</p>
            <ul class="service-list">
              <li class="service-tag" style="color:white;">Medical supplies</li>
              <li class="service-tag" style="color:white;">Essential goods</li>
              <li class="service-tag" style="color:white;">Custom sourcing</li>
            </ul>
            <a href="/services#supply" class="service-card-link">Learn More <span>→</span></a>
          </div>
        </div>
      </div>

      <div class="kinetic-panel reveal" style="--panel-index: 3;">
        <div class="panel-image-wrap">
          <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1000&q=80" alt="Logistics">
          <div class="panel-overlay"></div>
        </div>
        <div class="panel-content">
          <div class="panel-header">
            <span class="panel-num">03</span>
            <h3>Logistics & <br>Delivery</h3>
          </div>
          <div class="panel-detailed-content">
            <p>Air, sea, and land freight with full customs clearance and assured last-mile delivery worldwide.</p>
            <ul class="service-list">
              <li class="service-tag" style="color:white;">Air / Sea / Land</li>
              <li class="service-tag" style="color:white;">Warehousing</li>
              <li class="service-tag" style="color:white;">Customs clearance</li>
            </ul>
            <a href="/services#logistics" class="service-card-link">Learn More <span>→</span></a>
          </div>
        </div>
      </div>

      <div class="kinetic-panel reveal" style="--panel-index: 4;">
        <div class="panel-image-wrap">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1000&q=80" alt="Emergency">
          <div class="panel-overlay"></div>
        </div>
        <div class="panel-content">
          <div class="panel-header">
            <span class="panel-num">04</span>
            <h3>Emergency <br>Response</h3>
          </div>
          <div class="panel-detailed-content">
            <p>Rapid-deployment crisis operations activated within hours for critical humanitarian needs.</p>
            <ul class="service-list">
              <li class="service-tag" style="color:white;">Rapid deployment</li>
              <li class="service-tag" style="color:white;">24/7 coordination</li>
              <li class="service-tag" style="color:white;">Pre-positioned stock</li>
            </ul>
            <a href="/services#emergency" class="service-card-link">Learn More <span>→</span></a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

     <section class="section-spatial" id="why-us">
  <div class="faint-grid-overlay"></div>
  
  <div class="ghost-heading">MMT_ALLIANCE</div>

  <div class="container spatial-container">
    
    <div class="spatial-header-center reveal">
      <span class="section-label">Why MMT-Alliance</span>
      <h2 id="why-heading">Built to Win Contracts.<br><span class="navy-bold">Designed to Deliver.</span></h2>
      <p class="spatial-intro">
        Institutional credibility meets operational agility — backed by <strong>MMT Care</strong>, 
        delivering multi-million-dollar government-funded programs.
      </p>
    </div>

    <div class="slit-visual reveal">
      <div class="slit s1"></div>
      <div class="slit s2"></div>
      <div class="slit s3"></div>
      <div class="slit s4"></div>
      <div class="slit s5"></div>
    </div>

    <div class="spatial-grid-points">
      <div class="plot-point reveal">
        <div class="plot-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
        </div>
        <div class="plot-tag">01 // SUPPLY_CHAIN</div>
        <h4>End-to-End Orchestration</h4>
        <p>From requirements analysis to last-mile delivery under one partner.</p>
      </div>

      <div class="plot-point reveal">
        <div class="plot-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        </div>
        <div class="plot-tag">02 // GOVERNANCE</div>
        <h4>Proven Compliance</h4>
        <p>Structured procurement, full audit trails, and international standards.</p>
      </div>

      <div class="plot-point reveal">
        <div class="plot-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
        </div>
        <div class="plot-tag">03 // INSTITUTIONAL</div>
        <h4>MMT Care Backing</h4>
        <p>Backed by track records in multi-million-dollar government programs.</p>
      </div>

      <div class="plot-point reveal">
        <div class="plot-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <div class="plot-tag">04 // GLOBAL_REACH</div>
        <h4>50+ Countries</h4>
        <p>International networks enabling competitive sourcing globe-wide.</p>
      </div>

      <div class="plot-point reveal">
        <div class="plot-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
        </div>
        <div class="plot-tag">05 // COMPLEX_OPS</div>
        <h4>Complex Environments</h4>
        <p>Proven capability to operate in conflict-affected or remote zones.</p>
      </div>
    </div>

    <div class="spatial-cta-center">
      <a href="/capabilities" class="btn-spatial">EXPLORE CAPABILITIES // 2026</a>
    </div>
  </div>
</section>



<section class="section-matrix" id="sectors" aria-labelledby="sectors-heading">
  <div class="matrix-grid"></div>
  
  <div class="container-fluid matrix-container">
    
    <div class="matrix-header reveal">
      <span class=""></span>
      <h2 id="sectors-heading">We Understand <span class="teal-text">Your World.</span></h2>
      <p class="section-intro">
        Deep sector expertise enables us to align with procurement standards, compliance 
        requirements, and delivery timelines of each client environment.
      </p>
    </div>

    <div class="matrix-wrapper">
      <div class="conduit-line">
        <div class="conduit-pulse"></div>
      </div>

      <a href="/sectors#governments" class="matrix-node n-left reveal">
        <div class="node-meta">COORD_01 // PUBLIC_SECTOR</div>
        <div class="node-content">
          <div class="node-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <h3>Governments</h3>
          <p>National and regional government procurement requiring full compliance and transparency.</p>
          <span class="node-link">LEARN MORE // 01</span>
        </div>
        <div class="node-connector"></div>
      </a>

      <a href="/sectors#un" class="matrix-node n-right reveal">
        <div class="node-connector"></div>
        <div class="node-meta">COORD_02 // MULTILATERAL</div>
        <div class="node-content">
          <div class="node-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18"/></svg>
          </div>
          <h3>United Nations</h3>
          <p>UN agencies and multilateral bodies with rigorous vendor standards and global reach.</p>
          <span class="node-link">LEARN MORE // 02</span>
        </div>
      </a>

      <a href="/sectors#ngos" class="matrix-node n-left reveal">
        <div class="node-meta">COORD_03 // HUMANITY_OPS</div>
        <div class="node-content">
          <div class="node-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3>NGOs</h3>
          <p>Non-governmental organisations requiring cost-effective, accountable field supply solutions.</p>
          <span class="node-link">LEARN MORE // 03</span>
        </div>
        <div class="node-connector"></div>
      </a>

      <a href="/sectors#humanitarian" class="matrix-node n-right reveal">
        <div class="node-connector"></div>
        <div class="node-meta">COORD_04 // RAPID_DEPLOY</div>
        <div class="node-content">
          <div class="node-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <h3>Humanitarian Relief</h3>
          <p>Crisis-ready supply chains activated rapidly to deliver essential goods in disaster-affected regions.</p>
          <span class="node-link">LEARN MORE // 04</span>
        </div>
      </a>

      <a href="/sectors#infrastructure" class="matrix-node n-left reveal">
        <div class="node-meta">COORD_05 // DEV_INSTITUTION</div>
        <div class="node-content">
          <div class="node-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          </div>
          <h3>Infrastructure & Development</h3>
          <p>Development banks and project developers requiring complex, multi-year supply coordination.</p>
          <span class="node-link">LEARN MORE // 05</span>
        </div>
        <div class="node-connector"></div>
      </a>

    </div>
  </div>
</section>
      <!-- ===== HOW WE WORK ===== -->
<section class="section section-process" id="process" aria-labelledby="process-heading">
  <div class="container">
    <div class="process-header reveal">
      <h2 id="process-heading">Our Process: From Requirement to Delivery</h2>
    </div>
    
    <div class="process-steps-horizontal">
      <div class="process-step-h reveal reveal-delay-1">
        <div class="step-number-circle">1</div>
        <h3>Requirement Assessment</h3>
        <p>Procurement strategy, engaging, sourcing, engagement and finalizing priorities.</p>
      </div>
      
      <div class="process-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </div>
      
      <div class="process-step-h reveal reveal-delay-2">
        <div class="step-number-circle">2</div>
        <h3>Strategic Sourcing</h3>
        <p>Deliver detailed requirement from contracting and supply documentation complete.</p>
      </div>
      
      <div class="process-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </div>
      
      <div class="process-step-h reveal reveal-delay-3">
        <div class="step-number-circle">3</div>
        <h3>Procurement & Quality Control</h3>
        <p>Process, evaluate, and finalize sourcing, ordering, and quality inspection.</p>
      </div>
      
      <div class="process-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </div>
      
      <div class="process-step-h reveal reveal-delay-4">
        <div class="step-number-circle">4</div>
        <h3>Logistics & Delivery</h3>
        <p>Supplier readiness support, contracting strategies, and final delivery.</p>
      </div>
    </div>
  </div>
</section>





 <section class="section-news-max" id="news" aria-labelledby="news-heading">
  <div class="matrix-grid"></div>
  
  <div class="container">
    <div class="sectiosn-header reveal">
      <span class="section-label">Intelligence Briefing</span>
      <h2 id="news-heading">Latest <span class="teal-text">Updates</span></h2>
      <div class="divider"></div>
      <p class="section-intro">
        Strategic insights and operational developments from the MMT Alliance global network.
      </p>
    </div>

    <div class="news-stream-wrap">
      <div class="news-stream" id="news-grid">
        
        <article class="brief-card reveal">
          <div class="brief-image">
            <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop" alt="UN Partnership" loading="lazy">
            <div class="brief-tag">PRTNR_SHIP</div>
          </div>
          <div class="brief-body">
            <div class="brief-meta">
              <span class="meta-id">ID: 2026_03A</span>
              <span class="meta-date">MAR_2026</span>
            </div>
            <h3 class="brief-title">MMT Alliance Expands UN Vendor Registration Across East Africa</h3>
            <p class="brief-excerpt">Strengthening humanitarian infrastructure through direct agency alignment and localized supply chains.</p>
            <a href="/news" class="brief-link">
              <span>ACCESS FULL BRIEF</span>
              <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg>
            </a>
          </div>
        </article>

        <article class="brief-card reveal">
          <div class="brief-image">
            <img src="https://hsiassetstorage.sfo2.digitaloceanspaces.com/transforms/blogimages/26619/emergency-response-what-to-do-when-disaster-strikes-vivid-learning-systems_d4bd353bac6a5f3a10ab94d9650d3531.jpg" alt="Emergency response" loading="lazy">
            <div class="brief-tag urgent">EMRG_RESP</div>
          </div>
          <div class="brief-body">
            <div class="brief-meta">
              <span class="meta-id">ID: 2026_02B</span>
              <span class="meta-date">FEB_2026</span>
            </div>
            <h3 class="brief-title">Rapid Deployment: Medical Supplies Mobilised Within 72 Hours</h3>
            <p class="brief-excerpt">Emergency logistics activated across three distribution points following humanitarian crisis declaration.</p>
            <a href="/news" class="brief-link">
              <span>ACCESS FULL BRIEF</span>
              <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg>
            </a>
          </div>
        </article>

        <article class="brief-card reveal">
          <div class="brief-image">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" alt="Industry trends" loading="lazy">
            <div class="brief-tag">INTEL_GEN</div>
          </div>
          <div class="brief-body">
            <div class="brief-meta">
              <span class="meta-id">ID: 2026_01C</span>
              <span class="meta-date">JAN_2026</span>
            </div>
            <h3 class="brief-title">Global Procurement Trends 2026: The Humanitarian Evolution</h3>
            <p class="brief-excerpt">Analysis of evolving international standards and supply chain resilience in the current fiscal year.</p>
            <a href="/news" class="brief-link">
              <span>ACCESS FULL BRIEF</span>
              <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg>
            </a>
          </div>
        </article>

      </div>
    </div>

    <div class="stream-progress">
      <div class="progress-fill"></div>
    </div>
  </div>
</section>

      <!-- ===== FAQ SECTION (SEO) ===== -->
      <section class="section section-faq-home" aria-labelledby="faq-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">FAQ</span>
            <h2 id="faq-heading">Frequently Asked Questions</h2>
            <div class="divider"></div>
          </div>
          
          <div class="faq-grid">
            <details class="faq-item reveal reveal-delay-1">
              <summary>
                <span class="faq-question">Which organisations do you work with?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>We work with governments, United Nations agencies, international NGOs, humanitarian organisations, and development banks across 50+ countries.</p>
              </div>
            </details>
            
            <details class="faq-item reveal reveal-delay-2">
              <summary>
                <span class="faq-question">What compliance standards do you follow?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>We follow UN procurement guidelines, ISO standards, and maintain full audit-ready documentation for all transactions and supply chain operations.</p>
              </div>
            </details>
            
            <details class="faq-item reveal reveal-delay-3">
              <summary>
                <span class="faq-question">How quickly can you deploy emergency supplies?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Our emergency response team can activate within hours of a crisis declaration, with typical deployment of critical supplies within 72 hours.</p>
              </div>
            </details>
            
            <details class="faq-item reveal reveal-delay-4">
              <summary>
                <span class="faq-question">Do you operate in conflict-affected regions?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Yes, we have proven capability operating in complex and fragile environments with security coordination and risk mitigation protocols.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <!-- ===== CTA BAND ===== -->
      <section class="cta-band cta-band--home" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cta-heading">Ready to Partner With Us?</h2>
            <p>Whether you have an active tender, a long-term supply requirement, or want to explore how MMT Alliance can support your operations, we are ready to engage.</p>
            <div class="cta-actions">
              <a href="/contact" class="btn btn-primary btn-lg">
                <span>Start a Conversation</span>
                <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="/capability-statement" class="btn btn-outline-white btn-lg">
                <svg viewBox="0 0 20 20" fill="none"><path d="M10 3v10M6 9l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="3" y="15" width="14" height="2" rx="1" fill="currentColor"/></svg>
                <span>Download Capability Statement</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;

    // Load hero video if present
    const videoWrap = document.getElementById('hero-video-wrap');
    if (videoWrap && !videoWrap.dataset.loaded) {
      const video = document.createElement('video');
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute('aria-hidden', 'true');
      video.classList.add('hero-video');
      
      const source = document.createElement('source');
      source.src = 'assets/hero.mp4';
      source.type = 'video/mp4';
      video.appendChild(source);
      
      // Fallback poster
      video.poster = 'assets/hero-poster.jpg';
      
      videoWrap.appendChild(video);
      videoWrap.dataset.loaded = 'true';
    }

    // Initialize all components
    HomePage.initCarousel();
    HomePage.initAnimations();
    HomePage.initFAQ();
  },

  initCarousel() {
    const grid = document.getElementById('news-grid');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (!grid || !prevBtn) return;

    let current = 0;
    const cards = grid.querySelectorAll('.news-card');
    const total = cards.length;

    function isMobile() { return window.innerWidth <= 768; }

    function goTo(idx) {
      if (!isMobile()) return;
      current = ((idx % total) + total) % total;
      grid.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));
    dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.index)));

    // Touch swipe support
    let startX = 0;
    grid.addEventListener('touchstart', e => { 
      startX = e.touches[0].clientX; 
    }, { passive: true });
    
    grid.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        goTo(diff > 0 ? current + 1 : current - 1);
      }
    });

    // Handle resize
    window.addEventListener('resize', () => {
      if (!isMobile()) { 
        grid.style.transform = ''; 
      } else { 
        goTo(current); 
      }
    });
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
  },

  initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      item.addEventListener('click', function(e) {
        // Prevent toggle if clicking a link inside
        if (e.target.closest('a')) return;
        
        faqItems.forEach(other => {
          if (other !== item) {
            other.removeAttribute('open');
          }
        });
      });
    });
  }
};

Router.register('/', HomePage.render.bind(HomePage));
Router.register('', HomePage.render.bind(HomePage));