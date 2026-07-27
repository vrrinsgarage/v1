/* ==========================================================================
   VRRINS GARAGE - SERVICES.JS (Database 54 Layanan & Kategori)
   Tema: Premium, Mobile First, Fast Loading
   ========================================================================== */

window.vrrinsData = {
    // ======================================================================
    // 1. DATABASE LAYANAN (Total 54 Layanan Detail)
    // ======================================================================
    layanan: {
        /* --- 4 PAKET UTAMA VG (Tampil di Beranda - Grid 2x2) --- */
        "vg-check": {
            nama: "VG CHECK",
            foto: "images/vg-check.webp",
            deskripsi: "Layanan pemeriksaan menyeluruh untuk mendiagnosa kondisi aktual mobil Anda sebelum melakukan servis lanjutan.",
            estimasiWaktu: "30 - 90 Menit",
            estimasiBiaya: "Rp 100.000 - Rp 150.000",
            pekerjaan: [
                "Pemeriksaan ruang mesin & kebocoran",
                "Scan sistem ECU / Kelistrikan (OBD2)",
                "Pengecekan kualitas oli & cairan",
                "Pemeriksaan kaki-kaki & sistem pengereman"
            ],
            tidakTermasuk: ["Penggantian sparepart", "Pembongkaran mesin (Overhaul)", "Biaya perbaikan kerusakan"],
            catatan: "Sangat direkomendasikan jika Anda ragu dengan penyakit/masalah mobil Anda."
        },
        "vg-tune": {
            nama: "VG TUNE (Bensin & Diesel)",
            foto: "images/vg-tune.webp",
            deskripsi: "Paket Tune Up lengkap untuk mengembalikan performa mesin Bensin maupun Diesel (Basic, Plus, Pro).",
            estimasiWaktu: "45 - 150 Menit",
            estimasiBiaya: "Mulai Rp 150.000",
            pekerjaan: [
                "Pembersihan Throttle Body & Injektor",
                "Pembersihan filter udara & filter AC",
                "Pemeriksaan dan pembersihan busi / glow plug",
                "Carbon clean (Khusus paket Plus/Pro)"
            ],
            tidakTermasuk: ["Harga busi baru", "Filter udara baru", "Ganti koil"],
            catatan: "Biaya menyesuaikan jenis paket (Basic/Plus/Pro) dan tipe mesin kendaraan."
        },
        "vg-brake": {
            nama: "VG BRAKE SERVICE",
            foto: "images/vg-brake.webp",
            deskripsi: "Perawatan dan pembersihan sistem pengereman 4 roda untuk menjaga keamanan dan responsivitas rem.",
            estimasiWaktu: "45 - 90 Menit",
            estimasiBiaya: "Rp 140.000 - Rp 175.000",
            pekerjaan: [
                "Pelepasan & pembersihan 4 roda",
                "Pembersihan kampas dan cakram/tromol",
                "Pemberian grease/gemuk pada pin caliper",
                "Penyetelan rem tangan (Handbrake)"
            ],
            tidakTermasuk: ["Penggantian kampas rem baru", "Kuras minyak rem", "Bubut cakram"],
            catatan: "Layanan ini untuk servis rutin, belum termasuk part jika kampas rem sudah habis."
        },
        "vg-oil": {
            nama: "VG OIL SERVICE",
            foto: "images/vg-oil.webp",
            deskripsi: "Layanan penggantian oli mesin dan transmisi secara profesional dan bersih di lokasi Anda.",
            estimasiWaktu: "15 - 30 Menit",
            estimasiBiaya: "Rp 50.000 - Rp 75.000 (Jasa)",
            pekerjaan: [
                "Penyedotan/Pembuangan oli lama",
                "Penggantian filter oli (jika ada)",
                "Pengisian oli baru sesuai takaran pabrik",
                "Reset indikator oli pada panel instrumen"
            ],
            tidakTermasuk: ["Harga oli mesin/transmisi", "Harga filter oli", "Engine flush"],
            catatan: "Harga tertera adalah biaya jasa. Customer dapat menyiapkan oli sendiri atau memesan melalui kami."
        },

        /* --- 7 LAYANAN KATEGORI: MESIN --- */
        "mesin-1": {
            nama: "Gurah Mesin (Carbon Cleaner)",
            foto: "images/carbon-cleaner.webp",
            deskripsi: "Membersihkan kerak karbon di ruang bakar untuk tarikan mesin yang lebih ringan dan irit BBM.",
            estimasiWaktu: "60 Menit",
            estimasiBiaya: "Rp 150.000",
            pekerjaan: ["Memasukkan cairan carbon cleaner ke ruang bakar", "Penyedotan kerak karbon", "Pengecekan busi"],
            tidakTermasuk: ["Ganti busi", "Tune up throttle"],
            catatan: "Hanya untuk mesin bensin."
        },
        "mesin-2": {
            nama: "Ganti Busi (4 Pcs)",
            foto: "images/ganti-busi.webp",
            deskripsi: "Jasa penggantian busi untuk mengembalikan sistem pembakaran yang optimal.",
            estimasiWaktu: "30 Menit",
            estimasiBiaya: "Rp 50.000",
            pekerjaan: ["Pelepasan busi lama", "Pemeriksaan kondisi ruang bakar", "Pemasangan busi baru"],
            tidakTermasuk: ["Harga part busi", "Pembersihan injektor"],
            catatan: "Disarankan ganti busi setiap 20.000 - 40.000 km."
        },
        "mesin-3": {
            nama: "Ganti Koil Pengapian",
            foto: "images/ganti-koil.webp",
            deskripsi: "Penggantian koil pengapian (ignition coil) yang mati atau bocor untuk mengatasi mesin pincang.",
            estimasiWaktu: "30 Menit",
            estimasiBiaya: "Rp 50.000 - Rp 100.000",
            pekerjaan: ["Scanning misfire", "Pencabutan koil lama", "Pemasangan koil baru"],
            tidakTermasuk: ["Harga sparepart koil", "Ganti busi"],
            catatan: "Estimasi biaya jasa tergantung tingkat kesulitan posisi koil."
        },
        "mesin-4": {
            nama: "Ganti Engine Mounting",
            foto: "images/engine-mounting.webp",
            deskripsi: "Mengganti dudukan mesin untuk menghilangkan getaran kasar yang masuk ke dalam kabin.",
            estimasiWaktu: "90 - 120 Menit",
            estimasiBiaya: "Rp 150.000 / Titik",
            pekerjaan: ["Mendongkrak mesin", "Pelepasan mounting lama", "Pemasangan mounting baru"],
            tidakTermasuk: ["Harga Engine Mounting"],
            catatan: "Waktu pengerjaan bisa berbeda tergantung posisi mounting."
        },
        "mesin-5": {
            nama: "Ganti Paking Tutup Klep",
            foto: "images/paking-klep.webp",
            deskripsi: "Mengganti seal/paking deklep untuk mengatasi kebocoran oli di bagian atas mesin.",
            estimasiWaktu: "60 Menit",
            estimasiBiaya: "Rp 150.000",
            pekerjaan: ["Bongkar tutup klep", "Pembersihan sisa oli/lem lama", "Pasang paking & sealant baru"],
            tidakTermasuk: ["Harga paking klep", "Oli mesin"],
            catatan: "Disarankan tidak menyalakan mesin 30 menit setelah pemasangan agar sealant kering."
        },
        "mesin-6": {
            nama: "Cek Kompresi Mesin",
            foto: "images/cek-kompresi.webp",
            deskripsi: "Pengukuran tekanan kompresi pada setiap silinder untuk mengetahui kesehatan internal mesin.",
            estimasiWaktu: "45 Menit",
            estimasiBiaya: "Rp 100.000",
            pekerjaan: ["Pelepasan busi", "Pengukuran tekanan tiap silinder dengan compression tester", "Laporan hasil kompresi"],
            tidakTermasuk: ["Turun mesin (overhaul)", "Ganti ring piston"],
            catatan: "Diperlukan jika mobil ngobos atau hilang tenaga drastis."
        },
        "mesin-7": {
            nama: "Stel Klep Mesin",
            foto: "images/stel-klep.webp",
            deskripsi: "Penyetelan celah katup/klep (valve clearance) agar suara mesin lebih halus dan performa kembali standar.",
            estimasiWaktu: "90 Menit",
            estimasiBiaya: "Rp 150.000",
            pekerjaan: ["Bongkar cover deklep", "Pencarian Top Mati (TDC)", "Penyetelan celah klep in & ex"],
            tidakTermasuk: ["Ganti paking klep"],
            catatan: "Mesin harus dalam kondisi dingin sebelum disetel."
        },

        /* --- 5 LAYANAN KATEGORI: PELUMASAN --- */
        "pelumas-1": {
            nama: "Ganti Filter Oli",
            foto: "images/filter-oli.webp",
            deskripsi: "Jasa penggantian saringan oli mesin. Direkomendasikan diganti setiap ganti oli mesin.",
            estimasiWaktu: "15 Menit",
            estimasiBiaya: "Rp 25.000",
            pekerjaan: ["Melepas filter oli lama", "Membersihkan housing", "Memasang filter baru"],
            tidakTermasuk: ["Harga filter oli"],
            catatan: "Biaya ini berlaku jika hanya ganti filter tanpa paket VG OIL."
        },
        "pelumas-2": {
            nama: "Engine Flush",
            foto: "images/engine-flush.webp",
            deskripsi: "Pembersihan ruang sirkulasi oli menggunakan cairan khusus sebelum mengganti oli baru.",
            estimasiWaktu: "20 Menit",
            estimasiBiaya: "Rp 50.000",
            pekerjaan: ["Penuangan cairan flush", "Running mesin idle 10-15 menit", "Pembuangan oli kotor"],
            tidakTermasuk: ["Cairan Engine Flush", "Oli baru"],
            catatan: "Sangat disarankan untuk mobil yang sering telat ganti oli."
        },
        "pelumas-3": {
            nama: "Ganti Oli Gardan",
            foto: "images/oli-gardan.webp",
            deskripsi: "Penggantian pelumas pada differential/gardan (untuk mobil penggerak roda belakang/RWD/4WD).",
            estimasiWaktu: "20 Menit",
            estimasiBiaya: "Rp 50.000",
            pekerjaan: ["Pembuangan oli gardan lama", "Pembersihan baut magnet", "Pengisian oli gardan baru"],
            tidakTermasuk: ["Harga oli gardan"],
            catatan: "Disarankan ganti setiap 40.000 km."
        },
        "pelumas-4": {
            nama: "Ganti Oli Transmisi Manual",
            foto: "images/oli-mt.webp",
            deskripsi: "Jasa penggantian oli untuk gigi transmisi manual agar perpindahan gigi tetap mulus.",
            estimasiWaktu: "20 Menit",
            estimasiBiaya: "Rp 50.000",
            pekerjaan: ["Tap oli transmisi lama", "Pengisian oli baru"],
            tidakTermasuk: ["Harga oli transmisi"],
            catatan: "Kapasitas oli menyesuaikan tipe mobil (umumnya 2-3 Liter)."
        },
        "pelumas-5": {
            nama: "Pengecekan Kebocoran Oli",
            foto: "images/cek-bocor-oli.webp",
            deskripsi: "Investigasi dan pelacakan titik kebocoran oli di area bawah mesin dan transmisi.",
            estimasiWaktu: "30 Menit",
            estimasiBiaya: "Rp 50.000",
            pekerjaan: ["Pembersihan area mesin bawah", "Running test", "Identifikasi sumber rembesan"],
            tidakTermasuk: ["Penggantian seal/paking yang bocor"],
            catatan: "Biaya ini merupakan biaya inspeksi saja."
        },

        /* --- 6 LAYANAN KATEGORI: BAHAN BAKAR --- */
        "bbm-1": {
            nama: "Pembersihan Injektor Bensin",
            foto: "images/injektor-bensin.webp",
            deskripsi: "Membersihkan lubang nozzle injektor agar semprotan bahan bakar kembali mengabut sempurna.",
            estimasiWaktu: "45 Menit",
            estimasiBiaya: "Rp 150.000",
            pekerjaan: ["Pelepasan injektor (jika memungkinkan)", "Pembersihan dengan cairan khusus", "Pemasangan kembali"],
            tidakTermasuk: ["Penggantian injektor baru", "Ganti seal injektor"],
            catatan: "Mengatasi tarikan mesin brebet atau boros bbm."
        },
        "bbm-2": {
            nama: "Ganti Filter Bensin (Fuel Filter)",
            foto: "images/filter-bensin.webp",
            deskripsi: "Jasa ganti saringan bahan bakar untuk menghindari kotoran tangki masuk ke ruang mesin.",
            estimasiWaktu: "45 Menit",
            estimasiBiaya: "Rp 75.000 - Rp 150.000",
            pekerjaan: ["Bongkar filter bensin (di bawah mobil atau dalam tangki)", "Pemasangan filter baru"],
            tidakTermasuk: ["Harga filter bensin"],
            catatan: "Harga jasa tergantung letak filter (In-tank lebih mahal)."
        },
        "bbm-3": {
            nama: "Purging Mesin Diesel",
            foto: "images/purging-diesel.webp",
            deskripsi: "Mencuci sistem saluran bahan bakar dan injektor diesel secara langsung menggunakan cairan purging.",
            estimasiWaktu: "60 Menit",
            estimasiBiaya: "Rp 150.000 (Jasa)",
            pekerjaan: ["Bypass jalur solar", "Sirkulasi cairan purging", "Pengecekan asap knalpot"],
            tidakTermasuk: ["Harga cairan purging", "Ganti filter solar"],
            catatan: "Menghilangkan ngelitik diesel (knocking) dan asap hitam."
        },
        "bbm-4": {
            nama: "Ganti Filter Solar",
            foto: "images/filter-solar.webp",
            deskripsi: "Penggantian filter solar pada mobil diesel untuk mencegah injektor mampet akibat biosolar.",
            estimasiWaktu: "30 Menit",
            estimasiBiaya: "Rp 50.000",
            pekerjaan: ["Pelepasan filter lama", "Pemasangan filter baru", "Pompa/bleeding angin palsu"],
            tidakTermasuk: ["Harga filter solar"],
            catatan: "Wajib ganti rutin jika sering menggunakan Biosolar reguler."
        },
        "bbm-5": {
            nama: "Kuras Tangki Bahan Bakar",
            foto: "images/kuras-tangki.webp",
            deskripsi: "Menurunkan dan membersihkan tangki dari lumpur atau air yang terperangkap (water in fuel).",
            estimasiWaktu: "120 - 180 Menit",
            estimasiBiaya: "Rp 350.000",
            pekerjaan: ["Penurunan tangki", "Penyedotan dan pengurasan sisa BBM", "Pembersihan total"],
            tidakTermasuk: ["Ganti fuel pump", "BBM baru"],
            catatan: "Pengerjaan membutuhkan ruang aman dari sumber api."
        },
        "bbm-6": {
            nama: "Ganti Fuel Pump",
            foto: "images/fuel-pump.webp",
            deskripsi: "Penggantian pompa bahan bakar (rotak) yang lemah atau mati total.",
            estimasiWaktu: "90 Menit",
            estimasiBiaya: "Rp 200.000 - Rp 300.000",
            pekerjaan: ["Pembongkaran jok/tangki", "Pelepasan pompa lama", "Instalasi rotak/pompa baru"],
            tidakTermasuk: ["Harga rotak / fuel pump assy"],
            catatan: "Gejala awal biasanya mobil sulit distarter saat mesin panas."
        },

        /* --- 6 LAYANAN KATEGORI: SUSPENSI --- */
        "suspensi-1": {
            nama: "Ganti Shockbreaker Depan",
            foto: "images/shock-depan.webp",
            deskripsi: "Penggantian peredam kejut bagian depan (kanan & kiri) agar bantingan mobil tidak keras/ayun.",
            estimasiWaktu: "90 Menit",
            estimasiBiaya: "Rp 250.000 (Sepasang)",
            pekerjaan: ["Bongkar roda", "Pelepasan shock & per/spring", "Perakitan shock baru"],
            tidakTermasuk: ["Harga shockbreaker", "Support shock / Karet boot"],
            catatan: "Disarankan untuk melakukan spooring setelah ganti shock depan."
        },
        "suspensi-2": {
            nama: "Ganti Shockbreaker Belakang",
            foto: "images/shock-belakang.webp",
            deskripsi: "Jasa ganti shockbreaker belakang untuk mengatasi mobil limbung di kecepatan tinggi.",
            estimasiWaktu: "60 Menit",
            estimasiBiaya: "Rp 150.000 (Sepasang)",
            pekerjaan: ["Bongkar roda belakang", "Pemasangan shock belakang"],
            tidakTermasuk: ["Harga shockbreaker"],
            catatan: "Lebih cepat dari depan karena umumnya tidak menyatu dengan per."
        },
        "suspensi-3": {
            nama: "Ganti Link Stabilizer",
            foto: "images/link-stabil.webp",
            deskripsi: "Mengganti link stabil untuk menghilangkan bunyi 'gluduk' saat melewati jalan bergelombang.",
            estimasiWaktu: "45 Menit",
            estimasiBiaya: "Rp 100.000 (Sepasang)",
            pekerjaan: ["Pelepasan link stabil lama", "Pemasangan komponen baru"],
            tidakTermasuk: ["Harga Link Stabilizer"],
            catatan: "Rusaknya komponen ini sangat sering terjadi di jalan berlubang."
        },
        "suspensi-4": {
            nama: "Ganti Bushing Lower Arm",
            foto: "images/bushing-arm.webp",
            deskripsi: "Penggantian karet sayap bawah (bushing arm) yang pecah agar setir tidak membuang.",
            estimasiWaktu: "120 Menit",
            estimasiBiaya: "Rp 200.000 / Sisi",
            pekerjaan: ["Pelepasan Lower Arm", "Press bushing lama (bila perlu dibawa ke bengkel bubut)", "Pasang kembali"],
            tidakTermasuk: ["Harga bushing", "Biaya jasa mesin press (jika diperlukan)"],
            catatan: "Sangat direkomendasikan jika mobil terasa lari ke kanan/kiri saat direm."
        },
        "suspensi-5": {
            nama: "Ganti Ball Joint",
            foto: "images/ball-joint.webp",
            deskripsi: "Mengganti sendi putar suspensi bawah agar roda tidak goyang/oblak.",
            estimasiWaktu: "90 Menit",
            estimasiBiaya: "Rp 150.000 / Sisi",
            pekerjaan: ["Pembongkaran nap roda", "Pelepasan ball joint lama", "Pemasangan baru"],
            tidakTermasuk: ["Harga Ball Joint"],
            catatan: "Ball joint yang oblak parah bisa menyebabkan roda terlepas."
        },
        "suspensi-6": {
            nama: "Cek Bunyi Kaki-Kaki",
            foto: "images/cek-kaki.webp",
            deskripsi: "Pemeriksaan dan pencarian sumber bunyi aneh pada area bawah (kaki-kaki) mobil.",
            estimasiWaktu: "30 Menit",
            estimasiBiaya: "Rp 50.000",
            pekerjaan: ["Test drive bersama mekanik", "Dongkrak & pengecekan fisik komponen", "Laporan kerusakan"],
            tidakTermasuk: ["Biaya bongkar/pasang komponen rusak"],
            catatan: "Biaya ini dihapus (gratis) jika langsung melakukan penggantian part."
        },

        /* --- 5 LAYANAN KATEGORI: KEMUDI (STEERING) --- */
        "kemudi-1": {
            nama: "Ganti Tie Rod End",
            foto: "images/tie-rod.webp",
            deskripsi: "Penggantian ujung as kemudi yang oblak agar setir kembali presisi dan tidak ada jeda kosong (speling).",
            estimasiWaktu: "60 Menit",
            estimasiBiaya: "Rp 100.000 (Sepasang)",
            pekerjaan: ["Pelepasan tie rod lama", "Pemasangan baru", "Penyelarasan drat manual"],
            tidakTermasuk: ["Harga Tie Rod", "Biaya Spooring"],
            catatan: "Wajib spooring di bengkel rekanan setelah pengerjaan."
        },
        "kemudi-2": {
            nama: "Ganti Long Tie Rod (Rack End)",
            foto: "images/long-tierod.webp",
            deskripsi: "Penggantian batang as dalam kemudi (rack end) yang bengkok atau goyang.",
            estimasiWaktu: "90 Menit",
            estimasiBiaya: "Rp 150.000 (Sepasang)",
            pekerjaan: ["Bongkar tie rod luar", "Bongkar karet boot", "Pelepasan & pemasangan rack end"],
            tidakTermasuk: ["Harga Rack End"],
            catatan: "Biasanya diganti bersamaan dengan Tie Rod End."
        },
        "kemudi-3": {
            nama: "Ganti Boot Rack Steer",
            foto: "images/boot-steer.webp",
            deskripsi: "Mengganti karet debu steering rack yang robek untuk mencegah kotoran merusak seal kemudi.",
            estimasiWaktu: "45 Menit",
            estimasiBiaya: "Rp 100.000 (Sepasang)",
            pekerjaan: ["Pelepasan tie rod", "Pemasangan karet boot baru", "Penguncian klem"],
            tidakTermasuk: ["Harga karet boot"],
            catatan: "Penanganan dini menghemat biaya servis jutaan rupiah."
        },
        "kemudi-4": {
            nama: "Kuras Oli Power Steering (HPS)",
            foto: "images/oli-ps.webp",
            deskripsi: "Penggantian cairan fluida power steering hidrolik (HPS) agar putaran setir tetap enteng dan pompa tidak mendengung.",
            estimasiWaktu: "30 Menit",
            estimasiBiaya: "Rp 50.000",
            pekerjaan: ["Sedot oli lama di reservoir", "Bleeding putar setir Kiri-Kanan", "Isi oli baru"],
            tidakTermasuk: ["Harga Cairan Power Steering (ATF)"],
            catatan: "Hanya untuk mobil dengan sistem Hydraulic Power Steering."
        },
        "kemudi-5": {
            nama: "Ganti Karet Steer (Steering Damper)",
            foto: "images/steer-damper.webp",
            deskripsi: "Penggantian karet damper pada motor EPS (Electronic Power Steering) untuk menghilangkan bunyi klotok di dalam setir.",
            estimasiWaktu: "120 Menit",
            estimasiBiaya: "Rp 300.000",
            pekerjaan: ["Bongkar cover setir & airbag", "Turunkan kolom setir", "Ganti karet bintang/damper"],
            tidakTermasuk: ["Harga part Steering Damper EPS"],
            catatan: "Penyakit khas mobil modern (EPS) bila melewati rel kereta api."
        },

        /* --- 6 LAYANAN KATEGORI: REM (BRAKES) --- */
        "rem-1": {
            nama: "Ganti Kampas Rem Depan (Disc Brake)",
            foto: "images/kampas-depan.webp",
            deskripsi: "Jasa penggantian kampas rem cakram depan agar pengereman kembali pakem.",
            estimasiWaktu: "45 Menit",
            estimasiBiaya: "Rp 100.000 (Sepasang Kiri-Kanan)",
            pekerjaan: ["Pelepasan kampas lama", "Pembersihan kaliper", "Press piston rem", "Pasang kampas baru"],
            tidakTermasuk: ["Harga kampas rem baru", "Bubut cakram"],
            catatan: "Jika piringan cakram sudah bergelombang, disarankan dibubut."
        },
        "rem-2": {
            nama: "Ganti Kampas Rem Belakang (Tromol/Drum)",
            foto: "images/kampas-belakang.webp",
            deskripsi: "Jasa penggantian kampas rem sepatu (drum brake) belakang berikut penyetelan kerenggangan.",
            estimasiWaktu: "60 Menit",
            estimasiBiaya: "Rp 120.000 (Sepasang Kiri-Kanan)",
            pekerjaan: ["Bongkar drum tromol", "Pembersihan area dalam", "Pasang kampas", "Setel click kerenggangan"],
            tidakTermasuk: ["Harga kampas rem belakang", "Ganti silinder roda (wheel cylinder) bocor"],
            catatan: "Mengembalikan gigitan rem tangan (handbrake) yang terlalu tinggi."
        },
        "rem-3": {
            nama: "Kuras Minyak Rem (Brake Fluid Bleeding)",
            foto: "images/minyak-rem.webp",
            deskripsi: "Mengganti minyak rem lama dengan yang baru di ke-4 roda untuk menghilangkan masuk angin (rem blong).",
            estimasiWaktu: "45 Menit",
            estimasiBiaya: "Rp 100.000",
            pekerjaan: ["Penyedotan minyak rem tabung utama", "Bleeding ke-4 roda berurutan", "Isi cairan DOT3/DOT4 baru"],
            tidakTermasuk: ["Minyak Rem Baru"],
            catatan: "Disarankan diganti setiap 2 tahun sekali (mengandung air)."
        },
        "rem-4": {
            nama: "Ganti Master Rem Atas (Brake Master Cylinder)",
            foto: "images/master-rem.webp",
            deskripsi: "Mengganti tabung pompa master rem yang bocor internal (gejala pedal rem amblas saat ditekan lama).",
            estimasiWaktu: "90 Menit",
            estimasiBiaya: "Rp 200.000",
            pekerjaan: ["Bongkar master rem lama", "Pasang master assy / kit baru", "Bleeding total sistem rem"],
            tidakTermasuk: ["Harga Master Rem", "Minyak Rem"],
            catatan: "Sangat krusial untuk keselamatan berkendara."
        },
        "rem-5": {
            nama: "Ganti Silinder Roda (Wheel Cylinder)",
            foto: "images/wheel-cylinder.webp",
            deskripsi: "Penggantian piston tromol belakang yang bocor meneteskan minyak rem ke roda.",
            estimasiWaktu: "60 Menit",
            estimasiBiaya: "Rp 150.000 (Sepasang)",
            pekerjaan: ["Bongkar tromol", "Pelepasan silinder bocor", "Instalasi silinder baru", "Bleeding rem belakang"],
            tidakTermasuk: ["Harga Silinder Roda", "Minyak Rem"],
            catatan: "Jika dibiarkan, kampas rem belakang akan basah dan tidak pakem."
        },
        "rem-6": {
            nama: "Servis Kaliper Rem Macet",
            foto: "images/kaliper-macet.webp",
            deskripsi: "Perbaikan pin kaliper depan yang berkarat menyebabkan rem macet dan velg menjadi sangat panas.",
            estimasiWaktu: "60 Menit",
            estimasiBiaya: "Rp 150.000",
            pekerjaan: ["Pelepasan pin kaliper", "Pembersihan karat & amplas", "Pemberian High-Temp Silicone Grease"],
            tidakTermasuk: ["Ganti seal kaliper robek"],
            catatan: "Menyelamatkan umur pakai kampas rem dan cakram Anda."
        },

        /* --- 6 LAYANAN KATEGORI: PENDINGIN (RADIATOR & AC BasiC) --- */
        "dingin-1": {
            nama: "Kuras Air Radiator (Coolant Flush)",
            foto: "images/kuras-radiator.webp",
            deskripsi: "Mengganti air radiator lama/air keran dengan Coolant khusus agar mesin tidak mudah overheat.",
            estimasiWaktu: "45 Menit",
            estimasiBiaya: "Rp 100.000",
            pekerjaan: ["Buka baut drain/buang air lama", "Bilas dengan air bersih (running mesin)", "Isi cairan Coolant baru", "Buang angin (bleeding)"],
            tidakTermasuk: ["Harga Cairan Coolant"],
            catatan: "Dilarang membuka tutup radiator saat mesin dalam kondisi panas!"
        },
        "dingin-2": {
            nama: "Ganti Motor Fan Radiator",
            foto: "images/motor-fan.webp",
            deskripsi: "Penggantian dinamo kipas pendingin yang mati/lemah agar suhu mesin kembali normal dan AC dingin.",
            estimasiWaktu: "60 Menit",
            estimasiBiaya: "Rp 150.000",
            pekerjaan: ["Pelepasan shroud/cover kipas", "Ganti dinamo motor fan", "Uji putaran dan hembusan angin"],
            tidakTermasuk: ["Harga Motor Fan Assy / Dinamo"],
            catatan: "Kipas mati adalah penyebab utama mesin mendidih di kemacetan."
        },
        "dingin-3": {
            nama: "Ganti Termostat (Thermostat)",
            foto: "images/termostat.webp",
            deskripsi: "Mengganti katup termostat yang macet tertutup (overheat) atau terbuka terus (mesin dingin/boros).",
            estimasiWaktu: "60 - 90 Menit",
            estimasiBiaya: "Rp 150.000",
            pekerjaan: ["Bongkar housing termostat", "Pemasangan termostat & lem paking baru", "Bleeding sistem pendingin"],
            tidakTermasuk: ["Harga Termostat", "Cairan Coolant Tambahan"],
            catatan: "Disarankan ganti di kelipatan 80.000 km."
        },
        "dingin-4": {
            nama: "Ganti Selang Radiator (Upper/Lower)",
            foto: "images/selang-radiator.webp",
            deskripsi: "Penggantian selang karet penghubung mesin dan radiator yang sudah keras/kembung/bocor.",
            estimasiWaktu: "45 Menit",
            estimasiBiaya: "Rp 100.000",
            pekerjaan: ["Pelepasan klem selang", "Instalasi selang baru", "Bleeding air"],
            tidakTermasuk: ["Harga Selang", "Klem Baru", "Coolant"],
            catatan: "Selang yang kembung rawan pecah saat kecepatan tinggi."
        },
        "dingin-5": {
            nama: "Ganti Water Pump (Pompa Air)",
            foto: "images/water-pump.webp",
            deskripsi: "Mengganti pompa sirkulasi air radiator yang bocor dari lubang pembuangan (weep hole) atau bunyi kasar.",
            estimasiWaktu: "120 - 180 Menit",
            estimasiBiaya: "Rp 300.000 - Rp 450.000",
            pekerjaan: ["Pelepasan fan belt", "Pembongkaran water pump", "Pemasangan & sealant", "Isi coolant"],
            tidakTermasuk: ["Harga Water Pump", "Ganti Fan Belt (jika sekalian)"],
            catatan: "Tingkat kesulitan tinggi, waktu pengerjaan menyesuaikan layout mesin."
        },
        "dingin-6": {
            nama: "Cuci Kondensor & Radiator",
            foto: "images/cuci-kondensor.webp",
            deskripsi: "Membersihkan sirip kisi-kisi radiator dan kondensor AC dari debu, lumpur, dan serangga menggunakan tekanan air ringan.",
            estimasiWaktu: "30 Menit",
            estimasiBiaya: "Rp 50.000",
            pekerjaan: ["Pelepasan grill depan (bila perlu)", "Penyemprotan chemical pembersih", "Pembilasan tekanan sedang"],
            tidakTermasuk: ["Las titik bocor radiator"],
            catatan: "Sangat membantu membuat hembusan AC menjadi lebih sejuk."
        },

        /* --- 5 LAYANAN KATEGORI: TRANSMISI (MANUAL & MATIC) --- */
        "trans-1": {
            nama: "Ganti Kampas Kopling (Kopling Set Manual)",
            foto: "images/kopling-set.webp",
            deskripsi: "Penggantian set kopling (Clutch Disc, Cover, Bearing) pada mobil transmisi manual yang slip/selip atau berat.",
            estimasiWaktu: "180 - 240 Menit",
            estimasiBiaya: "Rp 400.000 - Rp 600.000",
            pekerjaan: ["Penurunan gearbox (Turun Transmisi)", "Penggantian kopling set", "Pembersihan roda gila (Flywheel)", "Naik gearbox"],
            tidakTermasuk: ["Harga Kopling Set", "Oli Transmisi Baru"],
            catatan: "Hanya melayani di rumah dengan area parkir atau garasi yang datar/luas."
        },
        "trans-2": {
            nama: "Kuras Oli Transmisi Matic (ATF Flush)",
            foto: "images/kuras-matic.webp",
            deskripsi: "Penggantian total oli matic menggunakan metode tuang-buang (drain and fill berulang) agar sistem hidrolic matic bersih.",
            estimasiWaktu: "60 Menit",
            estimasiBiaya: "Rp 150.000 (Jasa)",
            pekerjaan: ["Tap oli matic lama", "Pengisian ATF baru", "Running setiap posisi tuas (P-R-N-D-2-L)", "Pengecekan level dipstick saat mesin panas"],
            tidakTermasuk: ["Harga Oli Matic (Dibutuhkan sekitar 8-12 Liter untuk kuras total)"],
            catatan: "Mencegah transmisi matic jedug atau delay."
        },
        "trans-3": {
            nama: "Ganti Master Kopling Atas",
            foto: "images/master-kopling-atas.webp",
            deskripsi: "Perbaikan pompa hidrolik kopling di bawah pedal yang menyebabkan gigi susah masuk saat mesin menyala.",
            estimasiWaktu: "60 Menit",
            estimasiBiaya: "Rp 150.000",
            pekerjaan: ["Bongkar master atas", "Pasang master assy baru", "Bleeding minyak kopling"],
            tidakTermasuk: ["Harga Master Kopling", "Minyak Rem/Kopling"],
            catatan: "Gejala khas: Pedal kopling kadang nyangkut di bawah (tidak mau balik)."
        },
        "trans-4": {
            nama: "Ganti Master Kopling Bawah",
            foto: "images/master-kopling-bawah.webp",
            deskripsi: "Penggantian aktuator pendorong garpu kopling di area gearbox.",
            estimasiWaktu: "45 Menit",
            estimasiBiaya: "Rp 100.000",
            pekerjaan: ["Pelepasan master bawah", "Pemasangan komponen baru", "Bleeding angin"],
            tidakTermasuk: ["Harga Master Kopling Bawah"],
            catatan: "Sering bocor karena posisinya yang dekat dengan panas mesin bawah."
        },
        "trans-5": {
            nama: "Cek & Diagnosa Transmisi",
            foto: "images/cek-transmisi.webp",
            deskripsi: "Pemeriksaan dan scan sistem transmisi elektronik (TCM) jika lampu check engine / lambang gear menyala.",
            estimasiWaktu: "30 Menit",
            estimasiBiaya: "Rp 100.000",
            pekerjaan: ["Scanning Scanner OBD2 Diagnostic", "Tes Jalan", "Laporan Kerusakan & Estimasi Perbaikan"],
            tidakTermasuk: ["Overhaul transmisi matic/manual"],
            catatan: "Diagnosa akurat menghemat puluhan juta dari tebak-tebakan perbaikan."
        },

        /* --- 4 LAYANAN KATEGORI: KELISTRIKAN MESIN --- */
        "listrik-1": {
            nama: "Ganti Aki (Battery Replacement) & Cek Pengisian",
            foto: "images/ganti-aki.webp",
            deskripsi: "Jasa pasang aki baru dan pengecekan arus sistem pengisian (alternator) agar aki awet.",
            estimasiWaktu: "20 Menit",
            estimasiBiaya: "Rp 50.000",
            pekerjaan: ["Pelepasan aki lama", "Pembersihan terminal aki dari jamur", "Pasang aki baru", "Cek voltase dengan Multitester"],
            tidakTermasuk: ["Harga Aki Baru"],
            catatan: "Kami juga menyediakan aki baru dengan sistem tukar tambah (Trade-in)."
        },
        "listrik-2": {
            nama: "Ganti Dinamo Ampere (Alternator)",
            foto: "images/dinamo-ampere.webp",
            deskripsi: "Penggantian pembangkit listrik mobil jika indikator aki di dashboard menyala merah saat mesin hidup.",
            estimasiWaktu: "60 - 90 Menit",
            estimasiBiaya: "Rp 200.000",
            pekerjaan: ["Pelepasan fan belt", "Bongkar alternator lama", "Pasang alternator baru", "Uji output listrik (Standar 13.5v - 14.2v)"],
            tidakTermasuk: ["Harga Alternator / Dinamo Ampere Assy"],
            catatan: "Mogok di jalan akibat alternator rusak sangat sering terjadi."
        },
        "listrik-3": {
            nama: "Ganti Dinamo Starter",
            foto: "images/dinamo-starter.webp",
            deskripsi: "Penggantian motor starter untuk masalah mobil tidak bisa distarter (hanya bunyi 'cetak-cetek') padahal aki bagus.",
            estimasiWaktu: "60 Menit",
            estimasiBiaya: "Rp 150.000",
            pekerjaan: ["Cabut terminal negatif aki", "Bongkar dinamo starter dari flywheel", "Pasang dinamo baru"],
            tidakTermasuk: ["Harga Dinamo Starter / Ganti Carbon Brush"],
            catatan: "Posisi dinamo starter pada beberapa mobil memerlukan dongkrak kolong."
        },
        "listrik-4": {
            nama: "Ganti Fan Belt (Tali Kipas/V-Belt)",
            foto: "images/fan-belt.webp",
            deskripsi: "Mengganti sabuk penggerak yang sudah retak-retak atau berdecit tajam saat mesin dihidupkan pagi hari.",
            estimasiWaktu: "30 Menit",
            estimasiBiaya: "Rp 75.000",
            pekerjaan: ["Kendurkan tensioner / alternator", "Lepas sabuk lama", "Pasang sabuk baru", "Setel ketegangan v-belt"],
            tidakTermasuk: ["Harga Fan Belt / V-Belt", "Ganti Bearing Tensioner"],
            catatan: "Putusnya fan belt di jalan mengakibatkan mobil mogok dan mesin overheat."
        }
    },

    // ======================================================================
    // 2. DATABASE KATEGORI (9 Kategori Utama)
    // ======================================================================
    kategori: {
        "kat-mesin": {
            icon: "⚙️",
            nama: "Mesin",
            foto: "images/kat-mesin.webp",
            deskripsi: "Perawatan, diagnosa, dan perbaikan area dapur pacu (ruang bakar) mobil Anda.",
            subkategori: [
                { id: "mesin-1", nama: "Gurah Mesin (Carbon Clean)", hargaMulai: "Rp 150K" },
                { id: "mesin-2", nama: "Ganti Busi (4 Pcs)", hargaMulai: "Rp 50K" },
                { id: "mesin-3", nama: "Ganti Koil Pengapian", hargaMulai: "Rp 50K" },
                { id: "mesin-4", nama: "Ganti Engine Mounting", hargaMulai: "Rp 150K" },
                { id: "mesin-5", nama: "Ganti Paking Klep", hargaMulai: "Rp 150K" },
                { id: "mesin-6", nama: "Cek Kompresi Mesin", hargaMulai: "Rp 100K" },
                { id: "mesin-7", nama: "Stel Klep Mesin", hargaMulai: "Rp 150K" }
            ]
        },
        "kat-pelumas": {
            icon: "💧",
            nama: "Pelumasan",
            foto: "images/kat-pelumas.webp",
            deskripsi: "Sistem ganti cairan pelumas vital untuk menjaga komponen besi di dalam mobil dari keausan.",
            subkategori: [
                { id: "pelumas-1", nama: "Ganti Filter Oli", hargaMulai: "Rp 25K" },
                { id: "pelumas-2", nama: "Engine Flush", hargaMulai: "Rp 50K" },
                { id: "pelumas-3", nama: "Ganti Oli Gardan", hargaMulai: "Rp 50K" },
                { id: "pelumas-4", nama: "Ganti Oli Transmisi (MT)", hargaMulai: "Rp 50K" },
                { id: "pelumas-5", nama: "Cek Kebocoran Oli", hargaMulai: "Rp 50K" }
            ]
        },
        "kat-bbm": {
            icon: "⛽",
            nama: "Bahan Bakar",
            foto: "images/kat-bbm.webp",
            deskripsi: "Perbaikan masalah tarikan ngempos, boros BBM, dan suplai bahan bakar (Bensin/Diesel).",
            subkategori: [
                { id: "bbm-1", nama: "Pembersihan Injektor", hargaMulai: "Rp 150K" },
                { id: "bbm-2", nama: "Ganti Filter Bensin", hargaMulai: "Rp 75K" },
                { id: "bbm-3", nama: "Purging Diesel", hargaMulai: "Rp 150K" },
                { id: "bbm-4", nama: "Ganti Filter Solar", hargaMulai: "Rp 50K" },
                { id: "bbm-5", nama: "Kuras Tangki BBM", hargaMulai: "Rp 350K" },
                { id: "bbm-6", nama: "Ganti Fuel Pump", hargaMulai: "Rp 200K" }
            ]
        },
        "kat-suspensi": {
            icon: "🚙",
            nama: "Suspensi",
            foto: "images/kat-suspensi.webp",
            deskripsi: "Perbaikan kaki-kaki, shockbreaker, dan komponen undercarriage agar mobil nyaman dikendarai.",
            subkategori: [
                { id: "suspensi-1", nama: "Ganti Shock Depan", hargaMulai: "Rp 250K" },
                { id: "suspensi-2", nama: "Ganti Shock Belakang", hargaMulai: "Rp 150K" },
                { id: "suspensi-3", nama: "Ganti Link Stabilizer", hargaMulai: "Rp 100K" },
                { id: "suspensi-4", nama: "Ganti Bushing Arm", hargaMulai: "Rp 200K" },
                { id: "suspensi-5", nama: "Ganti Ball Joint", hargaMulai: "Rp 150K" },
                { id: "suspensi-6", nama: "Cek Bunyi Kaki-Kaki", hargaMulai: "Rp 50K" }
            ]
        },
        "kat-kemudi": {
            icon: "🎯",
            nama: "Kemudi",
            foto: "images/kat-kemudi.webp",
            deskripsi: "Solusi setir berat, bunyi gluduk di kemudi, dan kebocoran power steering.",
            subkategori: [
                { id: "kemudi-1", nama: "Ganti Tie Rod End", hargaMulai: "Rp 100K" },
                { id: "kemudi-2", nama: "Ganti Long Tie Rod", hargaMulai: "Rp 150K" },
                { id: "kemudi-3", nama: "Ganti Boot Steer", hargaMulai: "Rp 100K" },
                { id: "kemudi-4", nama: "Kuras Oli Power Steering", hargaMulai: "Rp 50K" },
                { id: "kemudi-5", nama: "Ganti Karet EPS Steer", hargaMulai: "Rp 300K" }
            ]
        },
        "kat-rem": {
            icon: "🛑",
            nama: "Rem",
            foto: "images/kat-rem.webp",
            deskripsi: "Layanan krusial untuk menjamin mobil Anda bisa berhenti dengan aman dan pakem.",
            subkategori: [
                { id: "rem-1", nama: "Ganti Kampas Depan", hargaMulai: "Rp 100K" },
                { id: "rem-2", nama: "Ganti Kampas Belakang", hargaMulai: "Rp 120K" },
                { id: "rem-3", nama: "Kuras Minyak Rem", hargaMulai: "Rp 100K" },
                { id: "rem-4", nama: "Ganti Master Rem", hargaMulai: "Rp 200K" },
                { id: "rem-5", nama: "Ganti Silinder Roda", hargaMulai: "Rp 150K" },
                { id: "rem-6", nama: "Servis Kaliper Macet", hargaMulai: "Rp 150K" }
            ]
        },
        "kat-dingin": {
            icon: "🌡️",
            nama: "Pendingin",
            foto: "images/kat-dingin.webp",
            deskripsi: "Perawatan radiator & sistem pendingin mesin agar terhindar dari mimpi buruk overheat.",
            subkategori: [
                { id: "dingin-1", nama: "Kuras Air Radiator", hargaMulai: "Rp 100K" },
                { id: "dingin-2", nama: "Ganti Motor Fan", hargaMulai: "Rp 150K" },
                { id: "dingin-3", nama: "Ganti Termostat", hargaMulai: "Rp 150K" },
                { id: "dingin-4", nama: "Ganti Selang Radiator", hargaMulai: "Rp 100K" },
                { id: "dingin-5", nama: "Ganti Water Pump", hargaMulai: "Rp 300K" },
                { id: "dingin-6", nama: "Cuci Kondensor", hargaMulai: "Rp 50K" }
            ]
        },
        "kat-transmisi": {
            icon: "⚙️",
            nama: "Transmisi",
            foto: "images/kat-transmisi.webp",
            deskripsi: "Solusi gigi keras, slip kopling manual, dan perawatan transmisi matic (AT/CVT).",
            subkategori: [
                { id: "trans-1", nama: "Ganti Kopling Set", hargaMulai: "Rp 400K" },
                { id: "trans-2", nama: "Kuras Oli Matic (Flush)", hargaMulai: "Rp 150K" },
                { id: "trans-3", nama: "Ganti Master Kopling Atas", hargaMulai: "Rp 150K" },
                { id: "trans-4", nama: "Ganti Master Kopling Bawah", hargaMulai: "Rp 100K" },
                { id: "trans-5", nama: "Diagnosa Transmisi", hargaMulai: "Rp 100K" }
            ]
        },
        "kat-listrik": {
            icon: "🔋",
            nama: "Kelistrikan Mesin",
            foto: "images/kat-listrik.webp",
            deskripsi: "Pengecekan aki, dinamo cas (alternator), dinamo starter, dan fan belt mobil Anda.",
            subkategori: [
                { id: "listrik-1", nama: "Ganti Aki & Cek", hargaMulai: "Rp 50K" },
                { id: "listrik-2", nama: "Ganti Dinamo Ampere", hargaMulai: "Rp 200K" },
                { id: "listrik-3", nama: "Ganti Dinamo Starter", hargaMulai: "Rp 150K" },
                { id: "listrik-4", nama: "Ganti Fan Belt", hargaMulai: "Rp 75K" }
            ]
        }
    }
};

// Selesai memuat data. Pesan ini (optional) bisa dilihat di console inspector browser.
console.log("Database VRRINS GARAGE: 54 Layanan (4 Paket Utama + 50 Subkategori) berhasil dimuat.");
