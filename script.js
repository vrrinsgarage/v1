/**
 * VRRINS GARAGE - Main Script (Final Version)
 * Servis Mobil Rumahan & Mekanik Panggilan Palembang
 */

// Fungsi utama saat tombol kondisi mobil diklik
function openCondition(category) {
    const phoneNumber = "62895622499262";
    const message = `Halo, kak. 👋\n\nBiso bantu jadwalkan booking?\n\nAku nak booking layanan berdasarkan keluhan/kondisi: *${category}*.\n\n📝 Keluhan:\n[Isi keluhan kendaraan di sini]\n\nTerima kasih. 🙏`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

// Inisialisasi setelah DOM selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    console.log("VRRINS GARAGE Website Script Loaded Successfully - 2026 Edition.");

    // Efek halus untuk navigasi anchor (smooth scroll tambahan jika diperlukan)
    const links = document.querySelectorAll('nav a, .hero-buttons a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
