---
title: Replikasi Database
author: memet
category: database
tags: database 
---

## A. Konsep Dasar Replikasi

Replika adalah hasil replikasi satu relasi data atau fragmen relasi yang dapat disimpan pada lebih dari satu tempat, jumlah replika fragmen relasi tidak harus sama untuk satu relasi. Contoh jika relasi R dijadikan tiga fragmen R1, R2, R3, mungkin R1 tidak dibuat replikanya, tetapi R2 dibuat replika di satu tempat lain dan R3 dibuat replika di semua tempat.

Replikasi database adalah seperangkat teknologi yang digunakan untuk menyalin dan mendistribusikan data dari satu database ke database yang lain. Dan selanjutnya, mensinkronisasikan antar database untuk menjaga konsistensi. Dengan replikasi, data dapat didistribusikan ke lokasi yang berbeda dan pengguna yang jauh melalui LAN, WAN, Dial-up Connection, wireless connections, dan internet. Alasan umum yang mendasari kenapa harus menggunakan replikasi, yaitu:

1. Untuk membuat sebuah server basis data  siaga. Jika server utama gagal, maka server siaga dapat mengambil alih tugas server utama.
2. Untuk mengaktifkan backup tanpa harus mematikan server utama.  Setelah terjadi replikasi, backup dilakukan pada slave, bukan pada master. Dengan cara ini, masterdapat dibiarkan untuk melakukan tugasnya tanpa gangguan.
3. Untuk menyimpan data saat ini di beberapa lokasi. Replikasi diperlukan jika beberapa cabang dari suatu organisasi harus bekerja dari salinan terbaru dari basis data yang sama.
4. Untuk menyeimbangkan beban kerja beberapa server. Sehingga memungkinkan untuk membuat replika dari satu basis data pada beberapa server, replikasi dapat membantu meringankan beban kerja dari server basis data tunggal yang kelebihan beban dengan memecah query antara beberapa server, masing-masing berjalan pada perangkat keras terpisah. (Vaswani, 2010).

Pada umumnya replikasi mendukung ketersediaan data setiap waktu dan dimanapun diperlukan. Keuntungan lainnya adalah :

1. Memungkinkan beberapa lokasi menyimpan data yang sama. Hal ini sangat berguna pada saat lokasilokasi tersebut membutuhkan data yang sama atau memerlukan server yang terpisah dalam pembuatan aplikasi laporan.
2. Aplikasi transaksi online terpisah dari aplikasi pembacaan seperti proses analisis database secara online, data smarts atau data warehouse.
3. Memungkinkan otonomi yang besar. Pengguna dapat bekerja dengan meng-copy data pada saat tidak terkoneksi kemudian melakukan perubahan untuk dibuat database baru pada saat terkoneksi
4. Data dapat ditampilkan seperti layaknya melihat data tersebut dengan menggunakan aplikasi berbasis Web
5. Meningkatkan kinerja pembacaan
6. Membawa data mendekati lokasi individu atau kelompok pengguna. Hal ini akan membantu mengurangi masalah karena modifikasi data dan pemrosesan query yang dilakukan oleh banyak pengguna karena data dapat didistribusikan melalui jaringan dan data dapat dibagi berdasarkan kebutuhan masing-masing unit atau pengguna.
7. Penggunaan replikasi sebagai bagian dari strategi standby server.
Menyembunyikan perbedaan-perbedaan antara layanan replicated dan non-replicated

## B. Tujuan Replikasi
Tujuan replikasi motivasi, yaitu :
- Meningkatkan availabilitas data
- Mempercepat evaluasi query jika ada replika fragmen atau satu relasi pada tempat lokal.

## C. Jenis-jenis Replikasi

Ada dua jenis replikasi, yaitu :

1. Replika sinkron

Ada dua teknik dasar untuk menjamin transaksi menghasilkan satu hasil dan tidak bergantung pada akses terhadap data atau replika data yang digunakan dalam perhitungan transaksi :

a.Teknik pertama disebut voting.

Transaksi harus menulis mayoritas data dan replikanya dan membaca minimal satu replica yang dianggap paling mutakhir. Contoh jika ada 10 replika data dan 7 replika ditulis oleh transaksi update, maka 4 data lainnya juga harus ditulis. Setiap replika mempunyai nomor versi. Replika dengan nomor versi tertinggi dianggap paling mutakhir. Teknik ini kurang menarik, karena akan terjadi banyak proses baca, padahal proses baca sangat diperlukan pada transaksi berikutnya.

b. Teknik kedua disebut read-any write-all,

artinya untuk proses baca cukup melibatkan satu replika, tetapi ketika proses tulis harus melibatkan semua replika. Proses baca dapat dilakukan dengan cepat apalagi baca data lokal, tetapi proses tulis lebih lama. Teknik ini lebih populer, karena proses baca lebih sering dibutuhkan dibandingkan proses tulis.

2. Replika asinkron

Replikasi sinkron memerlukan biaya lebih tinggi dibanding asinkron, karena selama transaksi update belum commit, maka semua replika harus di kunci secara eksklusif.

