/* ======================================================
   VRRINS GARAGE
   script.js
   ======================================================
   PART 1
   ELEMENT & GLOBAL VARIABLE
====================================================== */

// ==============================
// POPUP
// ==============================
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupContent = document.getElementById("popupContent");
const popupClose = document.getElementById("popupClose");
const popupBack = document.getElementById("popupBack");

// ==============================
// PACKAGE CARD
// ==============================
const packageCards = document.querySelectorAll(".package-card");

// ==============================
// SYSTEM CARD
// ==============================
const systemCards = document.querySelectorAll(".system-card");

// ==============================
// SEARCH
// ==============================
const searchInput = document.getElementById("searchInput");

// ==============================
// GLOBAL
// ==============================
let currentPackage = "";
let currentCategory = "";
let currentService = "";
let currentStep = "home";

/* ======================================================
   PART 2
   PACKAGE DATA
====================================================== */

const packageData = {

    check: {

        title: "🔍 VG CHECK",

        subtitle: "Pemeriksaan Menyeluruh Kondisi Kendaraan",

        price: "Rp100.000 – Rp150.000",

        duration: "30–90 Menit",

        vehicle: "Tergantung jenis kendaraan.",

        description:
            "Layanan inspeksi menyeluruh untuk mengetahui kondisi kendaraan secara detail tanpa melakukan perbaikan.",

        includes: [

            "Pemeriksaan Mesin",
            "Pemeriksaan Sistem Kelistrikan",
            "Pemeriksaan Sistem Pendingin",
            "Pemeriksaan Sistem Pengereman",
            "Pemeriksaan Sistem Suspensi",
            "Pemeriksaan Sistem Kemudi",
            "Pemeriksaan Sistem Roda",
            "Pemeriksaan Sistem Transmisi",
            "Pemeriksaan Sistem Pembuangan",
            "Pemeriksaan Bawah Kendaraan",
            "Scanning ECU (kendaraan yang mendukung)",
            "Road Test"

        ],

        result: [

            "✅ Komponen dalam kondisi baik",
            "⚠️ Komponen yang mulai aus atau perlu dipantau",
            "❌ Komponen yang disarankan untuk diperbaiki",
            "📋 Estimasi pekerjaan dan biaya"

        ],

        benefit: [

            "Mengetahui kondisi kendaraan secara menyeluruh",
            "Mendeteksi kerusakan sejak dini",
            "Membantu menentukan prioritas perbaikan",
            "Mengurangi risiko mogok",
            "Memberikan rasa aman sebelum perjalanan"

        ],

        note:
            "Biaya pemeriksaan tidak termasuk biaya perbaikan, spare part maupun jasa servis lanjutan."

    },

      tune: {

        title: "🔧 VG TUNE",

        subtitle: "Paket Perawatan Berkala Mesin",

        description:
            "VG TUNE merupakan paket perawatan berkala yang tersedia untuk kendaraan bermesin bensin maupun diesel dengan beberapa pilihan paket sesuai kebutuhan kendaraan.",

        package: {

            bensin: [

                "TUNE BASIC",
                "TUNE PLUS",
                "TUNE PRO",
                "VG ADD-ON"

            ],

            diesel: [

                "TUNE BASIC DIESEL",
                "TUNE PLUS DIESEL",
                "TUNE PRO DIESEL",
                "VG ADD-ON DIESEL"

            ]

        },

        benefit: [

            "Menjaga performa mesin tetap optimal",
            "Membantu meningkatkan efisiensi bahan bakar",
            "Mendeteksi gangguan mesin sejak dini",
            "Menyesuaikan paket sesuai kebutuhan kendaraan"

        ]

    },

  rem: {

    title: "🛑 Rem",

    services: [

        {
            name: "Servis Rem (Setel & Bersihkan 2 Roda)",
            type: "Servis",
            price: "Rp140K – Rp175K",
            duration: "45–90 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Bongkar Rem",
                "Pembersihan Kampas Rem",
                "Pembersihan Kaliper/Tromol",
                "Pelumasan Komponen Rem",
                "Setel Rem",
                "Pemeriksaan Minyak Rem"
            ]
        },

        {
            name: "Ganti Kampas Rem Depan",
            type: "Penggantian",
            price: "Rp140K – Rp175K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Kampas Rem Depan",
                "Pembersihan Kaliper",
                "Pelumasan Pin Kaliper",
                "Pemeriksaan Cakram Rem",
                "Uji Fungsi Rem"
            ]
        },

        {
            name: "Ganti Kampas Rem Belakang",
            type: "Penggantian",
            price: "Rp140K – Rp175K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Kampas Rem Belakang",
                "Pembersihan Kaliper/Tromol",
                "Pelumasan Komponen Rem",
                "Pemeriksaan Cakram/Tromol",
                "Uji Fungsi Rem"
            ]
        },

        {
            name: "Ganti Kampas Rem Tromol (Brake Shoe)",
            type: "Penggantian",
            price: "Rp140K – Rp210K",
            duration: "45–90 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Kampas Rem Tromol",
                "Pembersihan Tromol",
                "Pelumasan Titik Gesek",
                "Setel Rem Tromol",
                "Uji Fungsi Rem"
            ]
        }

    ]

},

          {
            name: "Ganti Cakram Rem",
            type: "Penggantian",
            price: "Rp140K – Rp175K",
            duration: "45–90 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Cakram Rem",
                "Pembersihan Hub Roda",
                "Pemeriksaan Kaliper",
                "Uji Fungsi Rem"
            ]
        },

        {
            name: "Servis Kaliper Rem",
            type: "Servis",
            price: "Rp140K – Rp200K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pembongkaran Kaliper",
                "Pembersihan Piston Kaliper",
                "Pemeriksaan Seal Kaliper",
                "Pelumasan Pin Kaliper",
                "Perakitan Kembali",
                "Uji Fungsi Rem"
            ]
        },

        {
            name: "Servis Master Rem",
            type: "Servis",
            price: "Rp190K – Rp230K",
            duration: "90–180 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pembongkaran Master Rem",
                "Pembersihan Komponen",
                "Penggantian Seal Kit (bila diperlukan)",
                "Bleeding Sistem Rem",
                "Uji Fungsi Rem"
            ]
        },

        {
            name: "Ganti Master Rem",
            type: "Penggantian",
            price: "Rp140K – Rp200K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Master Rem",
                "Bleeding Sistem Rem",
                "Pemeriksaan Kebocoran",
                "Uji Fungsi Rem"
            ]
        },

        {
            name: "Ganti Booster Rem",
            type: "Penggantian",
            price: "Rp250K – Rp320K",
            duration: "90–180 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Booster Rem",
                "Pemeriksaan Selang Vakum",
                "Pemeriksaan Master Rem",
                "Bleeding Sistem Rem",
                "Uji Fungsi Rem"
            ]
        },

        {
            name: "Ganti Selang Minyak Rem",
            type: "Penggantian",
            price: "Rp110K – Rp120K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Selang Minyak Rem",
                "Bleeding Sistem Rem",
                "Pemeriksaan Kebocoran",
                "Uji Fungsi Rem"
            ]
        },

        {
            name: "Ganti Sensor ABS",
            type: "Penggantian",
            price: "Rp110K – Rp120K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Sensor ABS",
                "Scan Sistem ABS",
                "Hapus Kode Error (jika memungkinkan)",
                "Uji Fungsi Sistem ABS"
            ]
        }

