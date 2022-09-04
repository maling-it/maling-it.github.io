---
template: overrides/main.html
title: 1.1 Git - Tentang Version Control
---

# 1.1 Tentang Version Control

Bab ini akan membahas tentang memulai dengan Git. Kita akan mulai dengan menjelaskan beberapa latar belakang pada peralatan `version control`, kemudian beralih ke bagaimana cara agar Git dapat berjalan pada sistem Anda, dan terakhir, bagaimana cara mengaturnya agar dapat mulai bekerja dengan Git. Pada akhir bab ini Anda seharusnya telah paham mengapa Git ada, mengapa sebaiknya Anda menggunakannya dan sebaiknya Anda sudah siap untuk melakukannya.

## Apa itu Version Control?

Apa itu `version control` dan mengapa sebaiknya Anda peduli? `Version control` adalah sebuah sistem yang merekam perubahan-perubahan dari sebuah berkas atau sekumpulan berkas dari waktu ke waktu sehingga Anda dapat menilik kembali versi khusus suatu saat nanti. Sebagai contoh, pada buku ini Anda akan menggunakan sumber kode perangkat lunak sebagai berkas-berkas yang direkam dengan `version control`, walau pada kenyataannya Anda dapat melakukan ini dengan hampir semua jenis berkas pada komputer.

Jika Anda adalah seorang perancang grafis atau web dan ingin menyimpan setiap versi dari sebuah gambar atau `layout` (yang tentunya Anda ingin melakukannya), sebuah **Version Control System (VCS)** adalah hal yang bijak untuk digunakan. VCS memperbolehkan Anda untuk mengembalikan berkas-berkas ke keadaan sebelumnya, mengembalikan seluruh proyek kembali ke keadaan sebelumnya, membandingkan perubahan-perubahan di setiap waktu, melihat siapa yang terakhir mengubah sesuatu yang mungkin menimbulkan masalah, siapa dan kapan yang mengenalkan sebuah isu dan banyak lagi. Menggunakan VCS secara umum juga berarti bahwa jika Anda melakukan kesalahan atau menghilangkan berkas, Anda dapat dengan mudah memulihkannya. Sebagai tambahan, Anda mendapatkan semua ini dengan biaya yang sangat sedikit.

## Sistem Version Control Lokal

Metode `version control` yang banyak dipilih oleh orang-orang adalah dengan menyalin berkas-berkas ke direktori lain (mungkin direktori yang diberi catatan waktu, jika mereka cerdas). Pendekatan ini sangat umum karena ini sangat sederhana, namun ini juga sangat rentan terkena galat. Mudah sekali untuk lupa pada direktori mana Anda sedang berada dan menulis ke berkas yang salah atau menyalin setiap berkas yang bukan Anda maksud secara tidak sengaja.

Untuk menghadapi hal ini, dahulu para `programmer` mengembangkan VCS lokal yang memiliki `database` sederhana yang menyimpan semua perubahan pada berkas pada `revision control`.

![Diagram version control lokal.](https://git-scm.com/book/en/v2/images/local.png)
_diagram_