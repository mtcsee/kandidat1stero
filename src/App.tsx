import React, { useState } from 'react';
import candidatePhoto from './fotoo.jpg';
import { Language } from './types';
import {
  Calendar,
  MapPin,
  Sparkles,
  X,
  Heart,
  Target,
  CheckCircle2,
  MessageSquare,
  HeartHandshake,
  Trophy,
  Award,
  Send,
  Zap,
  Scale,
  MessageCircle,
  Navigation,
  Bike,
  Train,
  Car,
  Info,
  Trees,
  CheckCircle,
  QrCode,
  Printer,
  Share2,
  Compass,
  Instagram,
  Phone,
} from 'lucide-react';

/* =========================================================================
   1. NAVIGATION HEADER
   ========================================================================= */
const HeaderNav: React.FC<{
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}> = ({ currentLang, onLanguageChange }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF5EB]/95 backdrop-blur-md border-b border-[#E3D9C3] px-4 md:px-8 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <a
          href="#"
          className="text-xl md:text-2xl font-bold tracking-tight text-[#B83D26] font-condensed hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          PICNIC WITH KANDIDAT 1
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-[#4A4844]">
          <a
            href="#about"
            className="hover:text-[#B83D26] transition-colors hover:underline underline-offset-4 decoration-[#B83D26]"
          >
            {currentLang === 'en' ? 'Vision' : 'Visi Kandidat 1'}
          </a>
          <a
            href="#bike-revival"
            className="hover:text-[#B83D26] transition-colors hover:underline underline-offset-4 decoration-[#B83D26]"
          >
            {currentLang === 'en' ? 'Mission' : 'Misi Kandidat 1'}
          </a>
          <a
            href="#schedule"
            className="hover:text-[#B83D26] transition-colors hover:underline underline-offset-4 decoration-[#B83D26]"
          >
            Pribadi Aruna
          </a>
          <a
            href="#park-map"
            className="hover:text-[#B83D26] transition-colors hover:underline underline-offset-4 decoration-[#B83D26]"
          >
            Lokasi Google Maps
          </a>
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex items-center text-xs font-semibold border border-[#D5C7B0] rounded-md overflow-hidden bg-white/70">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 transition-colors ${
                currentLang === 'en'
                  ? 'bg-[#254F38] text-white'
                  : 'text-[#6A665E] hover:text-[#2C2B29]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('id')}
              className={`px-2 py-1 transition-colors ${
                currentLang === 'id'
                  ? 'bg-[#254F38] text-white'
                  : 'text-[#6A665E] hover:text-[#2C2B29]'
              }`}
            >
              ID
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

/* =========================================================================
   2. POSTER HERO HEADER (VINTAGE PICNIC POSTER + INTERACTIVE BASKET)
   ========================================================================= */
const PosterHeader: React.FC<{
  currentLang: Language;
}> = ({ currentLang }) => {
  const [showPhotoPopup, setShowPhotoPopup] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-6 md:py-10 px-3 sm:px-6 bg-[#F3ECE0] overflow-hidden">
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#b83d26_0.8px,transparent_0.8px)] [background-size:20px_20px]" />

      <div className="relative max-w-4xl mx-auto">
        <div className="relative bg-[#FAF5EB] shadow-2xl rounded-sm p-3.5 sm:p-7 md:p-9 border-[6px] sm:border-[8px] border-[#B83D26] ring-1 ring-[#FAF5EB]/50 transition-all">
          
          <div className="text-center pt-2 sm:pt-4 pb-2 sm:pb-3 select-none">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.2rem] font-black tracking-tight leading-[0.88] text-[#B83D26] font-condensed uppercase drop-shadow-[0_2px_0_rgba(184,61,38,0.2)]">
              PICNIC WITH
              <br />
              KANDIDAT 1
            </h1>
          </div>

          <div className="relative flex justify-center my-3 sm:my-5 z-20">
            <div
              className="relative flex items-center justify-center bg-[#254F38] text-[#FAF5EB] px-6 sm:px-12 py-2 sm:py-3 shadow-md"
              style={{
                clipPath: 'polygon(18px 0%, 100% 0%, calc(100% - 18px) 50%, 100% 100%, 18px 100%, 0% 50%)',
              }}
            >
              <div className="flex items-center gap-2">
                <span className="font-condensed text-2xl sm:text-4xl md:text-5xl tracking-wide uppercase font-bold text-[#FAF5EB]">
                  Latisha Sashenka Samara
                </span>
              </div>
            </div>
          </div>

          <div className="relative w-full rounded-sm overflow-hidden border-2 border-[#B83D26]/20 bg-[#608E88] min-h-[380px] sm:min-h-[460px] md:min-h-[500px] flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-b from-[#588B85] to-[#719E98] z-0" />
            <div className="absolute top-6 right-6 sm:top-10 sm:right-12 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#EAB454] shadow-inner z-10 opacity-95" />

            <div className="absolute top-4 left-6 sm:top-6 sm:left-12 z-10 opacity-90">
              <svg width="120" height="50" viewBox="0 0 120 50" fill="#FAF5EB" className="w-24 sm:w-32">
                <circle cx="25" cy="30" r="18" />
                <circle cx="50" cy="22" r="22" />
                <circle cx="80" cy="25" r="18" />
                <rect x="25" y="25" width="65" height="22" rx="4" />
              </svg>
            </div>
            <div className="absolute top-10 right-28 sm:top-14 sm:right-40 z-10 opacity-80">
              <svg width="100" height="40" viewBox="0 0 100 40" fill="#FAF5EB" className="w-16 sm:w-24">
                <circle cx="20" cy="25" r="14" />
                <circle cx="45" cy="18" r="18" />
                <circle cx="70" cy="22" r="14" />
                <rect x="20" y="20" width="55" height="18" rx="4" />
              </svg>
            </div>

            <div className="relative z-20 flex-1 flex flex-col justify-end px-3 sm:px-6 pb-4">
              <div className="relative w-full h-52 sm:h-64 mt-1 flex items-end justify-center">
                
                <div className="absolute left-0 bottom-6 sm:bottom-8 z-10 flex items-end gap-1 opacity-95">
                  <svg width="48" height="90" viewBox="0 0 48 90" fill="#254F38" className="w-8 sm:w-12 h-16 sm:h-24">
                    <polygon points="24,0 36,24 28,24 40,48 30,48 48,76 0,76 18,48 8,48 20,24 12,24" />
                    <rect x="20" y="76" width="8" height="14" fill="#1C3F2D" />
                  </svg>
                  <svg width="40" height="75" viewBox="0 0 40 75" fill="#1E4430" className="w-7 sm:w-10 h-14 sm:h-20">
                    <polygon points="20,0 30,20 23,20 34,40 25,40 40,64 0,64 15,40 6,40 17,20 10,20" />
                    <rect x="17" y="64" width="6" height="11" fill="#153223" />
                  </svg>
                </div>

                <div className="absolute right-0 bottom-6 sm:bottom-8 z-10 flex items-end gap-1 opacity-95">
                  <svg width="40" height="75" viewBox="0 0 40 75" fill="#1E4430" className="w-7 sm:w-10 h-14 sm:h-20">
                    <polygon points="20,0 30,20 23,20 34,40 25,40 40,64 0,64 15,40 6,40 17,20 10,20" />
                    <rect x="17" y="64" width="6" height="11" fill="#153223" />
                  </svg>
                  <svg width="48" height="90" viewBox="0 0 48 90" fill="#254F38" className="w-8 sm:w-12 h-16 sm:h-24">
                    <polygon points="24,0 36,24 28,24 40,48 30,48 48,76 0,76 18,48 8,48 20,24 12,24" />
                    <rect x="20" y="76" width="8" height="14" fill="#1C3F2D" />
                  </svg>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-[#2D5E43] z-10">
                  <div className="absolute top-1 inset-x-0 flex justify-around text-[#3A7655] opacity-80">
                    <span>///</span>
                    <span>\\//</span>
                    <span>///</span>
                    <span>\\//</span>
                    <span>///</span>
                    <span>\\//</span>
                    <span>///</span>
                  </div>
                </div>

                <div
                  className="relative z-15 w-72 sm:w-96 md:w-[440px] h-28 sm:h-36 shadow-lg"
                  style={{
                    transform: 'perspective(400px) rotateX(32deg)',
                    transformOrigin: 'bottom center',
                  }}
                >
                  <div className="w-full h-full border-2 border-[#8C2817] shadow-inner bg-[#FAF5EB] overflow-hidden">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `
                          linear-gradient(90deg, rgba(184,61,38,0.7) 50%, transparent 50%),
                          linear-gradient(rgba(184,61,38,0.7) 50%, transparent 50%)
                        `,
                        backgroundSize: '24px 24px',
                      }}
                    />
                  </div>
                </div>

                <div className="absolute bottom-4 sm:bottom-6 z-25 flex flex-col items-center">
                  <button
                    onClick={() => setShowPhotoPopup(true)}
                    className="mb-1.5 group flex items-center gap-1.5 bg-[#FAF5EB] hover:bg-white text-[#B83D26] px-3 py-1 rounded-full border border-[#B83D26] text-[11px] font-bold shadow-md cursor-pointer animate-bounce transition-transform active:scale-95"
                    title="Sentuh keranjang untuk membuka foto"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#B83D26]" />
                    <span>Sentuh Keranjang! 🧺✨</span>
                  </button>

                  <button
                    onClick={() => setShowPhotoPopup(true)}
                    className="group relative cursor-pointer transition-all hover:scale-105 active:scale-95 focus:outline-none"
                    aria-label="Buka foto Kandidat 1"
                  >
                    <svg
                      width="220"
                      height="170"
                      viewBox="0 0 220 170"
                      className="w-40 sm:w-56 md:w-64 h-auto drop-shadow-xl group-hover:drop-shadow-2xl transition-all"
                    >
                      <path
                        d="M 65 80 C 65 15, 155 15, 155 80"
                        fill="none"
                        stroke="#8E3F24"
                        strokeWidth="14"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 65 80 C 65 15, 155 15, 155 80"
                        fill="none"
                        stroke="#C16A42"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 28 75 L 192 75 C 198 75, 202 82, 196 88 L 186 102 L 34 102 L 24 88 C 18 82, 22 75, 28 75 Z"
                        fill="#9E4E2C"
                        stroke="#6E2F17"
                        strokeWidth="3"
                      />
                      <path
                        d="M 32 78 L 188 78 L 180 96 L 40 96 Z"
                        fill="#C97347"
                      />
                      <polygon
                        points="36,98 184,98 165,160 55,160"
                        fill="#B65F34"
                        stroke="#6E2F17"
                        strokeWidth="3.5"
                      />
                      <path
                        d="M 45 105 L 160 155 M 65 102 L 155 142 M 85 100 L 150 128 M 105 100 L 140 115"
                        stroke="#8E3F24"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 175 105 L 60 155 M 155 102 L 65 142 M 135 100 L 70 128 M 115 100 L 80 115"
                        stroke="#8E3F24"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <g transform="translate(100, 72) rotate(10)">
                        <path
                          d="M 0 0 L 38 -5 L 34 38 L -4 42 Z"
                          fill="#FAF5EB"
                          stroke="#8C2817"
                          strokeWidth="2"
                        />
                        <rect x="0" y="0" width="16" height="18" fill="#B83D26" />
                        <rect x="18" y="18" width="16" height="18" fill="#B83D26" />
                        <rect x="18" y="0" width="16" height="18" fill="#DF654B" opacity="0.6" />
                        <rect x="0" y="18" width="16" height="18" fill="#DF654B" opacity="0.6" />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative z-30 bg-[#FAF5EB] px-3 sm:px-6 py-2 border-t-2 border-[#B83D26] flex items-center justify-between">
              <a
                href="https://maps.google.com/?q=SMA+Stella+Duce+2+Yogyakarta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B83D26] hover:underline"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>SMA Stella Duce 2 Yogyakarta</span>
              </a>
              <span className="text-[11px] font-semibold text-[#254F38]">
                Buka di Google Maps →
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 flex flex-col items-center gap-3 text-xs sm:text-sm text-[#4A4844] border-t border-[#E2D8C0]">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center">
              <a
                href="https://maps.google.com/?q=SMA+Stella+Duce+2+Yogyakarta"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#2C2B29] hover:text-[#B83D26] flex items-center gap-1.5 transition-colors underline-offset-2 hover:underline"
              >
                <MapPin className="w-4 h-4 text-[#B83D26]" />
                SMA Stella Duce 2 Yogyakarta
              </a>
              <span aria-hidden="true" className="text-[#C4B9A2]">·</span>
              <span className="text-[#254F38] font-bold">100% Free Entry</span>
            </div>
          </div>

        </div>
      </div>

      {showPhotoPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="relative bg-[#FAF5EB] border-4 border-[#B83D26] rounded-sm max-w-sm sm:max-w-md w-full p-6 sm:p-7 shadow-2xl text-center space-y-4 animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setShowPhotoPopup(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full text-[#6B665D] hover:text-[#B83D26] hover:bg-black/5 transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 bg-[#254F38] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#EAB454]" />
              <span>Calon Ketua OSIS Stero • Kandidat 1</span>
            </div>

            <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-4 border-[#B83D26] shadow-xl ring-4 ring-[#FAF5EB] bg-white">
              <img
                src={candidatePhoto}
                alt="Latisha Sashenka Samara - Foto Asli Calon Ketua OSIS"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="font-condensed text-2xl sm:text-3xl font-extrabold text-[#2C2B29] uppercase tracking-wide leading-tight">
                Latisha Sashenka Samara
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#B83D26] mt-1">
                "Pilih ketua OSIS yang bijak, aspiratif dan solidaritas"
              </p>
              <p className="text-xs text-[#524E47] mt-2 leading-relaxed">
                Terima kasih sudah membuka keranjang kejutan! Mari bersama wujudkan OSIS Stero yang solid, kreatif, dan penuh cinta keluarga Aruna Stero.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                onClick={() => {
                  setShowPhotoPopup(false);
                  scrollTo('about');
                }}
                className="px-4 py-2 bg-[#B83D26] hover:bg-[#A0341F] text-white font-bold text-xs uppercase tracking-wider rounded-sm shadow-xs transition-colors cursor-pointer"
              >
                Lihat Visi Kandidat 1
              </button>
              <button
                onClick={() => setShowPhotoPopup(false)}
                className="px-4 py-2 bg-white hover:bg-[#FAF8F2] text-[#2C2B29] border border-[#D5C7B0] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

/* =========================================================================
   3. ABOUT SECTION (VISI KANDIDAT 1)
   ========================================================================= */
const AboutSection: React.FC<{
  currentLang: Language;
  onOpenTicketModal: () => void;
}> = ({ currentLang, onOpenTicketModal }) => {
  return (
    <section id="about" className="py-14 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B83D26]">
            <HeartHandshake className="w-4 h-4" />
            <span>{currentLang === 'en' ? 'Vision • Kandidat 1' : 'Visi • Kandidat 1'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C2B29] font-condensed tracking-tight uppercase leading-none">
            {currentLang === 'en' ? 'Vision of Picnic Kandidat 1' : 'Visi Picnic Kandidat 1'}
          </h2>

          <p className="text-[#2C2B29] text-base md:text-xl font-semibold leading-relaxed font-body bg-[#FAF5EB] p-4 sm:p-5 rounded-sm border-l-4 border-[#B83D26] shadow-xs">
            "Mewujudkan OSIS STERO sebagai organisasi yang mewadahi aspirasi dan kreatifitas dengan penguatan nilai Cc5+, serta pengembangan potensi baik akademik maupun non akademik, dan menjaga solidaritas dan kekeluargaan Aruna Stero."
          </p>

          <p className="text-xs sm:text-sm text-[#6B665D] leading-relaxed">
            {currentLang === 'en'
              ? 'Together building an inspiring, open, and solid student council environment through creative initiatives, caring community values, and active collaboration across all Stero students.'
              : 'Bersama membangun lingkungan OSIS yang inspiratif, terbuka, dan solid melalui inisiatif kreatif, penguatan nilai luhur Cc5+, serta kolaborasi aktif seluruh keluarga besar Stero.'}
          </p>
        </div>

        <div className="lg:col-span-5 bg-[#FAF5EB] border-2 border-[#254F38] p-6 rounded-sm space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#D5C7B0]">
            <Trees className="w-5 h-5 text-[#254F38]" />
            <h3 className="font-bold text-[#2C2B29] text-base uppercase font-condensed tracking-wide">
              {currentLang === 'en' ? 'Pillars of Kandidat 1' : 'Pilar Utama Kandidat 1'}
            </h3>
          </div>

          <ul className="space-y-3 text-xs text-[#524E47]">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B83D26] mt-1.5 shrink-0" />
              <div>
                <strong className="text-[#2C2B29]">Penguatan Nilai Cc5+: </strong>
                Menumbuhkan Compassion, Celebration, Competence, Conviction, Creativity, dan Community dalam setiap program.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B83D26] mt-1.5 shrink-0" />
              <div>
                <strong className="text-[#2C2B29]">Wadah Aspirasi & Potensi: </strong>
                Mendukung bakat akademik maupun non-akademik siswi Stero secara inklusif dan kreatif.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B83D26] mt-1.5 shrink-0" />
              <div>
                <strong className="text-[#2C2B29]">Solidaritas Aruna Stero: </strong>
                Mempererat rasa kekeluargaan dan persaudaraan antarseluruh angkatan.
              </div>
            </li>
          </ul>

          <div className="pt-2">
            <button
              onClick={onOpenTicketModal}
              className="w-full py-2.5 bg-[#254F38] hover:bg-[#1E412E] text-white font-bold uppercase tracking-wider text-xs rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {currentLang === 'en' ? 'Claim Free Entry Pass' : 'Ambil Tiket Masuk Gratis'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   4. MISSION SECTION (MISI KANDIDAT 1 & KOTAK SARAN DIGITAL)
   ========================================================================= */
const BikeRevivalSection: React.FC<{
  currentLang: Language;
}> = ({ currentLang }) => {
  const [activeMisi, setActiveMisi] = useState(0);
  const [aspirasi, setAspirasi] = useState('');
  const [nama, setNama] = useState('');
  const [terkirim, setTerkirim] = useState(false);

  const daftarMisi = [
    {
      id: 1,
      badge: 'Aspirasi & Inovasi',
      icon: MessageSquare,
      title: 'Kotak Saran Digital',
      desc: 'Menghadirkan kotak saran digital sebagai wadah Aruna Stero untuk menyampaikan aspirasi-aspirasi.',
      detail: 'Setiap suara dan ide dari Aruna Stero sangat berharga. Melalui kanal digital yang transparan dan mudah diakses, seluruh aspirasi dapat tersalurkan langsung ke pengurus OSIS.',
    },
    {
      id: 2,
      badge: 'Nilai Karakter',
      icon: HeartHandshake,
      title: 'Compassion & Community',
      desc: 'Melibatkan nilai-nilai Compassion dan Community dalam kegiatan sekolah serta program kerja OSIS.',
      detail: 'Menanamkan kepedulian tulus terhadap sesama dan mempererat kebersamaan seluruh warga sekolah dalam berbagai bakti sosial dan kebersamaan.',
    },
    {
      id: 3,
      badge: 'Ekspresi & Prestasi',
      icon: Trophy,
      title: 'Pentas Ekspresi & Kompetisi',
      desc: 'Mengadakan kompetisi internal atau pentas ekspresi sebagai bentuk fasilitas dan wadah untuk mengembangkan Competence, Conviction, dan Creativity Aruna Stero.',
      detail: 'Memberikan ruang panggung nyata untuk menyalurkan bakat seni, olahraga, dan wawasan akademik dengan rasa percaya diri dan daya kreasi tinggi.',
    },
    {
      id: 4,
      badge: 'Apresiasi & Kasih',
      icon: Award,
      title: 'Celebration of Process',
      desc: 'Mengapresiasi setiap proses serta karya Aruna Stero sebagai salah satu bentuk Celebration.',
      detail: 'Menghargai setiap usaha, jerih payah, dan capaian sekecil apa pun yang telah diukir oleh siswi Stero demi membangun rasa saling mendukung.',
    },
  ];

  const handleKirimAspirasi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aspirasi.trim()) return;
    setTerkirim(true);
    setAspirasi('');
    setNama('');
  };

  return (
    <section id="bike-revival" className="py-14 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#254F38] mb-2">
          <Target className="w-4 h-4" />
          <span>{currentLang === 'en' ? 'Core Mission • Kandidat 1' : 'Misi Utama • Kandidat 1'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C2B29] font-condensed tracking-tight uppercase leading-none">
          Misi Kandidat 1
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {daftarMisi.map((misi, idx) => {
          const isActive = activeMisi === idx;
          const IconComp = misi.icon;
          return (
            <button
              key={misi.id}
              onClick={() => setActiveMisi(idx)}
              className={`p-5 rounded-sm border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'border-[#B83D26] bg-[#FAF5EB] shadow-md scale-[1.02]'
                  : 'border-[#E2D8C0] bg-white hover:border-[#B83D26]/50 hover:bg-[#FAF8F2]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#B83D26] text-white flex items-center justify-center font-bold text-sm font-condensed">
                    0{misi.id}
                  </div>
                  <IconComp className={`w-5 h-5 ${isActive ? 'text-[#B83D26]' : 'text-[#6B665D]'}`} />
                </div>
                <div className="text-[11px] font-bold text-[#254F38] uppercase tracking-wider mb-1">
                  {misi.badge}
                </div>
                <h3 className="font-bold text-[#2C2B29] text-base leading-snug mb-2 font-condensed uppercase tracking-wide">
                  {misi.title}
                </h3>
                <p className="text-xs text-[#524E47] leading-relaxed">
                  {misi.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E2D8C0] flex items-center justify-between text-[11px]">
                <span className={`font-semibold ${isActive ? 'text-[#B83D26]' : 'text-[#7A756B]'}`}>
                  {isActive ? 'Sedang Dipilih' : 'Klik untuk Detail'}
                </span>
                {isActive && <CheckCircle2 className="w-4 h-4 text-[#B83D26]" />}
              </div>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 bg-[#FAF5EB] border-2 border-[#254F38] p-6 sm:p-7 rounded-sm shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#D5C7B0]">
            <Sparkles className="w-5 h-5 text-[#254F38]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#254F38]">
              Fokus Misi 0{daftarMisi[activeMisi].id} — {daftarMisi[activeMisi].badge}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-condensed uppercase text-[#2C2B29]">
            {daftarMisi[activeMisi].title}
          </h3>

          <p className="text-base sm:text-lg text-[#B83D26] font-semibold leading-relaxed">
            "{daftarMisi[activeMisi].desc}"
          </p>

          <p className="text-xs sm:text-sm text-[#524E47] leading-relaxed">
            {daftarMisi[activeMisi].detail}
          </p>
        </div>

        <div className="lg:col-span-5 bg-white border-2 border-[#B83D26] p-6 rounded-sm shadow-md">
          <div className="flex items-center gap-2 pb-3 border-b border-[#E2D8C0] mb-4">
            <MessageSquare className="w-5 h-5 text-[#B83D26]" />
            <div>
              <h3 className="font-bold text-[#2C2B29] text-base uppercase font-condensed tracking-wide">
                Kotak Saran Digital Aruna Stero
              </h3>
              <p className="text-[11px] text-[#7A756B]">Sampaikan aspirasimu untuk Kandidat 1</p>
            </div>
          </div>

          {terkirim ? (
            <div className="p-4 bg-[#FAF5EB] border border-[#254F38] rounded-sm text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#254F38] mx-auto" />
              <div className="font-bold text-sm text-[#2C2B29]">Aspirasi Telah Diterima!</div>
              <p className="text-xs text-[#524E47]">
                Terima kasih telah berpartisipasi menyuarakan aspirasi demi kemajuan OSIS STERO tercinta.
              </p>
              <button
                onClick={() => setTerkirim(false)}
                className="mt-2 text-xs font-bold text-[#B83D26] underline cursor-pointer"
              >
                Kirim aspirasi lainnya →
              </button>
            </div>
          ) : (
            <form onSubmit={handleKirimAspirasi} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#4A4844] mb-1">
                  Nama / Kelas (Boleh Anonim)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Siswi Kelas X / Anonim"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#C7BBA4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#B83D26] bg-[#FAF8F2]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A4844] mb-1">
                  Aspirasi / Ide Program Kerja *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tuliskan aspirasi, harapan, atau ide kreatifmu untuk OSIS STERO..."
                  value={aspirasi}
                  onChange={(e) => setAspirasi(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#C7BBA4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#B83D26] bg-[#FAF8F2] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#B83D26] hover:bg-[#A0341F] text-white font-bold uppercase tracking-wider text-xs rounded-sm shadow-sm transition-transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim Aspirasi Sekarang</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   5. PRIBADI ARUNA VALUES SECTION
   ========================================================================= */
const ScheduleSection: React.FC<{
  currentLang: Language;
}> = () => {
  const [activeLetter, setActiveLetter] = useState<string>('all');

  const arunaItems = [
    {
      letter: 'A',
      word: 'Aspiratif',
      icon: MessageCircle,
      color: '#B83D26',
      meaning: 'Menjadikan OSIS sebagai organisasi yang mewadahi aspirasi Aruna Stero',
      detail: 'Mendengarkan, menampung, dan memperjuangkan setiap saran dan suara siswi demi lingkungan sekolah yang lebih baik dan inklusif.',
    },
    {
      letter: 'R',
      word: 'Rangkul',
      icon: Heart,
      color: '#254F38',
      meaning: 'Merangkul seluruh siswa demi menjaga solidaritas dan kekeluargaan',
      detail: 'Membangun kehangatan tanpa sekat antarkelas maupun angkatan, memperkuat rasa persaudaraan dan kekeluargaan di Stero.',
    },
    {
      letter: 'U',
      word: 'Unggul',
      icon: Award,
      color: '#D97706',
      meaning: 'Mengutamakan pengembangan potensi baik akademik maupun non akademik',
      detail: 'Mendorong siswi Stero terus berprestasi, percaya diri mengembangkan bakat seni, olahraga, sains, dan keterampilan kepemimpinan.',
    },
    {
      letter: 'N',
      word: 'Nyalakan kreatifitas',
      icon: Zap,
      color: '#B83D26',
      meaning: 'Menyediakan ruang untuk menyalakan ide-ide dan kreatifitas',
      detail: 'Membuka wadah seluas-luasnya untuk karya, proyek kolaboratif, dan inovasi segar yang membawa inspirasi nyata.',
    },
    {
      letter: 'A',
      word: 'Adil',
      icon: Scale,
      color: '#1E4378',
      meaning: 'Bersikap adil tanpa membeda-bedakan',
      detail: 'Mengayomi dengan penuh integritas, transparansi, serta perlakuan yang setara bagi seluruh warga Stero.',
    },
  ];

  const filteredItems = activeLetter === 'all'
    ? arunaItems
    : arunaItems.filter((item, index) => `${item.letter}-${index}` === activeLetter);

  return (
    <section id="schedule" className="py-14 md:py-20 bg-[#FAF5EB] border-t border-[#E2D8C0]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#254F38] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Karakteristik & Nilai Luhur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C2B29] font-condensed tracking-tight uppercase leading-none">
            Pribadi Aruna
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveLetter('all')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
              activeLetter === 'all'
                ? 'bg-[#B83D26] text-white shadow-xs'
                : 'bg-white text-[#524E47] border border-[#D5C7B0] hover:border-[#B83D26]'
            }`}
          >
            Semua Nilai ARUNA
          </button>
          {arunaItems.map((item, idx) => {
            const key = `${item.letter}-${idx}`;
            const isSelected = activeLetter === key;
            return (
              <button
                key={key}
                onClick={() => setActiveLetter(key)}
                className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#254F38] text-white shadow-xs'
                    : 'bg-white text-[#524E47] border border-[#D5C7B0] hover:border-[#254F38]'
                }`}
              >
                <span className="font-condensed text-sm font-black">{item.letter}</span>
                <span className="hidden sm:inline font-medium">({item.word})</span>
              </button>
            );
          })}
        </div>

        <div className="space-y-3.5">
          {filteredItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={`${item.letter}-${index}`}
                className="p-5 sm:p-6 rounded-sm bg-white border-2 border-[#E2D8C0] hover:border-[#B83D26] transition-all shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-sm flex items-center justify-center text-white font-condensed text-3xl sm:text-4xl font-black shrink-0 shadow-sm"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.letter}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#7A756B]">
                        Karakter {item.letter}
                      </span>
                      <span className="text-[#C4B9A2]">·</span>
                      <IconComponent className="w-4 h-4 text-[#B83D26]" />
                    </div>
                    <h3 className="font-condensed text-2xl sm:text-3xl font-extrabold text-[#2C2B29] uppercase leading-snug">
                      {item.word}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[#B83D26] mt-0.5 leading-snug">
                      {item.meaning}
                    </p>
                    <p className="text-xs sm:text-sm text-[#524E47] mt-1 leading-relaxed max-w-3xl">
                      {item.detail}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-end sm:self-center">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#254F38] bg-[#FAF5EB] px-3.5 py-1.5 rounded-sm border border-[#D5C7B0]">
                    <CheckCircle2 className="w-4 h-4 text-[#254F38]" />
                    <span>Komitmen Kandidat 1</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   6. MAPS & LOCATION SECTION
   ========================================================================= */
const ParkMapSection: React.FC<{
  currentLang: Language;
}> = ({ currentLang }) => {
  return (
    <section id="park-map" className="py-14 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#254F38] mb-2">
          <Navigation className="w-4 h-4" />
          <span>{currentLang === 'en' ? 'Location & Directions' : 'Lokasi & Petunjuk Arah'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C2B29] font-condensed tracking-tight uppercase leading-none">
          {currentLang === 'en' ? 'Interactive Map & Getting Here' : 'Peta Lokasi & Petunjuk Arah'}
        </h2>
        <p className="mt-3 text-[#5A5750] text-base md:text-lg leading-relaxed font-body">
          {currentLang === 'en'
            ? 'Located at SMA Stella Duce 2 Yogyakarta, Jl. Dr. Sutomo No.16, Bausasran, Danurejan, Kota Yogyakarta, D.I. Yogyakarta 55211.'
            : 'Bertempat di SMA Stella Duce 2 Yogyakarta, Jl. Dr. Sutomo No.16, Bausasran, Danurejan, Kota Yogyakarta, D.I. Yogyakarta 55211.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 bg-[#E8EFEA] border-2 border-[#254F38] rounded-sm p-3 sm:p-4 shadow-sm">
          <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-[#A8C7B4] shadow-inner bg-slate-100">
            <iframe
              title="Peta Lokasi SMA Stella Duce 2 Yogyakarta"
              src="https://maps.google.com/maps?q=SMA+Stella+Duce+2+Yogyakarta&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-semibold text-[#524E47]">
              📍 SMA Stella Duce 2 Yogyakarta
            </span>
            <a
              href="https://maps.google.com/?q=SMA+Stella+Duce+2+Yogyakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#B83D26] hover:bg-[#A0341F] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-xs flex items-center gap-1.5"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{currentLang === 'en' ? 'Open in Google Maps App' : 'Buka di Aplikasi Google Maps'}</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white border-2 border-[#E2D8C0] p-5 rounded-sm">
            <h3 className="font-bold text-[#2C2B29] text-base uppercase font-condensed tracking-wide flex items-center gap-2 mb-4">
              <Info className="w-4 h-4 text-[#B83D26]" />
              {currentLang === 'en' ? 'Getting to SMA Stella Duce 2' : 'Akses Menuju Lokasi'}
            </h3>

            <div className="space-y-3.5 text-xs text-[#524E47]">
              <div className="flex items-start gap-3">
                <Bike className="w-4 h-4 text-[#254F38] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#2C2B29] block">
                    {currentLang === 'en' ? 'Bicycle & Ride' : 'Sepeda & Motor'}
                  </span>
                  {currentLang === 'en'
                    ? 'Convenient bicycle parking available right inside the school courtyard and gate.'
                    : 'Tersedia tempat parkir sepeda dan motor yang aman dan luas di dalam area halaman sekolah.'}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Train className="w-4 h-4 text-[#B83D26] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#2C2B29] block">
                    {currentLang === 'en' ? 'Public Transport / KRL' : 'KRL & Transportasi Umum'}
                  </span>
                  {currentLang === 'en'
                    ? 'Close to Stasiun Lempuyangan (only ~3-5 minutes by ride / 10 mins walk).'
                    : 'Sangat dekat dari Stasiun Lempuyangan (hanya sekitar 3-5 menit berkendara atau 10 menit jalan kaki).'}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Car className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#2C2B29] block">
                    {currentLang === 'en' ? 'Car & Drop-off' : 'Mobil & Antar Jemput'}
                  </span>
                  {currentLang === 'en'
                    ? 'Accessible via Jl. Dr. Sutomo with convenient drop-off zones along the front entrance.'
                    : 'Akses mudah melalui Jl. Dr. Sutomo dengan area drop-off di depan gerbang utama.'}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF5EB] border border-[#D5C7B0] p-4 rounded-sm">
            <span className="text-xs font-bold text-[#2C2B29] block uppercase tracking-wide">
              {currentLang === 'en' ? 'Full Address' : 'Alamat Lengkap'}
            </span>
            <p className="text-xs text-[#6B665D] mt-1.5 leading-relaxed">
              SMA Stella Duce 2 Yogyakarta<br />
              Jl. Dr. Sutomo No.16, Bausasran, Danurejan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55211
            </p>
            <a
              href="https://maps.google.com/?q=SMA+Stella+Duce+2+Yogyakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#B83D26] hover:underline mt-2"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Petunjuk Rute Google Maps →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   7. FOOTER SECTION
   ========================================================================= */
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C2F25] text-[#FAF5EB] pt-12 pb-8 px-4 md:px-8 border-t-4 border-[#B83D26]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          <div className="md:col-span-7 space-y-3">
            <h3 className="font-condensed text-3xl font-extrabold tracking-tight text-[#FAF5EB] uppercase">
              PICNIC WITH KANDIDAT 1
            </h3>
            <p className="text-sm font-semibold text-[#EAB454] leading-relaxed max-w-md">
              Pilih ketua OSIS yang bijak, aspiratif dan solidaritas.
            </p>
            <a
              href="https://maps.google.com/?q=SMA+Stella+Duce+2+Yogyakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#FAF5EB]/80 flex items-center gap-1.5 pt-1 hover:text-white hover:underline"
            >
              <Compass className="w-3.5 h-3.5 text-[#EAB454]" />
              <span>SMA Stella Duce 2 Yogyakarta, Jl. Dr. Sutomo No.16</span>
            </a>
          </div>

          <div className="md:col-span-5 space-y-3 md:pl-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FAF5EB]/90 block">
              Contact
            </span>
            <div className="space-y-2 text-xs">
              <a
                href="https://instagram.com/shesheno_o"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#FAF5EB]/90 hover:text-[#EAB454] transition-colors p-2 bg-white/5 border border-white/10 rounded-sm"
              >
                <Instagram className="w-4 h-4 text-[#EAB454]" />
                <span className="font-semibold">@shesheno_o</span>
              </a>

              <a
                href="https://wa.me/6285880922555"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#FAF5EB]/90 hover:text-[#EAB454] transition-colors p-2 bg-white/5 border border-white/10 rounded-sm"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
                <span className="font-semibold">+62 858-8092-2555</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center text-xs text-[#FAF5EB]/75">
          <div className="flex items-center justify-center gap-1.5 font-medium">
            <span>© {new Date().getFullYear()} Tim Kandidat 1</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-[#B83D26] fill-current" /> for Aruna Stero
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* =========================================================================
   8. TICKET PASS MODAL
   ========================================================================= */
const TicketPassModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}> = ({ isOpen, onClose, currentLang }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState<'Female' | 'Male'>('Female');
  const [studentClass, setStudentClass] = useState('XA');
  const [ticketIssued, setTicketIssued] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const classList = [
    'XA', 'XB', 'XC', 'XD', 'XE',
    'XIA', 'XIB', 'XIC', 'XID', 'XIE',
    'XIIA', 'XIIB', 'XIIC', 'XIID', 'XIIE',
  ];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setTicketNumber(`PIP-2025-${Math.floor(1000 + Math.random() * 9000)}`);
    setTicketIssued(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-[#FAF5EB] border-4 border-[#B83D26] p-6 rounded-sm shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#54504A] hover:text-[#B83D26] hover:bg-[#FAF5EB] rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!ticketIssued ? (
          <div>
            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#254F38] block mb-1">
                Tim Kandidat 1
              </span>
              <h3 className="font-condensed text-3xl font-extrabold text-[#B83D26] uppercase">
                Part of Kandidat 1 team
              </h3>
              <p className="text-xs text-[#524E47] mt-1">
                {currentLang === 'en'
                  ? 'Admission is 100% free! Claim your official voter and event pass.'
                  : 'Masuk 100% gratis! Dapatkan tiket resmi untuk kehadiran dan partisipasi.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2C2B29] mb-1">
                  {currentLang === 'en' ? 'Full Name' : 'Nama Lengkap'} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Latisha Sashenka"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#C7BBA4] rounded-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#B83D26]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#2C2B29] mb-1">
                    Gender
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as 'Female' | 'Male')}
                    className="w-full px-3 py-2 text-xs border border-[#C7BBA4] rounded-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#B83D26]"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2C2B29] mb-1">
                    Kelas
                  </label>
                  <select
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#C7BBA4] rounded-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#B83D26]"
                  >
                    {classList.map((cls) => (
                      <option key={cls} value={cls}>
                        Kelas {cls}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#B83D26] hover:bg-[#A0341F] text-white font-bold uppercase tracking-wider text-xs rounded-sm shadow-sm transition-transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Sparkles className="w-4 h-4" />
                {currentLang === 'en' ? 'Issue My Free Pass' : 'Terbitkan Tiket Saya'}
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-white border-2 border-dashed border-[#B83D26] p-5 rounded-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2D8C0]">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#254F38]">
                    Tim Kandidat 1 • Official Pass
                  </div>
                  <h4 className="font-condensed text-2xl font-black text-[#B83D26] uppercase">
                    PICNIC WITH KANDIDAT 1
                  </h4>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs font-bold text-[#B83D26] bg-[#FAF5EB] px-2 py-0.5 border border-[#B83D26]/30">
                    {ticketNumber}
                  </span>
                </div>
              </div>

              <div className="py-3 space-y-2 text-xs">
                <div>
                  <span className="text-[#7A756B] uppercase text-[10px] block">
                    {currentLang === 'en' ? 'Participant Name' : 'Nama Lengkap'}
                  </span>
                  <span className="font-bold text-sm text-[#2C2B29]">{name}</span>
                  <span className="ml-2 text-xs font-semibold text-[#254F38] bg-[#254F38]/10 px-2 py-0.5 rounded-xs">
                    Kelas: {studentClass} • {gender}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-[#524E47]">
                  <span className="flex items-center gap-1 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#B83D26]" />
                    Latisha Sashenka Samara
                  </span>
                  <a
                    href="https://maps.google.com/?q=SMA+Stella+Duce+2+Yogyakarta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline text-[#254F38] font-bold"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#254F38]" />
                    SMA Stella Duce 2 Yogyakarta
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-dashed border-[#E2D8C0] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <QrCode className="w-10 h-10 text-[#2C2B29]" />
                  <span className="text-[10px] text-[#7A756B] leading-tight">
                    Tunjukkan tiket ini saat kedatangan<br />di gerbang masuk sekolah
                  </span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#254F38] bg-[#254F38]/10 px-2 py-1 rounded-xs">
                  Free Admission
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-2 text-xs font-bold uppercase tracking-wider text-[#2C2B29] bg-white border border-[#D5C7B0] hover:bg-gray-50 rounded-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                {currentLang === 'en' ? 'Print Pass' : 'Cetak Tiket'}
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#254F38] hover:bg-[#1E412E] rounded-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <CheckCircle className="w-3.5 h-3.5" />
                {currentLang === 'en' ? 'Done' : 'Selesai'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* =========================================================================
   9. POSTER FLYER MODAL
   ========================================================================= */
const PosterModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}> = ({ isOpen, onClose, currentLang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-[#FAF5EB] border-4 border-[#B83D26] p-4 sm:p-6 rounded-sm shadow-2xl max-h-[95vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-[#E2D8C0] mb-4">
          <span className="font-condensed text-xl font-bold text-[#B83D26] uppercase">
            {currentLang === 'en' ? 'Official Event Poster' : 'Poster Resmi Acara'}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 text-[#54504A] hover:text-[#B83D26] hover:bg-[#FAF5EB] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative bg-[#FAF5EB] border-[6px] border-[#B83D26] p-4 sm:p-6 text-center select-none shadow-inner">
          <h2 className="text-4xl sm:text-5xl font-black text-[#B83D26] font-condensed leading-none uppercase">
            PICNIC WITH<br />KANDIDAT 1
          </h2>

          <div className="my-3 inline-block bg-[#254F38] text-[#FAF5EB] px-6 py-1.5 shadow-sm font-condensed text-xl sm:text-2xl font-bold uppercase tracking-wide">
            Latisha Sashenka Samara
          </div>

          <div className="my-2">
            <span className="text-[10px] font-bold text-[#B83D26] uppercase block">Presents</span>
            <span className="font-condensed text-xl font-bold text-[#173F4B] uppercase">The Big Bike Revival</span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-3 text-xs">
            <div className="p-2 border-2 border-[#B83D26] bg-white font-condensed text-sm font-bold uppercase">
              Bring your picnic and come join us
            </div>
            <div className="p-2 border-2 border-[#B83D26] bg-white font-condensed text-sm font-bold uppercase">
              Games, Bike Mechanic, Toy Town Roundabout
            </div>
          </div>

          <div className="my-2 py-4 bg-[#5F8F89] rounded-sm relative overflow-hidden flex flex-col items-center justify-end min-h-[140px]">
            <div className="absolute top-2 right-4 w-10 h-10 rounded-full bg-[#EAB454]" />
            <div className="w-48 h-14 bg-[#2D5E43] absolute bottom-0 inset-x-0" />
            <div
              className="relative z-10 w-36 h-12 bg-white/90 border border-[#8C2817]"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(184,61,38,0.7) 50%, transparent 50%), linear-gradient(rgba(184,61,38,0.7) 50%, transparent 50%)',
                backgroundSize: '16px 16px',
              }}
            />
            <div className="relative z-20 -mt-6">
              <span className="font-condensed text-xs uppercase font-extrabold bg-[#B83D26] text-white px-2 py-0.5 rounded-xs">
                Free Community Festival
              </span>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-[#B83D26] flex items-center justify-between text-[11px] font-bold text-[#B83D26]">
            <span>SMA STELLA DUCE 2 YOGYAKARTA</span>
            <span>PICNIC WITH KANDIDAT 1</span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => window.print()}
            className="flex-1 py-2 text-xs font-bold uppercase tracking-wider text-[#2C2B29] bg-white border border-[#D5C7B0] hover:bg-gray-50 rounded-sm flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            {currentLang === 'en' ? 'Print Flyer' : 'Cetak Selebaran'}
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Picnic with Kandidat 1 - Latisha Sashenka Samara',
                  text: 'Dukung Kandidat 1: Latisha Sashenka Samara - Calon Ketua OSIS SMA Stella Duce 2 Yogyakarta!',
                  url: window.location.href,
                }).catch(() => {});
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Tautan disalin ke clipboard!');
              }
            }}
            className="flex-1 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#B83D26] hover:bg-[#A0341F] rounded-sm flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            {currentLang === 'en' ? 'Share Flyer' : 'Bagikan'}
          </button>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   MAIN APP EXPORT
   ========================================================================= */
export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('id');
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F3E6] text-[#2C2B29] font-body flex flex-col selection:bg-[#B83D26] selection:text-white">
      <HeaderNav
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />

      <main className="flex-1">
        <PosterHeader currentLang={currentLang} />
        <AboutSection
          currentLang={currentLang}
          onOpenTicketModal={() => setIsTicketModalOpen(true)}
        />
        <BikeRevivalSection currentLang={currentLang} />
        <ScheduleSection currentLang={currentLang} />
        <ParkMapSection currentLang={currentLang} />
      </main>

      <Footer />

      <TicketPassModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
        currentLang={currentLang}
      />

      <PosterModal
        isOpen={isPosterModalOpen}
        onClose={() => setIsPosterModalOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
