/* ==========================================================================
   VRRINS GARAGE - SCRIPT.JS (Core Logic & UI/UX)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ----------------------------------------------------------------------
       1. NAVIGASI MOBILE (HAMBURGER MENU)
       ---------------------------------------------------------------------- */
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Tutup menu saat link diklik
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    /* ----------------------------------------------------------------------
       2. FAQ ACCORDION LOGIC
       ---------------------------------------------------------------------- */
    const accordions = document.querySelectorAll('.accordion-header');
    
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            // Tutup accordion lain yang sedang terbuka
            accordions.forEach(otherAcc => {
                if (otherAcc !== this && otherAcc.classList.contains('active')) {
                    otherAcc.classList.remove('active');
                    otherAcc.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle accordion yang diklik
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (this.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    /* ----------------------------------------------------------------------
       3. MODAL POP-UP LOGIC (PENANGANAN KLIK LUAR AREA)
       ---------------------------------------------------------------------- */
    const modalOverlay = document.getElementById('mainModal');
    
    if (modalOverlay) {
        // Tutup modal jika area gelap (overlay) diklik
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
});

/* ==========================================================================
   FUNGSI GLOBAL (Dapat dipanggil dari HTML atau KODE 4 services.js)
   ========================================================================== */

/* --------------------------------------------------------------------------
   A. FUNGSI BOOKING WHATSAPP
   -------------------------------------------------------------------------- */
window.bookWhatsApp = function(namaLayanan) {
    const noWA = "62895622499262";
    const pesan = `Halo, kak. 👋\n\nBiso bantu jadwalkan booking?\n\nAku nak booking layanan *${namaLayanan}*.\n\nTerima kasih. 🙏`;
    const encodedPesan = encodeURIComponent(pesan);
    const waLink = `https://wa.me/${noWA}?text=${encodedPesan}`;
    
    window.open(waLink, '_blank');
};

/* --------------------------------------------------------------------------
   B. FUNGSI KONTROL MODAL
   -------------------------------------------------------------------------- */
window.closeModal = function() {
    const modalOverlay = document.getElementById('mainModal');
    if (modalOverlay) {
        modalOverlay.classList.remove('show');
        // Kembalikan scroll pada body
        document.body.style.overflow = 'auto';
    }
};

window.openModal = function() {
    const modalOverlay = document.getElementById('mainModal');
    if (modalOverlay) {
        modalOverlay.classList.add('show');
        // Kunci scroll pada body agar background tidak ikut ter-scroll
        document.body.style.overflow = 'hidden';
    }
};

/* --------------------------------------------------------------------------
   C. RENDER DATA KE MODAL (Terhubung dengan data di services.js)
   -------------------------------------------------------------------------- */

// Render Modal untuk Detail Layanan (Paket / Subkategori Spesifik)
window.renderDetailLayanan = function(layananId) {
    // Memanggil data dari database layanan (KODE 4)
    // Asumsi objek global: window.vrrinsData.layanan[layananId]
    if (!window.vrrinsData || !window.vrrinsData.layanan[layananId]) {
        console.error("Data layanan tidak ditemukan!");
        return;
    }

    const data = window.vrrinsData.layanan[layananId];
    const modalContent = document.querySelector('#mainModal .modal-content');
    
    // Injeksi HTML ke dalam Modal
    modalContent.innerHTML = `
        <button class="close-modal" onclick="closeModal()">×</button>
        <img src="${data.foto}" alt="${data.nama}" class="modal-hero-img">
        
        <div class="modal-body-padding">
            <h3 class="modal-title">${data.nama}</h3>
            <p class="modal-desc">${data.deskripsi}</p>
            
            <div class="modal-info-box">
                <div class="modal-info-item">
                    <span>Estimasi Waktu</span>
                    <strong>⏱️ ${data.estimasiWaktu}</strong>
                </div>
                <div class="modal-info-item">
                    <span>Estimasi Biaya</span>
                    <strong>💰 ${data.estimasiBiaya}</strong>
                </div>
            </div>

            <h4 class="modal-list-title">Pekerjaan yang Dilakukan:</h4>
            <ul class="modal-list">
                ${data.pekerjaan.map(item => `<li>${item}</li>`).join('')}
            </ul>

            <h4 class="modal-list-title">Yang Tidak Termasuk:</h4>
            <ul class="modal-list exc-list">
                ${data.tidakTermasuk.map(item => `<li>${item}</li>`).join('')}
            </ul>

            <p style="font-size: 11px; color: var(--silver-gray); margin-bottom: 20px; font-style: italic;">
                *Catatan: ${data.catatan}
            </p>

            <button class="btn btn-wa-primary w-100" onclick="bookWhatsApp('${data.nama}')">
                🟢 BOOKING WHATSAPP
            </button>
        </div>
    `;

    openModal();
};

// Render Modal untuk Kategori Kondisi Mobil (Mesin, Rem, dll)
window.renderKategori = function(kategoriId) {
    // Memanggil data dari database kategori (KODE 4)
    // Asumsi objek global: window.vrrinsData.kategori[kategoriId]
    if (!window.vrrinsData || !window.vrrinsData.kategori[kategoriId]) {
        console.error("Data kategori tidak ditemukan!");
        return;
    }

    const data = window.vrrinsData.kategori[kategoriId];
    const modalContent = document.querySelector('#mainModal .modal-content');
    
    let sublayananHTML = '';
    
    // Looping daftar subkategori (Layanan di dalam kategori ini)
    data.subkategori.forEach(sub => {
        sublayananHTML += `
            <div class="cat-service-item">
                <div class="cat-service-info">
                    <h5>${sub.nama}</h5>
                    <p>Mulai dari ${sub.hargaMulai}</p>
                </div>
                <button class="btn-sm-detail" onclick="renderDetailLayanan('${sub.id}')">
                    LIHAT DETAIL
                </button>
            </div>
        `;
    });

    // Injeksi HTML Kategori ke dalam Modal
    modalContent.innerHTML = `
        <button class="close-modal" onclick="closeModal()">×</button>
        <img src="${data.foto}" alt="${data.nama}" class="modal-hero-img">
        
        <div class="modal-body-padding">
            <h3 class="modal-title">${data.icon} ${data.nama}</h3>
            <p class="modal-desc" style="margin-bottom: 8px;">${data.deskripsi}</p>
            <p style="font-size: 11px; color: var(--racing-red); margin-bottom: 20px; font-weight: bold;">
                Total ${data.subkategori.length} Layanan
            </p>
            
            <div class="kategori-list-wrapper">
                ${sublayananHTML}
            </div>
        </div>
    `;

    openModal();
};
