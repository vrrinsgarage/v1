// ==========================================
// VRRINS GARAGE - MAIN SCRIPT
// MEMBUTUHKAN: services.js
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // --- ELEMENT SELECTION ---
  const serviceGrid = document.getElementById("service-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("search-input");
  
  // Navbar Mobile Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  // Modal Elements
  const modal = document.getElementById("service-modal");
  const modalCloseBtn = document.getElementById("modal-close");
  const modalTitle = document.getElementById("modal-title");
  const modalCategory = document.getElementById("modal-category");
  const modalPrice = document.getElementById("modal-price");
  const modalDuration = document.getElementById("modal-duration");
  const modalDescription = document.getElementById("modal-description");
  const modalPekerjaanList = document.getElementById("modal-pekerjaan");
  const modalManfaatList = document.getElementById("modal-manfaat");
  const modalTidakTermasukList = document.getElementById("modal-tidak-termasuk");
  const modalBookingBtn = document.getElementById("modal-booking-btn");

  // State Management
  let activeCategory = "ALL";
  let searchQuery = "";

  // ==========================================
  // 1. MOBILE NAVBAR TOGGLE
  // ==========================================
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking nav-link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  // ==========================================
  // 2. RENDER GRID KONDISI MOBIL (GRID 3x3)
  // ==========================================
  function renderServices() {
    if (!serviceGrid) return;

    // Pastikan data 'services' dari services.js tersedia
    if (typeof services === "undefined" || !Array.isArray(services)) {
      serviceGrid.innerHTML = `
        <div class="empty-state">
          <p>⚠️ Data layanan belum dimuat. Pastikan services.js terhubung.</p>
        </div>
      `;
      return;
    }

    // Filter berdasarkan Kategori & Input Pencarian
    const filteredData = services.filter((item) => {
      const matchCategory =
        activeCategory === "ALL" ||
        item.kategori.toUpperCase() === activeCategory.toUpperCase();

      const matchSearch =
        item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.kategori.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    });

    // Tampilan jika data tidak ditemukan
    if (filteredData.length === 0) {
      serviceGrid.innerHTML = `
        <div class="empty-state">
          <p class="empty-icon">🔍</p>
          <h3>Layanan Tidak Ditemukan</h3>
          <p>Coba kata kunci lain atau pilih kategori yang berbeda.</p>
        </div>
      `;
      return;
    }

    // Generate HTML Card Grid 3x3
    serviceGrid.innerHTML = filteredData
      .map((service) => {
        return `
        <div class="service-card" onclick="openModal('${service.id}')">
          <div class="card-header">
            <span class="service-icon">${service.icon || "⚙️"}</span>
            <span class="service-badge">${service.kategori}</span>
          </div>
          <h3 class="service-title">${service.nama}</h3>
          <p class="service-desc">${service.deskripsi}</p>
          <div class="card-footer">
            <div class="service-meta">
              <span class="service-price">${service.harga}</span>
              <span class="service-duration">⏱️ ${service.durasi}</span>
            </div>
            <button class="btn-detail" aria-label="Detail ${service.nama}">
              Detail &rarr;
            </button>
          </div>
        </div>
      `;
      })
      .join("");
  }

  // ==========================================
  // 3. LOGIKA FILTER KATEGORI 3x3 & SEARCH
  // ==========================================
  if (filterButtons.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        activeCategory = btn.getAttribute("data-filter") || "ALL";
        renderServices();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderServices();
    });
  }

  // ==========================================
  // 4. LOGIKA MODAL DETAIL & WA BOOKING INTEGRATION
  // ==========================================
  window.openModal = function (serviceId) {
    if (typeof services === "undefined") return;

    const item = services.find((s) => s.id === serviceId);
    if (!item || !modal) return;

    // Inject content into modal
    if (modalTitle) modalTitle.textContent = item.nama;
    if (modalCategory) modalCategory.textContent = item.kategori;
    if (modalPrice) modalPrice.textContent = item.harga;
    if (modalDuration) modalDuration.textContent = item.durasi;
    if (modalDescription) modalDescription.textContent = item.deskripsi;

    // Helper Function untuk Render List
    const renderList = (element, listData) => {
      if (!element) return;
      if (listData && listData.length > 0) {
        element.innerHTML = listData.map((li) => `<li>${li}</li>`).join("");
      } else {
        element.innerHTML = `<li><em>Tidak ada informasi khusus.</em></li>`;
      }
    };

    renderList(modalPekerjaanList, item.pekerjaan);
    renderList(modalManfaatList, item.manfaat);
    renderList(modalTidakTermasukList, item.tidakTermasuk);

    // Format Pesan WhatsApp Otomatis
    if (modalBookingBtn) {
      const formattedMessage = encodeURIComponent(
        `Halo, kak. 👋\nBiso bantu jadwalkan booking?\nAku nak booking layanan *${item.nama}* (${item.harga}).\nTerima kasih. 🙏`
      );
      modalBookingBtn.href = `https://wa.me/62895622499262?text=${formattedMessage}`;
    }

    // Tampilkan Modal
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Disable scroll latar belakang
  };

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
  }

  // Event Listeners Tutup Modal
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("show")) {
      closeModal();
    }
  });

  // ==========================================
  // 5. ACCORDION FAQ
  // ==========================================
  const faqItems = document.querySelectorAll(".faq-item");

  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const questionBtn = item.querySelector(".faq-question");

      if (questionBtn) {
        questionBtn.addEventListener("click", () => {
          const isOpen = item.classList.contains("active");

          // Tutup item FAQ lain yang sedang terbuka
          faqItems.forEach((otherItem) => {
            otherItem.classList.remove("active");
            const answer = otherItem.querySelector(".faq-answer");
            const icon = otherItem.querySelector(".faq-icon");
            if (answer) answer.style.maxHeight = null;
            if (icon) icon.textContent = "+";
          });

          // Toggle Item Saat Ini
          if (!isOpen) {
            item.classList.add("active");
            const answer = item.querySelector(".faq-answer");
            const icon = item.querySelector(".faq-icon");
            if (answer) {
              answer.style.maxHeight = answer.scrollHeight + "px";
            }
            if (icon) icon.textContent = "−";
          }
        });
      }
    });
  }

  // --- INITIAL RENDER ---
  renderServices();
});