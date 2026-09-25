// App Logic for ModulAjarBagoes (Clean, Robust, Interactive)
document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const levelTabs = document.querySelectorAll('.level-tab-btn');
  const classesGrid = document.getElementById('classes-grid');
  const searchInput = document.getElementById('catalog-search-input');
  const searchResultsWrap = document.getElementById('search-results-wrap');
  const searchResultsGrid = document.getElementById('search-results-grid');
  const searchResultsCount = document.getElementById('search-results-count');
  
  // Subject Drawer Modal Elements
  const subjectModal = document.getElementById('subject-modal');
  const subjectModalTitle = document.getElementById('subject-modal-title');
  const subjectModalSubtitle = document.getElementById('subject-modal-subtitle');
  const subjectListContainer = document.getElementById('subject-list-container');
  const closeSubjectModalBtn = document.getElementById('close-subject-modal');
  const subjectBatchDownloadBtn = document.getElementById('subject-batch-download');

  // Preview Document Modal
  const previewModal = document.getElementById('preview-modal');
  const previewTitle = document.getElementById('preview-modal-title');
  const previewIframe = document.getElementById('preview-modal-iframe');
  const previewDownloadBtn = document.getElementById('preview-download-btn');
  const closePreviewModalBtn = document.getElementById('close-preview-modal');

  // Dedicated In-Page CP & ATP Reader Modal (100% On-Screen Reading, No Force Download)
  const cprModal = document.getElementById('cp-reader-modal');
  const cprTitle = document.getElementById('cpr-title');
  const cprPills = document.getElementById('cpr-pills');
  const cprBody = document.getElementById('cpr-body');
  const closeCprModalBtn = document.getElementById('close-cp-reader-modal');
  const cprTabs = document.querySelectorAll('.cp-reader-tab-btn');

  // State
  let activeTab = 'all';

  // Render Grade Class Cards
  function renderGradeCards() {
    let classesToRender = [];

    if (activeTab === 'all') {
      // Collect all classes from all levels
      for (const key in CATALOG_DATA) {
        const cat = CATALOG_DATA[key];
        cat.classes.forEach(c => {
          classesToRender.push({
            ...c,
            catBadge: cat.badge,
            color: cat.color
          });
        });
      }
    } else if (CATALOG_DATA[activeTab]) {
      const cat = CATALOG_DATA[activeTab];
      cat.classes.forEach(c => {
        classesToRender.push({
          ...c,
          catBadge: cat.badge,
          color: cat.color
        });
      });
    }

    if (classesToRender.length === 0) {
      classesGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #64748b;">
          Tidak ada data jenjang yang dipilih.
        </div>
      `;
      return;
    }

    const html = classesToRender.map(cls => {
      const badgeStyle = cls.color === 'emerald' || cls.color === 'teal'
        ? 'background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0;'
        : cls.color === 'amber'
        ? 'background: #fffbeb; color: #b45309; border: 1px solid #fde68a;'
        : 'background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe;';

      const subjectCount = cls.subjects ? cls.subjects.length : 0;
      const countLabel = subjectCount > 0 ? `${subjectCount} Mapel Siap Unduh` : 'Modul Lengkap';

      return `
        <div class="class-card">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
              <span class="class-badge" style="${badgeStyle}">
                <i class="fas fa-graduation-cap" style="font-size: 0.65rem; margin-right: 0.25rem;"></i>
                ${cls.catBadge}
              </span>
              <span style="font-size: 0.725rem; font-weight: 700; color: #059669; background: #ecfdf5; padding: 0.2rem 0.5rem; border-radius: 9999px;">
                <i class="fas fa-check-circle"></i> 100% Gratis
              </span>
            </div>

            <h3>${cls.name}</h3>
            <p>${cls.desc || 'Perangkat ajar lengkap semester 1 & 2 format Word (.doc) 100% editable.'}</p>
          </div>

          <div>
            <div style="font-size: 0.75rem; color: #64748b; margin-bottom: 0.75rem; font-weight: 600; display: flex; align-items: center; gap: 0.35rem;">
              <i class="fas fa-folder-open" style="color: #3b82f6;"></i>
              <span>${countLabel}</span>
            </div>

            <div class="class-card-actions">
              <button class="btn-open-subjects" onclick="openClassDrawer('${cls.id}')">
                <i class="fas fa-list-ul"></i>
                <span>Pilih Mapel</span>
              </button>
              <a href="https://drive.google.com/drive/search?q=${encodeURIComponent(cls.name)}" target="_blank" rel="noopener" class="btn-direct-download">
                <i class="fas fa-download"></i>
                <span>Unduh File</span>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');

    classesGrid.innerHTML = html;
  }

  // Handle Level Tabs
  levelTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      levelTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeTab = tab.dataset.level;

      // Reset search if active
      if (searchInput.value.trim() !== '') {
        searchInput.value = '';
        searchResultsWrap.style.display = 'none';
        classesGrid.style.display = 'grid';
      }

      renderGradeCards();
    });
  });

  // Handle Search Input
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (query === '') {
      searchResultsWrap.style.display = 'none';
      classesGrid.style.display = 'grid';
      return;
    }

    // Search across all MODULES_DATA
    const matched = MODULES_DATA.filter(m => {
      return m.title.toLowerCase().includes(query) ||
             m.level.toLowerCase().includes(query) ||
             m.grade.toLowerCase().includes(query) ||
             m.curriculum.toLowerCase().includes(query);
    });

    classesGrid.style.display = 'none';
    searchResultsWrap.style.display = 'block';
    searchResultsCount.textContent = `Ditemukan ${matched.length} mata pelajaran untuk kata kunci "${e.target.value}":`;

    if (matched.length === 0) {
      searchResultsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: white; border-radius: 1rem; border: 1px solid #e2e8f0;">
          <i class="fas fa-search" style="font-size: 2rem; color: #cbd5e1; margin-bottom: 0.75rem;"></i>
          <p style="font-weight: 700; color: #1e293b; margin-bottom: 0.25rem;">Tidak menemukan mata pelajaran tersebut</p>
          <p style="font-size: 0.8rem; color: #64748b;">Coba cari dengan nama mapel seperti "Matematika", "IPA", "Fikih", atau "Kelas 4".</p>
        </div>
      `;
      return;
    }

    const html = matched.map(m => {
      return `
        <div class="subject-item-row" style="background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div class="subj-info">
            <h4>${m.title}</h4>
            <span><i class="fas fa-graduation-cap text-blue-500"></i> ${m.grade || m.level} &bull; ${m.curriculum} &bull; <strong style="color: #059669;">Word (.doc)</strong></span>
          </div>
          <div class="subj-btns">
            <button class="btn-subj-preview" onclick="showPreviewModal('${m.title}', '${m.previewUrl}', '${m.downloadUrl}')">
              <i class="fas fa-eye"></i> Sampel
            </button>
            <a href="${m.downloadUrl}" target="_blank" rel="noopener" class="btn-subj-download">
              <i class="fas fa-download"></i> Unduh
            </a>
          </div>
        </div>
      `;
    }).join('');

    searchResultsGrid.innerHTML = html;
  });

  // Open Class Drawer
  window.openClassDrawer = (classId) => {
    // Find class object in CATALOG_DATA
    let foundClass = null;
    let parentCategory = null;

    for (const key in CATALOG_DATA) {
      const cat = CATALOG_DATA[key];
      const cls = cat.classes.find(c => c.id === classId);
      if (cls) {
        foundClass = cls;
        parentCategory = cat;
        break;
      }
    }

    if (!foundClass) return;

    subjectModalTitle.textContent = foundClass.name;
    subjectModalSubtitle.textContent = `${parentCategory.title} &bull; ${foundClass.subjects.length} Mata Pelajaran Tersedia (100% Gratis)`;
    subjectBatchDownloadBtn.href = `https://drive.google.com/drive/search?q=${encodeURIComponent(foundClass.name)}`;

    if (foundClass.subjects.length === 0) {
      subjectListContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: #64748b;">
          Daftar mata pelajaran sedang disinkronkan. Silakan langsung unduh paket kelas via tombol di atas.
        </div>
      `;
    } else {
      const html = foundClass.subjects.map(s => {
        return `
          <div class="subject-item-row">
            <div class="subj-info">
              <h4>${s.title}</h4>
              <span>Format: Word (.doc) 100% Siap Edit &bull; CP 046 Tahun 2025/2026</span>
            </div>
            <div class="subj-btns">
              <button class="btn-subj-preview" onclick="showPreviewModal('${s.title}', '${s.preview}', '${s.drive}')">
                <i class="fas fa-eye"></i> Sampel
              </button>
              <a href="${s.drive}" target="_blank" rel="noopener" class="btn-subj-download">
                <i class="fas fa-download"></i> Unduh
              </a>
            </div>
          </div>
        `;
      }).join('');

      subjectListContainer.innerHTML = html;
    }

    subjectModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  // Close Class Drawer
  function closeDrawer() {
    subjectModal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }

  if (closeSubjectModalBtn) closeSubjectModalBtn.addEventListener('click', closeDrawer);
  subjectModal.addEventListener('click', (e) => {
    if (e.target === subjectModal) closeDrawer();
  });

  // Preview Modal Logic
  window.showPreviewModal = (title, previewUrl, downloadUrl) => {
    previewTitle.textContent = title;
    previewIframe.src = previewUrl;
    previewDownloadBtn.href = downloadUrl;
    previewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closePreview() {
    previewModal.classList.remove('open');
    previewIframe.src = '';
    document.body.style.overflow = 'auto';
  }

  if (closePreviewModalBtn) closePreviewModalBtn.addEventListener('click', closePreview);
  previewModal.addEventListener('click', (e) => {
    if (e.target === previewModal) closePreview();
  });

  // ==============================================================
  // Interactive In-Page CP & ATP Reader Modal (100% On-Screen Reading)
  // ==============================================================
  let currentCprData = null;
  let activeCprTab = 'rasional';

  function renderCprBody(tabKey) {
    if (!cprBody || !currentCprData) return;
    activeCprTab = tabKey;

    // Update active tab buttons
    cprTabs.forEach(t => {
      if (t.dataset.tab === tabKey) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    if (tabKey === 'rasional') {
      const tujuanList = (currentCprData.tujuan || []).map((t, idx) => `
        <li>
          <i class="fas fa-check-circle"></i>
          <span><strong>${idx + 1}.</strong> ${t}</span>
        </li>
      `).join('');

      cprBody.innerHTML = `
        <div class="cp-reader-banner-note">
          <i class="fas fa-book-reader" style="font-size: 1.25rem;"></i>
          <div>
            <strong>Mode Baca Langsung di Layar:</strong> Anda sedang membaca naskah resmi SK BSKAP 046 Tahun 2025 secara langsung tanpa perlu mendownload file apapun.
          </div>
        </div>

        <div class="cp-reader-section">
          <h4><i class="fas fa-quote-left" style="color: #3b82f6;"></i> A. Rasional Mata Pelajaran</h4>
          <p style="text-align: justify; line-height: 1.7; margin-bottom: 1rem;">
            ${currentCprData.rasional}
          </p>
        </div>

        <div class="cp-reader-section">
          <h4><i class="fas fa-bullseye" style="color: #10b981;"></i> B. Tujuan Belajar</h4>
          <p style="margin-bottom: 0.75rem; color: #475569;">
            Melalui pembelajaran mata pelajaran ini, peserta didik diharapkan mampu:
          </p>
          <ul class="cp-reader-list">
            ${tujuanList}
          </ul>
        </div>
      `;
    } else if (tabKey === 'elemen') {
      cprBody.innerHTML = `
        <div class="cp-reader-section">
          <h4><i class="fas fa-cubes" style="color: #6366f1;"></i> Karakteristik Mata Pelajaran & Fokus Elemen</h4>
          <p style="text-align: justify; line-height: 1.7; margin-bottom: 1.25rem;">
            ${currentCprData.karakteristik}
          </p>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.25rem;">
            <h5 style="font-size: 0.95rem; font-weight: 700; color: #1e293b; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
              <i class="fas fa-layer-group" style="color: #3b82f6;"></i> Pendekatan 3 Pilar Deep Learning:
            </h5>
            <p style="font-size: 0.85rem; color: #64748b; line-height: 1.6;">
              Mata pelajaran ini disusun secara holistik mencakup ranah pemahaman konsep (knowledge), keterampilan proses inkuiri (skill), dan sikap berakar pada 3 Pilar Deep Learning (Mindful, Meaningful, Joyful).
            </p>
          </div>
        </div>
      `;
    } else if (tabKey === 'capaian') {
      cprBody.innerHTML = `
        <div class="cp-reader-section">
          <h4><i class="fas fa-file-contract" style="color: #059669;"></i> Naskah Capaian Pembelajaran Resmi (${currentCprData.fase})</h4>
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-left: 4px solid #10b981; padding: 0.75rem 1rem; border-radius: 0.5rem; margin-bottom: 1.25rem; font-size: 0.825rem; color: #065f46;">
            <strong>Kutipan Resmi SK BSKAP 046 Tahun 2025:</strong> Deskripsi kompetensi akhir fase yang wajib dicapai oleh seluruh peserta didik.
          </div>

          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem; line-height: 1.75; font-size: 0.9rem; color: #1e293b; box-shadow: 0 1px 3px rgba(0,0,0,0.05); text-align: justify;">
            ${currentCprData.capaian_teks}
          </div>
        </div>
      `;
    } else if (tabKey === 'atp') {
      cprBody.innerHTML = `
        <div class="cp-reader-section">
          <h4><i class="fas fa-route" style="color: #d97706;"></i> Alur Tujuan Pembelajaran (ATP) & Tahapan Belajar</h4>
          <p style="color: #475569; margin-bottom: 1.25rem;">
            Alur Tujuan Pembelajaran (ATP) merupakan rangkaian Tujuan Pembelajaran (TP) yang disusun secara logis dan terurut (scaffolding) untuk mencapai Capaian Pembelajaran sepanjang fase:
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            <div style="display: flex; gap: 0.85rem; align-items: flex-start; background: #fffbeb; border: 1px solid #fde68a; padding: 1rem; border-radius: 0.75rem;">
              <div style="background: #f59e0b; color: white; font-weight: 800; font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 0.35rem; flex-shrink: 0;">Tahap 1</div>
              <div>
                <strong style="color: #92400e; font-size: 0.875rem;">Fondasi & Pemahaman Awal (Mindful Learning)</strong>
                <p style="font-size: 0.825rem; color: #78350f; margin-top: 0.2rem;">Mengenalkan konsep esensial melalui observasi langsung, apersepsi kontekstual, dan refleksi diri peserta didik.</p>
              </div>
            </div>

            <div style="display: flex; gap: 0.85rem; align-items: flex-start; background: #eff6ff; border: 1px solid #bfdbfe; padding: 1rem; border-radius: 0.75rem;">
              <div style="background: #3b82f6; color: white; font-weight: 800; font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 0.35rem; flex-shrink: 0;">Tahap 2</div>
              <div>
                <strong style="color: #1e40af; font-size: 0.875rem;">Eksplorasi & Aplikasi Bermakna (Meaningful Learning)</strong>
                <p style="font-size: 0.825rem; color: #1e3a8a; margin-top: 0.2rem;">Menghubungkan konsep materi dengan pemecahan masalah riil, studi kasus, eksperimen sederhana, atau karya nyata.</p>
              </div>
            </div>

            <div style="display: flex; gap: 0.85rem; align-items: flex-start; background: #ecfdf5; border: 1px solid #a7f3d0; padding: 1rem; border-radius: 0.75rem;">
              <div style="background: #10b981; color: white; font-weight: 800; font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 0.35rem; flex-shrink: 0;">Tahap 3</div>
              <div>
                <strong style="color: #065f46; font-size: 0.875rem;">Kolaborasi & Refleksi Menyenangkan (Joyful Learning)</strong>
                <p style="font-size: 0.825rem; color: #047857; margin-top: 0.2rem;">Presentasi hasil karya kelompok, saling memberikan umpan balik konstruktif, dan asesmen sumatif yang memotivasi.</p>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (tabKey === 'unduh') {
      cprBody.innerHTML = `
        <div class="cp-reader-section">
          <h4><i class="fas fa-file-download" style="color: #2563eb;"></i> Unduh Berkas Salinan (Opsional)</h4>
          <p style="color: #475569; margin-bottom: 1.25rem;">
            Jika Anda ingin menyimpan salinan dokumen ke perangkat Anda untuk dibaca secara offline atau dicetak, silakan pilih opsi di bawah:
          </p>

          <div class="cp-download-card-grid">
            <div class="cp-download-card">
              <div>
                <div style="font-size: 0.7rem; font-weight: 700; color: #ef4444; text-transform: uppercase; margin-bottom: 0.25rem;">
                  <i class="fas fa-file-pdf"></i> Dokumen Resmi Ringkas
                </div>
                <h5>Salinan CP ${currentCprData.title}</h5>
                <p>Format PDF Resmi SK BSKAP 046 • ${currentCprData.page_ref} (Hanya ${currentCprData.page_count} Halaman, Bukan 1.691 Halaman Master).</p>
              </div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <a href="${currentCprData.pdf_url}" target="_blank" rel="noopener" class="btn-primary" style="padding: 0.6rem 1rem; font-size: 0.8rem; border-radius: 0.5rem;">
                  <i class="fas fa-external-link-alt"></i> Buka PDF di Tab Baru
                </a>
                <a href="${currentCprData.pdf_url}" download class="btn-secondary" style="padding: 0.6rem 1rem; font-size: 0.8rem; border-radius: 0.5rem;">
                  <i class="fas fa-download"></i> Unduh PDF (${currentCprData.page_count} Hal)
                </a>
              </div>
            </div>

            <div class="cp-download-card">
              <div>
                <div style="font-size: 0.7rem; font-weight: 700; color: #059669; text-transform: uppercase; margin-bottom: 0.25rem;">
                  <i class="fas fa-file-word"></i> Alur Belajar Siap Edit
                </div>
                <h5>Alur Tujuan Pembelajaran (ATP)</h5>
                <p>Format Microsoft Word / Google Drive • Disusun runtut semester 1 & 2 lengkap dengan pemetaan alokasi jam.</p>
              </div>
              <a href="${currentCprData.drive_url}" target="_blank" rel="noopener" class="btn-primary" style="padding: 0.6rem 1rem; font-size: 0.8rem; border-radius: 0.5rem; background: #059669;">
                <i class="fas fa-folder-open"></i> Akses ATP di Google Drive
              </a>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Open CP Reader Modal
  window.openCpReader = (subjKey, defaultTab = 'rasional') => {
    if (typeof CP_READER_DATA === 'undefined') return;
    
    // Find subject data by key or title
    let subj = CP_READER_DATA[subjKey];
    if (!subj) {
      // Find in values
      for (const k in CP_READER_DATA) {
        if (CP_READER_DATA[k].title.toLowerCase().includes(subjKey.toLowerCase()) ||
            subjKey.toLowerCase().includes(CP_READER_DATA[k].title.toLowerCase())) {
          subj = CP_READER_DATA[k];
          break;
        }
      }
    }
    // Safe fallback if key is not found
    if (!subj) {
      subj = {
        title: subjKey,
        jenjang: "Kurikulum Merdeka",
        fase: "Fase Berkelanjutan",
        page_ref: "Salinan SK BSKAP No. 046/H/KR/2025",
        page_count: 10,
        pdf_url: "CP DAN ATP KUMER.pdf",
        drive_url: "https://drive.google.com/",
        rasional: `Mata pelajaran ${subjKey} disusun berpedoman pada Keputusan Kepala BSKAP Nomor 046/H/KR/2025 dengan paradigma Deep Learning (Mindful, Meaningful, Joyful Learning).`,
        tujuan: [
          `Mengembangkan nalar kritis, literasi, dan pemahaman konsep mendalam pada ${subjKey}.`,
          `Menerapkan pemahaman konseptual dalam pemecahan masalah nyata secara kontekstual.`,
          `Menumbuhkan karakter beriman, berkebinekaan global, mandiri, dan bergotong royong.`
        ],
        karakteristik: `Mata pelajaran ${subjKey} mengintegrasikan aspek pengetahuan konseptual, penyelidikan/inkuiri, dan aplikasi terapan yang relevan dengan perkembangan abad 21.`,
        capaian_teks: `Pada akhir fase, peserta didik menunjukkan penguasaan kompetensi holistik pada materi esensial ${subjKey}, mampu mengomunikasikan gagasan, serta menerapkan konsep dalam situasi belajar maupun kehidupan sehari-hari secara bertanggung jawab.`
      };
    }

    currentCprData = subj;

    if (cprTitle) cprTitle.textContent = subj.title;
    if (cprPills) {
      cprPills.innerHTML = `
        <span class="cp-reader-meta-pill highlight"><i class="fas fa-graduation-cap"></i> ${subj.jenjang}</span>
        <span class="cp-reader-meta-pill"><i class="fas fa-bookmark"></i> ${subj.fase}</span>
        <span class="cp-reader-meta-pill"><i class="fas fa-file-alt"></i> Rujukan: ${subj.page_ref}</span>
        <span class="cp-reader-meta-pill" style="background: #ecfdf5; color: #059669; border-color: #a7f3d0;"><i class="fas fa-check-circle"></i> ${subj.page_count} Hal Ringkas</span>
      `;
    }

    renderCprBody(defaultTab);

    if (cprModal) {
      cprModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  window.openCpReaderTab = (subjKey, tabKey) => {
    window.openCpReader(subjKey, tabKey);
  };

  // Backward compatibility alias so openCpPdfModal never errors and opens reader directly
  window.openCpPdfModal = (title, pdfUrl, pageRef, pageCount) => {
    window.openCpReader(title);
  };

  // Close CP Reader Modal
  function closeCprModal() {
    if (cprModal) cprModal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
  window.closeCprModal = closeCprModal;

  if (closeCprModalBtn) closeCprModalBtn.addEventListener('click', closeCprModal);
  if (cprModal) {
    cprModal.addEventListener('click', (e) => {
      if (e.target === cprModal) closeCprModal();
    });
  }

  // Handle Tab Switch inside Reader Modal
  cprTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      renderCprBody(tab.dataset.tab);
    });
  });

  // Global Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closePreview();
      closeCprModal();
    }
  });


  // Copy Prompt Tool
  window.copyPromptText = (elementId, btn) => {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
      const oldHtml = btn.innerHTML;
      btn.innerHTML = `<i class="fas fa-check" style="color: #34d399;"></i> Berhasil Disalin!`;
      btn.style.background = '#065f46';
      showToast('Prompt disalin! Silakan tempel (paste) di ChatGPT atau Gemini.');

      setTimeout(() => {
        btn.innerHTML = oldHtml;
        btn.style.background = '';
      }, 2500);
    }).catch(err => {
      console.error(err);
    });
  };

  // Toast Function
  function showToast(msg) {
    const toast = document.getElementById('toast-box');
    const toastText = document.getElementById('toast-text');
    toastText.textContent = msg;
    toast.classList.add('visible');

    setTimeout(() => {
      toast.classList.remove('visible');
    }, 3200);
  }

  // Mobile drawer toggle
  const mobileToggleBtn = document.getElementById('btn-mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
    mobileDrawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // ==============================================================
  // CP & ATP Berdasarkan Jenjang (SK BSKAP 046 Tahun 2025)
  // ==============================================================
  let activeCpLevel = 'tk';
  const cpTabs = document.querySelectorAll('.cp-level-tab');
  const cpSearchInput = document.getElementById('cp-search-input');
  const cpLevelContent = document.getElementById('cp-level-content');

  function renderCpAtp(levelId, filterKeyword = '') {
    if (!cpLevelContent || typeof CP_ATP_DATA === 'undefined') return;

    const levelData = CP_ATP_DATA.levels.find(l => l.id === levelId);
    if (!levelData) return;

    // Filter subjects if keyword is given
    let subjects = levelData.subjects || [];
    if (filterKeyword.trim() !== '') {
      const q = filterKeyword.trim().toLowerCase();
      subjects = subjects.filter(s => 
        s.name.toLowerCase().includes(q) ||
        (s.elements && s.elements.toLowerCase().includes(q)) ||
        (s.grade && s.grade.toLowerCase().includes(q))
      );
    }

    // Elements cards HTML
    const elementsHtml = (levelData.elements || []).map(el => `
      <div class="cp-element-card">
        <div class="cp-element-name"><i class="fas fa-check-circle" style="color: #10b981; margin-right: 0.25rem;"></i> ${el.name}</div>
        <div class="cp-element-desc">${el.desc}</div>
      </div>
    `).join('');

    // Subjects cards HTML
    let subjectsHtml = '';
    if (subjects.length === 0) {
      subjectsHtml = `
        <div style="grid-column: 1/-1; text-align: center; padding: 2.5rem; background: white; border-radius: 1rem; border: 1px solid #e2e8f0;">
          <i class="fas fa-search" style="font-size: 1.75rem; color: #cbd5e1; margin-bottom: 0.5rem;"></i>
          <p style="font-weight: 700; color: #1e293b;">Mata pelajaran tidak ditemukan di jenjang ${levelData.name}</p>
          <p style="font-size: 0.8rem; color: #64748b;">Coba gunakan kata kunci lain seperti "Matematika", "IPA", atau "Agama".</p>
        </div>
      `;
    } else {
      subjectsHtml = subjects.map(s => {
        const pageCountText = s.page_count ? `${s.page_count} Halaman` : 'Dokumen Ringkas';
        const safeName = s.name.replace(/'/g, "\\'");
        return `
        <div class="cp-subject-card">
          <div>
            <div class="cp-subject-top">
              <h4 class="cp-subject-title">${s.name}</h4>
              <span class="cp-subject-page-badge" title="Rujukan resmi SK 046: ${s.page} (${s.page_count || 5} halaman ringkas, bukan 1.691 hal)">
                <i class="fas fa-file-pdf" style="color: #ef4444;"></i> ${s.page} &bull; <strong style="color: #1d4ed8;">${pageCountText}</strong>
              </span>
            </div>
            <div class="cp-subject-grade">
              <i class="fas fa-graduation-cap"></i> ${s.grade}
            </div>
            <div class="cp-subject-elements">
              <strong style="color: #334155; font-size: 0.725rem; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.2rem;">Fokus Elemen Capaian:</strong>
              ${s.elements}
            </div>
          </div>

          <div class="cp-subject-actions">
            <button class="btn-cp-doc" onclick="openCpReader('${s.reader_key || safeName}')" title="Baca langsung Capaian Pembelajaran resmi di layar tanpa download">
              <i class="fas fa-book-open"></i> Baca CP (${pageCountText})
            </button>
            <button class="btn-atp-doc" onclick="openCpReaderTab('${s.reader_key || safeName}', 'atp')" title="Pelajari Alur Tujuan Pembelajaran (ATP) langsung di layar">
              <i class="fas fa-route"></i> Alur Belajar (ATP)
            </button>
            <a href="${s.doc_download}" target="_blank" rel="noopener" class="btn-cp-tab" title="Buka PDF resmi ringkas (${pageCountText}) langsung di tab baru">
              <i class="fas fa-file-pdf"></i>
            </a>
          </div>
        </div>
      `;
      }).join('');
    }

    const html = `
      <!-- Level Overview Card -->
      <div class="cp-overview-card">
        <div class="cp-overview-header">
          <div>
            <h3 class="cp-overview-title">${levelData.name}</h3>
          </div>
          <span class="cp-overview-badge-fase">${levelData.phase}</span>
        </div>

        <div class="cp-overview-meta-bar">
          <span><i class="fas fa-users" style="color: #3b82f6;"></i> ${levelData.age}</span>
          <span><i class="fas fa-file-alt" style="color: #10b981;"></i> Rujukan SK 046: <strong>${levelData.page_ref}</strong></span>
          <span><i class="fas fa-certificate" style="color: #f59e0b;"></i> Status: <strong>Regulasi Resmi Aktif</strong></span>
        </div>

        <p class="cp-overview-desc">${levelData.description}</p>

        <!-- Elements Box -->
        <div class="cp-elements-box">
          <div class="cp-elements-box-title">
            <i class="fas fa-cubes" style="color: #2563eb;"></i>
            Karakteristik & Elemen Capaian Utama ${levelData.phase}:
          </div>
          <div class="cp-elements-grid">
            ${elementsHtml}
          </div>
        </div>
      </div>

      <!-- Subject Grid Section -->
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <h4 style="font-size: 1.1rem; font-weight: 800; color: #0f172a;">
            Daftar CP & ATP Mata Pelajaran ${levelData.name} (${subjects.length} Mapel)
          </h4>
          <span style="font-size: 0.775rem; color: #059669; font-weight: 700; background: #ecfdf5; padding: 0.25rem 0.65rem; border-radius: 9999px;">
            <i class="fas fa-check"></i> Siap Pakai & 100% Gratis
          </span>
        </div>
        <div class="cp-subjects-grid">
          ${subjectsHtml}
        </div>
      </div>
    `;

    cpLevelContent.innerHTML = html;
  }

  // Handle Tab Switch for CP & ATP
  cpTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      cpTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCpLevel = tab.dataset.level;
      if (cpSearchInput) cpSearchInput.value = '';
      renderCpAtp(activeCpLevel);
    });
  });

  // Handle In-Tab Search for CP & ATP
  if (cpSearchInput) {
    cpSearchInput.addEventListener('input', (e) => {
      renderCpAtp(activeCpLevel, e.target.value);
    });
  }

  // Initial render
  renderGradeCards();
  renderCpAtp('tk');
});
