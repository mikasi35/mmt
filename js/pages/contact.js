/* ============================================================
   pages/contact.js — Contact page render (ENHANCED)
   ============================================================ */

const ContactPage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== SEO SCHEMA MARKUP ===== -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "MMT Alliance - Contact",
        "description": "Contact MMT Alliance for procurement partnerships, tender discussions, and supply chain solutions.",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "General Enquiries",
            "email": "info@mmtalliance.com",
            "areaServed": "Worldwide"
          },
          {
            "@type": "ContactPoint",
            "contactType": "Procurement Partnerships",
            "email": "procurement@mmtalliance.com",
            "areaServed": "Worldwide"
          },
          {
            "@type": "ContactPoint",
            "contactType": "Contracts & Tenders",
            "email": "contracts@mmtalliance.com",
            "areaServed": "Worldwide"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Level 7/80 Dorcas St",
          "addressLocality": "Southbank",
          "addressRegion": "VIC",
          "postalCode": "3006",
          "addressCountry": "AU"
        },
        "url": "https://mmtalliance.com/contact"
      }
      </script>

      <!-- ===== HERO SECTION ===== -->
      <div class="page-hero page-hero--contact">
        <div class="hero-bg-overlay"></div>
        <div class="container page-hero-content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/" aria-label="Home">Home</a>
            <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span aria-current="page">Contact</span>
          </nav>
          
          <h1 class="hero-title">
            <span class="title-line">Contact</span>
            <span class="title-line">MMT Alliance</span>
          </h1>
          
          <p class="hero-subtitle">
            Whether you have an active tender, a supply requirement, or want to explore 
            how we can support your operations—our team is ready to engage.
          </p>
        </div>
        
        <div class="hero-scroll-indicator">
          <span>Get in touch</span>
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </div>
      </div>

      <!-- ===== CONTACT GRID ===== -->
      <section class="section section-contact" aria-labelledby="contact-heading">
        <div class="container">
          <div class="contact-layout">
            
            <!-- Info Column -->
            <div class="contact-info-col">
              <div class="contact-info-header reveal">
                <span class="section-label">Get in Touch</span>
                <h2 id="contact-heading">Talk to Our Team</h2>
                <div class="divider"></div>
                <p class="contact-intro">
                  We have dedicated contacts for general enquiries, procurement partnerships, 
                  and contract discussions. Reach the right person from the start.
                </p>
              </div>

              <div class="contact-methods">
                <a href="mailto:info@mmtalliance.com" class="contact-method reveal reveal-delay-1">
                  <div class="contact-method-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="1.5"/><polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>General Enquiries</h4>
                    <p>info@mmtalliance.com</p>
                    <span class="contact-method-note">For general questions and introductions</span>
                  </div>
                </a>

                <a href="mailto:procurement@mmtalliance.com" class="contact-method reveal reveal-delay-2">
                  <div class="contact-method-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </div>
                  <div>
                    <h4>Procurement Partnerships</h4>
                    <p>procurement@mmtalliance.com</p>
                    <span class="contact-method-note">For supplier and partnership discussions</span>
                  </div>
                </a>

                <a href="mailto:contracts@mmtalliance.com" class="contact-method reveal reveal-delay-3">
                  <div class="contact-method-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="1.5"/><polyline points="14 2 14 8 20 8" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Contracts &amp; Tenders</h4>
                    <p>contracts@mmtalliance.com</p>
                    <span class="contact-method-note">For active tenders and contract discussions</span>
                  </div>
                </a>

                <div class="contact-method reveal reveal-delay-4">
                  <div class="contact-method-icon">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.5"/></svg>
                  </div>
                  <div>
                    <h4>Head Office</h4>
                    <address>
                      <p>Level 7/80 Dorcas St<br/>Southbank VIC 3006<br/>Australia</p>
                    </address>
                    <span class="contact-method-note">Visit us during business hours</span>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div class="contact-social reveal reveal-delay-5">
                <h4>Follow Us</h4>
                <div class="social-links">
                  <a href="#" aria-label="LinkedIn" class="social-link">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="#" aria-label="Twitter" class="social-link">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Form Column -->
            <div class="contact-form-col">
              <div class="form-card reveal reveal-delay-2">
                <div class="form-card-header">
                  <h3>Send Us a Message</h3>
                  <p>Tell us about your requirements and we'll connect you with the right team member.</p>
                </div>
                
                <form id="contact-form" novalidate class="contact-form">
                  <div class="form-row">
                    <div class="form-group">
                      <label for="first-name">First Name <span class="required">*</span></label>
                      <input type="text" id="first-name" name="first_name" autocomplete="given-name" required placeholder="Jane" />
                    </div>
                    <div class="form-group">
                      <label for="last-name">Last Name <span class="required">*</span></label>
                      <input type="text" id="last-name" name="last_name" autocomplete="family-name" required placeholder="Smith" />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="email">Email Address <span class="required">*</span></label>
                    <input type="email" id="email" name="email" autocomplete="email" required placeholder="jane.smith@organisation.org" />
                  </div>

                  <div class="form-group">
                    <label for="organisation">Organisation</label>
                    <input type="text" id="organisation" name="organisation" autocomplete="organization" placeholder="UN Agency / Government / NGO" />
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="enquiry-type">Enquiry Type</label>
                      <select id="enquiry-type" name="enquiry_type">
                        <option value="">Select enquiry type</option>
                        <option value="procurement">Procurement Partnership</option>
                        <option value="tender">Tender / Contract</option>
                        <option value="logistics">Logistics Enquiry</option>
                        <option value="emergency">Emergency Response</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="urgency">Urgency Level</label>
                      <select id="urgency" name="urgency">
                        <option value="standard">Standard</option>
                        <option value="urgent">Urgent</option>
                        <option value="emergency">Emergency</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="message">Message <span class="required">*</span></label>
                    <textarea id="message" name="message" required placeholder="Briefly describe your supply chain or procurement need..."></textarea>
                  </div>

                  <div class="form-group form-checkbox">
                    <label class="checkbox-label">
                      <input type="checkbox" name="consent" required />
                      <span>I agree to the <a href="/privacy" target="_blank">Privacy Policy</a> and consent to being contacted about my enquiry.</span>
                    </label>
                  </div>

                  <button type="submit" class="btn btn-primary btn-full" id="submit-btn">
                    <span class="btn-text">Send Message</span>
                    <span class="btn-loading" style="display:none">Sending...</span>
                    <svg viewBox="0 0 20 20" fill="none" class="btn-icon" aria-hidden="true"><path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </button>

                  <div id="form-feedback" class="form-feedback" role="alert" aria-live="polite"></div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ===== OFFICE LOCATIONS ===== -->
      <section class="section section--alt section-locations" aria-labelledby="locations-heading">
        <div class="container">
          <div class="section-header section-header--center reveal">
            <span class="section-label">Our Offices</span>
            <h2 id="locations-heading">Global Presence</h2>
            <div class="divider"></div>
            <p class="section-intro">
              While headquartered in Australia, our operations span 50+ countries with 
              dedicated teams ready to support your needs wherever you operate.
            </p>
          </div>
          
          <div class="locations-grid">
            <div class="location-card reveal reveal-delay-1">
              <div class="location-card-header">
                <div class="location-flag">🇦🇺</div>
                <h3>Australia</h3>
                <span class="location-type">Group Base (MMT Care)</span>
              </div>
              <div class="location-card-body">
                <p>Level 7/80 Dorcas St<br/>Southbank VIC 3006<br/>Australia</p>
                <a href="mailto:info@mmtalliance.com" class="location-email">info@mmtalliance.com</a>
              </div>
            </div>
            
            <div class="location-card reveal reveal-delay-2">
              <div class="location-card-header">
                <div class="location-flag">🇦🇪</div>
                <h3>United Arab Emirates</h3>
                <span class="location-type">Global Headquarters</span>
              </div>
              <div class="location-card-body">
                <p>Dubai International Financial Centre<br/>Dubai, UAE</p>
                <a href="mailto:dubai@mmtalliance.com" class="location-email">dubai@mmtalliance.com</a>
              </div>
            </div>
            
            <div class="location-card reveal reveal-delay-3">
              <div class="location-card-header">
                <div class="location-flag">🌍</div>
                <h3>Global Operations</h3>
                <span class="location-type">50+ Countries</span>
              </div>
              <div class="location-card-body">
                <p>Active operations across Africa, Asia, Middle East, and Pacific regions with local partner networks.</p>
                <a href="/contact" class="location-email">Find your regional contact</a>
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
            <h2 id="faq-heading">Contact Questions</h2>
            <div class="divider"></div>
          </div>
          
          <div class="faq-grid">
            <details class="faq-item reveal reveal-delay-1">
              <summary>
                <span class="faq-question">What information should I include in my enquiry?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Please include your organisation name, contact details, the nature of your procurement or supply chain need, and any relevant timelines. This helps us connect you with the right specialist quickly.</p>
              </div>
            </details>
            
            <details class="faq-item reveal reveal-delay-2">
              <summary>
                <span class="faq-question">How quickly will I receive a response?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>For standard enquiries, we aim to respond within 1-2 business days. For urgent or emergency requests marked as such, our team will prioritise your message and respond within hours.</p>
              </div>
            </details>
            
            <details class="faq-item reveal reveal-delay-3">
              <summary>
                <span class="faq-question">Do you have emergency contact options?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Yes. For emergency humanitarian responses, select "Emergency Response" as your enquiry type and mark urgency as "Emergency". Our 24/7 response team monitors these requests continuously.</p>
              </div>
            </details>
            
            <details class="faq-item reveal reveal-delay-4">
              <summary>
                <span class="faq-question">Is my enquiry information secure?</span>
                <span class="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>Absolutely. All enquiries are handled with strict confidentiality. We follow data protection best practices and never share your information without consent. See our Privacy Policy for full details.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <!-- ===== FINAL CTA ===== -->
      <section class="cta-band cta-band--contact" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content reveal">
            <h2 id="cta-heading">Ready to Start a Conversation?</h2>
            <p>Whether you're preparing a tender, managing an emergency response, or exploring long-term partnership—our team is here to help.</p>
            <div class="cta-actions">
              <a href="mailto:info@mmtalliance.com" class="btn btn-primary btn-lg">
                Email Us Directly
                <svg viewBox="0 0 20 20" fill="none"><path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a href="/capability-statement" class="btn btn-outline-white btn-lg">
                Download Capability Statement
              </a>
            </div>
          </div>
        </div>
      </section>
    `;

    // Initialize form handling and animations
    this.initForm();
    this.initAnimations();
    this.initFAQ();
  },

  initForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn?.querySelector('.btn-text');
    const btnLoading = submitBtn?.querySelector('.btn-loading');
    const btnIcon = submitBtn?.querySelector('.btn-icon');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Reset feedback
      feedback.style.display = 'none';
      feedback.className = 'form-feedback';

      // Basic validation
      const required = form.querySelectorAll('[required]');
      let valid = true;
      
      required.forEach(field => {
        field.classList.remove('error');
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        }
      });

      // Email validation
      const email = form.querySelector('#email');
      if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('error');
        valid = false;
      }

      if (!valid) {
        feedback.style.display = 'block';
        feedback.classList.add('error');
        feedback.textContent = 'Please fill in all required fields with valid information.';
        return;
      }

      // Disable button and show loading
      if (submitBtn) {
        submitBtn.disabled = true;
        if (btnText) btnText.style.display = 'none';
        if (btnLoading) btnLoading.style.display = 'inline';
        if (btnIcon) btnIcon.style.display = 'none';
      }

      try {
        // Simulate API call (replace with actual fetch)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success
        feedback.style.display = 'block';
        feedback.classList.add('success');
        feedback.innerHTML = `
          <strong>Thank you!</strong> Your message has been received. 
          A member of our team will be in touch within 1-2 business days.
          ${form.querySelector('[name="urgency"]')?.value === 'emergency' ? 
            '<br><br><strong>Emergency request noted:</strong> Our 24/7 response team has been alerted.' : ''}
        `;
        
        form.reset();
        
      } catch (error) {
        // Error
        feedback.style.display = 'block';
        feedback.classList.add('error');
        feedback.textContent = 'Sorry, there was an issue sending your message. Please try again or email us directly at info@mmtalliance.com';
        
      } finally {
        // Re-enable button
        if (submitBtn) {
          submitBtn.disabled = false;
          if (btnText) btnText.style.display = 'inline';
          if (btnLoading) btnLoading.style.display = 'none';
          if (btnIcon) btnIcon.style.display = 'inline';
        }
      }
    });

    // Real-time validation
    form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
          this.classList.add('error');
        } else {
          this.classList.remove('error');
        }
      });
      
      field.addEventListener('input', function() {
        this.classList.remove('error');
      });
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
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
  },

  initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      item.addEventListener('click', function(e) {
        // Only toggle if clicking summary, not a link inside
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

Router.register('/contact', ContactPage.render.bind(ContactPage));