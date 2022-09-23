---
template: overrides/main.html
title: 1.14 Shell - Enviroment Variables
---


# Environment Variables

## Pengertian

Environment variables adalah variabel yang tersimpan di _environment_ shell dan menyimpan data mengenai environment / OS yang digunakan.

## Contoh

Beberapa contoh environment variables yang umum digunakan:

| Variabel    | Deskripsi                                                  |
|-------------|------------------------------------------------------------|
| `$HOME`     | Lokasi direktori /home dari user                           |
| `$PREFIX`   | Path ke direktori /usr                                     |
| `$PATH`     | Kumpulan path untuk mencari lokasi package yang dijalankan |
| `$PWD`      | Lokasi direktori yang ditempati                            |
| `$SHELL`    | Lokasi shell yang digunakan                                |

## Mendapatkan Daftar Environment Variables Yang Ada

Untuk melihat Environment Variables yang ada, ketikkan `printenv` di Terminal.

Sebagai contoh, di Ubuntu 20.04 unity:

```bash
[I] ◆ shell git:(main) ✗ ❯❯❯ printenv 
COMPIZ_CONFIG_PROFILE=ubuntu
LANG=en_US.UTF-8
CLUTTER_IM_MODULE=ibus
GEM_PATH=/home/memet/.rvm/gems/ruby-3.0.3:/home/memet/.rvm/gems/ruby-3.0.3@global
DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus
GDMSESSION=unity
XAUTHORITY=/run/user/1000/gdm/Xauthority
LC_PAPER=id_ID.UTF-8
XDG_MENU_PREFIX=gnome-
GEM_HOME=/home/memet/.rvm/gems/ruby-3.0.3
rvm_bin_path=/home/memet/.rvm/bin
QT4_IM_MODULE=ibus
KOTLIN_HOME=/home/memet/.sdkman/candidates/kotlin/current
XDG_SESSION_DESKTOP=unity
VTE_VERSION=6003
MY_RUBY_HOME=/home/memet/.rvm/rubies/ruby-3.0.3
	....
```

Dapat dilihat, environment variables yang ada di Ubuntu sangat banyak, beberapa juga berhubungan dengan sistem.

> Environment Variables pada tiap sistem berbeda-beda!

## Environment Variables Sistem

Environment Variables sistem adalah environment variables yang tersedia secara bawaan dari OS yang digunakan. Seperti `$HOSTNAME`, `$USER`, `$UID`, dan lain-lain.

Variabel-variabel ini tidak ada di `printenv`, melainkan dari file sistem, seperti: `$HOSTNAME => /etc/hostname`. Beberapa variabel terdapat pada file sistem yang tersembunyi.

## Menambahkan Environment Variables

Anda dapat menambahkan environment variables Anda sendiri sehingga dapat diakses oleh semua proses dalam satu shell. Jalankan perintah:

```bash hl_lines="1"
[I] ◆ shell git:(main) ✗ ❯❯❯ export namaVariabel=isiVariabel
[I] ◆ shell git:(main) ✗ ❯❯❯ env | grep namaVariabel
namaVariabel=isiVariabel
```

untuk menambah environment variable, dimana `namaVariabel` merupakan nama dari variabel dan `isiVariabeel` adalah isi/value dari variabel. `export` merupakan perintah yang digunakan untuk mengekspor variabel ke dalam environment variables.

Perlu diketahui bahwa environment variable yang Anda tambahkan hanya bersifat sementara dan hanya dapat diakses oleh shell yang digunakan. Jika Anda menggunakan shell lain atau membuka ulang shell, maka variabel tersebut akan terhapus/tidak ditemukan.