lubrication: {

    title: "🛢️ Sistem Pelumasan (Lubrication System)",

    services: [

        {
            name: "Ganti Oli Mesin",
            type: "Penggantian",
            price: "Rp75K – Rp125K",
            duration: "15–30 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Oli Mesin",
                "Pemeriksaan Kondisi Oli Lama",
                "Pemeriksaan Baut Drain Oli",
                "Penggantian Ring Baut Drain (bila diperlukan)",
                "Pemeriksaan Kebocoran Oli",
                "Reset Service Reminder (jika tersedia)"
            ]
        },

        {
            name: "Ganti Oli Transmisi Manual",
            type: "Penggantian",
            price: "Rp75K – Rp100K",
            duration: "30–45 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Oli Transmisi Manual",
                "Pemeriksaan Baut Drain & Fill",
                "Pemeriksaan Kondisi Oli Lama",
                "Pemeriksaan Kebocoran Oli Transmisi"
            ]
        },

        {
            name: "Ganti Oli Transmisi Otomatis (AT)",
            type: "Penggantian",
            price: "Rp275K – Rp375K",
            duration: "45–90 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Oli Transmisi Otomatis",
                "Pemeriksaan Baut Drain & Fill",
                "Pemeriksaan Kondisi Oli AT",
                "Pemeriksaan Kebocoran Oli Transmisi"
            ]
        },

        {
            name: "Ganti Filter Oli Transmisi",
            type: "Penggantian",
            price: "Rp150K – Rp350K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Filter Oli Transmisi",
                "Pembersihan Bak Oli Transmisi",
                "Pembersihan Magnet Penampung Serbuk Logam",
                "Pemeriksaan Kebocoran Oli"
            ]
        },

        {
            name: "Flushing Oli Mesin",
            type: "Perawatan",
            price: "Rp50K – Rp150K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Engine Flush",
                "Membersihkan Endapan Lumpur Oli",
                "Membersihkan Jalur Pelumasan Mesin",
                "Pembuangan Oli Lama",
                "Persiapan Pengisian Oli Baru"
            ]
        },

        {
            name: "Ganti Oli Gardan",
            type: "Penggantian",
            price: "Rp100K – Rp175K",
            duration: "30–45 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Oli Gardan",
                "Pemeriksaan Baut Drain & Fill",
                "Pemeriksaan Kondisi Oli Gardan",
                "Pemeriksaan Kebocoran Oli"
            ]
        },

        {
            name: "Mengatasi Kebocoran Oli Mesin",
            type: "Perbaikan",
            price: "Rp150K – Rp500K",
            duration: "60–180 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pemeriksaan Titik Kebocoran Oli",
                "Pemeriksaan Seal & Gasket",
                "Penggantian Seal/Gasket (bila diperlukan)",
                "Pembersihan Area Kebocoran",
                "Pengujian Setelah Perbaikan"
            ]
        }

    ]

},

