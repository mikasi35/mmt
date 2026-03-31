/* ============================================================
   APP.JS — Application bootstrap
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Set footer year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialise router (kicks off first page render)
  Router.init();
});
