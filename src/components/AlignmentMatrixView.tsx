import React from 'react';
import { GitFork, CheckCircle2, ArrowRight, Layers, Target, Brain, Award } from 'lucide-react';
import { rppDocument } from '../data/rppData';

export const AlignmentMatrixView: React.FC = () => {
  const alignmentData = [
    {
      code: 'TP-1',
      competency: 'Fungsi Sosial & Struktur Teks (Social Function & Generic Structure)',
      deepLearning: 'Memahami (Meaningful Understanding)',
      mpiScreen: 'Screen 02: Concept Lab (Interactive Color-Coded Dissector & 4 Types Tab)',
      tpackDomain: 'CK + PCK (Pedagogical Content Knowledge)',
      formativeEvidence: 'Ketepatan identifikasi anatomi Goal, Material, Steps pada teks Wedang Jahe & skor kuis Q1-Q2 (Bobot 40%)',
      summativeMetric: 'Kelengkapan susunan Generic Structure pada rubrik penulisan produk'
    },
    {
      code: 'TP-2',
      competency: 'Kausalitas & Urutan Kronologis (Branching & Cause-Effect Reasoning)',
      deepLearning: 'Mengaplikasi (Joyful Experiential Simulation)',
      mpiScreen: 'Screen 03: "What-If" Crisis Simulator (Waterlogged Phone Rescue)',
      tpackDomain: 'TCK (Technological Content Knowledge)',
      formativeEvidence: 'Keberhasilan menavigasi pohon keputusan tanpa menyebabkan short-circuit atau kerusakan termal & skor kuis Q5 (Bobot 20%)',
      summativeMetric: 'Kejelasan alur tahapan tanpa ada langkah kritis yang terlewat pada draf manual'
    },
    {
      code: 'TP-3',
      competency: 'Kaidah Kebahasaan (Imperatives, Action Verbs, Temporal Sequencers)',
      deepLearning: 'Mengaplikasi (Hands-On Active Reordering)',
      mpiScreen: 'Screen 04: Chronological Sequence Arena & Grammar Explorer',
      tpackDomain: 'TPK + TK (Technological Pedagogical Knowledge)',
      formativeEvidence: 'Perolehan ketuntasan 100% pada penataan 6 langkah ganti ban mobil & kuis Q3-Q4 (Bobot 40%)',
      summativeMetric: 'Konsistensi penggunaan bare infinitives dan variasi sequencers pada teks produk'
    },
    {
      code: 'TP-4',
      competency: 'Sintesis Mandiri & Refleksi Metakognitif (Production & Metacognition)',
      deepLearning: 'Merefleksi (Mindful Synthesis & Real-World Transfer)',
      mpiScreen: 'Screen 06: Reflective Synthesis & Digital Certification',
      tpackDomain: 'TPACK (Advancing Level 5 Transformative Synergy)',
      formativeEvidence: 'Isian refleksi diri (rating bintang & komitmen aplikasi kehidupan sehari-hari) serta penerbitan sertifikat XP',
      summativeMetric: 'Tugas portofolio mandiri: Penulisan teks prosedur otentik di Ruang Murid Kemendikdasmen'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
          <span>CONSTRUCTIVE ALIGNMENT</span>
          <span>·</span>
          <span>BIGGS FRAMEWORK</span>
          <span>·</span>
          <span className="text-amber-700 font-semibold">100% TERINTEGRASI</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Matriks Penyelarasan Konstruktif (Constructive Alignment Matrix)
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl">
          Bukti konkret bahwa setiap butir dalam RPP (Output 1) dan alur interaktif pada MPI (Output 2) selaras secara mutualistik: apa yang dirumuskan dalam tujuan diuji secara autentik di dalam media dan dinilai dengan rubrik HOTS.
        </p>
      </div>

      {/* Alignment Cards */}
      <div className="space-y-6">
        {alignmentData.map((item, idx) => (
          <div key={item.code} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-slate-300 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 font-bold text-xs flex items-center justify-center">
                  {item.code}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.competency}</h3>
                  <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                    <span className="font-semibold text-purple-700">Domain TPACK: {item.tpackDomain}</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md self-start sm:self-auto">
                {item.deepLearning}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-800 block mb-1 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-sky-600" />
                  Modul Eksekusi pada MPI (Output 2):
                </span>
                <p className="text-slate-600 leading-relaxed">{item.mpiScreen}</p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-800 block mb-1 flex items-center gap-1.5">
                  <Brain className="w-3.5 h-3.5 text-amber-600" />
                  Bukti Asesmen Formatif (Real-Time):
                </span>
                <p className="text-slate-600 leading-relaxed">{item.formativeEvidence}</p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-800 block mb-1 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  Kriteria Penilaian Sumatif (HOTS):
                </span>
                <p className="text-slate-600 leading-relaxed">{item.summativeMetric}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