Untuk teknik read-any write-all, maka jika ada kelambatan atau kegagalan komunikasi, maka transaksi tidak bisa commit karena harus menunggu sampai semua replikasi di tulis, sehingga replikasi sinkron kurang realistis

Sebaliknya replikasi asinkron lebih realistis, walaupun melanggar prinsip independensi data terdistribusi selama interval waktu tertentu sampai dilakukan transaksi update secara berkala. Jadi pengguna harus berhati-hati dan harus dapat mengenali replika yang paling mutakhir.

Tentu saja replikasi asinkron tidak cocok untuk aplikasi yang real time (waktu nyata)

Pada replikasi asinkron terdapat dua pilihan, yaitu :

1. `Replikasi asinkron situs primer`:
Replikasi asinkron situs primer memiliki satu replika yang dianggap sebagai master atau data primer. Replika lainnya disebut replika sekunder. Tidak seperti replika primer, replika sekunder tidak dapat di-update langsung. Mekanisme pemilihan replika primer dan sekunder melalui mekanisme pendaftaran oleh pengguna dan penentuan relasi di situs  tertentu yang dijadikan replika primer dan replika lainnya harus mengacunya.

2. `Replikasi asinkron peer-to-peer`:
Pada replikasi asinkron peer-to-peer, beberapa replika bisa di-update (mungkin tidak semua) dan dijadikan replika master. Dalam hal terjadi konflik, karena masalah keterlambatan propagasi, maka harus diterapkan salah satu strategi penanganan konflik. Secara umum konflik biasanya dapat diselesaikan, bahkan lebih sering tidak terjadi konflik, sehingga jenis replikasi ini banyak digunakan.

Salah satu strategi pencegah konflik adalah waktu proses transaksi update tidak bersamaan dan pada satu saat hanya dilakukan terhadap salah satu replika (yang lain tidak dapat di-update), kemudian perubahan terhadap replika master itu dipropagasi ke replika yang lain. Jika ada kegagalan update terhadap salah satu replika, maka diambil alih oleh salah satu replika yang lain yang biasa dijadikan sebagai backup. Pada sistem terdistribusi transaksi dapat dilakukan pada suatu tempat tetapi dapat akses data di tempat lain. Setiap transaksi dipecah menjadi beberapa sub-transaksi yang dijalankan secara tersebar melalui manajer transaksi pada setiap tempat sub-transaksi dijalankan untuk dikoordinasikan. Untuk kasus kontrol proses yang terjadi bersamaan (konkuren), maka ada mekanisme penguncian objek yang digunakan yang ada di tempat lain, juga bagaimana cara mendeteksi jika terjadi deadlock.

Pengelolaan penguncian objek yang terdistribusi dapat dilakukan dengan beberapa cara, yaitu :

- `Secara terpusat (sentralisasi)`

Pada cara terpusat, penanganan penguncian dilakukan dari satu tempat.

- `Replika primer`

Pada cara replika primer, penanganan penguncian dilakukan pada tempat replika primer berada.

- `Terdistribusi penuh`

Pada cara terdistribusi penuh, maka penanganan penguncian dilakukan pada tempat replika yang akan dikunci. Cara ini lebih banyak digunakan.

## D. Metode Replikasi

Ada 4 metode replikasi yaitu :

1.Snapshot

- Mencopy semua data dari ARTIKEL ke SUBSCRIBER
- Mengabaikan data yang telah dimodifikasi di SUBSCRIBER (subscriber menjadi Read Only)
- Network Bandwidth yang dibutuhkan sangat besar
- Mudah implementasinya
- Proses Copy Artikel terjadi dalam suatu waktu

2.Transactional

- Proses Copy Transaksi dari Artikel, dengan memanfaatkan Transaction Log milik Publication DB
- Setiap perubahan data yang terjadi akan dicopy dulu ke Distributor, baru kemudian dicopy ke Subscriber
- Lebih efisien daripada Snapshot Replication
- Traffic Network menjadi minimal (krn butuh bandwidth kecil)
- Real Time

3.Transactional publication with updatable subscriptions

- Seperti Transactional Replication
- Bedanya, Subscriber bisa juga mempublikasi ke Pusblisher

4.Merge

- Publisher & Subscriber berhak untuk melakukan Publikasi secara independen
- Publisher bisa mempublikasikan datanya ke site-site yang lain
- Subscriber bisa mempublikasikan datanya ke site-site yang lain
- Konflik data bisa terjadi, tapi bisa ditangani dengan menetapkan beberapa aturan khusus
- Proses “Merge” terjadi dalam suatu interval waktu
 

## E. Manfaat Replikasi Database

Adapun manfaat dengan adanya Replikasi Database yaitu :

- Menghindari kemungkinan tidak semua data ter-backup karena saat proses backup data manual dilakukan bisa saja terjadi perubahan data oleh client
- Apabila server master mengalami kerusakan, database bisa segera dialihkan ke server slave
- Replikasi master-slave berlangsung secara realtime dimana setiap perubahan pada data server master akan otomatis merubah data pada server slave