fuel: {

    title: "⛽ Sistem Bahan Bakar (Fuel System)",

    services: [

        {
            name: "Pemeriksaan Sistem Bahan Bakar",
            type: "Pemeriksaan",
            price: "Rp150K – Rp250K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pemeriksaan Fuel Pump",
                "Pemeriksaan Filter Bahan Bakar",
                "Pemeriksaan Injector",
                "Pemeriksaan Tekanan Bahan Bakar",
                "Pemeriksaan Kebocoran Sistem Bahan Bakar",
                "Analisa Sistem Bahan Bakar"
            ]
        },

        {
            name: "Fuel System Cleaner",
            type: "Perawatan",
            price: "Rp250K – Rp500K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pembersihan Jalur Bahan Bakar",
                "Pembersihan Injector",
                "Pembersihan Ruang Bakar",
                "Pembersihan Katup Intake",
                "Pemeriksaan Sistem Bahan Bakar"
            ]
        },

        {
            name: "Ganti Fuel Pump",
            type: "Penggantian",
            price: "Rp190K – Rp260K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Fuel Pump",
                "Pemeriksaan Tekanan Bahan Bakar",
                "Pemeriksaan Soket Kelistrikan Fuel Pump",
                "Pemeriksaan Kebocoran",
                "Uji Sistem Bahan Bakar"
            ]
        },

        {
            name: "Ganti Filter Bahan Bakar",
            type: "Penggantian",
            price: "Rp190K – Rp260K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Filter Bahan Bakar",
                "Pemeriksaan Jalur Bahan Bakar",
                "Pemeriksaan Kebocoran",
                "Uji Aliran Bahan Bakar"
            ]
        },

        {
            name: "Kuras Tangki Bahan Bakar",
            type: "Perawatan",
            price: "Rp290K – Rp330K",
            duration: "90–180 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pengurasan Tangki Bahan Bakar",
                "Pembersihan Endapan Kotoran",
                "Pembersihan Tangki Bahan Bakar",
                "Pemeriksaan Fuel Pump",
                "Pemeriksaan Saringan Fuel Pump"
            ]
        },

        {
            name: "Ganti Injector",
            type: "Penggantian",
            price: "Rp275K – Rp400K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Injector",
                "Penggantian O-Ring Injector (bila diperlukan)",
                "Pemeriksaan Tekanan Bahan Bakar",
                "Pemeriksaan Kebocoran Injector",
                "Uji Performa Mesin"
            ]
        },

        {
            name: "Servis Injector",
            type: "Servis",
            price: "Rp300K – Rp600K",
            duration: "90–180 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pembongkaran Injector (bila diperlukan)",
                "Pembersihan Injector dengan Injector Cleaner",
                "Pengujian Pola Semprotan",
                "Pengujian Debit Injector",
                "Pemeriksaan Kebocoran Injector"
            ]
        },

        {
            name: "Servis Karburator",
            type: "Servis",
            price: "Rp220K – Rp350K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pembongkaran Karburator",
                "Pembersihan Seluruh Jalur Karburator",
                "Pemeriksaan Pelampung",
                "Setelan Idle",
                "Setelan Campuran Udara & Bahan Bakar",
                "Uji Performa Mesin"
            ]
        },

        {
            name: "Ganti Karburator",
            type: "Penggantian",
            price: "Rp120K – Rp200K",
            duration: "45–90 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Karburator",
                "Setelan Idle",
                "Setelan Campuran Udara & Bahan Bakar",
                "Pemeriksaan Kebocoran",
                "Uji Performa Mesin"
            ]
        }

    ]

},

