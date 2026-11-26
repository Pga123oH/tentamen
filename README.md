# Catatan Praktikum Anatomi · Blok I.3

Situs statis yang merangkum praktikum anatomi per sesi: struktur yang terlihat di preparat, sinyal tentamen, dan catatan asisten. Dirangkum dari rekaman praktikum dan PPT Ajar Atrium.

Bukan kunci resmi.

## Struktur

- `data/sesi1.js`, `data/sesi2.js`: isi tiap sesi. Koreksi isi di sini.
- `app.js`: logika halaman (pilih sesi, pencarian, filter, centang).
- Link langsung ke sesi tertentu: `?sesi=1`, `?sesi=2`.

## Menambah sesi baru

1. Salin `data/sesi2.js` menjadi `data/sesi3.js`, ganti `id`, `storageKey`, dan isinya.
2. Tambahkan `<script src="data/sesi3.js"></script>` di `index.html` sebelum `app.js`.
