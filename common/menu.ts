export interface MenuItem {
  label: string;
  path: string;
  children?: MenuItem[];
}

export const mainMenu: MenuItem[] = [
  { label: 'Beranda', path: '/' },
  {
    label: 'Profil',
    path: '/profil',
    children: [
      { label: 'Sambutan', path: '/profil/sambutan' },
      { label: 'Pimpinan', path: '/profil/pimpinan' },
      { label: 'Tenaga Pendidikan', path: '/profil/tenaga-pendidikan' },
      { label: 'Staff', path: '/profil/staff' },
    ],
  },
  { label: 'Jurusan', path: '/jurusan' },
  { label: 'Ekstrakurikuler', path: '/ekstrakurikuler' },
  {
    label: 'Informasi',
    path: '/informasi',
    children: [
      { label: 'Berita', path: '/informasi/berita' },
      { label: 'Pengumuman', path: '/informasi/pengumuman' },
    ],
  },
  {
    label: 'Biro dan Lembaga',
    path: '/biro',
    children: [
      { label: 'Manajemen Mutu', path: '/biro/manajemen-mutu' },
      { label: 'Bursa Kerja Siswa', path: '/biro/bursa-kerja' },
      { label: 'LSP', path: '/biro/lsp' },
    ],
  },
  { label: 'PPDB', path: '/ppdb' },
  { label: 'Kontak', path: '/kontak' },
];
