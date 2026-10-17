import React, { useState } from 'react';
import { rppDocument } from '../data/rppData';
import { 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Layers, 
  Clock, 
  GraduationCap, 
  Cpu, 
  Copy, 
  Check, 
  Printer, 
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  Brain,
  HelpCircle
} from 'lucide-react';

export const RPPView: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('sec-identitas');

  const copyRPPAsText = () => {
    let text = `RENCANA PELAKSANAAN PEMBELAJARAN (RPP) BERBASIS TPACK & DEEP LEARNING\n`;
    text += `Mata Pelajaran: ${rppDocument.identitas.mataPelajaran}\n`;
    text += `Kelas/Semester: ${rppDocument.identitas.kelasSemester}\n`;
    text += `Materi Pokok: ${rppDocument.identitas.materiPokok}\n`;
    text += `Alokasi Waktu: ${rppDocument.identitas.alokasiWaktu}\n\n`;

    text += `A. IDENTITAS PEMBELAJARAN\n`;
    text += `Satuan Pendidikan: ${rppDocument.identitas.satuanPendidikan}\n`;
    text += `Model: ${rppDocument.identitas.modelPembelajaran}\n`;
    text += `Pendekatan: ${rppDocument.identitas.pendekatan}\n\n`;

    text += `B. TUJUAN PEMBELAJARAN (FORMULA ABCD)\n`;
    rppDocument.tujuanPembelajaranABCD.forEach((tp) => {
      text += `${tp.code}: ${tp.fullText}\n`;
      text += `  - Audience: ${tp.abcdFormula.audience}\n`;
      text += `  - Behavior: ${tp.abcdFormula.behavior}\n`;
      text += `  - Condition: ${tp.abcdFormula.condition}\n`;
      text += `  - Degree: ${tp.abcdFormula.degree}\n\n`;
    });

    text += `C. CAPAIAN PEMBELAJARAN & PROFIL LULUSAN\n`;
    text += `Elemen: ${rppDocument.capaianPembelajaran.elemenFaseF}\n`;
    text += `${rppDocument.capaianPembelajaran.deskripsiCP}\n\n`;

    text += `D. INTEGRASI KERANGKA TPACK (LEVEL TARGET: ${rppDocument.tpackLevelTarget.level})\n`;
    rppDocument.tpackMatrix.forEach((d) => {
      text += `[${d.domain}] ${d.fullName}\n`;
      text += `Deskripsi: ${d.description}\n`;
      text += `Wujud di Kelas: ${d.concreteImplementation}\n\n`;
    });

    text += `E. MEDIA PEMBELAJARAN INTERAKTIF (MPI)\n`;
    rppDocument.mpiCharacteristics.forEach((c) => {
      text += `${c.title}\n${c.description}\n\n`;
    });

    text += `F. KEGIATAN PEMBELAJARAN (SIKLUS DEEP LEARNING)\n`;
    rppDocument.kegiatanPembelajaran.forEach((k) => {
      text += `[${k.phase} - ${k.subPhase} (${k.duration})] - Prinsip: ${k.deepLearningPrinciple}\n`;
      text += `Teknologi: ${k.integration.technology} | Pedagogi: ${k.integration.pedagogy} | Konten: ${k.integration.content}\n`;
      k.activities.forEach((act) => {
        text += `• ${act}\n`;
      });
      text += `\n`;
    });

    text += `G. ASESMEN & RUBRIK\n`;
    text += `Formatif: ${rppDocument.asesmen.formatif.teknik} (${rppDocument.asesmen.formatif.instrumen})\n`;
    text += `Sumatif: ${rppDocument.asesmen.sumatif.teknik} (${rppDocument.asesmen.sumatif.instrumen})\n\n`;

    text += `H. SUMBER BELAJAR & PERALATAN\n`;
    rppDocument.sumberBelajar.forEach((s) => {
      text += `• ${s}\n`;
    });

    text += `\nI. REFLEKSI GURU\n`;
    rppDocument.refleksiGuruTPACK.poinRefleksi.forEach((r) => {
      text += `• ${r}\n`;
    });

    text += `\nJ. CATATAN PENGEMBANGAN ADDIE\n`;
    rppDocument.catatanPengembanganADDIE.forEach((a) => {
      text += `• ${a.phase}: ${a.detail}\n`;
    });

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Banner */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
              <span>OUTPUT 1</span>
              <span>·</span>
              <span>KURIKULUM MERDEKA (FASE F)</span>
              <span>·</span>
              <span className="text-emerald-700 font-semibold">TPACK ADVANCING</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Rencana Pelaksanaan Pembelajaran (RPP) Berbasis TPACK & Deep Learning
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Model pembelajaran mendalam (Mindful, Meaningful, Joyful) terintegrasi dengan Media Pembelajaran Interaktif (MPI) mandiri untuk penguasaan Teks Prosedur Bahasa Inggris Kelas XI.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={copyRPPAsText}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin ke Clipboard!' : 'Salin Teks Lengkap'}</span>
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sticky Table of Contents */}
        <aside className="lg:col-span-3">
          <div className="sticky top-24 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Daftar Isi RPP
            </h2>
            <nav className="flex flex-col gap-1 text-xs font-medium">
              {[
                { id: 'sec-identitas', label: 'A. Identitas Pembelajaran' },
                { id: 'sec-tujuan', label: 'B. Tujuan Formula ABCD' },
                { id: 'sec-cp', label: 'C. Capaian & Profil Lulusan' },
                { id: 'sec-tpack', label: 'D. 7 Domain Kerangka TPACK' },
                { id: 'sec-mpi', label: 'E. Karakteristik MPI' },
                { id: 'sec-kegiatan', label: 'F. Kegiatan Deep Learning' },
                { id: 'sec-asesmen', label: 'G. Asesmen & Rubrik' },
                { id: 'sec-sumber', label: 'H. Sumber Belajar & Alat' },
                { id: 'sec-refleksi', label: 'I. Refleksi Guru TPACK' },
                { id: 'sec-addie', label: 'J. Catatan Model ADDIE' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-2.5 py-2 rounded-lg transition-colors flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-sky-50 text-sky-800 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span className="truncate">{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="text-[11px] text-slate-500 leading-relaxed">
                <span className="font-semibold text-slate-700">Target Level TPACK:</span>
                <div className="mt-1 text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Advancing (Level 5)</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Document Content */}
        <main className="lg:col-span-9 space-y-8">
          
          {/* SECTION A: IDENTITAS */}
          <section id="sec-identitas" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-24">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <span className="w-7 h-7 bg-sky-100 text-sky-800 rounded-lg flex items-center justify-center font-bold text-xs">
                A
              </span>
              <h2 className="text-lg font-bold text-slate-900">Identitas Pembelajaran</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 font-medium block">Satuan Pendidikan</span>
                <span className="font-semibold text-slate-800">{rppDocument.identitas.satuanPendidikan}</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 font-medium block">Mata Pelajaran & Fase</span>
                <span className="font-semibold text-slate-800">{rppDocument.identitas.mataPelajaran} (Fase F)</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 font-medium block">Kelas / Semester</span>
                <span className="font-semibold text-slate-800">{rppDocument.identitas.kelasSemester}</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 font-medium block">Alokasi Waktu</span>
                <span className="font-semibold text-slate-800">{rppDocument.identitas.alokasiWaktu}</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 sm:col-span-2">
                <span className="text-xs text-slate-500 font-medium block">Materi Pokok</span>
                <span className="font-semibold text-slate-800">{rppDocument.identitas.materiPokok}</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 sm:col-span-2">
                <span className="text-xs text-slate-500 font-medium block">Model & Pendekatan Pembelajaran</span>
                <span className="font-semibold text-slate-800">{rppDocument.identitas.modelPembelajaran}</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 sm:col-span-2">
                <span className="text-xs text-slate-500 font-medium block">Platform & Ekosistem Digital</span>
                <span className="font-semibold text-slate-800">{rppDocument.identitas.platformIntegrasi}</span>
              </div>
            </div>
          </section>

          {/* SECTION B: TUJUAN PEMBELAJARAN ABCD */}
          <section id="sec-tujuan" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-24">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 bg-sky-100 text-sky-800 rounded-lg flex items-center justify-center font-bold text-xs">
                  B
                </span>
                <h2 className="text-lg font-bold text-slate-900">Tujuan Pembelajaran (Formula ABCD Eksplisit)</h2>
              </div>
              <span className="text-xs font-semibold text-slate-500">4 Indikator Kinerja</span>
            </div>

            <p className="text-xs text-slate-600 mb-4">
              Setiap tujuan pembelajaran disusun dengan menguraikan empat komponen: <strong className="text-slate-800">Audience (A)</strong>, <strong className="text-slate-800">Behavior (B)</strong>, <strong className="text-slate-800">Condition (C)</strong>, dan <strong className="text-slate-800">Degree (D)</strong> untuk memastikan keterukuran dan keselarasan konstruktif.
            </p>

            <div className="space-y-4">
              {rppDocument.tujuanPembelajaranABCD.map((item) => (
                <div key={item.code} className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-xs font-bold bg-sky-100 text-sky-800 rounded">
                      {item.code}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  </div>

                  <p className="text-xs text-slate-700 italic mb-3 bg-white p-2.5 rounded-lg border border-slate-200">
                    "{item.fullText}"
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                    <div className="bg-white p-2 rounded border border-slate-200">
                      <span className="font-bold text-sky-700 block">Audience (A):</span>
                      <span className="text-slate-600">{item.abcdFormula.audience}</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-slate-200">
                      <span className="font-bold text-emerald-700 block">Behavior (B):</span>
                      <span className="text-slate-600">{item.abcdFormula.behavior}</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-slate-200">
                      <span className="font-bold text-amber-700 block">Condition (C):</span>
                      <span className="text-slate-600">{item.abcdFormula.condition}</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-slate-200">
                      <span className="font-bold text-purple-700 block">Degree (D):</span>
                      <span className="text-slate-600">{item.abcdFormula.degree}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION C: CAPAIAN PEMBELAJARAN & PROFIL LULUSAN */}
          <section id="sec-cp" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-24">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <span className="w-7 h-7 bg-sky-100 text-sky-800 rounded-lg flex items-center justify-center font-bold text-xs">
                C
              </span>
              <h2 className="text-lg font-bold text-slate-900">Capaian Pembelajaran & Dimensi Profil Lulusan</h2>
            </div>

            <div className="mb-4 p-4 bg-sky-50/50 border border-sky-100 rounded-xl">
              <span className="text-xs font-bold text-sky-800 block mb-1">
                Elemen Fase F: {rppDocument.capaianPembelajaran.elemenFaseF}
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                {rppDocument.capaianPembelajaran.deskripsiCP}
              </p>
            </div>

            <h3 className="text-sm font-bold text-slate-800 mb-2">4 Dimensi Profil Lulusan yang Dikembangkan:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {rppDocument.capaianPembelajaran.dimensiProfilLulusan.map((dp) => (
                <div key={dp.dimensi} className="p-3 bg-white border border-slate-200 rounded-lg">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{dp.dimensi}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {dp.perilaku}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION D: 7 DOMAIN TPACK */}
          <section id="sec-tpack" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-24">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 bg-sky-100 text-sky-800 rounded-lg flex items-center justify-center font-bold text-xs">
                  D
                </span>
                <h2 className="text-lg font-bold text-slate-900">Integrasi 7 Domain Kerangka TPACK</h2>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Level Target: {rppDocument.tpackLevelTarget.level}
              </span>
            </div>

            <div className="p-3 mb-4 bg-emerald-50/60 border border-emerald-200 rounded-lg text-xs text-emerald-900">
              <strong>Rasionalisasi Level Advancing (Level 5):</strong> {rppDocument.tpackLevelTarget.rationale}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 rounded-lg">
                <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3 border-b border-slate-200 w-20">Domain</th>
                    <th className="p-3 border-b border-slate-200 w-44">Nama Domain</th>
                    <th className="p-3 border-b border-slate-200">Deskripsi Konseptual</th>
                    <th className="p-3 border-b border-slate-200">Wujud Konkret di Kelas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {rppDocument.tpackMatrix.map((item) => (
                    <tr key={item.domain} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-mono font-bold text-sky-700 bg-slate-50/50">
                        {item.domain}
                      </td>
                      <td className="p-3 font-semibold text-slate-800">
                        {item.fullName}
                      </td>
                      <td className="p-3 text-slate-600 leading-relaxed">
                        {item.description}
                      </td>
                      <td className="p-3 text-slate-700 font-medium bg-sky-50/20 leading-relaxed">
                        {item.concreteImplementation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION E: MPI & 4 KARAKTERISTIK */}
          <section id="sec-mpi" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-24">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <span className="w-7 h-7 bg-sky-100 text-sky-800 rounded-lg flex items-center justify-center font-bold text-xs">
                E
              </span>
              <h2 className="text-lg font-bold text-slate-900">Media Pembelajaran Interaktif (MPI) yang Digunakan</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1">
                  Nama & Identitas MPI
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-1">ProcedureCraft</h3>
                <p className="text-xs text-slate-600">
                  Media Pembelajaran Interaktif berbasis Single-File Web Application yang didesain secara adaptif untuk pembelajaran mandiri maupun klasikal.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1">
                  Platform & Arsitektur Teknologi
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-1">Pure HTML5 + CSS3 + Vanilla JS</h3>
                <p className="text-xs text-slate-600">
                  100% Zero-External CDN Dependencies, Web Audio API synthesizer bawaan browser, dan kompatibel langsung dengan platform Ruang Murid Kemendikdasmen.
                </p>
              </div>
            </div>

            <h3 className="text-sm font-bold text-slate-800 mb-3">4 Karakteristik Utama MPI yang Dipenuhi:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rppDocument.mpiCharacteristics.map((char) => (
                <div key={char.title} className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                  <h4 className="text-xs font-bold text-sky-800 mb-1.5">{char.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{char.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION F: KEGIATAN PEMBELAJARAN DEEP LEARNING */}
          <section id="sec-kegiatan" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-24">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 bg-sky-100 text-sky-800 rounded-lg flex items-center justify-center font-bold text-xs">
                  F
                </span>
                <h2 className="text-lg font-bold text-slate-900">Kegiatan Pembelajaran (Siklus Deep Learning)</h2>
              </div>
              <span className="text-xs font-semibold text-slate-500">2 × 45 Menit</span>
            </div>

            <div className="space-y-6">
              {rppDocument.kegiatanPembelajaran.map((stage, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl p-5 bg-slate-50/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-200">
                    <div>
                      <span className="text-xs font-bold text-sky-800 block">{stage.phase}</span>
                      <h3 className="text-sm font-bold text-slate-900">{stage.subPhase}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-0.5 bg-slate-200 text-slate-700 rounded font-mono font-semibold">
                        ⏱️ {stage.duration}
                      </span>
                      <span className={`px-2 py-0.5 rounded font-semibold ${
                        stage.deepLearningPrinciple.includes('Berkesadaran')
                          ? 'bg-blue-100 text-blue-800'
                          : stage.deepLearningPrinciple.includes('Bermakna')
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {stage.deepLearningPrinciple}
                      </span>
                    </div>
                  </div>

                  {/* 3 Pillars Integration Box */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 text-xs">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                      <span className="font-bold text-purple-700 block">💻 Integrasi Teknologi:</span>
                      <span className="text-slate-600">{stage.integration.technology}</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                      <span className="font-bold text-sky-700 block">🧑‍🏫 Integrasi Pedagogi:</span>
                      <span className="text-slate-600">{stage.integration.pedagogy}</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                      <span className="font-bold text-emerald-700 block">📚 Integrasi Konten:</span>
                      <span className="text-slate-600">{stage.integration.content}</span>
                    </div>
                  </div>

                  {/* Concrete Classroom Activities */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-800 block">Langkah Konkret Pelaksanaan:</span>
                    <ul className="space-y-1 text-xs text-slate-700 list-disc pl-4 leading-relaxed">
                      {stage.activities.map((act, aIdx) => (
                        <li key={aIdx}>{act}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION G: ASESMEN & RUBRIK */}
          <section id="sec-asesmen" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-24">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <span className="w-7 h-7 bg-sky-100 text-sky-800 rounded-lg flex items-center justify-center font-bold text-xs">
                G
              </span>
              <h2 className="text-lg font-bold text-slate-900">Asesmen & Rubrik Penilaian</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-sky-800 uppercase tracking-wide block mb-1">
                  1. Asesmen Formatif (Real-Time MPI Analytics)
                </span>
                <p className="text-xs text-slate-700 mb-2 font-medium">
                  <strong>Teknik:</strong> {rppDocument.asesmen.formatif.teknik}
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Instrumen:</strong> {rppDocument.asesmen.formatif.instrumen}
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide block mb-1">
                  2. Asesmen Sumatif (HOTS Product Task)
                </span>
                <p className="text-xs text-slate-700 mb-2 font-medium">
                  <strong>Teknik:</strong> {rppDocument.asesmen.sumatif.teknik}
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Instrumen:</strong> {rppDocument.asesmen.sumatif.instrumen}
                </p>
              </div>
            </div>

            <h3 className="text-sm font-bold text-slate-800 mb-3">Rubrik Penilaian Analitis Produk Teks Prosedur:</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 rounded-lg">
                <thead className="bg-slate-100 text-slate-700 font-bold uppercase">
                  <tr>
                    <th className="p-2.5 border-b border-slate-200 w-36">Aspek Penilaian</th>
                    <th className="p-2.5 border-b border-slate-200 w-16">Bobot</th>
                    <th className="p-2.5 border-b border-slate-200">Sangat Baik (4)</th>
                    <th className="p-2.5 border-b border-slate-200">Baik (3)</th>
                    <th className="p-2.5 border-b border-slate-200">Cukup (2)</th>
                    <th className="p-2.5 border-b border-slate-200">Perlu Bimbingan (1)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {rppDocument.asesmen.rubrik.map((r) => (
                    <tr key={r.aspect} className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-800">{r.aspect}</td>
                      <td className="p-2.5 font-mono font-bold text-sky-700">{r.weight}</td>
                      <td className="p-2.5 text-slate-700">{r.excellent}</td>
                      <td className="p-2.5 text-slate-600">{r.good}</td>
                      <td className="p-2.5 text-slate-600">{r.fair}</td>
                      <td className="p-2.5 text-slate-500">{r.needsImprovement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION H: SUMBER BELAJAR */}
          <section id="sec-sumber" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-24">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <span className="w-7 h-7 bg-sky-100 text-sky-800 rounded-lg flex items-center justify-center font-bold text-xs">
                H
              </span>
              <h2 className="text-lg font-bold text-slate-900">Sumber Belajar & Peralatan</h2>
            </div>

            <ul className="space-y-2 text-xs text-slate-700">
              {rppDocument.sumberBelajar.map((sb, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-sky-600 font-bold">✔</span>
                  <span>{sb}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* SECTION I: REFLEKSI GURU TPACK */}
          <section id="sec-refleksi" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-24">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <span className="w-7 h-7 bg-sky-100 text-sky-800 rounded-lg flex items-center justify-center font-bold text-xs">
                I
              </span>
              <h2 className="text-lg font-bold text-slate-900">Refleksi Guru Terkait Level TPACK</h2>
            </div>

            <div className="p-4 bg-sky-50/60 border border-sky-100 rounded-xl mb-4">
              <span className="text-xs font-bold text-sky-800 block mb-1">
                {rppDocument.refleksiGuruTPACK.ringkasan}
              </span>
              <ul className="space-y-2 text-xs text-slate-700 list-disc pl-4">
                {rppDocument.refleksiGuruTPACK.poinRefleksi.map((pr, idx) => (
                  <li key={idx} className="leading-relaxed">{pr}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* SECTION J: CATATAN PENGEMBANGAN ADDIE */}
          <section id="sec-addie" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-24">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <span className="w-7 h-7 bg-sky-100 text-sky-800 rounded-lg flex items-center justify-center font-bold text-xs">
                J
              </span>
              <h2 className="text-lg font-bold text-slate-900">Catatan Pengembangan MPI (Model ADDIE Ringkas)</h2>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {rppDocument.catatanPengembanganADDIE.map((ad) => (
                <div key={ad.phase} className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <strong className="text-xs text-sky-800 font-bold block mb-1">{ad.phase}</strong>
                  <p className="text-xs text-slate-600 leading-relaxed">{ad.detail}</p>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};
