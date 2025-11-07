# Fisher's Hood

Website yang didesain untuk pemancing, dibuat untuk Tugas Besar Pemrograman Web & Mobile - Tahap 3

Oleh Kelompok 7, kelas C1 2024 (Selasa): 
- Willsoon Tulus P. S. (2404756)
- Hatyja Kakajanova (2432601)

## Indeks Halaman Web

1. Halaman depan: `/`
2. Pemesanan alat mancing: `/shop`
3. Checkout / Pembayaran: `/checkout`

## Konfigurasi

Untuk mengubah host dan port dalam lingkungan pengembangan, dapat dilakukan dengan merubah isi file `vite.config.js` seperti host untuk mengubah alamat host (dapat diubah ke true atau 0.0.0.0 untuk membuka akses website dari luar), serta port untuk mengubah port hosting.

```json
server: {
  host: true,
  port: 5173,
}
```

Referensi konfigurasi lainnya dapat dilihat di halaman [Vite Configuration Reference](https://vite.dev/config/).

## Software yang diperlukan

- Node.js versi 22.12.0 atau lebih baru
- MariaDB / MySQL (untuk saat ini belum menggunakan database)

## Instalasi Package

### Untuk memasang modul Node.js yang diperlukan:

```sh
npm install
```

### Untuk menjalankan package dalam lingkungan pengembangan:

```sh
npm run dev
```

### Untuk mengkompilasi package untuk penggunaan dalam lingkungan produksi:

```sh
npm run build
```