suspension: {

    title: "🚙 Sistem Suspensi (Suspension System)",

    services: [

        {
            name: "Ganti Shock Absorber Depan",
            type: "Penggantian",
            price: "Rp220K – Rp390K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Shock Absorber Depan",
                "Pemeriksaan Dudukan Shock (Mounting)",
                "Pemeriksaan Per Shock",
                "Pemeriksaan Baut Pengikat",
                "Uji Kendaraan"
            ]
        },

        {
            name: "Ganti Shock Absorber Belakang",
            type: "Penggantian",
            price: "Rp165K – Rp400K",
            duration: "45–90 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Shock Absorber Belakang",
                "Pemeriksaan Dudukan Shock",
                "Pemeriksaan Per Shock",
                "Pemeriksaan Baut Pengikat",
                "Uji Kendaraan"
            ]
        },

        {
            name: "Ganti Ball Joint",
            type: "Penggantian",
            price: "Rp165K – Rp175K",
            duration: "45–90 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Ball Joint",
                "Pemeriksaan Steering Knuckle",
                "Pemeriksaan Lower Arm",
                "Pemeriksaan Baut Pengikat",
                "Uji Kendaraan"
            ]
        },

        {
            name: "Ganti Lower Arm",
            type: "Penggantian",
            price: "Rp220K – Rp290K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Lower Arm",
                "Pemeriksaan Ball Joint",
                "Pemeriksaan Bushing Lower Arm",
                "Pemeriksaan Baut Pengikat",
                "Uji Kendaraan"
            ]
        },

        {
            name: "Ganti Upper Arm",
            type: "Penggantian",
            price: "Rp190K – Rp210K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Upper Arm",
                "Pemeriksaan Ball Joint",
                "Pemeriksaan Bushing Upper Arm",
                "Pemeriksaan Baut Pengikat",
                "Uji Kendaraan"
            ]
        },

        {
            name: "Ganti Link Stabilizer",
            type: "Penggantian",
            price: "Rp110K – Rp145K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Link Stabilizer",
                "Pemeriksaan Karet Stabilizer",
                "Pemeriksaan Stabilizer Bar",
                "Uji Kendaraan"
            ]
        },

        {
            name: "Ganti Bushing Lower Arm",
            type: "Penggantian",
            price: "Rp165K – Rp250K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Bushing Lower Arm",
                "Pemeriksaan Lower Arm",
                "Pemeriksaan Dudukan Bushing",
                "Uji Kendaraan"
            ]
        },

        {
            name: "Ganti Bushing Upper Arm",
            type: "Penggantian",
            price: "Rp165K – Rp250K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Bushing Upper Arm",
                "Pemeriksaan Upper Arm",
                "Pemeriksaan Dudukan Bushing",
                "Uji Kendaraan"
            ]
        },

        {
            name: "Ganti Karet Stabilizer",
            type: "Penggantian",
            price: "Rp85K – Rp120K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Karet Stabilizer",
                "Pemeriksaan Stabilizer Bar",
                "Pemeriksaan Bracket Stabilizer",
                "Uji Kendaraan"
            ]
        },

        {
            name: "Ganti Bearing Roda",
            type: "Penggantian",
            price: "Rp165K – Rp320K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Bearing Roda",
                "Pemeriksaan Hub Roda",
                "Pemeriksaan As Roda",
                "Pemeriksaan Baut Roda",
                "Uji Kendaraan"
            ]
        }

    ]

},

