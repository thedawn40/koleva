import {
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  ClipboardList,
  HeartHandshake,
  History,
  KeyRound,
  PiggyBank,
  Plane,
  ScrollText,
  ShieldCheck,
  UserPlus,
  Users,
  UsersRound,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Fitur", href: "#fitur" },
  { label: "Harga", href: "#harga" },
  { label: "Keamanan", href: "#keamanan" },
  { label: "FAQ", href: "#faq" },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Wallet,
    title: "Saldo kelompok",
    description:
      "Satu tampilan untuk melihat total dana yang terkumpul, sisa saldo, dan progres menuju target tabungan bersama.",
  },
  {
    icon: ClipboardList,
    title: "Pencatatan kontribusi",
    description:
      "Catat setiap setoran anggota lengkap dengan nominal, tanggal, dan keterangan sehingga tidak ada yang terlewat.",
  },
  {
    icon: History,
    title: "Riwayat transaksi",
    description:
      "Seluruh pemasukan dan pengeluaran tersusun rapi dan bisa ditelusuri siapa saja anggota yang berhak melihat.",
  },
  {
    icon: Users,
    title: "Manajemen anggota",
    description:
      "Undang anggota, atur peran, dan tentukan siapa yang dapat mengajukan maupun menyetujui pencairan dana.",
  },
  {
    icon: ShieldCheck,
    title: "Persetujuan mayoritas",
    description:
      "Pencairan dana baru berjalan setelah disetujui sebagian besar anggota, mencegah keputusan sepihak.",
  },
];

export type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    icon: UsersRound,
    title: "Buat kelompok",
    description:
      "Tentukan nama kelompok, tujuan menabung, serta target dana yang ingin dicapai bersama.",
  },
  {
    icon: UserPlus,
    title: "Undang anggota",
    description:
      "Tambahkan keluarga, teman, atau rekan komunitas lalu atur peran dan hak akses masing-masing.",
  },
  {
    icon: PiggyBank,
    title: "Kumpulkan dana",
    description:
      "Setiap kontribusi tercatat otomatis dengan nominal dan tanggal, sehingga saldo selalu terbarui.",
  },
  {
    icon: Banknote,
    title: "Ajukan pencairan",
    description:
      "Ajukan pencairan dengan tujuan yang jelas. Dana cair setelah disetujui mayoritas anggota.",
  },
];

export type SecurityPoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const securityPoints: SecurityPoint[] = [
  {
    icon: ScrollText,
    title: "Catatan transaksi yang jelas",
    description:
      "Setiap pemasukan dan pengeluaran tercatat dengan waktu, nominal, serta keterangan yang mudah diaudit ulang.",
  },
  {
    icon: KeyRound,
    title: "Hak akses anggota",
    description:
      "Atur siapa yang dapat melihat, mencatat, atau menyetujui transaksi sesuai perannya di dalam kelompok.",
  },
  {
    icon: BadgeCheck,
    title: "Status persetujuan",
    description:
      "Lihat posisi setiap permintaan pencairan secara real-time, termasuk jumlah anggota yang sudah menyetujui.",
  },
];

export type UseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
};

