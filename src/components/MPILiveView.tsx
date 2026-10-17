import React, { useState, useRef } from 'react';
import { 
  Maximize2, 
  RotateCw, 
  ExternalLink, 
  Smartphone, 
  Tablet, 
  Monitor, 
  CheckCircle2, 
  Volume2, 
  Compass, 
  Sparkles,
  Info
} from 'lucide-react';
import { STANDALONE_MPI_HTML_FILE } from '../data/standaloneHtmlCode';

export const MPILiveView: React.FC = () => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const reloadIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src = STANDALONE_MPI_HTML_FILE + '?t=' + Date.now();
    }
  };

  const openFullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Info */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
              <span>OUTPUT 2</span>
              <span>·</span>
              <span>LIVE INTERACTIVE LEARNING MEDIA</span>
              <span>·</span>
              <span className="text-sky-700 font-semibold">SMKN 1 NGLEGOK (TSM)</span>
              <span>·</span>
              <span className="text-emerald-700 font-semibold">100% STANDALONE HTML</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              MotoPro English: Live Interactive Simulator
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Media Pembelajaran Interaktif (MPI) teks prosedur bengkel sepeda motor SMKN 1 Nglegok. Berjalan langsung dari berkas HTML mandiri (<code className="text-sky-700 font-mono text-xs">/procedure_text_mpi.html</code>) serta dapat diakses online di <a href="https://motopro-english-mpi-teks-prosedur-bengkel-tsm-smk.ai.studio" target="_blank" rel="noreferrer" className="text-sky-700 font-semibold underline">motopro-english-mpi-teks-prosedur-bengkel-tsm-smk.ai.studio</a>.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={reloadIframe}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
              title="Muat ulang simulator"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Muat Ulang</span>
            </button>
            <button
              onClick={openFullscreen}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
              title="Buka layar penuh"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Layar Penuh</span>
            </button>
            <a
              href={STANDALONE_MPI_HTML_FILE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-sm transition-colors whitespace-nowrap"
              title="Buka langsung di tab peramban baru"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Buka di Tab Baru</span>
            </a>
          </div>
        </div>

        {/* Viewport switchers */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                deviceMode === 'desktop'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop (100%)</span>
            </button>
            <button
              onClick={() => setDeviceMode('tablet')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                deviceMode === 'tablet'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet (768px)</span>
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                deviceMode === 'mobile'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile (390px)</span>
            </button>
          </div>

          {/* Quick Pillar Indicator */}
          <div className="hidden lg:flex items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> User Control
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Feedback Langsung
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Non-Linear Branching
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Mayer Multimedia
            </span>
          </div>
        </div>
      </div>

      {/* Simulator Frame Container */}
      <div className="flex justify-center bg-slate-900/5 p-4 sm:p-6 rounded-2xl border border-slate-200">
        <div
          className={`transition-all duration-300 shadow-xl rounded-xl overflow-hidden bg-white border border-slate-300 ${
            deviceMode === 'desktop'
              ? 'w-full h-[780px]'
              : deviceMode === 'tablet'
              ? 'w-[768px] h-[780px]'
              : 'w-[390px] h-[780px]'
          }`}
        >
          <iframe
            ref={iframeRef}
            src={STANDALONE_MPI_HTML_FILE}
            title="ProcedureCraft Live Simulator"
            className="w-full h-full border-0"
            allow="autoplay"
          />
        </div>
      </div>

      {/* Interactive Guidance & Pedagogical Callouts */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
            <Compass className="w-4 h-4 text-sky-600" />
            <span>Alur Non-Linier yang Mandiri</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Murid dapat mengeklik menu <strong>01 Mission Hub</strong>, <strong>02 Concept Lab</strong>, <strong>03 What-If Simulator</strong>, <strong>04 Sequence Challenge</strong>, <strong>05 Adaptive Quiz</strong>, hingga <strong>06 Reflection</strong> secara bebas sesuai kebutuhan pemahaman mereka tanpa dipaksa alur linier kaku.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
            <Volume2 className="w-4 h-4 text-emerald-600" />
            <span>Audio Sintetis & Zero External CDN</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Seluruh nada chime keberhasilan dan peringatan dihasilkan secara on-the-fly via <strong>Web Audio API Oscillator</strong> browser. Tidak memerlukan file .mp3 eksternal sehingga file HTML 100% aman dimainkan offline di sekolah pedalaman.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Simulasi Kausalitas Sebab-Akibat</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Pada layar 03, jika siswa memilih menghidupkan hp basah atau menggunakan pengering rambut panas, sistem segera memberikan konsekuensi kerusakan perangkat. Siswa memahami secara mendalam <em>mengapa</em> urutan instruksi bersifat mutlak.
          </p>
        </div>
      </div>
    </div>
  );
};
