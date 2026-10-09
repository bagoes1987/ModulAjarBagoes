/**
 * Generator Prompt AI Laporan PKM (Pemantapan Kemampuan Mengajar)
 * Sesuai Ketentuan Modul Resmi PKM FKIP / Universitas Terbuka
 * Komponen:
 * 1. Pendahuluan (Konteks Sekolah & Kondisi Kelas)
 * 2. Manfaat Mengikuti Praktik PKM & Refleksi Diri (Supervisor 1 & 2)
 * 3. Ulasan 2 Praktik Mengajar / RPP:
 *    A. RPP Eksakta (Sains / Matematika)
 *    B. RPP Non-Eksakta (Bahasa / IPS / PKn)
 * 4. Kesimpulan dan Saran (Evaluasi PKM & RTL Guru)
 */

(function () {
  'use strict';

  // Contoh Data Default / Rekomendasi Modul PKM
  const PKM_SAMPLES = {
    pendahuluan: {
      namaSekolah: 'SD Negeri 01 Harapan Bangsa',
      jenjangKelas: 'Kelas 3 (32 Peserta Didik: 15 Laki-laki, 17 Perempuan)',
      lingkunganSekolah: 'Terletak di pinggiran perkotaan dekat area pemukiman warga dan persawahan. Suasana sekolah relatif tenang, asri, dan jauh dari kebisingan jalan raya utama, namun memiliki akses transportasi desa yang mudah.',
      kondisiFisikSekolah: 'Gedung permanen berlantai satu, halaman upacara sekaligus lapangan olahraga cukup luas, terdapat musala, perpustakaan mini, UKS, serta fasilitas sanitasi/toilet yang bersih dan layak.',
      kondisiKelas: 'Ruang kelas berukuran 7 x 8 meter dengan ventilasi jendela lebar yang memungkinkan pencahayaan alami dan sirkulasi udara baik. Dilengkapi 2 unit kipas angin, papan tulis ganda (whiteboard & blackboard), pojok baca kelas dengan majalah anak, serta meja dan kursi siswa yang fleksibel ditata untuk kerja kelompok maupun berpasangan.',
      karakteristikSiswa: 'Peserta didik sangat aktif dan memiliki rasa ingin tahu yang tinggi. Latar belakang sosial-ekonomi keluarga heterogen (mayoritas anak petani, buruh, dan pedagang). Rentang kemampuan akademis beragam, di mana sebagian siswa cepat memahami materi sementara beberapa lainnya membutuhkan bimbingan bertahap.',
      urgensiPkm: 'Praktik PKM sangat mendesak dilakukan untuk melatih mahasiswa menerapkan pembelajaran mendalam (Deep Learning) yang bermakna, mengatasi kebiasaan siswa yang mudah bosan bila guru hanya menggunakan metode ceramah satu arah, serta merancang perangkat pembelajaran kontekstual yang sesuai dengan kondisi nyata lingkungan sekolah.'
    },

    manfaat: {
      namaMahasiswa: 'Budi Santoso',
      programStudi: 'S1 PGSD - Fakultas Keguruan dan Ilmu Pendidikan (FKIP)',
      supervisor1: 'Dr. Ahmad Fauzi, M.Pd. (Dosen Pembimbing PKM)',
      supervisor2: 'Ibu Tika, S.Pd. (Guru Pamong / Supervisor 2 di Sekolah Praktik)',
      manfaatRpp: 'Mahasiswa memperoleh pemahaman praktis bagaimana merancang RPP/Modul Ajar yang operasional, realistis dalam alokasi jam pelajaran (JP), memadukan 3 pilar Deep Learning (Mindful, Meaningful, Joyful), serta melatih kesiapan mental dan adaptabilitas saat berdiri memfasilitasi kelas nyata.',
      manfaatSupervisor: 'Supervisor 1 memberikan bimbingan konseptual-akademik, validasi tujuan pembelajaran, serta penguatan kaidah ilmiah laporan PKM. Supervisor 2 memberikan masukan teknis langsung di lapangan, seperti cara mengelola kelas yang gaduh, teknik intonasi suara, penempatan posisi guru saat berkeliling kelompok, dan alokasi waktu saat demonstrasi.',
      perasaanRefleksi: 'Setelah melakukan refleksi diri melalui lembar refleksi pasca-mengajar, mahasiswa merasakan kepuasan batin karena mampu mengenali kelebihan sekaligus secara berani mengakui titik-titik kelemahan dalam mengajar. Tumbuh rasa percaya diri, kesadaran pedagogis yang lebih matang, serta empati tinggi terhadap kesulitan belajar peserta didik.',
      kesulitanRefleksi: 'Tantangan terbesar dalam refleksi diri adalah bersikap objektif dan jujur terhadap kekurangan diri sendiri tanpa merasa berkecil hati. Selain itu, jika catatan pengamatan tidak segera ditulis sesaat setelah pembelajaran usai, dinamika interaksi spesifik tiap siswa di kelas cenderung terlewatkan dari ingatan.',
      pengalamanUnik: 'Menyadari bahwa skenario RPP yang dirancang sangat rapi sering kali harus beradaptasi seketika dengan respon spontan dan pertanyaan tak terduga dari siswa di lapangan. Refleksi mengajarkan bahwa mengajar bukan sekadar menuntaskan teks RPP, melainkan seni menghidupkan rasa ingin tahu siswa.'
    },

    eksak: {
      hariTanggalWaktu: 'Kamis, 2 November, pukul 09.00 - 10.00 WIB',
      mapelKelas: 'Ilmu Pengetahuan Alam (IPA) - Kelas 3 SD',
      materiPokok: 'Proses Terjadinya Air Hujan (Daur Air Sederhana)',
      supervisorPengamat: 'Ibu Tika, S.Pd. (Supervisor 2 PKM)',
      kegiatanAwal: 'Kegiatan awal dimulai di halaman sekolah. Anak-anak berdiri melingkari guru di tengah. Bersama-sama menyanyikan lagu "Ayo Berangkat". Guru menyampaikan tujuan pembelajaran bahwa siswa diharapkan dapat menceritakan secara sederhana proses terjadinya air hujan. Sebelum masuk ke kelas, siswa diminta memandang langit sejenak dan mengamati apakah langit berawan atau biru jernih.',
      kegiatanInti: 'Di dalam kelas, siswa duduk berkelompok. Memperhatikan penjelasan guru tentang proses terjadinya hujan melalui media gambar berseri di papan tulis. Setelah sesi tanya jawab, siswa mengerjakan Lembar Kerja Kelompok dan perwakilan kelompok mempresentasikan hasilnya di depan kelas, sementara kelompok lain menyiapkan pertanyaan.',
      kegiatanAkhir: 'Guru bersama siswa merangkum materi inti. Sebagai evaluasi akhir, setiap siswa diminta menuliskan secara singkat alur proses terjadinya air hujan pada buku masing-masing.',
      halUnik: 'Saat siswa diminta kembali belajar ke dalam ruangan kelas setelah apersepsi di halaman, banyak siswa meminta agar belajar tetap dilanjutkan di luar kelas saja karena sangat menikmati mengamati langit langsung. Namun karena perangkat lembar kerja dan media gambar sudah terpasang di dalam kelas, guru mengarahkan siswa kembali masuk dengan tertib.',
      reaksiSiswa: 'Selama pembelajaran di luar maupun di dalam kelas, peserta didik tampak sangat antusias, antusias bertanya, dan mengerjakan lembar kerja tugas kelompok dengan sungguh-sungguh.',
      rujukanTeori: 'Kegiatan pembukaan di luar kelas dirancang untuk variasi pembelajaran dan observasi langsung. Seperti yang diutarakan oleh Devi (2010), pada pembelajaran IPA seyogianya digunakan metode pembelajaran yang mengarahkan siswa untuk sebuah proses penemuan dengan pengalaman langsung (Sumber: http://www.pgsd.upi.net/modul/Tahun2010/BERMUTU/KKG/Metode%20dalam%20Pembelajaran.pdf).'
    },

    noneksak: {
      hariTanggalWaktu: 'Selasa, 21 Oktober, pukul 10.00 - 10.45 WIB',
      mapelKelas: 'Bahasa Indonesia - Kelas 3 SD',
      materiPokok: 'Menuliskan dan Mengidentifikasi Kalimat Perintah Santun',
      supervisorPengamat: 'Ibu Tika, S.Pd. (Supervisor 2 PKM)',
      kegiatanAwal: 'Guru menyampaikan tujuan pembelajaran yaitu siswa diharapkan dapat menuliskan 5 kalimat perintah dengan benar. Siswa diberikan motivasi awal dengan meminta beberapa siswa mengungkapkan sebuah kalimat perintah santun kepada temannya, misalnya: "Ali, tolong kamu bersihkan mejamu supaya rapi".',
      kegiatanInti: 'Guru memberikan contoh beberapa kalimat perintah dari sebuah wacana fabel berjudul "Kancil dan Harimau". Selanjutnya siswa dikelompokkan berpasangan (teman sebangku) untuk merumuskan dan menuliskan 2 kalimat perintah di selembar kertas. Setiap pasangan mempresentasikan hasil kalimat perintahnya di depan kelas.',
      kegiatanAkhir: 'Siswa diminta melengkapi kalimat rumpang sebagai evaluasi formatif. Pelajaran diakhiri dengan pemberian tugas rumah untuk mengidentifikasi 3 kalimat perintah santun dari berbagai majalah anak yang dimiliki di rumah.',
      halUnik: 'Terdapat salah seorang siswa yang biasanya pendiam, sering mengantuk, dan tampak acuh tak acuh di kelas, mendadak menjadi perhatian dan aktif menengok ke belakang mengamati Supervisor 2 serta guru yang sedang praktik mengajar secara bergantian.',
      reaksiSiswa: 'Sebagian siswa menyimak dengan antusias, namun saat instruksi kerja berpasangan berlangsung, beberapa siswa sempat bermain sendiri dan bercakap-cakap di luar materi karena kapasitas kelas yang padat (mencapai 40 siswa).',
      rujukanTeori: 'Dasar penggunaan metode penugasan secara berpasangan adalah agar siswa dapat saling bertukar pikiran. Sebagaimana diutarakan Sutardi dan Sudirjo (2007), model pembelajaran berkelompok berpasangan dirancang untuk membangun pola interaksi positif di antara para siswa (Sumber: http://repository.upi.edu/kampus-daerah/fulltext/uploads/s_pgsd_0809914_chapter1.pdf).'
    },

    kesimpulan: {
      kesimpulanPraktik: 'Pelaksanaan praktik mengajar PKM terbukti secara signifikan meningkatkan kompetensi pedagogik dan profesional mahasiswa dalam merancang RPP berbasis Deep Learning, memadukan metode aktif, serta mengelola interaksi kelas heterogen secara efektif.',
      dampakSiswa: 'Peserta didik menunjukkan peningkatan gairah belajar, keterlibatan aktif saat kerja kolaboratif, serta pemahaman konsep yang lebih mendalam dibanding metode ekspositori konvensional.',
      evaluasiPkm: 'Mata kuliah PKM beserta instrumen bimbingan Supervisor 1 dan Supervisor 2 memberikan fondasi pengalaman riil yang sangat berharga. Disarankan agar porsi sesi umpan balik reflektif pasca-praktik diberi durasi lebih leluasa, serta disediakan panduan integrasi teknologi/AI pembelajaran dalam modul PKM masa depan.',
      rencanaMasaDepan: 'Mahasiswa berkomitmen untuk terus konsisten melakukan refleksi kritis setelah setiap pembelajaran, membudayakan 3 pilar Deep Learning (Mindful, Meaningful, Joyful), memanfaatkan media kontekstual berbasis lingkungan lokal, serta aktif mengembangkan diri melalui forum KKG/MGMP dan pelatihan profesional keguruan.'
    }
  };

  // State Aktif
  // State Aktif
  let currentTab = 'pendahuluan';

  // Ketentuan Tipografi Baku Modul PKM
  const TYPOGRAPHY_GUIDE = `
KETENTUAN FORMAT & TIPOGRAFI NASKAH (SESUAI MODUL RESMI PKM):
- Ukuran Kertas: A4
- Jenis Huruf: Times New Roman
- Ukuran Huruf: 12 pt
- Spasi Baris: 1,5 spasi (Line Spacing 1.5)
- Perataan Paragraf: Justify (Rata Kanan-Kiri)
- Standar Naskah: Siap langsung disalin dan ditempel ke lembar kerja pengolah kata (MS Word / Google Docs) tanpa perlu penataan ulang yang rumit.`;

  // Builder Prompt Generator untuk Masing-Masing Komponen
  function generatePrompt(tabKey) {
    if (tabKey === 'pendahuluan') {
      const d = getFormValues('pendahuluan');
      return `Bertindaklah sebagai Dosen Pembimbing Ahli Penulisan Laporan Pemantapan Kemampuan Mengajar (PKM) Fakultas Keguruan dan Ilmu Pendidikan (FKIP) Universitas Terbuka.

Tugas Anda adalah menyusun draf naskah ilmiah formal yang komprehensif untuk:
"BAB I: PENDAHULUAN - A. Gambaran Umum Sekolah dan Konteks Ruang Kelas"
sesuai dengan ketentuan baku modul laporan akhir PKM.

${TYPOGRAPHY_GUIDE}

DATA KONTEKS LOKASI PRAKTIK MAHASISWA:
1. Satuan Pendidikan / Sekolah: ${d.namaSekolah || '[Nama Sekolah]'}
2. Jenjang & Kelas Mengajar: ${d.jenjangKelas || '[Kelas dan Jumlah Siswa]'}
3. Keadaan Lingkungan Sekolah: ${d.lingkunganSekolah || '[Kondisi Lingkungan Geografis & Sosial]'}
4. Kondisi Fisik Bangunan & Fasilitas Sekolah: ${d.kondisiFisikSekolah || '[Kondisi Fisik Bangunan]'}
5. Kondisi Ruang Kelas (Ukuran, Pencahayaan, Sirkulasi, Tata Letak): ${d.kondisiKelas || '[Kondisi Ruang Kelas]'}
6. Karakteristik & Latar Belakang Peserta Didik: ${d.karakteristikSiswa || '[Karakteristik Siswa]'}
7. Urgensi / Alasan Praktik PKM Dilakukan: ${d.urgensiPkm || '[Urgensi Praktik Mengajar PKM]'}

KETENTUAN DAN SISTEMATIKA PENULISAN:
1. Gunakan bahasa Indonesia baku, akademis, mengalir lancar, dan bernada reflektif profesional (hindari bahasa klise atau sekadar poin-poin mentah).
2. Tuliskan dalam bentuk 3-4 paragraf utuh yang saling berkesinambungan:
   - Paragraf 1: Pengantar konteks sekolah, letak lingkungan geografis, suasana lingkungan belajar, dan kondisi fisik sarana prasarana sekolah secara umum.
   - Paragraf 2: Gambaran detail ruang kelas tempat praktik (ukuran, ventilasi, pencahayaan alami, penataan meja kursi, ketersediaan pojok baca/media ajar) serta kaitannya dengan kenyamanan belajar siswa.
   - Paragraf 3: Profil karakteristik peserta didik (rentang kemampuan, kebiasaan belajar, latar belakang sosial-ekonomi) dan dinamika interaksi yang terjadi di kelas tersebut.
   - Paragraf 4: Alasan urgensi mengapa praktik PKM (berbasis pembelajaran mendalam / Deep Learning dan Kurikulum Merdeka) penting diterapkan untuk menjawab tantangan di kelas dan sekolah tersebut.
3. Susun naskah dengan struktur paragraf yang rapi dan proporsional untuk standar cetak kertas A4, huruf Times New Roman 12 pt, dan spasi 1,5.
4. Langsung sajikan teks isi laporan yang siap disalin dan ditempel ke dalam dokumen laporan akhir PKM mahasiswa tanpa basa-basi pengantar pembuka.`;
    }

    if (tabKey === 'manfaat') {
      const d = getFormValues('manfaat');
      return `Bertindaklah sebagai Dosen Penguji & Pembimbing Laporan Pemantapan Kemampuan Mengajar (PKM) FKIP Universitas Terbuka.

Tugas Anda adalah menyusun draf naskah laporan reflektif yang mendalam untuk:
"BAB II / BAGIAN: MANFAAT MENGIKUTI PRAKTIK PKM DAN REFLEKSI DIRI"
sesuai dengan ketentuan baku modul laporan akhir PKM.

${TYPOGRAPHY_GUIDE}

DATA PRAKTIKAN DAN PENGALAMAN REFLEKSI:
1. Identitas Mahasiswa & Prodi: ${d.namaMahasiswa || '[Nama Mahasiswa]'} - ${d.programStudi || '[Program Studi]'}
2. Pembimbing Supervisor 1: ${d.supervisor1 || '[Nama Supervisor 1]'}
3. Pembimbing Supervisor 2: ${d.supervisor2 || '[Nama Supervisor 2]'}
4. Manfaat Menyusun RPP & Mempraktikkannya: ${d.manfaatRpp || '[Uraian Manfaat RPP & Praktik Mengajar]'}
5. Manfaat Bimbingan & Umpan Balik Supervisor 1 & 2: ${d.manfaatSupervisor || '[Umpan Balik Supervisor]'}
6. Yang Dirasakan Setelah Melakukan Refleksi Diri: ${d.perasaanRefleksi || '[Perasaan Pasca-Refleksi]'}
7. Kesulitan / Kendala dalam Proses Refleksi: ${d.kesulitanRefleksi || '[Kendala Refleksi Pembelajaran]'}
8. Pengalaman Khas / Unik Saat Melaksanakan Refleksi: ${d.pengalamanUnik || '[Pengalaman Khas Saat Refleksi]'}

KETENTUAN DAN SISTEMATIKA PENULISAN:
1. Tuliskan dengan gaya penuturan orang pertama ("mahasiswa" atau "penulis"), bergaya akademis, jujur, reflektif, dan matang secara pedagogis.
2. Uraikan secara komprehensif dalam subbab terstruktur atau narasi paragraf mendalam yang mencakup:
   a. Manfaat Praktik Menyusun RPP dan Mengajar Nyata: Bagaimana proses ini mengubah pemahaman teoritis menjadi kemahiran taktis di ruang kelas.
   b. Kontribusi Umpan Balik Supervisor 1 dan Supervisor 2: Kolaborasi bimbingan akademis (Supervisor 1) dan bimbingan lapangan/taktikal kelas (Supervisor 2).
   c. Dinamika Emosional dan Kesadaran Pasca-Refleksi Diri: Transformasi cara pandang terhadap peran guru, empati kepada siswa, dan rasa tanggung jawab moral pendidik.
   d. Analisis Kritis Kesulitan Refleksi: Kejujuran dalam mengidentifikasi kelemahan mengajar diri sendiri serta cara mengatasi bias subjektif.
   e. Catatan Pengalaman Unik/Khas: Pembelajaran berharga bahwa dinamika kelas nyata menuntut fleksibilitas dan seni mengajar yang melampaui teks kaku RPP.
3. Susun naskah siap cetak dengan standar modul: Kertas A4, font Times New Roman 12 pt, spasi 1,5, dan paragraf rata kanan-kiri.
4. Langsung berikan teks naskah laporan yang siap disalin utuh untuk laporan PKM tanpa teks pengantar pembuka/penutup.`;
    }

    if (tabKey === 'eksak') {
      const d = getFormValues('eksak');
      return `Bertindaklah sebagai Konsultan Penulisan Laporan Pemantapan Kemampuan Mengajar (PKM) FKIP Universitas Terbuka.

Tugas Anda adalah membuat ulasan analitis-reflektif pelaksanaan praktik pembelajaran untuk:
"ULASAN PROSES PRAKTIK MENGAJAR MATA PELAJARAN EKSAKTA (IPA / MATEMATIKA / SAINS)"
Sesuai standar rubrik laporan PKM yang memuat kronologis, keunikan proses, reaksi peserta didik, dan rujukan ilmiah pendukung.

${TYPOGRAPHY_GUIDE}

DATA PRAKTIK PEMBELAJARAN EKSAKTA:
1. Waktu Pelaksanaan: ${d.hariTanggalWaktu || '[Hari, Tanggal, Jam]'}
2. Mata Pelajaran & Kelas: ${d.mapelKelas || '[Mata Pelajaran & Kelas]'}
3. Topik / Materi Pembelajaran: ${d.materiPokok || '[Materi Pokok]'}
4. Supervisor Pengamat: ${d.supervisorPengamat || '[Supervisor 2 PKM]'}
5. Alur Kegiatan Awal / Pembuka: ${d.kegiatanAwal || '[Kegiatan Awal]'}
6. Alur Kegiatan Inti: ${d.kegiatanInti || '[Kegiatan Inti]'}
7. Alur Kegiatan Akhir / Penutup: ${d.kegiatanAkhir || '[Kegiatan Akhir]'}
8. Kejadian Unik Selama Pembelajaran: ${d.halUnik || '[Kejadian Unik]'}
9. Reaksi dan Tanggapan Peserta Didik: ${d.reaksiSiswa || '[Reaksi Siswa]'}
10. Rujukan Teori / Landasan Ilmiah: ${d.rujukanTeori || '[Rujukan Teori Pendidikan]'}

KETENTUAN STRUKTUR PENULISAN ULASAN SESUAI MODUL PKM:
1. Paragraf 1 (Kronologi & Pengondisian Awal): Paparkan hari, tanggal, waktu, kelas, mapel, materi, dan kehadiran supervisor. Deskripsikan secara hidup langkah pembukaan, apersepsi kontekstual, dan penyampaian tujuan pembelajaran.
2. Paragraf 2 (Proses Kegiatan Inti & Penutup): Uraikan pengorganisasian kelas (berkelompok/individu), penggunaan media demonstrasi/LKS, interaksi tanya jawab, presentasi, serta bagaimana kegiatan dirangkum dan dievaluasi.
3. Paragraf 3 (Reaksi Siswa & Peristiwa Unik): Bahas respons dan antusiasme siswa secara detail, serta ulas secara mendalam kejadian unik yang terjadi selama proses pembelajaran (misal: antusiasme siswa saat di halaman sekolah dan reaksi saat kembali ke kelas).
4. Paragraf 4 (Landasan Teori & Rujukan Ilmiah): Jelaskan alasan pedagogis di balik rancangan tindakan mengajar tersebut dengan mengintegrasikan kutipan rujukan teori pendidikan yang dicantumkan (seperti rujukan Devi, 2010 atau teori penemuan langsung) lengkap dengan sitasi dan tautan/sumber rujukannya.
5. Format naskah harus memenuhi standar tipografi: Kertas A4, jenis huruf Times New Roman 12 pt, spasi 1,5, dan rata kanan-kiri.
6. Gunakan gaya bahasa naratif reflektif khas laporan PKM UT/FKIP. Sajikan teks langsung yang siap dimasukkan ke dalam laporan tanpa prolog atau epilog.`;
    }

    if (tabKey === 'noneksak') {
      const d = getFormValues('noneksak');
      return `Bertindaklah sebagai Konsultan Penulisan Laporan Pemantapan Kemampuan Mengajar (PKM) FKIP Universitas Terbuka.

Tugas Anda adalah membuat ulasan analitis-reflektif pelaksanaan praktik pembelajaran untuk:
"ULASAN PROSES PRAKTIK MENGAJAR MATA PELAJARAN NON-EKSAKTA (BAHASA / TEMATIK / IPS / PKn)"
Sesuai standar rubrik laporan PKM yang memuat kronologis, keunikan proses, reaksi peserta didik, dinamika kelas besar, dan rujukan ilmiah pendukung.

${TYPOGRAPHY_GUIDE}

DATA PRAKTIK PEMBELAJARAN NON-EKSAKTA:
1. Waktu Pelaksanaan: ${d.hariTanggalWaktu || '[Hari, Tanggal, Jam]'}
2. Mata Pelajaran & Kelas: ${d.mapelKelas || '[Mata Pelajaran & Kelas]'}
3. Topik / Materi Pembelajaran: ${d.materiPokok || '[Materi Pokok]'}
4. Supervisor Pengamat: ${d.supervisorPengamat || '[Supervisor 2 PKM]'}
5. Alur Kegiatan Awal / Pembuka: ${d.kegiatanAwal || '[Kegiatan Awal]'}
6. Alur Kegiatan Inti: ${d.kegiatanInti || '[Kegiatan Inti]'}
7. Alur Kegiatan Akhir / Penutup: ${d.kegiatanAkhir || '[Kegiatan Akhir]'}
8. Kejadian Unik Selama Pembelajaran: ${d.halUnik || '[Kejadian Unik]'}
9. Reaksi dan Tanggapan Peserta Didik: ${d.reaksiSiswa || '[Reaksi Siswa]'}
10. Rujukan Teori / Landasan Ilmiah: ${d.rujukanTeori || '[Rujukan Teori Pendidikan]'}

KETENTUAN STRUKTUR PENULISAN ULASAN SESUAI MODUL PKM:
1. Paragraf 1 (Kronologi & Motivasi Awal): Deskripsikan waktu pelaksanaan, kehadiran Supervisor 2, apersepsi memotivasi siswa dengan simulasi kalimat kontekstual, dan kejelasan tujuan belajar.
2. Paragraf 2 (Kegiatan Inti & Penugasan Berpasangan): Uraikan pengolahan wacana teks/materi, pembagian kelompok berpasangan, pengerjaan tugas menulis, presentasi di depan kelas, serta evaluasi formatif di akhir sesi.
3. Paragraf 3 (Dinamika Kelas, Reaksi Siswa & Keunikan): Ulas secara jujur dinamika kelas padat (misal 40 siswa), siswa yang antusias vs yang mengobrol saat kerja kelompok, serta sorot peristiwa unik (seperti siswa yang biasanya mengantuk/pasif berubah menjadi fokus mengamati kehadiran supervisor dan guru).
4. Paragraf 4 (Kajian Pedagogis & Landasan Teori): Berikan justifikasi ilmiah mengapa metode belajar berpasangan tersebut dipilih dengan mengutip teori pendidikan terkait (misalnya Sutardi dan Sudirjo, 2007 tentang pola interaksi sosial siswa) beserta sumber rujukannya.
5. Format naskah harus memenuhi standar tipografi: Kertas A4, jenis huruf Times New Roman 12 pt, spasi 1,5, dan rata kanan-kiri.
6. Tuliskan dalam bahasa Indonesia formal, ilmiah, mengalir, dan bernuansa reflektif khas guru pembelajar. Sajikan teks langsung yang siap pakai tanpa kata pengantar pembuka.`;
    }

    if (tabKey === 'kesimpulan') {
      const d = getFormValues('kesimpulan');
      return `Bertindaklah sebagai Dosen Penilai Laporan Pemantapan Kemampuan Mengajar (PKM) FKIP Universitas Terbuka.

Tugas Anda adalah menyusun bab penutup yang komprehensif, tegas, dan bernas untuk:
"BAB PENUTUP: KESIMPULAN DAN SARAN TINDAK LANJUT"
sesuai dengan ketentuan baku modul laporan akhir PKM.

${TYPOGRAPHY_GUIDE}

DATA CAPAIAN DAN RENCANA TINDAK LANJUT:
1. Kesimpulan Keberhasilan Praktik PKM: ${d.kesimpulanPraktik || '[Peningkatan Keterampilan Mengajar Mahasiswa]'}
2. Dampak terhadap Respons & Hasil Belajar Siswa: ${d.dampakSiswa || '[Respons & Pemahaman Siswa]'}
3. Evaluasi & Saran terhadap Mata Kuliah PKM dan Prosedur Praktik: ${d.evaluasiPkm || '[Masukan Prosedur PKM & Bimbingan]'}
4. Rencana Tindak Lanjut (RTL) Masa Depan Guru: ${d.rencanaMasaDepan || '[Rencana Pengembangan Keprofesian Guru]'}

KETENTUAN DAN SISTEMATIKA PENULISAN:
1. Format terbagi menjadi dua subbab jelas:
   A. KESIMPULAN
      - Sajikan 3-4 butir kesimpulan analitis yang merangkum esensi peningkatan keterampilan merancang perangkat ajar, penguasaan kelas heterogen, efektivitas metode pembelajaran mendalam (Deep Learning), serta perkembangan hasil belajar siswa.
   B. SARAN DAN RENCANA TINDAK LANJUT
      - 1. Saran untuk Pengelola Mata Kuliah PKM & Supervisor: Rekomendasi konstruktif terkait sistem bimbingan, durasi refleksi, dan pengayaan modul berbasis AI/teknologi.
      - 2. Saran untuk Pihak Sekolah Tempat Praktik: Masukan positif untuk pemeliharaan fasilitas dan kolaborasi guru sejawat.
      - 3. Rencana Tindak Lanjut Guru (RTL): Komitmen nyata mahasiswa ke depan dalam mengelola pembelajaran bermakna (Mindful, Meaningful, Joyful), keteraturan refleksi mandiri pasca-mengajar, dan partisipasi dalam komunitas belajar (KKG/MGMP).
2. Standar tipografi naskah: Kertas A4, jenis huruf Times New Roman 12 pt, spasi 1,5, dan perataan Justify (Rata Kanan-Kiri).
3. Tuliskan dengan gaya bahasa baku ilmiah, penuh optimisme profesional, dan siap dijadikan halaman penutup laporan akhir PKM. Langsung berikan teks naskah tanpa pengantar pembuka/penutup.`;
    }

    return '';
  }

  // Mengambil nilai form dari DOM berdasarkan tabKey
  function getFormValues(tabKey) {
    const values = {};
    const inputs = document.querySelectorAll(`[data-pkm-field][data-tab-owner="${tabKey}"]`);
    inputs.forEach(input => {
      const fieldKey = input.getAttribute('data-pkm-field');
      values[fieldKey] = input.value.trim();
    });
    return values;
  }

  // Mengisi form dengan nilai tertentu
  function setFormValues(tabKey, dataObj) {
    const inputs = document.querySelectorAll(`[data-pkm-field][data-tab-owner="${tabKey}"]`);
    inputs.forEach(input => {
      const fieldKey = input.getAttribute('data-pkm-field');
      if (dataObj[fieldKey] !== undefined) {
        input.value = dataObj[fieldKey];
      }
    });
    updatePromptOutput(tabKey);
  }

  // Mengosongkan form
  function clearFormValues(tabKey) {
    const inputs = document.querySelectorAll(`[data-pkm-field][data-tab-owner="${tabKey}"]`);
    inputs.forEach(input => {
      input.value = '';
    });
    updatePromptOutput(tabKey);
  }

  // Mengupdate isi textarea prompt output
  function updatePromptOutput(tabKey) {
    const outputElem = document.getElementById(`pkm-prompt-output-${tabKey}`);
    if (outputElem) {
      outputElem.value = generatePrompt(tabKey);
    }
  }

  // Inisialisasi event listener dan render komponen
  function initPkmGenerator() {
    const tabButtons = document.querySelectorAll('.pkm-tab-btn');
    const tabPanels = document.querySelectorAll('.pkm-tab-panel');

    // Switch Tab Listener
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        if (!targetTab) return;

        tabButtons.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetPanel = document.getElementById(`pkm-panel-${targetTab}`);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }

        currentTab = targetTab;
        updatePromptOutput(targetTab);
      });
    });

    // Input Change / Keyup Listener pada semua field
    const allInputs = document.querySelectorAll('[data-pkm-field]');
    allInputs.forEach(input => {
      const owner = input.getAttribute('data-tab-owner');
      input.addEventListener('input', () => {
        if (owner) updatePromptOutput(owner);
      });
    });

    // Isi Default Awal di setiap panel jika kosong
    ['pendahuluan', 'manfaat', 'eksak', 'noneksak', 'kesimpulan'].forEach(tabKey => {
      const sample = PKM_SAMPLES[tabKey];
      if (sample) {
        setFormValues(tabKey, sample);
      }
    });
  }

  // Expose fungsi ke window untuk akses tombol HTML
  window.fillPkmSample = function (tabKey) {
    if (PKM_SAMPLES[tabKey]) {
      setFormValues(tabKey, PKM_SAMPLES[tabKey]);
      if (window.showToast) {
        window.showToast('Contoh data modul PKM berhasil dimuat!');
      }
    }
  };

  window.resetPkmForm = function (tabKey) {
    clearFormValues(tabKey);
    if (window.showToast) {
      window.showToast('Form telah dikosongkan. Silakan isi data Anda.');
    }
  };

  window.copyPkmPrompt = function (tabKey, btnElement) {
    const outputElem = document.getElementById(`pkm-prompt-output-${tabKey}`);
    if (!outputElem) return;

    const text = outputElem.value;
    navigator.clipboard.writeText(text).then(() => {
      const originalHtml = btnElement.innerHTML;
      btnElement.innerHTML = `<i class="fas fa-check"></i> Berhasil Disalin!`;
      btnElement.style.background = '#059669';

      if (window.showToast) {
        window.showToast('Prompt Laporan PKM disalin! Tempelkan di ChatGPT/Gemini/DeepSeek/Claude.');
      }

      setTimeout(() => {
        btnElement.innerHTML = originalHtml;
        btnElement.style.background = '';
      }, 2500);
    }).catch(err => {
      console.error('Gagal menyalin:', err);
      // Fallback select
      outputElem.select();
      document.execCommand('copy');
      if (window.showToast) {
        window.showToast('Prompt disalin ke clipboard!');
      }
    });
  };

  // Jalankan saat DOM siap
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPkmGenerator);
  } else {
    initPkmGenerator();
  }

})();
