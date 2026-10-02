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
    subjectModalSubtitle.textContent = `${parentCategory.title} • ${foundClass.subjects.length} Mata Pelajaran Tersedia (100% Gratis)`;
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
      const isOpen = mobileDrawer.classList.toggle('open');
      const icon = mobileToggleBtn.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      }
    });
    mobileDrawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        const icon = mobileToggleBtn.querySelector('i');
        if (icon) {
          icon.className = 'fas fa-bars';
        }
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

  // ==============================================================
  // MASTER PROMPT GENERATOR (7 DOKUMEN KURIKULUM MERDEKA)
  // ==============================================================
  const formMaster = document.getElementById('form-master-generator');
  const btnFillDemo = document.getElementById('btn-fill-demo');
  const btnResetForm = document.getElementById('btn-reset-form');
  const masterGenResult = document.getElementById('master-gen-result');
  const masterPromptDisplay = document.getElementById('master-prompt-display');
  const btnCopyMaster = document.getElementById('btn-copy-master-prompt');
  const promptCharCount = document.getElementById('prompt-char-count');
  const mgPresetSelect = document.getElementById('mg-preset-select');
  const elementChips = document.querySelectorAll('.btn-element-chip');

  let currentMasterPromptText = '';

  // Comprehensive Preset Database for Instant Subject & Element Autofill
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
  };

  // Wire up Preset Selector Dropdown
  if (mgPresetSelect) {
    mgPresetSelect.addEventListener('change', (e) => {
      const selectedKey = e.target.value;
      if (!selectedKey || !MAPEL_PRESETS[selectedKey]) return;

      const p = MAPEL_PRESETS[selectedKey];

      document.getElementById('mg-mapel').value = p.mapel;
      document.getElementById('mg-singkatan').value = p.singkatan;
      document.getElementById('mg-fase').value = p.fase;
      document.getElementById('mg-alokasi-total').value = p.alokasiTotal;
      document.getElementById('mg-jp-minggu').value = p.jpMinggu;
      document.getElementById('mg-jp-pertemuan').value = p.jpPertemuan;
      document.getElementById('mg-elemen-kode').value = p.elemenKode;
      document.getElementById('mg-cp-umum').value = p.cpUmum;
      document.getElementById('mg-cp-elemen').value = p.cpElemen;
      document.getElementById('mg-kode-ma').value = p.kodeMA;
      document.getElementById('mg-model-ma').value = p.modelMA;
      document.getElementById('mg-moda-ma').value = p.modaMA;
      document.getElementById('mg-tema-ma').value = p.temaMA;
      document.getElementById('mg-produk-ma').value = p.produkMA;
      document.getElementById('mg-sumber-ma').value = p.sumberMA;

      // Ensure school info has standard defaults if still empty
      const provInput = document.getElementById('mg-provinsi');
      const dinasInput = document.getElementById('mg-dinas');
      const sekInput = document.getElementById('mg-sekolah');
      const almInput = document.getElementById('mg-alamat');
      const tglInput = document.getElementById('mg-tanggal');
      const tapelInput = document.getElementById('mg-tapel');
      const guruInput = document.getElementById('mg-guru');
      const kepInput = document.getElementById('mg-kepsek');

      if (!provInput.value) provInput.value = 'Provinsi DKI Jakarta';
      if (!dinasInput.value) dinasInput.value = 'Dinas Pendidikan Provinsi DKI Jakarta';
      if (!sekInput.value) sekInput.value = selectedKey.startsWith('sd_') ? 'SD Negeri 01 Pagi' : (selectedKey.startsWith('sma_') ? 'SMA Negeri 1 Jakarta' : (selectedKey === 'tk_paud' ? 'TK Melati Indah' : 'SMP Negeri 19 Jakarta'));
      if (!almInput.value) almInput.value = 'Jl. Pendidikan No. 10, Jakarta';
      if (!tglInput.value) tglInput.value = 'Jakarta, 15 Juli 2026';
      if (!tapelInput.value) tapelInput.value = '2026/2027';
      if (!guruInput.value) guruInput.value = 'Guru Pengampu, S.Pd.';
      if (!kepInput.value) kepInput.value = 'Kepala Sekolah, M.Pd.';

      showToast(`Mata pelajaran ${p.mapel} dipilih! Elemen & CP resmi SK 046 langsung terisi.`);
    });
  }

  // Quick chip buttons in Step 2:
  if (elementChips && elementChips.length > 0) {
    elementChips.forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.preset;
        if (!key || !MAPEL_PRESETS[key]) return;

        const p = MAPEL_PRESETS[key];
        document.getElementById('mg-elemen-kode').value = p.elemenKode;
        
        // Also sync mapel & singkatan if empty or different
        const mapelInput = document.getElementById('mg-mapel');
        const singkatanInput = document.getElementById('mg-singkatan');
        if (!mapelInput.value || mapelInput.value !== p.mapel) {
          mapelInput.value = p.mapel;
          singkatanInput.value = p.singkatan;
        }

        showToast(`Elemen resmi ${p.mapel} berhasil dipasang.`);
      });
    });
  }

  // Demo Data Preset (Default: Bahasa Inggris SMP)
  const DEMO_MASTER_DATA = MAPEL_PRESETS.smp_inggris;

  if (btnFillDemo) {
    btnFillDemo.addEventListener('click', () => {
      document.getElementById('mg-provinsi').value = 'Provinsi DKI Jakarta';
      document.getElementById('mg-dinas').value = 'Dinas Pendidikan Provinsi DKI Jakarta';
      document.getElementById('mg-sekolah').value = 'SMP Negeri 19 Jakarta';
      document.getElementById('mg-alamat').value = 'Jl. Bumi No. 21, Kebayoran Baru, Jakarta Selatan';
      document.getElementById('mg-tanggal').value = 'Jakarta, 15 Juli 2026';
      document.getElementById('mg-guru').value = 'Ahmad Bagoes, S.Pd.';
      document.getElementById('mg-nipguru').value = '19870512 201101 1 008';
      document.getElementById('mg-kepsek').value = 'Dra. Hj. Nur Endah, M.Pd.';
      document.getElementById('mg-nipkepsek').value = '19720315 199802 2 001';

      if (mgPresetSelect) mgPresetSelect.value = 'smp_inggris';
      const p = MAPEL_PRESETS.smp_inggris;
      document.getElementById('mg-mapel').value = p.mapel;
      document.getElementById('mg-singkatan').value = p.singkatan;
      document.getElementById('mg-fase').value = p.fase;
      document.getElementById('mg-tapel').value = '2026/2027';
      document.getElementById('mg-alokasi-total').value = p.alokasiTotal;
      document.getElementById('mg-jp-minggu').value = p.jpMinggu;
      document.getElementById('mg-jp-pertemuan').value = p.jpPertemuan;
      document.getElementById('mg-elemen-kode').value = p.elemenKode;
      document.getElementById('mg-cp-umum').value = p.cpUmum;
      document.getElementById('mg-cp-elemen').value = p.cpElemen;
      document.getElementById('mg-kode-ma').value = p.kodeMA;
      document.getElementById('mg-model-ma').value = p.modelMA;
      document.getElementById('mg-moda-ma').value = p.modaMA;
      document.getElementById('mg-tema-ma').value = p.temaMA;
      document.getElementById('mg-produk-ma').value = p.produkMA;
      document.getElementById('mg-sumber-ma').value = p.sumberMA;

      showToast('Data contoh (demo) berhasil diisikan ke formulir!');
    });
  }

  if (btnResetForm && formMaster) {
    btnResetForm.addEventListener('click', () => {
      formMaster.reset();
      if (masterGenResult) masterGenResult.style.display = 'none';
      showToast('Formulir telah dikosongkan.');
    });
  }

  function generateMasterPrompt(data) {
    return `Anda adalah Konsultan Ahli Kurikulum Merdeka & Pengembang Pembelajaran Deep Learning (Pembelajaran Mendalam).
Tugas Anda adalah membuat **PERANGKAT ADMINISTRASI PEMBELAJARAN LENGKAP** yang terdiri dari 7 DOKUMEN RESMI secara berurutan dan KONSISTEN 100% dalam format HTML profesional siap cetak (A4), berdasarkan parameter data resmi di bawah ini:

---

## ========================================
##   [INPUT RESMI - DATA ADMINISTRASI]
## ========================================

### --- BLOK 1: DATA IDENTITAS SATUAN PENDIDIKAN & GURU ---
- Nama Provinsi / Kota          : ${data.provinsi}
- Nama Dinas Pendidikan         : ${data.dinas}
- Satuan Pendidikan (Sekolah)   : ${data.sekolah}
- Alamat Sekolah                : ${data.alamat}
- Mata Pelajaran                : ${data.mapel}
- Singkatan Mata Pelajaran      : ${data.singkatan}
- Fase / Kelas                  : ${data.fase}
- Tahun Pelajaran               : ${data.tapel}
- Alokasi Waktu Total           : ${data.alokasiTotal}
- JP per Minggu                 : ${data.jpMinggu}
- JP per Pertemuan (Modul Ajar) : ${data.jpPertemuan}
- Nama Guru Pengampu            : ${data.guru}
- NIP Guru                      : ${data.nipGuru || '-'}
- Nama Kepala Sekolah           : ${data.kepsek}
- NIP Kepala Sekolah            : ${data.nipKepsek || '-'}
- Kota & Tanggal Pengesahan/TTD : ${data.tanggal}

### --- BLOK 2: ELEMEN CP & KODE ELEMEN ---
${data.elemenKode}

### --- BLOK 3: CAPAIAN PEMBELAJARAN (CP) SK BSKAP 046/H/KR/2025 ---
**CP Umum / Rasional Mata Pelajaran:**
${data.cpUmum}

**CP Per Elemen:**
${data.cpElemen}

### --- BLOK 4: DISTRIBUSI TP & SEMESTER (OTOMATISASI AI) ---
[AI: Susun seluruh TP secara proporsional. Bagi rata alokasi JP untuk Semester 1 (Ganjil) dan Semester 2 (Genap) sehingga totalnya tepat sama dengan ${data.alokasiTotal}]

### --- BLOK 5: KALENDER PENDIDIKAN & MINGGU EFEKTIF (OTOMATISASI AI) ---
[AI: Buatkan kalender minggu efektif nasional 12 bulan (Semester 1 & Semester 2) tahun ajaran ${data.tapel}. Hitung minggu kalender, minggu tidak efektif (MPLS, PTS, PAS/PAT, Libur Semester), dan minggu efektif belajar. Gunakan angka minggu efektif ini secara KONSISTEN di Dokumen 4 (Prota) dan Dokumen 5 (Prosem).]

### --- BLOK 6: RENTANG KRITERIA KETERCAPAIAN (KKTP) ---
- Level 1 - Mulai Berkembang (MB) : 0 - 55   | Predikat D (Perlu Bimbingan Khusus)
- Level 2 - Layak (v Ambang KKTP) : 56 - 70  | Predikat C (Tuntas Standar Minimal)
- Level 3 - Cakap                 : 71 - 85  | Predikat B (Menguasai Mandiri)
- Level 4 - Mahir                 : 86 - 100 | Predikat A (Istimewa & Berbagi Praktik)

### --- BLOK 7: DATA MODUL AJAR DEEP LEARNING (TP PERTAMA) ---
- Kode TP yang dibuat Modul Ajarnya : ${data.kodeMA}
- Model Pembelajaran                 : ${data.modelMA}
- Moda Pembelajaran                  : ${data.modaMA}
- Tema / Topik Pembelajaran          : ${data.temaMA}
- Produk / Proyek Akhir Siswa        : ${data.produkMA}
- Sumber Belajar Utama               : ${data.sumberMA}

---

## ========================================
##   [INSTRUKSI PRODUKSI 7 DOKUMEN SECARA BERURUTAN]
## ========================================

Hasilkan ketujuh dokumen berikut secara BERURUTAN. Setiap satu dokumen selesai, lanjutkan ke dokumen berikutnya secara berantai. Data antar dokumen HARUS KONSISTEN 100% (kode TP, rumusan kalimat TP, alokasi JP, dan materi pokok tidak boleh ada perbedaan).

---

### DOKUMEN 1 - ANALISIS CAPAIAN PEMBELAJARAN (CP)
**Kode Dokumen: ADM-CP-${data.singkatan}-${data.fase.replace(/[^a-zA-Z0-9]/g, '')}**
Orientasi: A4 Portrait
Struktur Dokumen:
1. KOP SEKOLAH LENGKAP & IDENTITAS (Provinsi, Dinas, Sekolah, Mapel, Fase/Kelas, Guru, NIP).
2. RASIONAL MATA PELAJARAN: Tabel 3 kolom (No | Uraian | Deskripsi) menguraikan pentingnya mapel, kaitan dengan 8 Dimensi Profil Lulusan, dan orientasi pembelajaran kontekstual.
3. TUJUAN MATA PELAJARAN: Tabel 3 kolom (No | Tujuan | Indikator Umum) dengan KKO terukur.
4. KARAKTERISTIK MAPEL & ELEMEN CP: Tabel 4 kolom (No | Elemen | Deskripsi Elemen | Cakupan Konten Utama 5-7 topik).
5. CAPAIAN PEMBELAJARAN FASE: Tabel memuat CP utuh, Kompetensi Kunci (bullet), dan Materi Pokok.
6. PENJABARAN KKO BERJENJANG: Tabel 3 kolom merinci KKO C2 -> C4/C5 per elemen serta Arah TP operasional.
7. KETERKAITAN 8 DIMENSI PROFIL LULUSAN: Pemetaan checklist dimensi profil yang paling relevan.
8. TANDA TANGAN: Mengetahui Kepala Sekolah (${data.kepsek}) di kiri dan Guru Mata Pelajaran (${data.guru}) di kanan.

---

### DOKUMEN 2 - TUJUAN PEMBELAJARAN (TP)
**Kode Dokumen: ADM-TP-${data.singkatan}-${data.fase.replace(/[^a-zA-Z0-9]/g, '')}**
Orientasi: A4 Portrait
Struktur Dokumen:
1. IDENTITAS LENGKAP & PANDUAN FORMAT KODE TP: [SINGKATAN]-[FASE]-[ELEMEN]-[NOMOR 3 DIGIT] (Contoh: ${data.kodeMA}).
2. DAFTAR TUJUAN PEMBELAJARAN: Tabel 6 kolom (No | Kode TP | Elemen CP | Rumusan Tujuan Pembelajaran diawali 'Peserta didik mampu...' | Aspek Kompetensi Pengetahuan/Keterampilan/Sikap | Alokasi JP). KKO berjenjang C2-C5.
3. REKAPITULASI ALOKASI WAKTU PER ELEMEN: Tabel 5 kolom (No | Elemen | Jumlah TP | Total JP | Persentase %). Baris TOTAL wajib berjumlah 100% dan tepat sama dengan ${data.alokasiTotal}.
4. TANDA TANGAN resmi Kepsek & Guru.

---

### DOKUMEN 3 - ALUR TUJUAN PEMBELAJARAN (ATP)
**Kode Dokumen: ADM-ATP-${data.singkatan}-${data.fase.replace(/[^a-zA-Z0-9]/g, '')}**
Orientasi: A4 Landscape
Struktur Dokumen:
1. IDENTITAS LENGKAP.
2. DIAGRAM ALUR PEMBELAJARAN: Bagan alur berurutan kotak-kotak [TP-001] -> [TP-002] -> [TP-003] dst.
3. TABEL MATRIKS ALUR TP (9 Kolom): No | Kode TP (identik Dok 2) | Elemen CP | Rumusan TP | Materi Pokok Konkret (3-5 topik dipisah koma) | Kompetensi & Level Bloom | Profil Lulusan Terkait | Alokasi JP | Pembagian Semester (1 atau 2).
4. REKAPITULASI SEMESTER: Total JP Semester 1 & Semester 2.
5. TANDA TANGAN resmi Kepsek & Guru.

---

### DOKUMEN 4 - PROGRAM TAHUNAN (PROTA)
**Kode Dokumen: ADM-PROTA-${data.singkatan}-${data.fase.replace(/[^a-zA-Z0-9]/g, '')}**
Orientasi: A4 Portrait
Struktur Dokumen:
1. IDENTITAS LENGKAP & ALOKASI WAKTU (${data.alokasiTotal} - ${data.jpMinggu}).
2. TABEL DISTRIBUSI MINGGU EFEKTIF (12 Bulan): Kolom Semester, Bulan, Minggu Kalender, Minggu Tidak Efektif, Minggu Efektif, Total JP, Keterangan (MPLS, PTS, PAS, Libur). Hitung Subtotal per semester dan Total 1 Tahun + Alokasi Jam Cadangan.
3. TABEL RENCANA PROTA: Kelompok Semester 1 dan Semester 2 memuat Kode TP, Rumusan TP & Materi Pokok, Elemen, dan Alokasi JP.
4. TANDA TANGAN resmi Kepsek & Guru.

---

### DOKUMEN 5 - PROGRAM SEMESTER (PROSEM)
**Kode Dokumen: ADM-PROSEM-${data.singkatan}-${data.fase.replace(/[^a-zA-Z0-9]/g, '')}-S1 & S2**
Orientasi: A4 Landscape
Hasilkan 2 Bagian Matriks (Semester 1 Ganjil & Semester 2 Genap):
1. HEADER IDENTITAS & LEGENDA WARNA:
   - Biru (#d0e4f7): JP Aktif Pembelajaran
   - Merah (#ffd6d6): Libur Semester / Nasional
   - Kuning (#fff3cd): Penilaian Tengah Semester (PTS)
   - Hijau (#d4edda): Penilaian Akhir Semester (PAS / PAT)
   - Abu-abu (#f0f0f0): Belum Dialokasikan / Cadangan
2. TABEL MATRIKS MINGGUAN: Kolom Kode TP, Materi Pokok, JP, dan pembagian kolom per minggu (Bulan -> M1, M2, M3, M4, M5). Isi angka JP pada minggu efektif dan tandai pekan asesmen/libur sesuai legenda warna.
3. TANDA TANGAN resmi Kepsek & Guru.

---

### DOKUMEN 6 - KRITERIA KETERCAPAIAN TUJUAN PEMBELAJARAN (KKTP)
**Kode Dokumen: ADM-KKTP-${data.singkatan}-${data.fase.replace(/[^a-zA-Z0-9]/g, '')}**
Orientasi: A4 Landscape
Struktur Dokumen:
1. DASAR HUKUM: Permendikbudristek No. 21 Tahun 2022 tentang Standar Penilaian Pendidikan.
2. DESKRIPSI 4 LEVEL CAPAIAN: Tabel Level 1 (Mulai Berkembang 0-55), Level 2 (Layak / Ambang Batas KKTP 56-70), Level 3 (Cakap 71-85), Level 4 (Mahir 86-100) beserta tindak lanjutnya.
3. RUBRIK KKTP PER TP: Tabel 8 kolom (No | Kode TP | Tujuan Pembelajaran | IKTP Indikator Ketercapaian Terukur | Deskriptor MB | Deskriptor Layak | Deskriptor Cakap | Deskriptor Mahir) untuk setiap TP.
4. TANDA TANGAN resmi Kepsek & Guru.

---

### DOKUMEN 7 - MODUL AJAR DEEP LEARNING (UNTUK TP: ${data.kodeMA})
**Kode Dokumen: ADM-MA-${data.singkatan}-${data.fase.replace(/[^a-zA-Z0-9]/g, '')}**
Orientasi: A4 Portrait
Susun modul ajar komprehensif berbasis Pembelajaran Mendalam (Deep Learning) dengan 3 Bagian Utama:

BAGIAN A - INFORMASI UMUM:
1. Identitas Modul (Nama Penyusun: ${data.guru}, Satuan Pendidikan: ${data.sekolah}, Mapel: ${data.mapel}, Fase/Kelas: ${data.fase}, Alokasi: ${data.jpPertemuan}, Model: ${data.modelMA}, Moda: ${data.modaMA}, Tahun: ${data.tapel}).
2. Identifikasi Kesiapan Peserta Didik (Pemetaan asesmen awal & prasyarat).
3. Karakteristik Materi (${data.temaMA}, tingkat kesulitan, dan kebermaknaan riil).
4. Tujuan Pembelajaran (KKO Bloom terukur dikaitkan dengan produk ${data.produkMA}).
5. Kompetensi Awal & Cara Pengecekan.
6. Dimensi Profil Lulusan yang ditumbuhkan.
7. Sarana & Prasarana Digital & Non-Digital.
8. Target Peserta Didik & Rencana Diferensiasi (Reguler, Kesulitan Belajar, Mahir/Berbakat).

BAGIAN B - KOMPONEN INTI DEEP LEARNING:
1. Pemahaman Bermakna (Mindful & Meaningful insight).
2. Pertanyaan Pemantik (3 variasi pertanyaan pemantik terbuka non-hafalan).
3. Asesmen Diagnostik (Non-Kognitif emosional & Kognitif prasyarat + 5 butir soal diagnostik).
4. Skenario Kegiatan Pembelajaran:
   Hitung jumlah pertemuan = ceil(JP TP / ${data.jpPertemuan}).
   Untuk SETIAP PERTEMUAN, buat tabel 4 kolom sinkron (Aktivitas Guru vs Aktivitas Siswa) yang menerapkan sintak ${data.modelMA} dalam 3 pilar Deep Learning:
   - Pembuka (15 Menit) -> Mindful (Membangkitkan kesadaran penuh, fokus, apersepsi kontekstual)
   - Inti -> Meaningful (Eksplorasi mendalam, investigasi kasus, kerja kolaboratif kelompok menyusun produk ${data.produkMA})
   - Penutup (15 Menit) -> Joyful (Presentasi santai, apresiasi positif teman sebaya, refleksi emosi belajar, penarikan simpulan)
5. Asesmen Formatif (Observasi diskusi, lembar ceklis proses, contoh soal formatif).
6. Asesmen Sumatif (Tugas proyek akhir ${data.produkMA} bobot 60% & unjuk kerja 40%).
7. Program Remedial & Pengayaan terukur.
8. Refleksi Guru & Refleksi Peserta Didik.

BAGIAN C - LAMPIRAN LENGKAP:
1. Lampiran 1: Lembar Kerja Peserta Didik (LKPD) siap pakai (Stimulus, Instruksi Misi, Tabel Hasil Kerja, Pertanyaan Analisis).
2. Lampiran 2: Rubrik Penilaian Formatif per pertemuan (Skala 1-4).
3. Lampiran 3: Rubrik Penilaian Sumatif (5 soal esai x 20 poin = 100 poin lengkap dengan pedoman penskoran).
4. Lampiran 4: Glosarium istilah materi ${data.temaMA}.
5. Lampiran 5: Daftar Pustaka referensi buku Kemdikbud & sumber valid lainnya.
6. TANDA TANGAN resmi Kepala Sekolah & Guru Pengampu.

---

## ========================================
##   KETENTUAN OUTPUT HTML & CETAK PROFESIONAL
## ========================================
- Hasilkan kode HTML lengkap dan rapi dengan CSS tersemat (embedded style).
- Gunakan styling modern Kurikulum Merdeka (header tabel biru tua \`#1a3a5c\`, font bersih sans-serif, border halus, sel tabel terisi penuh tanpa sel kosong).
- Siap cetak PDF via browser (Ctrl + P) dengan rule \`@media print\` yang rapi dan \`page-break-inside: avoid\`.
- Lengkapi setiap dokumen dengan KOP SEKOLAH resmi dan NOMOR DOKUMEN di kanan atas.

Mulai dengan memproduksi DOKUMEN 1 (Analisis CP). Setelah selesai, beri tanda [DOKUMEN 1 SELESAI (OK)] dan langsung lanjutkan ke Dokumen 2, Dokumen 3, hingga Dokumen 7 selesai tuntas.`;
  }

  if (formMaster) {
    formMaster.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = {
        provinsi: document.getElementById('mg-provinsi').value.trim(),
        dinas: document.getElementById('mg-dinas').value.trim(),
        sekolah: document.getElementById('mg-sekolah').value.trim(),
        alamat: document.getElementById('mg-alamat').value.trim(),
        tanggal: document.getElementById('mg-tanggal').value.trim(),
        mapel: document.getElementById('mg-mapel').value.trim(),
        singkatan: document.getElementById('mg-singkatan').value.trim().toUpperCase(),
        fase: document.getElementById('mg-fase').value.trim(),
        tapel: document.getElementById('mg-tapel').value.trim(),
        alokasiTotal: document.getElementById('mg-alokasi-total').value.trim(),
        jpMinggu: document.getElementById('mg-jp-minggu').value.trim(),
        jpPertemuan: document.getElementById('mg-jp-pertemuan').value.trim(),
        guru: document.getElementById('mg-guru').value.trim(),
        nipGuru: document.getElementById('mg-nipguru').value.trim(),
        kepsek: document.getElementById('mg-kepsek').value.trim(),
        nipKepsek: document.getElementById('mg-nipkepsek').value.trim(),
        elemenKode: document.getElementById('mg-elemen-kode').value.trim(),
        cpUmum: document.getElementById('mg-cp-umum').value.trim(),
        cpElemen: document.getElementById('mg-cp-elemen').value.trim(),
        kodeMA: document.getElementById('mg-kode-ma').value.trim(),
        modelMA: document.getElementById('mg-model-ma').value,
        modaMA: document.getElementById('mg-moda-ma').value,
        temaMA: document.getElementById('mg-tema-ma').value.trim(),
        produkMA: document.getElementById('mg-produk-ma').value.trim(),
        sumberMA: document.getElementById('mg-sumber-ma').value.trim()
      };

      currentMasterPromptText = generateMasterPrompt(data);

      if (masterPromptDisplay) {
        masterPromptDisplay.textContent = currentMasterPromptText;
      }

      if (promptCharCount) {
        const words = currentMasterPromptText.trim().split(/\s+/).length;
        promptCharCount.textContent = `${currentMasterPromptText.length.toLocaleString('id-ID')} karakter (${words.toLocaleString('id-ID')} kata)`;
      }

      if (masterGenResult) {
        masterGenResult.style.display = 'block';
        masterGenResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      showToast('Prompt Master 7 Dokumen berhasil dibuat! Silakan salin tombol di bawah.');
    });
  }

  if (btnCopyMaster) {
    btnCopyMaster.addEventListener('click', () => {
      if (!currentMasterPromptText) return;

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(currentMasterPromptText).then(() => {
          animateCopySuccess();
        }).catch(() => {
          fallbackCopyText(currentMasterPromptText);
        });
      } else {
        fallbackCopyText(currentMasterPromptText);
      }
    });
  }

  function fallbackCopyText(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand('copy');
      animateCopySuccess();
    } catch (err) {
      alert('Gagal menyalin otomatis. Silakan blok dan salin secara manual.');
    }
    document.body.removeChild(ta);
  }

  function animateCopySuccess() {
    if (!btnCopyMaster) return;
    const oldHtml = btnCopyMaster.innerHTML;
    btnCopyMaster.classList.add('copied');
    btnCopyMaster.innerHTML = '<i class="fas fa-check"></i> <span>Tersalin ke Clipboard!</span>';
    showToast('Prompt Master disalin! Silakan tempel (paste) di ChatGPT atau Gemini.');

    setTimeout(() => {
      btnCopyMaster.classList.remove('copied');
      btnCopyMaster.innerHTML = oldHtml;
    }, 2800);
  }

  // Initial render
  renderGradeCards();
  renderCpAtp('tk');
});
