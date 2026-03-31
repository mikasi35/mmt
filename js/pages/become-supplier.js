/* ============================================================
   pages/become-supplier.js — Become a Supplier page
   Unique BEM class names matching css/become-supplier.css
   ============================================================ */

const BecomeSupplierPage = {
  render(container) {
    container.innerHTML = `
      <!-- ===== HERO SECTION ===== -->
      <div class="page-hero page-hero--supplier">
        <div class="container page-hero__content--supplier">
          <nav class="breadcrumb breadcrumb--supplier" aria-label="Breadcrumb">
            <a href="/" class="breadcrumb__link">Home</a>
            <svg class="breadcrumb__separator" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span class="breadcrumb__current">Become a Supplier</span>
          </nav>
          <h1 class="page-hero__title--supplier">Become a Supplier</h1>
          <p class="page-hero__description--supplier">Join the MMT Alliance approved supplier network and help deliver critical goods to governments, UN agencies, and humanitarian organisations worldwide.</p>
        </div>
      </div>

      <!-- ===== WHY SUPPLY SECTION ===== -->
      <section class="section">
        <div class="container">
          <div class="why-split why-split--supplier">
            
            <!-- Left: Value Proposition -->
            <div class="why-content why-content--supplier reveal">
              <span class="section-label">Supplier Programme</span>
              <h2>Why Supply to MMT Alliance</h2>
              <div class="divider"></div>
              <p>MMT Alliance is a global end-to-end procurement, sourcing, supply, and delivery partner supporting governments, NGOs, and large-scale infrastructure and humanitarian operations. We work with a global network of suppliers to deliver critical goods efficiently, competitively, and at scale.</p>
              <p>Becoming an approved supplier opens access to a growing pipeline of institutional procurement across more than 50 countries.</p>
              
              <div class="why-feature-list why-feature-list--supplier" style="margin-top:var(--space-lg)">
                <div class="why-feature why-feature--supplier">
                  <svg class="why-feature__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <span class="why-feature__text">Access to government and UN procurement pipelines</span>
                </div>
                <div class="why-feature why-feature--supplier">
                  <svg class="why-feature__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <span class="why-feature__text">Long-term, volume-based supply partnerships</span>
                </div>
                <div class="why-feature why-feature--supplier">
                  <svg class="why-feature__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <span class="why-feature__text">Fair, transparent evaluation and onboarding</span>
                </div>
                <div class="why-feature why-feature--supplier">
                  <svg class="why-feature__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <span class="why-feature__text">Support from our procurement and operations team</span>
                </div>
              </div>
            </div>

            <!-- Right: Process Steps -->
            <div class="process-steps process-steps--supplier reveal reveal-delay-2">
              <div class="step-card step-card--supplier">
                <div class="step-card__number">01</div>
                <h3 class="step-card__title">Submit Registration</h3>
                <p class="step-card__description">Complete the supplier registration form below with your company details, capabilities, and required documents.</p>
              </div>
              <div class="step-card step-card--supplier">
                <div class="step-card__number">02</div>
                <h3 class="step-card__title">Document Verification</h3>
                <p class="step-card__description">Our procurement team reviews your submission and verifies all documents and compliance requirements.</p>
              </div>
              <div class="step-card step-card--supplier">
                <div class="step-card__number">03</div>
                <h3 class="step-card__title">Evaluation &amp; Approval</h3>
                <p class="step-card__description">We assess your capability, pricing, delivery capacity, and compliance record against our criteria.</p>
              </div>
              <div class="step-card step-card--supplier">
                <div class="step-card__number">04</div>
                <h3 class="step-card__title">Onboarding</h3>
                <p class="step-card__description">Approved suppliers are added to our database and notified of relevant procurement opportunities.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ===== REQUIREMENTS SECTION ===== -->
      <section class="section section--alt requirements-section requirements-section--supplier">
        <div class="container">
          <div class="section-header section-header--supplier reveal">
            <span class="section-label">Requirements</span>
            <h2>What You Need to Apply</h2>
            <div class="divider"></div>
          </div>
          
          <div class="diff-list diff-list--supplier">
            <div class="diff-item diff-item--supplier reveal reveal-delay-1">
              <div class="diff-item__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="1.5"/><polyline points="14 2 14 8 20 8" stroke="currentColor" stroke-width="1.5"/></svg></div>
              <div class="diff-item__content">
                <h4 class="diff-item__title">Required Documents</h4>
                <p class="diff-item__description">Company registration certificate, trade license, tax registration, company profile, bank details, and director identification.</p>
              </div>
            </div>
            
            <div class="diff-item diff-item--supplier reveal reveal-delay-2">
              <div class="diff-item__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5"/></svg></div>
              <div class="diff-item__content">
                <h4 class="diff-item__title">Compliance Agreements</h4>
                <p class="diff-item__description">Agreement to MMT Alliance Supplier Code of Conduct, Anti-Corruption Policy, ESG standards, and applicable international procurement practices.</p>
              </div>
            </div>
            
            <div class="diff-item diff-item--supplier reveal reveal-delay-3">
              <div class="diff-item__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="1.5"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div>
              <div class="diff-item__content">
                <h4 class="diff-item__title">Business Eligibility</h4>
                <p class="diff-item__description">Legally registered business with demonstrated capability to deliver goods or services at the required quality and scale.</p>
              </div>
            </div>
            
            <div class="diff-item diff-item--supplier reveal reveal-delay-4">
              <div class="diff-item__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="1.5"/></svg></div>
              <div class="diff-item__content">
                <h4 class="diff-item__title">Certifications (if applicable)</h4>
                <p class="diff-item__description">ISO, CE, FDA, or other relevant certifications are welcomed and strengthen your application but are not mandatory.</p>
              </div>
            </div>
          </div>
          
          <p class="reveal" style="margin-top:var(--space-lg);color:var(--text-muted);font-size:0.875rem">
            Note: Submission does not guarantee approval. MMT Alliance may request additional information during the review process. Approved suppliers may be reviewed periodically.
          </p>
        </div>
      </section>

      <!-- ===== REGISTRATION FORM SECTION ===== -->
      <section class="section" id="registration-form">
        <div class="container">
          <div class="section-header section-header--supplier section-header--center reveal">
            <span class="section-label">Apply Now</span>
            <h2>Supplier Registration Form</h2>
            <div class="divider"></div>
            <p>Complete all sections accurately. Our team will review your submission within 5-10 business days.</p>
          </div>

          <div class="supplier-form-wrap supplier-form-wrap--supplier reveal reveal-delay-1">
            <form id="supplier-form" class="supplier-form--supplier" novalidate>

              <!-- Section 1: Company Details -->
              <div class="supplier-form-section supplier-form-section--supplier">
                <div class="supplier-form-section__header">
                  <span class="supplier-form-section__num">01</span>
                  <h3 class="supplier-form-section__title">Company Details</h3>
                </div>
                <div class="form-row form-row--supplier">
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="company-name">Company Name <span class="required" aria-hidden="true">*</span></label>
                    <input class="form-group__input" type="text" id="company-name" name="company_name" required placeholder="Legal company name" />
                  </div>
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="trading-name">Trading Name (if different)</label>
                    <input class="form-group__input" type="text" id="trading-name" name="trading_name" placeholder="Trading name" />
                  </div>
                </div>
                <div class="form-row form-row--supplier">
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="country">Country of Registration <span class="required" aria-hidden="true">*</span></label>
                    <input class="form-group__input" type="text" id="country" name="country" required placeholder="e.g. South Africa, Kenya, UAE" />
                  </div>
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="year-established">Year Established</label>
                    <input class="form-group__input" type="number" id="year-established" name="year_established" placeholder="e.g. 2015" min="1900" max="2026" />
                  </div>
                </div>
                <div class="form-group form-group--supplier">
                  <label class="form-group__label" for="business-address">Business Address <span class="required" aria-hidden="true">*</span></label>
                  <input class="form-group__input" type="text" id="business-address" name="business_address" required placeholder="Full registered business address" />
                </div>
                <div class="form-group form-group--supplier">
                  <label class="form-group__label" for="website">Website</label>
                  <input class="form-group__input" type="url" id="website" name="website" placeholder="https://www.yourcompany.com" />
                </div>
              </div>

              <!-- Section 2: Contact Person -->
              <div class="supplier-form-section supplier-form-section--supplier">
                <div class="supplier-form-section__header">
                  <span class="supplier-form-section__num">02</span>
                  <h3 class="supplier-form-section__title">Contact Person</h3>
                </div>
                <div class="form-row form-row--supplier">
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="contact-name">Full Name <span class="required" aria-hidden="true">*</span></label>
                    <input class="form-group__input" type="text" id="contact-name" name="contact_name" required placeholder="Full name" autocomplete="name" />
                  </div>
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="contact-position">Position / Title <span class="required" aria-hidden="true">*</span></label>
                    <input class="form-group__input" type="text" id="contact-position" name="contact_position" required placeholder="e.g. Director, Procurement Manager" />
                  </div>
                </div>
                <div class="form-row form-row--supplier">
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="contact-email">Email Address <span class="required" aria-hidden="true">*</span></label>
                    <input class="form-group__input" type="email" id="contact-email" name="contact_email" required placeholder="name@company.com" autocomplete="email" />
                  </div>
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="contact-phone">Phone Number</label>
                    <input class="form-group__input" type="tel" id="contact-phone" name="contact_phone" placeholder="+27 / +971 / +44..." autocomplete="tel" />
                  </div>
                </div>
              </div>

              <!-- Section 3: Business Information -->
              <div class="supplier-form-section supplier-form-section--supplier">
                <div class="supplier-form-section__header">
                  <span class="supplier-form-section__num">03</span>
                  <h3 class="supplier-form-section__title">Business Information</h3>
                </div>
                <div class="form-group form-group--supplier">
                  <label class="form-group__label">Type of Business <span class="required" aria-hidden="true">*</span></label>
                  <div class="checkbox-group checkbox-group--supplier">
                    <label class="checkbox-label checkbox-label--supplier"><input class="checkbox-label__input" type="checkbox" name="biz_type" value="manufacturer" /><span class="checkbox-label__text">Manufacturer</span></label>
                    <label class="checkbox-label checkbox-label--supplier"><input class="checkbox-label__input" type="checkbox" name="biz_type" value="distributor" /><span class="checkbox-label__text">Distributor</span></label>
                    <label class="checkbox-label checkbox-label--supplier"><input class="checkbox-label__input" type="checkbox" name="biz_type" value="wholesaler" /><span class="checkbox-label__text">Wholesaler</span></label>
                    <label class="checkbox-label checkbox-label--supplier"><input class="checkbox-label__input" type="checkbox" name="biz_type" value="service_provider" /><span class="checkbox-label__text">Service Provider</span></label>
                    <label class="checkbox-label checkbox-label--supplier"><input class="checkbox-label__input" type="checkbox" name="biz_type" value="other" /><span class="checkbox-label__text">Other</span></label>
                  </div>
                </div>
                <div class="form-group form-group--supplier">
                  <label class="form-group__label" for="products-services">Key Products / Services <span class="required" aria-hidden="true">*</span></label>
                  <textarea class="form-group__textarea" id="products-services" name="products_services" required placeholder="Describe your main products or services (e.g. medical supplies, food commodities, logistics, shelter materials...)"></textarea>
                </div>
                <div class="form-row form-row--supplier">
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="markets">Main Markets / Regions Served</label>
                    <input class="form-group__input" type="text" id="markets" name="markets" placeholder="e.g. East Africa, Middle East, Global" />
                  </div>
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="employees">Number of Employees</label>
                    <select class="form-group__select" id="employees" name="employees">
                      <option value="">Select range</option>
                      <option>1-10</option>
                      <option>11-50</option>
                      <option>51-200</option>
                      <option>201-500</option>
                      <option>500+</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Section 4: Capability & Experience -->
              <div class="supplier-form-section supplier-form-section--supplier">
                <div class="supplier-form-section__header">
                  <span class="supplier-form-section__num">04</span>
                  <h3 class="supplier-form-section__title">Capability &amp; Experience</h3>
                </div>
                <div class="form-group form-group--supplier">
                  <label class="form-group__label" for="capabilities">Core Capabilities <span class="required" aria-hidden="true">*</span></label>
                  <textarea class="form-group__textarea" id="capabilities" name="capabilities" required placeholder="Describe your core capabilities and what makes your business a strong supply partner..."></textarea>
                </div>
                <div class="form-group form-group--supplier">
                  <label class="form-group__label" for="major-clients">Major Clients (if applicable)</label>
                  <textarea class="form-group__textarea" id="major-clients" name="major_clients" placeholder="List major clients or institutions you supply to (UN agencies, governments, NGOs, etc.)..."></textarea>
                </div>
                <div class="form-group form-group--supplier">
                  <label class="form-group__label" for="experience">Relevant Projects / Experience</label>
                  <textarea class="form-group__textarea" id="experience" name="experience" placeholder="Briefly describe relevant supply experience or notable projects..."></textarea>
                </div>
              </div>

              <!-- Section 5: Supply Capacity -->
              <div class="supplier-form-section supplier-form-section--supplier">
                <div class="supplier-form-section__header">
                  <span class="supplier-form-section__num">05</span>
                  <h3 class="supplier-form-section__title">Supply Capacity</h3>
                </div>
                <div class="form-row form-row--supplier">
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="supply-capacity">Production / Supply Capacity</label>
                    <input class="form-group__input" type="text" id="supply-capacity" name="supply_capacity" placeholder="e.g. 50,000 units/month" />
                  </div>
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="lead-times">Typical Lead Times</label>
                    <input class="form-group__input" type="text" id="lead-times" name="lead_times" placeholder="e.g. 2-4 weeks" />
                  </div>
                </div>
                <div class="form-row form-row--supplier">
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="moq">Minimum Order Quantities</label>
                    <input class="form-group__input" type="text" id="moq" name="moq" placeholder="e.g. 500 units minimum" />
                  </div>
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="delivery-capability">Delivery Capability</label>
                    <select class="form-group__select" id="delivery-capability" name="delivery_capability">
                      <option value="">Select option</option>
                      <option>Local delivery only</option>
                      <option>Regional delivery</option>
                      <option>International delivery</option>
                      <option>Global delivery capability</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Section 6: Certifications & Compliance -->
              <div class="supplier-form-section supplier-form-section--supplier">
                <div class="supplier-form-section__header">
                  <span class="supplier-form-section__num">06</span>
                  <h3 class="supplier-form-section__title">Certifications &amp; Compliance</h3>
                </div>
                <div class="form-group form-group--supplier">
                  <label class="form-group__label" for="certifications">Certifications Held (if any)</label>
                  <input class="form-group__input" type="text" id="certifications" name="certifications" placeholder="e.g. ISO 9001, CE, FDA, GMP..." />
                </div>
                <div class="form-group form-group--supplier">
                  <label class="form-group__label">Compliance Confirmations <span class="required" aria-hidden="true">*</span></label>
                  <div class="checkbox-group checkbox-group--supplier">
                    <label class="checkbox-label checkbox-label--supplier"><input class="checkbox-label__input" type="checkbox" name="compliance" value="anti_corruption" required /><span class="checkbox-label__text">We comply with applicable anti-corruption laws</span></label>
                    <label class="checkbox-label checkbox-label--supplier"><input class="checkbox-label__input" type="checkbox" name="compliance" value="labour" /><span class="checkbox-label__text">We comply with applicable labour laws</span></label>
                    <label class="checkbox-label checkbox-label--supplier"><input class="checkbox-label__input" type="checkbox" name="compliance" value="environment" /><span class="checkbox-label__text">We comply with applicable environmental regulations</span></label>
                    <label class="checkbox-label checkbox-label--supplier"><input class="checkbox-label__input" type="checkbox" name="compliance" value="code_of_conduct" /><span class="checkbox-label__text">We agree to comply with the MMT Alliance Supplier Code of Conduct</span></label>
                  </div>
                </div>
              </div>

              <!-- Section 7: Banking Details -->
              <div class="supplier-form-section supplier-form-section--supplier">
                <div class="supplier-form-section__header">
                  <span class="supplier-form-section__num">07</span>
                  <h3 class="supplier-form-section__title">Banking Details</h3>
                </div>
                <div class="form-row form-row--supplier">
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="bank-name">Bank Name</label>
                    <input class="form-group__input" type="text" id="bank-name" name="bank_name" placeholder="e.g. Standard Bank, Emirates NBD" />
                  </div>
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="account-name">Account Name</label>
                    <input class="form-group__input" type="text" id="account-name" name="account_name" placeholder="Name as on bank account" />
                  </div>
                </div>
                <div class="form-row form-row--supplier">
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="account-number">Account Number / IBAN</label>
                    <input class="form-group__input" type="text" id="account-number" name="account_number" placeholder="Account number or IBAN" />
                  </div>
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="swift">SWIFT / BIC Code</label>
                    <input class="form-group__input" type="text" id="swift" name="swift_code" placeholder="e.g. SBZAZAJJ" />
                  </div>
                </div>
              </div>

              <!-- Section 8: Declaration -->
              <div class="supplier-form-section supplier-form-section--supplier supplier-declaration">
                <div class="supplier-form-section__header">
                  <span class="supplier-form-section__num">08</span>
                  <h3 class="supplier-form-section__title">Declaration &amp; Commitment</h3>
                </div>
                <div class="declaration-box declaration-box--supplier">
                  <h4 class="declaration-box__title">Supplier Commitment Statement</h4>
                  <p>By submitting this form, I confirm that:</p>
                  <ul class="declaration-list declaration-list--supplier">
                    <li class="declaration-list__item">The information provided is accurate and complete to the best of my knowledge</li>
                    <li class="declaration-list__item">I/We agree to comply with the MMT Alliance Supplier Code of Conduct</li>
                    <li class="declaration-list__item">I/We will adhere to ethical and legal standards at all times</li>
                    <li class="declaration-list__item">I/We support responsible and sustainable procurement practices</li>
                    <li class="declaration-list__item">I/We understand that submission does not guarantee approval</li>
                  </ul>
                </div>
                <div class="form-row form-row--supplier" style="margin-top:var(--space-lg)">
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="declarant-name">Full Name <span class="required" aria-hidden="true">*</span></label>
                    <input class="form-group__input" type="text" id="declarant-name" name="declarant_name" required placeholder="Authorised signatory name" />
                  </div>
                  <div class="form-group form-group--supplier">
                    <label class="form-group__label" for="declarant-date">Date <span class="required" aria-hidden="true">*</span></label>
                    <input class="form-group__input" type="date" id="declarant-date" name="declarant_date" required />
                  </div>
                </div>
                <label class="checkbox-label checkbox-label--supplier" style="margin-top:var(--space-sm)">
                  <input class="checkbox-label__input" type="checkbox" id="declaration-agree" required />
                  <span class="checkbox-label__text">I confirm the above declaration and agree to MMT Alliance's policies and standards <span class="required" style="color:var(--sup-error)">*</span></span>
                </label>
              </div>

              <!-- Submit Button & Feedback -->
              <div style="margin-top:var(--space-xl);display:flex;gap:var(--space-md);flex-wrap:wrap;align-items:center">
                <button type="submit" class="btn btn--supplier-primary btn--supplier-submit" id="supplier-submit">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  Submit Registration
                </button>
                <p style="font-size:0.8rem;color:var(--sup-text-muted);max-width:40ch">Fields marked <span style="color:var(--sup-error)">*</span> are required. Our team will respond within 5-10 business days.</p>
              </div>

              <div id="supplier-feedback" class="form-feedback form-feedback--supplier" role="alert" aria-live="polite"></div>
            </form>
          </div>
        </div>
      </section>

      <!-- ===== BOTTOM CTA BAND ===== -->
      <div class="cta-band cta-band--supplier">
        <div class="container">
          <h2 class="cta-band__title reveal">Have Questions?</h2>
          <p class="cta-band__description reveal reveal-delay-1">Contact our procurement team directly if you have questions about the supplier registration process or our requirements.</p>
          <div class="cta-band__actions reveal reveal-delay-2">
            <a href="mailto:procurement@mmtalliance.com" class="btn btn--supplier-primary">procurement@mmtalliance.com</a>
            <a href="/supplier-code-of-conduct" class="btn btn--supplier-outline-white">Read Supplier Code of Conduct</a>
          </div>
        </div>
      </div>
    `;

    // Initialize components
    this.initForm();
    this.initAnimations();
  },

  // Set default date + form validation + submission
  initForm() {
    const dateInput = document.getElementById('declarant-date');
    if (dateInput && !dateInput.value) {
      dateInput.value = new Date().toISOString().split('T')[0];
    }

    const form = document.getElementById('supplier-form');
    const feedback = document.getElementById('supplier-feedback');
    const submitBtn = document.getElementById('supplier-submit');

    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();

      // Validate required fields
      const required = form.querySelectorAll('[required]');
      let valid = true;
      
      required.forEach(f => {
        f.style.borderColor = '';
        const label = f.closest('.checkbox-label--supplier');
        if (label) label.style.outline = '';
        
        const isCheckbox = f.type === 'checkbox';
        if (isCheckbox && !f.checked) {
          valid = false;
          if (label) label.style.outline = `2px solid var(--sup-error)`;
        } else if (!isCheckbox && !f.value.trim()) {
          valid = false;
          f.style.borderColor = 'var(--sup-error)';
        }
      });

      if (!valid) {
        feedback.className = 'form-feedback form-feedback--supplier form-feedback--error';
        feedback.style.display = 'block';
        feedback.textContent = 'Please complete all required fields before submitting.';
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return;
      }

      // Submit state
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Submitting...</span>';

      // Simulate API call
      setTimeout(() => {
        feedback.className = 'form-feedback form-feedback--supplier form-feedback--success';
        feedback.style.display = 'block';
        feedback.innerHTML = '<strong>Registration received.</strong> Thank you for your interest in becoming an MMT Alliance approved supplier. Our procurement team will review your submission and be in touch within 5-10 business days.';
        
        form.reset();
        if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
        
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Submit Registration';
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 1400);
    });
  },

  // Reveal animations on scroll
  initAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
};

Router.register('/become-a-supplier', BecomeSupplierPage.render.bind(BecomeSupplierPage));