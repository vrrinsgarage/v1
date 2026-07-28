/* =========================================================
   VRRINS GARAGE — V3 BOOTSTRAP
   Perbaikan loading screen yang sebelumnya tidak pernah ditutup.
   Tidak mengubah layout, warna, kartu, atau sistem popup.
   ========================================================= */
(() => {
  'use strict';

  const hideLoader = () => {
    const loader = document.getElementById('page-loader');
    if (!loader) return;
    loader.classList.add('is-hidden');
    loader.setAttribute('aria-hidden', 'true');
  };

  // Jangan pernah membiarkan splash screen menutupi website.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hideLoader, { once: true });
  } else {
    hideLoader();
  }

  // Safety fallback untuk browser/hosting yang lambat menjalankan event.
  window.setTimeout(hideLoader, 1800);
})();
