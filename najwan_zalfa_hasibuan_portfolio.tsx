import React, { useState, useEffect, useRef } from 'react';
import {
  Code2,
  User,
  Globe,
  Award,
  Trophy,
  Cpu,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Mail,
  FileText,
  ArrowUpRight,
  ArrowLeft,
  ArrowDown,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Sparkles,
  X,
  CheckCircle2,
  Send,
  ChevronUp,
  Camera,
  RotateCcw,
  Eye,
  Heart,
  Pin,
  MessageSquare,
  Download,
  Sliders,
  ShieldCheck,
  Terminal,
  Layers,
  Zap
} from 'lucide-react';

/* ============================================================================
   1. STRUCTURED CV & PORTFOLIO DATA (EXTRACTED DIRECTLY FROM NAJWAN'S CV)
   ============================================================================ */
const PORTFOLIO_DATA = {
  personal: {
    brand: 'najwan.dev',
    domain: 'www.najwan.vercel.app',
    fullName: 'Najwan Zalfa Hasibuan',
    firstName: 'Najwan',
    middleName: 'Zalfa',
    lastName: 'Hasibuan',
    statusBadge: '+ AVAILABLE FOR INTERNSHIP & COLLABORATION',
    heroTitleLine1: 'UI/UX & SYSTEMS',
    heroTitleLine2: 'DEVELOPER',
    typewriterRoles: [
      'Information Systems Student',
      'UI/UX Designer',
      'C++ Logic & Data Structures',
      'Smart Energy & IoT Enthusiast',
      'Youth Cultural Ambassador'
    ],
    heroBio:
      'Merancang antarmuka digital modern dan arsitektur logika sistem yang terstruktur, responsif, serta berdampak nyata. Mengubah analisis masalah menjadi solusi teknologi yang fungsional dan elegan.',
    aboutBio:
      'Mahasiswa semester 3 Program Studi Sistem Informasi di Institut Teknologi PLN (IPK 3.90/4.00) yang aktif, adaptif, dan memiliki motivasi belajar mandiri yang tinggi. Memiliki perpaduan keahlian dalam desain antarmuka UI/UX, rekayasa struktur data C++, konsep Smart Energy & IoT, serta kepemimpinan dan komunikasi publik melalui berbagai inisiatif organisasi dan pengabdian masyarakat.',
    quote: '"Turning ideas into clean, modern, and meaningful digital experiences."',
    location: 'Jakarta Barat, Indonesia',
    email: 'wanscnd@gmail.com',
    instagramHandle: '@najwannnz',
    instagramUrl: 'https://instagram.com/najwannnz',
    linkedinUrl: '', // Editable placeholder if added later
    githubUrl: '', // Editable placeholder if added later
    gpa: '3.90',
    gpaScale: '4.00',
    semester: 'Semester 3',
    university: 'Institut Teknologi PLN',
    major: 'S1 Sistem Informasi',
    heroPills: ['UI/UX Design', 'C++ Logic', 'Data Structures', 'Smart Energy IoT', 'System Flowchart'],
    // High-contrast monochrome studio portrait fallback (replaceable with 1-click upload)
    defaultAvatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80'
  },

  stats: [
    {
      id: 'projects',
      icon: Code2,
      value: '2',
      label: 'PROJECTS',
      sublabel: 'Academic & Technical Systems',
      targetTab: 'projects'
    },
    {
      id: 'certificates',
      icon: Award,
      value: '6',
      label: 'CERTIFICATES & AWARDS',
      sublabel: 'Verified Trainings & National Honors',
      targetTab: 'certificates'
    },
    {
      id: 'gpa',
      icon: GraduationCap,
      value: '3.90',
      label: 'CURRENT GPA / 4.00',
      sublabel: 'Information Systems • IT-PLN',
      targetTab: 'about-timeline'
    }
  ],

  education: [
    {
      id: 'edu-1',
      institution: 'Institut Teknologi PLN (IT-PLN)',
      degree: 'Program Studi S1 Sistem Informasi',
      period: '2025 – Sekarang (Semester 3)',
      highlight: 'IPK: 3.90 / 4.00',
      location: 'Jakarta Barat, Indonesia',
      description:
        'Berfokus pada pengembangan sistem informasi, desain antarmuka pengguna (UI/UX), algoritma & struktur data C++, pemodelan alur sistem (flowcharting), serta inovasi teknologi energi cerdas (Smart Energy & IoT).'
    },
    {
      id: 'edu-2',
      institution: 'SMA Plus Jabal Rahmah Mulia',
      degree: 'Jurusan MIPA / IPA (Matematika & Ilmu Pengetahuan Alam)',
      period: '2022 – 2025',
      highlight: 'Lulusan MIPA',
      location: 'Sumatera Utara, Indonesia',
      description:
        'Aktif dalam pengembangan kepemimpinan siswa, kompetisi bela diri karate tingkat daerah/nasional, serta kegiatan duta kebudayaan dan literasi masyarakat.'
    }
  ],

  experience: [
    {
      id: 'exp-1',
      organization: 'Duta Muda Kebudayaan Sumatera Utara',
      role: 'Duta Kebudayaan & Koordinator Program Pengabdian',
      period: '2024',
      badge: 'DMK',
      highlights: [
        'Menginisiasi dan memimpin pelaksanaan kegiatan edukasi serta pengabdian masyarakat di Rumah Literasi Ranggi guna meningkatkan minat baca dan wawasan anak-anak.',
        'Mengoordinasikan rangkaian acara peringatan Hari Pendidikan Nasional melalui serangkaian workshop interaktif dan motivasi belajar aktif.',
        'Terlibat aktif dalam kepanitiaan Festival Seni dan Budaya guna melestarikan serta mempromosikan warisan kebudayaan daerah.'
      ]
    }
  ],

  projects: [
    {
      id: 'pawangvolt',
      title: 'Pawangvolt: Smart Residential Energy Management System',
      year: '2026',
      role: 'UI/UX Designer',
      category: 'UI/UX & Smart IoT',
      shortDesc:
        'Perancangan antarmuka sistem monitoring energi rumah tangga berbasis IoT secara real-time dengan estimasi tagihan berkala dan peringatan beban berlebih.',
      overview:
        'Pawangvolt adalah inovasi sistem manajemen energi residensial cerdas berbasis Internet of Things (IoT) yang dirancang untuk membantu penghuni rumah memantau konsumsi daya listrik secara real-time, memproyeksikan estimasi biaya tagihan listrik bulanan, serta memberikan peringatan dini ketika terjadi lonjakan beban berlebih (overload).',
      problem:
        'Banyak pengguna rumah tangga kesulitan memantau penggunaan daya listrik harian secara transparan dan sering mengalami pemutusan arus mendadak akibat beban listrik berlebih (overload) yang tidak terdeteksi sejak dini.',
      solution:
        'Merancang antarmuka dashboard UI/UX yang bersih, intuitif, dan responsif untuk memvisualisasikan metrik tegangan/arus secara real-time, kalkulator estimasi tagihan otomatis, serta sistem notifikasi darurat ketika konsumsi mendekati batas kapasitas daya.',
      keyFeatures: [
        'Dashboard Monitoring Konsumsi Energi IoT Real-Time',
        'Fitur Estimasi Tagihan Listrik Berkala & Riwayat Pemakaian',
        'Sistem Notifikasi & Peringatan Dini Beban Berlebih (Overload Alert)',
        'Desain Antarmuka Modern dengan Visualisasi Data yang Mudah Dipahami'
      ],
      technologies: [
        'UI/UX Design',
        'Figma',
        'Smart Energy Concept',
        'IoT Dashboard UX',
        'System Flowchart',
        'Interactive Prototyping'
      ],
      liveUrl: '',
      repoUrl: '',
      thumbnail:
        'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'cpp-queue-system',
      title: 'Sistem Antrean Digital Servis Kendaraan Berbasis C++',
      year: '2026',
      role: 'Technical Researcher & Logic Designer',
      category: 'C++ & Data Structures',
      shortDesc:
        'Perancangan logika algoritma, flowchart sistem, dan analisis efisiensi memori dinamis menggunakan struktur data Single Linked List berprinsip FIFO.',
      overview:
        'Proyek riset teknis dan perancangan logika pemrograman menggunakan bahasa C++ untuk menangani manajemen antrean layanan bengkel/servis kendaraan secara digital. Sistem ini mengimplementasikan struktur data dinamis Single Linked List dengan prinsip First-In, First-Out (FIFO) untuk mengatasi penumpukan data antrean.',
      problem:
        'Pencatatan antrean servis kendaraan secara manual maupun penggunaan array statis sering memicu pemborosan memori atau keterbatasan kapasitas saat terjadi lonjakan jumlah kendaraan yang masuk secara bersamaan.',
      solution:
        'Merancang arsitektur flowchart sistem secara menyeluruh dan mengimplementasikan struktur data Single Linked List berprinsip FIFO di C++ agar alokasi memori bersifat dinamis, presisi, dan mampu memitigasi lonjakan antrean tanpa bottleneck.',
      keyFeatures: [
        'Implementasi Struktur Data Single Linked List Berprinsip FIFO',
        'Manajemen Alokasi Memori Dinamis (Pointer & Node Management) di C++',
        'Perancangan Flowchart Logika Sistem & Analisis Efisiensi Memori',
        'Mitigasi Lonjakan Antrean Data Servis Kendaraan Secara Terstruktur'
      ],
      technologies: [
        'C++',
        'Data Structures',
        'Single Linked List',
        'FIFO Queue Logic',
        'System Flowcharting',
        'Memory Efficiency Analysis'
      ],
      liveUrl: '',
      repoUrl: '',
      thumbnail:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80'
    }
  ],

  certificates: [
    {
      id: 'cert-bees',
      title: 'Basic English Education Standardization (BEES)',
      issuer: 'Language Development Center (LDC) — Institut Teknologi PLN',
      date: 'April 2026',
      badge: 'Score: 84 / Level B1',
      category: 'Language & Academic',
      description:
        'Sertifikasi standardisasi kemampuan Bahasa Inggris akademik dan profesional di Institut Teknologi PLN dengan perolehan skor 84 (setara kualifikasi Intermediate / CEFR Level B1).',
      image:
        'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'cert-ai-agent',
      title: 'Workshop SAQ: Build Your First AI Agent',
      issuer: 'Workshop Pengembangan Diri & Teknologi AI',
      date: '2026',
      badge: 'Peserta',
      category: 'AI & Emerging Tech',
      description:
        'Pelatihan intensif mengenai konsep dasar dan praktik merancang AI Agent otonom serta alur kerja kecerdasan buatan modern.',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'cert-blockshield',
      title: 'Workshop Crafting the Blockshield: Blockchain Security & Infrastructure',
      issuer: 'Cybersecurity & Blockchain Infrastructure Workshop',
      date: '2026',
      badge: 'Peserta',
      category: 'Cybersecurity & Web3',
      description:
        'Eksplorasi teknis mengenai arsitektur infrastruktur terdesentralisasi, keamanan jaringan blockchain, dan mitigasi celah keamanan sistem.',
      image:
        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'cert-visual-intel',
      title: 'Workshop Real-Time Visual Intelligence System',
      issuer: 'Computer Vision & Visual Intelligence Workshop',
      date: '2026',
      badge: 'Peserta',
      category: 'AI & Emerging Tech',
      description:
        'Pengembangan wawasan teknis terkait sistem pemrosesan visual real-time dan implementasi kecerdasan visual pada skenario industri.',
      image:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80'
    }
  ],

  awards: [
    {
      id: 'award-karate',
      title: 'Juara 2 (Medali Perak) — Mahasiswa Kumite -67 Kg Putra',
      organizer: 'Kejuaraan Karate Nasional Budi Luhur University Championship (PB FORKI)',
      date: 'Februari 2026',
      badge: 'Silver Medal Nasional',
      description:
        'Meraih prestasi Juara 2 (Medali Perak) tingkat Nasional pada kategori Mahasiswa Kumite -67 Kg Putra dalam ajang Budi Luhur University Championship di bawah naungan PB FORKI.',
      image:
        'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'award-duta',
      title: 'Top 5 & Duta Muda Sumatera Utara',
      organizer: 'Duta Muda Kebudayaan Sumatera Utara',
      date: '2024',
      badge: 'Top 5 Finalist & Ambassador',
      description:
        'Terpilih sebagai Top 5 Duta Muda Kebudayaan Sumatera Utara dan dipercaya menjadi Koordinator Program Pengabdian Masyarakat serta edukasi literasi daerah.',
      image:
        'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=900&q=80'
    }
  ],

  techStack: [
    { name: 'C++', category: 'Programming Language', badge: 'C++', color: '#38BDF8' },
    { name: 'Data Structures', category: 'Queue & Linked List', badge: 'FIFO', color: '#818CF8' },
    { name: 'UI/UX Design', category: 'Interface & Experience', badge: 'UX', color: '#F472B6' },
    { name: 'Figma', category: 'Design & Prototyping', badge: 'FG', color: '#FB7185' },
    { name: 'System Flowchart', category: 'Architecture & Logic', badge: 'FLOW', color: '#34D399' },
    { name: 'Smart Energy IoT', category: 'Domain Concept', badge: 'IoT', color: '#FBBF24' },
    { name: 'AI Agents', category: 'Workshop & Exploration', badge: 'AI', color: '#A78BFA' },
    { name: 'Blockchain Security', category: 'Workshop & Exploration', badge: 'SEC', color: '#2DD4BF' },
    { name: 'Public Speaking', category: 'Leadership & Soft Skill', badge: 'COMM', color: '#F8FAFC' },
    { name: 'Analytical Thinking', category: 'Problem Solving', badge: 'LOGIC', color: '#94A3B8' },
    { name: 'English (CEFR B1)', category: 'BEES Score: 84 (IT-PLN)', badge: 'B1', color: '#60A5FA' },
    { name: 'Team Leadership', category: 'Organizational Skill', badge: 'LEAD', color: '#E2E8F0' }
  ],

  initialComments: [
    {
      id: 'c-pinned',
      name: 'Najwan Zalfa H',
      text: 'Terima kasih sudah mampir di portfolio saya! Silakan tinggalkan pesan, diskusi proyek UI/UX, sistem informasi, atau sapaan di bawah ini.',
      pinned: true,
      likes: 5,
      likedByMe: false,
      timestamp: 'Pinned'
    }
  ]
};

