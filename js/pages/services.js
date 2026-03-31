/* ============================================================
   pages/services.js — Services page render (ENHANCED)
   ============================================================ */

const ServicesPage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== SEO META & SCHEMA ===== -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "MMT Alliance - Global Procurement & Logistics Services",
        "description": "Comprehensive supply chain services for governments, UN agencies, and humanitarian organisations operating in demanding environments.",
        "serviceArea": {
          "@type": "Country",
          "name": "Global - 50+ Countries"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Supply Chain Services",
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
        }
      }
      </script>

      <!-- ===== HERO SECTION ===== -->
      <div class="page-hero page-hero--services">
        <div class="hero-bg-pattern"></div>
        <div class="container page-hero-content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/" aria-label="Home">Home</a>
            <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span aria-current="page">Services</span>
          </nav>
          
          <h1 class="hero-title">
            <span class="title-line">End-to-End Supply Chain</span>
            <span class="title-line">Services</span>
          </h1>
          
          <p class="hero-subtitle">
            Comprehensive procurement, logistics, and supply solutions engineered for governments, 
            UN agencies, and humanitarian organisations operating in the world's most demanding environments.
          </p>
        </div>
        
        <div class="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </div>
      </div>

      <!-- ===== SERVICES OVERVIEW GRID ===== -->
      <section class="section section-services-overview" aria-labelledby="services-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">What We Offer</span>
            <h2 id="services-heading">Four Core Service Verticals</h2>
            <div class="divider"></div>
            <p class="section-intro">
              From strategic sourcing to emergency deployment, we manage every aspect of your supply chain 
              with transparency, accountability, and precision.
            </p>
          </div>
          
          <div class="services-overview-grid">
            <a href="#procurement" class="service-overview-card reveal reveal-delay-1">
              <div class="card-number">01</div>
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop" alt="Procurement and strategic sourcing services" loading="lazy" width="600" height="400">
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <h3>Procurement &amp; Strategic Sourcing</h3>
                <p>Full sourcing lifecycle management with international procurement standards</p>
              </div>
            </a>
            
            <a href="#supply" class="service-overview-card reveal reveal-delay-2">
              <div class="card-number">02</div>
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop" alt="Supply solutions for humanitarian organizations" loading="lazy" width="600" height="400">
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <h3>Supply Solutions</h3>
                <p>Medical supplies, food, shelter materials, and custom-sourced goods</p>
              </div>
            </a>
            
            <a href="#logistics" class="service-overview-card reveal reveal-delay-3">
              <div class="card-number">03</div>
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&h=400&fit=crop" alt="Logistics and delivery services worldwide" loading="lazy" width="600" height="400">
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <h3>Logistics &amp; Delivery</h3>
                <p>Air, sea, and land freight with customs clearance and last-mile delivery</p>
              </div>
            </a>
            
            <a href="#emergency" class="service-overview-card reveal reveal-delay-4">
              <div class="card-number">04</div>
              <div class="card-image">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop" alt="Emergency response and crisis supply operations" loading="lazy" width="600" height="400">
                <div class="card-overlay"></div>
              </div>
              <div class="card-content">
                <h3>Emergency Response</h3>
                <p>Rapid-deployment crisis supply operations activated within hours</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- ===== SERVICE 01: PROCUREMENT ===== -->
      <section class="section section-service-detail" id="procurement" aria-labelledby="procurement-heading">
        <div class="container">
          <div class="service-detail-grid">
            <div class="service-detail-content reveal">
              <span class="service-label">Service 01</span>
              <h2 id="procurement-heading">Procurement &amp; Strategic Sourcing</h2>
              <div class="divider"></div>
              <p class="lead">
                Our procurement team manages the full sourcing lifecycle—from initial market analysis 
                through to contract execution. We apply international procurement standards to ensure 
                transparency, value, and compliance at every step.
              </p>
              
              <div class="service-features">
                <h3>Key Capabilities</h3>
                <div class="features-grid">
                  <div class="feature-item">
                    <div class="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                    <div>
                      <h4>Supplier Identification</h4>
                      <p>Pre-qualification and vetting of suppliers across 50+ countries</p>
                    </div>
                  </div>
                  
                  <div class="feature-item">
                    <div class="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                    <div>
                      <h4>Tender Management</h4>
                      <p>Complete tender preparation, bidding, and evaluation processes</p>
                    </div>
                  </div>
                  
                  <div class="feature-item">
                    <div class="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                    <div>
                      <h4>Vendor Due Diligence</h4>
                      <p>Rigorous evaluation and compliance verification of all vendors</p>
                    </div>
                  </div>
                  
                  <div class="feature-item">
                    <div class="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                    <div>
                      <h4>Contract Negotiation</h4>
                      <p>Expert negotiation and execution of supply agreements</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="service-cta">
                <a href="/contact" class="btn btn-primary">Discuss Your Needs</a>
              </div>
            </div>
            
            <div class="service-detail-visual reveal reveal-delay-2">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=1000&fit=crop" alt="Procurement team reviewing contracts" loading="lazy" width="800" height="1000">
                <div class="visual-quote">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  <p>"Structured procurement is the foundation of a supply chain that can be trusted under audit, under pressure, and at scale."</p>
                  <span>MMT Alliance Procurement Principle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== SERVICE 02: SUPPLY SOLUTIONS ===== -->
      <section class="section section--alt section-service-detail" id="supply" aria-labelledby="supply-heading">
        <div class="container">
          <div class="service-detail-grid service-detail-grid--reverse">
            <div class="service-detail-visual reveal">
              <div class="visual-card">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=1000&fit=crop" alt="Medical supplies and humanitarian goods" loading="lazy" width="800" height="1000">
                <div class="visual-stats">
                  <div class="visual-stat">
                    <span class="stat-value">100%</span>
                    <span class="stat-label">Quality Verified</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="service-detail-content reveal reveal-delay-2">
              <span class="service-label">Service 02</span>
              <h2 id="supply-heading">Supply Solutions</h2>
              <div class="divider"></div>
              <p class="lead">
                We source and supply a broad range of goods for humanitarian, government, and 
                development programmes—maintaining strict quality control across every product category.
              </p>
              
              <div class="supply-categories">
                <div class="category-card">
                  <div class="category-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </div>
                  <h3>Medical Supplies</h3>
                  <p>Pharmaceuticals, medical equipment, PPE, and consumables</p>
                </div>
                
                <div class="category-card">
                  <div class="category-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <h3>Food &amp; Essentials</h3>
                  <p>Nutritious food parcels, water purification, and hygiene kits</p>
                </div>
                
                <div class="category-card">
                  <div class="category-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <h3>Shelter &amp; Infrastructure</h3>
                  <p>Emergency shelter, construction materials, and equipment</p>
                </div>
                
                <div class="category-card">
                  <div class="category-icon">
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v4l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </div>
                  <h3>Custom Sourcing</h3>
                  <p>Tailored procurement for specialised operational requirements</p>
                </div>
              </div>
              
              <div class="service-cta">
                <a href="/contact" class="btn btn-primary">Request Supply Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== SERVICE 03: LOGISTICS ===== -->
      <section class="section section-service-detail" id="logistics" aria-labelledby="logistics-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="service-label">Service 03</span>
            <h2 id="logistics-heading">Logistics &amp; Delivery</h2>
            <div class="divider"></div>
            <p class="section-intro">
              We manage the full freight and delivery chain—coordinating air, sea, and land transport 
              with warehousing, customs expertise, and assured last-mile delivery.
            </p>
          </div>
          
          <div class="logistics-grid">
            <div class="logistics-card reveal reveal-delay-1">
              <div class="logistics-card-image">
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop" alt="Air freight cargo plane" loading="lazy" width="600" height="400">
              </div>
              <div class="logistics-card-content">
                <div class="logistics-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 11 19.79 19.79 0 0 1 1.27 2.2 2 2 0 0 1 3.26 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 15h1z" stroke="currentColor" stroke-width="1.5"/></svg>
                </div>
                <h3>Air Freight</h3>
                <p>Time-critical deliveries by air, fully managed from origin to destination with tracking and documentation.</p>
                <ul class="service-list">
                  <li>Express cargo services</li>
                  <li>Charter flight coordination</li>
                  <li>Temperature-controlled transport</li>
                </ul>
              </div>
            </div>
            
            <div class="logistics-card reveal reveal-delay-2">
              <div class="logistics-card-image">
                <img src="https://uniserve.co.uk/wp-content/uploads/2025/07/Uniserve-How-sea-freight-shipping-works-1080x675.jpg" alt="Sea freight container ship" loading="lazy" width="600" height="400">
              </div>
              <div class="logistics-card-content">
                <div class="logistics-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 2 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" stroke-width="1.5"/></svg>
                </div>
                <h3>Sea Freight</h3>
                <p>Cost-effective ocean freight for large-volume shipments, with full container and LCL options.</p>
                <ul class="service-list">
                  <li>FCL &amp; LCL shipping</li>
                  <li>Port-to-port delivery</li>
                  <li>Container tracking</li>
                </ul>
              </div>
            </div>
            
            <div class="logistics-card reveal reveal-delay-3">
              <div class="logistics-card-image">
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop" alt="Land transport truck logistics" loading="lazy" width="600" height="400">
              </div>
              <div class="logistics-card-content">
                <div class="logistics-icon">
                  <svg viewBox="0 0 24 24" fill="none"><rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M16 8h4l3 4v4h-7V8zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" stroke="currentColor" stroke-width="1.5"/></svg>
                </div>
                <h3>Land Transport</h3>
                <p>Ground logistics coordinated for in-country and cross-border delivery, including remote locations.</p>
                <ul class="service-list">
                  <li>Cross-border coordination</li>
                  <li>Remote area delivery</li>
                  <li>Convoy management</li>
                </ul>
              </div>
            </div>
            
            <div class="logistics-card reveal reveal-delay-4">
              <div class="logistics-card-image">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop" alt="Warehousing and inventory management" loading="lazy" width="600" height="400">
              </div>
              <div class="logistics-card-content">
                <div class="logistics-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/><polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="1.5"/></svg>
                </div>
                <h3>Warehousing</h3>
                <p>Secure, managed warehousing with inventory tracking at strategic distribution hubs globally.</p>
                <ul class="service-list">
                  <li>Inventory management</li>
                  <li>Climate-controlled storage</li>
                  <li>Distribution hub network</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== SERVICE 04: EMERGENCY RESPONSE ===== -->
      <section class="section section--alt section-service-detail" id="emergency" aria-labelledby="emergency-heading">
        <div class="container">
          <div class="emergency-hero reveal">
            <div class="emergency-content">
              <span class="service-label">Service 04</span>
              <h2 id="emergency-heading">Emergency Response</h2>
              <div class="divider"></div>
              <p class="lead">
                When disaster strikes, supply chains cannot wait. Our emergency response capability 
                is designed to activate rapidly, delivering critical goods to affected areas within 
                hours of mobilisation.
              </p>
            </div>
            <div class="emergency-stats">
              <div class="emergency-stat">
                <span class="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </span>
                <span class="stat-value">72hrs</span>
                <span class="stat-label">Average Deployment</span>
              </div>
              <div class="emergency-stat">
                <span class="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="1.5"/></svg>
                </span>
                <span class="stat-value">24/7</span>
                <span class="stat-label">Operations Centre</span>
              </div>
            </div>
          </div>
          
          <div class="emergency-features">
            <div class="emergency-feature reveal reveal-delay-1">
              <div class="feature-icon-large">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
              <div class="feature-content">
                <h3>Rapid Deployment</h3>
                <p>Emergency procurement and logistics activated within hours of a crisis declaration, coordinated 24/7 through our dedicated response team.</p>
              </div>
            </div>
            
            <div class="emergency-feature reveal reveal-delay-2">
              <div class="feature-icon-large">
                <svg viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="feature-content">
                <h3>Crisis Supply Operations</h3>
                <p>Medical kits, food parcels, shelter materials, and WASH supplies—pre-sourced and ready for rapid dispatch to affected regions.</p>
              </div>
            </div>
            
            <div class="emergency-feature reveal reveal-delay-3">
              <div class="feature-icon-large">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="feature-content">
                <h3>Complex Environment Operations</h3>
                <p>Proven capability to operate in conflict-affected, remote, or access-challenged environments with security coordination.</p>
              </div>
            </div>
          </div>
          
          <div class="service-cta service-cta--center reveal reveal-delay-4">
            <a href="/contact" class="btn btn-primary btn-lg">
              <svg viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 11 19.79 19.79 0 0 1 1.27 2.2 2 2 0 0 1 3.26 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 15h1z" stroke="currentColor" stroke-width="1.5"/></svg>
              Activate Emergency Response
            </a>
            <p class="cta-note">Available 24/7 for urgent humanitarian crises</p>
          </div>
        </div>
      </section>

      <!-- ===== FAQ SECTION (SEO) ===== -->
      <section class="section section-faq" aria-labelledby="faq-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">FAQ</span>
            <h2 id="faq-heading">Frequently Asked Questions</h2>
            <div class="divider"></div>
          </div>
          
          <div class="faq-grid">
            <details class="faq-item reveal reveal-delay-1">
              <summary>
                <span class="faq-question">Which organisations do you typically work with?</span>
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

      <!-- ===== CTA SECTION ===== -->
      <section class="cta-band cta-band--services" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cta-heading">Need a Custom Solution?</h2>
            <p>Every operation is unique. Get in touch to discuss your specific procurement, supply, or logistics requirements with our expert team.</p>
            <div class="cta-actions">
              <a href="/contact" class="btn btn-primary btn-lg">
                Contact Our Team
                <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="/capabilities" class="btn btn-outline-white btn-lg">
                <svg viewBox="0 0 20 20" fill="none"><path d="M10 3v10M6 9l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="3" y="15" width="14" height="2" rx="1" fill="currentColor"/></svg>
                Download Capabilities
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

Router.register('/services', ServicesPage.render.bind(ServicesPage));