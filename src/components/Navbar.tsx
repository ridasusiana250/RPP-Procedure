import React from 'react';
import { BookOpen, Laptop, Code2, GitFork, Compass, Download, Printer } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onDownloadHtml: () => void;
  onPrintRPP: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onDownloadHtml,
  onPrintRPP
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 bg-sky-700 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-sm">
              P
            </div>
            <div>
              <span className="text-base font-bold text-slate-900 tracking-tight whitespace-nowrap">
                ProcedureCraft
              </span>
              <div className="text-[11px] text-slate-500 font-medium whitespace-nowrap">
                TPACK & MPI Bahasa Inggris XI
              </div>
            </div>
          </div>

          {/* Zone 2: Navigation Links (Single-Line, clean) */}
          <nav className="hidden md:flex items-center gap-1 overflow-x-auto text-sm font-medium">
            <button
              onClick={() => setActiveTab('rpp')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 ${
                activeTab === 'rpp'
                  ? 'bg-sky-50 text-sky-800 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4 text-sky-600" />
              <span>RPP Berbasis TPACK</span>
            </button>

            <button
              onClick={() => setActiveTab('mpi-live')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 ${
                activeTab === 'mpi-live'
                  ? 'bg-sky-50 text-sky-800 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Laptop className="w-4 h-4 text-emerald-600" />
              <span>MPI Live Simulator</span>
            </button>

            <button
              onClick={() => setActiveTab('alignment')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 ${
                activeTab === 'alignment'
                  ? 'bg-sky-50 text-sky-800 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <GitFork className="w-4 h-4 text-amber-600" />
              <span>Matriks Penyelarasan</span>
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 ${
                activeTab === 'code'
                  ? 'bg-sky-50 text-sky-800 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Code2 className="w-4 h-4 text-purple-600" />
              <span>Kode HTML Tunggal</span>
            </button>

            <button
              onClick={() => setActiveTab('platform')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 ${
                activeTab === 'platform'
                  ? 'bg-sky-50 text-sky-800 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Compass className="w-4 h-4 text-cyan-600" />
              <span>Panduan Ruang Murid</span>
            </button>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {activeTab === 'rpp' && (
              <button
                onClick={onPrintRPP}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
                title="Cetak atau simpan RPP sebagai PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Cetak RPP</span>
              </button>
            )}

            <button
              onClick={onDownloadHtml}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-sm transition-colors whitespace-nowrap"
              title="Unduh file HTML standalone untuk dijalankan offline di browser"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh MPI (.html)</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="flex md:hidden items-center gap-1 overflow-x-auto py-2 border-t border-slate-100 text-xs font-medium">
          <button
            onClick={() => setActiveTab('rpp')}
            className={`px-2.5 py-1.5 rounded-md whitespace-nowrap ${
              activeTab === 'rpp' ? 'bg-sky-100 text-sky-800 font-semibold' : 'text-slate-600'
            }`}
          >
            RPP TPACK
          </button>
          <button
            onClick={() => setActiveTab('mpi-live')}
            className={`px-2.5 py-1.5 rounded-md whitespace-nowrap ${
              activeTab === 'mpi-live' ? 'bg-sky-100 text-sky-800 font-semibold' : 'text-slate-600'
            }`}
          >
            MPI Live
          </button>
          <button
            onClick={() => setActiveTab('alignment')}
            className={`px-2.5 py-1.5 rounded-md whitespace-nowrap ${
              activeTab === 'alignment' ? 'bg-sky-100 text-sky-800 font-semibold' : 'text-slate-600'
            }`}
          >
            Matriks
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-2.5 py-1.5 rounded-md whitespace-nowrap ${
              activeTab === 'code' ? 'bg-sky-100 text-sky-800 font-semibold' : 'text-slate-600'
            }`}
          >
            Kode HTML
          </button>
          <button
            onClick={() => setActiveTab('platform')}
            className={`px-2.5 py-1.5 rounded-md whitespace-nowrap ${
              activeTab === 'platform' ? 'bg-sky-100 text-sky-800 font-semibold' : 'text-slate-600'
            }`}
          >
            Ruang Murid
          </button>
        </div>
      </div>
    </header>
  );
};
