VRRINS GARAGE — Floating Book Now fixed

Ganti index.html dan style.css dengan dua file ini. services.js tidak perlu diubah.

Perbaikan utama:
- satu aturan posisi floating yang dominan;
- desktop: 20px dari kanan, ukuran 90px;
- mobile: menempel sisi kanan (0px), ukuran 80px;
- posisi vertikal mengikuti titik tengah tombol BOOKING di hero;
- tombol disembunyikan sampai posisi awal selesai dihitung, sehingga refresh tidak menampilkan tombol dari posisi sementara;
- tidak menghitung ulang saat scroll/popup; hanya saat lebar viewport benar-benar berubah.
