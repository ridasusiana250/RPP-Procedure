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
    satuanPendidikan: 'SMA / SMK Negeri Indonesia (Fase F)',
    mataPelajaran: 'Bahasa Inggris',
    kelasSemester: 'XI (Sebelas) / Ganjil',
    materiPokok: 'Procedure Text (Recipes, Manuals, Lifehacks, Protocols)',
    alokasiWaktu: '2 × 45 Menit (1 Pertemuan Tatap Muka / Blended)',
    modelPembelajaran: 'Deep Learning Cycle (Memahami → Mengaplikasi → Merefleksi) dipadukan Problem-Based Learning (PBL) & Scenario Branching Simulation',
    pendekatan: 'TPACK (Technological Pedagogical Content Knowledge) - Advancing Level',
    platformIntegrasi: 'Ruang Murid / Rumah Pendidikan (Kemendikdasmen) & Standalone Web-Based MPI'
  },

  tujuanPembelajaranABCD: [
    {
      code: 'TP-1',
      title: 'Analisis Fungsi Sosial & Struktur Teks (Social Function & Generic Structure)',
      abcdFormula: {
        audience: 'Peserta didik kelas XI (A)',
        behavior: 'mampu menganalisis fungsi sosial, struktur teks (Goal, Materials, Steps), dan target audiens dari 4 variasi teks prosedur (B)',
        condition: 'setelah mengeksplorasi secara mandiri modul interaktif "Concept Lab" pada Media Pembelajaran Interaktif (MPI) ProcedureCraft (C)',
        degree: 'dengan tingkat ketepatan minimal 85% pada lembar bedah teks interaktif (D).'
      },
      fullText: 'Melalui eksplorasi mandiri pada Concept Lab di MPI ProcedureCraft (Condition), peserta didik kelas XI (Audience) mampu menganalisis fungsi sosial, struktur teks (Goal, Materials, Steps), dan target audiens dari 4 variasi teks prosedur (Behavior) dengan tingkat ketepatan minimal 85% (Degree).'
    },
    {
      code: 'TP-2',
      title: 'Evaluasi Kausalitas & Skenario Percabangan (Branching & Cause-Effect Reasoning)',
      abcdFormula: {
        audience: 'Peserta didik kelas XI (A)',
        behavior: 'mampu mendeteksi dan mengevaluasi konsekuensi logis dari penghilangan atau pembalikan urutan langkah (chronological misstep) (B)',
        condition: 'melalui simulasi percabangan "What-If Crisis Lab: The Waterlogged Smartphone Rescue" pada MPI (C)',
        degree: 'dengan menghasilkan rekomendasi penyelamatan perangkat yang tepat tanpa memicu short-circuit (D).'
      },
      fullText: 'Melalui simulasi percabangan "What-If Crisis Lab" pada MPI (Condition), peserta didik kelas XI (Audience) mampu mendeteksi dan mengevaluasi konsekuensi logis akibat langkah yang terbalik atau terlewat (Behavior) hingga berhasil menyelamatkan perangkat tanpa kerusakan komponen (Degree).'
    },
    {
      code: 'TP-3',
      title: 'Penerapan Kaidah Kebahasaan (Language Features)',
      abcdFormula: {
        audience: 'Peserta didik kelas XI (A)',
        behavior: 'mampu menyusun kembali langkah-langkah acak menjadi urutan kronologis yang padu menggunakan imperative sentences, action verbs, dan temporal sequencers (B)',
        condition: 'melalui tantangan interaktif "Chronological Sequence Arena" pada MPI (C)',
        degree: 'dengan perolehan skor ketuntasan 100% dalam maksimal 3 kali percobaan (D).'
      },
      fullText: 'Melalui tantangan "Sequence Arena" pada MPI (Condition), peserta didik kelas XI (Audience) mampu menyusun kembali instruksi acak menggunakan kalimat imperatif dan konjungsi temporal secara kohesif (Behavior) dengan ketuntasan 100% dalam maksimal 3 kali percobaan (Degree).'
    },
    {
      code: 'TP-4',
      title: 'Kreasi & Refleksi Metakognitif (Production & Digital Synthesis)',
      abcdFormula: {
        audience: 'Peserta didik kelas XI (A)',
        behavior: 'mampu memproduksi draf teks prosedur kontekstual berbasis kearifan lokal/solusi digital nyata serta merefleksikan kebermanfaatan proses belajar (B)',
        condition: 'menggunakan instrumen refleksi digital dan formulir umpan balik analitik pada MPI (C)',
        degree: 'memenuhi seluruh rubrik penilaian HOTS (kelengkapan struktur, ketepatan gramatikal imperatif, dan kejelasan instruksi) dengan predikat minimal Baik (D).'
      },
      fullText: 'Menggunakan formulir refleksi dan penugasan proyek kontekstual (Condition), peserta didik kelas XI (Audience) mampu memproduksi draf teks prosedur otentik dan merefleksikan proses belajarnya (Behavior) dengan predikat minimal Baik sesuai rubrik asesmen HOTS (Degree).'
    }
  ],

  capaianPembelajaran: {
    elemenFaseF: 'Menyimak-Berbicara (Listening-Speaking) & Membaca-Memirsa (Reading-Viewing)',
    deskripsiCP: 'Pada akhir Fase F, peserta didik menggunakan teks lisan, tulisan, dan visual dalam bahasa Inggris untuk berkomunikasi sesuai dengan situasi, tujuan, dan pemirsa/pembacanya. Berbagai jenis teks seperti narasi, deskripsi, eksposisi, prosedur, telaah, dan diskusi menjadi rujukan utama dalam mempelajari bahasa Inggris pada fase ini. Peserta didik menggunakan bahasa Inggris untuk berdiskusi dan menyampaikan keinginan/perasaan. Peserta didik memproduksi teks dengan struktur organisasi yang jelas dan kaidah kebahasaan yang tepat.',
    dimensiProfilLulusan: [
      {
        dimensi: 'Bernalar Kritis',
        perilaku: 'Menganalisis sebab-akibat ketika instruksi prosedur tidak dipatuhi dan mengevaluasi efektivitas kata kerja tindakan dalam memandu pengguna.'
      },
      {
        dimensi: 'Mandiri',
        perilaku: 'Mengatur ritme belajar sendiri (self-paced learning) melalui navigasi non-linear MPI dan melakukan penilaian diri (self-reflection).'
      },
      {
        dimensi: 'Gotong Royong',
        perilaku: 'Berdiskusi dan berkolaborasi dalam memecahkan skenario simulasi darurat prosedur bersama rekan sebangku.'
      },
      {
        dimensi: 'Kreatif',
        perilaku: 'Menghasilkan rancangan teks prosedur alternatif yang solutif untuk permasalahan sehari-hari peserta didik.'
      }
    ]
  },

  tpackMatrix: [
    {
      domain: 'CK',
      fullName: 'Content Knowledge (Pengetahuan Konten)',
      description: 'Penguasaan mendalam materi Bahasa Inggris terkait teks prosedur: Definisi, Fungsi Sosial (memberikan petunjuk runtut untuk mencapai hasil), Generic Structure (Goal, Materials/Tools, Steps/Methods), Kaidah Kebahasaan (Imperatives, Action Verbs, Temporal Conjunctions/Sequencers, Adverbials), serta 4 klasifikasi (Recipes, Manuals, Lifehacks, Protocols).',
      concreteImplementation: 'Guru membedah teks otentik (resep herbal nusantara Wedang Jahe dan manual darurat smartphone) dengan menyoroti akurasi istilah linguistik tanpa miskonsepsi.'
    },
    {
      domain: 'PK',
      fullName: 'Pedagogical Knowledge (Pengetahuan Pedagogi)',
      description: 'Pemahaman tentang teori belajar kognitif, konstruktivisme, scaffolding, active learning, dan siklus Deep Learning (Berkesadaran, Bermakna, Menggembirakan: Memahami → Mengaplikasi → Merefleksi) yang dipadukan dengan teknik bertanya sokratik dan gamifikasi edukatif.',
      concreteImplementation: 'Guru menerapkan diferensiasi proses: membagi fase orientasi kesadaran belajar, membimbing eksplorasi mandiri, dan memfasilitasi peer-discussion saat menganalisis hasil kuis.'
    },
    {
      domain: 'TK',
      fullName: 'Technological Knowledge (Pengetahuan Teknologi)',
      description: 'Kecakapan mengoperasikan teknologi digital: Media Pembelajaran Interaktif (MPI) single-file HTML5/CSS/JS mandiri, browser modern, web audio synthesizer, platform Ruang Murid Kemendikdasmen, dan proyektor kelas.',
      concreteImplementation: 'Guru mengelola distribusi file MPI baik secara daring via Ruang Murid maupun luring (offline) via flashdisk / local server tanpa kendala dependensi eksternal.'
    },
    {
      domain: 'PCK',
      fullName: 'Pedagogical Content Knowledge (Pedagogi + Konten)',
      description: 'Strategi mengajar konsep teks prosedur secara efektif: mengubah instruksi abstrak menjadi aktivitas interaktif visual, memandu murid dari identifikasi unsur kata (mikro) ke pemahaman tujuan komunikatif (makro).',
      concreteImplementation: 'Guru menyajikan dekonstruksi teks model beranotasi warna (color-coded text anatomy) agar konsep gramatikal imperatif mudah dipahami oleh berbagai gaya belajar murid.'
    },
    {
      domain: 'TCK',
      fullName: 'Technological Content Knowledge (Teknologi + Konten)',
      description: 'Pemanfaatan fitur teknologi digital untuk merepresentasikan esensi materi prosedur yang tidak mungkin dilakukan buku cetak biasa, seperti percabangan sebab-akibat (branching logic) dan simulasi kesalahan langkah.',
      concreteImplementation: 'Menggunakan simulator digital "What-If" di mana sistem memvisualisasikan animasi korsleting listrik bila urutan penanganan hp basah terbalik, membuktikan sifat mutlak "chronological order".'
    },
    {
      domain: 'TPK',
      fullName: 'Technological Pedagogical Knowledge (Teknologi + Pedagogi)',
      description: 'Penggunaan teknologi untuk menciptakan pengalaman pedagogis yang student-centered: umpan balik langsung (immediate feedback), navigasi non-linear mandiri, dan pengumpulan analitik formatif real-time.',
      concreteImplementation: 'Siswa belajar sesuai kecepatan masing-masing (pacing mandiri) tanpa rasa takut salah karena sistem MPI memberikan penjelasan pedagogis ramah setiap kali ada opsi yang keliru.'
    },
    {
      domain: 'TPACK',
      fullName: 'Technological Pedagogical Content Knowledge (Sinergi Utuh)',
      description: 'Integrasi holistik di mana teknologi, pedagogi mendalam, dan materi bahasa Inggris menyatu mulus untuk mentransformasi pengalaman belajar dari penerimaan pasif menjadi eksplorasi kritis yang memberdayakan.',
      concreteImplementation: 'Guru bertindak sebagai fasilitator orkestrasi: memadukan refleksi berkesadaran (deep learning), analitik diagnostic quiz MPI (TPK), eksperimentasi branching prosedur otentik (TCK), dan verifikasi bahasa Inggris kontekstual (PCK).'
    }
  ],

  tpackLevelTarget: {
    level: 'Advancing (Level 5 / Tertinggi)',
    rationale: 'Teknologi tidak sekadar menggantikan media kertas (Substitution/Augmentation), melainkan mentransformasi tugas belajar (Redefinition). Murid bereksperimen dengan pohon keputusan (decision trees), menerima feedback linguistik instan yang dipersonalisasi, dan guru memanfaatkan analitik kuis real-time untuk diferensiasi intervensi.'
  },

  mpiCharacteristics: [
    {
      title: '1. Interaktivitas (User Control)',
      description: 'Peserta didik memegang kendali penuh atas navigasi: bebas menentukan kecepatan membaca, memutar ulang audio efek, memilih urutan modul yang ingin dipelajari, dan mengulang simulasi krisis berkali-kali tanpa batas.'
    },
    {
      title: '2. Feedback Langsung (Immediate Feedback)',
      description: 'Setiap kali memilih opsi pada simulasi percabangan atau menjawab butir kuis adaptif, sistem seketika memberikan alasan pedagogis linguistik spesifik (bukan sekadar "Benar/Salah", tetapi "Mengapa kalimat tersebut tergolong imperatif atau mengapa langkah tersebut membakar sirkuit").'
    },
    {
      title: '3. Non-Linearitas (Branching Navigation)',
      description: 'Struktur media tidak memaksa siswa berjalan linier slide 1-2-3. Siswa dapat melompat dari Mission Hub ke Concept Lab, mencoba What-If Simulator, berpindah ke Sequence Arena, atau mengecek Kuis Adaptif sesuai kesiapan kognitif mereka.'
    },
    {
      title: '4. Integrasi Multimedia (Prinsip Kognitif Mayer)',
      description: 'Menerapkan Signaling Principle (penandaan warna teks untuk Goal, Materials, Steps, Imperatives), Segmenting Principle (materi dibagi ke dalam tab ringkas), Coherence Principle (bebas dari dekorasi gambar yang mengganggu fokus kognitif), dan Web Audio API untuk konfirmasi auditori subtil.'
    }
  ],

  kegiatanPembelajaran: [
    {
      phase: 'I. Kegiatan Pendahuluan',
      subPhase: 'Tahap Berkesadaran (Mindful Awakening)',
      duration: '15 Menit',
      deepLearningPrinciple: 'Berkesadaran (Mindful)' as const,
      integration: {
        technology: 'Layar Proyektor / Tampilan Pembuka MPI "ProcedureCraft: Mission Hub"',
        pedagogy: 'Koneksi emosional, pertanyaan pemantik sokratik, mindfulness breathing, penjelasan tujuan ABCD',
        content: 'Konsep awal pentingnya prosedur dalam mencegah bahaya dan mencapai efisiensi'
      },
      activities: [
        'Guru membuka kelas dengan salam, memeriksa kesiapan fisik dan ruang kelas, dilanjutkan doa bersama (Beriman & Bertakwa).',
        'Mindful Breathing Moment (2 menit): Guru mengajak murid duduk tegak, menarik napas dalam, dan memfokuskan kesadaran penuh pada kehadiran diri di ruang belajar hari ini.',
        'Apersepsi Kontekstual & Video/Stori Pemantik: "Pernahkah kalian membeli perabot atau merakit gadget baru tanpa membaca petunjuk? Apa akibatnya?" Murid menceritakan pengalaman pribadi (baut tertukar, ponsel eror, masakan gosong).',
        'Orientasi Tujuan Pembelajaran ABCD: Guru menampilkan layar "Mission Hub" pada MPI dan mengomunikasikan formula ABCD tujuan pembelajaran dengan bahasa yang jelas dan memotivasi.',
        'Pemberian Pre-test Singkat/Diagnostik Awal: Mengetahui pemahaman awal murid mengenai perbedaan imperative vs descriptive sentence.'
      ]
    },
    {
      phase: 'II. Kegiatan Inti - Langkah 1',
      subPhase: 'Tahap Memahami (Meaningful Understanding)',
      duration: '25 Menit',
      deepLearningPrinciple: 'Bermakna (Meaningful)' as const,
      integration: {
        technology: 'Modul "Concept Lab" MPI (Interactive Color-Coded Dissector & Subtab Navigator)',
        pedagogy: 'Inquiry-based exploration, scaffolded concept breakdown, collaborative pair-discussion',
        content: 'Social Function, Generic Structure (Goal-Material-Step), Language Features (Imperatives, Action Verbs, Connectives), 4 Types'
      },
      activities: [
        'Siswa secara berpasangan membuka MPI di perangkat masing-masing (atau mengakses layar sentuh kelas/komputer lab).',
        'Siswa mengeksplorasi tab "1. Social Function" dan mendiskusikan mengapa teks prosedur menggunakan bahasa yang objektif dan lugas dibanding teks cerita naratif.',
        'Eksplorasi Fitur Anatomi Interaktif (Interactive Dissector): Siswa mengeklik teks "Wedang Jahe" pada MPI. Setiap klik pada bagian Goal, Ingredients, Imperatives, dan Temporal Sequencers akan memunculkan penjelasan fungsi gramatikalnya.',
        'Guru berkeliling memberikan scaffolding (bimbingan terarah) bagi kelompok yang membutuhkan penguatan perbedaan kata kerja dasar (bare infinitive) dengan bentuk gerund/past tense.',
        'Siswa mengidentifikasi 4 jenis teks prosedur (Recipes, Manuals, Lifehacks, Protocols) dan mengaitkannya dengan dokumen otentik di kehidupan sehari-hari.'
      ]
    },
    {
      phase: 'II. Kegiatan Inti - Langkah 2',
      subPhase: 'Tahap Mengaplikasi (Joyful Hands-On Application)',
      duration: '30 Menit',
      deepLearningPrinciple: 'Menggembirakan (Joyful)' as const,
      integration: {
        technology: 'Modul "What-If Simulator" & "Sequence Arena" pada MPI',
        pedagogy: 'Problem-solving simulation, gamified decision tree, immediate feedback loop, experiential learning',
        content: 'Evaluasi konsekuensi salah langkah dan penyusunan urutan instruksi kronologis yang kohesif'
      },
      activities: [
        'Misi Simulasi Krisis ("What-If Crisis Lab"): Siswa masuk ke simulasi penyelamatan smartphone basah. Siswa dihadapkan pada 3 tahapan kritis. Jika mereka memilih menghidupkan hp atau mengeringkan dengan hair dryer bersuhu tinggi, simulator menampilkan visual kerusakan sirkuit dan ledakan baterai.',
        'Siswa merasakan kegembiraan belajar berbasis konsekuensi nyata (joyful learning through safe failure) dan menyimpulkan mengapa urutan logis (chronological order) bersifat mutlak dalam teks prosedur.',
        'Tantangan "Sequence Arena": Siswa menyusun ulang 6 potongan langkah mengganti ban mobil bocor ("How to Safely Replace a Flat Tire") yang teracak menggunakan tombol swap interaktif.',
        'Siswa mengecek validasi urutan; sistem menghitung skor XP seketika dan memberikan audio feedback.',
        'Pengerjaan "Adaptive Mastery Quiz": Siswa menyelesaikan 5 soal HOTS berbobot di layar 5. Guru memantau dashboard analitik formatif untuk melihat tingkat penguasaan kelas pada tiap aspek kompetensi.'
      ]
    },
    {
      phase: 'II. Kegiatan Inti - Langkah 3',
      subPhase: 'Tahap Merefleksi (Reflective Synthesis)',
      duration: '10 Menit',
      deepLearningPrinciple: 'Berkesadaran (Mindful)' as const,
      integration: {
        technology: 'Modul "Reflection & Certificate" MPI (Digital Star-Rating, Metacognitive Prompts & Badge Generator)',
        pedagogy: 'Metacognitive self-assessment, consolidation, connecting learning to real life',
        content: 'Internalisasi kaidah prosedur dan kesadaran berpikir terstruktur dalam pemecahan masalah'
      },
      activities: [
        'Siswa mengisi instrumen refleksi digital di MPI: menuliskan nama lengkap, memberi peringkat kepercayaan diri pemahaman imperatif (1-5 bintang), dan menuliskan 1 hal paling berkesan dari simulasi.',
        'Siswa merumuskan rencana aksi nyata: satu situasi di rumah/sekolah di mana mereka akan menuliskan instruksi prosedur yang jelas (misal: panduan streaming live OSIS, resep bekal sehat, protokol keselamatan lab kimia).',
        'Sistem menerbitkan sertifikat digital interaktif ("Certificate of Procedural Competence") berisikan perolehan XP dan capaian TPACK Advancing yang dapat disimpan/dicetak siswa sebagai portofolio belajar.'
      ]
    },
    {
      phase: 'III. Kegiatan Penutup',
      subPhase: 'Penguatan, Apresiasi & Tindak Lanjut',
      duration: '10 Menit',
      deepLearningPrinciple: 'Bermakna (Meaningful)' as const,
      integration: {
        technology: 'Tautan Tugas Rumah Pendidikan / Ruang Murid Kemendikdasmen',
        pedagogy: 'Whole-class debrief, positive reinforcement, homework extension',
        content: 'Rangkuman holistik materi dan penugasan proyek otentik mandiri'
      },
      activities: [
        'Guru bersama 2 perwakilan siswa menyimpulkan 3 poin kunci pembelajaran hari ini: (1) Esensi fungsi sosial teks prosedur, (2) Formula anatomi Goal-Materials-Steps, (3) Kekuatan kalimat imperatif dan konjungsi temporal.',
        'Guru memberikan apresiasi kepada seluruh murid atas antusiasme dan partisipasi aktif selama simulasi krisis.',
        'Tindak Lanjut & Penugasan Berdiferensiasi di Ruang Murid: Siswa diminta mengunggah draf teks prosedur sederhana kreasi sendiri (Resep masakan khas daerah, tips produktivitas belajar, atau manual aplikasi ponsel) ke LMS Ruang Murid Kemendikdasmen.',
        'Kelas ditutup dengan doa bersama dan salam penutup yang hangat.'
      ]
    }
  ],

  asesmen: {
    formatif: {
      teknik: 'Asesmen Formatif Berbasis Data Analitik MPI (Real-Time Performance Data)',
      instrumen: '5 Soal Adaptif Pilihan Ganda Bernalar Kritis + Skor Ketuntasan Sequence Arena + Catatan Log Simulator',
      keterangan: 'Memberikan data diagnostik langsung per butir indikator (Fungsi Sosial, Struktur Teks, Kalimat Imperatif, Konjungsi Temporal, Analisis Kausalitas HOTS).'
    },
    sumatif: {
      teknik: 'Penilaian Produk Otentik (Authentic Writing Task) & Portofolio Digital',
      instrumen: 'Tugas penulisan 1 teks prosedur kontekstual (Pilihan: Recipe khas daerah / Tech User Guide / School Safety Protocol) dilengkapi infografis atau diagram alur langkah.',
      kriteria: 'Kelengkapan generik teks (Goal, Materials, Steps), ketepatan tata bahasa imperatif & temporal markers, kejelasan instruksi, serta kemenarikan sajian visual.'
    },
    rubrik: [
      {
        aspect: 'Kelengkapan Struktur Teks (Generic Structure)',
        weight: '25%',
        excellent: 'Memuat Goal, Materials/Ingredients secara rinci dengan ukuran tepat, dan Steps tersusun secara runtut dan lengkap.',
        good: 'Memuat ketiga komponen pokok, namun rincian bahan/alat kurang spesifik atau ada 1 langkah minor terlewat.',
        fair: 'Salah satu komponen utama tidak dicantumkan (misal tidak ada daftar materials) atau urutan langkah kurang logis.',
        needsImprovement: 'Struktur teks tidak lengkap dan urutan langkah membingungkan pembaca.'
      },
      {
        aspect: 'Kaidah Kebahasaan (Imperatives & Action Verbs)',
        weight: '30%',
        excellent: 'Menggunakan kalimat imperatif (bare infinitive) secara konsisten dan akurat; pemilihan action verbs sangat tepat dan variatif.',
        good: 'Menggunakan kalimat imperatif dengan baik; terdapat 1-2 kesalahan kecil pemilihan kata kerja yang tidak mengganggu makna.',
        fair: 'Terdapat campuran kalimat deskriptif dan imperatif yang membingungkan atau banyak kesalahan bentuk kata kerja.',
        needsImprovement: 'Tidak menerapkan kaidah imperatif; kalimat instruksi ditulis dalam bentuk narasi atau percakapan acak.'
      },
      {
        aspect: 'Penanda Urutan Kronologis (Temporal Connectives)',
        weight: '25%',
        excellent: 'Menggunakan ragam konjungsi temporal (First, Next, Then, After that, Finally) secara tepat sehingga transisi antar-langkah sangat kohesif.',
        good: 'Menggunakan konjungsi temporal dengan tepat namun variasinya terbatas (pengulangan kata "then").',
        fair: 'Konjungsi temporal minim digunakan atau penempatannya kurang sesuai dengan urutan waktu.',
        needsImprovement: 'Tidak ada penanda urutan kronologis sama sekali sehingga urutan waktu sulit dipahami.'
      },
      {
        aspect: 'Kejelasan & Nilai Aplikatif (Clarity & Usability)',
        weight: '20%',
        excellent: 'Instruksi sangat mudah dipraktikkan tanpa ambiguitas; disertai tips keselamatan/kualitas hasil yang bernilai tinggi.',
        good: 'Instruksi jelas dan dapat diikuti dengan aman; hasil akhir dapat dicapai dengan baik.',
        fair: 'Instruksi agak ambigu di beberapa bagian sehingga berisiko menimbulkan kesalahan penerapan.',
        needsImprovement: 'Instruksi sangat tidak jelas dan berisiko membahayakan atau menggagalkan hasil bila dipraktikkan.'
      }
    ]
  },

  sumberBelajar: [
    'Platform Ruang Murid / Rumah Pendidikan (Kementerian Pendidikan Dasar dan Menengah RI) - Modul Bahasa Inggris Fase F.',
    'Media Pembelajaran Interaktif (MPI) Mandiri: "ProcedureCraft" (Single-file HTML5, CSS, JS, Audio Synthesizer).',
    'Buku Teks Utama: Bahasa Inggris Tingkat Lanjut / English for Change Kelas XI, Kemendikbudristek.',
    'Dokumen Prosedur Otentik: Buku panduan smartphone, resep kuliner nusantara, poster K3 laboratorium sekolah.',
    'Perangkat: Laptop/Komputer, Smartphone, LCD Proyektor, Speaker kelas (opsional), Jaringan Internet / File Offline.'
  ],

  refleksiGuruTPACK: {
    ringkasan: 'Analisis Transformasi Pembelajaran Berbasis Level TPACK Advancing',
    poinRefleksi: [
      'Level TPACK: Pembelajaran berada pada level Advancing karena teknologi tidak sekadar menjadi media penyampai materi statis, melainkan menjadi laboratorium simulasi kausalitas di mana siswa mengeksplorasi cabang keputusan dan mengalami akibat logisnya secara langsung.',
      'Siklus Deep Learning: Integrasi fase Berkesadaran (mindfulness & pemahaman tujuan), Bermakna (kontekstualisasi hp basah & ban bocor), dan Menggembirakan (interaktivitas tanpa kecemasan penilaian) terbukti meningkatkan retensi memori siswa terhadap kaidah kebahasaan imperatif.',
      'Constructive Alignment: Terdapat keselarasan lurus antara Tujuan Pembelajaran ABCD, materi di Concept Lab, skenario di What-If Simulator, soal di Adaptive Quiz, hingga rubrik penulisan tugas sumatif.',
      'Rencana Perbaikan: Untuk pertemuan selanjutnya, diferensiasi konten dapat diperkaya dengan menyediakan opsi skenario simulasi sesuai minat jurusan (misal: prosedur coding untuk RPL/TKJ, prosedur kuliner untuk Tata Boga, prosedur keselamatan mesin untuk Otomotif).'
    ]
  },

  catatanPengembanganADDIE: [
    {
      phase: 'A - Analysis (Analisis)',
      detail: 'Menganalisis kebutuhan siswa kelas XI: kesulitan membedakan teks imperatif dengan kalimat pasif/deskriptif, serta seringnya mengabaikan urutan kronologis saat menulis instruksi. Mengidentifikasi kendala akses internet di sekolah sehingga media wajib dapat dijalankan 100% offline dalam bentuk single file.'
    },
    {
      phase: 'D - Design (Perancangan)',
      detail: 'Merancang arsitektur non-linear dengan 6 layar: Mission Hub, Concept Lab (dissector visual), What-If Branching Lab, Sequence Arena, Adaptive Quiz, dan Reflection Certificate. Menerapkan Mayer Cognitive Theory of Multimedia Learning (signaling, segmenting, coherence).'
    },
    {
      phase: 'D - Development (Pengembangan)',
      detail: 'Mengembangkan media dalam satu file utuh (single-file HTML) menggunakan HTML5 semantik, CSS Flex/Grid modern yang responsif mobile/desktop, Vanilla JS untuk logika percabangan pohon keputusan dan kalkulator analitik, serta Web Audio API untuk efek suara sintetis tanpa aset eksternal.'
    },
    {
      phase: 'I - Implementation (Implementasi)',
      detail: 'Mengujicobakan media dalam kelas 2 × 45 menit dengan alur Deep Learning (Memahami → Mengaplikasi → Merefleksi). Media didistribusikan via platform Ruang Murid Kemendikdasmen dan salinan luring pada komputer laboratorium sekolah.'
    },
    {
      phase: 'E - Evaluation (Evaluasi)',
      detail: 'Mengevaluasi hasil capaian belajar melalui data log analitik kuis (ketuntasan >85%) dan refleksi metakognitif siswa. Siswa melaporkan antusiasme tinggi karena tidak merasa dihakimi ketika salah memilih opsi pada simulator krisis.'
    }
  ]
};