steering: {

    title: "🎯 Sistem Kemudi (Steering System)",

    services: [

        {
            name: "Ganti Steering Rack",
            type: "Penggantian",
            price: "Rp385K – Rp950K",
            duration: "180–360 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Steering Rack",
                "Pemeriksaan Tie Rod",
                "Pemeriksaan Rack End",
                "Pemeriksaan Bushing Steering",
                "Uji Fungsi Kemudi"
            ]
        },

        {
            name: "Servis Steering Rack",
            type: "Servis",
            price: "Rp825K – Rp1.450K",
            duration: "1–2 Hari",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pembongkaran Steering Rack",
                "Pembersihan Komponen",
                "Pemeriksaan Gear Rack",
                "Penggantian Seal Kit (bila diperlukan)",
                "Perakitan Kembali",
                "Uji Fungsi Kemudi"
            ]
        },

        {
            name: "Ganti Tie Rod",
            type: "Penggantian",
            price: "Rp140K – Rp145K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Tie Rod",
                "Pemeriksaan Rack End",
                "Pemeriksaan Boot Steering Rack",
                "Uji Fungsi Kemudi"
            ]
        },

        {
            name: "Ganti Rack End",
            type: "Penggantian",
            price: "Rp165K – Rp230K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Rack End",
                "Pemeriksaan Tie Rod",
                "Pemeriksaan Steering Rack",
                "Uji Fungsi Kemudi"
            ]
        },

        {
            name: "Ganti Power Steering Pump",
            type: "Penggantian",
            price: "Rp220K – Rp450K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Power Steering Pump",
                "Pemeriksaan Belt Power Steering",
                "Pemeriksaan Selang Power Steering",
                "Pengisian Oli Power Steering (bila diperlukan)",
                "Uji Sistem Power Steering"
            ]
        },

        {
            name: "Servis Power Steering Pump",
            type: "Servis",
            price: "Rp450K – Rp900K",
            duration: "180–360 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pembongkaran Power Steering Pump",
                "Pembersihan Komponen",
                "Pemeriksaan Bearing",
                "Penggantian Seal (bila diperlukan)",
                "Perakitan",
                "Uji Fungsi"
            ]
        },

        {
            name: "Ganti Selang Power Steering",
            type: "Penggantian",
            price: "Rp165K – Rp250K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Selang Power Steering",
                "Pemeriksaan Clamp Selang",
                "Pengisian Oli Power Steering (bila diperlukan)",
                "Pemeriksaan Kebocoran",
                "Uji Sistem Power Steering"
            ]
        },

        {
            name: "Ganti Oli Power Steering",
            type: "Penggantian",
            price: "Rp100K – Rp175K",
            duration: "30–45 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pengurasan Oli Power Steering Lama",
                "Pengisian Oli Power Steering Baru",
                "Pemeriksaan Kebocoran Sistem",
                "Uji Fungsi Kemudi"
            ]
        },

        {
            name: "Steering System Flush",
            type: "Perawatan",
            price: "Rp250K – Rp450K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Flushing Sistem Power Steering",
                "Pembersihan Jalur Oli Power Steering",
                "Pengisian Oli Baru",
                "Pemeriksaan Kebocoran",
                "Uji Fungsi Kemudi"
            ]
        }

    ]

},

cooling: {

    title: "🌡️ Sistem Pendingin (Cooling System)",

    services: [

        {
            name: "Kuras Radiator",
            type: "Perawatan",
            price: "Rp80K – Rp120K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pengurasan Coolant Lama",
                "Flushing Sistem Pendingin",
                "Pengisian Coolant Baru",
                "Pemeriksaan Kebocoran Sistem Pendingin",
                "Pemeriksaan Tutup Radiator"
            ]
        },

        {
            name: "Ganti Radiator",
            type: "Penggantian",
            price: "Rp140K – Rp200K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Radiator",
                "Penggantian Coolant (bila diperlukan)",
                "Pemeriksaan Selang Radiator",
                "Pemeriksaan Tutup Radiator",
                "Uji Kebocoran Sistem Pendingin"
            ]
        },

        {
            name: "Ganti Water Pump",
            type: "Penggantian",
            price: "Rp220K – Rp460K",
            duration: "90–180 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Water Pump",
                "Pemeriksaan Gasket Water Pump",
                "Pemeriksaan Drive Belt/Timing Belt",
                "Pengisian Coolant Baru (bila diperlukan)",
                "Uji Sistem Pendingin"
            ]
        },

        {
            name: "Ganti Thermostat",
            type: "Penggantian",
            price: "Rp165K – Rp230K",
            duration: "45–90 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Thermostat",
                "Pemeriksaan Housing Thermostat",
                "Penggantian Coolant (bila diperlukan)",
                "Uji Suhu Kerja Mesin",
                "Pemeriksaan Kebocoran"
            ]
        },

        {
            name: "Ganti Selang Radiator",
            type: "Penggantian",
            price: "Rp85K – Rp145K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Selang Radiator",
                "Pemeriksaan Klem Selang",
                "Pengisian Coolant (bila diperlukan)",
                "Pemeriksaan Kebocoran",
                "Uji Sistem Pendingin"
            ]
        },

        {
            name: "Ganti Tutup Radiator",
            type: "Penggantian",
            price: "Rp50K – Rp100K",
            duration: "15–30 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Tutup Radiator",
                "Pemeriksaan Tekanan Sistem Pendingin",
                "Pemeriksaan Kebocoran"
            ]
        },

        {
            name: "Ganti Motor Fan Radiator",
            type: "Penggantian",
            price: "Rp165K – Rp230K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Motor Fan Radiator",
                "Pemeriksaan Fan Blade",
                "Pemeriksaan Relay Fan",
                "Pemeriksaan Sekring Fan",
                "Uji Kinerja Kipas Radiator"
            ]
        },

        {
            name: "Ganti Motor Fan Kondensor AC",
            type: "Penggantian",
            price: "Rp165K – Rp230K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Motor Fan Kondensor AC",
                "Pemeriksaan Relay Fan",
                "Pemeriksaan Sekring Fan",
                "Uji Kinerja Kipas Kondensor"
            ]
        },

        {
            name: "Ganti Water Outlet/Inlet",
            type: "Penggantian",
            price: "Rp165K – Rp230K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Water Outlet/Inlet",
                "Pemeriksaan Gasket",
                "Pemeriksaan Selang Radiator",
                "Pemeriksaan Kebocoran",
                "Uji Sistem Pendingin"
            ]
        }

    ]

},

