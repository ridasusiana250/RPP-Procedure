import React from 'react';
import { Compass, CheckCircle2, Laptop, Cloud, HardDrive, Share2, HelpCircle } from 'lucide-react';

export const PlatformGuideView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
          <span>KEMENDIKDASMEN RI</span>
          <span>·</span>
          <span>RUANG MURID / RUMAH PENDIDIKAN</span>
          <span>·</span>
          <span className="text-cyan-700 font-semibold">DISTRIBUSI SIAP PAKAI</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Panduan Integrasi Platform Ruang Murid & Ekosistem Sekolah
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl">
          Cara mudah mendistribusikan RPP dan Media Pembelajaran Interaktif (MPI) ini ke ekosistem Rumah Pendidikan / Ruang Murid, Google Classroom, hingga laboratorium komputer offline di seluruh pelosok Indonesia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Method 1: Ruang Murid / Rumah Pendidikan */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4">
            <Cloud className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900 mb-2">
            1. Integrasi Ruang Murid (Kemendikdasmen)
          </h2>
          <p className="text-xs text-slate-600 mb-4 leading-relaxed flex-1">
            Unggah paket modul ke repositori bahan ajar digital Ruang Murid / Rumah Pendidikan Kemendikdasmen:
          </p>
          <ul className="text-xs text-slate-700 space-y-2 mb-4 list-disc pl-4">
            <li>Masuk ke akun guru di portal Ruang Murid / Rumah Pendidikan.</li>
            <li>Pilih jenjang <strong>SMA/SMK · Kelas XI · Bahasa Inggris</strong>.</li>
            <li>Unggah file dokumen RPP (PDF) pada tab <em>Perangkat Ajar</em>.</li>
            <li>Unggah file <code className="bg-slate-100 px-1 py-0.5 rounded text-sky-800">procedure_text_mpi.html</code> sebagai lampiran konten digital interaktif / web resource.</li>
          </ul>
          <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
            Siswa dapat membuka media langsung dari browser peramban gawai mereka melalui akun belajar.id.
          </div>
        </div>

        {/* Method 2: Offline USB Flashdisk / Lab Komputer */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
            <HardDrive className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900 mb-2">
            2. Laboratorium Offline (Zero-Internet)
          </h2>
          <p className="text-xs text-slate-600 mb-4 leading-relaxed flex-1">
            Untuk sekolah dengan jaringan internet terbatas atau minim kuota:
          </p>
          <ul className="text-xs text-slate-700 space-y-2 mb-4 list-disc pl-4">
            <li>Klik tombol <strong>"Unduh MPI (.html)"</strong> pada menu navigasi atas.</li>
            <li>Salin file <code className="bg-slate-100 px-1 py-0.5 rounded text-emerald-800">procedure_text_mpi.html</code> ke flashdisk.</li>
            <li>Tempelkan (paste) file ke desktop setiap komputer di lab sekolah.</li>
            <li>Siswa cukup klik 2x pada file untuk menjalankan media di Chrome, Edge, atau Firefox tanpa butuh internet sepeser pun.</li>
          </ul>
          <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
            Seluruh audio dan percabangan bekerja mandiri secara lokal.
          </div>
        </div>

        {/* Method 3: Smartphone & LMS Kelas */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
            <Share2 className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900 mb-2">
            3. WhatsApp & Google Classroom
          </h2>
          <p className="text-xs text-slate-600 mb-4 leading-relaxed flex-1">
            Distribusi cepat langsung ke smartphone peserta didik untuk belajar mandiri di rumah:
          </p>
          <ul className="text-xs text-slate-700 space-y-2 mb-4 list-disc pl-4">
            <li>Kirim file <code className="bg-slate-100 px-1 py-0.5 rounded text-purple-800">procedure_text_mpi.html</code> via Google Classroom sebagai <em>Material / Materi</em>.</li>
            <li>Atau bagikan file langsung via grup WhatsApp kelas. Ukuran file sangat kecil (&lt; 50 KB) sehingga hemat kuota.</li>
            <li>Siswa membuka file menggunakan peramban ponsel (Chrome Mobile / Safari).</li>
            <li>Siswa mengunggah tangkapan layar (screenshot) Sertifikat XP digital mereka sebagai bukti ketuntasan formatif.</li>
          </ul>
          <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
            Responsif penuh dan nyaman dioperasikan pada layar sentuh smartphone.
          </div>
        </div>
      </div>
    </div>
  );
};
