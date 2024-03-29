---
template: overrides/main.html
title: 1.6 Git - Pengaturan Awal Git
---

Karena sekarang Anda telah memiliki Git pada sistem Anda, Anda mungkin ingin melakukan beberapa hal untuk mengatur lingkungan Git Anda. Sebaiknya Anda melakukan hal ini sekali pada setiap komputer yang diberikan; hal-hal ini akan tetap ada pada setiap peningkatan. Anda juga dapat mengubah pengaturan tersebut setiap saat dengan menjalankan kembali perintah-perintah tersebut.

Git datang dengan sebuah alat bernama `git config` yang membolehkan Anda mendapatkan dan mengatur variabel-variabel pengaturan yang mengatur semua aspek tentang bagaimana Git tampak dan bekerja. Variabel-variabel tersebut dapat disimpan pada tiga tempat yang berbeda:

1. Berkas `/etc/gitconfig`: Berisi nilai-nilai untuk setiap pengguna pada sistem dan semua repository mereka. Jika Anda memberikan pilihan `--system` kepada `git config`, dia membaca dan menulis dari berkas ini secara khusus.
2. Berkas `~/.gitconfig` atau `~/.config/git/config`: Khusus untuk pengguna Anda. Anda dapat membuat Git membaca dan menulis ke berkas ini secara khusus dengan memberikan pilihan `--global`.
3. Berkas config dalam direktori Git (yaitu, `.git/config`) atau sebarang **repository** yang sedang Anda gunakan: Khusus untuk **repository tunggal** tersebut.

Setiap tingkat menimpa nilai pada tingkat sebelumnya, jadi, nilai-nilai pada `.git/config` menimpa yang ada pada `/etc/gitconfig`.

Pada sistem Windows, Git mencari berkas `.gitconfig` pada direktori `$HOME` (`C:\Users\$USER` untuk kebanyakan orang). Git juga tetap mencari `/etc/gitconfig`, meskipun terhubung kepada `MSys root`, yang mana di manapun Anda memilih untuk memasang Git pada sistem Windows Anda ketika Anda menjalankan pemasang Git.

## Identitas

Hal pertama yang sebaiknya Anda lakukan ketika memasang Git adalah menetapkan nama pengguna dan alamat surel. Ini penting, karena setiap `commit` pada Git menggunakan informasi ini, dan itu dituliskan dan tidak dapat diganti ke dalam `commit` yang Anda buat:

``` title="Konfigurasi Nama"
git config --global user.name "John Doe"
```
``` title="Konfigurasi Email"
git config --global user.email johndoe@example.com
```

Sekali lagi, Anda hanya perlu melakukan ini sekali saja jika Anda memberikan pilihan `--global`, karena Git akan selalu menggunakan informasi tersebut untuk apapun yang Anda lakukan pada sistem tersebut. Jika Anda ingin menimpa ini dengan nama atau alamat surel yang berbeda untuk proyek tertentu, Anda dapat menjalankan perintah tanpa pilihan `--global` ketika Anda berada pada proyek tersebut.

Banyak dari peralatan GUI akan membantu Anda melakukan hal ini ketika Anda menjalankannya pertama kali.

## Editor

Sekarang, identitas Anda telah siap, Anda dapat mengatur editor teks bawaan yang akan digunakan ketika Git memerlukan Anda untuk menuliskan pesan/ Jika tidak diatur, Git menggunakan editor teks bawaan pada sistem Anda, yang pada umumnya adalah Vim. Jika Anda ingin menggunakan editor teks yang berbeda, seperti Emacs, Anda dapat melakukan hal berikut:

```
git config --global core.editor emacs
```

!!! danger "Note"

    Vim dan Emacs adalah editor teks terkenal yang sering digunakan oleh para pengembang pada sistem berdasarkan Unix seperti Linux dan Mac. Jika Anda tidak terbiasa dengan kedua editor tersebut atau berada pada sistem Windows, Anda mungkin perlu mencari arahan tentang bagaimana cara mengatur editor kesukaan Anda dengan Git. Jika Anda tidak menetapkan editor seperti ini dan Anda tidak tahu apa itu Vim atau Emacs, Anda akan mendapatkan hal yang membingungkan ketika mereka diluncurkan.

## Cek Pengaturan

Jika Anda ingin memeriksa pengaturan Anda, Anda dapat menggunakan perintah `git config --list` untuk mendaftar semua pengaturan yang dapat ditemukan Git pada saat itu:

```bash
git config --list
	user.name=John Doe
	user.email=johndoe@example.com
	color.status=auto
	color.branch=auto
	color.interactive=auto
	color.diff=auto
	...
```
Anda mungkin melihat kunci-kunci lebih dari satu, karena Git membaca kunci yang sama dari berkas-berkas yang berbeda (`/etc/gitconfig` dan `~/.gitconfig`, contohnya). Dalam hal ini, Git menggunakan nilai terakhit dari setiap kunci unik yang dia lihat.

Anda juga dapat memeriksa apa yang Git pikirkan dalam nilai kunci khusus dengan mengetikkan `git config <key>`:
```
git config user.name
	Jhon Doe
```