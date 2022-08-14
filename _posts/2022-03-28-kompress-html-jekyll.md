---
title: Kompress HTML jekyll
category: jekyll
author: memet
tags: jekyll kompres html 
---

Sama seperti CSS dan JavaScript, output HTML dapat dikompresi dan diperkecil dengan menghapus spasi, baris baru, komentar, dan bahkan menghapus tag penutup opsional tertentu, membuat ukuran file menjadi lebih kecil.

Lihat sumber halaman ini misalnya untuk melihat hasil kompresi tersebut. Dengan Jekyll, sebuah plugin bernama [jekyll-compress-html](https://github.com/penibelst/jekyll-compress-html) membantu Anda melakukan hal itu. Plugin ini menggunakan sintaks Liquid murni untuk menyelesaikan kompresi HTML, sehingga tidak bergantung pada apa pun.

## Instalasi

Mulailah dengan plugin dalam dua langkah sederhana:

- Unduh dan ekstrak plugin `compress.html` file dan letakkan di `_layouts` folder setup Jekyll Anda.
- Di plugin utama, biasanya `default.html` , tambahkan Front Matter berikut:

```yaml
---
layout: compress
---
```

## Penggunaan

Sekarang setelah plugin dipasang dan disiapkan, Anda dapat mengonfigurasi plugin tersebut di `_config.yml`. Sebagai contoh:

```yaml
compress_html:
  clippings: all
  comments: [""]
  endings: [html, head, body, li, dt, dd, rt, rp, optgroup, option, colgroup, caption, thead, tbody, tfoot, tr, td, th]
  profile: false
  blanklines: false
  ignore:
    envs: []
```

Dan inilah rincian singkat dari opsi konfigurasi:

- `clippings` : Array elemen di mana spasi akan dihapus. Menggunakan `all` kata kunci untuk memasukkan semua elemen yang aman untuk dimanipulasi. `pre` akan diabaikan untuk mempertahankan spasi.
- `comments` : Array dengan tag awal dan akhir untuk komentar yang akan dihapus. Perhatikan spasi tambahan, sehingga komentar yang tidak memiliki spasi putih akan disimpan.
- `endings` : Array tag akhir opsional, yang akan dihapus. Gunakan kata kunci `all` untuk menghapus semuanya. Dalam contoh di atas saya menentukan semua tag akhir opsional kecuali untuk `p` .
- `profile` : Ubah tanda ini menjadi true dalam mode pengembangan untuk melihat tabel yang ditambahkan di akhir halaman Anda yang menampilkan perincian elemen pada halaman.
- `blanklines` : Ubah tanda ini menjadi true jika Anda hanya ingin menciutkan baris kosong dan menjaga jeda baris tetap utuh.
- `ignore.envs` : Array nama lingkungan Jekyll tempat tata letak kompres harus dimatikan. Ini dapat berguna jika Anda ingin mematikan kompresi dalam mode pengembangan.
- `startings` : Array tag awal opsional, yang akan dihapus. Sebagai contoh: `startings: [html, head, body]`
