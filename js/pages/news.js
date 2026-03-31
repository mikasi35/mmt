/* ============================================================
   pages/news.js — News & Media page
   Theme: Navy & Grey | Mobile Carousel
   ============================================================ */

const NewsPage = {
  heroBg: null,

  articles: [
    {
      id: 1,
      category: 'Partnership',
      date: 'March 2026',
      title: 'MMT Alliance Expands UN Vendor Registration Across East Africa Operations',
      excerpt: 'MMT Alliance has completed vendor registration with additional UN agencies, strengthening our ability to support humanitarian programmes across East Africa.',
      body: 'MMT Alliance has successfully completed the extended vendor registration process with three additional United Nations agencies, covering UNICEF, WFP, and UNHCR East Africa regional offices. This milestone significantly expands our capacity to respond rapidly to procurement tenders across the region. The registration process included full financial due diligence, supply chain capability assessments, and compliance verification against UN procurement standards.',
      image: 'https://images.unsplash.com/photo-1526666923127-b2970f64b422?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      category: 'Emergency Response',
      date: 'February 2026',
      title: 'Rapid Deployment: MMT Alliance Mobilises Emergency Medical Supplies Within 72 Hours',
      excerpt: 'Following a humanitarian crisis declaration, our emergency response team successfully mobilised critical medical supplies to three distribution points.',
      body: 'When a sudden humanitarian crisis was declared in a conflict-affected region, MMT Alliance activated its emergency response protocol immediately. Within 72 hours, our team had sourced, quality-verified, and dispatched critical medical consumables including wound care kits, oral rehydration salts, and essential medicines.',
      image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 3,
      category: 'Industry',
      date: 'January 2026',
      title: 'Global Procurement Trends 2026: What Humanitarian Organisations Need to Know',
      excerpt: 'Our team shares key insights on evolving international procurement standards, supplier compliance expectations, and logistics challenges.',
      body: 'The humanitarian procurement landscape is shifting significantly in 2026. Increased scrutiny on supplier due diligence, growing demand for environmental and ethical sourcing compliance, and the continued fragmentation of global logistics networks are reshaping supply chain management.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      category: 'Supply Chain',
      date: 'December 2025',
      title: 'MMT Alliance Completes Multi-Country Food Commodity Programme',
      excerpt: 'A six-month supply partnership covering food commodities across three countries in Southern Africa has been successfully concluded.',
      body: 'MMT Alliance has concluded a six-month food commodity supply programme operated in partnership with a major international NGO across Mozambique, Malawi, and Zimbabwe, serving over 80,000 beneficiaries with staple food items.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      category: 'Compliance',
      date: 'November 2025',
      title: 'MMT Alliance Publishes Updated Ethical Sourcing Policy',
      excerpt: 'In line with international standards and Australian legislative requirements, MMT Alliance has published its updated ethical sourcing framework.',
      body: 'MMT Alliance has released its updated Ethical Sourcing Policy and Modern Slavery Statement, reflecting our continued commitment to responsible procurement practices and labour standards compliance.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      category: 'Operations',
      date: 'October 2025',
      title: 'Shelter and NFI Supply Delivered to Conflict-Affected Population',
      excerpt: 'Working alongside humanitarian partners, MMT Alliance coordinated emergency shelter kit delivery to over 12,000 displaced households.',
      body: 'In response to a rapid displacement crisis, MMT Alliance coordinated the procurement and delivery of emergency shelter kits and non-food items to over 12,000 displaced households within 11 days.',
      image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&h=400&fit=crop',
      featured: false
    }
  ],

  render(container, options = {}) {
    const heroBg = options.heroBg || container.dataset?.heroBg || NewsPage.heroBg;
    const heroStyle = heroBg ? `style="--news-hero-bg: url('${heroBg}')"` : '';
    const heroClass = heroBg ? 'news-hero news-hero--image' : 'news-hero';

    const featuredArticles = NewsPage.articles.filter(a => a.featured);
    const allArticles = NewsPage.articles;

    container.innerHTML = `
      <!-- Page Hero -->
      <div class="${heroClass}" ${heroStyle}>
        <div class="container">
          <nav class="news-breadcrumb" aria-label="Breadcrumb">
            <a href="#/">Home</a>
            <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span>News &amp; Media</span>
          </nav>
          <h1>News &amp; Media</h1>
          <p>Insights, announcements, and developments from MMT Alliance and the global supply chain and humanitarian sector.</p>
        </div>
      </div>

      <!-- Featured Articles -->
      <section class="news-section">
        <div class="container">
          <div class="news-section-header reveal">
            <span class="news-section-label">Featured</span>
            <h2>Latest Updates</h2>
            <div class="news-divider"></div>
          </div>
          
          <!-- Mobile Carousel -->
          <div class="news-carousel-mobile">
            <div class="news-carousel-track" id="featured-carousel">
              ${featuredArticles.map((a, i) => `
                <article class="news-carousel-slide" data-id="${a.id}">
                  <div class="news-carousel-image">
                    <img src="${a.image}" alt="${a.title}" loading="lazy">
                    <div class="news-carousel-overlay"></div>
                  </div>
                  <div class="news-carousel-content">
                    <span class="news-tag">${a.category}</span>
                    <div class="news-date">${a.date}</div>
                    <h2 class="news-carousel-title">${a.title}</h2>
                    <p class="news-excerpt">${a.excerpt}</p>
                    <button class="news-read-more-btn" data-id="${a.id}">
                      Read Full Article
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                    </button>
                  </div>
                </article>
              `).join('')}
            </div>
            <div class="news-carousel-controls">
              <button class="news-carousel-btn prev" aria-label="Previous article">
                <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <div class="news-carousel-dots" id="carousel-dots"></div>
              <button class="news-carousel-btn next" aria-label="Next article">
                <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
            </div>
          </div>

          <!-- Desktop Grid -->
          <div class="news-featured-grid">
            ${featuredArticles.map((a, i) => `
              <article class="news-featured-card reveal reveal-delay-${(i % 3) + 1}" data-id="${a.id}">
                <div class="news-card-image">
                  <img src="${a.image}" alt="${a.title}" loading="lazy">
                </div>
                <div class="news-featured-content">
                  <span class="news-tag">${a.category}</span>
                  <div class="news-date">${a.date}</div>
                  <h2 class="news-featured-title">${a.title}</h2>
                  <p class="news-excerpt">${a.excerpt}</p>
                  <button class="news-read-more-btn" data-id="${a.id}">
                    Read Full Article
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </button>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Filter + All Articles -->
      <section class="news-section news-section--alt">
        <div class="container">
          <div class="news-section-header reveal">
            <span class="news-section-label">All Articles</span>
            <h2>Browse by Category</h2>
            <div class="news-divider"></div>
          </div>

          <div class="news-filter-bar reveal">
            <button class="news-filter-btn active" data-filter="all" aria-pressed="true">All</button>
            <button class="news-filter-btn" data-filter="Partnership" aria-pressed="false">Partnership</button>
            <button class="news-filter-btn" data-filter="Emergency Response" aria-pressed="false">Emergency Response</button>
            <button class="news-filter-btn" data-filter="Industry" aria-pressed="false">Industry</button>
            <button class="news-filter-btn" data-filter="Supply Chain" aria-pressed="false">Supply Chain</button>
            <button class="news-filter-btn" data-filter="Compliance" aria-pressed="false">Compliance</button>
            <button class="news-filter-btn" data-filter="Operations" aria-pressed="false">Operations</button>
          </div>

          <div class="news-all-grid" id="news-all-grid">
            ${allArticles.map((a, i) => `
              <article class="news-card reveal reveal-delay-${(i % 3) + 1}" data-id="${a.id}" data-category="${a.category}">
                <div class="news-card-image">
                  <img src="${a.image}" alt="${a.title}" loading="lazy">
                  <span class="news-tag">${a.category}</span>
                </div>
                <div class="news-card-content">
                  <div class="news-date">${a.date}</div>
                  <h3 class="news-title">${a.title}</h3>
                  <p class="news-excerpt">${a.excerpt}</p>
                  <div class="news-footer">
                    <button class="news-read-more" data-id="${a.id}">
                      Read Article
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                    </button>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Article Modal -->
      <div class="news-article-modal" id="article-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden>
        <div class="news-article-modal-backdrop" id="modal-backdrop"></div>
        <div class="news-article-modal-panel">
          <button class="news-modal-close" id="modal-close" aria-label="Close article">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
          <div class="news-modal-content" id="modal-content"></div>
        </div>
      </div>

      <!-- Media Enquiries CTA -->
      <div class="news-cta-band">
        <div class="container">
          <h2 id="cta-heading">Media Enquiries</h2>
          <p class="reveal reveal-delay-1">For press enquiries, interview requests, or to receive our latest updates, please contact our communications team directly.</p>
          <div class="actions reveal reveal-delay-2">
            <a href="/contact" class="btn btn-primary btn-lg">Contact Us</a>
            <a href="mailto:info@mmtalliance.com" class="news-btn-outline-white">info@mmtalliance.com</a>
          </div>
        </div>
      </div>
    `;

    NewsPage.initReveal();
    NewsPage.initFilter();
    NewsPage.initModal();
    NewsPage.initCarousel();
  },

  initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  },

  initFilter() {
    const btns = document.querySelectorAll('.news-filter-btn');
    const grid = document.getElementById('news-all-grid');
    if (!grid) return;

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const filter = btn.dataset.filter;

        grid.querySelectorAll('.news-card').forEach(card => {
          const match = filter === 'all' || card.dataset.category === filter;
          if (match) {
            card.style.display = '';
            setTimeout(() => card.style.opacity = '1', 10);
          } else {
            card.style.opacity = '0';
            setTimeout(() => card.style.display = 'none', 200);
          }
        });
      });
    });
  },

  initModal() {
    const modal = document.getElementById('article-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const closeBtn = document.getElementById('modal-close');
    const content = document.getElementById('modal-content');
    if (!modal) return;

    let lastFocusedElement = null;

    function trapFocus(e) {
      const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    function openArticle(id) {
      const article = NewsPage.articles.find(a => a.id === +id);
      if (!article) return;

      lastFocusedElement = document.activeElement;

      content.innerHTML = `
        <div class="news-modal-image">
          <img src="${article.image}" alt="${article.title}">
        </div>
        <div class="news-modal-body-content">
          <div>
            <span class="news-tag">${article.category}</span>
            <span class="news-date">${article.date}</span>
          </div>
          <h2 id="modal-title">${article.title}</h2>
          <div class="news-modal-divider"></div>
          <p class="news-modal-excerpt">${article.excerpt}</p>
          <div class="news-modal-body">
            ${article.body.split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('')}
          </div>
          <div class="news-modal-footer">
            <a href="/contact" class="btn btn-primary btn-lg">Get in Touch</a>
          </div>
        </div>
      `;

      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      closeBtn?.focus();
      document.addEventListener('keydown', trapFocus);
    }

    function closeModal() {
      modal.hidden = true;
      document.body.style.overflow = '';
      document.removeEventListener('keydown', trapFocus);
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }

    document.addEventListener('click', e => {
      const btn = e.target.closest('.news-read-more-btn, .news-read-more');
      if (btn) {
        e.preventDefault();
        openArticle(btn.dataset.id);
      }
    });

    closeBtn?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !modal.hidden) {
        e.preventDefault();
        closeModal();
      }
    });

    content?.addEventListener('click', e => e.stopPropagation());
  },

  initCarousel() {
    const track = document.getElementById('featured-carousel');
    const dotsContainer = document.getElementById('carousel-dots');
    const prevBtn = document.querySelector('.news-carousel-btn.prev');
    const nextBtn = document.querySelector('.news-carousel-btn.next');
    const slides = track?.querySelectorAll('.news-carousel-slide');
    
    if (!track || !slides || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Create dots
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = `news-carousel-dot${i === 0 ? ' active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('.news-carousel-dot');

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }

    // Event listeners
    nextBtn?.addEventListener('click', nextSlide);
    prevBtn?.addEventListener('click', prevSlide);

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }

    // Auto-play (optional, pauses on hover)
    let autoPlayInterval = setInterval(nextSlide, 6000);
    
    track.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    track.addEventListener('mouseleave', () => {
      autoPlayInterval = setInterval(nextSlide, 6000);
    });

    updateCarousel();
  }
};

// Register with router
if (typeof Router !== 'undefined') {
  Router.register('/news', (container, options) => {
    NewsPage.render(container, options);
  });
}

// Expose for debugging
if (typeof window !== 'undefined') {
  window.NewsPage = NewsPage;
}