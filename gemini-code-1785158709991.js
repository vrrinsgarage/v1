// ==========================================
// VRRINS GARAGE - SERVICE DATABASE
// Total 38 Layanan Lengkap
// ==========================================

const services = [
  // ------------------------------------------
  // 1. PAKET PERAWATAN UTAMA (PAKET VG)
  // ------------------------------------------
  {
    id: "vg-check",
    nama: "VG CHECK",
    kategori: "MESIN",
    icon: "⚙️",
    harga: "Rp100.000 – Rp150.000",
    durasi: "30 – 90 Menit",
    deskripsi: "Pemeriksaan dan inspeksi menyeluruh pada sistem utama kendaraan untuk mendeteksi potensi kerusakan lebih awal.",
    pekerjaan: [
      "Inspeksi kompartemen mesin & kebocoran oli/fluida",
      "Pemeriksaan sistem pengisian & kondisi aki (voltage check)",
      "Pemeriksaan ketebalan kampas rem 4 roda",
      "Pemeriksaan fisik komponen suspensi & kaki-kaki",
      "Scan komputer OBD2 (baca fault code/DTC)"
    ],
    manfaat: [
      "Mengetahui kondisi aktual kendaraan secara presisi",
      "Mencegah kerusakan parah dan biaya perbaikan membengkak",
      "Memberikan rasa aman saat berkendara jarak jauh"
    ],
    tidakTermasuk: [
      "Penggantian sparepart",
      "Pembersihan komponen fisik internal",
      "Jasa bongkar besar"
    ]
  },
  {
    id: "vg-tune-basic-bensin",
    nama: "VG TUNE BASIC (BENSIN)",
    kategori: "MESIN",
    icon: "🔧",
    harga: "Rp150.000",
    durasi: "45 – 60 Menit",
    deskripsi: "Perawatan rutin sistem pembakaran mesin bensin untuk menjaga performa harian tetap responsif.",
    pekerjaan: [
      "Pembersihan Throttle Body (TB Cleaner)",
      "Pembersihan Busi (4 pcs)",
      "Pembersihan Filter Udara & Filter Kabin/AC",
      "Reset ECU / Learning Throttle via OBD2 Scanner"
    ],
    manfaat: [
      "Tarikan mesin kembali ringan",
      "Konsumsi bahan bakar lebih efisien",
      "Stasioner / idle mesin lebih stabil"
    ],
    tidakTermasuk: [
      "Pembersihan ruang bakar (Carbon Clean)",
      "Pembersihan Injektor ultra-sonic"
    ]
  },
  {
    id: "vg-tune-plus-bensin",
    nama: "VG TUNE PLUS (BENSIN)",
    kategori: "MESIN",
    icon: "🔧",
    harga: "Rp250.000",
    durasi: "60 – 90 Menit",
    deskripsi: "Paket tune up menengah dilengkapi dengan pembersihan kerak karbon pada ruang bakar mesin.",
    pekerjaan: [
      "Semua item pekerjaan VG Tune Basic Bensin",
      "Carbon Clean / Gurah Mesin ruang bakar (4 silinder)",
      "Pembersihan sensor MAF / MAP",
      "Inspeksi kebocoran kompresi visual"
    ],
    manfaat: [
      "Menghilangkan gejala ngelitik (knocking)",
      "Mengembalikan tenaga & torsi mesin yang hilang",
      "Emisi gas buang lebih bersih"
    ],
    tidakTermasuk: [
      "Oli mesin & Filter Oli",
      "Ganti Busi baru"
    ]
  },
  {
    id: "vg-tune-pro-bensin",
    nama: "VG TUNE PRO (BENSIN)",
    kategori: "MESIN",
    icon: "🔧",
    harga: "Rp350.000",
    durasi: "90 – 120 Menit",
    deskripsi: "Paket perawatan tune up komprehensif untuk performa optimal mesin bensin secara maksimal.",
    pekerjaan: [
      "Semua item pekerjaan VG Tune Plus Bensin",
      "Pembersihan Injector (Injektor Cleaner kit)",
      "Pembersihan Valve / Katup hisap",
      "Kalibrasi sistem pembakaran via Scanner"
    ],
    manfaat: [
      "Performa mesin mendekati kondisi baru",
      "Pengabutan bahan bakar lebih sempurna",
      "Akselerasi padat di setiap rentang RPM"
    ],
    tidakTermasuk: [
      "Penggantian sparepart aus",
      "Flushing oli"
    ]
  },
  {
    id: "vg-tune-basic-diesel",
    nama: "VG TUNE BASIC (DIESEL)",
    kategori: "MESIN",
    icon: "🚜",
    harga: "Rp200.000",
    durasi: "60 – 75 Menit",
    deskripsi: "Perawatan dasar mesin diesel modern / konvensional untuk menjaga tenaga dan efisiensi bahan bakar.",
    pekerjaan: [
      "Pembersihan Throttle Body Diesel / Intake Pipe",
      "Pembersihan Filter Udara",
      "Pemeriksaan & pembuangan air pada Sedimenter/Filter Solar",
      "Scan Diagnostik Mesin Diesel OBD2"
    ],
    manfaat: [
      "Mencegah sumbatan pada jalur masuk udara",
      "Menjaga suplai solar tetap lancar",
      "Mesin lebih responsif"
    ],
    tidakTermasuk: [
      "Pembersihan sistem EGR",
      "Purging Diesel"
    ]
  },
  {
    id: "vg-tune-plus-diesel",
    nama: "VG TUNE PLUS (DIESEL)",
    kategori: "MESIN",
    icon: "🚜",
    harga: "Rp350.000",
    durasi: "90 – 120 Menit",
    deskripsi: "Paket perawatan diesel menengah dilengkapi pembersihan injektor langsung (Diesel Purge).",
    pekerjaan: [
      "Semua item pekerjaan VG Tune Basic Diesel",
      "Diesel Purging System (Pembersihan jalur Injektor & Bosch Pump)",
      "Pembersihan sensor-sensor saluran hisap (MAP sensor)"
    ],
    manfaat: [
      "Suara mesin diesel lebih halus dan renyah",
      "Asap hitam berkurang drastis",
      "Tarikan awal lebih bertenaga"
    ],
    tidakTermasuk: [
      "Bongkar/Pembersihan EGR Valve fisik",
      "Ganti Filter Solar Baru"
    ]
  },
  {
    id: "vg-tune-pro-diesel",
    nama: "VG TUNE PRO (DIESEL)",
    kategori: "MESIN",
    icon: "🚜",
    harga: "Rp500.000",
    durasi: "120 – 180 Menit",
    deskripsi: "Paket lengkap pembersihan total sistem masuk dan pembakaran mesin diesel Commonrail.",
    pekerjaan: [
      "Semua item pekerjaan VG Tune Plus Diesel",
      "Bongkar & Pembersihan Katup EGR (Exhaust Gas Recirculation)",
      "Pembersihan Intake Manifold dari kerak jelaga",
      "Reset Nilai Injektor via Scanner Diagnostik"
    ],
    manfaat: [
      "Napas mesin lebih panjang dan bertenaga",
      "Membebaskan aliran udara masuk dari jelaga tebal",
      "Efisiensi solar meningkat signifikan"
    ],
    tidakTermasuk: [
      "Gasket Intake/EGR jika rusak/harus ganti",
      "Sparepart pengganti"
    ]
  },
  {
    id: "vg-brake-service",
    nama: "VG BRAKE SERVICE",
    kategori: "REM",
    icon: "🛑",
    harga: "Rp140.000 – Rp175.000",
    durasi: "45 – 90 Menit",
    deskripsi: "Perawatan & pembersihan sistem pengereman 4 roda untuk memastikan keselamatan penuh.",
    pekerjaan: [
      "Pembersihan kampas rem depan & belakang dari debu/kotoran",
      "Amplas halus permukaan kampas & piringan cakram/tromol",
      "Pemberian grease / pelumas khusus pin kaliper rem",
      "Pemeriksaan kebocoran minyak rem & selang fleksibel"
    ],
    manfaat: [
      "Pengereman lebih pakem dan responsif",
      "Menghilangkan bunyi decit saat mengerem",
      "Mencegah kaliper rem macet/seized"
    ],
    tidakTermasuk: [
      "Minyak Rem baru (jika kuras)",
      "Bubut cakram",
      "Ganti Kampas Rem"
    ]
  },
  {
    id: "vg-oil-service",
    nama: "VG OIL SERVICE",
    kategori: "PELUMASAN",
    icon: "🛢️",
    harga: "Rp50.000 – Rp75.000",
    durasi: "15 – 30 Menit",
    deskripsi: "Jasa penggantian oli mesin dan filter oli yang cepat, rapi, dan presisi di lokasi Anda.",
    pekerjaan: [
      "Pengurasan oli mesin lama",
      "Penggantian filter oli mesin baru (jika ada)",
      "Pemasangan ring/washer baut tap baru",
      "Pengisian oli mesin baru sesuai kapasitas & viskositas",
      "Pengecekan dipstick oli & inspeksi kebocoran"
    ],
    manfaat: [
      "Komponen dalam mesin terlindungi sempurna dari gesekan",
      "Suhu mesin terkontrol dengan baik",
      "Menjaga kebersihan dalam blok mesin"
    ],
    tidakTermasuk: [
      "Material Oli Mesin & Filter Oli (bisa disediakan/dibeli terpisah)"
    ]
  },

  // ------------------------------------------
  // 2. KATEGORI: MESIN
  // ------------------------------------------
  {
    id: "diagnosa-mesin",
    nama: "Diagnosa Mesin Scan OBD2",
    kategori: "MESIN",
    icon: "💻",
    harga: "Rp100.000",
    durasi: "30 Menit",
    deskripsi: "Pemeriksaan elektronik mesin menggunakan scanner OBD2 untuk membaca kode error (DTC).",
    pekerjaan: [
      "Scanning seluruh modul elektronik kendaraan",
      "Membaca & menganalisis kode kerusakan (DTC)",
      "Clear fault code / Reset Check Engine",
      "Laporan hasil scan kepada pemilik"
    ],
    manfaat: ["Mengetahui secara akurat penyebab lampu check engine menyala."],
    tidakTermasuk: ["Perbaikan fisik sparepart yang rusak."]
  },
  {
    id: "ganti-busi",
    nama: "Ganti Busi (Set)",
    kategori: "MESIN",
    icon: "⚡",
    harga: "Rp50.000",
    durasi: "20 Menit",
    deskripsi: "Jasa pelepasan dan pemasangan busi baru untuk 4 silinder.",
    pekerjaan: [
      "Pelepasan koil pengapian & busi lama",
      "Pengecekan celah gap busi baru",
      "Pemasangan busi baru dengan torsi yang tepat"
    ],
    manfaat: ["Pengapian sempurna, mesin mudah dihidupkan."],
    tidakTermasuk: ["Sparepart Busi baru."]
  },
  {
    id: "ganti-koil",
    nama: "Ganti Koil Pengapian",
    kategori: "MESIN",
    icon: "🔌",
    harga: "Rp50.000",
    durasi: "20 Menit",
    deskripsi: "Penggantian koil pengapian yang lemah atau mati pada mesin bensin.",
    pekerjaan: [
      "Pemeriksaan koil yang bermasalah",
      "Pelepasan soket & koil lama",
      "Pemasangan koil baru & pengujian fungsi pengapian"
    ],
    manfaat: ["Menghilangkan gejala mesin pincang."],
    tidakTermasuk: ["Unit Koil baru."]
  },
  {
    id: "ganti-vbelt",
    nama: "Ganti Fan Belt / V-Belt",
    kategori: "MESIN",
    icon: "🎗️",
    harga: "Rp75.000 – Rp125.000",
    durasi: "30 – 45 Menit",
    deskripsi: "Penggantian sabuk pemutar alternator, AC, dan ekstra fan yang pecah/mencicit.",
    pekerjaan: [
      "Pelepasan V-Belt lama",
      "Pengecekan bearing pulley & tensioner",
      "Pemasangan V-Belt baru dengan kekencangan standar"
    ],
    manfaat: ["Menghilangkan decit, menjaga pengisian aki & AC tetap bekerja."],
    tidakTermasuk: ["Sparepart V-Belt."]
  },

  // ------------------------------------------
  // 3. KATEGORI: PELUMASAN
  // ------------------------------------------
  {
    id: "ganti-oli-transmisi-manual",
    nama: "Ganti Oli Transmisi Manual",
    kategori: "PELUMASAN",
    icon: "⚙️",
    harga: "Rp60.000",
    durasi: "20 Menit",
    deskripsi: "Pengurasan dan pengisian oli roda gigi transmisi manual.",
    pekerjaan: [
      "Tap oli transmisi lama",
      "Pengisian oli transmisi baru sesuai kapasitas spec",
      "Pemeriksaan kebocoran baut tap"
    ],
    manfaat: ["Perpindahan gigi manual lebih halus dan tidak kaku."],
    tidakTermasuk: ["Oli Transmisi Manual."]
  },
  {
    id: "ganti-oli-gardan",
    nama: "Ganti Oli Gardan (Differential)",
    kategori: "PELUMASAN",
    icon: "🚙",
    harga: "Rp60.000",
    durasi: "20 Menit",
    deskripsi: "Penggantian oli pelumas gardan untuk mobil penggerak roda belakang (RWD/4WD).",
    pekerjaan: [
      "Membuka baut tap gardan",
      "Menguras oli gardan lama",
      "Mengisi oli gardan spesifikasi baru"
    ],
    manfaat: ["Mencegah gir gardan aus dan berdengung pada kecepatan tinggi."],
    tidakTermasuk: ["Oli Gardan."]
  },
  {
    id: "flushing-oli-matic",
    nama: "Ganti / Flush Oli Matik (ATF/CVT)",
    kategori: "PELUMASAN",
    icon: "🔄",
    harga: "Rp100.000 – Rp200.000",
    durasi: "45 – 60 Menit",
    deskripsi: "Penggantian oli transmisi otomatis secara manual drain/flush.",
    pekerjaan: [
      "Pengurasan oli matik lama",
      "Pengisian oli matik sesuai dipstick & spesifikasi pabrikan",
      "Pemeriksaan perpindahan tuas matik"
    ],
    manfaat: ["Perpindahan gigi matik responsif dan bebas jedug."],
    tidakTermasuk: ["Fluida Oli Matik (ATF/CVT)."]
  },

  // ------------------------------------------
  // 4. KATEGORI: BAHAN BAKAR
  // ------------------------------------------
  {
    id: "ganti-filter-bensin",
    nama: "Ganti Filter Bensin",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    harga: "Rp75.000 – Rp150.000",
    durasi: "30 – 60 Menit",
    deskripsi: "Penggantian penyaring bahan bakar bensin (tipe luar / dalam tangki).",
    pekerjaan: [
      "Pelepasan saluran bensin & modul filter lama",
      "Pemasangan filter bensin baru",
      "Pengecekan kebocoran aliran bensin"
    ],
    manfaat: ["Aliran bensin bersih bebas dari endapan kotoran."],
    tidakTermasuk: ["Sparepart Filter Bensin."]
  },
  {
    id: "ganti-filter-solar",
    nama: "Ganti Filter Solar (Diesel)",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    harga: "Rp60.000",
    durasi: "20 – 30 Menit",
    deskripsi: "Penggantian filter solar mesin diesel untuk menjaga kebersihan Commonrail.",
    pekerjaan: [
      "Pelepasan rumah filter solar",
      "Ganti elemen filter solar baru & O-ring",
      "Bleeding / pompa manual buang angin palsu"
    ],
    manfaat: ["Menjaga injektor diesel mahal dari keausan akibat solar kotor."],
    tidakTermasuk: ["Filter Solar Baru."]
  },
  {
    id: "kuras-tangki-bbm",
    nama: "Kuras Tangki Bahan Bakar",
    kategori: "BAHAN BAKAR",
    icon: "🛢️",
    harga: "Rp250.000 – Rp350.000",
    durasi: "120 Menit",
    deskripsi: "Pembersihan total tangki bensin/solar dari endapan lumpur dan air.",
    pekerjaan: [
      "Turun tangki bahan bakar",
      "Pengurasan sisa bensin/solar dan pembersihan endapan",
      "Bilas tangki dan pasang kembali"
    ],
    manfaat: ["Mencegah tarikan berat dan kerusakkan rotax/fuel pump."],
    tidakTermasuk: ["Bahan bakar pengganti."]
  },

  // ------------------------------------------
  // 5. KATEGORI: SUSPENSI
  // ------------------------------------------
  {
    id: "ganti-shockbreaker",
    nama: "Ganti Shockbreaker (Per Set/Depan/Belakang)",
    kategori: "SUSPENSI",
    icon: "🛠️",
    harga: "Rp150.000 – Rp250.000",
    durasi: "60 – 90 Menit",
    deskripsi: "Penggantian peredam kejut shockbreaker depan atau belakang.",
    pekerjaan: [
      "Bongkar pasang peredam kejut & klem per",
      "Pemasangan shockbreaker baru",
      "Pengecekan karet stopper & boot dust"
    ],
    manfaat: ["Mobil kembali stabil, tidak ayun berlebihan."],
    tidakTermasuk: ["Unit Shockbreaker Baru."]
  },
  {
    id: "ganti-link-stabilizer",
    nama: "Ganti Link Stabilizer",
    kategori: "SUSPENSI",
    icon: "🔗",
    harga: "Rp75.000 – Rp100.000",
    durasi: "30 – 45 Menit",
    deskripsi: "Penggantian batang/link stabilizer yang aus dan menyebabkan bunyi kelotokan.",
    pekerjaan: [
      "Pelepasan mur link stabilizer lama",
      "Pemasangan link stabilizer baru kanan/kiri",
      "Pengencangan sesuai torsi"
    ],
    manfaat: ["Menghilangkan bunyi geluduk di jalan keriting."],
    tidakTermasuk: ["Part Link Stabilizer."]
  },
  {
    id: "ganti-bushing-arm",
    nama: "Ganti Bushing Arm / Lower Arm",
    kategori: "SUSPENSI",
    icon: "⭕",
    harga: "Rp150.000 – Rp250.000",
    durasi: "90 Menit",
    deskripsi: "Penggantian karet bushing sayap suspensi yang pecah atau aus.",
    pekerjaan: [
      "Pelepasan arm suspensi bawah",
      "Press/pemasangan karet bushing baru",
      "Pemasangan kembali arm pada sasis"
    ],
    manfaat: ["Pengendalian mobil presisi dan ban tidak makan sebelah."],
    tidakTermasuk: ["Bushing Arm baru."]
  },

  // ------------------------------------------
  // 6. KATEGORI: KEMUDI
  // ------------------------------------------
  {
    id: "ganti-tie-rod-rack-end",
    nama: "Ganti Tie Rod & Rack End (Long Tie Rod)",
    kategori: "KEMUDI",
    icon: "🎯",
    harga: "Rp125.000 – Rp175.000",
    durasi: "60 Menit",
    deskripsi: "Penggantian komponen penyambung setir ke roda yang kocak.",
    pekerjaan: [
      "Pelepasan Tie Rod End & Rack End lama",
      "Pemasangan part baru",
      "Setel kelurusan roda kasar (sebelum spooring)"
    ],
    manfaat: ["Setir tidak speling/oblak dan lebih presisi."],
    tidakTermasuk: ["Spooring Komputerized", "Sparepart."]
  },
  {
    id: "ganti-boot-rack-steer",
    nama: "Ganti Boot Karet Rack Steer",
    kategori: "KEMUDI",
    icon: "🛡️",
    harga: "Rp75.000 – Rp100.000",
    durasi: "45 Menit",
    deskripsi: "Penggantian karet pelindung rack steer yang robek agar tidak kemasukan air/pasir.",
    pekerjaan: [
      "Pelepasan tie rod end",
      "Pemasangan karet boot baru & klem pengikat",
      "Pemberian vet/grease khusus rack"
    ],
    manfaat: ["Mencegah as rack steer berkarat dan bocor."],
    tidakTermasuk: ["Karet Boot Rack Steer."]
  },
  {
    id: "ganti-minyak-power-steering",
    nama: "Kuras & Ganti Minyak Power Steering",
    kategori: "KEMUDI",
    icon: "💧",
    harga: "Rp75.000",
    durasi: "30 Menit",
    deskripsi: "Pengurasan oli sistem hidrolis kemudi power steering.",
    pekerjaan: [
      "Kuras minyak power steering lama di tabung reservoir & selang",
      "Flushing & pengisian minyak baru",
      "Bleeding udara jebak sistem steer"
    ],
    manfaat: ["Putaran setir lebih ringan dan pompa steering awet."],
    tidakTermasuk: ["Minyak Power Steering."]
  },

  // ------------------------------------------
  // 7. KATEGORI: REM
  // ------------------------------------------
  {
    id: "ganti-kampas-rem-depan",
    nama: "Ganti Kampas Rem Depan (Discpad)",
    kategori: "REM",
    icon: "🛑",
    harga: "Rp60.000 – Rp80.000",
    durasi: "30 Menit",
    deskripsi: "Penggantian pad rem cakram roda depan.",
    pekerjaan: [
      "Buka kaliper rem depan",
      "Pembersihan permukaan piringan & pendorong piston",
      "Pemasangan kampas rem baru & grease pin"
    ],
    manfaat: ["Pengereman aman dan pakem kembali."],
    tidakTermasuk: ["Kampas Rem Depan baru."]
  },
  {
    id: "ganti-kampas-rem-belakang",
    nama: "Ganti Kampas Rem Belakang (Tromol/Cakram)",
    kategori: "REM",
    icon: "🛑",
    harga: "Rp75.000 – Rp100.000",
    durasi: "45 Menit",
    deskripsi: "Penggantian sepatu rem tromol atau pad cakram belakang.",
    pekerjaan: [
      "Buka drum tromol/kaliper belakang",
      "Pembersihan kotoran & setel per pengembali",
      "Pemasangan kampas belakang baru & penyetelan rem tangan"
    ],
    manfaat: ["Rem tangan gigit dan cengkeraman rem stabil."],
    tidakTermasuk: ["Kampas Rem Belakang."]
  },
  {
    id: "kuras-minyak-rem",
    nama: "Kuras & Bleeding Minyak Rem (4 Roda)",
    kategori: "REM",
    icon: "🧪",
    harga: "Rp100.000 – Rp125.000",
    durasi: "45 Menit",
    deskripsi: "Pengurasan minyak rem lama dan buang angin palsu di seluruh saluran rem.",
    pekerjaan: [
      "Pengurasan reservoir rem",
      "Bleeding minyak rem di 4 titik nipel roda",
      "Pengisian minyak rem baru DOT3/DOT4"
    ],
    manfaat: ["Menghilangkan gejala rem bagai mengocok/baggy brake pedal."],
    tidakTermasuk: ["Minyak Rem."]
  },

  // ------------------------------------------
  // 8. KATEGORI: PENDINGIN
  // ------------------------------------------
  {
    id: "kuras-radiator-coolant",
    nama: "Kuras & Ganti Radiator Coolant",
    kategori: "PENDINGIN",
    icon: "🌡️",
    harga: "Rp75.000",
    durasi: "30 Menit",
    deskripsi: "Pengurasan air radiator lama dan penggantian cairan pendingin coolant khusus.",
    pekerjaan: [
      "Buka kran kuras radiator & tabung cadangan (reservoir)",
      "Bilas saluran pendingin",
      "Pengisian cairan Coolant baru & bleeding udara traps"
    ],
    manfaat: ["Mesin terhindar dari overheating dan bebas korosi karat."],
    tidakTermasuk: ["Cairan Radiator Coolant."]
  },
  {
    id: "ganti-thermostat",
    nama: "Ganti Thermostat & Gasket",
    kategori: "PENDINGIN",
    icon: "🌡️",
    harga: "Rp100.000 – Rp150.000",
    durasi: "45 – 60 Menit",
    deskripsi: "Penggantian katup pengatur suhu air radiator yang macet.",
    pekerjaan: [
      "Pelepasan rumah thermostat",
      "Pemasangan thermostat & paking/sealer baru",
      "Pengisian coolant & cek temperatur mesin"
    ],
    manfaat: ["Suhu kerja mesin ideal dan tidak overheat."],
    tidakTermasuk: ["Thermostat baru", "Coolant."]
  },
  {
    id: "ganti-extra-fan",
    nama: "Ganti Motor Extra Fan Radiator / AC",
    kategori: "PENDINGIN",
    icon: "💨",
    harga: "Rp100.000 – Rp175.000",
    durasi: "45 Menit",
    deskripsi: "Penggantian dinamo kipas pendingin radiator yang lemah atau mati.",
    pekerjaan: [
      "Pelepasan modul housing fan",
      "Ganti motor fan baru",
      "Pengujian kelistrikan & putaran kipas"
    ],
    manfaat: ["Suhu mesin dan AC tetap dingin saat jalan macet."],
    tidakTermasuk: ["Motor Extra Fan baru."]
  },

  // ------------------------------------------
  // 9. KATEGORI: TRANSMISI
  // ------------------------------------------
  {
    id: "ganti-kampas-kopling-manual",
    nama: "Ganti Paket Kampas Kopling (Manual)",
    kategori: "TRANSMISI",
    icon: "⚙️",
    harga: "Rp450.000 – Rp700.000",
    durasi: "180 – 240 Menit",
    deskripsi: "Jasa turun transmisi manual untuk penggantian kopling set lengkap.",
    pekerjaan: [
      "Pelepasan gearbox transmisi manual",
      "Penggantian Clutch Disc, Cover/Matahari, & Release Bearing",
      "Pembersihan ruang transmisi & pasang kembali"
    ],
    manfaat: ["Tenaga mesin tumpah sempurna ke roda, bebas selip."],
    tidakTermasuk: ["Part Kopling Set (Plat, Matahari, Deklahar)."]
  },
  {
    id: "setel-kabel-kopling",
    nama: "Setel Gerak Bebas Kopling",
    kategori: "TRANSMISI",
    icon: "🔧",
    harga: "Rp35.000",
    durasi: "15 Menit",
    deskripsi: "Penyetelan ketinggian pedal dan kabel/master kopling manual.",
    pekerjaan: ["Setel nut kabel kopling / pendorong master bawah sesuai preferensi driver."],
    manfaat: ["Perpindahan gigi nyaman dan tidak menghentak."],
    tidakTermasuk: ["Penggantian kabel/master."]
  },

  // ------------------------------------------
  // 10. KATEGORI: KELISTRIKAN MESIN
  // ------------------------------------------
  {
    id: "ganti-aki-check-pengisian",
    nama: "Ganti Aki & Cek Sistem Pengisian (Alternator)",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔋",
    harga: "Rp50.000",
    durasi: "20 Menit",
    deskripsi: "Pemasangan aki baru disertai uji voltase charging alternator.",
    pekerjaan: [
      "Pelepasan terminal aki lama",
      "Pembersihan klem kotor/korosi",
      "Pemasangan aki baru & test tegangan pengisian alternator (13.5V–14.5V)"
    ],
    manfaat: ["Sistem starter lancar dan aki baru terjamin terisi."],
    tidakTermasuk: ["Unit Aki baru."]
  },
  {
    id: "ganti-alternator",
    nama: "Ganti Dinamo Ampere (Alternator)",
    kategori: "KELISTRIKAN MESIN",
    icon: "⚡",
    harga: "Rp125.000 – Rp200.000",
    durasi: "60 Menit",
    deskripsi: "Penggantian unit generator pengisi arus kelistrikan mobil.",
    pekerjaan: [
      "Pelepasan belt & kabel listrik alternator lama",
      "Pemasangan alternator pengganti",
      "Uji beban arus pengisian listrik"
    ],
    manfaat: ["Aki tidak tekor dan pasokan listrik mobil stabil."],
    tidakTermasuk: ["Unit Alternator."]
  },
  {
    id: "ganti-dinamo-starter",
    nama: "Ganti Dinamo Starter",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔑",
    harga: "Rp125.000 – Rp200.000",
    durasi: "60 Menit",
    deskripsi: "Penggantian motor penggerak awal saat mobil di-start.",
    pekerjaan: [
      "Pelepasan baut pengikat starter di housing mesin",
      "Pemasangan motor starter baru/rekondisi",
      "Pengujian ketepatan engaged gigi bendix"
    ],
    manfaat: ["Mesin langsung hidup sekali putar kunci/start button."],
    tidakTermasuk: ["Unit Dinamo Starter."]
  },
  {
    id: "perbaikan-kelistrikan-ringan",
    nama: "Cek & Perbaikan Kabel Ringan / Sekring",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔌",
    harga: "Rp75.000 – Rp150.000",
    durasi: "45 Menit",
    deskripsi: "Pemeriksaan dan perbaikan konsleting ringan, sekring putus, atau soket kendur.",
    pekerjaan: [
      "Tracing jalur kabel bermasalah dengan Multitester",
      "Penggantian sekring (fuse) putus",
      "Isolasi & kerapihan soket kabel"
    ],
    manfaat: ["Fungsi instrumen & sensor kendaraan kembali aktif normal."],
    tidakTermasuk: ["Urut total kabel bodi."]
  }
];

// Mencegah error jika dijalankan di lingkungan Node.js / Module Testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = services;
}