/* ============================================================================
   2. DEFAULT MONOCHROME PORTRAIT PLACEHOLDER (SVG DATA URI)
   ============================================================================ */
const STUDIO_PORTRAIT_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="600" height="750">
    <defs>
      <radialGradient id="bgGlow" cx="50%" cy="38%" r="60%">
        <stop offset="0%" stop-color="#3f3f46"/>
        <stop offset="55%" stop-color="#18181b"/>
        <stop offset="100%" stop-color="#09090b"/>
      </radialGradient>
      <linearGradient id="suitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#f4f4f5"/>
        <stop offset="100%" stop-color="#a1a1aa"/>
      </linearGradient>
    </defs>
    <rect width="600" height="750" fill="url(#bgGlow)"/>
    <!-- Subtle Grid Overlay -->
    <g stroke="#ffffff" stroke-opacity="0.04" stroke-width="1">
      <line x1="0" y1="150" x2="600" y2="150"/>
      <line x1="0" y1="300" x2="600" y2="300"/>
      <line x1="0" y1="450" x2="600" y2="450"/>
      <line x1="0" y1="600" x2="600" y2="600"/>
      <line x1="150" y1="0" x2="150" y2="750"/>
      <line x1="300" y1="0" x2="300" y2="750"/>
      <line x1="450" y1="0" x2="450" y2="750"/>
    </g>
    <!-- Head & Hair Silhouette -->
    <circle cx="300" cy="255" r="88" fill="#d4d4d8"/>
    <path d="M210 235 C210 155, 390 155, 390 235 C375 195, 320 190, 300 205 C280 190, 225 195, 210 235 Z" fill="#18181b"/>
    <!-- Neck -->
    <rect x="272" y="330" width="56" height="55" rx="14" fill="#a1a1aa"/>
    <!-- Crisp White Shirt Shoulders (Matching CV Shirt) -->
    <path d="M115 750 C115 510, 195 415, 300 415 C405 415, 485 510, 485 750 Z" fill="url(#suitGrad)"/>
    <!-- Inner Black Crewneck T-Shirt Collar -->
    <path d="M258 415 Q300 455 342 415 L330 390 Q300 420 270 390 Z" fill="#18181b"/>
    <!-- Shirt Collar Flaps -->
    <polygon points="268,382 300,432 238,442" fill="#ffffff"/>
    <polygon points="332,382 300,432 362,442" fill="#ffffff"/>
    <!-- Bottom Caption -->
    <rect x="0" y="650" width="600" height="100" fill="#09090b" fill-opacity="0.78"/>
    <text x="300" y="695" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="800" letter-spacing="4">NAJWAN ZALFA H.</text>
    <text x="300" y="722" text-anchor="middle" fill="#a1a1aa" font-family="monospace" font-size="13" letter-spacing="2">KLIK "GANTI FOTO" UNTUK UPLOAD FOTO CV ASLI</text>
  </svg>
