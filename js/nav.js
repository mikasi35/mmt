// ========== NAV.JS ==========
(function() {
  // DOM elements
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const backdrop = document.querySelector('.nav-backdrop');
  const navContainer = document.querySelector('.nav-container');
  const bodyEl = document.body;

  // Icons (grid / X)
  const hamburgerIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
  const closeIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

  let isMobileView = window.innerWidth <= 768;
  let mobileHandlersAttached = false;

  // Update toggle button icon based on expanded state
  function updateToggleIcon(isExpanded) {
    if (!navToggle) return;
    navToggle.innerHTML = isExpanded ? closeIcon : hamburgerIcon;
  }

  // Open/close main mobile menu
  function toggleMainMenu(forceState) {
    if (!navMenu) return;
    const isActive = navMenu.classList.contains('active');
    const shouldBeOpen = forceState !== undefined ? forceState : !isActive;
    
    if (shouldBeOpen) {
      navMenu.classList.add('active');
      if (backdrop) backdrop.classList.add('active');
      navToggle.setAttribute('aria-expanded', 'true');
      updateToggleIcon(true);
      if (window.innerWidth <= 768) {
        bodyEl.style.overflow = 'hidden';
      }
    } else {
      navMenu.classList.remove('active');
      if (backdrop) backdrop.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      updateToggleIcon(false);
      bodyEl.style.overflow = '';
      collapseAllMobileDropdowns();
    }
  }

  // collapse all expanded dropdowns (for mobile)
  function collapseAllMobileDropdowns() {
    if (!isMobileView) return;
    const allDropdowns = document.querySelectorAll('.nav-dropdown');
    const allSubmenuItems = document.querySelectorAll('.has-submenu');
    allDropdowns.forEach(drop => drop.classList.remove('expanded'));
    allSubmenuItems.forEach(sub => sub.classList.remove('expanded'));
    // update aria-expanded on triggers
    document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
      trigger.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('.submenu-trigger').forEach(trigger => {
      trigger.setAttribute('aria-expanded', 'false');
    });
  }

  // --- Mobile submenu toggling ---
  function handleDropdownTriggerClick(e) {
    if (!isMobileView) return;
    e.preventDefault();
    e.stopPropagation();
    const parentLi = this.closest('.nav-dropdown');
    if (!parentLi) return;
    const isExpanded = parentLi.classList.contains('expanded');
    
    // close other open dropdowns for cleaner UX
    if (!isExpanded) {
      const allOpen = document.querySelectorAll('.nav-dropdown.expanded');
      allOpen.forEach(openDropdown => {
        if (openDropdown !== parentLi) {
          openDropdown.classList.remove('expanded');
          const openTrigger = openDropdown.querySelector('.dropdown-trigger');
          if (openTrigger) openTrigger.setAttribute('aria-expanded', 'false');
        }
      });
    }
    
    parentLi.classList.toggle('expanded');
    const nowExpanded = parentLi.classList.contains('expanded');
    this.setAttribute('aria-expanded', nowExpanded ? 'true' : 'false');
    
    if (!nowExpanded) {
      const nestedSubmenus = parentLi.querySelectorAll('.has-submenu');
      nestedSubmenus.forEach(sub => {
        sub.classList.remove('expanded');
        const subTrigger = sub.querySelector('.submenu-trigger');
        if (subTrigger) subTrigger.setAttribute('aria-expanded', 'false');
      });
    }
  }

  function handleSubmenuTriggerClick(e) {
    if (!isMobileView) return;
    e.preventDefault();
    e.stopPropagation();
    const parentItem = this.closest('.has-submenu');
    if (!parentItem) return;
    const isExpanded = parentItem.classList.contains('expanded');
    
    if (!isExpanded) {
      const sameDropdown = parentItem.closest('.dropdown-menu');
      if (sameDropdown) {
        const siblings = sameDropdown.querySelectorAll('.has-submenu');
        siblings.forEach(sib => {
          if (sib !== parentItem) {
            sib.classList.remove('expanded');
            const sibTrigger = sib.querySelector('.submenu-trigger');
            if (sibTrigger) sibTrigger.setAttribute('aria-expanded', 'false');
          }
        });
      }
    }
    
    parentItem.classList.toggle('expanded');
    const nowExpanded = parentItem.classList.contains('expanded');
    this.setAttribute('aria-expanded', nowExpanded ? 'true' : 'false');
  }

  // Attach/detach mobile click handlers
  function attachMobileDropdownEvents() {
    if (!isMobileView) return;
    if (mobileHandlersAttached) return;
    
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    dropdownTriggers.forEach(trigger => {
      trigger.removeEventListener('click', handleDropdownTriggerClick);
      trigger.addEventListener('click', handleDropdownTriggerClick);
    });
    
    const submenuTriggers = document.querySelectorAll('.submenu-trigger');
    submenuTriggers.forEach(trigger => {
      trigger.removeEventListener('click', handleSubmenuTriggerClick);
      trigger.addEventListener('click', handleSubmenuTriggerClick);
    });
    
    mobileHandlersAttached = true;
  }
  
  function detachMobileDropdownEvents() {
    if (!mobileHandlersAttached) return;
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    const submenuTriggers = document.querySelectorAll('.submenu-trigger');
    dropdownTriggers.forEach(trigger => {
      trigger.removeEventListener('click', handleDropdownTriggerClick);
    });
    submenuTriggers.forEach(trigger => {
      trigger.removeEventListener('click', handleSubmenuTriggerClick);
    });
    mobileHandlersAttached = false;
  }

  // Handle window resize
  function handleResize() {
    const newIsMobile = window.innerWidth <= 768;
    if (newIsMobile === isMobileView) return;
    
    isMobileView = newIsMobile;
    
    if (!isMobileView) {
      // Switch to desktop: close mobile menu and reset
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (backdrop) backdrop.classList.remove('active');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        updateToggleIcon(false);
        bodyEl.style.overflow = '';
      }
      collapseAllMobileDropdowns();
      detachMobileDropdownEvents();
      bodyEl.style.overflow = '';
    } else {
      // Switch to mobile: ensure menu closed, reset submenus
      if (navMenu) navMenu.classList.remove('active');
      if (backdrop) backdrop.classList.remove('active');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      updateToggleIcon(false);
      collapseAllMobileDropdowns();
      bodyEl.style.overflow = '';
      attachMobileDropdownEvents();
    }
  }

  // Close main menu when a regular link is clicked (except triggers)
  function handleNavLinkClicks() {
    const allLinks = document.querySelectorAll('.nav-link, .dropdown-link, .submenu-link');
    allLinks.forEach(link => {
      link.removeEventListener('click', closeOnLinkClick);
      link.addEventListener('click', closeOnLinkClick);
    });
  }
  
  function closeOnLinkClick(e) {
    const isTrigger = e.target.closest('.dropdown-trigger') || e.target.closest('.submenu-trigger');
    if (isTrigger && isMobileView) {
      return; // handled separately
    }
    if (isMobileView && navMenu && navMenu.classList.contains('active')) {
      toggleMainMenu(false);
    }
  }

  // Backdrop click closes menu
  function backdropCloseHandler() {
    if (backdrop) {
      backdrop.addEventListener('click', function() {
        if (isMobileView && navMenu && navMenu.classList.contains('active')) {
          toggleMainMenu(false);
        }
      });
    }
  }

  // Initialization
  function init() {
    if (!navToggle || !navMenu) return;
    updateToggleIcon(false);
    navToggle.setAttribute('aria-expanded', 'false');
    
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMainMenu();
    });
    
    backdropCloseHandler();
    
    // Resize handler with debounce
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        handleResize();
        handleNavLinkClicks();
      }, 100);
    });
    
    // Initial setup
    isMobileView = window.innerWidth <= 768;
    if (isMobileView) {
      attachMobileDropdownEvents();
    } else {
      detachMobileDropdownEvents();
    }
    
    handleNavLinkClicks();
    
    // Close menu if clicking outside (but not on nav or toggle)
    document.addEventListener('click', function(e) {
      if (!isMobileView) return;
      const isInsideNav = navContainer?.contains(e.target);
      const isToggleBtn = navToggle?.contains(e.target);
      if (!isInsideNav && !isToggleBtn && navMenu?.classList.contains('active')) {
        toggleMainMenu(false);
      }
    });
    
    // Orientation change reset
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        if (window.innerWidth > 768 && navMenu) navMenu.classList.remove('active');
        if (backdrop) backdrop.classList.remove('active');
        bodyEl.style.overflow = '';
        collapseAllMobileDropdowns();
      }, 30);
    });
  }
  
  init();
})();