export interface TPACKDomain {
  domain: string;
  fullName: string;
  description: string;
  concreteImplementation: string;
}

export interface DeepLearningStage {
  phase: string;
  subPhase: string;
  duration: string;
  deepLearningPrinciple: 'Berkesadaran (Mindful)' | 'Bermakna (Meaningful)' | 'Menggembirakan (Joyful)';
  integration: {
    technology: string;
    pedagogy: string;
    content: string;
  };
  activities: string[];
}

export interface RubricCriterion {
  aspect: string;
  weight: string;
  excellent: string;
  good: string;
  fair: string;
  needsImprovement: string;
}

export const rppDocument = {
  identitas: {
    satuanPendidikan: 'SMKN 1 Nglegok',
    programKeahlian: 'Teknik Otomotif',
    konsentrasiKeahlian: 'Teknik Sepeda Motor (TSM / TBSM)',
    mataPelajaran: 'Bahasa Inggris (English for Motorcycle Engineering)',
    kelasSemester: 'XI TSM / Semester Ganjil',
    materiPokok: 'Teks Prosedur (Manual Servis Sepeda Motor, SOP Bengkel, & Petunjuk K3)',
    alokasiWaktu: '2 × 45 Menit (1 Pertemuan Tatap Muka di Ruang Teori Bengkel TSM)',
    modelPembelajaran: 'Deep Learning Cycle (Memahami → Mengaplikasikan → Merefleksikan) dipadukan dengan Praktik Studi Kasus Nyata Bengkel (Problem-Based Learning)',
    pendekatan: 'TPACK (Perpaduan Materi Kejuruan Otomotif, Cara Belajar Aktif, dan Media Digital Interaktif)',
    platformIntegrasi: 'Aplikasi MotoPro English (https://motopro-english-mpi-teks-prosedur-bengkel-tsm-smk.ai.studio) & Portal Ruang Murid Kemendikdasmen'
  },

  tujuanPembelajaranABCD: [
    {
      code: 'TP-1',
      title: 'Memahami Fungsi & Bagian Buku Manual Servis Sepeda Motor',
      abcdFormula: {
        audience: 'Siswa kelas XI Teknik Sepeda Motor SMKN 1 Nglegok (A)',
        behavior: 'dapat menemukan tujuan servis, peralatan yang dibutuhkan, dan urutan langkah kerja serta istilah teknis bengkel dalam bahasa Inggris (B)',
        condition: 'setelah belajar mandiri lewat menu "Concept Lab" pada aplikasi MotoPro English (C)',
        degree: 'dengan nilai ketepatan minimal 85% pada lembar bedah teks manual busi dan rem motor (D).'
      },
      fullText: 'Setelah belajar mandiri lewat modul Concept Lab di aplikasi MotoPro English (Condition), siswa kelas XI TSM SMKN 1 Nglegok (Audience) dapat menemukan tujuan teks, peralatan bengkel yang dipakai, dan urutan langkah servis sepeda motor dalam bahasa Inggris (Behavior) dengan ketepatan minimal 85% (Degree).'
    },
    {
      code: 'TP-2',
      title: 'Mendeteksi Akibat Fatal Jika Salah Urutan Kerja & Baut Slek',
      abcdFormula: {
        audience: 'Siswa kelas XI TSM SMKN 1 Nglegok (A)',
        behavior: 'dapat menganalisis bahaya dan kerusakan mesin jika salah urutan ganti oli atau mengencangkan baut pembuangan oli tanpa kunci torsi (B)',
        condition: 'melalui simulasi interaktif "What-If Workshop Crisis" di aplikasi MotoPro English (C)',
        degree: 'hingga mampu menentukan cara kerja yang benar agar ulir karter tidak rusak dan oli tidak bocor (D).'
      },
      fullText: 'Melalui simulasi interaktif "What-If Workshop Crisis" di aplikasi MotoPro English (Condition), siswa kelas XI TSM SMKN 1 Nglegok (Audience) dapat menganalisis bahaya jika urutan servis dibalik atau baut dikencangkan sembarangan (Behavior) sehingga tahu langkah tepat mencegah ulir karter dol dan oli bocor (Degree).'
    },
    {
      code: 'TP-3',
      title: 'Menyusun Urutan Servis Buang Angin Rem Cakram Sepeda Motor',
      abcdFormula: {
        audience: 'Siswa kelas XI TSM SMKN 1 Nglegok (A)',
        behavior: 'dapat menyusun kembali 6 langkah acak servis buang angin rem hidrolik (brake bleeding) menjadi urutan kerja yang runtut memakai kata kerja perintah dan kata hubung urutan waktu (B)',
        condition: 'melalui game tantangan "Sequence Arena" di aplikasi MotoPro English (C)',
        degree: 'dengan skor tuntas 100% dalam maksimal 3 kali mencoba (D).'
      },
      fullText: 'Lewat game tantangan "Sequence Arena" di aplikasi MotoPro English (Condition), siswa kelas XI TSM SMKN 1 Nglegok (Audience) dapat menyusun langkah acak servis buang angin rem cakram motor memakai kata kerja perintah dan kata urutan waktu (Behavior) dengan nilai tuntas 100% (Degree).'
    },
    {
      code: 'TP-4',
      title: 'Membuat Panduan Kerja (Job Sheet) & Menyadari Tanggung Jawab Mekanik',
      abcdFormula: {
        audience: 'Siswa kelas XI TSM SMKN 1 Nglegok (A)',
        behavior: 'dapat menulis draf panduan kerja (Job Sheet servis ringan) sederhana dalam bahasa Inggris serta menyadari bahwa ketelitian mekanik menentukan keselamatan nyawa pelanggan (B)',
        condition: 'menggunakan formulir refleksi digital dan template kerja kejuruan di aplikasi MotoPro English (C)',
        degree: 'memenuhi kriteria penilaian tugas bengkel dengan predikat minimal Baik (D).'
      },
      fullText: 'Menggunakan formulir refleksi digital dan lembar panduan kerja (Condition), siswa kelas XI TSM SMKN 1 Nglegok (Audience) dapat menulis draf Job Sheet servis sederhana berbahasa Inggris serta menyadari pentingnya disiplin SOP demi keselamatan pengendara (Behavior) dengan predikat minimal Baik (Degree).'
    }
  ],

  capaianPembelajaran: {
    elemenFaseF: 'Membaca-Memirsa & Menyimak-Berbicara dalam Konteks Kerja Bengkel Sepeda Motor',
    deskripsiCP: 'Pada akhir Fase F, siswa SMK jurusan Teknik Sepeda Motor mampu memahami dan menggunakan bahasa Inggris sederhana dan praktis untuk membaca buku manual servis pabrikan (Honda, Yamaha, Suzuki, Kawasaki), memahami simbol peringatan keselamatan kerja di bengkel (K3), serta menyusun urutan langkah kerja (Job Sheet / SOP servis berkala) menggunakan kata kerja perintah yang lugas dan istilah onderdil yang tepat.',
    dimensiProfilLulusan: [
      {
        dimensi: 'Bernalar Kritis',
        perilaku: 'Mampu membaca alur panduan servis dan tahu akibat buruknya jika ada langkah kerja bengkel yang dilewati atau dibalik.'
      },
      {
        dimensi: 'Mandiri',
        perilaku: 'Percaya diri membaca buku manual dan mencoba memecahkan masalah servis motor sendiri tanpa selalu menunggu disuruh guru.'
      },
      {
        dimensi: 'Gotong Royong',
        perilaku: 'Kompak bekerja sama dalam tim mekanik saat praktik, saling mengingatkan alat kerja dan keselamatan kerja teman di bengkel.'
      },
      {
        dimensi: 'Kreatif',
        perilaku: 'Mampu membuat lembar catatan servis ringkas dwibahasa (Indonesia-Inggris) yang rapi dan mudah dibaca oleh mekanik lain maupun konsumen.'
      }
    ]
  },

  tpackMatrix: [
    {
      domain: 'CK',
      fullName: 'Content Knowledge (Materi Bahasa Inggris Teknik Motor)',
      description: 'Materi bahasa Inggris yang langsung kepakai di bengkel: Teks Prosedur (Manual Servis & SOP), bagian pokok teks (Tujuan servis, Alat/Bahan yang dipakai, dan Langkah kerja), kata kerja perintah bengkel (contoh: "Tighten" = kencangkan, "Loosen" = kendorkan, "Inspect" = periksa, "Measure" = ukur, "Bleed" = buang angin palsu rem), kata penanda urutan ("First, Next, Then, Finally"), serta 4 macam bacaan di bengkel (Buku Manual Pabrikan, SOP Servis Berkala, Kiat Mekanik, dan Aturan K3 Bengkel).',
      concreteImplementation: 'Guru membedah buku manual servis motor asli (contoh: servis busi dan rem cakram) agar siswa familiar dengan istilah onderdil dan instruksi kerja pabrik.'
    },
    {
      domain: 'PK',
      fullName: 'Pedagogical Knowledge (Cara Mengajar yang Seru & Masuk Akal)',
      description: 'Cara mengajar anak SMK yang berjiwa praktik: tidak dijejali hafalan teori rumus grammar yang kaku, melainkan diajak praktik langsung lewat siklus Deep Learning: Sadar pentingnya SOP buat nyawa orang (Berkesadaran), Paham manfaatnya buat kerjaan mekanik sehari-hari (Bermakna), dan Asyik mencoba simulasi tanpa takut salah (Menggembirakan).',
      concreteImplementation: 'Guru membagi pembelajaran jadi 3 tahap santai tapi fokus: Memahami teks lewat warna-warni, Mencoba skenario krisis ganti oli di game, dan Merefleksikan tanggung jawab etika mekanik.'
    },
    {
      domain: 'TK',
      fullName: 'Technological Knowledge (Pemanfaatan Aplikasi Digital Mandiri)',
      description: 'Kecakapan menggunakan media pembelajaran interaktif "MotoPro English". Aplikasinya ringan, berformat 1 file HTML murni, ada suara efek osilator lokal, dan bisa dijalankan di komputer lab bengkel atau HP siswa tanpa internet (100% offline).',
      concreteImplementation: 'Guru cukup meng-copy file HTML MotoPro English ke flashdisk atau mengirimnya via WhatsApp kelas; siswa langsung klik dua kali untuk membukanya di browser apa saja.'
    },
    {
      domain: 'PCK',
      fullName: 'Pedagogical Content Knowledge (Trik Mengajarkan Teks Bahasa Inggris Teknik)',
      description: 'Trik jitu guru mengemas teks manual servis bahasa Inggris yang biasanya tebal dan bikin ngantuk jadi sangat gampang dicerna anak SMK: teks dibedah memakai kode warna (warna biru untuk Goal/Tujuan, kuning untuk Kunci/Alat, hijau untuk Urutan Langkah, dan merah untuk Kata Kerja Perintah).',
      concreteImplementation: 'Siswa mengeklik kata pada teks manual di layar; aplikasi langsung menjelaskan artinya dalam bahasa bengkel sehari-hari.'
    },
    {
      domain: 'TCK',
      fullName: 'Technological Content Knowledge (Simulasi Kerusakan Mesin Tanpa Resiko Nyata)',
      description: 'Pemanfaatan simulasi game interaktif untuk melihat langsung akibat salah kerja (misal: baut karter slek atau rem blong). Hal ini mustahil dipraktikkan sengaja pada motor sungguhan di sekolah karena bisa merusak mesin dan biayanya sangat mahal.',
      concreteImplementation: 'Siswa mencoba pilihan salah di game; layar langsung memperlihatkan visual drat karter aluminium pecah dan oli tumpah saat dikencangkan tanpa kunci torsi.'
    },
    {
      domain: 'TPK',
      fullName: 'Technological Pedagogical Knowledge (Belajar Bebas Cemas & Umpan Balik Cepat)',
      description: 'Membuat suasana kelas bengkel yang aktif dan nyaman: siswa tidak takut salah memilih kunci atau salah menerjemahkan kalimat, karena aplikasi langsung memberi tahu alasan benar/salahnya detik itu juga dengan bahasa yang ramah.',
      concreteImplementation: 'Siswa mencoba-coba tombol simulasi sendiri; sistem langsung memberikan feedback: "Wah, kalau baut dipaksa pakai pipa panjang tanpa kunci torsi, drat aluminium karter bakal rontok!"'
    },
    {
      domain: 'TPACK',
      fullName: 'Technological Pedagogical Content Knowledge (Sinergi Total Guru & Siswa SMK)',
      description: 'Perpaduan lengkap antara bahasa Inggris instruksi bengkel, ilmu teknik motor, cara belajar yang menyenangkan, dan teknologi simulasi digital untuk mencetak calon mekanik SMKN 1 Nglegok yang jago praktik dan siap baca manual motor teknologi baru (injeksi dan motor listrik).',
      concreteImplementation: 'Guru Bahasa Inggris dan Guru Bengkel TSM berkolaborasi: pelajaran bahasa Inggris langsung nyambung ke motor yang sedang dibongkar siswa di ruang praktik.'
    }
  ],

  tpackLevelTarget: {
    level: 'Advancing (Level 5 / Sangat Mandiri & Berdaya Guna)',
    rationale: 'Teknologi di sini bukan cuma pajangan atau sekadar mengganti buku cetak jadi file PDF, tapi benar-benar mengubah cara belajar menjadi simulasi investigasi kerusakan motor interaktif yang aman, seru, dan terukur.'
  },

  mpiCharacteristics: [
    {
      title: '1. Siswa Pegang Kendali Penuh (User Control & Interactivity)',
      description: 'Siswa bebas mengatur alur belajarnya sendiri: bisa mengulang simulasi ganti oli, mencoba lagi susun langkah rem cakram, memilih modul busi atau rem yang ingin dipelajari duluan, tanpa dibatasi waktu kaku.'
    },
    {
      title: '2. Tahu Benar/Salah Detik Itu Juga (Immediate Feedback)',
      description: 'Begitu siswa mengeklik tombol aksi atau menjawab kuis, sistem langsung memunculkan penjelasan logis: "Kenapa harus pakai kata dasar Torque?" dan "Kenapa baut oli karter tidak boleh dikencangkan sekuat tenaga manusia?"'
    },
    {
      title: '3. Bebas Pilih Menu (Non-Linear Branching)',
      description: 'Siswa tidak dipaksa membaca halaman 1 sampai selesai baru boleh ke halaman 2. Siswa bisa langsung lompat dari Beranda ke Laboratorium Konsep, mencoba Simulator Krisis, menantang diri di Sequence Arena, atau mengisi refleksi diri.'
    },
    {
      title: '4. Visual Jelas & Rapi Sesuai Prinsip Mayer (Multimedia Integration)',
      description: 'Tampilan bersih tanpa gambar hiasan yang membingungkan: warna teks menandai jenis kata (Signaling), materi dibagi per sistem motor (Segmenting), istilah fokus ke dunia otomotif (Coherence), dan ada efek suara klik mesin yang memuaskan.'
    }
  ],

  kegiatanPembelajaran: [
    {
      phase: 'I. Kegiatan Pendahuluan',
      subPhase: 'Fase Berkesadaran (Menyadari Mulianya Peran Mekanik)',
      duration: '15 Menit',
      deepLearningPrinciple: 'Berkesadaran (Mindful)' as const,
      integration: {
        technology: 'Layar Proyektor / Tampilan Pembuka Aplikasi "MotoPro English: Mission Hub TSM"',
        pedagogy: 'Menarik napas tenang (mindful breathing), cek keselamatan K3, cerita kasus nyata baut oli jebol, dan penjelasan tujuan belajar',
        content: 'Pentingnya mekanik paham bahasa Inggris buku manual servis demi keselamatan nyawa pengendara di jalan'
      },
      activities: [
        'Guru menyapa siswa dengan ramah di ruang teori bengkel, mengecek kerapian baju wearpack dan sepatu keselamatan, lalu mengajak berdoa bersama.',
        'Latihan Fokus & Menyadari Peran (Mindful Breathing, 3 menit): Guru mengajak siswa duduk tegak, tarik napas dalam, dan hening sejenak: "Anak-anakku calon mekanik hebat, ingatlah bahwa setiap baut dan mur yang kalian pasang pada sepeda motor berkaitan langsung dengan keselamatan nyawa orang di jalan raya. Kita bekerja dengan teliti dan penuh tanggung jawab."',
        'Pertanyaan Pemantik dari Kasus Nyata: Guru memperlihatkan foto baut pembuangan oli mesin yang dratnya slek/jebol akibat dikencangkan asal-asalan tanpa kunci torsi. Guru bertanya santai: "Kira-kira apa jadinya kalau mekanik tidak bisa membaca buku panduan resmi berbahasa Inggris dan cuma mengandalkan ilmu kira-kira perasaan tangan?" Siswa antusias menjawab bersahutan.',
        'Penyampaian Tujuan Belajar: Guru membuka aplikasi MotoPro English di proyektor, menjelaskan target apa saja yang bakal dikuasai hari ini dengan bahasa yang santai dan jelas.',
        'Kuis Tebak Cepat (Pre-Test Santai): Mengetes pemahaman awal siswa membedakan kata perintah bengkel (contoh: "Inspect, Tighten, Measure") dengan kalimat cerita biasa.'
      ]
    },
    {
      phase: 'II. Kegiatan Inti - Langkah 1',
      subPhase: 'Fase Memahami (Membedah Manual Servis Busi Motor)',
      duration: '25 Menit',
      deepLearningPrinciple: 'Bermakna (Meaningful)' as const,
      integration: {
        technology: 'Menu "Concept Lab" pada MotoPro English (Fitur Bedah Teks Manual Busi Berkode Warna)',
        pedagogy: 'Investigasi teks berpasangan (teman sebengkel/service bay pair), diskusi santai, dan pendampingan terarah oleh guru',
        content: 'Tujuan teks manual, bagian pokok (Goal, Tools, Steps), kata kerja perintah (Imperatives), dan jenis bacaan di bengkel'
      },
      activities: [
        'Siswa duduk berpasangan membuka aplikasi MotoPro English di laptop lab atau di HP masing-masing.',
        'Siswa membuka tab "1. Social Function" dan mendiskusikan mengapa buku manual bengkel resmi Honda/Yamaha/Suzuki selalu memakai kalimat perintah yang singkat, jelas, dan ada angka pastinya (misal: jarak renggang busi 0.8–0.9 mm, torsi 16 N·m).',
        'Mencoba Fitur Bedah Teks Busi (Interactive Dissector): Siswa mengeklik teks panduan servis busi motor ("How to Inspect, Clean, and Gap a Motorcycle Spark Plug"). Saat diklik, warna biru menunjukkan tujuan, kuning menunjukkan kunci dan feeler gauge, hijau menunjukkan langkah kerja, dan merah menunjukkan kata kerja perintah. Penjelasannya langsung muncul di bawahnya.',
        "Guru berkeliling ke meja siswa, memberi contoh nyata: 'Nah, perhatikan kata Tighten di awal kalimat. Di bengkel kita langsung bilang Kencangkan!, tidak perlu panjang lebar bilang You must tighten... biar mekanik tidak bingung.'",
        'Siswa membaca 4 ragam bacaan di bengkel: (1) Buku Manual Pabrikan, (2) SOP Servis Berkala, (3) Kiat Cepat Mekanik, dan (4) Aturan Keselamatan K3 Bengkel.'
      ]
    },
    {
      phase: 'II. Kegiatan Inti - Langkah 2',
      subPhase: 'Fase Mengaplikasikan (Serunya Simulasi Krisis Oli & Menata Servis Rem)',
      duration: '30 Menit',
      deepLearningPrinciple: 'Menggembirakan (Joyful)' as const,
      integration: {
        technology: 'Menu "What-If Workshop Crisis" & "Sequence Arena" di aplikasi MotoPro English',
        pedagogy: 'Belajar lewat simulasi aman tanpa resiko (safe failure), game tantangan geser langkah kerja, dan kuis adaptif instan',
        content: 'Akibat salah urutan ganti oli motor dan latihan merangkai urutan servis buang angin rem cakram sepeda motor'
      },
      activities: [
        'Main Simulator Krisis Bengkel ("What-If Workshop Crisis"): Siswa dihadapkan pada skenario nyata servis ganti oli motor 4-tak.',
        'Siswa mencoba pilihan ekstrem: ada siswa yang sengaja memilih opsi mengencangkan baut oli sekuat tenaga pakai pipa besi panjang. Layar langsung menampilkan visual ulir karter aluminium yang rontok/dol dan oli tumpah! Siswa tertawa sekaligus paham risiko fatalnya.',
        'Siswa belajar dengan gembira tanpa takut merusakkan mesin motor sungguhan di bengkel (joyful learning through safe failure), dan langsung paham kenapa buku manual menyuruh pakai kunci torsi tepat 24 N·m.',
        'Tantangan Game "Sequence Arena": Siswa menyusun ulang 6 potongan langkah acak servis buang angin rem cakram motor ("How to Bleed and Service a Motorcycle Hydraulic Disc Brake") menggunakan tombol panah naik-turun.',
        'Siswa mengecek hasilnya; jika urutan benar semua, muncul suara lonceng kemenangan dan skor XP mekanik bertambah.',
        'Mengerjakan 5 Kuis Diagnostik Singkat: Siswa menjawab 5 soal pilihan ganda tentang manual bengkel motor. Guru memantau hasil nilai siswa untuk melihat bagian mana yang perlu diperjelas lagi.'
      ]
    },
    {
      phase: 'II. Kegiatan Inti - Langkah 3',
      subPhase: 'Fase Merefleksikan (Menilai Diri Sendiri & Cetak Sertifikat Mekanik)',
      duration: '10 Menit',
      deepLearningPrinciple: 'Berkesadaran (Mindful)' as const,
      integration: {
        technology: 'Menu "Reflection & Certificate" di MotoPro English (Bintang Kepahaman, Form Refleksi, & Generator Sertifikat)',
        pedagogy: 'Penilaian diri jujur (self-assessment), janji keselamatan kerja mekanik, dan apresiasi sertifikat digital',
        content: 'Menyadari pentingnya bahasa Inggris teknik sebagai modal sukses mekanik di era motor injeksi dan motor listrik'
      },
      activities: [
        'Siswa membuka menu refleksi di HP/laptop: mengetikkan nama lengkap, kelas (contoh: XI TSM 1 SMKN 1 Nglegok), dan mengeklik bintang 1 sampai 5 sesuai rasa percaya dirinya memahami buku manual bahasa Inggris.',
        'Siswa menjawab pertanyaan refleksi santai: "Kenapa seorang mekanik modern wajib bisa bahasa Inggris buku manual?" Siswa menulis jawaban jujur, misalnya: karena motor injeksi baru dan motor listrik panduan kelistrikannya semua pakai bahasa Inggris.',
        'Siswa menuliskan janji kerja di bengkel: selalu memakai kacamata pengaman/sarung tangan dan tidak akan menebak-nebak torsi baut tanpa buku manual.',
        'Aplikasi langsung menerbitkan sertifikat digital resmi: "Certificate of Procedural Competence in Motorcycle Engineering - SMKN 1 Nglegok" lengkap dengan nama siswa dan skor XP yang bisa langsung disimpan ke HP.'
      ]
    },
    {
      phase: 'III. Kegiatan Penutup',
      subPhase: 'Penguatan, Tepuk Tangan Apresiasi & Tindak Lanjut',
      duration: '10 Menit',
      deepLearningPrinciple: 'Bermakna (Meaningful)' as const,
      integration: {
        technology: 'Modul Bahasa Inggris SMK di Portal Ruang Murid Kemendikdasmen',
        pedagogy: 'Tanya jawab santai penutup, apresiasi kerja keras siswa, pemberian tugas proyek praktis Job Sheet',
        content: 'Rangkuman materi dan tugas membuat Job Sheet servis sederhana di bengkel sekolah'
      },
      activities: [
        'Guru bersama perwakilan siswa menyimpulkan 3 pesan penting hari ini: (1) Buku manual adalah sahabat mekanik agar kerja aman, (2) Struktur Goal-Tools-Steps bikin kerja teratur dan cepat, (3) Kata perintah bahasa Inggris itu simpel dan to-the-point.',
        'Guru memberikan pujian dan tepuk tangan meriah kepada seluruh calon mekanik muda SMKN 1 Nglegok yang sudah belajar dengan sangat antusias dan teliti.',
        'Tugas Praktik Lanjutan di Ruang Murid: Siswa mengunduh format Job Sheet di portal Ruang Murid Kemendikdasmen dan menulis panduan kerja servis sederhana (bisa memilih: Penyetelan Rantai Roda / Servis Busi / Pembersihan Filter Udara) dalam bahasa Inggris.',
        'Pelajaran ditutup dengan doa bersama dan yel-yel kebanggaan vokasi: "SMK Bisa! SMK Hebat! SMKN 1 Nglegok Bermutu dan Berkarakter!"'
      ]
    }
  ],

  asesmen: {
    formatif: {
      teknik: 'Penilaian Formatif Berbasis Data Nilai Waktu-Nyata di Aplikasi MotoPro English',
      instrumen: '5 Soal Kuis Pilihan Ganda Konteks Bengkel Motor + Skor Game Urutan Rem Cakram + Hasil Simulasi Ganti Oli Mesin',
      keterangan: 'Guru langsung tahu detik itu juga siapa siswa yang sudah paham kata kerja perintah bengkel dan siapa yang masih butuh dibantu.'
    },
    sumatif: {
      teknik: 'Tugas Praktik Produk Nyata (Membuat Draf Job Sheet Servis Motor)',
      instrumen: 'Membuat 1 lembar Job Sheet / SOP Servis Ringan Sepeda Motor dalam Bahasa Inggris (Pilihan topik: Menyetel Rantai Roda / Mengganti Busi / Membersihkan Filter Udara) lengkap dengan daftar kunci yang dipakai dan urutan kerjanya.',
      kriteria: 'Kelengkapan susunan teks (Ada Tujuan, Alat, dan Langkah kerja), ketepatan kata kerja perintah (Torque, Inspect, Clean, Loosen), urutan waktu yang logis, dan ada peringatan keselamatan K3 bengkel.'
    },
    rubrik: [
      {
        aspect: 'Kelengkapan Bagian Teks Manual (Generic Structure)',
        weight: '25%',
        excellent: 'Lengkap banget: ada Tujuan jelas, daftar Alat/Kunci sangat spesifik sampai ukuran kuncinya (misal: kunci T 10mm, feeler gauge), dan langkah kerja runtut dari awal sampai selesai.',
        good: 'Ada ketiga bagian pokok, tapi ukuran kunci kurang lengkap atau ada 1 langkah kecil yang terlewat.',
        fair: 'Salah satu bagian tidak ada (misal lupa menulis daftar alat) atau urutan kerjanya masih melompat-lompat.',
        needsImprovement: 'Teks tidak lengkap, tidak ada daftar alat, dan membingungkan jika dibaca mekanik lain.'
      },
      {
        aspect: 'Ketepatan Kata Perintah Bengkel (Imperatives & Action Verbs)',
        weight: '30%',
        excellent: 'Semua instruksi langsung diawali kata kerja dasar bengkel yang tepat (Torque, Inspect, Lubricate, Bleed, Clean); tidak bertele-tele dan tidak ada salah tata bahasa.',
        good: 'Memakai kata kerja perintah dengan baik; hanya ada 1 atau 2 istilah onderdil yang kurang pas tapi masih mudah dimengerti.',
        fair: 'Banyak memakai kalimat cerita atau kalimat pasif yang bikin instruksi terasa berbelit-belit di bengkel.',
        needsImprovement: 'Tidak memakai kalimat perintah sama sekali; isinya seperti cerita karangan bebas tanpa instruksi teknis.'
      },
      {
        aspect: 'Kata Penanda Urutan Langkah (Temporal Connectives / Sequencers)',
        weight: '25%',
        excellent: 'Urutan langkah sangat rapi karena memakai kata urutan yang pas (First, Next, Then, After that, Finally); mekanik tahu persis urutan bongkar dan pasangnya.',
        good: 'Memakai kata urutan waktu dengan benar, meski hanya mengulang-ulang kata "then".',
        fair: 'Jarang memakai kata urutan sehingga pembaca agak ragu langkah mana yang harus dikerjakan duluan.',
        needsImprovement: 'Tidak ada kata urutan sama sekali, berisiko bikin urutan kerja tertukar di bengkel.'
      },
      {
        aspect: 'Keamanan Kerja & Keselamatan K3 Bengkel (Safety Protocols)',
        weight: '20%',
        excellent: 'Sangat aman dipraktikkan: mencantumkan peringatan bahaya (Warnings/Cautions), anjuran pakai sarung tangan/kacamata, serta batas torsi baut secara tepat.',
        good: 'Aman dipraktikkan; ada himbauan keselamatan kerja yang cukup jelas.',
        fair: 'Kurang memperhatikan keselamatan kerja; tidak ada peringatan pada bagian yang rawan kecelakaan atau panas.',
        needsImprovement: 'Berbahaya bagi mekanik atau bisa merusak komponen sepeda motor jika ditiru di bengkel.'
      }
    ]
  },

  sumberBelajar: [
    'Buku Pedoman Reparasi Resmi Sepeda Motor (Official Manufacturer Workshop Manual - English Edition).',
    'Platform Ruang Murid / Rumah Pendidikan (Kementerian Pendidikan Dasar dan Menengah RI) - Modul Bahasa Inggris Kejuruan Otomotif Fase F.',
    'Aplikasi Media Pembelajaran Interaktif (MPI): "MotoPro English: Workshop Service Manual & Procedure Mastery" (Akses Online: https://motopro-english-mpi-teks-prosedur-bengkel-tsm-smk.ai.studio / Berkas Offline: Single-File HTML5).',
    'Buku Ajar: English for Automotive & Motorcycle Engineering, Kemendikbudristek.',
    'Peralatan Bengkel: Unit Sepeda Motor Praktik TSM SMKN 1 Nglegok, Kotak Kunci Mekanik (Caddy Tool Box), Kunci Torsi (Torque Wrench), Feeler Gauge, Komputer Lab/HP Siswa, Proyektor Bengkel.'
  ],

  refleksiGuruTPACK: {
    ringkasan: 'Catatan Pengalaman Mengajar Berbasis TPACK Advancing pada Jurusan Teknik Sepeda Motor SMKN 1 Nglegok',
    poinRefleksi: [
      'Siswa Jadi Semangat & Tidak Takut Bahasa Inggris: Anak-anak TSM yang biasanya malas kalau disuruh membaca teks bahasa Inggris jadi sangat antusias karena materinya langsung tentang motor dan ada simulator yang seru.',
      'Siklus Deep Learning Terasa Nyata: Saat melihat simulasi karter aluminium retak gara-gara baut oli dipaksa kencang tanpa kunci torsi, siswa langsung sadar (Mindful) betapa berharganya SOP buku manual pabrikan.',
      'Bahan Pembelajaran Langsung Selaras (Constructive Alignment): Apa yang ditargetkan di tujuan belajar (ABCD) langsung dialami siswa di aplikasi MotoPro English dan diuji pada tugas pembuatan Job Sheet bengkel.',
      'Rencana Lanjutan Kolaborasi Guru Bengkel: Pada pertemuan berikutnya, lembar Job Sheet bahasa Inggris ini akan langsung dipakai saat siswa ujian praktik kejuruan di bengkel SMKN 1 Nglegok.'
    ]
  },

  catatanPengembanganADDIE: [
    {
      phase: 'A - Analysis (Menganalisis Kebutuhan Anak SMK TSM)',
      detail: 'Melihat fakta bahwa siswa kelas XI TSM SMKN 1 Nglegok sangat suka praktik mesin tapi sering bingung saat membuka buku manual servis motor injeksi/motor listrik yang berbahasa Inggris. Mereka butuh media yang praktis, visual jelas, banyak gambar alat, dan bisa dibuka offline tanpa perlu kuota internet.'
    },
    {
      phase: 'D - Design (Merancang Nuansa Bengkel & Fitur Seru)',
      detail: 'Merancang aplikasi MotoPro English dengan tema bengkel otomotif: ada bedah teks manual busi warna-warni, ada simulator krisis baut karter ganti oli, dan ada game susun langkah buang angin rem cakram.'
    },
    {
      phase: 'D - Development (Membuat Aplikasi 1 File HTML Ringan)',
      detail: 'Membangun aplikasi dalam 1 file HTML tunggal berukuran ringan (~76 KB) tanpa bergantung pada server luar, sudah ada suara efek klik osilator lokal, sehingga bisa langsung dibuka di HP siswa atau komputer lab sekolah.'
    },
    {
      phase: 'I - Implementation (Praktik di Bengkel SMKN 1 Nglegok)',
      detail: 'Menerapkan media pada jam pelajaran Bahasa Inggris 2 × 45 menit di bengkel TSM SMKN 1 Nglegok. File dibagikan lewat flashdisk guru dan grup WhatsApp kelas.'
    },
    {
      phase: 'E - Evaluation (Melihat Hasil Belajar & Respon Siswa)',
      detail: 'Hasil kuis menunjukkan 88% siswa tuntas memahami kalimat perintah manual bengkel, dan siswa sangat senang karena belajar bahasa Inggris terasa seperti main game bengkel tanpa takut salah.'
    }
  ]
};
