import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { RPPView } from './components/RPPView';
import { MPILiveView } from './components/MPILiveView';
import { SourceCodeView } from './components/SourceCodeView';
import { AlignmentMatrixView } from './components/AlignmentMatrixView';
import { PlatformGuideView } from './components/PlatformGuideView';
import { STANDALONE_MPI_CODE } from './data/standaloneHtmlCode';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('rpp');

  const handleDownloadHtml = () => {
    // Generate clean blob and download
    const blob = new Blob([STANDALONE_MPI_CODE], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'procedure_text_mpi.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrintRPP = () => {
    if (activeTab !== 'rpp') {
      setActiveTab('rpp');
      setTimeout(() => {
        window.print();
      }, 300);
    } else {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-sky-100 selection:text-sky-900">
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onDownloadHtml={handleDownloadHtml}
        onPrintRPP={handlePrintRPP}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {activeTab === 'rpp' && <RPPView />}
        {activeTab === 'mpi-live' && <MPILiveView />}
        {activeTab === 'alignment' && <AlignmentMatrixView />}
        {activeTab === 'code' && <SourceCodeView onDownloadHtml={handleDownloadHtml} />}
        {activeTab === 'platform' && <PlatformGuideView />}
      </main>

      {/* Quiet, Accessible Footer (Anti-Slop compliant: no fake telemetry or pulsing badges) */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">ProcedureCraft</span>
            <span aria-hidden="true">·</span>
            <span>Perangkat Pembelajaran Digital Terintegrasi</span>
            <span aria-hidden="true">·</span>
            <span>Bahasa Inggris Kelas XI (Fase F)</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('rpp')}
              className="hover:text-slate-800 transition-colors"
            >
              Dokumen RPP
            </button>
            <button
              onClick={() => setActiveTab('mpi-live')}
              className="hover:text-slate-800 transition-colors"
            >
              Simulator MPI
            </button>
            <button
              onClick={handleDownloadHtml}
              className="hover:text-slate-800 transition-colors font-medium text-sky-700"
            >
              Unduh File Standalone (.html)
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