export const useCases: UseCase[] = [
  {
    icon: HeartHandshake,
    title: "Keluarga",
    description:
      "Kelola kas keluarga untuk kebutuhan bersama, dana darurat, atau tabungan pendidikan anak.",
    tag: "Contoh tujuan",
  },
  {
    icon: Plane,
    title: "Liburan bersama",
    description:
      "Kumpulkan biaya perjalanan bersama tanpa canggung menagih, karena semua setoran terlihat jelas.",
    tag: "Contoh tujuan",
  },
  {
    icon: UsersRound,
    title: "Komunitas",
    description:
      "Catat iuran anggota dan pengeluaran kegiatan organisasi secara rapi dan terbuka bagi seluruh pengurus.",
    tag: "Contoh tujuan",
  },
  {
    icon: BriefcaseBusiness,
    title: "Kelompok usaha",
    description:
      "Kelola modal bersama dan bagi hasil usaha kecil dengan pencatatan kontribusi yang transparan.",
    tag: "Contoh tujuan",
  },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  cta: string;
  highlighted?: boolean;
  badge?: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Keluarga",
    price: "Gratis",
    period: "selama masa akses awal",
    tagline: "Untuk mengelola kas keluarga atau tabungan bersama kecil.",
    cta: "Gabung Daftar Tunggu",
    features: [
      "1 kelompok aktif",
      "Hingga 6 anggota",
      "Pencatatan kontribusi & riwayat transaksi",
      "Persetujuan mayoritas untuk pencairan",
    ],
  },
  {
    name: "Komunitas",
    price: "Rp39.000",
    period: "/kelompok/bulan",
    tagline: "Untuk iuran organisasi, komunitas, dan teman-teman.",
    cta: "Gabung Daftar Tunggu",
    highlighted: true,
    badge: "Paling populer",
    features: [
      "Hingga 20 anggota",
      "Hak akses & peran anggota",
      "Ekspor riwayat transaksi",
      "Aturan persetujuan yang dapat diatur",
      "Dukungan prioritas",
    ],
  },
  {
    name: "Usaha",
    price: "Rp79.000",
    period: "/kelompok/bulan",
    tagline: "Untuk modal bersama dan pengelolaan dana kelompok usaha.",
    cta: "Gabung Daftar Tunggu",
    features: [
      "Anggota hingga 50 orang",
      "Multi-admin dengan peran khusus",
      "Laporan keuangan kelompok",
      "Aturan pencairan lanjutan",
      "Dukungan prioritas",
    ],
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Apa itu Koleva?",
    answer:
      "Koleva adalah aplikasi untuk mengelola tabungan dan dana bersama. Koleva membantu keluarga, teman, komunitas, dan kelompok usaha mencatat kontribusi, memantau saldo, serta mengatur persetujuan pencairan dalam satu tempat.",
  },
  {
    question: "Bagaimana cara kerja Koleva?",
    answer:
      "Anda membuat kelompok, mengundang anggota, lalu mencatat setiap kontribusi. Dana yang terkumpul dapat dipantau bersama. Saat ada kebutuhan pencairan, anggota mengajukan permintaan dan dana diproses setelah mendapat persetujuan mayoritas.",
  },
  {
    question: "Bagaimana mekanisme pencairan dananya?",
    answer:
      "Setiap pencairan diajukan dengan tujuan dan nominal yang jelas. Permintaan tersebut masuk ke daftar persetujuan anggota. Pencairan baru dijalankan setelah jumlah persetujuan memenuhi ambang mayoritas yang ditentukan kelompok.",
  },
  {
    question: "Siapa saja yang bisa melihat catatan transaksi?",
    answer:
      "Hanya anggota kelompok yang berhak. Setiap anggota memiliki peran dan hak akses yang diatur, sehingga informasi keuangan hanya terlihat oleh orang yang seharusnya.",
  },
  {
    question: "Apakah Koleva sudah bisa digunakan sekarang?",
    answer:
      "Koleva masih dalam tahap pengembangan. Saat ini Anda dapat bergabung ke daftar tunggu untuk mendapatkan kabar ketika akses dibuka. Kami akan memberi tahu melalui email yang Anda daftarkan.",
  },
];

export const dashboard = {
  groupName: "Tabungan Liburan Bali",
  period: "Periode Mei 2026",
  balance: 12_500_000,
  target: 20_000_000,
  memberCount: 6,
  contributionCount: 18,
  contributions: [
    { name: "Rani", amount: 50_000, date: "12 Mei" },
    { name: "Budi", amount: 50_000, date: "11 Mei" },
    { name: "Sinta", amount: 75_000, date: "10 Mei" },
    { name: "Andi", amount: 50_000, date: "09 Mei" },
  ],
  weeklyBars: [42, 58, 47, 72, 64, 88, 76],
  withdrawal: {
    title: "Pemesanan penginapan",
    amount: 4_200_000,
    approvals: 4,
    totalApprovers: 6,
  },
} as const;