transmission: {

    title: "⚙️ Sistem Transmisi (Transmission System)",

    services: [

        {
            name: "Ganti Kopling",
            type: "Penggantian",
            price: "Rp300K – Rp900K",
            duration: "240–480 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Kampas Kopling",
                "Pemeriksaan Pressure Plate",
                "Pemeriksaan Release Bearing",
                "Pemeriksaan Flywheel",
                "Penyetelan Sistem Kopling",
                "Uji Jalan Kendaraan"
            ]
        },

        {
            name: "Ganti Master Kopling Atas",
            type: "Penggantian",
            price: "Rp175K – Rp250K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Master Kopling Atas",
                "Pemeriksaan Selang Kopling",
                "Bleeding Sistem Kopling",
                "Uji Fungsi Kopling"
            ]
        },

        {
            name: "Ganti Master Kopling Bawah",
            type: "Penggantian",
            price: "Rp175K – Rp250K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Master Kopling Bawah",
                "Pemeriksaan Selang Kopling",
                "Bleeding Sistem Kopling",
                "Uji Fungsi Kopling"
            ]
        },

        {
            name: "Ganti Release Bearing",
            type: "Penggantian",
            price: "Rp450K – Rp700K",
            duration: "240–480 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Release Bearing",
                "Pemeriksaan Kampas Kopling",
                "Pemeriksaan Pressure Plate",
                "Pemeriksaan Flywheel",
                "Uji Fungsi Kopling"
            ]
        },

        {
            name: "Ganti Pilot Bearing",
            type: "Penggantian",
            price: "Rp450K – Rp700K",
            duration: "240–480 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Pilot Bearing",
                "Pemeriksaan Flywheel",
                "Pemeriksaan Poros Input Transmisi",
                "Uji Fungsi Kopling"
            ]
        },

        {
            name: "Ganti Drive Shaft",
            type: "Penggantian",
            price: "Rp220K – Rp385K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Drive Shaft",
                "Pemeriksaan CV Joint",
                "Pemeriksaan Boot Drive Shaft",
                "Pemeriksaan Oli Transmisi (jika diperlukan)",
                "Uji Jalan Kendaraan"
            ]
        },

        {
            name: "Ganti Boot Drive Shaft",
            type: "Penggantian",
            price: "Rp165K – Rp250K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Boot Drive Shaft",
                "Penggantian Grease CV Joint",
                "Pemeriksaan CV Joint",
                "Pembersihan Area CV Joint",
                "Uji Jalan Kendaraan"
            ]
        },

        {
            name: "Ganti Bearing Roda",
            type: "Penggantian",
            price: "Rp165K – Rp320K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Bearing Roda",
                "Pemeriksaan Hub Roda",
                "Pemeriksaan As Roda",
                "Pemeriksaan Kekencangan Baut Roda",
                "Uji Jalan Kendaraan"
            ]
        },

        {
            name: "Servis Transmisi Manual",
            type: "Servis",
            price: "Rp1.200K – Rp3.500K",
            duration: "1–3 Hari",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pembongkaran Transmisi",
                "Pemeriksaan Gear Transmisi",
                "Pemeriksaan Bearing",
                "Pemeriksaan Synchronizer",
                "Penggantian Komponen Rusak (jika diperlukan)",
                "Perakitan & Uji Jalan"
            ]
        },

        {
            name: "Servis Transmisi Otomatis",
            type: "Servis",
            price: "Rp2.500K – Rp8.000K",
            duration: "2–5 Hari",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pemeriksaan Awal Transmisi",
                "Pembongkaran Transmisi Otomatis",
                "Pemeriksaan Valve Body",
                "Pemeriksaan Clutch Pack",
                "Pemeriksaan Torque Converter (bila diperlukan)",
                "Perakitan & Pengujian"
            ]
        }

    ]

},

