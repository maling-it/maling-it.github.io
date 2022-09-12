---
template: overrides/main.html
title: 1.0 Belajar Git
---

# Belajar Git

!!! note 

	sumber panduan ini dari https://git-scm.com/book/id/v2/

## Apa itu git?

Saat ini, ada banyak tools yang digunakan oleh programmer dan developer. Salah satunya adalah Git yang menjadi tool penting dalam pengembangan sebuah website. Jangan keliru, Git bukan merupakan bahasa pemograman, tetapi sangat penting bagi programmer yang bekerja di hampir semua bahasa pemrograman. Untuk mengetahui apa itu Git, Anda perlu mengetahui fungsi Git yaitu sebagai control system untuk menjalankan proyek pengembangan software.

Git merupakan tool yang dikembangkan oleh pengembang sistem kernel dari sistem operasi Linux yaitu Linus Torvalds pada tahun 2005. Berbasis pengontrol versi atau Version Control System (VCS), Git bertugas untuk mencatat perubahan seluruh file atau repository dari suatu project baik besar maupun kecil. Tujuan penggunaan Git untuk mengelola versi source code program dengan menentukan baris dan kode yang akan ditambah atau diganti.  

Ada ratusan proyek software yang mengandalkan Git sebagai version control system mereka, termasuk proyek komersial serta open source. Biasanya developer software menggunakan Git untuk distributed version control  (VCS terdistribusi) yang bertujuan untuk menyimpan database tidak hanya ke satu tempat saja. Namun, semua orang yang terlibat dalam penyusunan kode dapat menyimpan database ini. Prosedur yang diterapkan ini dapat membantu antar divisi project untuk memantau dan menghubungkan (merge) antar ekstensi yang berbeda dengan mudah. Sehingga, aplikasi yang dibuat oleh sebuah tim project dapat berfungsi tanpa menghubungkan secara manual.

## Fitur pada Git

Anda perlu mengetahui fitur-fitur yang terdapat pada Git, yaitu:

**1. Distributed System**

Dengan sistem ini, Git memungkinkan pengguna untuk bekerja secara bersamaan pada project yang sama dari seluruh dunia, tanpa menggangu pekerjaan orang lain.

**2. Branching**

Dengan Git, maka membuat, menghapus atau menggabungkan branch akan lebih cepat, lancar dan tidak memakan banyak waktu. Hal ini juga memungkinkan para developer memiliki branch code yang independent dan massive.

**3. Open-source**

Git merupakan open-source karena  memberikan fleksibilitas untuk memodifikasi kode sumbernya sesuai dengan kebutuhan pengguna atau kebutuhan dari developer. Selain itu, memungkinkan banyak orang untuk bekerja pada proyek yang sama dan bekerja sama satu sama lain dengan sangat efisien. Hal ii dirancang sedemikian rupa sehingga dapat menangani proyek-proyek kecil dan besar dengan mudah.

**4. Version Control System yang terdistribusi**

Git menggunakan pendekatan yang disebut peer-to-peer yang berbeda dengan metode lain seperti subversion atau SVN yang menggunakan model client-server.

**5. Non-linear development**

Git memungkinkan pengguna dari seluruh dunia untuk melakukan operasi pada project dari jarak jauh. Seorang pengguna dapat mengambil bagian mana pun dari proyek dan melakukan operasi yang diperlukan dan kemudian memperbarui project lebih lanjut. Hal ini dapat dilakukan dengan non-linear development.

**6. Penyimpanan media berada pada folder .git**

Hal ini tentu berbeda dengan VCS lain contohnya seperti SVN atau CVS. Karena metadata file yang sudah disimpan dalam sebuah folder tersembunyi. Contohnya seperti .cvs, .svn, .etc.

**7. Lightweight**

Git menyimpan semua data dari repository pusat ke repository local saat cloning selesai. Hal ini memungkinkan ada ratusan pengguna yang mengerjakan proyek yang sama dan karenanya data pada repository pusat akan sangat besar. Git memiliki fitur lossless compression data yang dapat mengompresi data menjadi sangat minim dan menyimpannya di repository local.

**8. Staging Area atau Index**

Git memiliki staging area, dengan begitu developer akan dapat memformat commit atau bisa juga membuatnya agar dapat di-review sebelum akhirnya diterapkan secara benar.

## Manfaat Git

**1. Memudahkan dalam berkolaborasi dalam satu atau lebih project**

Dengan Git, akan sangat memudahkan para developer untuk berpartisipasi dalam sebuah pengembangan project yang dilakukan oleh orang-orang.

**2. Memudahkan programmer untuk mengetahui perubahan source codenya**

Anda tidak perlu  membuat file baru yang jumlahnya banyak dengan nama yang berbeda karena dengan Git programmer dapat medeteksi secara langsung perubahan yang ada.  Terdapat istilah commit pada Git yang berfungsi untuk menyimpan riwayat perubahan data pada file. Melalui commit, developer dapat kembali ke source code sebelumnya dengan istilah checkout. Selain itu, Git menyimpan seluruh versi source code.

**3. Dapat disimpan dengan offline ataupun online**

Untuk mengoperasikan Git, Anda perlu menginstall software terlebih dahulu sehingga pekerjaan ini dapat dilakukan secara offline (tidak terkoneksi internet). Software ini juga tersedia secara gratis melalui web unduhan resminya di Git Downloading.

## Kesimpulan

Setelah mengetahui apa itu Git, fungsi, dan manfaatnya. Dapat diketahui juga Git merupakan version control system paling populer digunakan saat ini, terdapat ratusan proyek software yang mengandalkan Git, sehingga dapat dikatakan Git adalah sebuah tools yang diperlukan oleh para developer atau programmer.