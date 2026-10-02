// Database Preset Lengkap Capaian Pembelajaran & Elemen Resmi SK BSKAP No. 046/H/KR/2025
// Mendukung Seluruh Mata Pelajaran SD, SMP, SMA (Umum, MIPA, IPS, Bahasa, Seni, PKWU, Agama, BK), SMK, dan PAUD/TK

const MAPEL_PRESETS = {

    sd_indo: {
      mapel: 'Bahasa Indonesia',
      singkatan: 'BIND',
      fase: 'Fase B / Kelas 4',
      alokasiTotal: '216 JP / Tahun',
      jpMinggu: '6 JP / Minggu',
      jpPertemuan: '2 JP @ 35 Menit',
      elemenKode: `1 | SIMAK | Menyimak
2 | BACA | Membaca dan Memirsa
3 | BICARA | Berbicara dan Mempresentasikan
4 | TULIS | Menulis`,
      cpUmum: `Pada akhir Fase B, peserta didik memiliki kemampuan berbahasa untuk berkomunikasi dan bernalar, sesuai dengan tujuan, konteks sosial, akademis, dan dunia kerja. Peserta didik mampu memahami, mengolah, dan menginterpretasi informasi paparan tentang topik yang beragam dan karya sastra. Peserta didik mampu berpartisipasi aktif dalam diskusi, mempresentasikan, dan menanggapi informasi nonfiksi dan fiksi yang dipaparkan.`,
      cpElemen: `Elemen Menyimak:
Peserta didik mampu memahami ide pokok suatu pesan lisan, informasi dari media audio, teks aural, dan instruksi lisan yang berkaitan dengan tujuan berkomunikasi.

Elemen Membaca dan Memirsa:
Peserta didik mampu memahami pesan dan informasi tentang kehidupan sehari-hari, teks narasi, dan puisi anak dalam bentuk cetak atau elektronik serta membaca kata-kata baru dengan fasih.

Elemen Berbicara dan Mempresentasikan:
Peserta didik mampu berbicara dengan pilihan kata dan sikap santun, menggunakan volume dan intonasi tepat, serta aktif mengajukan dan menanggapi pertanyaan dalam diskusi.

Elemen Menulis:
Peserta didik mampu menulis teks narasi, teks deskripsi, teks rekon, teks prosedur, dan teks eksposisi dengan rangkaian kalimat beragam dan informasi rinci akurat.`,
      kodeMA: 'BIND-B-BACA-001',
      modelMA: 'Discovery Learning',
      modaMA: 'Tatap Muka',
      temaMA: 'Teks Narasi Cerita Rakyat Nusantara dan Nilai Budi Pekerti',
      produkMA: 'Buku Komik Cerita Bergambar Sederhana Berisi Pesan Moral',
      sumberMA: 'Buku Siswa Bahasa Indonesia Kelas IV Kemdikbudristek, Buku Cerita Perpustakaan'
    },
    sd_mat: {
      mapel: 'Matematika',
      singkatan: 'MAT',
      fase: 'Fase B / Kelas 4',
      alokasiTotal: '180 JP / Tahun',
      jpMinggu: '5 JP / Minggu',
      jpPertemuan: '2 JP @ 35 Menit',
      elemenKode: `1 | BIL | Bilangan
2 | ALJ | Aljabar
3 | UKUR | Pengukuran
4 | GEO | Geometri
5 | DATA | Analisis Data dan Peluang`,
      cpUmum: `Pada akhir Fase B, peserta didik menunjukkan pemahaman dan intuisi bilangan (number sense) pada bilangan cacah sampai 10.000. Mereka dapat melakukan operasi penjumlahan, pengurangan, perkalian, dan pembagian bilangan cacah sampai 100 dengan berbagai strategi kontekstual.`,
      cpElemen: `Elemen Bilangan: Menyelesaikan operasi hitung bilangan cacah sampai 10.000, pecahan senilai, dan desimal persepuluhan.
Elemen Aljabar: Mengidentifikasi dan mengembangkan pola bilangan membesar dan mengecil.
Elemen Pengukuran: Mengukur panjang dan berat benda menggunakan satuan baku (cm, m, gram, kg).
Elemen Geometri: Mendeskripsikan ciri-ciri berbagai bentuk bangun datar (segi empat, segitiga) dan menyusun komposisi bentuk.
Elemen Analisis Data: Mengurutkan, menyajikan, dan menginterpretasi data dalam bentuk tabel dan diagram batang.`,
      kodeMA: 'MAT-B-BIL-001',
      modelMA: 'Problem Based Learning (PBL)',
      modaMA: 'Tatap Muka',
      temaMA: 'Operasi Perkalian dan Pembagian Bilangan Cacah dalam Jual-Beli',
      produkMA: 'Papan Permainan Matematika Kartu Hitung Cepat',
      sumberMA: 'Buku Siswa Matematika Kelas IV Kemdikbudristek, Blok Dienes, Uang Mainan'
    },
    sd_ipas: {
      mapel: 'IPAS (Ilmu Pengetahuan Alam dan Sosial)',
      singkatan: 'IPAS',
      fase: 'Fase B / Kelas 4',
      alokasiTotal: '180 JP / Tahun',
      jpMinggu: '5 JP / Minggu',
      jpPertemuan: '2 JP @ 35 Menit',
      elemenKode: `1 | SAINS | Pemahaman IPAS (Sains & Sosial)
2 | PROSES | Keterampilan Proses`,
      cpUmum: `Pada akhir Fase B, peserta didik mengamati fenomena dan peristiwa secara sederhana menggunakan pancaindra, mencatat hasil pengamatannya, serta mencari persamaan dan perbedaannya. Peserta didik mengidentifikasi wujud zat, bentuk energi, siklus hidup makhluk hidup, serta kearifan lokal daerahnya.`,
      cpElemen: `Elemen Pemahaman IPAS: Peserta didik memahami bentuk dan fungsi bagian tubuh tumbuhan, wujud zat dan perubahannya, bentuk dan sumber energi, gaya dan gerak, serta keragaman sosial budaya di lingkungan tempat tinggal.
Elemen Keterampilan Proses: Mengamati, mempertanyakan dan memprediksi, merencanakan dan melakukan penyelidikan, memproses data, mengevaluasi dan refleksi, serta mengomunikasikan hasil penyelidikan ilmiah.`,
      kodeMA: 'IPAS-B-SAINS-001',
      modelMA: 'Inkuiri Terbimbing',
      modaMA: 'Tatap Muka',
      temaMA: 'Bagian Tubuh Tumbuhan dan Fungsinya Bagi Kelangsungan Hidup',
      produkMA: 'Herbarium Daun dan Laporan Pengamatan Kapilaritas Air pada Batang',
      sumberMA: 'Buku IPAS Kelas IV Kemdikbudristek, Tanaman Sekitar Sekolah, Kaca Pembesar'
    },
    sd_pancasila: {
      mapel: 'Pendidikan Pancasila',
      singkatan: 'PANCA',
      fase: 'Fase B / Kelas 4',
      alokasiTotal: '144 JP / Tahun',
      jpMinggu: '4 JP / Minggu',
      jpPertemuan: '2 JP @ 35 Menit',
      elemenKode: `1 | PANCA | Pancasila
2 | UUD | Undang-Undang Dasar Negara Republik Indonesia Tahun 1945
3 | BHINNEKA | Bhinneka Tunggal Ika
4 | NKRI | Negara Kesatuan Republik Indonesia`,
      cpUmum: `Pada akhir Fase B, peserta didik memahami makna sila-sila Pancasila dan penerapannya dalam kehidupan sehari-hari di sekolah dan masyarakat; memahami hak dan kewajiban; serta menghargai keberagaman suku dan budaya nusantara.`,
      cpElemen: `Elemen Pancasila: Menerapkan nilai-nilai luhur Pancasila dalam gotong royong dan musyawarah kelas.
Elemen UUD 1945: Melaksanakan aturan di sekolah dan membedakan hak serta kewajiban sebagai warga sekolah.
Elemen Bhinneka Tunggal Ika: Menghargai perbedaan suku bangsa, agama, dan bahasa daerah teman sebaya.
Elemen NKRI: Menunjukkan sikap kerja sama menjaga kebersihan dan kerukunan lingkungan desa/sekolah.`,
      kodeMA: 'PANCA-B-PANCA-001',
      modelMA: 'Project Based Learning (PjBL)',
      modaMA: 'Tatap Muka',
      temaMA: 'Penerapan Nilai-Nilai Pancasila dalam Gotong Royong Lingkungan Sekolah',
      produkMA: 'Pohon Kebaikan Pancasila (Poster Aksi Nyata Kolaboratif Siswa)',
      sumberMA: 'Buku Pendidikan Pancasila Kelas IV Kemdikbudristek, Lembar Refleksi'
    },
    sd_pai: {
      mapel: 'Pendidikan Agama Islam dan Budi Pekerti',
      singkatan: 'PAI',
      fase: 'Fase B / Kelas 4',
      alokasiTotal: '108 JP / Tahun',
      jpMinggu: '3 JP / Minggu',
      jpPertemuan: '3 JP @ 35 Menit',
      elemenKode: `1 | QURAN | Al-Qur'an dan Hadis
2 | AKIDAH | Akidah
3 | AKHLAK | Akhlak
4 | FIKIH | Fikih
5 | SEJARAH | Sejarah Peradaban Islam`,
      cpUmum: `Pada akhir Fase B, peserta didik mampu membaca surah-surah pendek Al-Qur'an dengan tartil, memahami Asmaulhusna, membiasakan akhlak mulia, memahami rukun shalat, dan meneladani kisah Nabi.`,
      cpElemen: `Elemen Al-Qur'an & Hadis: Membaca Q.S. At-Tin dan Al-Alaq dengan tartil serta memahami pesan pokoknya.
Elemen Akidah: Memahami Asmaulhusna Al-Malik, Al-Quddus, As-Salam.
Elemen Akhlak: Membiasakan sikap tolong-menolong dan menghargai keragaman.
Elemen Fikih: Memahami tata cara bersuci dari hadas dan shalat fardhu berjamaah.
Elemen Sejarah: Meneladani kisah perjuangan Nabi Muhammad saw. saat hijrah ke Madinah.`,
      kodeMA: 'PAI-B-QURAN-001',
      modelMA: 'Discovery Learning',
      modaMA: 'Tatap Muka',
      temaMA: 'Membaca dan Memahami Kandungan Surah At-Tin',
      produkMA: 'Mushaf Mini Tartil Bergambar dan Peta Konsep Makna Ayat',
      sumberMA: 'Buku PAI SD Kelas IV Kemdikbudristek, Audio Murottal Tajwid'
    },
    sd_inggris: {
      mapel: 'Bahasa Inggris',
      singkatan: 'BING',
      fase: 'Fase B / Kelas 4',
      alokasiTotal: '72 JP / Tahun',
      jpMinggu: '2 JP / Minggu',
      jpPertemuan: '2 JP @ 35 Menit',
      elemenKode: `1 | LIST | Menyimak - Berbicara (Listening - Speaking)
2 | READ | Membaca - Memirsa (Reading - Viewing)
3 | WRITE | Menulis - Mempresentasikan (Writing - Presenting)`,
      cpUmum: `Pada akhir Fase B, peserta didik memahami dan merespons teks lisan dan visual sederhana dalam bahasa Inggris tentang diri sendiri, ruang kelas, dan aktivitas sehari-hari menggunakan ungkapan komunikatif ramah anak.`,
      cpElemen: `Elemen Menyimak - Berbicara: Berinteraksi menyapa, berpamitan, dan menyebutkan aktivitas rutin sehari-hari.
Elemen Membaca - Memirsa: Merespons teks visual pendek bergambar dengan kosakata dasar akurat.
Elemen Menulis - Mempresentasikan: Menulis kata dan kalimat pendek bahasa Inggris dibantu ilustrasi gambar.`,
      kodeMA: 'BING-B-LIST-001',
      modelMA: 'Discovery Learning',
      modaMA: 'Tatap Muka',
      temaMA: 'Daily Activities & Classroom Objects in English',
      produkMA: 'Flashcard Bergambar My Daily Routine & Mini Pocket Book',
      sumberMA: 'Buku My Next Words Kelas IV Kemdikbudristek, Kartu Bergambar Flashcard'
    },
    sd_pjok: {
      mapel: 'PJOK',
      singkatan: 'PJOK',
      fase: 'Fase B / Kelas 4',
      alokasiTotal: '108 JP / Tahun',
      jpMinggu: '3 JP / Minggu',
      jpPertemuan: '3 JP @ 35 Menit',
      elemenKode: `1 | GERAK | Terampil Bergerak
2 | BELAJAR | Belajar Melalui Gerak
3 | AKTIF | Bergaya Hidup Aktif
4 | SEHAT | Memilih Hidup Sehat`,
      cpUmum: `Pada akhir Fase B, peserta didik memodifikasi keterampilan gerak dasar lokomotor, non-lokomotor, dan manipulatif dalam permainan kasti dan bola sederhana, serta membiasakan pola hidup bersih sehat.`,
      cpElemen: `Elemen Terampil Bergerak: Mempraktikkan variasi gerak melempar, menangkap, dan memukul bola kecil.
Elemen Belajar Melalui Gerak: Menumbuhkan sportivitas, kejujuran, dan kerjasama regu.
Elemen Bergaya Hidup Aktif: Membiasakan pemanasan dan pendinginan teratur.
Elemen Memilih Hidup Sehat: Memahami makanan bergizi seimbang dan kebersihan diri.`,
      kodeMA: 'PJOK-B-GERAK-001',
      modelMA: 'Experiential Learning',
      modaMA: 'Tatap Muka (Praktik Lapangan)',
      temaMA: 'Variasi Gerak Dasar Manipulatif dalam Permainan Kasti Tradisional',
      produkMA: 'Jurnal Portofolio Kebugaran Fisik dan Ceklis Sportivitas Regu',
      sumberMA: 'Buku Guru PJOK SD Kelas IV Kemdikbudristek, Bola Kasti, Pemukul Kayu'
    },
    sd_senirupa: {
      mapel: 'Seni Rupa',
      singkatan: 'SRUP',
      fase: 'Fase B / Kelas 4',
      alokasiTotal: '72 JP / Tahun',
      jpMinggu: '2 JP / Minggu',
      jpPertemuan: '2 JP @ 35 Menit',
      elemenKode: `1 | ALAMI | Mengalami (Experiencing)
2 | CIPTA | Menciptakan (Creating)
3 | REFLEKSI | Merefleksikan (Reflecting)
4 | BERPIKIR | Berpikir dan Bekerja Artistik
5 | DAMPAK | Berdampak (Impacting)`,
      cpUmum: `Pada akhir Fase B, peserta didik menuangkan unsur-unsur rupa (garis, bentuk, tekstur, ruang, dan warna) melalui eksplorasi media alami dan buatan dengan teknik cetak atau kolase kreatif.`,
      cpElemen: `Elemen Mengalami: Mengamati pola tekstur alam sekitar. Elemen Menciptakan: Membuat karya cetak atau lukis tekstur alami. Elemen Merefleksikan: Menceritakan proses berkarya. Elemen Berdampak: Menghargai keindahan lingkungan hidup.`,
      kodeMA: 'SRUP-B-CIPTA-001',
      modelMA: 'Project Based Learning (PjBL)',
      modaMA: 'Tatap Muka',
      temaMA: 'Eksplorasi Tekstur Daun Alami dengan Teknik Cetak Ecoprint Kertas',
      produkMA: 'Karya Cetak Seni Rupa Tekstur Ecoprint pada Kertas Daur Ulang',
      sumberMA: 'Buku Seni Rupa SD Kelas IV Kemdikbudristek, Daun Alami Bertekstur'
    },
    smp_indo: {
      mapel: 'Bahasa Indonesia',
      singkatan: 'BIND',
      fase: 'Fase D / Kelas 7',
      alokasiTotal: '216 JP / Tahun',
      jpMinggu: '6 JP / Minggu',
      jpPertemuan: '2 JP @ 40 Menit',
      elemenKode: `1 | SIMAK | Menyimak
2 | BACA | Membaca dan Memirsa
3 | BICARA | Berbicara dan Mempresentasikan
4 | TULIS | Menulis`,
      cpUmum: `Pada akhir Fase D, peserta didik memiliki kemampuan berbahasa untuk berkomunikasi dan bernalar sesuai dengan tujuan, konteks sosial, dan akademis. Peserta didik mampu menganalisis teks deskripsi, narasi, prosedur, laporan observasi, dan karya sastra secara kritis dan terstruktur.`,
      cpElemen: `Elemen Menyimak: Menganalisis dan mengevaluasi informasi gagasan akurat dari teks aural/lisan (fiksi dan nonfiksi).
Elemen Membaca dan Memirsa: Menemukan makna tersurat dan tersirat dalam teks deskripsi, narasi, dan eksposisi visual.
Elemen Berbicara dan Mempresentasikan: Menyampaikan gagasan secara runtut, santun, dan menggunakan gestur tepat dalam diskusi kelas.
Elemen Menulis: Menulis teks deskripsi, narasi, dan laporan hasil observasi logis dan kreatif dengan ejaan baku.`,
      kodeMA: 'BIND-D-BACA-001',
      modelMA: 'Discovery Learning',
      modaMA: 'Tatap Muka',
      temaMA: 'Menjelajah Keindahan Destinasi Wisata Lokal Lewat Teks Deskripsi Otentik',
      produkMA: 'Brosur Panduan Wisata Lokal Bergambar Lengkap dengan Deskripsi Rinci',
      sumberMA: 'Buku Siswa Bahasa Indonesia Kelas VII Kemdikbudristek, Video Apersepsi Alam'
    },
    smp_inggris: {
      mapel: 'Bahasa Inggris',
      singkatan: 'BING',
      fase: 'Fase D / Kelas 8',
      alokasiTotal: '144 JP / Tahun',
      jpMinggu: '4 JP / Minggu',
      jpPertemuan: '2 JP @ 40 Menit',
      elemenKode: `1 | LIST | Menyimak-Berbicara (Listening-Speaking)
2 | READ | Membaca-Memirsa (Reading-Viewing)
3 | WRITE | Menulis-Mempresentasikan (Writing-Presenting)`,
      cpUmum: `Pada akhir Fase D, peserta didik menggunakan teks lisan, tulisan dan visual dalam bahasa Inggris untuk berinteraksi dan berkomunikasi dalam konteks yang lebih beragam serta dalam situasi formal dan informal. Peserta didik memahami informasi tersirat dan memproduksi teks narasi, deskripsi, dan prosedur dengan kosakata beragam.`,
      cpElemen: `Elemen Menyimak - Berbicara: Berinteraksi dan saling bertukar ide, pengalaman, dan pandangan dalam situasi percakapan formal dan informal.
Elemen Membaca - Memirsa: Membaca dan mengevaluasi ide utama serta informasi spesifik dalam teks narasi dan eksposisi.
Elemen Menulis - Mempresentasikan: Mengomunikasikan ide melalui paragraf terstruktur dan mempresentasikan teks imajinatif atau informatif.`,
      kodeMA: 'BING-D-READ-001',
      modelMA: 'Discovery Learning',
      modaMA: 'Tatap Muka',
      temaMA: 'Narrative Text: Indonesian Folklore and Moral Dilemma',
      produkMA: 'Buku Cerita Mini Bergambar Sederhana (Illustrated Mini Storybook)',
      sumberMA: 'Buku English for Nusantara Kelas VIII Kemdikbudristek, Video Animasi Folklore YouTube'
    },
    smp_mat: {
      mapel: 'Matematika',
      singkatan: 'MAT',
      fase: 'Fase D / Kelas 7',
      alokasiTotal: '180 JP / Tahun',
      jpMinggu: '5 JP / Minggu',
      jpPertemuan: '2 JP @ 40 Menit',
      elemenKode: `1 | BIL | Bilangan
2 | ALJ | Aljabar
3 | UKUR | Pengukuran
4 | GEO | Geometri
5 | DATA | Analisis Data dan Peluang`,
      cpUmum: `Pada akhir Fase D, peserta didik dapat menyelesaikan masalah kontekstual dengan mengoperasikan efisien bilangan bulat, pecahan, bilangan berpangkat dan akar; memodelkan situasi nyata dengan aljabar linier; menganalisis sifat bangun geometri dan teorema Pythagoras; serta menyajikan data statistik dan peluang.`,
      cpElemen: `Elemen Bilangan: Menerapkan operasi aritmetika pada bilangan bulat, pecahan, dan rasional dalam pemecahan masalah kontekstual.
Elemen Aljabar: Menggunakan variabel, suku, dan koefisien untuk menyelesaikan persamaan dan pertidaksamaan linier satu variabel.
Elemen Geometri: Memahami jaring-jaring bangun ruang, luas permukaan, volume, dan teorema Pythagoras.
Elemen Analisis Data: Mengumpulkan, menyajikan, dan menginterpretasikan data dalam diagram batang, garis, dan lingkaran.`,
      kodeMA: 'MAT-D-BIL-001',
      modelMA: 'Problem Based Learning (PBL)',
      modaMA: 'Tatap Muka',
      temaMA: 'Operasi Bilangan Bulat dan Pecahan dalam Perencanaan Anggaran Finansial Siswa',
      produkMA: 'Laporan Analisis Perhitungan Anggaran Keuangan Acara Sekolah',
      sumberMA: 'Buku Matematika SMP Kelas VII Kemdikbudristek, LKPD Eksplorasi Kontekstual'
    },
    smp_ipa: {
      mapel: 'Ilmu Pengetahuan Alam (IPA)',
      singkatan: 'IPA',
      fase: 'Fase D / Kelas 7',
      alokasiTotal: '180 JP / Tahun',
      jpMinggu: '5 JP / Minggu',
      jpPertemuan: '2 JP @ 40 Menit',
      elemenKode: `1 | SAINS | Pemahaman IPA
2 | PROSES | Keterampilan Proses`,
      cpUmum: `Pada akhir Fase D, peserta didik memahami proses identifikasi zat dan perubahannya, pengukuran presisi, organisasi kehidupan dari sel hingga organisme, interaksi ekosistem, gerak dan gaya, suhu dan kalor, serta struktur bumi dan tata surya.`,
      cpElemen: `Elemen Pemahaman IPA: Memahami konsep pengukuran besaran, wujud zat dan perubahannya, sel sebagai unit struktural, interaksi antar komponen ekosistem, suhu, kalor, serta gerak lurus dan gaya.
Elemen Keterampilan Proses: Merencanakan dan melaksanakan penyelidikan laboratorium ilmiah, mengumpulkan dan menganalisis data, serta menarik kesimpulan berbasis bukti empiris.`,
      kodeMA: 'IPA-D-SAINS-001',
      modelMA: 'Inkuiri Terbimbing',
      modaMA: 'Tatap Muka (Praktikum Laboratorium)',
      temaMA: 'Pengukuran Besaran Pokok dan Turunan Menggunakan Alat Ukur Presisi',
      produkMA: 'Laporan Ilmiah Praktikum Pengukuran Massa Jenis Zat Padat dan Cair',
      sumberMA: 'Buku IPA Kelas VII Kemdikbudristek, Jangka Sorong, Neraca Ohaus, Gelas Kimia'
    },
    smp_ips: {
      mapel: 'Ilmu Pengetahuan Sosial (IPS)',
      singkatan: 'IPS',
      fase: 'Fase D / Kelas 7',
      alokasiTotal: '144 JP / Tahun',
      jpMinggu: '4 JP / Minggu',
      jpPertemuan: '2 JP @ 40 Menit',
      elemenKode: `1 | SOSIAL | Pemahaman Konsep IPS
2 | PROSES | Keterampilan Proses`,
      cpUmum: `Pada akhir Fase D, peserta didik memahami konektivitas antarruang di nusantara, pengaruh kondisi geografis terhadap aktivitas ekonomi dan sosial budaya, interaksi antar pelaku ekonomi, serta dinamika perubahan sosial masyarakat Indonesia.`,
      cpElemen: `Elemen Pemahaman Konsep: Mengidentifikasi letak astronomis dan geografis Indonesia, keanekaragaman sumber daya alam maritim, permintaan dan penawaran pasar, serta interaksi sosial antar wilayah.
Elemen Keterampilan Proses: Observasi lapangan, wawancara pelaku usaha lokal, dan pembuatan peta tematik sebaran komoditas.`,
      kodeMA: 'IPS-D-SOSIAL-001',
      modelMA: 'Problem Based Learning (PBL)',
      modaMA: 'Tatap Muka',
      temaMA: 'Peluang Konektivitas Antarruang dan Potensi Ekonomi Maritim Indonesia',
      produkMA: 'Peta Tematik Sebaran Potensi Ekonomi Maritim Daerah dan Rekomendasi Solusi',
      sumberMA: 'Buku Siswa IPS Kelas VII Kemdikbudristek, Atlas Geografi Indonesia'
    },
    smp_pancasila: {
      mapel: 'Pendidikan Pancasila',
      singkatan: 'PANCA',
      fase: 'Fase D / Kelas 7',
      alokasiTotal: '108 JP / Tahun',
      jpMinggu: '3 JP / Minggu',
      jpPertemuan: '3 JP @ 40 Menit',
      elemenKode: `1 | PANCA | Pancasila
2 | UUD | Undang-Undang Dasar Negara Republik Indonesia Tahun 1945
3 | BHINNEKA | Bhinneka Tunggal Ika
4 | NKRI | Negara Kesatuan Republik Indonesia`,
      cpUmum: `Pada akhir Fase D, peserta didik menganalisis kronologi sejarah perumusan dan penetapan Pancasila sebagai dasar negara; menginternalisasi nilai-nilai luhur Pancasila; menaati norma sosial dan hukum; menghargai keberagaman budaya nusantara; serta menjaga keutuhan wilayah NKRI.`,
      cpElemen: `Elemen Pancasila: Menelaah komitmen kebangsaan para tokoh pendiri bangsa dalam perumusan Pancasila.
Elemen UUD 1945: Memahami kedudukan norma, hak dan kewajiban warga negara, dan tata hukum Indonesia.
Elemen Bhinneka Tunggal Ika: Menghargai keragaman budaya dan suku bangsa dalam bingkai integrasi nasional.
Elemen NKRI: Memahami batas wilayah kedaulatan NKRI dan mempraktikkan bela negara di lingkungan sekolah.`,
      kodeMA: 'PANCA-D-PANCA-001',
      modelMA: 'Project Based Learning (PjBL)',
      modaMA: 'Tatap Muka',
      temaMA: 'Sejarah Perumusan dan Penetapan Pancasila sebagai Dasar Negara',
      produkMA: 'Mading Interaktif Profil Tokoh BPUPKI & Komitmen Kebangsaan',
      sumberMA: 'Buku Pendidikan Pancasila Kelas VII Kemdikbudristek, Arsip Dokumenter Sejarah'
    },
    smp_pai: {
      mapel: 'Pendidikan Agama Islam dan Budi Pekerti',
      singkatan: 'PAI',
      fase: 'Fase D / Kelas 7',
      alokasiTotal: '108 JP / Tahun',
      jpMinggu: '3 JP / Minggu',
      jpPertemuan: '3 JP @ 40 Menit',
      elemenKode: `1 | QURAN | Al-Qur'an dan Hadis
2 | AKIDAH | Akidah
3 | AKHLAK | Akhlak
4 | FIKIH | Fikih
5 | SEJARAH | Sejarah Peradaban Islam`,
      cpUmum: `Pada akhir Fase D, peserta didik memahami ayat Al-Qur'an tentang ilmu pengetahuan dan toleransi; mengimani malaikat dan kitab-kitab Allah; membiasakan perilaku ikhlas, sabar, dan pemaaf; memahami thaharah dan shalat jamak qashar; serta meneladani masa keemasan daulah Islam.`,
      cpElemen: `Elemen Al-Qur'an & Hadis: Membaca Q.S. An-Nisa/4: 59 dan An-Nahl/16: 64 dengan kaidah tajwid yang benar.
Elemen Akidah: Meneladani sifat mulia malaikat dan mengokohkan keimanan pada kitab suci Al-Qur'an.
Elemen Akhlak: Menerapkan sikap tawadhu, amanah, dan menghormati sesama manusia.
Elemen Fikih: Mempraktikkan tata cara bersuci dari hadas besar/kecil dan shalat sunnah.
Elemen Sejarah: Menganalisis sejarah daulah Bani Umayyah di Damaskus dalam kemajuan peradaban.`,
      kodeMA: 'PAI-D-QURAN-001',
      modelMA: 'Discovery Learning',
      modaMA: 'Tatap Muka',
      temaMA: 'Kewajiban Menuntut Ilmu dan Mengamalkannya Sesuai Al-Qur\'an',
      produkMA: 'Resume Analisis Tajwid dan Peta Konsep Adab Menuntut Ilmu',
      sumberMA: 'Buku PAI SMP Kelas VII Kemdikbudristek, Mushaf Al-Qur\'an dan Terjemah'
    },
    smp_infor: {
      mapel: 'Informatika',
      singkatan: 'INFOR',
      fase: 'Fase D / Kelas 7',
      alokasiTotal: '72 JP / Tahun',
      jpMinggu: '2 JP / Minggu',
      jpPertemuan: '2 JP @ 40 Menit',
      elemenKode: `1 | BK | Berpikir Komputasional (BK)
2 | TIK | Teknologi Informasi dan Komunikasi (TIK)
3 | SK | Sistem Komputer (SK)
4 | JKI | Jaringan Komputer dan Internet (JKI)
5 | AD | Analisis Data (AD)
6 | AP | Algoritma dan Pemrograman (AP)
7 | DSI | Dampak Sosial Informatika (DSI)
8 | PLB | Praktik Lintas Bidang (PLB)`,
      cpUmum: `Pada akhir Fase D, peserta didik mampu menerapkan 4 pilar berpikir komputasional (dekomposisi, pola, abstraksi, algoritma) untuk menyelesaikan persoalan komputasi; memanfaatkan aplikasi perkantoran kolaboratif; memahami komponen komputer dan internet; serta membuat program visual blok interaktif.`,
      cpElemen: `Elemen BK: Menerapkan logika komputasional dalam kehidupan sehari-hari. Elemen TIK: Menggunakan aplikasi pengolah dokumen dan lembar sebar bersama. Elemen SK: Memahami fungsi CPU, memori, media penyimpanan. Elemen AP: Membuat game edukasi visual menggunakan Scratch.`,
      kodeMA: 'INFOR-D-BK-001',
      modelMA: 'Project Based Learning (PjBL)',
      modaMA: 'Tatap Muka (Laboratorium Komputer)',
      temaMA: 'Penerapan 4 Pilar Berpikir Komputasional dalam Pemecahan Masalah Logika',
      produkMA: 'Diagram Alir (Flowchart) dan Algoritma Solusi Masalah Nyata',
      sumberMA: 'Buku Informatika SMP Kelas VII Kemdikbudristek, Platform Scratch / Bebras'
    },
    smp_pjok: {
      mapel: 'PJOK',
      singkatan: 'PJOK',
      fase: 'Fase D / Kelas 7',
      alokasiTotal: '108 JP / Tahun',
      jpMinggu: '3 JP / Minggu',
      jpPertemuan: '3 JP @ 40 Menit',
      elemenKode: `1 | GERAK | Terampil Bergerak
2 | BELAJAR | Belajar Melalui Gerak
3 | AKTIF | Bergaya Hidup Aktif
4 | SEHAT | Memilih Hidup Sehat`,
      cpUmum: `Pada akhir Fase D, peserta didik menganalisis dan mempraktikkan keterampilan gerak spesifik bola besar, bola kecil, atletik, dan bela diri; menyusun program latihan kebugaran jasmani mandiri; serta memahami pola hidup sehat terhindar dari zat berbahaya.`,
      cpElemen: `Elemen Terampil Bergerak: Mempraktikkan keterampilan passing, servis, smash bola voli dan shooting basket.
Elemen Belajar Melalui Gerak: Mengembangkan kepemimpinan, kepatuhan strategi regu, dan sportivitas.
Elemen Bergaya Hidup Aktif: Membiasakan pemanasan, pendinginan, dan jadwal olahraga mandiri.
Elemen Memilih Hidup Sehat: Memahami bahaya narkoba, rokok, dan pola makan sehat bergizi seimbang.`,
      kodeMA: 'PJOK-D-GERAK-001',
      modelMA: 'Discovery Learning',
      modaMA: 'Tatap Muka (Praktik Lapangan)',
      temaMA: 'Keterampilan Gerak Spesifik Passing Bawah dan Atas Bola Voli',
      produkMA: 'Jurnal Evaluasi Diri Rekaman Gerak dan Ceklis Ketepatan Passing',
      sumberMA: 'Buku Guru PJOK SMP Kelas VII Kemdikbudristek, Bola Voli, Net'
    },
    smp_senirupa: {
      mapel: 'Seni Rupa',
      singkatan: 'SRUP',
      fase: 'Fase D / Kelas 7',
      alokasiTotal: '72 JP / Tahun',
      jpMinggu: '2 JP / Minggu',
      jpPertemuan: '2 JP @ 40 Menit',
      elemenKode: `1 | ALAMI | Mengalami (Experiencing)
2 | CIPTA | Menciptakan (Creating)
3 | REFLEKSI | Merefleksikan (Reflecting)
4 | BERPIKIR | Berpikir dan Bekerja Artistik
5 | DAMPAK | Berdampak (Impacting)`,
      cpUmum: `Pada akhir Fase D, peserta didik menuangkan pengamatan visual ke dalam karya seni rupa dua dimensi dan tiga dimensi dengan menerapkan prinsip komposisi, proporsi, perspektif, dan gelap terang secara kreatif.`,
      cpElemen: `Elemen Mengalami: Mengamati objek alam dan budaya visual. Elemen Menciptakan: Menggambar perspektif satu titik hilang. Elemen Merefleksikan: Menganalisis nilai estetis karya sendiri dan karya teman. Elemen Berdampak: Membuat karya visual poster kepedulian lingkungan.`,
      kodeMA: 'SRUP-D-CIPTA-001',
      modelMA: 'Project Based Learning (PjBL)',
      modaMA: 'Tatap Muka',
      temaMA: 'Menggambar Perspektif Satu Titik Hilang Koridor Sekolah',
      produkMA: 'Gambar Perspektif Arsitektural Sekolah Format A3 Arsiran Gradasi',
      sumberMA: 'Buku Seni Rupa SMP Kelas VII Kemdikbudristek, Kertas Gambar, Pensil B'
    },
    sma_indo: {
      mapel: 'Bahasa Indonesia',
      singkatan: 'BIND',
      fase: 'Fase E / Kelas 10',
      alokasiTotal: '144 JP / Tahun',
      jpMinggu: '4 JP / Minggu',
      jpPertemuan: '2 JP @ 45 Menit',
      elemenKode: `1 | SIMAK | Menyimak
2 | BACA | Membaca dan Memirsa
3 | BICARA | Berbicara dan Mempresentasikan
4 | TULIS | Menulis`,
      cpUmum: `Pada akhir Fase E, peserta didik memiliki kemampuan berbahasa untuk berkomunikasi dan bernalar secara kritis, objektif, dan persuasif. Peserta didik mampu mengevaluasi informasi dan menulis teks laporan hasil observasi (LHO), teks eksposisi, negosiasi, biografi, dan puisi dengan kaidah bahasa baku.`,
      cpElemen: `Elemen Menyimak: Menganalisis akurasi fakta dan data dalam teks laporan hasil observasi lisan.
Elemen Membaca dan Memirsa: Mengevaluasi bias informasi dan gagasan utama dalam teks nonfiksi dan sastra.
Elemen Berbicara dan Mempresentasikan: Menyajikan presentasi dan negosiasi secara runtut dan berbasis bukti empiris.
Elemen Menulis: Menulis laporan hasil observasi (LHO) objektif dan teks negosiasi formal yang memecahkan konflik.`,
      kodeMA: 'BIND-E-TULIS-001',
      modelMA: 'Problem Based Learning (PBL)',
      modaMA: 'Tatap Muka',
      temaMA: 'Penyusunan Teks Laporan Hasil Observasi (LHO) Keanekaragaman Hayati',
      produkMA: 'Laporan Ilmiah Populer Hasil Observasi Lingkungan Sekolah',
      sumberMA: 'Buku Cerdas Cergas Berbahasa Indonesia Kelas X Kemdikbudristek, Lingkungan Kampus Sekolah'
    },
    sma_inggris: {
      mapel: 'Bahasa Inggris',
      singkatan: 'BING',
      fase: 'Fase E / Kelas 10',
      alokasiTotal: '72 JP / Tahun',
      jpMinggu: '2 JP / Minggu',
      jpPertemuan: '2 JP @ 45 Menit',
      elemenKode: `1 | LIST | Menyimak-Berbicara (Listening-Speaking)
2 | READ | Membaca-Memirsa (Reading-Viewing)
3 | WRITE | Menulis-Mempresentasikan (Writing-Presenting)`,
      cpUmum: `Pada akhir Fase E, peserta didik menggunakan teks lisan, tulisan dan visual dalam bahasa Inggris untuk berkomunikasi sesuai dengan situasi, tujuan, dan pemirsa. Peserta didik mampu mempertahankan argumen dalam teks eksposisi, recount, report, dan teks otentik.`,
      cpElemen: `Elemen Menyimak - Berbicara: Berinteraksi mengenai isu sosial terkini dan menyampaikan presentasi formal.
Elemen Membaca - Memirsa: Menganalisis ide pokok, tujuan penulis, dan inferensi tersirat dari teks eksposisi analitis.
Elemen Menulis - Mempresentasikan: Menulis teks recount peristiwa bersejarah dan teks deskripsi komparatif dengan tata bahasa akurat.`,
      kodeMA: 'BING-E-READ-001',
      modelMA: 'Discovery Learning',
      modaMA: 'Tatap Muka',
      temaMA: 'Descriptive Text on Inspiring World Figures & Heroes',
      produkMA: 'Infografis Biografi Digital Tokoh Inspiratif Dunia',
      sumberMA: 'Buku Bahasa Inggris Work in Progress Kelas X Kemdikbudristek, Artikel Wawancara Online'
    },
    sma_mat: {
      mapel: 'Matematika',
      singkatan: 'MAT',
      fase: 'Fase E / Kelas 10',
      alokasiTotal: '144 JP / Tahun',
      jpMinggu: '4 JP / Minggu',
      jpPertemuan: '2 JP @ 45 Menit',
      elemenKode: `1 | BIL | Bilangan
2 | ALJ | Aljabar dan Fungsi
3 | GEO | Geometri
4 | DATA | Analisis Data dan Peluang`,
      cpUmum: `Pada akhir Fase E, peserta didik dapat menggeneralisasi sifat operasi eksponen dan logaritma; menerapkan barisan dan deret aritmetika-geometri; memodelkan masalah dengan SPLTV dan SPtLDV; memahami konsep trigonometri segitiga siku-siku; serta menganalisis data distribusi dan peluang majemuk.`,
      cpElemen: `Elemen Bilangan: Menggeneralisasi sifat eksponen dan logaritma pada fenomena pertumbuhan dan peluruhan.
Elemen Aljabar dan Fungsi: Menyelesaikan SPLTV dan memodelkan fenomena nyata dengan fungsi kuadrat.
Elemen Geometri: Menggunakan perbandingan trigonometri (sinus, kosinus, tangen) pada segitiga siku-siku dalam pengukuran jarak.
Elemen Analisis Data: Menginterpretasi diagram pencar bivariat, ukuran pemusatan data kelompok, dan peluang majemuk.`,
      kodeMA: 'MAT-E-BIL-001',
      modelMA: 'Problem Based Learning (PBL)',
      modaMA: 'Tatap Muka',
      temaMA: 'Eksponen dan Logaritma dalam Pemodelan Bunga Majemuk dan Pertumbuhan Mikroorganisme',
      produkMA: 'Kalkulator Simulasi Pertumbuhan Keuangan dan Laporan Analisis Grafik',
      sumberMA: 'Buku Matematika SMA Kelas X Kemdikbudristek, Software GeoGebra'
    },
    sma_fisika: {
      mapel: 'Fisika',
      singkatan: 'FIS',
      fase: 'Fase E / Kelas 10',
      alokasiTotal: '108 JP / Tahun',
      jpMinggu: '3 JP / Minggu',
      jpPertemuan: '3 JP @ 45 Menit',
      elemenKode: `1 | FISIKA | Pemahaman Fisika
2 | PROSES | Keterampilan Proses`,
      cpUmum: `Pada akhir Fase E, peserta didik memahami konsep pengukuran besaran, angka penting, metode ilmiah, energi terbarukan dan dampaknya terhadap lingkungan, serta pemanasan global dan solusi penanggulangannya.`,
      cpElemen: `Elemen Pemahaman Fisika: Memahami hakikat fisika, pengukuran dan ketidakpastian, energi terbarukan (solar, angin, biomassa), dan dampak pemanasan global.
Elemen Keterampilan Proses: Merancang eksperimen terukur, mengolah data matematis, dan mengomunikasikan purwarupa energi ramah lingkungan.`,
      kodeMA: 'FIS-E-FISIKA-001',
      modelMA: 'Project Based Learning (PjBL)',
      modaMA: 'Tatap Muka',
      temaMA: 'Pemanfaatan Energi Terbarukan: Rancang Bangun Purwarupa Sel Surya Sederhana',
      produkMA: 'Miniatur Charger Tenaga Surya (Solar Charger) Ramah Lingkungan',
      sumberMA: 'Buku Fisika SMA Kelas X Kemdikbudristek, Panel Surya Mini 5V, Multimeter'
    },
    sma_kimia: {
      mapel: 'Kimia',
      singkatan: 'KIM',
      fase: 'Fase E / Kelas 10',
      alokasiTotal: '108 JP / Tahun',
      jpMinggu: '3 JP / Minggu',
      jpPertemuan: '3 JP @ 45 Menit',
      elemenKode: `1 | KIMIA | Pemahaman Kimia
2 | PROSES | Keterampilan Proses`,
      cpUmum: `Pada akhir Fase E, peserta didik memahami struktur atom, tabel periodik unsur, hukum-hukum dasar kimia, konsep mol, reaksi kimia dalam kehidupan sehari-hari, dan penerapan 12 prinsip kimia hijau (green chemistry) untuk pelestarian lingkungan.`,
      cpElemen: `Elemen Pemahaman Kimia: Memahami lambang unsur, konfigurasi elektron, ikatan kimia, hukum Lavoisier, Proust, dan prinsip Green Chemistry.
Elemen Keterampilan Proses: Praktikum reaksi asam basa, penimbangan stoikiometri, dan observasi produk ramah lingkungan.`,
      kodeMA: 'KIM-E-KIMIA-001',
      modelMA: 'Inkuiri Terbimbing',
      modaMA: 'Tatap Muka',
      temaMA: 'Penerapan 12 Prinsip Kimia Hijau dalam Pengurangan Sampah Plastik Rumah Tangga',
      produkMA: 'Bioplastik dari Pati Singkong dan Laporan Uji Biodegradasi',
      sumberMA: 'Buku Kimia SMA Kelas X Kemdikbudristek, Pati Singkong, Gliserol'
    },
    sma_biologi: {
      mapel: 'Biologi',
      singkatan: 'BIO',
      fase: 'Fase E / Kelas 10',
      alokasiTotal: '108 JP / Tahun',
      jpMinggu: '3 JP / Minggu',
      jpPertemuan: '3 JP @ 45 Menit',
      elemenKode: `1 | BIOLOGI | Pemahaman Biologi
2 | PROSES | Keterampilan Proses`,
      cpUmum: `Pada akhir Fase E, peserta didik memahami keanekaragaman hayati tingkat gen, jenis, dan ekosistem serta peranannya; struktur virus dan peranannya dalam bioteknologi; daur biogeokimia ekosistem; serta upaya pelestarian lingkungan hidup.`,
      cpElemen: `Elemen Pemahaman Biologi: Mengidentifikasi keanekaragaman flora-fauna nusantara garis Wallace-Weber, replikasi virus, interaksi ekosistem, dan pencemaran lingkungan.
Elemen Keterampilan Proses: Pengamatan mikroskopis, survei keanekaragaman vegetasi sekolah, dan kampanye konservasi.`,
      kodeMA: 'BIO-E-BIOLOGI-001',
      modelMA: 'Discovery Learning',
      modaMA: 'Tatap Muka',
      temaMA: 'Keanekaragaman Hayati Indonesia dan Ancaman Kepunahan Satwa Endemik',
      produkMA: 'E-Booklet Katalog Satwa Endemik Terancam Punah dan Strategi Konservasi',
      sumberMA: 'Buku Biologi SMA Kelas X Kemdikbudristek, Database IUCN Red List'
    },
    sma_ekonomi: {
      mapel: 'Ekonomi',
      singkatan: 'EKO',
      fase: 'Fase E / Kelas 10',
      alokasiTotal: '108 JP / Tahun',
      jpMinggu: '3 JP / Minggu',
      jpPertemuan: '3 JP @ 45 Menit',
      elemenKode: `1 | EKONOMI | Pemahaman Konsep Ekonomi
2 | PROSES | Keterampilan Proses`,
      cpUmum: `Pada akhir Fase E, peserta didik memahami konsep kelangkaan, skala prioritas kebutuhan, biaya peluang, sistem ekonomi, pelaku ekonomi, hukum permintaan dan penawaran, serta literasi perbankan dan keuangan inklusif.`,
      cpElemen: `Elemen Pemahaman Konsep: Menganalisis motif dan prinsip ekonomi, kurva permintaan-penawaran, peran OJK dan BI, serta produk investasi legal.
Elemen Keterampilan Proses: Riset pasar harga kebutuhan pokok dan penyusunan rencana keuangan pribadi mandiri.`,
      kodeMA: 'EKO-E-EKONOMI-001',
      modelMA: 'Problem Based Learning (PBL)',
      modaMA: 'Tatap Muka',
      temaMA: 'Analisis Kelangkaan dan Skala Prioritas Pengelolaan Keuangan Remaja di Era Digital',
      produkMA: 'Buku Rencana Anggaran Keuangan Pribadi (Personal Financial Plan Sheet)',
      sumberMA: 'Buku Ekonomi SMA Kelas X Kemdikbudristek, Modul Literasi Keuangan OJK'
    },
    sma_sosiologi: {
      mapel: 'Sosiologi',
      singkatan: 'SOS',
      fase: 'Fase E / Kelas 10',
      alokasiTotal: '108 JP / Tahun',
      jpMinggu: '3 JP / Minggu',
      jpPertemuan: '3 JP @ 45 Menit',
      elemenKode: `1 | SOSIOLOGI | Pemahaman Konsep Sosiologi
2 | PROSES | Keterampilan Proses`,
      cpUmum: `Pada akhir Fase E, peserta didik memahami fungsi sosiologi sebagai ilmu pengkaji masyarakat, interaksi sosial, pembentukan identitas diri, tindakan sosial, dan gejala sosial di era digital.`,
      cpElemen: `Elemen Pemahaman: Mengidentifikasi karakteristik masyarakat, faktor pendorong interaksi sosial, serta diferensiasi sosial.
Elemen Proses: Observasi lapangan interaksi remaja, wawancara mendalam, dan penulisan artikel studi kasus sosial.`,
      kodeMA: 'SOS-E-SOSIOLOGI-001',
      modelMA: 'Inkuiri Terbimbing',
      modaMA: 'Tatap Muka',
      temaMA: 'Dinamika Interaksi Sosial Remaja dan Fenomena FOMO di Media Sosial',
      produkMA: 'Laporan Studi Kasus Mini Sosiologis Interaksi Virtual Siswa',
      sumberMA: 'Buku Sosiologi SMA Kelas X Kemdikbudristek, Jurnal Fenomena Sosial Remaja'
    },
    sma_geografi: {
      mapel: 'Geografi',
      singkatan: 'GEO',
      fase: 'Fase E / Kelas 10',
      alokasiTotal: '108 JP / Tahun',
      jpMinggu: '3 JP / Minggu',
      jpPertemuan: '3 JP @ 45 Menit',
      elemenKode: `1 | GEOGRAFI | Pemahaman Geografi
2 | PROSES | Keterampilan Proses`,
      cpUmum: `Pada akhir Fase E, peserta didik memahami konsep dasar ilmu geografi, peta, penginderaan jauh, Sistem Informasi Geografis (SIG), penelitian geografi, serta fenomena geosfer dan mitigasi bencana alam.`,
      cpElemen: `Elemen Pemahaman: Memahami 10 konsep esensial geografi, 4 prinsip geografi, pembacaan kontur peta, dan mitigasi bencana alam.
Elemen Proses: Pembuatan peta tematik dasar, analisis citra Google Earth, dan laporan kerawanan bencana.`,
      kodeMA: 'GEO-E-GEOGRAFI-001',
      modelMA: 'Problem Based Learning (PBL)',
      modaMA: 'Tatap Muka',
      temaMA: 'Mitigasi Bencana Alam Gempa Bumi dan Tanah Longsor Berbasis Analisis Keruangan',
      produkMA: 'Peta Tematik Jalur Evakuasi dan Titik Kumpul Aman Bencana Sekolah',
      sumberMA: 'Buku Geografi SMA Kelas X Kemdikbudristek, Peta Rupa Bumi Indonesia (BIG)'
    },
    sma_sejarah: {
      mapel: 'Sejarah',
      singkatan: 'SEJ',
      fase: 'Fase E / Kelas 10',
      alokasiTotal: '72 JP / Tahun',
      jpMinggu: '2 JP / Minggu',
      jpPertemuan: '2 JP @ 45 Menit',
      elemenKode: `1 | SEJARAH | Pemahaman Konsep Sejarah
2 | PROSES | Keterampilan Proses`,
      cpUmum: `Pada akhir Fase E, peserta didik memahami konsep dasar ilmu sejarah (manusia, ruang, waktu, diakronik, sinkronik), historiografi, jejak masa lampau, dan asal-usul nenek moyang bangsa Indonesia.`,
      cpElemen: `Elemen Pemahaman: Memahami kausalitas peristiwa masa lalu dan 4 tahapan metode sejarah (heuristik, verifikasi, interpretasi, historiografi).
Elemen Proses: Wawancara saksi sejarah lokal, kunjungan cagar budaya, dan penulisan esai sejarah keluarga.`,
      kodeMA: 'SEJ-E-SEJARAH-001',
      modelMA: 'Inkuiri Terbimbing',
      modaMA: 'Tatap Muka',
      temaMA: 'Penelusuran Jejak Sejarah Lokal dan Asal-Usul Penamaan Kampung / Desa',
      produkMA: 'Artikel Historiografi Mini Sejarah Lokal Berbasis Wawancara Tetua Adat',
      sumberMA: 'Buku Sejarah SMA Kelas X Kemdikbudristek, Arsip Sejarah Daerah'
    },
    sma_pancasila: {
      mapel: 'Pendidikan Pancasila',
      singkatan: 'PANCA',
      fase: 'Fase E / Kelas 10',
      alokasiTotal: '72 JP / Tahun',
      jpMinggu: '2 JP / Minggu',
      jpPertemuan: '2 JP @ 45 Menit',
      elemenKode: `1 | PANCA | Pancasila
2 | UUD | Undang-Undang Dasar Negara Republik Indonesia Tahun 1945
3 | BHINNEKA | Bhinneka Tunggal Ika
4 | NKRI | Negara Kesatuan Republik Indonesia`,
      cpUmum: `Pada akhir Fase E, peserta didik menganalisis gagasan para pendiri bangsa tentang dasar negara; kedudukan Pancasila sebagai ideologi terbuka; hierarki peraturan perundang-undangan; keragaman identitas; serta sengketa batas wilayah NKRI.`,
      cpElemen: `Elemen Pancasila: Menganalisis gagasan perumus Pancasila dan aktualisasi nilai Pancasila menangkal intoleransi.
Elemen UUD 1945: Menganalisis pasal-pasal hak asasi manusia dan mekanisme uji materi MK.
Elemen Bhinneka Tunggal Ika: Mengikis stereotip dan prasangka budaya melalui dialog lintas identitas.
Elemen NKRI: Menganalisis kedaulatan laut kepulauan Indonesia (UNCLOS 1982) dan diplomasi perbatasan.`,
      kodeMA: 'PANCA-E-PANCA-001',
      modelMA: 'Problem Based Learning (PBL)',
      modaMA: 'Tatap Muka',
      temaMA: 'Aktualisasi Nilai-Nilai Pancasila dalam Menangkal Radikalisme dan Intoleransi Pelajar',
      produkMA: 'Podcast Diskusi Kritis atau Video Kampanye Moderasi Beragama',
      sumberMA: 'Buku Pendidikan Pancasila SMA Kelas X Kemdikbudristek, Media Aktual'
    },
    sma_pai: {
      mapel: 'Pendidikan Agama Islam dan Budi Pekerti',
      singkatan: 'PAI',
      fase: 'Fase E / Kelas 10',
      alokasiTotal: '108 JP / Tahun',
      jpMinggu: '3 JP / Minggu',
      jpPertemuan: '3 JP @ 45 Menit',
      elemenKode: `1 | QURAN | Al-Qur'an dan Hadis
2 | AKIDAH | Akidah
3 | AKHLAK | Akhlak
4 | FIKIH | Fikih
5 | SEJARAH | Sejarah Peradaban Islam`,
      cpUmum: `Pada akhir Fase E, peserta didik memahami ayat Al-Qur'an tentang kontrol diri (mujahadah an-nafs), husnuzan, ukhuwah; mengimani 77 cabang iman (syu'abul iman); menghindarkan akhlak tercela; memahami transaksi muamalah kontemporer; serta sejarah masuknya Islam di nusantara.`,
      cpElemen: `Elemen Al-Qur'an & Hadis: Menganalisis Q.S. Al-Hujurat/49: 10 dan 12 tentang ukhuwah dan husnuzan dengan tartil.
Elemen Akidah: Memahami cabang iman (syu'abul iman) dan implementasinya menjaga integritas moral.
Elemen Akhlak: Menghindari perilaku foya-foya, riya, sum'ah, takabur, dan hasad.
Elemen Fikih: Memahami transaksi bank syariah, asuransi syariah, dan koperasi syariah.
Elemen Sejarah: Menganalisis jalur masuknya Islam ke nusantara melalui dakwah damai Wali Songo.`,
      kodeMA: 'PAI-E-QURAN-001',
      modelMA: 'Discovery Learning',
      modaMA: 'Tatap Muka',
      temaMA: 'Kajian Ayat Kontrol Diri (Mujahadah An-Nafs) dan Persaudaraan Sejati di Era Digital',
      produkMA: 'Karya Kaligrafi Digital Makna Ayat dan Lembar Komitmen Perilaku Terpuji',
      sumberMA: 'Buku PAI dan Budi Pekerti SMA Kelas X Kemdikbudristek, Mushaf Tajwid'
    },
    sma_infor: {
      mapel: 'Informatika',
      singkatan: 'INFOR',
      fase: 'Fase E / Kelas 10',
      alokasiTotal: '72 JP / Tahun',
      jpMinggu: '2 JP / Minggu',
      jpPertemuan: '2 JP @ 45 Menit',
      elemenKode: `1 | BK | Berpikir Komputasional (BK)
2 | TIK | Teknologi Informasi dan Komunikasi (TIK)
3 | SK | Sistem Komputer (SK)
4 | JKI | Jaringan Komputer dan Internet (JKI)
5 | AD | Analisis Data (AD)
6 | AP | Algoritma dan Pemrograman (AP)
7 | DSI | Dampak Sosial Informatika (DSI)
8 | PLB | Praktik Lintas Bidang (PLB)`,
      cpUmum: `Pada akhir Fase E, peserta didik memahami strategi algoritmik standar (searching, sorting); memanfaatkan integrasi aplikasi perkantoran tingkat lanjut; memahami interaksi hardware dan OS; keamanan data jaringan; visualisasi data; serta membangun program prosedural menggunakan bahasa Python.`,
      cpElemen: `Elemen BK: Menerapkan algoritma bubble sort, selection sort, binary search pada persoalan nyata.
Elemen TIK: Integrasi aplikasi office (Mail Merge, Link Chart) dan cloud storage.
Elemen AD: Pengumpulan data, data cleaning, dan visualisasi data menggunakan spreadsheet/Python.
Elemen AP: Membuat kode program Python untuk memecahkan persoalan matematika dan logika.`,
      kodeMA: 'INFOR-E-AP-001',
      modelMA: 'Project Based Learning (PjBL)',
      modaMA: 'Tatap Muka (Laboratorium Komputer)',
      temaMA: 'Dasar Pemrograman Bahasa Python: Struktur Kontrol Percabangan dan Perulangan',
      produkMA: 'Aplikasi Skrip Python Sederhana Sistem Rekap Nilai Siswa',
      sumberMA: 'Buku Informatika SMA Kelas X Kemdikbudristek, Platform Google Colab'
    },
    sma_pjok: {
      mapel: 'PJOK',
      singkatan: 'PJOK',
      fase: 'Fase E / Kelas 10',
      alokasiTotal: '108 JP / Tahun',
      jpMinggu: '3 JP / Minggu',
      jpPertemuan: '3 JP @ 45 Menit',
      elemenKode: `1 | GERAK | Terampil Bergerak
2 | BELAJAR | Belajar Melalui Gerak
3 | AKTIF | Bergaya Hidup Aktif
4 | SEHAT | Memilih Hidup Sehat`,
      cpUmum: `Pada akhir Fase E, peserta didik mengevaluasi dan mempraktikkan keterampilan gerak kompleks olahraga invasi, net, dan beladiri; merancang program peningkatan derajat kebugaran jasmani mandiri; serta menganalisis pencegahan penyakit menular dan pergaulan bebas.`,
      cpElemen: `Elemen Terampil Bergerak: Mengevaluasi taktik penyerangan dan pertahanan pada permainan bola basket dan bulu tangkis.
Elemen Belajar Melalui Gerak: Menginternalisasi nilai fair play, kepemimpinan tim, dan sportivitas.
Elemen Bergaya Hidup Aktif: Menyusun agenda latihan kardio dan kekuatan otot 3 kali seminggu.
Elemen Memilih Hidup Sehat: Menganalisis bahaya seks bebas, narkoba, dan pentingnya kesehatan mental remaja.`,
      kodeMA: 'PJOK-E-GERAK-001',
      modelMA: 'Discovery Learning',
      modaMA: 'Tatap Muka (Praktik Lapangan)',
      temaMA: 'Evaluasi Taktik Penyerangan dan Pola Bertahan Formasi Permainan Bola Basket',
      produkMA: 'Diagram Taktik Permainan Regu dan Rekaman Analisis Pertandingan Mandiri',
      sumberMA: 'Buku Guru PJOK SMA Kelas X Kemdikbudristek, Bola Basket, Papan Taktik'
    },
    tk_paud: {
      mapel: 'Pendidikan Anak Usia Dini (PAUD / TK)',
      singkatan: 'PAUD',
      fase: 'Fase Fondasi (Usia 4 - 6 Tahun)',
      alokasiTotal: '900 Menit / Minggu',
      jpMinggu: '30 Jam Pelajaran / Minggu',
      jpPertemuan: '150 Menit / Hari',
      elemenKode: `1 | AGAMA | Nilai Agama dan Budi Pekerti
2 | DIRI | Jati Diri
3 | STEAM | Dasar-Dasar Literasi, Matematika, Sains, Teknologi, Rekayasa, dan Seni`,
      cpUmum: `Pada akhir Fase Fondasi, anak menunjukkan kegemaran belajar melalui bermain; mengenal konsep Tuhan Yang Maha Esa dan menghargai ciptaan-Nya; mengenali emosi diri dan kemandirian motorik; serta memiliki rasa ingin tahu, dasar literasi-keaksaraan awal, pemahaman numerasi dasar, dan daya cipta seni yang menggembirakan.`,
      cpElemen: `Elemen Nilai Agama dan Budi Pekerti: Anak percaya kepada Tuhan YME, mempraktikkan doa harian, menjaga kebersihan diri dan alam, serta menyayangi sesama teman.
Elemen Jati Diri: Mengenali karakteristik diri dan emosi, koordinasi gerak motorik kasar dan halus, mandiri memakai sepatu/pakaian sendiri, dan bangga sebagai anak Indonesia.
Elemen Dasar-Dasar Literasi & STEAM: Menyimak cerita dongeng, mengenali fonik huruf dan angka, mengamati fenomena sains alam sekitar, serta mengekspresikan imajinasi melalui lukisan atau bahan loose parts.`,
      kodeMA: 'PAUD-F-STEAM-001',
      modelMA: 'Discovery Learning',
      modaMA: 'Tatap Muka (Pendekatan Bermain)',
      temaMA: 'Aku Sayang Bumi: Eksplorasi Tanaman Hias dan Warna-Warni Bunga',
      produkMA: 'Karya Kolase Bunga Segar dan Hasil Penanaman Bibit dalam Pot Daur Ulang',
      sumberMA: 'Panduan Kurikulum Merdeka PAUD Kemdikbudristek, Tanaman Sekitar Taman Sekolah, Bahan Loose Parts'
    }
  ,

  // ==============================================================
  //   TAMBAHAN LENGKAP: SMA / MA - PEMINATAN MIPA & SAINS
  // ==============================================================
  sma_mat_tl: {
    mapel: 'Matematika Tingkat Lanjut',
    singkatan: 'MAT-TL',
    fase: 'Fase F / Kelas 11 & 12',
    alokasiTotal: '180 JP / Tahun',
    jpMinggu: '5 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | ALJ | Aljabar dan Fungsi (Polinomial & Matriks)
2 | GEO | Geometri (Vektor & Transformasi Geometri)
3 | TRG | Trigonometri Lanjut
4 | KAL | Kalkulus (Limit, Turunan, Integral Lanjut)`,
    cpUmum: `Pada akhir Fase F, peserta didik dapat melakukan operasi aljabar pada polinomial, menerapkan operasi matriks dalam memodelkan sistem persamaan linier, menggunakan konsep vektor dan trigonometri lanjut untuk menyelesaikan masalah nyata, serta menerapkan konsep kalkulus diferensial dan integral dalam konteks sains dan rekayasa.`,
    cpElemen: `Elemen Aljabar dan Fungsi: Menyelesaikan operasi aritmatika polinomial, teorema sisa, faktorisasi, dan operasi matriks serta invers matriks ordo 2x2 dan 3x3.
Elemen Geometri: Memahami operasi vektor pada bidang dan ruang, serta menganalisis transformasi geometri (translasi, refleksi, rotasi, dilatasi) dengan matriks.
Elemen Trigonometri: Membuktikan dan menerapkan rumus jumlah dan selisih sudut trigonometri, sudut ganda, dan persamaan trigonometri.
Elemen Kalkulus: Memahami konsep limit fungsi aljabar dan trigonometri, turunan fungsi aljabar/trigonometri, aturan rantai, aplikasi turunan, serta integral tak tentu dan tentu.`,
    kodeMA: 'MATTL-F-ALJ-001',
    modelMA: 'Problem Based Learning (PBL)',
    modaMA: 'Tatap Muka',
    temaMA: 'Operasi Polinomial dan Teorema Sisa dalam Pemodelan Produksi Industri',
    produkMA: 'Portofolio Analisis Fungsi Polinomial Optimasi Biaya Produksi',
    sumberMA: 'Buku Siswa Matematika Tingkat Lanjut SMA Kelas XI Kemdikbudristek, Software GeoGebra'
  },
  sma_ipa: {
    mapel: 'Ilmu Pengetahuan Alam (IPA Terpadu SMA)',
    singkatan: 'IPA-SMA',
    fase: 'Fase E / Kelas 10',
    alokasiTotal: '216 JP / Tahun',
    jpMinggu: '6 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | PEM | Pemahaman Sains Terpadu (Fisika, Kimia, Biologi)
2 | KRP | Keterampilan Proses Sains`,
    cpUmum: `Pada akhir Fase E, peserta didik memiliki kemampuan mengamati, menyelidiki, dan menjelaskan fenomena alam semesta secara holistik melalui keterpaduan konsep fisika (energi dan pemanasan global), kimia (struktur atom dan reaksi kimia hijau), dan biologi (keanekaragaman hayati dan bioteknologi ramah lingkungan).`,
    cpElemen: `Elemen Pemahaman IPA: Menganalisis konsep pengukuran besaran, energi terbarukan, struktur materi dan hukum dasar kimia, kimia hijau, ekosistem, serta perubahan iklim global.
Elemen Keterampilan Proses: Mengamati fenomena, merumuskan hipotesis, merancang dan melaksanakan penyelidikan ilmiah, mengolah data kuantitatif, serta mengomunikasikan laporan hasil eksperimen.`,
    kodeMA: 'IPASMA-E-PEM-001',
    modelMA: 'Inkuiri Terbimbing',
    modaMA: 'Tatap Muka (Praktikum Laboratorium)',
    temaMA: 'Pemanfaatan Energi Terbarukan Ramah Lingkungan untuk Mengurangi Jejak Karbon',
    produkMA: 'Prototipe Miniatur Pembangkit Listrik Tenaga Surya / Angin dengan Laporan Ilmiah',
    sumberMA: 'Buku Siswa IPA Terpadu Kelas X Kemdikbudristek, Kit Praktikum Laboratorium Sains'
  },

  // ==============================================================
  //   TAMBAHAN LENGKAP: SMA / MA - PEMINATAN IPS & HUMANIORA
  // ==============================================================
  sma_ips: {
    mapel: 'Ilmu Pengetahuan Sosial (IPS Terpadu SMA)',
    singkatan: 'IPS-SMA',
    fase: 'Fase E / Kelas 10',
    alokasiTotal: '288 JP / Tahun',
    jpMinggu: '8 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | PEM | Pemahaman Konsep IPS Terpadu (Sosiologi, Ekonomi, Geografi, Sejarah)
2 | KRP | Keterampilan Proses dan Inkuiri Sosial`,
    cpUmum: `Pada akhir Fase E, peserta didik mampu mengintegrasikan konsep sosiologi (interaksi sosial), ekonomi (kelangkaan dan literasi finansial), geografi (kondisi kewilayahan kebencanaan), dan sejarah (peristiwa sejarah Indonesia) dalam membedah fenomena dinamika sosial kemasyarakatan di sekitarnya.`,
    cpElemen: `Elemen Pemahaman IPS: Menjelaskan fenomena diferensiasi sosial, motif dan prinsip ekonomi modern, potensi sumber daya alam dan mitigasi bencana spasial, serta dinamika sejarah peradaban Indonesia.
Elemen Keterampilan Proses: Melakukan wawancara sosial, pengumpulan data sekunder lapangan, analisis fakta sosial, dan advokasi solusi masalah sosial kemasyarakatan.`,
    kodeMA: 'IPSSMA-E-PEM-001',
    modelMA: 'Project Based Learning (PjBL)',
    modaMA: 'Tatap Muka',
    temaMA: 'Analisis Masalah Pengangguran dan Solusi Kewirausahaan Kreatif Generasi Muda',
    produkMA: 'Laporan Studi Kasus Sosial Kemasyarakatan dan Infografis Solusi Kebijakan Publik',
    sumberMA: 'Buku Siswa IPS Kelas X Kemdikbudristek, Data BPS Daerah, Media Berita Kredibel'
  },
  sma_antropologi: {
    mapel: 'Antropologi',
    singkatan: 'ANTRO',
    fase: 'Fase F / Kelas 11 & 12',
    alokasiTotal: '180 JP / Tahun',
    jpMinggu: '5 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | GAGAS | Pengantar Antropologi dan Keragaman Manusia
2 | SOS | Kebudayaan dan Dinamika Masyarakat
3 | KAJI | Penelitian Etnografi dan Kearifan Lokal`,
    cpUmum: `Pada akhir Fase F, peserta didik memiliki pemahaman mendalam tentang keanekaragaman budaya, sistem religi, kekerabatan, dan bahasa suku bangsa di Indonesia serta dunia. Mampu menerapkan metode etnografi sederhana untuk melestarikan kearifan lokal dan membangun sikap toleransi multikultural.`,
    cpElemen: `Elemen Pengantar Antropologi: Memahami konsep dasar antropologi raga dan sosial-budaya serta sejarah evolusi manusia.
Elemen Kebudayaan & Masyarakat: Mengkaji wujud kebudayaan (gagasan, aktivitas, artefak), sistem nilai, dan dinamika perubahan sosial budaya akibat globalisasi.
Elemen Penelitian Etnografi: Merancang panduan wawancara etnografi, observasi partisipatif komunitas adat, serta menyusun narasi etnografis pelestarian kearifan lokal.`,
    kodeMA: 'ANTRO-F-KAJI-001',
    modelMA: 'Experiential Learning',
    modaMA: 'Tatap Muka (Riset Komunitas)',
    temaMA: 'Revitalisasi Tradisi Kearifan Lokal Upacara Adat Nusantara di Era Digital',
    produkMA: 'Buku Saku Mini Etnografi Dokumentasi Budaya Lokal dan Video Dokumenter',
    sumberMA: 'Buku Siswa Antropologi SMA Kelas XI Kemdikbudristek, Tokoh Budayawan / Tetua Adat'
  },
  sma_sejarah_tl: {
    mapel: 'Sejarah Tingkat Lanjut',
    singkatan: 'SEJ-TL',
    fase: 'Fase F / Kelas 11 & 12',
    alokasiTotal: '180 JP / Tahun',
    jpMinggu: '5 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | KONSEP | Pemahaman Konsep Sejarah Kritis & Tematis
2 | PROSES | Keterampilan Proses Sejarah & Heuristik Ilmiah`,
    cpUmum: `Pada akhir Fase F, peserta didik memiliki keterampilan berpikir historis tingkat tinggi (historical thinking skills), mampu menganalisis keterkaitan kausalitas peristiwa sejarah dunia dan nasional secara tematis serta menerapkan metodologi penelitian sejarah ilmiah (heuristik, verifikasi, interpretasi, historiografi).`,
    cpElemen: `Elemen Pemahaman Konsep Sejarah: Menganalisis sejarah revolusi besar dunia, perang dunia, perang dingin, sejarah maritim, dan geopolitik global kontemporer.
Elemen Keterampilan Proses Sejarah: Menelusuri sumber primer arsip sejarah, menguji keaslian data (kritik sumber), serta menuliskan rekonstruksi peristiwa sejarah secara obyektif.`,
    kodeMA: 'SEJTL-F-PROSES-001',
    modelMA: 'Inkuiri Terbimbing',
    modaMA: 'Tatap Muka',
    temaMA: 'Dampak Perang Dingin terhadap Pergolakan Geopolitik Kawasan Asia Tenggara',
    produkMA: 'Esai Historiografi Kritis Berbasis Arsip Digital Perpustakaan Nasional',
    sumberMA: 'Buku Siswa Sejarah Tingkat Lanjut Kelas XI Kemdikbudristek, Arsip ANRI, Jurnal Sejarah'
  },

  // ==============================================================
  //   TAMBAHAN LENGKAP: SMA / MA - PEMINATAN BAHASA & BUDAYA
  // ==============================================================
  sma_indo_tl: {
    mapel: 'Bahasa Indonesia Tingkat Lanjut',
    singkatan: 'BIND-TL',
    fase: 'Fase F / Kelas 11 & 12',
    alokasiTotal: '180 JP / Tahun',
    jpMinggu: '5 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | SIMAK | Menyimak Teks Sastra dan Non-Sastra Lanjut
2 | BACA | Membaca dan Memirsa Kritis Multimodal
3 | BICARA | Berbicara dan Mempresentasikan Akademik
4 | TULIS | Menulis Karya Ilmiah dan Kreatif Sastra`,
    cpUmum: `Pada akhir Fase F, peserta didik mampu mengapresiasi dan mengkritisi beragam teks sastra (prosa, puisi, drama) dan non-sastra (esai, kritik sastra, artikel ilmiah) secara mendalam, serta mahir memproduksi karya sastra dan karya tulis ilmiah yang berbobot estetis dan akademis.`,
    cpElemen: `Elemen Menyimak: Menganalisis diksi, gaya bahasa, struktur naratif, dan pesan implisit dalam pementasan drama atau pembacaan karya sastra.
Elemen Membaca dan Memirsa: Mengevaluasi akurasi, objektivitas, perspektif ideologi, dan nilai estetis teks argumentatif dan kritik sastra.
Elemen Berbicara dan Mempresentasikan: Berpartisipasi aktif dalam debat ilmiah, seminar sastra, dan monolog teaterikal secara artikulatif.
Elemen Menulis: Menulis naskah drama panggung, antologi puisi tematis, atau esai kritik sastra berstandar jurnal ilmiah.`,
    kodeMA: 'BINDTL-F-TULIS-001',
    modelMA: 'Project Based Learning (PjBL)',
    modaMA: 'Tatap Muka',
    temaMA: 'Penulisan Naskah Drama Realis Bertema Kritik Sosial Kontemporer',
    produkMA: 'Naskah Drama Teater Orisinal dan Buku Kumpulan Cerpen Digital',
    sumberMA: 'Buku Siswa Bahasa Indonesia Tingkat Lanjut Kelas XI Kemdikbudristek, Antologi Cerpen Sastra'
  },
  sma_inggris_tl: {
    mapel: 'Bahasa Inggris Tingkat Lanjut',
    singkatan: 'BING-TL',
    fase: 'Fase F / Kelas 11 & 12',
    alokasiTotal: '180 JP / Tahun',
    jpMinggu: '5 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | LIS-SPK | Listening and Speaking Advanced
2 | RD-VW | Reading and Viewing Analytical Text
3 | WR-PR | Writing and Presenting Academic Papers`,
    cpUmum: `By the end of Phase F, students are able to critically comprehend, analyze, synthesize, and produce complex spoken, written, and multimodal texts for academic and professional purposes, including argumentative essays, analytical expositions, and academic presentations with fluent pragmatic competence.`,
    cpElemen: `Listening and Speaking: Comprehend complex spoken academic lectures, participate fluently in formal debates, and defend arguments logically.
Reading and Viewing: Critically analyze nuances, implicit stances, figurative language, and rhetorical strategies in diverse global academic literature.
Writing and Presenting: Produce well-structured analytical exposition essays, research abstracts, and multi-perspective discussion texts with advanced lexical resources.`,
    kodeMA: 'BINGTL-F-WR-001',
    modelMA: 'Problem Based Learning (PBL)',
    modaMA: 'Tatap Muka',
    temaMA: 'Analytical Exposition on Global Climate Action and Renewable Energy Transition',
    produkMA: 'Academic Research Essay and Podcast Discussion Episode in English',
    sumberMA: 'English for Advanced Students Class XI Kemdikbudristek, TED Talks, Academic Journals'
  },
  sma_bahasa_arab: {
    mapel: 'Bahasa Arab',
    singkatan: 'BARAB',
    fase: 'Fase F / Kelas 11 & 12',
    alokasiTotal: '180 JP / Tahun',
    jpMinggu: '5 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | ISTIMA | Istima' (Menyimak Tuturan Arab)
2 | QIRA | Qira'ah (Membaca Teks Arab Bertasykil & Gundul)
3 | KALAM | Kalam (Berbicara / Muhadatsah Aktif)
4 | KITAB | Kitabah (Menulis Insya' & Kaidah Nahwu-Shorof)`,
    cpUmum: `Pada akhir Fase F, peserta didik memiliki kemampuan berkomunikasi dalam Bahasa Arab secara reseptif dan produktif, memahami teks wacana kontemporer dan keagamaan, serta mengaplikasikan kaidah tata bahasa (Nahwu dan Shorof) dalam percakapan dan penulisan paragraf formal.`,
    cpElemen: `Elemen Istima': Memahami intisari dialog lisan penutur asli dalam ragam fusha tentang tema sosial, pendidikan, dan sains.
Elemen Qira'ah: Membaca fasih dan menerjemahkan wacana Bahasa Arab serta menganalisis kedudukan i'rab kata dalam kalimat.
Elemen Kalam: Melakukan muhadatsah spontan, berpidato (khitabah) singkat, dan mempresentasikan ide dalam Bahasa Arab baku.
Elemen Kitabah: Menulis insya' muwajjah (karangan terpimpin) dan kartu pos berbahasa Arab sesuai kaidah imla' dan nahwu.`,
    kodeMA: 'BARAB-F-KALAM-001',
    modelMA: 'Discovery Learning',
    modaMA: 'Tatap Muka',
    temaMA: 'Muhadatsah Yaumiyyah fi al-Bi\'ah al-Madrasiyyah wa al-Ijtima\'iyyah',
    produkMA: 'Video Dialog Bahasa Arab Situasional dan Kamus Tematis Saku',
    sumberMA: 'Buku Siswa Bahasa Arab Kelas XI Kemendikbudristek / Kemenag, Kamus Al-Munawwir'
  },
  sma_bahasa_jepang: {
    mapel: 'Bahasa Jepang',
    singkatan: 'BJEP',
    fase: 'Fase F / Kelas 11 & 12',
    alokasiTotal: '180 JP / Tahun',
    jpMinggu: '5 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | SIMAK | Menyimak (Kiku)
2 | BACA | Membaca (Yomu - Hiragana, Katakana, Kanji Dasar)
3 | BICARA | Berbicara (Hanasu)
4 | TULIS | Menulis (Kaku)`,
    cpUmum: `Pada akhir Fase F, peserta didik mampu berkomunikasi lisan dan tulis dalam Bahasa Jepang sederhana setara level JLPT N5/N4, menguasai huruf Hiragana, Katakana, dan sekitar 100 Kanji dasar, serta memahami nilai-nilai budaya dan etika kesopanan masyarakat Jepang (Aisatsu).`,
    cpElemen: `Elemen Menyimak: Menangkap informasi esensial dari dialog singkat penutur Jepang tentang aktivitas harian dan hobi.
Elemen Membaca: Membaca teks narasi pendek bertuliskan huruf Kana dan Kanji dasar dengan pelafalan dan pemahaman tepat.
Elemen Berbicara: Berdialog memperkenalkan diri, menyatakan jadwal kegiatan, serta mengemukakan pendapat sederhana (aisatsu, hyougen).
Elemen Menulis: Menulis sakubun (karangan pendek) tentang pengalaman pribadi menggunakan pola kalimat terstruktur.`,
    kodeMA: 'BJEP-F-TULIS-001',
    modelMA: 'Discovery Learning',
    modaMA: 'Tatap Muka',
    temaMA: 'Watashi no Ichinichi (Keseharian Siswa dan Pengenalan Budaya Tradisional Jepang)',
    produkMA: 'Sakubun Bergambar Mini-Zine dan Rekaman Percakapan Bahasa Jepang',
    sumberMA: 'Buku Nihongo Kira-Kira SMA Kelas XI Kemdikbudristek, The Japan Foundation'
  },
  sma_bahasa_mandarin: {
    mapel: 'Bahasa Mandarin',
    singkatan: 'BMAND',
    fase: 'Fase F / Kelas 11 & 12',
    alokasiTotal: '180 JP / Tahun',
    jpMinggu: '5 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | SIMAK | Ting (Menyimak Nada & Pinyin)
2 | BACA | Du (Membaca Aksara Hanzi & Pinyin)
3 | BICARA | Shuo (Berbicara Lancar & Nada Tepat)
4 | TULIS | Xie (Menulis Goresan Hanzi & Kalimat)`,
    cpUmum: `Pada akhir Fase F, peserta didik memiliki kompetensi dasar Bahasa Mandarin lisan dan tulis setara HSK Level 1/2, menguasai sistem ejaan Hanyu Pinyin 4 nada, goresan dasar aksara Hanzi, serta mampu berinteraksi dalam konteks pergaulan sosial global.`,
    cpElemen: `Elemen Menyimak: Membedakan 4 nada intonasi Pinyin dan menyerap pesan utama dari rekaman audio dialog Mandarin.
Elemen Membaca: Mengenali sekitar 150-300 karakter Hanzi umum dan membaca teks dialog situasional dengan lancar.
Elemen Berbicara: Melakukan percakapan transaksi jual beli, arah jalan, dan perkenalan keluarga dengan lafal standar.
Elemen Menulis: Menulis aksara Hanzi sesuai urutan goresan (Bishun) yang benar untuk menyusun kalimat sederhana.`,
    kodeMA: 'BMAND-F-XIE-001',
    modelMA: 'Discovery Learning',
    modaMA: 'Tatap Muka',
    temaMA: 'Perkenalan Budaya Tradisional Tiongkok dan Percakapan Sehari-hari',
    produkMA: 'Buku Latihan Kaligrafi Hanzi dan Video Vlog Percakapan Bahasa Mandarin',
    sumberMA: 'Buku Siswa Bahasa Mandarin SMA Kelas XI Kemdikbudristek, Bahan Ajar HSK Standard Course'
  },
  sma_bahasa_jerman: {
    mapel: 'Bahasa Jerman / Asing Lainnya',
    singkatan: 'BJER',
    fase: 'Fase F / Kelas 11 & 12',
    alokasiTotal: '180 JP / Tahun',
    jpMinggu: '5 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | HOR | Horen (Menyimak)
2 | LES | Lesen (Membaca)
3 | SPR | Sprechen (Berbicara)
4 | SCH | Schreiben (Menulis)`,
    cpUmum: `Pada akhir Fase F, peserta didik menguasai kompetensi dasar Bahasa Jerman setara level A1 Goethe-Zertifikat, mampu berkomunikasi dalam situasi sederhana sehari-hari, serta memahami konteks budaya masyarakat di negara-negara berbahasa Jerman (DACHL).`,
    cpElemen: `Elemen Horen: Menyimak dan mengidentifikasi informasi spesifik dari percakapan santai penutur Jerman.
Elemen Lesen: Menemukan data penting dari teks brosur, menu restoran, jadwal kereta api, dan email pribadi.
Elemen Sprechen: Mengajukan dan menjawab pertanyaan tentang identitas, tempat tinggal, keluarga, dan hobi secara wajar.
Elemen Schreiben: Menulis pesan singkat, kartu ucapan, dan formulir pendaftaran diri dalam Bahasa Jerman baku.`,
    kodeMA: 'BJER-F-SPR-001',
    modelMA: 'Discovery Learning',
    modaMA: 'Tatap Muka',
    temaMA: 'Alltag und Schule in Deutschland (Kehidupan Sekolah dan Komunikasi Dasar Bahasa Jerman)',
    produkMA: 'Kartu Pos Bahasa Jerman dan Brosur Wisata Kebudayaan Jerman (DACHL)',
    sumberMA: 'Buku Siswa Studio d / Netzwerk A1, Materi Goethe-Institut'
  },

  // ==============================================================
  //   TAMBAHAN LENGKAP: SMA / MA - SENI, PKWU, AGAMA, BK
  // ==============================================================
  sma_senirupa: {
    mapel: 'Seni Rupa',
    singkatan: 'SRUP',
    fase: 'Fase E & F (Kelas 10 - 12)',
    alokasiTotal: '72 JP / Tahun',
    jpMinggu: '2 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | AMAT | Mengalami (Experiencing)
2 | CIPTA | Menciptakan (Making/Creating)
3 | REF | Merefleksikan (Reflecting)
4 | PIKIR | Berpikir dan Bekerja Artistik (Artistic Thinking)
5 | DAMPAK | Berdampak (Impacting)`,
    cpUmum: `Pada akhir Fase E & F, peserta didik mampu mengamati, mengeksplorasi, dan mengapresiasi karya seni rupa dua dan tiga dimensi; menciptakan karya visual orisinal dengan memadukan media tradisional dan digital; merefleksikan makna karya; serta menghasilkan karya berdampak bagi masyarakat.`,
    cpElemen: `Elemen Mengalami: Mengamati keindahan alam, budaya lokal, dan karya master seni rupa untuk menggali gagasan visual.
Elemen Menciptakan: Menghasilkan karya seni lukis, grafis, patung, atau desain visual menggunakan teknik terencana.
Elemen Merefleksikan: Memberikan ulasan kritik seni secara santun dan konstruktif terhadap karya sendiri dan orang lain.
Elemen Berpikir Artistik: Bereksperimen dengan alat, teknik baru, dan media alternatif ramah lingkungan.
Elemen Berdampak: Memamerkan karya seni rupa yang menyampaikan pesan kepedulian sosial atau lingkungan hidup.`,
    kodeMA: 'SRUP-E-CIPTA-001',
    modelMA: 'Project Based Learning (PjBL)',
    modaMA: 'Tatap Muka (Studio Seni)',
    temaMA: 'Eksplorasi Karya Seni Lukis Kanvas Ekspresif Bertema Harmoni Manusia dan Alam',
    produkMA: 'Lukisan Kanvas 2D Orisinal dan Pameran Galeri Kelas Seni Rupa',
    sumberMA: 'Buku Siswa Seni Rupa SMA Kelas X Kemdikbudristek, Cat Akrilik, Kanvas Lukis'
  },
  sma_senimusik: {
    mapel: 'Seni Musik',
    singkatan: 'SMUS',
    fase: 'Fase E & F (Kelas 10 - 12)',
    alokasiTotal: '72 JP / Tahun',
    jpMinggu: '2 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | ALAM | Mengalami (Experiencing)
2 | REFL | Merefleksikan (Reflecting)
3 | PIKIR | Berpikir dan Bekerja Musikalis
4 | CIPTA | Menciptakan (Creating)
5 | DAMPAK | Berdampak (Impacting)`,
    cpUmum: `Pada akhir Fase E & F, peserta didik memiliki kepekaan nada dan ritme musikal, mampu memainkan instrumen musik atau bernyanyi secara solo maupun ansambel, mengaransemen musik vokal/instrumen sederhana, serta menampilkan pertunjukan musik yang membangun kebersamaan.`,
    cpElemen: `Elemen Mengalami: Menyimak beragam genre musik tradisional Nusantara dan modern dunia dengan analisis unsur musik.
Elemen Merefleksikan: Memberi apresiasi terhadap penampilan musik dan mengevaluasi teknik bermain vokal/alat musik.
Elemen Berpikir Musikalis: Membaca partitur notasi balok/angka dan mengaplikasikan teori harmoni akor.
Elemen Menciptakan: Menggubah lirik lagu, mengaransemen pola irama ansambel, atau membuat komposisi lagu digital.
Elemen Berdampak: Menggelar konser mini musik akustik di sekolah untuk menggalang aksi sosial kemanusiaan.`,
    kodeMA: 'SMUS-E-CIPTA-001',
    modelMA: 'Project Based Learning (PjBL)',
    modaMA: 'Tatap Muka',
    temaMA: 'Aransemen Ansambel Musik Akustik Lagu Daerah Nusantara dengan Sentuhan Modern',
    produkMA: 'Rekaman Audio Aransemen Musik dan Pertunjukan Konser Mini Akustik',
    sumberMA: 'Buku Siswa Seni Musik SMA Kelas X Kemdikbudristek, Instrumen Musik Gitar/Keyboard/Perkusi'
  },
  sma_senitari: {
    mapel: 'Seni Tari',
    singkatan: 'STAR',
    fase: 'Fase E & F (Kelas 10 - 12)',
    alokasiTotal: '72 JP / Tahun',
    jpMinggu: '2 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | ALAM | Mengalami (Experiencing)
2 | REFL | Merefleksikan (Reflecting)
3 | PIKIR | Berpikir dan Bekerja Koreografis
4 | CIPTA | Menciptakan (Creating)
5 | DAMPAK | Berdampak (Impacting)`,
    cpUmum: `Pada akhir Fase E & F, peserta didik mampu mengidentifikasi dan mempraktikkan gerak tari tradisional dan kreasi baru, merancang komposisi koreografi tari kelompok berbasis tema kontekstual, serta menyajikan pergelaran tari yang sarat nilai estetika dan etika.`,
    cpElemen: `Elemen Mengalami: Mengeksplorasi ragam gerak tari tradisi daerah setempat dan tari nusantara dengan wiraga, wirama, dan wirasa.
Elemen Merefleksikan: Mengkritisi makna simbolis gerak tari, tata busana, tata rias, dan iringan musik pertunjukan tari.
Elemen Berpikir Koreografis: Menerapkan prinsip komposisi tari (ruang, waktu, tenaga, level, pola lantai) secara terpadu.
Elemen Menciptakan: Merancang karya tari kreasi orisinal bertema pelestarian lingkungan atau persatuan bangsa.
Elemen Berdampak: Menampilkan pagelaran tari kelompok yang memperkuat kecintaan terhadap identitas budaya Indonesia.`,
    kodeMA: 'STAR-E-CIPTA-001',
    modelMA: 'Project Based Learning (PjBL)',
    modaMA: 'Tatap Muka (Studio Tari)',
    temaMA: 'Penciptaan Karya Tari Kreasi Nusantara Bertema Nilai Gotong Royong',
    produkMA: 'Video Dokumentasi Pergelaran Koreografi Tari Kreasi Kelompok',
    sumberMA: 'Buku Siswa Seni Tari SMA Kelas X Kemdikbudristek, Kostum Tari Tradisional, Musik Iringan'
  },
  sma_seniteater: {
    mapel: 'Seni Teater',
    singkatan: 'STEAT',
    fase: 'Fase E & F (Kelas 10 - 12)',
    alokasiTotal: '72 JP / Tahun',
    jpMinggu: '2 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | ALAM | Mengalami (Experiencing)
2 | REFL | Merefleksikan (Reflecting)
3 | PIKIR | Berpikir dan Bekerja Teatrikal
4 | CIPTA | Menciptakan (Creating)
5 | DAMPAK | Berdampak (Impacting)`,
    cpUmum: `Pada akhir Fase E & F, peserta didik memiliki keterampilan olah tubuh, olah vokal, dan olah rasa; mampu menganalisis naskah lakon, mengelola tata artistik panggung, serta menampilkan pementasan drama teater yang menggugah kesadaran kemanusiaan.`,
    cpElemen: `Elemen Mengalami: Mempraktikkan latihan keaktoran mendasar (olah tubuh lentur, artikulasi vokal, konsentrasi, dan imajinasi emosi).
Elemen Merefleksikan: Mengevaluasi akting tokoh, tempo dramatik lakon, serta keselarasan tata cahaya dan tata suara panggung.
Elemen Berpikir Teatrikal: Merencanakan manajemen produksi pertunjukan (penyutradaraan, panggung, tata rias busana, promosi).
Elemen Menciptakan: Mengadaptasi naskah drama sastra dan memerankan karakter secara meyakinkan dan berkarakter.
Elemen Berdampak: Mempersembahkan pementasan teater mini yang menginspirasi penonton untuk mencegah perundungan (bullying).`,
    kodeMA: 'STEAT-E-CIPTA-001',
    modelMA: 'Project Based Learning (PjBL)',
    modaMA: 'Tatap Muka (Panggung Teater)',
    temaMA: 'Pementasan Teater Mini Realis Bertema Empati Kemanusiaan dan Anti-Bullying',
    produkMA: 'Pementasan Sandiwara Teater Panggung dan Buku Dokumentasi Artistik',
    sumberMA: 'Buku Siswa Seni Teater SMA Kelas X Kemdikbudristek, Naskah Lakon Teater Klasik/Modern'
  },
  sma_pkwu_kerajinan: {
    mapel: 'Prakarya dan Kewirausahaan (PKWU) - Kerajinan',
    singkatan: 'PKWU-K',
    fase: 'Fase E & F (Kelas 10 - 12)',
    alokasiTotal: '72 JP / Tahun',
    jpMinggu: '2 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | OBS | Observasi dan Eksplorasi Kerajinan Nusantara
2 | DES | Desain / Perencanaan Produk Kerajinan
3 | PROD | Produksi Kerajinan Ramah Lingkungan
4 | REF | Refleksi dan Evaluasi Pemasaran Usaha`,
    cpUmum: `Pada akhir Fase E & F, peserta didik mampu mengeksplorasi potensi bahan alam/limbah di daerahnya, mendesain produk kerajinan bernilai jual tinggi dengan sentuhan kearifan lokal, memproduksi kerajinan secara higienis dan presisi, serta merancang strategi pemasaran digital dan evaluasi kelayakan usaha.`,
    cpElemen: `Elemen Observasi: Mengidentifikasi karakteristik bahan lunak/keras/limbah daur ulang serta motif kerajinan khas nusantara.
Elemen Desain: Membuat sketsa rancangan produk kerajinan inovatif, kemasan estetis, dan estimasi Rencana Anggaran Biaya (RAB).
Elemen Produksi: Mengolah bahan kerajinan dengan teknik terampil (anyam, ukir, jahit, rakit) sesuai standar keselamatan kerja K3.
Elemen Refleksi & Evaluasi: Menganalisis respon pasar, menghitung Harga Pokok Penjualan (HPP), dan merumuskan strategi promosi e-commerce.`,
    kodeMA: 'PKWUK-E-PROD-001',
    modelMA: 'Project Based Learning (PjBL)',
    modaMA: 'Tatap Muka (Bengkel Karya)',
    temaMA: 'Pemanfaatan Limbah Organik / Plastik Menjadi Produk Kerajinan Dekorasi Interior Modern',
    produkMA: 'Produk Kerajinan Hiasan Rumah Berbahan Daur Ulang Siap Jual Lengkap Kemasan',
    sumberMA: 'Buku Siswa PKWU Kerajinan SMA Kelas X Kemdikbudristek, Bahan Limbah Ramah Lingkungan'
  },
  sma_pkwu_rekayasa: {
    mapel: 'Prakarya dan Kewirausahaan (PKWU) - Rekayasa',
    singkatan: 'PKWU-R',
    fase: 'Fase E & F (Kelas 10 - 12)',
    alokasiTotal: '72 JP / Tahun',
    jpMinggu: '2 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | OBS | Observasi dan Eksplorasi Alat Rekayasa Teknologi
2 | DES | Desain dan Perancangan Skema Rangkaian
3 | PROD | Perakitan Produk Rekayasa Tepat Guna
4 | REF | Pengujian, Evaluasi, dan Rencana Bisnis`,
    cpUmum: `Pada akhir Fase E & F, peserta didik memiliki nalar rekayasa teknologi terapan, mampu merancang skema sistem mekanik atau elektronika sederhana/IoT, merakit alat tepat guna untuk mempermudah aktivitas kehidupan sehari-hari, serta merintis model bisnis teknologi ramah lingkungan.`,
    cpElemen: `Elemen Observasi: Mengkaji prinsip kerja alat konversi energi, sensor otomatis, dan peralatan rekayasa praktis di lingkungan sekitar.
Elemen Desain: Menggambar diagram alir dan skema sirkuit alat rekayasa serta menghitung efisiensi daya dan biaya komponen.
Elemen Produksi: Merangkai dan menyolder komponen elektronik / mekanik menjadi prototipe alat tepat guna fungsional.
Elemen Refleksi & Evaluasi: Melakukan uji fungsi kehandalan alat, memperbaiki kendala teknis (troubleshooting), dan mempresentasikan pitch deck usaha.`,
    kodeMA: 'PKWUR-E-PROD-001',
    modelMA: 'Project Based Learning (PjBL)',
    modaMA: 'Tatap Muka (Laboratorium Rekayasa)',
    temaMA: 'Pembuatan Alat Penyiram Tanaman Otomatis Berbasis Sensor Kelembapan Tanah',
    produkMA: 'Prototipe Alat Otomasi Siram Tanaman Tepat Guna dan Lembar Panduan Manual Penggunaan',
    sumberMA: 'Buku Siswa PKWU Rekayasa Kelas X Kemdikbudristek, Modul Arduino/Sensor, Komponen Elektronik'
  },
  sma_pkwu_budidaya: {
    mapel: 'Prakarya dan Kewirausahaan (PKWU) - Budidaya',
    singkatan: 'PKWU-B',
    fase: 'Fase E & F (Kelas 10 - 12)',
    alokasiTotal: '72 JP / Tahun',
    jpMinggu: '2 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | OBS | Observasi dan Eksplorasi Komoditas Budidaya Unggulan
2 | DES | Desain dan Perencanaan Budidaya Pertanian/Perikanan
3 | PROD | Praktik Penanaman / Pemeliharaan Organik
4 | REF | Pemanenan, Pemasaran, dan Analisis Keuangan Usaha`,
    cpUmum: `Pada akhir Fase E & F, peserta didik mampu mengamati potensi komoditas tanaman pangan, sayuran hidroponik, atau ikan konsumsi; merancang sistem budidaya berkelanjutan; melaksanakan pemeliharaan bebas pestisida kimiawi; serta mengelola pascapanen dan rantai distribusi agribisnis bernilai ekonomi.`,
    cpElemen: `Elemen Observasi: Menganalisis kondisi agroklimat tanah, kebutuhan air, dan peluang pasar hasil budidaya hortikultura / perikanan.
Elemen Desain: Menyusun proposal budidaya terpadu meliputi jadwal tanam, pemilihan bibit unggul, nutrisi pupuk, dan anggaran modal kerja.
Elemen Produksi: Melakukan persemaian bibit, pembuatan pupuk kompos/organik cair, pemantauan hama hayati, hingga masa panen raya.
Elemen Refleksi & Evaluasi: Mengalkulasi Break Even Point (BEP), ROI usaha tani, serta memasarkan produk panen segar ke konsumen.`,
    kodeMA: 'PKWUB-E-PROD-001',
    modelMA: 'Project Based Learning (PjBL)',
    modaMA: 'Tatap Muka (Kebun Percobaan Sekolah)',
    temaMA: 'Budidaya Sayuran Organik Sistem Hidroponik Wick / NFT Bernilai Ekonomi Tinggi',
    produkMA: 'Sayuran Segar Hasil Panen Hidroponik dan Pembukuan Laporan Laba-Rugi Agribisnis',
    sumberMA: 'Buku Siswa PKWU Budidaya Kelas X Kemdikbudristek, Instalasi Hidroponik, Nutrisi AB Mix'
  },
  sma_pkwu_pengolahan: {
    mapel: 'Prakarya dan Kewirausahaan (PKWU) - Pengolahan',
    singkatan: 'PKWU-P',
    fase: 'Fase E & F (Kelas 10 - 12)',
    alokasiTotal: '72 JP / Tahun',
    jpMinggu: '2 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | OBS | Observasi dan Eksplorasi Bahan Pangan Nabati / Hewani
2 | DES | Desain Formulasi Resep dan Kemasan Higienis
3 | PROD | Produksi Makanan / Minuman Khas Nusantara
4 | REF | Evaluasi Sensoris, Legalitas PIRT, dan Pemasaran`,
    cpUmum: `Pada akhir Fase E & F, peserta didik mampu mengeksplorasi bahan pangan lokal khas daerah; mendesain inovasi resep makanan/minuman sehat bercita rasa tinggi; mempraktikkan pengolahan sesuai standar keamanan pangan (GMP/HACCP); serta menyusun rencana branding, pengemasan modern, dan pemasaran kuliner.`,
    cpElemen: `Elemen Observasi: Mengidentifikasi kandungan gizi bahan baku pangan lokal serta tren pasar produk kuliner nusantara dan internasional.
Elemen Desain: Menyusun resep baku (standard recipe card), menentukan kemasan ramah lingkungan, dan membuat label informasi nilai gizi.
Elemen Produksi: Mengolah bahan makanan/minuman dengan teknik memasak higienis serta sanitasi peralatan yang steril.
Elemen Refleksi & Evaluasi: Melakukan uji organoleptik rasa dan aroma, menghitung harga jual kompetitif, dan menjual produk melalui bazar sekolah.`,
    kodeMA: 'PKWUP-E-PROD-001',
    modelMA: 'Project Based Learning (PjBL)',
    modaMA: 'Tatap Muka (Dapur Pengolahan)',
    temaMA: 'Inovasi Olahan Pangan Nabati Lokal Menjadi Camilan Sehat Kekinian Bernilai Jual',
    produkMA: 'Produk Makanan Olahan Kemasan Berlabel Lengkap dan Standar Uji Kelayakan Rasa',
    sumberMA: 'Buku Siswa PKWU Pengolahan Kelas X Kemdikbudristek, Bahan Pangan Lokal, Peralatan Dapur'
  },
  sma_pak: {
    mapel: 'Pendidikan Agama Kristen dan Budi Pekerti',
    singkatan: 'PAK',
    fase: 'Fase E & F (Kelas 10 - 12)',
    alokasiTotal: '108 JP / Tahun',
    jpMinggu: '3 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | ALLAH | Allah Berkarya dalam Sejarah dan Hidup
2 | MAN | Manusia dan Nilai-Nilai Kristiani
3 | GEREJA | Gereja dan Masyarakat Majemuk
4 | ALAM | Alam dan Lingkungan Hidup Ciptaan Allah`,
    cpUmum: `Pada akhir Fase E & F, peserta didik bertumbuh menjadi pribadi beriman yang menghayati karya penebusan Allah dalam Yesus Kristus, mempraktikkan kasih dan keadilan sosial di tengah masyarakat majemuk, serta aktif memelihara kelestarian alam sebagai wujud tanggung jawab iman Kristiani.`,
    cpElemen: `Elemen Allah Berkarya: Memahami kedaulatan Allah dalam sejarah umat manusia dan karya Roh Kudus yang membarui kehidupan orang percaya.
Elemen Manusia dan Nilai Kristiani: Menghidupi buah Roh, integritas moral, kejujuran akademis, dan keteladanan Kristus dalam pergaulan remaja.
Elemen Gereja & Masyarakat: Berperan aktif sebagai saksi Kristus yang membawa perdamaian, solidaritas sesama, dan dialog persaudaraan antarumat beragama.
Elemen Alam & Lingkungan: Bertanggung jawab menjaga bumi dan mengadvokasi gaya hidup ramah lingkungan sebagai mandat ciptaan Allah.`,
    kodeMA: 'PAK-E-MAN-001',
    modelMA: 'Discovery Learning',
    modaMA: 'Tatap Muka',
    temaMA: 'Mewujudkan Nilai Kasih dan Keadilan Kristiani dalam Merawat Kerukunan Hidup Bermasyarakat',
    produkMA: 'Jurnal Refleksi Pribadi Perjalanan Iman dan Karya Aksi Sosial Kasih Komunitas',
    sumberMA: 'Alkitab, Buku Siswa Pendidikan Agama Kristen SMA Kelas X Kemdikbudristek'
  },
  sma_katolik: {
    mapel: 'Pendidikan Agama Katolik dan Budi Pekerti',
    singkatan: 'PA-KAT',
    fase: 'Fase E & F (Kelas 10 - 12)',
    alokasiTotal: '108 JP / Tahun',
    jpMinggu: '3 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | DIRI | Pribadi Peserta Didik sebagai Citra Allah (Imago Dei)
2 | YESUS | Yesus Kristus dan Pewartaan Kerajaan Allah
3 | GEREJA | Gereja Umat Allah yang Terlibat dalam Dunia
4 | MASY | Kemasyarakatan dan Dialog Kemanusiaan Semesta`,
    cpUmum: `Pada akhir Fase E & F, peserta didik menyadari martabat luhur dirinya sebagai citra Allah, meneladani pribadi Yesus Kristus dalam memperjuangkan Kerajaan Allah, menghayati hidup menggereja sakramental, serta berkontribusi nyata membangun peradaban kasih di tengah masyarakat pluralis.`,
    cpElemen: `Elemen Pribadi Peserta Didik: Menghayati panggilan hidup, keunikan potensi diri, suara hati nurani, dan seksualitas anugerah Allah.
Elemen Yesus Kristus: Mendalami sabda dan karya Yesus yang membela kaum tertindas, serta makna wafat dan kebangkitan-Nya bagi keselamatan dunia.
Elemen Gereja: Memahami 5 tugas Gereja (Kerygma, Leitourgia, Koinonia, Diakonia, Martyria) dalam menghadirkan tanda kasih Allah di era digital.
Elemen Kemasyarakatan: Menerapkan Ajaran Sosial Gereja (ASG) terkait martabat manusia, perdamaian dunia, dan pelestarian keutuhan ciptaan.`,
    kodeMA: 'PAKAT-E-YESUS-001',
    modelMA: 'Inkuiri Terbimbing',
    modaMA: 'Tatap Muka',
    temaMA: 'Meneladani Spiritualitas Yesus Kristus dalam Memperjuangkan Keadilan dan Persaudaraan Sejati',
    produkMA: 'Karya Tulis Reflektif Pengamalan Ajaran Sosial Gereja dan Proyek Aksi Sahabat Lansia',
    sumberMA: 'Kitab Suci Katolik, Katekismus Gereja Katolik, Buku Siswa Agama Katolik SMA Kelas X Kemdikbudristek'
  },
  sma_bk: {
    mapel: 'Bimbingan dan Konseling (BK SMA)',
    singkatan: 'BK',
    fase: 'Fase E & F (Kelas 10 - 12)',
    alokasiTotal: '36 Jam Layanan / Tahun',
    jpMinggu: '1 Jam Layanan / Minggu',
    jpPertemuan: '1 Jam @ 45 Menit',
    elemenKode: `1 | PRIB | Bidang Layanan Pribadi (Kematangan Emosi & Karakter)
2 | SOS | Bidang Layanan Sosial (Relasi Teman Sebaya & Resolusi Konflik)
3 | BLJ | Bidang Layanan Belajar (Manajemen Waktu & Strategi Belajar Efektif)
4 | KARIR | Bidang Layanan Karir (Eksplorasi Minat, Bakat, & Studi Lanjut Perguruan Tinggi)`,
    cpUmum: `Pada akhir Fase E & F, konseli/peserta didik mencapai kemandirian dalam 10 tugas perkembangan remaja, mampu mengelola kesehatan mental dan emosi secara sehat, menjalin hubungan sosial yang harmonis, menguasai gaya belajar adaptif abad 21, serta merencanakan karir masa depan dan pemilihan jurusan perguruan tinggi/dunia kerja secara matang.`,
    cpElemen: `Elemen Layanan Pribadi: Mengembangkan kesadaran diri (self-awareness), konsep diri positif, resiliensi mengatasi stres, dan spiritualitas hidup.
Elemen Layanan Sosial: Mengembangkan keterampilan komunikasi asertif, empati sosial, etika bermedia sosial, dan penolakan terhadap kenakalan remaja.
Elemen Layanan Belajar: Memahami gaya belajar modalitas (VAK), teknik mencatat efektif, critical thinking, dan kesiapan asesmen sumatif.
Elemen Layanan Karir: Melakukan asesmen minat bakat, riset profil universitas kedinasan/PTN/PTS, prospek karir era AI, serta menyusun road-map karir.`,
    kodeMA: 'BK-E-KARIR-001',
    modelMA: 'Experiential Learning',
    modaMA: 'Tatap Muka (Layanan Klasikal & Bimbingan Kelompok)',
    temaMA: 'Pemetaan Potensi Bakat Minat Menuju Sukses SNBP / SNBT dan Karir Abad 21',
    produkMA: 'Peta Rencana Karir Masa Depan (Career Life-Plan Canvas) dan Portofolio Diri',
    sumberMA: 'Panduan Operasional Standar BK Kemdikbudristek, Alat Tes Psikologi Bakat Minat'
  },

  // ==============================================================
  //   TAMBAHAN LENGKAP: SMK (SEKOLAH MENENGAH KEJURUAN)
  // ==============================================================
  smk_ipas: {
    mapel: 'Projek IPAS (Ilmu Pengetahuan Alam dan Sosial SMK)',
    singkatan: 'IPAS-SMK',
    fase: 'Fase E / Kelas 10 SMK',
    alokasiTotal: '216 JP / Tahun',
    jpMinggu: '6 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | ILM | Menjelaskan Fenomena secara Ilmiah
2 | DES | Mendesain dan Mengevaluasi Penyelidikan Ilmiah
3 | TRAN | Menerjemahkan Data dan Bukti-Bukti secara Ilmiah`,
    cpUmum: `Pada akhir Fase E SMK, peserta didik mampu menerapkan integrasi literasi sains alam dan sosial yang kontekstual dengan bidang keahlian vokasi, memecahkan masalah pencemaran lingkungan atau efisiensi kerja di industri, serta merancang projek inovasi hijau yang ramah lingkungan.`,
    cpElemen: `Elemen Menjelaskan Fenomena: Memahami aspek makhluk hidup dan lingkungannya, zat dan perubahannya, energi dan perubahannya, bumi dan antariksa, keruangan, interaksi sosial, serta perilaku ekonomi.
Elemen Mendesain Penyelidikan: Merancang projek investigasi ilmiah terkait pengujian kualitas air/udara, limbah bengkel/industri, atau keselamatan kerja K3LH.
Elemen Menerjemahkan Data: Menganalisis grafik data eksperimen, menarik kesimpulan logis berbasis bukti empiris, dan menyajikan rekomendasi teknis.`,
    kodeMA: 'IPASSMK-E-ILM-001',
    modelMA: 'Project Based Learning (PjBL)',
    modaMA: 'Tatap Muka (Praktik Vokasi Terpadu)',
    temaMA: 'Projek Pengelolaan Limbah Bengkel / Industri Menjadi Energi Alternatif Ramah Lingkungan',
    produkMA: 'Alat Pengolah Filtrasi Limbah Sederhana dan Laporan Ilmiah Berbasis K3LH',
    sumberMA: 'Buku Siswa Projek IPAS SMK Kelas X Kemdikbudristek, Standar SOP Industri Vokasi'
  },
  smk_pkk: {
    mapel: 'Projek Kreatif dan Kewirausahaan (PKK SMK)',
    singkatan: 'PKK-SMK',
    fase: 'Fase F / Kelas 11 & 12 SMK',
    alokasiTotal: '180 JP / Tahun',
    jpMinggu: '5 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | KEW | Kegiatan Produksi Prototype Barang / Jasa Vokasi
2 | BIS | Pemasaran Produk dan Validasi Finansial Bisnis Industri`,
    cpUmum: `Pada akhir Fase F SMK, peserta didik mampu menyusun peluang usaha rintisan (startup), membuat desain prototype produk/jasa berstandar industri sesuai kompetensi keahliannya, memproduksi barang bernilai komersial, menghitung HPP dan BEP, serta memasarkan produk secara luring dan daring.`,
    cpElemen: `Elemen Produksi Prototype: Menyusun alur kerja produksi (job sheet), standar operasional prosedur mutu produk, pembuatan prototype, hingga pengemasan layak pasar.
Elemen Pemasaran & Bisnis: Mengurus perizinan usaha/HAKI, menentukan strategi digital marketing, menyusun laporan keuangan neraca laba-rugi, dan pitch deck investor.`,
    kodeMA: 'PKKSMK-F-KEW-001',
    modelMA: 'Project Based Learning (PjBL)',
    modaMA: 'Tatap Muka (Teaching Factory)',
    temaMA: 'Produksi Prototype Produk Unggulan Vokasi dan Peluncuran Toko Online di Marketplace',
    produkMA: 'Produk/Jasa Jadi Layak Jual Berstandar Industri dan Toko Online Marketplace Aktif',
    sumberMA: 'Buku Siswa PKK SMK Kelas XI Kemdikbudristek, Teaching Factory (TeFa) Unit Sekolah'
  },
  smk_kejuruan: {
    mapel: 'Dasar-Dasar Program Keahlian SMK',
    singkatan: 'DASAR-SMK',
    fase: 'Fase E / Kelas 10 SMK',
    alokasiTotal: '216 JP / Tahun',
    jpMinggu: '6 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | INDUST | Proses Bisnis Menyeluruh Bidang Industri Kejuruan
2 | TECH | Perkembangan Teknologi dan Isu-Isu Global Dunia Industri
3 | PROFIL | Profesi dan Kewirausahaan (Job Profile & Technopreneur)
4 | K3LH | Keselamatan dan Kesehatan Kerja serta Lingkungan Hidup`,
    cpUmum: `Pada akhir Fase E SMK, peserta didik memahami proses bisnis menyeluruh pada industri sesuai program keahliannya, menguasai perkembangan teknologi revolusi industri 4.0, memiliki etos kerja profesional sesuai budaya kerja industri (5R/5S), dan menerapkan standar K3LH secara ketat.`,
    cpElemen: `Elemen Proses Bisnis: Memahami rantai pasok industri, perencanaan produksi, dan kepuasan pelanggan di sektor keahlian.
Elemen Perkembangan Teknologi: Mempelajari digitalisasi industri, otomasi, kecerdasan buatan, dan teknologi ramah lingkungan terkini.
Elemen Job Profile: Mengetahui jalur karir teknisi, etika profesi, dan peluang technopreneur di bidang vokasi.
Elemen K3LH: Mengoperasikan APD (Alat Pelindung Diri), prosedur tanggap darurat kecelakaan kerja, dan pemeliharaan alat kerja bengkel.`,
    kodeMA: 'DASSMK-E-K3LH-001',
    modelMA: 'Discovery Learning',
    modaMA: 'Tatap Muka (Bengkel Vokasi)',
    temaMA: 'Penerapan Budaya Kerja Industri 5R dan Standar Keselamatan Kerja K3LH di Bengkel',
    produkMA: 'SOP K3LH Visual Poster Bengkel dan Laporan Audit Keselamatan Kerja Mandiri',
    sumberMA: 'Buku Dasar-Dasar Keahlian SMK Kelas X Kemdikbudristek, Standar Industri Mitra DUDI'
  },

  // ==============================================================
  //   TAMBAHAN LENGKAP: SMP / MTs
  // ==============================================================
  smp_senimusik: {
    mapel: 'Seni Musik (SMP)',
    singkatan: 'SMUS-D',
    fase: 'Fase D / Kelas 7, 8, 9',
    alokasiTotal: '72 JP / Tahun',
    jpMinggu: '2 JP / Minggu',
    jpPertemuan: '2 JP @ 40 Menit',
    elemenKode: `1 | ALAM | Mengalami (Mendengarkan & Mengidentifikasi Musik)
2 | REFL | Merefleksikan (Mengapresiasi Karya Musik)
3 | PIKIR | Berpikir dan Bekerja Musikalis
4 | CIPTA | Menciptakan (Membuat Pola Ritme & Melodi Sederhana)
5 | DAMPAK | Berdampak (Bernyanyi Bersama / Ansambel)`,
    cpUmum: `Pada akhir Fase D, peserta didik mampu menyanyikan lagu daerah dan lagu nasional dengan teknik vokal teratur (artikulasi, intonasi, pernapasan diafragma), memainkan alat musik melodis dan ritmis secara ansambel kelompok, serta mengapresiasi keragaman karya musik nusantara.`,
    cpElemen: `Elemen Mengalami: Mendengarkan beragam karya musik daerah nusantara dan mengidentifikasi ketukan, birama, serta tangga nada.
Elemen Merefleksikan: Menilai keharmonisan suara dalam paduan suara atau vokal grup.
Elemen Berpikir Musikalis: Membaca solmisasi not angka dan lambang musik dasar.
Elemen Menciptakan: Menulis variasi pola ritme perkusi menggunakan alat sederhana di sekitar.
Elemen Berdampak: Menyajikan pertunjukan ansambel musik kelas yang membangun rasa kebersamaan.`,
    kodeMA: 'SMUSD-D-DAMPAK-001',
    modelMA: 'Project Based Learning (PjBL)',
    modaMA: 'Tatap Muka',
    temaMA: 'Ansambel Musik Perkusi Barang Bekas Membawakan Lagu Nasional Indonesia Pusaka',
    produkMA: 'Rekaman Video Penampilan Ansambel Musik Kelas dan Lembar Partitur Sederhana',
    sumberMA: 'Buku Siswa Seni Musik SMP Kelas VII Kemdikbudristek, Rekorder, Pianika, Botol Perkusi'
  },
  smp_senitari: {
    mapel: 'Seni Tari (SMP)',
    singkatan: 'STAR-D',
    fase: 'Fase D / Kelas 7, 8, 9',
    alokasiTotal: '72 JP / Tahun',
    jpMinggu: '2 JP / Minggu',
    jpPertemuan: '2 JP @ 40 Menit',
    elemenKode: `1 | ALAM | Mengalami (Eksplorasi Gerak Tari Tradisi)
2 | REFL | Merefleksikan (Makna Simbolik Tari Nusantara)
3 | PIKIR | Berpikir dan Bekerja Artistik
4 | CIPTA | Menciptakan (Koreografi Gerak Tari Kelompok)
5 | DAMPAK | Berdampak (Pergelaran Seni Tari)`,
    cpUmum: `Pada akhir Fase D, peserta didik mampu memperagakan gerak tari tradisional nusantara dengan koordinasi tubuh, kesesuaian irama, dan penghayatan; merancang tari kreasi sederhana bertema nilai persahabatan; serta mementaskan tari kelompok di hadapan warga sekolah.`,
    cpElemen: `Elemen Mengalami: Mempraktikkan gerak kepala, tangan, badan, dan kaki tari tradisional daerah dengan kelenturan gerak.
Elemen Merefleksikan: Mengidentifikasi fungsi tari tradisi (upacara, hiburan, pertunjukan) dan busana tari.
Elemen Menciptakan: Menyusun variasi pola lantai (diagonal, lingkaran, zig-zag) tari kelompok.
Elemen Berdampak: Mementaskan tari kreasi daerah yang menumbuhkan rasa bangga terhadap warisan leluhur.`,
    kodeMA: 'STARD-D-CIPTA-001',
    modelMA: 'Project Based Learning (PjBL)',
    modaMA: 'Tatap Muka',
    temaMA: 'Penyusunan Gerak Tari Kreasi Daerah Berbasis Tema Harmoni Keberagaman',
    produkMA: 'Pergelaran Seni Tari Kelompok di Panggung Sekolah dan Video Penampilan',
    sumberMA: 'Buku Siswa Seni Tari SMP Kelas VII Kemdikbudristek, Iringan Musik Tari Tradisi'
  },
  smp_seniteater: {
    mapel: 'Seni Teater (SMP)',
    singkatan: 'STEAT-D',
    fase: 'Fase D / Kelas 7, 8, 9',
    alokasiTotal: '72 JP / Tahun',
    jpMinggu: '2 JP / Minggu',
    jpPertemuan: '2 JP @ 40 Menit',
    elemenKode: `1 | ALAM | Mengalami (Latihan Dasar Keaktoran Vokal & Tubuh)
2 | REFL | Merefleksikan (Analisis Karakter & Plot Cerita)
3 | PIKIR | Berpikir dan Bekerja Teatrikal
4 | CIPTA | Menciptakan (Improvisasi Peran & Tata Panggung)
5 | DAMPAK | Berdampak (Pementasan Drama Mini)`,
    cpUmum: `Pada akhir Fase D, peserta didik mampu melatih olah vokal dan gerak tubuh ekspresif, memahami penokohan naskah drama, berimprovisasi dalam adegan teatrikal, serta menampilkan drama panggung mini yang menyampaikan pesan moral positif.`,
    cpElemen: `Elemen Mengalami: Melakukan latihan artikulasi vokal, mimik wajah, dan gesture tubuh yang mencerminkan beragam emosi.
Elemen Merefleksikan: Menganalisis konflik utama dan pesan amanat naskah drama fabel atau legenda rakyat.
Elemen Menciptakan: Menulis dialog drama pendek dan menyiapkan properti panggung sederhana.
Elemen Berdampak: Memainkan peran dalam pementasan drama kelas dengan kompak dan penuh percaya diri.`,
    kodeMA: 'STEATD-D-DAMPAK-001',
    modelMA: 'Project Based Learning (PjBL)',
    modaMA: 'Tatap Muka',
    temaMA: 'Pementasan Drama Pendek Legenda Nusantara Menumbuhkan Nilai Kejujuran dan Keadilan',
    produkMA: 'Pementasan Drama Kelas dan Naskah Skenario Orisinal Hasil Kolaborasi Siswa',
    sumberMA: 'Buku Siswa Seni Teater SMP Kelas VII Kemdikbudristek, Cerita Rakyat Daerah Nusantara'
  },
  smp_prakarya: {
    mapel: 'Prakarya (SMP)',
    singkatan: 'PRAK-D',
    fase: 'Fase D / Kelas 7, 8, 9',
    alokasiTotal: '72 JP / Tahun',
    jpMinggu: '2 JP / Minggu',
    jpPertemuan: '2 JP @ 40 Menit',
    elemenKode: `1 | OBS | Observasi dan Eksplorasi Produk Prakarya Lokal
2 | DES | Desain dan Perencanaan Produk Karya
3 | PROD | Produksi Karya (Kerajinan / Pengolahan / Rekayasa / Budidaya)
4 | REF | Refleksi dan Evaluasi Produk`,
    cpUmum: `Pada akhir Fase D, peserta didik mampu mengamati bahan alam dan limbah di lingkungan sekitar, merancang karya prakarya yang fungsional dan estetis, memproduksi karya kerajinan/pengolahan pangan higienis, serta mengevaluasi hasil karya dan kemasannya.`,
    cpElemen: `Elemen Observasi: Mengidentifikasi karakteristik bahan lunak/keras alam (tanah liat, serat alam) atau bahan pangan buah segar lokal.
Elemen Desain: Membuat sketsa desain produk, daftar alat dan bahan, serta langkah kerja pembuatan produk.
Elemen Produksi: Mengolah bahan menjadi produk jadi bernilai guna dengan menerapkan aspek keselamatan kerja.
Elemen Refleksi: Menguji kekuatan dan estetika kemasan serta memberikan masukan perbaikan kualitas karya.`,
    kodeMA: 'PRAKD-D-PROD-001',
    modelMA: 'Project Based Learning (PjBL)',
    modaMA: 'Tatap Muka',
    temaMA: 'Pengolahan Buah Segar Lokal Menjadi Minuman Sehat dan Makanan Camilan Bergizi',
    produkMA: 'Produk Makanan/Minuman Olahan Buah Lokal Higienis Siap Saji dengan Kemasan Menarik',
    sumberMA: 'Buku Siswa Prakarya SMP Kelas VII Kemdikbudristek, Bahan Buah Segar Lokal'
  },
  smp_pak: {
    mapel: 'Pendidikan Agama Kristen & BP (SMP)',
    singkatan: 'PAK-D',
    fase: 'Fase D / Kelas 7, 8, 9',
    alokasiTotal: '108 JP / Tahun',
    jpMinggu: '3 JP / Minggu',
    jpPertemuan: '2 JP @ 40 Menit',
    elemenKode: `1 | ALLAH | Allah Berkarya Memelihara Hidup
2 | MAN | Nilai-Nilai Kristiani dalam Persahabatan
3 | GEREJA | Gereja dan Kepedulian Sosial
4 | ALAM | Tanggung Jawab Memelihara Ciptaan Allah`,
    cpUmum: `Pada akhir Fase D, peserta didik memahami pemeliharaan Allah dalam hidup manusia, menerapkan nilai-nilai kristiani (kasih, pengampunan, kerendahan hati) dalam relasi teman sebaya di sekolah, serta aktif merawat alam ciptaan Allah.`,
    cpElemen: `Elemen Allah Berkarya: Memahami kesetiaan Allah dalam membimbing remaja menghadapi perubahan fisik dan psikologis.
Elemen Nilai Kristiani: Mempraktikkan sikap saling menghargai perbedaan suku, agama, dan latar belakang sosial.
Elemen Gereja: Mengambil bagian dalam kegiatan pelayanan kasih dan aksi nyata membantu teman yang membutuhkan.
Elemen Alam: Menghindari perilaku boros dan merawat tanaman taman sekolah sebagai ungkapan syukur.`,
    kodeMA: 'PAKD-D-MAN-001',
    modelMA: 'Discovery Learning',
    modaMA: 'Tatap Muka',
    temaMA: 'Mempraktikkan Teladan Kasih Kristus dalam Membangun Persahabatan Sejati Bebas Bullying',
    produkMA: 'Kliping Inspirasi Tokoh Kasih dan Rencana Komitmen Pribadi Teman Sebaya',
    sumberMA: 'Alkitab, Buku Siswa Pendidikan Agama Kristen SMP Kelas VII Kemdikbudristek'
  },
  smp_katolik: {
    mapel: 'Pendidikan Agama Katolik & BP (SMP)',
    singkatan: 'PAKAT-D',
    fase: 'Fase D / Kelas 7, 8, 9',
    alokasiTotal: '108 JP / Tahun',
    jpMinggu: '3 JP / Minggu',
    jpPertemuan: '2 JP @ 40 Menit',
    elemenKode: `1 | DIRI | Pribadi Remaja yang Dikasihi Allah
2 | YESUS | Yesus Kristus Sahabat Sejati Remaja
3 | GEREJA | Gereja yang Bersekutu dan Melayani
4 | MASY | Hidup Bermasyarakat Rukun dan Damai`,
    cpUmum: `Pada akhir Fase D, peserta didik bersyukur atas anugerah hidup sebagai ciptaan Allah yang unik, meneladani Yesus Kristus yang solider dan berbelas kasih, menghayati doa dan sakramen Gereja Katolik, serta hidup rukun berdampingan dalam masyarakat majemuk.`,
    cpElemen: `Elemen Pribadi Remaja: Mensyukuri talenta bakat diri dan menerima kekurangan diri dengan rendah hati.
Elemen Yesus Kristus: Meneladani ajaran Yesus dalam Perumpamaan Orang Samaria yang Baik Hati.
Elemen Gereja: Memahami makna doa Bapa Kami, sakramen inisiasi (Baptis, Ekaristi, Krisma), dan hidup berkomunitas.
Elemen Kemasyarakatan: Bersikap toleran dan bekerja sama dengan pemuda lintas iman dalam kegiatan sosial.`,
    kodeMA: 'PAKATD-D-YESUS-001',
    modelMA: 'Discovery Learning',
    modaMA: 'Tatap Muka',
    temaMA: 'Yesus Kristus Sahabat Sejati Remaja yang Mengajarkan Kasih dan Sikap Mengampuni',
    produkMA: 'Kumpulan Doa Harian Remaja Katolik dan Aksi Nyata Berbagi Kasih',
    sumberMA: 'Kitab Suci Katolik, Buku Siswa Agama Katolik SMP Kelas VII Kemdikbudristek'
  },
  smp_bk: {
    mapel: 'Bimbingan dan Konseling (SMP)',
    singkatan: 'BK-D',
    fase: 'Fase D / Kelas 7, 8, 9',
    alokasiTotal: '36 Jam Layanan / Tahun',
    jpMinggu: '1 Jam Layanan / Minggu',
    jpPertemuan: '1 Jam @ 40 Menit',
    elemenKode: `1 | PRIB | Layanan Pribadi (Adaptasi Remaja & Pengendalian Emosi)
2 | SOS | Layanan Sosial (Anti-Perundungan & Solidaritas Teman)
3 | BLJ | Layanan Belajar (Gaya Belajar & Disiplin Belajar di Rumah)
4 | KARIR | Layanan Karir (Pengenalan Profil SMA/SMK & Cita-Cita)`,
    cpUmum: `Pada akhir Fase D, peserta didik mampu beradaptasi positif dengan masa pubertas dan iklim sekolah baru, mengendalikan emosi secara matang, membangun komunikasi sosial tanpa bullying, mengoptimalkan cara belajar mandiri, serta memahami kelanjutan studi ke jenjang SMA/SMK sesuai bakat minatnya.`,
    cpElemen: `Elemen Pribadi: Memahami perubahan fisik psikis masa remaja dan membangun harga diri positif.
Elemen Sosial: Menerapkan etika pergaulan teman sebaya dan menolak pengaruh negatif kenakalan remaja.
Elemen Belajar: Mengatur jadwal belajar harian seimbang dan mengatasi kejenuhan belajar.
Elemen Karir: Mengidentifikasi ragam jurusan di SMA dan SMK serta persyaratan profesi masa depan.`,
    kodeMA: 'BKD-D-SOS-001',
    modelMA: 'Experiential Learning',
    modaMA: 'Tatap Muka (Layanan Klasikal BK)',
    temaMA: 'Membangun Iklim Sekolah Ramah Anak Bebas Perundungan (Stop Bullying di Sekolah)',
    produkMA: 'Pohon Komitmen Anti-Bullying Kelas dan Lembar Refleksi Diri Sahabat Positif',
    sumberMA: 'Panduan Operasional Standar BK SMP Kemdikbudristek'
  },

  // ==============================================================
  //   TAMBAHAN LENGKAP: SD / MI
  // ==============================================================
  sd_senimusik: {
    mapel: 'Seni Musik (SD)',
    singkatan: 'SMUS-SD',
    fase: 'Fase B / Kelas 4 SD',
    alokasiTotal: '108 JP / Tahun',
    jpMinggu: '3 JP / Minggu',
    jpPertemuan: '2 JP @ 35 Menit',
    elemenKode: `1 | ALAM | Mengalami (Mengenal Nada & Ketukan Irama)
2 | REFL | Merefleksikan (Menyimak Lagu Anak & Lagu Daerah)
3 | PIKIR | Berpikir dan Bekerja Artistik
4 | CIPTA | Menciptakan (Pola Irama Tepuk Tangan & Perkusi Tubuh)
5 | DAMPAK | Berdampak (Menyanyikan Lagu Bersama)`,
    cpUmum: `Pada akhir Fase B, peserta didik mampu menyanyikan lagu anak-anak dan lagu daerah dengan artikulasi jelas dan nada tepat, menirukan pola ritme menggunakan tepuk tangan atau alat musik sederhana, serta menikmati keindahan musik bersama teman.`,
    cpElemen: `Elemen Mengalami: Mengenal tinggi rendah nada (melodi) dan tempo lambat/cepat lagu.
Elemen Merefleksikan: Menceritakan perasaan senang saat mendengarkan lagu gembira.
Elemen Menciptakan: Menepukkan pola ritme sederhana 2/4, 3/4, dan 4/4 mengiringi lagu.
Elemen Berdampak: Menyanyikan lagu nasional dengan khidmat dan bangga.`,
    kodeMA: 'SMUSSD-B-DAMPAK-001',
    modelMA: 'Discovery Learning',
    modaMA: 'Tatap Muka',
    temaMA: 'Menyanyikan Lagu Daerah Nusantara dengan Iringan Tepuk Tangan Ritmis Ceria',
    produkMA: 'Rekaman Video Menyanyi Bersama di Kelas dengan Iringan Perkusi Tubuh',
    sumberMA: 'Buku Siswa Seni Musik SD Kelas IV Kemdikbudristek, Audio Lagu Daerah Nusantara'
  },
  sd_senitari: {
    mapel: 'Seni Tari (SD)',
    singkatan: 'STAR-SD',
    fase: 'Fase B / Kelas 4 SD',
    alokasiTotal: '108 JP / Tahun',
    jpMinggu: '3 JP / Minggu',
    jpPertemuan: '2 JP @ 35 Menit',
    elemenKode: `1 | ALAM | Mengalami (Eksplorasi Gerak Alam & Hewan Sekitar)
2 | REFL | Merefleksikan (Meniru Gerak Tari Tradisi Anak)
3 | PIKIR | Berpikir dan Bekerja Artistik
4 | CIPTA | Menciptakan (Rangkaian Gerak Tari Gembira)
5 | DAMPAK | Berdampak (Menari Bersama Teman Regu)`,
    cpUmum: `Pada akhir Fase B, peserta didik mampu menirukan gerak tumbuhan, hewan, dan aktivitas manusia menjadi rangkaian gerak tari berirama, menggerakkan tubuh sesuai tempo musik, serta menunjukkan rasa percaya diri saat menari di depan teman-teman.`,
    cpElemen: `Elemen Mengalami: Mengamati gerak kupu-kupu terbang, pohon tertiup angin, dan ombak laut untuk dijadikan gerak tari.
Elemen Merefleksikan: Menyebutkan nama-nama gerak tari tradisional sederhana daerah asal.
Elemen Menciptakan: Menggabungkan 3-4 gerakan menjadi tarian ceria berdurasi pendek.
Elemen Berdampak: Menari berpasangan dengan saling tersenyum dan menjaga kekompakan.`,
    kodeMA: 'STARSD-B-CIPTA-001',
    modelMA: 'Discovery Learning',
    modaMA: 'Tatap Muka',
    temaMA: 'Gerak Tari Kreatif Menirukan Keindahan Alam Flora dan Fauna Nusantara',
    produkMA: 'Peragaan Tari Ceria Kelompok Anak SD di Ruang Kelas',
    sumberMA: 'Buku Siswa Seni Tari SD Kelas IV Kemdikbudristek, Musik Iringan Anak Ceria'
  },
  sd_seniteater: {
    mapel: 'Seni Teater (SD)',
    singkatan: 'STEAT-SD',
    fase: 'Fase B / Kelas 4 SD',
    alokasiTotal: '108 JP / Tahun',
    jpMinggu: '3 JP / Minggu',
    jpPertemuan: '2 JP @ 35 Menit',
    elemenKode: `1 | ALAM | Mengalami (Bermain Peran & Meniru Suara Tokoh)
2 | REFL | Merefleksikan (Pesan Kebaikan Cerita Dongeng)
3 | PIKIR | Berpikir dan Bekerja Teatrikal
4 | CIPTA | Menciptakan (Drama Boneka Tangan / Fabel)
5 | DAMPAK | Berdampak (Pentas Dongeng Fabel Bersama)`,
    cpUmum: `Pada akhir Fase B, peserta didik mampu mengekspresikan karakter tokoh fabel binatang melalui perubahan mimik wajah, intonasi suara, dan bahasa tubuh sederhana; memahami pesan moral dalam dongeng; serta bekerja sama memainkan pertunjukan drama boneka mini.`,
    cpElemen: `Elemen Mengalami: Menirukan suara harimau mengaum, kelinci melompat, dan burung berkicau secara ekspresif.
Elemen Merefleksikan: Menceritakan kembali sifat tokoh baik hati dan tokoh serakah dalam dongeng.
Elemen Menciptakan: Membuat topeng binatang dari kertas karton untuk perlengkapan bermain peran.
Elemen Berdampak: Mementaskan sandiwara fabel pendek di hadapan teman kelas dengan gembira.`,
    kodeMA: 'STEATSD-B-DAMPAK-001',
    modelMA: 'Discovery Learning',
    modaMA: 'Tatap Muka',
    temaMA: 'Bermain Peran Cerita Fabel Hewan Nusantara Mengajarkan Sikap Suka Menolong',
    produkMA: 'Pentas Drama Mini Boneka Tangan/Topeng Kertas dan Lembar Cerita Bergambar',
    sumberMA: 'Buku Siswa Seni Teater SD Kelas IV Kemdikbudristek, Buku Dongeng Fabel Nusantara'
  },
  sd_pak: {
    mapel: 'Pendidikan Agama Kristen & BP (SD)',
    singkatan: 'PAK-SD',
    fase: 'Fase B / Kelas 4 SD',
    alokasiTotal: '108 JP / Tahun',
    jpMinggu: '3 JP / Minggu',
    jpPertemuan: '2 JP @ 35 Menit',
    elemenKode: `1 | ALLAH | Allah Menciptakan dan Memelihara Diriku
2 | MAN | Hidup Bersyukur dan Menyayangi Teman
3 | GEREJA | Gereja Rumah Doa dan Komunitas Kasih
4 | ALAM | Merawat Tanaman dan Hewan Ciptaan Tuhan`,
    cpUmum: `Pada akhir Fase B, peserta didik mengenal kebaikan Allah yang memelihara hidupnya dan keluarga, membiasakan diri berdoa dan membaca Alkitab, mempraktikkan sikap suka menolong teman, serta merawat ciptaan Tuhan di sekitarnya dengan kasih.`,
    cpElemen: `Elemen Allah: Mensyukuri anggota tubuh yang sehat dan berterima kasih atas pertolongan Tuhan setiap hari.
Elemen Manusia: Bersikap jujur, sopan kepada guru dan orang tua, serta memaafkan teman yang bersalah.
Elemen Gereja: Rajin beribadah sekolah minggu dan bernyanyi memuji nama Tuhan bersama teman.
Elemen Alam: Membuang sampah pada tempatnya dan menyiram bunga tanaman di halaman sekolah.`,
    kodeMA: 'PAKSD-B-MAN-001',
    modelMA: 'Discovery Learning',
    modaMA: 'Tatap Muka',
    temaMA: 'Mensyukuri Kebaikan Allah Melalui Sikap Saling Mengasihi dan Menolong Teman',
    produkMA: 'Kartu Doa Harian Anak Kristen dan Gambar Kolase Aku Anak Terang',
    sumberMA: 'Alkitab Anak Bergambar, Buku Siswa Agama Kristen SD Kelas IV Kemdikbudristek'
  },
  sd_katolik: {
    mapel: 'Pendidikan Agama Katolik & BP (SD)',
    singkatan: 'PAKAT-SD',
    fase: 'Fase B / Kelas 4 SD',
    alokasiTotal: '108 JP / Tahun',
    jpMinggu: '3 JP / Minggu',
    jpPertemuan: '2 JP @ 35 Menit',
    elemenKode: `1 | DIRI | Aku Tumbuh Bersama Orang Tua dan Teman
2 | YESUS | Mengenal Pribadi dan Mujizat Yesus
3 | GEREJA | Doa Rosario dan Perayaan Ekaristi Anak
4 | MASY | Rukun dan Saling Berbagi dengan Tetangga`,
    cpUmum: `Pada akhir Fase B, peserta didik mengenal Yesus Kristus yang menyayangi anak-anak, membiasakan membuat tanda salib dan berdoa harian Katolik, meneladani sikap Santo-Santa pelindung, serta hidup rukun dan suka berbagi dengan teman dan sesama.`,
    cpElemen: `Elemen Pribadi: Bersyukur atas keluarga yang penuh kasih dan merawat persahabatan di sekolah.
Elemen Yesus Kristus: Mendengarkan kisah Yesus menyembuhkan orang sakit dan memberkati anak-anak kecil.
Elemen Gereja: Mengenal altar, tabernakel, lilin, dan sikap hormat saat mengikuti misa di gereja.
Elemen Kemasyarakatan: Membantu teman yang tertimpa musibah tanpa membedakan agama dan suku.`,
    kodeMA: 'PAKATSD-B-YESUS-001',
    modelMA: 'Discovery Learning',
    modaMA: 'Tatap Muka',
    temaMA: 'Meneladani Teladan Yesus yang Penuh Kasih Sayang Menyambut Semua Anak-Anak',
    produkMA: 'Buku Harian Doa Anak Katolik dan Gambar Ilustrasi Kisah Kebaikan Yesus',
    sumberMA: 'Kitab Suci Katolik Anak, Buku Siswa Agama Katolik SD Kelas IV Kemdikbudristek'
  },
  sd_mulok: {
    mapel: 'Bahasa Daerah / Muatan Lokal (SD)',
    singkatan: 'MULOK-SD',
    fase: 'Fase B / Kelas 4 SD',
    alokasiTotal: '72 JP / Tahun',
    jpMinggu: '2 JP / Minggu',
    jpPertemuan: '2 JP @ 35 Menit',
    elemenKode: `1 | SIMAK | Nyemak (Menyimak Cerita Rakyat / Dongeng Daerah)
2 | BACA | Maca (Membaca Teks Wacan Basa Daerah / Aksara Tradisi)
3 | MATUR | Micara (Berbicara Bahasa Daerah Santun / Unggah-Ungguh)
4 | TULIS | Nulis (Menulis Kalimat Basa Daerah Rapi)`,
    cpUmum: `Pada akhir Fase B, peserta didik memiliki kemampuan berkomunikasi menggunakan bahasa daerah setempat secara santun sesuai unggah-ungguh basa (undha-usuk basa), memahami cerita rakyat dongeng daerah, serta mengenal aksara tradisi dan tembang dolanan anak nusantara.`,
    cpElemen: `Elemen Menyimak: Memahami isi dongeng fabel daerah (kancil, lutung kasarung, dll) yang diperdengarkan secara lisan.
Elemen Membaca: Membaca lancar teks narasi bahasa daerah dan memahami arti kosa kata tingkatan bahasa santun.
Elemen Berbicara: Melakukan percakapan sederhana dengan orang tua menggunakan basa krama alus / bahasa sopan daerah.
Elemen Menulis: Menulis kalimat bahasa daerah dan menyalin beberapa aksara tradisi dasar secara rapi.`,
    kodeMA: 'MULOKSD-B-MATUR-001',
    modelMA: 'Discovery Learning',
    modaMA: 'Tatap Muka',
    temaMA: 'Tembang Dolanan dan Unggah-Ungguh Basa Daerah dalam Menghormati Orang Tua dan Guru',
    produkMA: 'Buku Komik Bahasa Daerah Bergambar dan Rekaman Tembang Dolanan Daerah Bersama',
    sumberMA: 'Buku Siswa Bahasa Daerah (Jawa/Sunda/Bali/dll) Kelas IV, Kumpulan Tembang Dolanan'
  },
  smk_infor: {
    mapel: 'Informatika SMK',
    singkatan: 'INF-SMK',
    fase: 'Fase E / Kelas 10 SMK',
    alokasiTotal: '144 JP / Tahun',
    jpMinggu: '4 JP / Minggu',
    jpPertemuan: '2 JP @ 45 Menit',
    elemenKode: `1 | BK | Berpikir Komputasional
2 | TIK | Teknologi Informasi dan Komunikasi
3 | SK | Sistem Komputer
4 | JKI | Jaringan Komputer dan Internet
5 | AD | Analisis Data
6 | AP | Algoritma dan Pemrograman
7 | DSI | Dampak Sosial Informatika
8 | PLB | Praktik Lintas Bidang Kejuruan`,
    cpUmum: `Pada akhir Fase E SMK, peserta didik mampu menerapkan berpikir komputasional dalam menyelesaikan persoalan terstruktur di bidang kejuruan vokasi, memanfaatkan perkakas TIK untuk kolaborasi kerja industri, mengelola sistem komputer dan jaringan, menganalisis data digital, serta mengembangkan solusi algoritma pemrograman terapan.`,
    cpElemen: `Elemen Berpikir Komputasional: Menerapkan dekomposisi, pengenalan pola, abstraksi, dan algoritma pada pemecahan masalah teknis industri.
Elemen TIK: Mengintegrasikan aplikasi perkantoran, cloud storage, dan perkakas kolaboratif daring untuk dokumentasi kerja tim.
Elemen Sistem Komputer: Memahami arsitektur perangkat keras, sistem operasi, dan interaksi hardware-software.
Elemen Jaringan Komputer: Mengonfigurasi topologi LAN/WLAN, addressing IP, dan keamanan siber dasar.
Elemen Analisis Data: Mengolah dataset digital, filtering, visualisasi data, dan penarikan insight untuk efisiensi bisnis.
Elemen Algoritma & Pemrograman: Menulis kode program prosedural/modular untuk otomasi tugas kejuruan.
Elemen DSI & PLB: Menjunjung etika privasi data, HAKI, dan mengerjakan proyek lintas bidang kolaboratif.`,
    kodeMA: 'INFSMK-E-AP-001',
    modelMA: 'Problem Based Learning (PBL)',
    modaMA: 'Tatap Muka (Laboratorium Komputer)',
    temaMA: 'Pengembangan Aplikasi Mini Otomasi Perhitungan Transaksi Kasir Menggunakan Python',
    produkMA: 'Source Code Program Python Otomasi dan Dokumentasi Manual Proyek',
    sumberMA: 'Buku Siswa Informatika SMK Kelas X Kemdikbudristek, Python IDE'
  }
};

if (typeof window !== 'undefined') {
  window.MAPEL_PRESETS = MAPEL_PRESETS;
}