`);

/* ============================================================================
   3. INTRO WELCOME SCREEN (MATCHING VIDEO REFERENCE 00:00 - 00:03)
   ============================================================================ */
function IntroScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const step = prefersReducedMotion ? 25 : 4;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setExiting(true);
            setTimeout(onComplete, 450);
          }, 200);
          return 100;
        }
        return prev + step;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  const skipIntro = () => {
    setExiting(true);
    setTimeout(onComplete, 250);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050507] transition-all duration-500 ${
        exiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Subtle Background Grid & Radial Glow */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '42px 42px'
        }}
      />
      <div className="absolute w-[420px] h-[420px] rounded-full bg-white/[0.04] blur-[120px] pointer-events-none" />

      {/* 3 Top Icons from Video Reference (</>, User, Globe) */}
      <div className="relative z-10 flex items-center gap-4 mb-7">
        {[Code2, User, Globe].map((Icon, idx) => (
          <div
            key={idx}
            className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/15 flex items-center justify-center text-zinc-200 shadow-[0_0_25px_rgba(255,255,255,0.08)]"
          >
            <Icon className="w-4 h-4" />
          </div>
        ))}
      </div>

      {/* Main Display Typography matching Video 00:02 */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-wider text-white">
          Welcome to my
        </h1>
        <h2 className="mt-2 text-3xl sm:text-5xl md:text-6xl font-black tracking-wider bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
          Portfolio Website
        </h2>

        <p className="mt-5 font-mono text-xs sm:text-sm tracking-[0.25em] text-zinc-400">
          {PORTFOLIO_DATA.personal.domain}
        </p>

        {/* Minimalist Progress Line */}
        <div className="mt-7 w-56 sm:w-64 mx-auto">
          <div className="h-[2px] w-full bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-75 shadow-[0_0_12px_#ffffff]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>INITIALIZING</span>
            <span className="text-zinc-300">{progress}%</span>
          </div>
        </div>

        <button
          onClick={skipIntro}
          className="mt-8 px-4 py-1.5 rounded-full text-xs font-mono text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 bg-white/[0.02] transition"
        >
          Skip Intro →
        </button>
      </div>
    </div>
  );
}

/* ============================================================================
   4. INTERACTIVE 3D HANGING LANYARD ID CARD (VIDEO REFERENCE 00:04 - 00:10)
   ============================================================================ */
function HangingLanyardCard({ avatarSrc, isMonochrome, onToggleMonochrome, onUploadClick }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, swingZ: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: -y * 16,
      rotateY: x * 20,
      swingZ: x * 6
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, swingZ: 0 });
  };

  return (
    <div className="relative flex flex-col items-center select-none pt-0">
      {/* Lanyard Ribbon / Strap hanging from the top */}
      <div
        className="flex flex-col items-center origin-top transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(900px) rotateZ(${tilt.swingZ}deg) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Vertical Black Strap with "ID CARD" text */}
        <div className="w-7 h-28 sm:h-36 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border-x border-white/15 flex flex-col items-center justify-around py-2 shadow-xl">
          <span className="text-[8px] font-mono tracking-[0.25em] text-zinc-400 -rotate-90 whitespace-nowrap">
            ID CARD
          </span>
          <span className="text-[8px] font-mono tracking-[0.25em] text-zinc-400 -rotate-90 whitespace-nowrap">
            IT-PLN
          </span>
        </div>

        {/* Lanyard Metal Clip & Holder */}
        <div className="w-10 h-3 rounded-sm bg-zinc-800 border border-white/20 shadow-md" />
        <div className="w-4 h-4 rounded-b-md bg-zinc-700 border-x border-b border-white/25 -mt-0.5" />

        {/* The White-Framed ID Card Badge */}
        <div className="relative -mt-1 w-64 sm:w-72 rounded-2xl bg-zinc-100 p-3 pt-4 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(255,255,255,0.08)] border border-white transition-shadow duration-300">
          {/* Card Slot Punch Hole at Top Center */}
          <div className="w-12 h-2.5 mx-auto mb-3 rounded-full bg-zinc-900 inner-shadow border border-zinc-400/40" />

          {/* Portrait Image Container */}
          <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden bg-zinc-950 group">
            <img
              src={avatarSrc}
              alt={PORTFOLIO_DATA.personal.fullName}
              className={`w-full h-full object-cover object-top transition-all duration-500 ${
                isMonochrome ? 'grayscale contrast-125 brightness-95' : ''
              } ${isHovered ? 'scale-105' : 'scale-100'}`}
            />

            {/* Subtle Bottom Vignette inside Card */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-3.5 flex flex-col justify-end">
              <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-300 uppercase">
                INFORMATION SYSTEMS
              </p>
              <h3 className="text-sm font-black text-white tracking-wide truncate">
                {PORTFOLIO_DATA.personal.fullName}
              </h3>
            </div>

            {/* Hover Action Overlay to Upload Photo or Toggle B&W Filter */}
            <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUploadClick();
                }}
                className="px-2.5 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-[11px] font-mono flex items-center gap-1 border border-white/20 shadow-lg"
                title="Ganti dengan foto CV / foto pribadi Anda"
              >
                <Camera className="w-3 h-3" /> Foto
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleMonochrome();
                }}
                className="px-2 py-1.5 rounded-lg bg-black/80 hover:bg-black text-zinc-200 text-[11px] font-mono border border-white/20 shadow-lg"
                title="Toggle Filter Monokrom Hitam-Putih seperti di Video"
              >
                {isMonochrome ? 'B&W' : 'Color'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Helper Caption below Lanyard */}
      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={onUploadClick}
          className="px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5 transition"
        >
          <Camera className="w-3.5 h-3.5" /> Upload Foto CV
        </button>
        <button
          type="button"
          onClick={onToggleMonochrome}
          className="px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 text-[11px] font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition"
        >
          <Sliders className="w-3.5 h-3.5" /> Filter: {isMonochrome ? 'Monokrom (Video)' : 'Warna Asli'}
        </button>
      </div>
    </div>
  );
}

/* ============================================================================
   5. PRINTABLE / INTERACTIVE CV RESUME MODAL (ACCURATE TO NAJWAN'S PDF CV)
   ============================================================================ */
function ResumeModal({ onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-2xl bg-[#0e0e12] border border-white/15 p-6 sm:p-8 text-zinc-200 shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400">
              CURRICULUM VITAE RESMI
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
              {PORTFOLIO_DATA.personal.fullName}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 rounded-xl bg-white text-black font-semibold text-xs flex items-center gap-1.5 hover:bg-zinc-200 transition"
            >
              <Download className="w-3.5 h-3.5" /> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Body */}
        <div className="mt-6 space-y-6 text-xs sm:text-sm leading-relaxed">
          <div className="flex flex-wrap gap-3 text-xs font-mono text-zinc-400">
            <span>Email: {PORTFOLIO_DATA.personal.email}</span>
            <span>•</span>
            <span>Lokasi: {PORTFOLIO_DATA.personal.location}</span>
            <span>•</span>
            <span>Instagram: {PORTFOLIO_DATA.personal.instagramHandle}</span>
          </div>

          <p className="text-zinc-300">{PORTFOLIO_DATA.personal.aboutBio}</p>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold border-b border-white/10 pb-1.5 mb-3">
              PENDIDIKAN
            </h4>
            <div className="space-y-3">
              {PORTFOLIO_DATA.education.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <p className="font-bold text-white">{edu.institution}</p>
                    <p className="text-zinc-400">
                      {edu.degree} — <strong className="text-zinc-200">{edu.highlight}</strong>
                    </p>
                  </div>
                  <span className="font-mono text-xs text-zinc-400">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold border-b border-white/10 pb-1.5 mb-3">
              PENGALAMAN ORGANISASI & PENGABDIAN MASYARAKAT
            </h4>
            {PORTFOLIO_DATA.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between font-bold text-white">
                  <span>
                    {exp.organization} — {exp.role}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-300">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold border-b border-white/10 pb-1.5 mb-3">
              PROYEK AKADEMIK & TEKNIS
            </h4>
            <div className="space-y-3">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between font-bold text-white">
                    <span>
                      {proj.title} ({proj.role})
                    </span>
                    <span className="font-mono text-xs text-zinc-400">{proj.year}</span>
                  </div>
                  <p className="text-zinc-300 mt-1">{proj.shortDesc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold border-b border-white/10 pb-1.5 mb-3">
              PRESTASI, SERTIFIKASI & WORKSHOP
            </h4>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-300">
              {PORTFOLIO_DATA.awards.map((aw) => (
                <li key={aw.id}>
                  <strong className="text-white">{aw.title}</strong> — {aw.organizer} ({aw.date})
                </li>
              ))}
              {PORTFOLIO_DATA.certificates.map((cert) => (
                <li key={cert.id}>
                  <strong className="text-white">{cert.title}</strong> — {cert.issuer} ({cert.date} •{' '}
                  {cert.badge})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   6. MAIN APPLICATION COMPONENT
   ============================================================================ */
export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [activePortfolioTab, setActivePortfolioTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Avatar & Monochrome Filter State (persisted to localStorage)
  const [avatarSrc, setAvatarSrc] = useState(() => {
    try {
      return localStorage.getItem('najwan_cv_avatar') || STUDIO_PORTRAIT_FALLBACK;
    } catch (e) {
      return STUDIO_PORTRAIT_FALLBACK;
    }
  });
  const [isMonochrome, setIsMonochrome] = useState(true);
  const fileInputRef = useRef(null);

  // Typewriter Effect State (matching video reference 00:05 - 00:10)
  const [roleIdx, setRoleIdx] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactFeedback, setContactFeedback] = useState(null);

  // Interactive Comments / Guestbook State (matching video reference 00:41 - 00:50)
  const [comments, setComments] = useState(() => {
    try {
      const saved = localStorage.getItem('najwan_portfolio_comments');
      return saved ? JSON.parse(saved) : PORTFOLIO_DATA.initialComments;
    } catch (e) {
      return PORTFOLIO_DATA.initialComments;
    }
  });
  const [commentForm, setCommentForm] = useState({ name: '', text: '', imagePreview: null });
  const commentImageInputRef = useRef(null);

  // Typewriter Effect Loop
  useEffect(() => {
    const roles = PORTFOLIO_DATA.personal.typewriterRoles;
    const currentFull = roles[roleIdx % roles.length];
    const speed = isDeleting ? 40 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting && typedRole === currentFull) {
        setTimeout(() => setIsDeleting(true), 1300);
      } else if (isDeleting && typedRole === '') {
        setIsDeleting(false);
        setRoleIdx((prev) => (prev + 1) % roles.length);
      } else {
        setTypedRole(currentFull.substring(0, typedRole.length + (isDeleting ? -1 : 1)));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIdx]);

  // Scroll Spy for Top Navigation Bar
  useEffect(() => {
    const onScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollY = window.scrollY + 220;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          if (scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close Modals with Escape Key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setSelectedCertificate(null);
        setShowResumeModal(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Upload Profile Photo Handler
  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      setAvatarSrc(result);
      try {
        localStorage.setItem('najwan_cv_avatar', result);
      } catch (err) {
        // ignore storage quota errors
      }
    };
    reader.readAsDataURL(file);
  };

  const resetAvatar = () => {
    setAvatarSrc(STUDIO_PORTRAIT_FALLBACK);
    try {
      localStorage.removeItem('najwan_cv_avatar');
    } catch (e) {
      // ignore
    }
  };

  const scrollToSection = (id) => {
    setSelectedProject(null);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  // Contact Form Submit (Honest Mailto Fallback to wanscnd@gmail.com)
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      setContactFeedback({
        type: 'error',
        text: 'Mohon isi Nama, Email, dan Pesan Anda terlebih dahulu.'
      });
      return;
    }
    const subject = encodeURIComponent(`Pesan Portfolio dari ${contactForm.name}`);
    const body = encodeURIComponent(
      `Halo Najwan Zalfa Hasibuan,\n\nNama: ${contactForm.name}\nEmail: ${contactForm.email}\n\nPesan:\n${contactForm.message}`
    );
    window.open(`mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`, '_blank');
    setContactFeedback({
      type: 'success',
      text: `Membuka aplikasi email Anda untuk mengirim pesan langsung ke ${PORTFOLIO_DATA.personal.email}.`
    });
  };

  // Guestbook Comment Submit (matching video reference 00:42 - 00:50)
  const handlePostComment = (e) => {
    e.preventDefault();
    if (!commentForm.name.trim() || !commentForm.text.trim()) return;
    const newEntry = {
      id: `c-${Date.now()}`,
      name: commentForm.name.trim(),
      text: commentForm.text.trim(),
      image: commentForm.imagePreview,
      pinned: false,
      likes: 0,
      likedByMe: false,
      timestamp: 'Baru saja'
    };
    const updated = [comments[0], newEntry, ...comments.slice(1)];
    setComments(updated);
    setCommentForm({ name: '', text: '', imagePreview: null });
    try {
      localStorage.setItem('najwan_portfolio_comments', JSON.stringify(updated));
    } catch (err) {
      // ignore quota
    }
  };

  const toggleLikeComment = (id) => {
    const updated = comments.map((c) => {
      if (c.id !== id) return c;
      const liked = !c.likedByMe;
      return { ...c, likedByMe: liked, likes: liked ? c.likes + 1 : Math.max(0, c.likes - 1) };
    });
    setComments(updated);
    try {
      localStorage.setItem('najwan_portfolio_comments', JSON.stringify(updated));
    } catch (e) {
      // ignore
    }
  };

  const handleCommentImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setCommentForm((prev) => ({ ...prev, imagePreview: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 relative selection:bg-white selection:text-black overflow-x-hidden font-sans">
      {/* Hidden Input for Profile Photo Upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleAvatarUpload}
        className="hidden"
      />

      {/* Intro Welcome Screen */}
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}

      {/* Architectural Dark Grid Background (Matching Reference Video) */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      {/* Subtle Ambient Monochrome Spotlight */}
      <div className="fixed top-0 left-1/4 w-[550px] h-[550px] rounded-full bg-white/[0.03] blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-zinc-400/[0.025] blur-[150px] pointer-events-none z-0" />

      {/* ================= TOP FLOATING GLASS NAVBAR (VIDEO 00:04) ================= */}
      <header className="fixed top-4 inset-x-0 z-40 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto h-14 px-5 rounded-2xl bg-zinc-950/75 backdrop-blur-xl border border-white/10 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.65)]">
          {/* Left Monospace Brand */}
          <button
            onClick={() => scrollToSection('home')}
            className="font-mono text-sm sm:text-base font-bold tracking-wider text-white hover:text-zinc-300 transition"
          >
            {PORTFOLIO_DATA.personal.brand}
          </button>

          {/* Right Navigation Links with Active Underline */}
          <nav className="flex items-center gap-5 sm:gap-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                    isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-[2px] bg-white rounded-full shadow-[0_0_8px_#ffffff]" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 pt-24 pb-24">
        {/* ================= 1. HERO SECTION (VIDEO 00:04 - 00:10) ================= */}
        <section
          id="home"
          className="min-h-[86vh] flex flex-col justify-between py-6 sm:py-10 relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto">
            {/* Left Column: Typography, Typewriter, Bio, Skill Pills, Terminal Prompts */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-zinc-400 uppercase">
                <span>{PORTFOLIO_DATA.personal.statusBadge}</span>
              </div>

              {/* Giant Geometric Stacked Title */}
              <div className="space-y-1">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-wider text-white leading-[1.03] uppercase">
                  {PORTFOLIO_DATA.personal.heroTitleLine1}
                </h1>
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-wider bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent leading-[1.03] uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.18)]">
                  {PORTFOLIO_DATA.personal.heroTitleLine2}
                </h2>
              </div>

              {/* Dynamic Typewriter Role */}
              <div className="h-8 flex items-center text-lg sm:text-2xl font-light text-zinc-200">
                <span>{typedRole}</span>
                <span className="ml-1.5 w-[2px] h-6 bg-white animate-pulse" />
              </div>

              {/* Concise Introduction */}
              <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
                {PORTFOLIO_DATA.personal.heroBio}
              </p>

              {/* Rounded Tech/Skill Pills */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {PORTFOLIO_DATA.personal.heroPills.map((pill) => (
                  <span
                    key={pill}
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/15 font-mono text-xs text-zinc-300 hover:border-white/40 transition"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              {/* Monospace Terminal Prompts matching Video 00:06 */}
              <div className="pt-4 space-y-1 font-mono text-xs text-zinc-500">
                <p>&gt; explore my academic &amp; technical work below</p>
                <p>&gt; {PORTFOLIO_DATA.personal.university} • GPA {PORTFOLIO_DATA.personal.gpa}/4.00</p>
              </div>
            </div>

            {/* Right Column: Interactive Hanging Lanyard ID Card */}
            <div className="lg:col-span-5 flex justify-center">
              <HangingLanyardCard
                avatarSrc={avatarSrc}
                isMonochrome={isMonochrome}
                onToggleMonochrome={() => setIsMonochrome((prev) => !prev)}
                onUploadClick={() => fileInputRef.current?.click()}
              />
            </div>
          </div>

          {/* Bottom Center Scroll Indicator */}
          <div className="pt-8 flex justify-center">
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-zinc-400 hover:text-white transition"
            >
              <span>SCROLL</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </div>
        </section>

        {/* ================= 2. ABOUT ME SECTION (VIDEO 00:10 - 00:18) ================= */}
        <section id="about" className="py-20 border-t border-white/10">
          {/* Section Label with Horizontal Line */}
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
              ABOUT ME
            </span>
            <div className="h-[1px] w-16 bg-white/20" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Bio & Stacked Name */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-4xl sm:text-6xl font-black tracking-wide text-white leading-[1.08]">
                <span className="block">{PORTFOLIO_DATA.personal.firstName}</span>
                <span className="block">{PORTFOLIO_DATA.personal.middleName}</span>
                <span className="block text-zinc-300">{PORTFOLIO_DATA.personal.lastName}</span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {PORTFOLIO_DATA.personal.aboutBio}
              </p>

              {/* Quote Box matching Video 00:13 */}
              <div className="p-4 rounded-xl bg-white/[0.02] border-l-2 border-white/40 text-xs sm:text-sm italic text-zinc-300">
                {PORTFOLIO_DATA.personal.quote}
              </div>

              {/* Action Buttons: Download CV & View Projects */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => setShowResumeModal(true)}
                  className="px-5 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.2)] transition"
                >
                  <FileText className="w-4 h-4" /> View / Download CV
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-white font-semibold text-xs sm:text-sm border border-white/15 flex items-center gap-2 transition"
                >
                  <ArrowUpRight className="w-4 h-4" /> View Projects
                </button>
              </div>
            </div>

            {/* Right Circular Monochrome Portrait matching Video 00:14 */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-b from-white/20 to-white/5 border border-white/15 shadow-[0_0_60px_rgba(255,255,255,0.07)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-zinc-950">
                  <img
                    src={avatarSrc}
                    alt={PORTFOLIO_DATA.personal.fullName}
                    className={`w-full h-full object-cover object-top transition duration-500 ${
                      isMonochrome ? 'grayscale contrast-125 brightness-95' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Quick Photo Controls */}
              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 text-xs font-mono text-zinc-300 flex items-center gap-1.5 transition"
                >
                  <Camera className="w-3.5 h-3.5" /> Ganti Foto
                </button>
                {avatarSrc !== STUDIO_PORTRAIT_FALLBACK && (
                  <button
                    onClick={resetAvatar}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 text-xs font-mono text-zinc-400 flex items-center gap-1 transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reset
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* 3 Horizontal Summary Counter Cards matching Video 00:15 - 00:18 */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {PORTFOLIO_DATA.stats.map((st) => {
              const Icon = st.icon;
              return (
                <button
                  key={st.id}
                  onClick={() => {
                    if (st.targetTab === 'about-timeline') {
                      const el = document.getElementById('about-timeline');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      setActivePortfolioTab(st.targetTab);
                      scrollToSection('portfolio');
                    }
                  }}
                  className="group text-left p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between h-36"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-3xl font-black text-white">{st.value}</span>
                  </div>
                  <div className="flex items-end justify-between w-full pt-4">
                    <div>
                      <p className="font-mono text-xs font-bold tracking-wider text-zinc-200">
                        {st.label}
                      </p>
                      <p className="text-[11px] text-zinc-500 mt-0.5">{st.sublabel}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Education & Organizational Experience Cards from CV */}
          <div id="about-timeline" className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Education Column */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-white" /> RIWAYAT PENDIDIKAN (CV)
              </h3>
              {PORTFOLIO_DATA.education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 transition space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs text-zinc-400">{edu.period}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-[11px] font-semibold">
                      {edu.highlight}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 font-medium">{edu.degree}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Organizational & Community Service Column */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-white" /> PENGALAMAN ORGANISASI &amp; PENGABDIAN
              </h3>
              {PORTFOLIO_DATA.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 transition space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-[11px] font-semibold">
                      {exp.badge}
                    </span>
                    <span className="font-mono text-xs text-zinc-400">{exp.period}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{exp.organization}</h4>
                    <p className="text-xs sm:text-sm text-zinc-300 font-medium mt-0.5">
                      {exp.role}
                    </p>
                  </div>
                  <ul className="space-y-2 pt-1">
                    {exp.highlights.map((bullet, idx) => (
                      <li key={idx} className="text-xs text-zinc-400 flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 3. PORTFOLIO SHOWCASE SECTION (VIDEO 00:18 - 00:39) ================= */}
        <section id="portfolio" className="py-20 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-5xl font-black tracking-wide text-white">
              Portfolio Showcase
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-3">
              Explore my journey through academic &amp; technical projects, certifications, national achievements, and technical expertise.
            </p>
          </div>

          {/* Full-Width Rounded Category Tabs Bar matching Video 00:19 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-white/[0.02] border border-white/10 mb-10">
            {[
              { id: 'projects', label: 'Projects' },
              { id: 'certificates', label: 'Certificates' },
              { id: 'awards', label: 'Awards & Honors' },
              { id: 'tech', label: 'Tech Stack' }
            ].map((tab) => {
              const active = activePortfolioTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActivePortfolioTab(tab.id)}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    active
                      ? 'bg-white/[0.09] text-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.08)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* TAB 1: PROJECTS */}
          {activePortfolioTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PORTFOLIO_DATA.projects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden bg-zinc-900">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 font-mono text-[10px] text-zinc-200">
                      {project.role} • {project.year}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-zinc-200 transition">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                        {project.shortDesc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-[10px] text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="font-mono text-xs text-zinc-500">
                        {project.liveUrl ? 'Live Demo Available' : 'Academic / Technical System'}
                      </span>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white text-white hover:text-black font-semibold text-xs border border-white/15 transition flex items-center gap-1.5"
                      >
                        Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: CERTIFICATES & WORKSHOPS (VIDEO 00:29 - 00:32) */}
          {activePortfolioTab === 'certificates' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PORTFOLIO_DATA.certificates.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCertificate(cert)}
                  className="group cursor-pointer rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 p-4 transition-all hover:-translate-y-1"
                >
                  <div className="relative h-52 rounded-xl overflow-hidden bg-zinc-900 mb-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="px-4 py-2 rounded-xl bg-white text-black font-bold text-xs flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" /> View Certificate
                      </span>
                    </div>
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 border border-white/20 font-mono text-[10px] text-white">
                      {cert.badge}
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-zinc-400">
                    {cert.issuer} • {cert.date}
                  </p>
                  <h4 className="text-base font-bold text-white mt-1">{cert.title}</h4>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: AWARDS & HONORS (FROM CV) */}
          {activePortfolioTab === 'awards' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PORTFOLIO_DATA.awards.map((award) => (
                <div
                  key={award.id}
                  onClick={() =>
                    setSelectedCertificate({
                      title: award.title,
                      issuer: award.organizer,
                      date: award.date,
                      badge: award.badge,
                      description: award.description,
                      image: award.image
                    })
                  }
                  className="group cursor-pointer rounded-2xl bg-white/[0.02] border border-white/15 hover:border-white/40 overflow-hidden transition-all hover:-translate-y-1"
                >
                  <div className="relative h-56 overflow-hidden bg-zinc-900">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white text-black font-mono text-[10px] font-bold">
                      🏆 {award.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-xs text-zinc-400">{award.date}</span>
                    <h4 className="text-lg font-bold text-white mt-1">{award.title}</h4>
                    <p className="text-xs font-semibold text-zinc-300 mt-1">{award.organizer}</p>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: TECH STACK & SKILLS (VIDEO 00:33 - 00:37) */}
          {activePortfolioTab === 'tech' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {PORTFOLIO_DATA.techStack.map((item) => (
                <div
                  key={item.name}
                  className="group p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/30 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-1"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-mono text-sm font-black mb-3 transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${item.color}18`,
                      color: item.color,
                      border: `1px solid ${item.color}45`
                    }}
                  >
                    {item.badge}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">{item.name}</h4>
                  <p className="text-[10px] text-zinc-500 mt-1">{item.category}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ================= 4. CONTACT ME & GUESTBOOK SECTION (VIDEO 00:40 - 00:50) ================= */}
        <section id="contact" className="py-20 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-black tracking-wide text-white">Contact Me</h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Have something in mind? Send a message and let&apos;s connect.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Hubungi Saya Form + Connect With Me Social Cards */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Hubungi Saya</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Feel free to reach out if you want to collaborate, discuss ideas, or simply say hello.
                </p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-3.5">
                <div>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
                  />
                </div>

                {contactFeedback && (
                  <div
                    className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                      contactFeedback.type === 'success'
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                        : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{contactFeedback.text}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-white/[0.08] hover:bg-white text-white hover:text-black font-bold text-xs sm:text-sm border border-white/15 flex items-center justify-center gap-2 transition"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>

              {/* Connect With Me Box matching Video 00:46 */}
              <div className="pt-5 border-t border-white/10 space-y-3">
                <p className="text-xs font-semibold text-zinc-300">Connect With Me</p>

                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition"
                >
                  <Mail className="w-4 h-4 text-white shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white">Email Resmi (CV)</p>
                    <p className="text-[11px] text-zinc-400 truncate">
                      {PORTFOLIO_DATA.personal.email}
                    </p>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={PORTFOLIO_DATA.personal.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition"
                  >
                    <Instagram className="w-4 h-4 text-white shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white">Instagram</p>
                      <p className="text-[10px] text-zinc-400 truncate">
                        {PORTFOLIO_DATA.personal.instagramHandle}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <MapPin className="w-4 h-4 text-zinc-300 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white">Domisili</p>
                      <p className="text-[10px] text-zinc-400 truncate">Jakarta Barat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Comments / Guestbook matching Video 00:42 - 00:50 */}
            <div className="lg:col-span-7 p-6 sm:p-7 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Comments</h3>
                <p className="text-xs text-zinc-400 mt-1">Leave your thoughts here</p>
              </div>

              <form onSubmit={handlePostComment} className="space-y-3.5">
                <input
                  type="text"
                  value={commentForm.name}
                  onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
                />
                <textarea
                  rows="3"
                  value={commentForm.text}
                  onChange={(e) => setCommentForm({ ...commentForm, text: e.target.value })}
                  placeholder="Your Comment"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
                />

                {/* Optional Upload Image in Comment */}
                <input
                  ref={commentImageInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleCommentImage}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => commentImageInputRef.current?.click()}
                  className="w-full py-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-dashed border-white/15 text-xs text-zinc-400 flex items-center justify-center gap-2 transition"
                >
                  <Camera className="w-3.5 h-3.5" />
                  {commentForm.imagePreview ? 'Gambar Terlampir (Klik untuk ganti)' : 'Upload Image (Opsional)'}
                </button>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-white/[0.08] hover:bg-white text-white hover:text-black font-bold text-xs sm:text-sm border border-white/15 transition"
                >
                  Post Comment
                </button>
              </form>

              {/* Comments Feed */}
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1 pt-2">
                {comments.map((c) => (
                  <div
                    key={c.id}
                    className="p-4 rounded-2xl bg-white/[0.025] border border-white/10 flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center font-mono text-xs font-bold text-white shrink-0">
                        {c.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold text-white">{c.name}</span>
                          {c.pinned && (
                            <span className="px-2 py-0.5 rounded-md bg-white/10 border border-white/20 font-mono text-[9px] text-zinc-200 flex items-center gap-1">
                              <Pin className="w-2.5 h-2.5" /> PINNED
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-300 mt-1 break-words">{c.text}</p>
                        {c.image && (
                          <img
                            src={c.image}
                            alt="Attachment"
                            className="mt-2 max-h-28 rounded-lg border border-white/10"
                          />
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => toggleLikeComment(c.id)}
                      className={`flex items-center gap-1 text-xs font-mono shrink-0 px-2 py-1 rounded-lg transition ${
                        c.likedByMe ? 'text-rose-400 bg-rose-500/10' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${c.likedByMe ? 'fill-rose-400' : ''}`} />
                      <span>{c.likes}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FULL-SCREEN PROJECT DETAIL VIEW (VIDEO 00:21 - 00:26) ================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#08080a]/95 backdrop-blur-xl overflow-y-auto p-4 sm:p-10">
          {/* Architectural Grid inside Detail Page */}
          <div
            className="fixed inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto py-4">
            {/* Back Button & Breadcrumb */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-white text-xs sm:text-sm font-medium border border-white/15 flex items-center gap-2 transition"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <span className="font-mono text-xs text-zinc-400">
                Projects &gt; <strong className="text-white">{selectedProject.title}</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Title, Overview, 2 Metric Cards, Technologies Used */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                    {selectedProject.role} • {selectedProject.year}
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black text-white mt-1 leading-tight">
                    {selectedProject.title}
                  </h2>
                  <div className="h-1 w-20 bg-white rounded-full mt-4" />
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {selectedProject.overview}
                </p>

                {/* 2 Metric Boxes matching Video 00:22 (Technologies Used & Key Features Count) */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-white">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xl font-black text-white">
                        {selectedProject.technologies.length}
                      </p>
                      <p className="text-[11px] text-zinc-400">Technologies Used</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-white">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xl font-black text-white">
                        {selectedProject.keyFeatures.length}
                      </p>
                      <p className="text-[11px] text-zinc-400">Key Features</p>
                    </div>
                  </div>
                </div>

                {/* Problem & Solution Cards */}
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1">
                      Latar Belakang Masalah
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-1">
                      Solusi &amp; Implementasi
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Technologies Used Pills */}
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                    <Code2 className="w-4 h-4" /> Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/15 font-mono text-xs text-zinc-200"
                      >
                        &lt;/&gt; {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Image Preview + Key Features Box matching Video 00:23 */}
              <div className="lg:col-span-6 space-y-6">
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-zinc-900 shadow-2xl">
                  <img
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    className="w-full h-72 sm:h-80 object-cover"
                  />
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Key Features
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.keyFeatures.map((feat, i) => (
                      <li key={i} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= CERTIFICATE & AWARD LIGHTBOX MODAL (VIDEO 00:30) ================= */}
      {selectedCertificate && (
        <div
          onClick={() => setSelectedCertificate(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full rounded-2xl bg-[#0e0e12] border border-white/20 overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/80 text-zinc-300 hover:text-white border border-white/20"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full max-h-[60vh] object-cover bg-zinc-950"
            />
            <div className="p-6 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs text-zinc-400">
                  {selectedCertificate.issuer} • {selectedCertificate.date}
                </span>
                <span className="px-3 py-0.5 rounded-full bg-white text-black font-mono text-xs font-bold">
                  {selectedCertificate.badge}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {selectedCertificate.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {selectedCertificate.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= PRINTABLE CV MODAL ================= */}
      {showResumeModal && <ResumeModal onClose={() => setShowResumeModal(false)} />}

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-4 text-center text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono">
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.fullName} — All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowIntro(true)}
              className="font-mono text-zinc-400 hover:text-white transition"
            >
              Replay Welcome Intro
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-zinc-300"
              title="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}