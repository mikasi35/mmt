/* ============================================================
   pages/case-studies.js — Case Studies page render (ENHANCED)
   ============================================================ */

const CaseStudiesPage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== SEO SCHEMA MARKUP ===== -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "MMT Alliance - Case Studies",
        "description": "Proven delivery across pilot projects, supply partnerships, and procurement engagements for governments, UN agencies, and humanitarian organisations.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Case Study Categories",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Medical Supply Procurement",
                "description": "End-to-end procurement and delivery of medical consumables"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency Shelter Response",
                "description": "Rapid sourcing and delivery of emergency shelter kits"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Food & Essential Goods",
                "description": "Strategic sourcing and logistics for food distribution programmes"
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
      <div class="page-hero page-hero--case-studies">
        <div class="hero-bg-overlay"></div>
        <div class="container page-hero-content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/" aria-label="Home">Home</a>
            <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span aria-current="page">Case Studies</span>
          </nav>
          
          <h1 class="hero-title">
            <span class="title-line">Case</span>
            <span class="title-line">Studies</span>
          </h1>
          
          <p class="hero-subtitle">
            Demonstrated delivery across pilot projects, supply partnerships, and procurement 
            engagements. These become our biggest asset—and your confidence in our ability to perform.
          </p>
          </div>
      </div>

      <!-- ===== CASE STUDIES GRID ===== -->
      <section class="section section-case-studies" aria-labelledby="cases-heading">
        <div class="container">
          <div class="section-header reveal">
            <span class="section-label">Engagements</span>
            <h2 id="cases-heading">Supply Chain Delivered</h2>
            <div class="divider"></div>
            <p class="section-intro">
              Even at an early stage, our engagements demonstrate the quality of our process, 
              the strength of our supplier relationships, and our commitment to delivery.
            </p>
          </div>
          
          <div class="case-studies-grid">
            <!-- Case Study 1 -->
            <article class="case-card reveal reveal-delay-1">
              <div class="case-card-image">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop" alt="Medical supply procurement in East Africa" loading="lazy" width="800" height="500">
                <div class="case-type-badge">
                  <span>Pilot Project</span>
                </div>
              </div>
              <div class="case-card-content">
                <div class="case-meta">
                  <div class="case-location">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.5"/></svg>
                    <span>East Africa</span>
                  </div>
                  <div class="case-sector">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.5"/></svg>
                    <span>Healthcare</span>
                  </div>
                </div>
                
                <h3>Medical Supply Procurement</h3>
                <p>End-to-end procurement and delivery of medical consumables for a health programme operating across multiple districts in East Africa.</p>
                
                <div class="case-outcomes">
                  <div class="outcome-item">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    <span>Delivered on-time to 12 distribution points</span>
                  </div>
                  <div class="outcome-item">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    <span>100% quality compliance verified</span>
                  </div>
                </div>
                
                <div class="case-tags">
                  <span class="tag">Medical Supplies</span>
                  <span class="tag">Last-Mile Delivery</span>
                  <span class="tag">Multi-District</span>
                </div>
                
                <div class="case-cta">
                  <a href="/contact" class="case-link">
                    Discuss Similar Project
                    <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </div>
            </article>

            <!-- Case Study 2 -->
            <article class="case-card reveal reveal-delay-2">
              <div class="case-card-image">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=500&fit=crop" alt="Emergency shelter humanitarian response" loading="lazy" width="800" height="500">
                <div class="case-type-badge case-type-urgent">
                  <span>Emergency Response</span>
                </div>
              </div>
              <div class="case-card-content">
                <div class="case-meta">
                  <div class="case-location">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.5"/></svg>
                    <span>Conflict Region</span>
                  </div>
                  <div class="case-sector">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/></svg>
                    <span>Humanitarian</span>
                  </div>
                </div>
                
                <h3>Emergency Shelter — Humanitarian Response</h3>
                <p>Rapid sourcing and delivery of emergency shelter kits and non-food items to support a humanitarian response operation in a conflict-affected region.</p>
                
                <div class="case-outcomes">
                  <div class="outcome-item">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    <span>Mobilised within 72 hours of activation</span>
                  </div>
                  <div class="outcome-item">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    <span>24/7 coordination throughout deployment</span>
                  </div>
                </div>
                
                <div class="case-tags">
                  <span class="tag">Emergency Response</span>
                  <span class="tag">Shelter & NFI</span>
                  <span class="tag">Complex Environment</span>
                </div>
                
                <div class="case-cta">
                  <a href="/contact" class="case-link">
                    Discuss Similar Project
                    <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </div>
            </article>

            <!-- Case Study 3 -->
            <article class="case-card reveal reveal-delay-3">
              <div class="case-card-image">
                <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=500&fit=crop" alt="Food and essential goods NGO programme" loading="lazy" width="800" height="500">
                <div class="case-type-badge">
                  <span>Supply Partnership</span>
                </div>
              </div>
              <div class="case-card-content">
                <div class="case-meta">
                  <div class="case-location">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.5"/></svg>
                    <span>Southern Africa</span>
                  </div>
                  <div class="case-sector">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/></svg>
                    <span>NGO Programme</span>
                  </div>
                </div>
                
                <h3>Food & Essential Goods — NGO Programme</h3>
                <p>Strategic sourcing and logistics management for a large-scale food distribution programme operated by an international NGO in Southern Africa.</p>
                
                <div class="case-outcomes">
                  <div class="outcome-item">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    <span>Full donor compliance documentation provided</span>
                  </div>
                  <div class="outcome-item">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2"/></svg>
                    <span>Cost savings through strategic sourcing</span>
                  </div>
                </div>
                
                <div class="case-tags">
                  <span class="tag">Food Supply</span>
                  <span class="tag">NGO</span>
                  <span class="tag">Donor Compliance</span>
                </div>
                
                <div class="case-cta">
                  <a href="/contact" class="case-link">
                    Discuss Similar Project
                    <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </div>
            </article>
          </div>

          <!-- Quote Block -->
          <div class="quote-block-large reveal">
            <svg viewBox="0 0 24 24" fill="currentColor" class="quote-icon"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <p>"Every engagement—no matter the scale—is an opportunity to demonstrate that MMT Alliance delivers what it promises. These early partnerships are the foundation of a long-term track record."</p>
            <div class="quote-source">
              <span>MMT Alliance</span>
              <span>Case Study Principle</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== DELIVERY METRICS ===== -->
      <section class="section section--alt section-delivery-metrics" aria-labelledby="metrics-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">By The Numbers</span>
            <h2 id="metrics-heading">Delivery at Scale</h2>
            <div class="divider"></div>
          </div>
          
          <div class="delivery-metrics-grid">
            <div class="delivery-metric reveal reveal-delay-1">
              <div class="metric-icon">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="metric-value">50+</div>
              <div class="metric-label">Countries Served</div>
            </div>
            
            <div class="delivery-metric reveal reveal-delay-2">
              <div class="metric-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="metric-value">100%</div>
              <div class="metric-label">On-Time Delivery</div>
            </div>
            
            <div class="delivery-metric reveal reveal-delay-3">
              <div class="metric-icon">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
              <div class="metric-value">72hrs</div>
              <div class="metric-label">Emergency Activation</div>
            </div>
            
            <div class="delivery-metric reveal reveal-delay-4">
              <div class="metric-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="metric-value">100%</div>
              <div class="metric-label">Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== FAQ SECTION (SEO) ===== -->
      <section class="section section-faq" aria-labelledby="faq-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">FAQ</span>
            <h2 id="faq-heading">Case Study Questions</h2>
            <div class="divider"></div>
          </div>
          
          <div class="faq-grid">
            <details class="faq-item reveal reveal-delay-1">
              <summary>
                <span class="faq-question">Can you provide references from past engagements?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Yes, we can provide references from past and current clients upon request, subject to confidentiality agreements and client approval.</p>
              </div>
            </details>
            
            <details class="faq-item reveal reveal-delay-2">
              <summary>
                <span class="faq-question">Do you have experience in our specific sector?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>We work across governments, UN agencies, NGOs, and humanitarian organisations. Contact us to discuss your specific sector requirements and relevant experience.</p>
              </div>
            </details>
            
            <details class="faq-item reveal reveal-delay-3">
              <summary>
                <span class="faq-question">Can you operate in conflict-affected regions?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Yes, we have proven capability operating in complex and fragile environments with security coordination, risk mitigation protocols, and established local partner networks.</p>
              </div>
            </details>
            
            <details class="faq-item reveal reveal-delay-4">
              <summary>
                <span class="faq-question">How quickly can you mobilise for emergency responses?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Our emergency response team operates 24/7 and can activate supply operations within hours of a crisis declaration, with typical deployment within 72 hours.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <!-- ===== CTA SECTION ===== -->
      <section class="cta-band cta-band--case-studies" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cta-heading">Become Our Next Success Story</h2>
            <p>Whether a pilot project or a long-term supply partnership—we are ready to demonstrate our capability in your context.</p>
            <div class="cta-actions">
              <a href="/contact" class="btn btn-primary btn-lg">
                Start a Conversation
                <svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="/services" class="btn btn-outline-white btn-lg">
                View Our Services
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

Router.register('/case-studies', CaseStudiesPage.render.bind(CaseStudiesPage));