import React, { useState } from 'react';
import { Download, Copy, Check, Code2, Terminal, Info } from 'lucide-react';
import { STANDALONE_MPI_CODE } from '../data/standaloneHtmlCode';

interface SourceCodeViewProps {
  onDownloadHtml: () => void;
}

export const SourceCodeView: React.FC<SourceCodeViewProps> = ({ onDownloadHtml }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(STANDALONE_MPI_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
              <span>OUTPUT 2 (KODE SUMBER)</span>
              <span>·</span>
              <span>STANDALONE SINGLE-FILE HTML</span>
              <span>·</span>
              <span className="text-purple-700 font-semibold">HTML5 + CSS3 + VANILLA JS</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Kode Sumber Lengkap MPI (Single-File)
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              File ini dapat langsung disimpan sebagai file <code className="text-purple-700 font-mono text-xs">procedure_text_mpi.html</code> dan dibuka langsung di peramban apa pun (Chrome, Edge, Firefox, Safari) di komputer guru atau murid tanpa instalasi apa pun.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={copyCode}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Kode Tersalin!' : 'Salin Kode'}</span>
            </button>
            <button
              onClick={onDownloadHtml}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh File .html</span>
            </button>
          </div>
        </div>

        {/* Teacher Instructions Box */}
        <div className="mt-6 p-4 bg-purple-50/60 border border-purple-200 rounded-xl text-xs text-purple-900 leading-relaxed">
          <strong className="block font-bold mb-1 flex items-center gap-1.5">
            <Info className="w-4 h-4 text-purple-700" />
            Petunjuk Praktis Penggunaan & Modifikasi untuk Guru:
          </strong>
          <ol className="list-decimal pl-4 space-y-1 mt-1 text-slate-700">
            <li><strong>Cara Menjalankan:</strong> Klik tombol "Unduh File .html" di atas, lalu klik dua kali (double click) file <code className="bg-white px-1 py-0.5 rounded border border-purple-200">procedure_text_mpi.html</code> pada komputer/laptop Anda. Media akan terbuka seketika di peramban web bawaan.</li>
            <li><strong>Penggunaan Offline:</strong> Salin file tersebut ke flashdisk untuk dibagikan ke komputer laboratorium sekolah. Media berfungsi 100% tanpa internet.</li>
            <li><strong>Modifikasi Soal & Materi:</strong> Buka file menggunakan Notepad atau VS Code. Guru dapat dengan mudah mengedit variabel <code className="bg-white px-1 py-0.5 rounded border border-purple-200">quizQuestions</code> di baris JavaScript untuk mengganti pertanyaan atau menambah teks prosedur baru.</li>
          </ol>
        </div>
      </div>

      {/* Code Viewer */}
      <div className="bg-slate-900 text-slate-100 rounded-xl overflow-hidden border border-slate-800 shadow-xl">
        <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-mono">procedure_text_mpi.html (Single-File Distribution)</span>
          </div>
          <span>Pure Web Standards · Zero CDN</span>
        </div>

        <div className="p-4 overflow-x-auto max-h-[640px] font-mono text-xs leading-relaxed text-slate-300">
          <pre>{STANDALONE_MPI_CODE}</pre>
        </div>
      </div>
    </div>
  );
};