electrical: {

    title: "🔋 Sistem Kelistrikan Mesin (Electrical System)",

    services: [

        {
            name: "Pemeriksaan Sistem Starter",
            type: "Pemeriksaan",
            price: "Rp200K – Rp320K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pemeriksaan Kondisi Aki",
                "Pemeriksaan Dinamo Starter",
                "Pemeriksaan Relay Starter",
                "Pemeriksaan Jalur Kelistrikan Starter",
                "Pengukuran Tegangan Starter",
                "Analisa Penyebab Gangguan"
            ]
        },

        {
            name: "Pemeriksaan Sistem Charging",
            type: "Pemeriksaan",
            price: "Rp200K – Rp300K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pemeriksaan Alternator",
                "Pemeriksaan Regulator",
                "Pemeriksaan Tegangan Pengisian",
                "Pemeriksaan Aki",
                "Analisa Sistem Charging"
            ]
        },

        {
            name: "Ganti Aki",
            type: "Penggantian",
            price: "Rp80K – Rp100K",
            duration: "15–30 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Aki",
                "Pemeriksaan Terminal Aki",
                "Pembersihan Terminal Aki",
                "Pemeriksaan Tegangan Pengisian",
                "Reset Sistem Elektronik (jika diperlukan)"
            ]
        },

        {
            name: "Ganti Alternator",
            type: "Penggantian",
            price: "Rp190K – Rp230K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Alternator",
                "Pemeriksaan Belt Alternator",
                "Pemeriksaan Jalur Kelistrikan",
                "Pemeriksaan Tegangan Pengisian",
                "Uji Sistem Charging"
            ]
        },

        {
            name: "Servis Alternator",
            type: "Servis",
            price: "Rp385K – Rp520K",
            duration: "120–240 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pembongkaran Alternator",
                "Pembersihan Komponen",
                "Pemeriksaan Rotor & Stator",
                "Pemeriksaan Bearing",
                "Pemeriksaan Carbon Brush",
                "Perakitan & Pengujian"
            ]
        },

        {
            name: "Ganti Dinamo Starter",
            type: "Penggantian",
            price: "Rp190K – Rp290K",
            duration: "60–120 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Dinamo Starter",
                "Pemeriksaan Relay Starter",
                "Pemeriksaan Jalur Kelistrikan",
                "Uji Sistem Starter"
            ]
        },

        {
            name: "Servis Dinamo Starter",
            type: "Servis",
            price: "Rp275K – Rp390K",
            duration: "120–240 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Pembongkaran Dinamo Starter",
                "Pembersihan Komponen",
                "Pemeriksaan Carbon Brush",
                "Pemeriksaan Bendix",
                "Pemeriksaan Armature",
                "Perakitan & Pengujian"
            ]
        },

        {
            name: "Ganti Ignition Coil",
            type: "Penggantian",
            price: "Rp110K – Rp380K",
            duration: "30–60 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Ignition Coil",
                "Pemeriksaan Soket Coil",
                "Pemeriksaan Sistem Pengapian",
                "Uji Percikan Api",
                "Uji Performa Mesin"
            ]
        },

        {
            name: "Ganti Kabel Busi",
            type: "Penggantian",
            price: "Rp110K – Rp130K",
            duration: "30–45 Menit",
            vehicle: "Tergantung jenis kendaraan",
            includes: [
                "Penggantian Kabel Busi",
                "Pemeriksaan Jalur Pengapian",
                "Pemeriksaan Soket Kabel Busi",
                "Uji Percikan Api",
                "Uji Performa Mesin"
            ]
        }

    ]

}

/* ======================================================
   SHOW SYSTEM SERVICES
====================================================== */

