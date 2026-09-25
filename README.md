# ModulAjarBagoes - Portal Modul Ajar Deep Learning (100% Gratis)

Website landing page modern, profesional, dan responsif untuk **ModulAjarBagoes**. Platform penyedia perangkat ajar Kurikulum Merdeka berbasis pendekatan **Deep Learning (Pembelajaran Mendalam)** yang mengintegrasikan 3 pilar: *Mindful Learning*, *Meaningful Learning*, dan *Joyful Learning*.

Seluruh modul dan perangkat pembelajaran dapat diakses dan diunduh **100% Gratis** tanpa syarat pembayaran atau registrasi apapun.

---

## 🌟 Fitur Utama

1. **100% Gratis Tanpa Biaya**:
   - Seluruh modul disajikan dalam format **Microsoft Word (.docx / .doc)** yang 100% siap edit nama sekolah, guru, dan kepala sekolah.
   - Tidak ada biaya langganan, tanpa sistem pembayaran atau checkout.

2. **Katalog Modul Ajar Terstruktur (250+ Mapel)**:
   - Filter cepat berdasarkan jenjang: **TK / PAUD (Fase Fondasi), SD (Fase A, B, C), SMP (Fase D), dan SMA/SMK (Fase E & F)**.
   - Fitur pencarian instan (*live search*) untuk menemukan mapel secara cepat.

3. **CP & ATP Interactive Reader (SK BSKAP No. 046/H/KR/2025)**:
   - Pembaca dokumen resmi interaktif langsung di layar per mata pelajaran (*Zero Download*).
   - Dokumen telah dipilah menjadi dokumen ringkas (5–15 halaman) per mapel sehingga guru tidak perlu mencari di dokumen master 1.691 halaman.
   - Tersedia 5 tab navigasi:
     1. Rasional & Tujuan Mata Pelajaran
     2. Karakteristik & Elemen Capaian
     3. Teks Capaian Pembelajaran (CP) Resmi
     4. Alur Tujuan Pembelajaran (ATP) Scaffolding
     5. Unduh Dokumen Ringkas (Opsional)

4. **Struktur Standar Modul Ajar Deep Learning**:
   - **1. IDENTIFIKASI:** Identitas Modul, Kesiapan Siswa, Karakteristik Materi, Dimensi Profil Lulusan.
   - **2. DESAIN PEMBELAJARAN:** CP 046/2025, TP, Topik Kontekstual, Lintas Disiplin Ilmu, Praktik Pedagogis, Lingkungan Pembelajaran, Pemanfaatan Digital.
   - **3. PENGALAMAN BELAJAR:** Disusun dalam 3 tahapan langkah kegiatan nyata:
     - *Memahami → Mindful (Berkesadaran)*
     - *Mengaplikasi → Meaningful (Bermakna)*
     - *Merefleksi → Joyful (Menggembirakan)*
   - **4. ASESMEN DAN LAMPIRAN:** Asesmen Diagnostik/Formatif/Sumatif, Rubrik Analitis, Remedial & Pengayaan, LKPD, Bahan Bacaan, Glosarium, dan Daftar Pustaka.

5. **Bonus Bank Prompt AI untuk Guru**:
   - Generator Modul Ajar Deep Learning (patuh format 4 pilar di atas).
   - Pembuat Soal HOTS & Kisi-kisi Asesmen.
   - Pembuat LKPD Diferensiasi.
   - Generator Narasi Raport Kurikulum Merdeka.
   - Dilengkapi tombol 1-klik salin (*copy to clipboard*).

---

## 📁 Struktur Berkas

```
ModulAjarBagoes/
├── index.html            # Landing page utama
├── styles.css            # Desain & styling responsif
├── app.js                # Logika interaktif, katalog, reader, dan pencarian
├── catalog_data.js       # Data pengelompokan jenjang & kelas
├── modules-data.js       # Database 250+ mata pelajaran
├── cp_atp_data.js        # Database jenjang regulasi SK BSKAP 046
├── cp_reader_data.js     # Konten teks naskah CP per mapel
├── cp_docs/              # Direktori berkas PDF ringkas resmi per mapel
├── CP DAN ATP KUMER.pdf  # Berkas regulasi master SK BSKAP 046 (1.691 hal)
├── vercel.json           # Konfigurasi deployment Vercel
├── .gitignore            # File pengecualian git
└── README.md             # Dokumentasi proyek
```

---

## 🚀 Menjalankan di Komputer Lokal

Cukup jalankan web server sederhana, contohnya dengan Python:
```bash
python -m http.server 3000
```
Buka peramban di `http://localhost:3000`.

---

## 🌐 Publikasi ke Vercel

Proyek ini telah dikonfigurasi dan siap di-*deploy* langsung ke **Vercel**:
1. Hubungkan repositori GitHub ini ke akun [Vercel](https://vercel.com).
2. Klik **Import Project** dan pilih repositori `ModulAjarBagoes`.
3. Vercel akan otomatis mendeteksi proyek sebagai *Static Site* dan mempublikasikannya secara langsung dengan SSL gratis.
