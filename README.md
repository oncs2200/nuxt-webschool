# Nuxt Web School

Contoh struktur proyek Nuxt 3 untuk website sekolah dengan dukungan beberapa template.

## Fitur
- Struktur menu utama dan sub menu pada `common/menu.ts`.
- Plugin `plugins/fetchTheme.ts` memuat tema aktif dari endpoint backend `/theme` menggunakan Axios.
- Store Pinia pada `stores/meta.ts` menyimpan metadata sekolah dan tema.
- Layout global `layouts/default.vue` memuat layout sesuai tema yang dipilih.
- Setiap template memiliki layout tersendiri pada `templates/template*/layouts/DefaultLayout.vue`.

## Pengembangan
```
npm install
npm run dev
```