function showSystem(category) {

    currentCategory = category;

    const data = systemData[category];

    if (!data) return;

    popupTitle.textContent = data.title;

    let html = "";

    data.services.forEach((service, index) => {

        html += `
            <div class="service-card" onclick="showServiceDetail('${category}', ${index})">

                <h3>${service.name}</h3>

                <p>${service.type}</p>

                <span>${service.price}</span>

            </div>
        `;

    });

    popupContent.innerHTML = html;

    popup.classList.add("active");

    currentStep = "service-list";

}

/* ======================================================
   SHOW SERVICE DETAIL
====================================================== */

function showServiceDetail(category, index) {

    currentCategory = category;

    const service = systemData[category].services[index];

    currentService = service.name;

    let html = `
        <div class="service-detail">

            <h3>${service.name}</h3>

            <p><strong>Jenis</strong><br>${service.type}</p>

            <p><strong>Estimasi Biaya</strong><br>${service.price}</p>

            <p><strong>Estimasi Waktu</strong><br>${service.duration}</p>

            <p><strong>Kendaraan</strong><br>${service.vehicle}</p>

            <h4>🔍 Meliputi</h4>

            <ul>
    `;

    service.includes.forEach(item => {
        html += `<li>${item}</li>`;
    });

    html += `
            </ul>

            <button id="bookingButton" class="booking-btn">
                Booking via WhatsApp
            </button>

        </div>
    `;

    popupTitle.textContent = service.name;

    popupContent.innerHTML = html;

    currentStep = "service-detail";

    document
        .getElementById("bookingButton")
        .addEventListener("click", () => {
            bookingService(service);
        });

}

/* ======================================================
   BOOKING WHATSAPP
====================================================== */

function bookingService(service) {

    let message =
`Halo, kak. 👋

Biso bantu jadwalkan booking?

Aku nak booking layanan *${service.name}*.

📝 Keluhan:
....................................

Terimo kasih. 🙏`;

    const phone = "62895622499262";

    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}

/* ======================================================
   SEARCH SERVICE
====================================================== */

function searchService(keyword) {

    keyword = keyword.toLowerCase().trim();

    if (keyword === "") return;

    let result = [];

    Object.keys(systemData).forEach(category => {

        systemData[category].services.forEach((service, index) => {

            if (

                service.name.toLowerCase().includes(keyword) ||

                service.type.toLowerCase().includes(keyword)

            ) {

                result.push({
                    category,
                    index,
                    service
                });

            }

        });

    });

    popupTitle.textContent = `Hasil Pencarian (${result.length})`;

    if (result.length === 0) {

        popupContent.innerHTML = `
            <div class="empty-search">
                <h3>Tidak ada layanan ditemukan.</h3>
            </div>
        `;

        popup.classList.add("active");

        return;

    }

    let html = "";

    result.forEach(item => {

        html += `
            <div class="service-card"
                 onclick="showServiceDetail('${item.category}', ${item.index})">

                <h3>${item.service.name}</h3>

                <p>${item.service.type}</p>

                <span>${item.service.price}</span>

            </div>
        `;

    });

    popupContent.innerHTML = html;

    popup.classList.add("active");

}

/* ======================================================
   SEARCH EVENT
====================================================== */

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const keyword = this.value.trim();

        if (keyword.length === 0) {

            popup.classList.remove("active");

            return;

        }

        searchService(keyword);

    });

}

/* ======================================================
   POPUP BUTTON
====================================================== */

if (popupClose) {

    popupClose.addEventListener("click", () => {

        popup.classList.remove("active");

        popupContent.innerHTML = "";

        currentCategory = "";

        currentService = "";

        currentStep = "home";

    });

}

if (popupBack) {

    popupBack.addEventListener("click", () => {

        popup.classList.remove("active");

        popupContent.innerHTML = "";

        currentStep = "home";

    });

}

/* ======================================================
   PACKAGE CARD EVENT
====================================================== */

packageCards.forEach(card => {

    card.addEventListener("click", () => {

        const category = card.dataset.package;

        if (!category) return;

        showPackage(category);

    });

});


/* ======================================================
   SYSTEM CARD EVENT
====================================================== */

systemCards.forEach(card => {

    card.addEventListener("click", () => {

        const category = card.dataset.system;

        if (!category) return;

        showSystem(category);

    });

});

/* ======================================================
   INITIALIZE WEBSITE
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ VRRINS GARAGE Ready");

    popup.classList.remove("active");

    currentCategory = "";

    currentService = "";

    currentStep = "home";

});

