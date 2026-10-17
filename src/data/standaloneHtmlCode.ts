export const STANDALONE_MPI_HTML_FILE = `/procedure_text_mpi.html`;

export const STANDALONE_MPI_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MotoPro English: Interactive Learning Media (Procedure Text for Motorcycle Workshop TSM - SMKN 1 Nglegok)</title>
  <!--
    =============================================================================
    MEDIA PEMBELAJARAN INTERAKTIF (MPI) - BAHASA INGGRIS KELAS XI (FASE F)
    Aplikasi       : MotoPro English (motopro-english-mpi-teks-prosedur-bengkel-tsm-smk.ai.studio)
    Satuan / Jurusan: SMKN 1 Nglegok / Teknik Sepeda Motor (TSM / TBSM)
    Materi Pokok   : Procedure Text (Motorcycle Service Manuals, Maintenance SOP, & Troubleshooting)
    Kerangka Kerja : TPACK (Advancing Level 5) & Deep Learning Cycle (Mindful, Meaningful, Joyful)
    Teknis         : Single-File Pure HTML5, CSS3, & Vanilla JavaScript (Zero External CDN)
    Instruksi Guru : Cukup klik ganda (double-click) file ini untuk membuka di browser apa pun.
                     100% Offline Mode (tanpa kuota internet) & sinkron dengan RPP Kurikulum Merdeka.
    =============================================================================
  -->
  <style>
    :root {
      --primary: #0284c7;
      --primary-dark: #0369a1;
      --primary-light: #e0f2fe;
      --accent: #059669;
      --accent-light: #d1fae5;
      --warning: #d97706;
      --warning-light: #fef3c7;
      --danger: #dc2626;
      --danger-light: #fee2e2;
      --neutral-50: #f8fafc;
      --neutral-100: #f1f5f9;
      --neutral-200: #e2e8f0;
      --neutral-300: #cbd5e1;
      --neutral-600: #475569;
      --neutral-700: #334155;
      --neutral-800: #1e293b;
      --neutral-900: #0f172a;
      --surface: #ffffff;
      --radius: 12px;
      --radius-sm: 8px;
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
      --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04);
      --transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
      background-color: var(--neutral-50);
      color: var(--neutral-800);
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .topbar {
      background-color: var(--surface);
      border-bottom: 1px solid var(--neutral-200);
      position: sticky;
      top: 0;
      z-index: 50;
      padding: 0.75rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    .brand-wrap { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; color: var(--neutral-900); }
    .brand-icon {
      width: 36px; height: 36px; background: var(--primary); color: white;
      border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 1.1rem;
    }
    .brand-text h1 { font-size: 1.1rem; font-weight: 700; }
    .brand-meta { font-size: 0.75rem; color: var(--neutral-600); }
    .nav-links { display: flex; align-items: center; gap: 0.5rem; overflow-x: auto; }
    .nav-btn {
      background: transparent; border: 1px solid transparent; padding: 0.45rem 0.85rem;
      border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 600; color: var(--neutral-600);
      cursor: pointer; white-space: nowrap; transition: var(--transition);
    }
    .nav-btn:hover { background-color: var(--neutral-100); color: var(--neutral-900); }
    .nav-btn.active { background-color: var(--primary-light); color: var(--primary-dark); border-color: var(--primary); }
    .top-stats { display: flex; align-items: center; gap: 0.75rem; font-size: 0.8rem; font-weight: 600; }
    .stat-badge {
      display: flex; align-items: center; gap: 0.35rem; background: var(--neutral-100);
      border: 1px solid var(--neutral-200); padding: 0.3rem 0.65rem; border-radius: 999px;
    }
    .container { max-width: 1120px; margin: 0 auto; padding: 1.5rem 1rem 3rem 1rem; width: 100%; flex: 1; }
    .screen { display: none; }
    .screen.active { display: block; }
    .hero-box {
      background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: white;
      border-radius: var(--radius); padding: 2.25rem 2rem; margin-bottom: 2rem; box-shadow: var(--shadow-lg);
    }
    .hero-box h2 { font-size: 1.85rem; font-weight: 800; margin-bottom: 0.5rem; }
    .hero-box p { font-size: 1rem; color: rgba(255, 255, 255, 0.9); margin-bottom: 1.5rem; }
    .hero-badges { display: flex; flex-wrap: wrap; gap: 0.6rem; font-size: 0.8rem; }
    .hero-chip {
      background: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.25);
      padding: 0.25rem 0.75rem; border-radius: 999px; font-weight: 500;
    }
    .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 1.5rem; }
    .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 1.5rem; }
    .card {
      background: var(--surface); border: 1px solid var(--neutral-200); border-radius: var(--radius);
      padding: 1.5rem; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;
    }
    .card-title { font-size: 1.15rem; font-weight: 700; color: var(--neutral-900); margin-bottom: 0.5rem; }
    .card-desc { font-size: 0.9rem; color: var(--neutral-600); margin-bottom: 1rem; flex: 1; }
    .btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
      padding: 0.6rem 1.25rem; border-radius: var(--radius-sm); font-size: 0.9rem; font-weight: 600;
      cursor: pointer; transition: var(--transition); border: 1px solid transparent; text-decoration: none;
    }
    .btn-primary { background: var(--primary); color: white; }
    .btn-primary:hover { background: var(--primary-dark); }
    .btn-secondary { background: var(--neutral-100); color: var(--neutral-800); border-color: var(--neutral-200); }
    .btn-accent { background: var(--accent); color: white; }
    .tab-bar { display: flex; gap: 0.5rem; border-bottom: 1px solid var(--neutral-200); padding-bottom: 0.5rem; margin-bottom: 1.5rem; overflow-x: auto; }
    .subtab-btn {
      background: transparent; border: none; padding: 0.5rem 1rem; font-size: 0.9rem; font-weight: 600;
      color: var(--neutral-600); cursor: pointer; border-radius: var(--radius-sm);
    }
    .subtab-btn.active { background: var(--neutral-200); color: var(--neutral-900); }
    .highlightable { padding: 0.15rem 0.35rem; border-radius: 4px; cursor: pointer; }
    .highlight-goal { background: #e0f2fe; border-bottom: 2px solid #0284c7; }
    .highlight-mat { background: #fef3c7; border-bottom: 2px solid #d97706; }
    .highlight-step { background: #d1fae5; border-bottom: 2px solid #059669; }
    .highlight-imp { background: #fee2e2; border-bottom: 2px solid #dc2626; font-weight: 600; }
    .highlight-seq { background: #f3e8ff; border-bottom: 2px solid #9333ea; font-weight: 600; }
    .sim-device-visual {
      background: var(--neutral-100); border: 2px dashed var(--neutral-300); border-radius: var(--radius);
      padding: 1.5rem; text-align: center; margin-bottom: 1.5rem;
    }
    .sim-option-btn {
      text-align: left; background: var(--surface); border: 1px solid var(--neutral-300);
      padding: 1rem 1.25rem; border-radius: var(--radius-sm); font-size: 0.95rem; cursor: pointer;
      display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 0.5rem;
    }
    .sim-feedback { padding: 1rem; border-radius: var(--radius-sm); font-size: 0.9rem; margin-top: 1rem; display: none; }
    .seq-item {
      background: var(--surface); border: 1px solid var(--neutral-300); border-radius: var(--radius-sm);
      padding: 0.75rem 1rem; font-size: 0.9rem; font-weight: 500; display: flex; align-items: center;
      justify-content: space-between; gap: 0.75rem; margin-bottom: 0.5rem;
    }
    .quiz-card { background: var(--surface); border: 1px solid var(--neutral-200); border-radius: var(--radius); padding: 1.75rem; margin-bottom: 1.5rem; }
    .quiz-question { font-size: 1.1rem; font-weight: 700; color: var(--neutral-900); margin-bottom: 1.25rem; }
    .quiz-option {
      background: var(--neutral-50); border: 1px solid var(--neutral-200); border-radius: var(--radius-sm);
      padding: 0.85rem 1.15rem; font-size: 0.92rem; cursor: pointer; display: flex; align-items: flex-start;
      gap: 0.75rem; text-align: left; width: 100%; margin-bottom: 0.5rem;
    }
    .quiz-option.selected-correct { background: var(--accent-light); border-color: var(--accent); color: #065f46; font-weight: 600; }
    .quiz-option.selected-wrong { background: var(--danger-light); border-color: var(--danger); color: #991b1b; font-weight: 600; }
    .quiz-explanation { padding: 1rem 1.25rem; border-radius: var(--radius-sm); font-size: 0.88rem; margin-top: 1rem; display: none; }
    .reflection-form { background: var(--surface); border: 1px solid var(--neutral-200); border-radius: var(--radius); padding: 2rem; }
    .form-group { margin-bottom: 1.5rem; }
    .form-label { display: block; font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem; }
    .form-input, .form-textarea { width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--neutral-300); border-radius: var(--radius-sm); font-family: inherit; font-size: 0.95rem; }
    .star-rating { display: flex; gap: 0.5rem; font-size: 1.75rem; cursor: pointer; }
    .star { color: var(--neutral-300); }
    .star.active { color: #f59e0b; }
    .certificate-card {
      background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%); border: 2px solid var(--neutral-300);
      border-radius: var(--radius); padding: 2.5rem 2rem; text-align: center; margin-top: 2rem; display: none;
    }
    .cert-seal { width: 64px; height: 64px; margin: 0 auto 1rem auto; background: #0284c7; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; }
  </style>
</head>
<body>
  <header class="topbar">
    <div class="brand-wrap">
      <div class="brand-icon">🏍️</div>
      <div class="brand-text">
        <h1>MotoPro English</h1>
        <div class="brand-meta">English for Motorcycle Workshop · Grade XI TSM · SMKN 1 Nglegok</div>
      </div>
    </div>
    <nav class="nav-links" id="mainNav">
      <button class="nav-btn active" onclick="navigateTo('screen-home')">01 Mission Hub</button>
      <button class="nav-btn" onclick="navigateTo('screen-concept')">02 Concept Lab</button>
      <button class="nav-btn" onclick="navigateTo('screen-branching')">03 What-If Simulator</button>
      <button class="nav-btn" onclick="navigateTo('screen-builder')">04 Sequence Challenge</button>
      <button class="nav-btn" onclick="navigateTo('screen-quiz')">05 Adaptive Quiz</button>
      <button class="nav-btn" onclick="navigateTo('screen-reflect')">06 Reflection & Cert</button>
    </nav>
    <div class="top-stats">
      <div class="stat-badge">XP: <span id="scoreDisplay" style="font-weight: 700; color: var(--primary);">0</span></div>
    </div>
  </header>
  <main class="container">
    <section id="screen-home" class="screen active">
      <div class="hero-box">
        <h2>Mastering Motorcycle Workshop Service Manuals & Procedure Texts</h2>
        <p>Welcome to MotoPro English! Precision, chronological order, and imperative clarity are the lifeblood of a master motorcycle mechanic at SMKN 1 Nglegok. From interpreting factory workshop manuals (Honda/Yamaha/Suzuki/Kawasaki) and torquing fasteners to bleeding hydraulic disc brakes, explore how English empowers your professional mechanical career!</p>
        <div class="hero-badges">
          <span class="hero-chip">🏫 SMKN 1 Nglegok</span>
          <span class="hero-chip">🏍️ Jurusan: Teknik Sepeda Motor (TSM)</span>
          <span class="hero-chip">🎯 Deep Learning: Berkesadaran, Bermakna, Menggembirakan</span>
          <span class="hero-chip">⚙️ TPACK: Advancing Tier</span>
          <span class="hero-chip">⏱️ Duration: 2 × 45 Mins</span>
          <span class="hero-chip">🌐 motopro-english-mpi-teks-prosedur-bengkel-tsm-smk.ai.studio</span>
        </div>
      </div>
      <div class="grid-3">
        <div class="card">
          <div class="card-title">📖 Service Manual Anatomy</div>
          <p class="card-desc">Deep dive into Social Function, Generic Structure (Goal-Tools-Steps), and Imperatives with the authentic Spark Plug SOP.</p>
          <button class="btn btn-primary" onclick="navigateTo('screen-concept')">Launch Concept Lab →</button>
        </div>
        <div class="card">
          <div class="card-title">⚡ "What-If" Crisis Simulator</div>
          <p class="card-desc">What happens if you overtighten the drain bolt without a torque wrench? Test your decision-making in the Engine Oil Crisis.</p>
          <button class="btn btn-accent" onclick="navigateTo('screen-branching')">Enter Simulator →</button>
        </div>
        <div class="card">
          <div class="card-title">🧪 Brake Bleeding Sequence Arena</div>
          <p class="card-desc">Arrange scrambled hydraulic brake servicing steps into exact chronological order with real-time feedback.</p>
          <button class="btn btn-secondary" onclick="navigateTo('screen-builder')">Play Challenge →</button>
        </div>
      </div>
    </section>
    <!-- Screen 2: Concept Lab -->
    <section id="screen-concept" class="screen">
      <div style="margin-bottom: 1rem;">
        <h2 style="font-size: 1.5rem; font-weight: 800;">Concept Laboratory</h2>
      </div>
      <div class="tab-bar">
        <button class="subtab-btn active" onclick="switchConceptTab('tab-function')">Social Function</button>
        <button class="subtab-btn" onclick="switchConceptTab('tab-structure')">Generic Structure</button>
        <button class="subtab-btn" onclick="switchConceptTab('tab-language')">Language Features</button>
      </div>
      <div id="tab-function" class="concept-tab-content">
        <div class="card">
          <h3 class="card-title">🌟 Communicative Purpose in the Workshop</h3>
          <p class="card-desc">To guide motorcycle mechanics step-by-step so repairs meet factory standards, engines last long, and riders stay safe on the road.</p>
        </div>
      </div>
      <div id="tab-structure" class="concept-tab-content" style="display: none;">
        <div class="card">
          <h3 class="card-title">🔧 Anatomy of Service Manuals</h3>
          <p class="card-desc">1. Goal (e.g. How to Inspect & Gap Spark Plug) · 2. Tools (16mm socket, feeler gauge 0.85mm) · 3. Steps (Torque to 16 N·m).</p>
        </div>
      </div>
      <div id="tab-language" class="concept-tab-content" style="display: none;">
        <div class="card">
          <h3 class="card-title">🔤 Mechanic Language Features</h3>
          <p class="card-desc">Imperative commands (Torque, Inspect, Clean, Bleed), Temporal sequencers (First, Next, Finally), and precise measurement numbers.</p>
        </div>
      </div>
    </section>
    <!-- Screen 3: Branching Simulator -->
    <section id="screen-branching" class="screen">
      <div class="card">
        <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 1rem;">"What-If" Workshop Crisis Simulator</h2>
        <div class="sim-device-visual" id="simVisual">
          <div style="font-size: 2.5rem;" id="simEmoji">🏍️🛢️</div>
          <h4 id="simStatusHeading">Motorcycle Oil Service</h4>
          <p id="simStatusDesc">What is your immediate action when draining warm engine oil?</p>
        </div>
        <div id="simOptionsContainer"></div>
        <div class="sim-feedback" id="simFeedbackBox"></div>
        <div style="margin-top: 1rem;">
          <button class="btn btn-secondary" onclick="restartSimulator()">🔄 Reset</button>
          <button class="btn btn-primary" id="simNextBtn" style="display: none;" onclick="advanceSimulator()">Next →</button>
        </div>
      </div>
    </section>
    <!-- Screen 4: Sequence Arena -->
    <section id="screen-builder" class="screen">
      <div class="card">
        <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 1rem;">Sequence Arena: Motorcycle Disc Brake Bleeding</h2>
        <p class="card-desc">Order the steps: "How to Bleed and Service a Motorcycle Hydraulic Disc Brake".</p>
        <div id="stepListContainer"></div>
        <div style="margin-top: 1rem; display: flex; gap: 0.5rem; align-items: center;">
          <button class="btn btn-accent" onclick="checkSequenceOrder()">✅ Check Order</button>
          <button class="btn btn-secondary" onclick="resetSequenceOrder()">🔀 Scramble</button>
          <span id="sequenceFeedback" style="font-weight: 600;"></span>
        </div>
      </div>
    </section>
    <!-- Screen 5: Quiz -->
    <section id="screen-quiz" class="screen">
      <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 1rem;">Adaptive Mastery Quiz: Motorcycle Engineering</h2>
      <div id="quizContainer"></div>
      <div class="card" id="quizSummaryCard" style="display: none; text-align: center;">
        <h3>Quiz Finished! Score: <span id="finalQuizScore"></span></h3>
        <button class="btn btn-primary" style="margin-top: 1rem;" onclick="navigateTo('screen-reflect')">Proceed to Reflection →</button>
      </div>
    </section>
    <!-- Screen 6: Reflection & Certificate -->
    <section id="screen-reflect" class="screen">
      <div class="reflection-form">
        <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 1rem;">Reflection & Certificate</h2>
        <div class="form-group">
          <label class="form-label">Full Name:</label>
          <input type="text" id="studentName" class="form-input" placeholder="Your Name" />
        </div>
        <div class="form-group">
          <label class="form-label">Confidence Rating:</label>
          <div class="star-rating" id="starContainer">
            <span class="star active" onclick="setRating(1)">★</span>
            <span class="star active" onclick="setRating(2)">★</span>
            <span class="star active" onclick="setRating(3)">★</span>
            <span class="star active" onclick="setRating(4)">★</span>
            <span class="star" onclick="setRating(5)">★</span>
          </div>
        </div>
        <button class="btn btn-primary" onclick="generateCertificate()">🎓 Generate Certificate</button>
      </div>
      <div class="certificate-card" id="certificateCard">
        <div class="cert-seal">🏆</div>
        <h3>Certificate of Procedural Competence in Motorcycle Engineering</h3>
        <h2 id="certStudentName" style="color: var(--primary); margin: 0.5rem 0;">Student</h2>
        <p>Mastered Procedure Text: Motorcycle Workshop SOP & Manuals - Grade XI TSM SMKN 1 Nglegok (TPACK Advancing Level)</p>
        <button class="btn btn-secondary" style="margin-top: 1rem;" onclick="window.print()">🖨️ Print Certificate</button>
      </div>
    </section>
  </main>
  <script>
    const state = { score: 0, simStep: 0, quizAnswers: {}, quizScore: 0, currentRating: 4 };
    function navigateTo(id) {
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      document.querySelectorAll('#mainNav .nav-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('onclick').includes(id));
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function switchConceptTab(id) {
      document.querySelectorAll('.concept-tab-content').forEach(c => c.style.display = 'none');
      document.querySelectorAll('.subtab-btn').forEach(b => b.classList.remove('active'));
      document.getElementById(id).style.display = 'block';
      event.target.classList.add('active');
    }
    const simStages = [
      {
        title: "Stage 1", status: "Motorcycle warm on center stand!", emoji: "🏍️🛢️",
        options: [
          { text: "Unscrew drain bolt with bare hands after hot race", feedback: "❌ Scalding oil burns! Always wear workshop gloves.", ok: false },
          { text: "Unscrew 12mm bolt over drain pan with gloves", feedback: "✅ Great! Warm oil drains contaminants suspended cleanly.", ok: true }
        ]
      },
      {
        title: "Stage 2", status: "Drain bolt installation", emoji: "🔧⚙️",
        options: [
          { text: "Overtighten with 50cm breaker bar using body weight", feedback: "❌ Stripped soft aluminum crankcase threads!", ok: false },
          { text: "Install new crush washer, thread by hand, torque to 24 N·m", feedback: "✅ Perfect! Exact torque ensures leak-free seal safely.", ok: true }
        ]
      }
    ];
    function renderSimulatorStage() {
      const st = simStages[state.simStep];
      document.getElementById('simStatusHeading').textContent = st.status;
      document.getElementById('simEmoji').textContent = st.emoji;
      const c = document.getElementById('simOptionsContainer');
      c.innerHTML = '';
      st.options.forEach((opt) => {
        const b = document.createElement('button');
        b.className = 'sim-option-btn';
        b.textContent = opt.text;
        b.onclick = () => {
          const fb = document.getElementById('simFeedbackBox');
          fb.textContent = opt.feedback;
          fb.style.display = 'block';
          fb.style.background = opt.ok ? '#d1fae5' : '#fee2e2';
          if (opt.ok) { state.score += 25; document.getElementById('scoreDisplay').textContent = state.score; }
          document.getElementById('simNextBtn').style.display = 'inline-flex';
        };
        c.appendChild(b);
      });
      document.getElementById('simFeedbackBox').style.display = 'none';
      document.getElementById('simNextBtn').style.display = 'none';
    }
    function advanceSimulator() {
      if (state.simStep < simStages.length - 1) { state.simStep++; renderSimulatorStage(); }
      else { navigateTo('screen-builder'); }
    }
    function restartSimulator() { state.simStep = 0; renderSimulatorStage(); }
    const steps = [
      { id: 1, text: "Position motorcycle on center stand and protect fairings with shop rags." },
      { id: 2, text: "Remove master cylinder cap and top up with clean DOT 4 brake fluid." },
      { id: 3, text: "Attach clear bleeder hose to caliper nipple and submerge in catch jar." },
      { id: 4, text: "Pump brake lever 3-4 times, then hold firmly against handlebar." },
      { id: 5, text: "Crack open bleed valve quarter-turn to expel air, then close before releasing lever." },
      { id: 6, text: "Repeat until air-free, torque nipple to 6 N·m, and secure reservoir cap." }
    ];
    let curSteps = [...steps].sort(() => Math.random() - 0.5);
    function renderSteps() {
      const c = document.getElementById('stepListContainer');
      c.innerHTML = '';
      curSteps.forEach((s, idx) => {
        const d = document.createElement('div');
        d.className = 'seq-item';
        d.innerHTML = \`<span>\${idx + 1}. \${s.text}</span>
          <div>
            <button class="btn btn-secondary" onclick="swapStep(\${idx}, -1)" \${idx===0?'disabled':''}>▲</button>
            <button class="btn btn-secondary" onclick="swapStep(\${idx}, 1)" \${idx===curSteps.length-1?'disabled':''}>▼</button>
          </div>\`;
        c.appendChild(d);
      });
    }
    function swapStep(i, dir) {
      const t = i + dir; if (t<0 || t>=curSteps.length) return;
      [curSteps[i], curSteps[t]] = [curSteps[t], curSteps[i]];
      renderSteps();
    }
    function checkSequenceOrder() {
      const ok = curSteps.every((s, i) => s.id === i + 1);
      const fb = document.getElementById('sequenceFeedback');
      fb.textContent = ok ? "🎉 100% Correct Sequence!" : "⚠️ Some steps are still out of order.";
      fb.style.color = ok ? "var(--accent)" : "var(--danger)";
      if (ok) { state.score += 30; document.getElementById('scoreDisplay').textContent = state.score; }
    }
    function resetSequenceOrder() { curSteps.sort(() => Math.random() - 0.5); renderSteps(); document.getElementById('sequenceFeedback').textContent = ''; }
    const quiz = [
      { q: "What is the primary function of a motorcycle service manual?", opts: ["To narrate road trips", "To provide standardized sequential repair instructions and torque specs", "To sell new helmets"], ans: 1 },
      { q: "Which imperative command is correct in a brake service procedure?", opts: ["You should torque", "Torque caliper mounting bolts to 30 N·m with a torque wrench", "Braking quickly"], ans: 1 },
      { q: "Why must the brake bleed valve be closed BEFORE releasing the lever?", opts: ["To save battery", "To prevent air from being sucked back into the caliper", "To change fluid color"], ans: 1 }
    ];
    function renderQuiz() {
      const c = document.getElementById('quizContainer');
      c.innerHTML = '';
      quiz.forEach((item, qi) => {
        const d = document.createElement('div');
        d.className = 'quiz-card';
        d.innerHTML = \`<h4>\${qi+1}. \${item.q}</h4><div id="qopt_\${qi}"></div>\`;
        c.appendChild(d);
        const optC = d.querySelector(\`#qopt_\${qi}\`);
        item.opts.forEach((op, oi) => {
          const btn = document.createElement('button');
          btn.className = 'quiz-option';
          btn.textContent = op;
          btn.onclick = () => {
            if (state.quizAnswers[qi] !== undefined) return;
            state.quizAnswers[qi] = oi;
            const isCorrect = (oi === item.ans);
            btn.classList.add(isCorrect ? 'selected-correct' : 'selected-wrong');
            if (isCorrect) { state.quizScore++; state.score += 20; document.getElementById('scoreDisplay').textContent = state.score; }
            if (Object.keys(state.quizAnswers).length === quiz.length) {
              document.getElementById('quizSummaryCard').style.display = 'block';
              document.getElementById('finalQuizScore').textContent = \`\${state.quizScore}/\${quiz.length}\`;
            }
          };
          optC.appendChild(btn);
        });
      });
    }
    function setRating(v) {
      state.currentRating = v;
      document.querySelectorAll('#starContainer .star').forEach((s, i) => s.classList.toggle('active', i < v));
    }
    function generateCertificate() {
      const name = document.getElementById('studentName').value || 'Student Scholar';
      document.getElementById('certStudentName').textContent = name;
      document.getElementById('certificateCard').style.display = 'block';
    }
    renderSimulatorStage();
    renderSteps();
    renderQuiz();
  </script>
</body>
</html>`;
