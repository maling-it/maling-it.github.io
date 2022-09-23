---
template: overrides/main.html
title: 1.17 Shell - Izin File
---


# Permission File
Oke masih mengenai tentang file, sebelum itu apa si yang dimaksud dengan `permission file ?`. Permission file ialah metode dimana untuk mengelola hak akses dari sebuah file. Untuk mengubah permission file itu sendiri dengan command `chmod`, contoh yang kita lakukan pada pembelajaran hari ini kita sering melakukan `chmod 777`. Lalu yang dimaksud angka `777`? Apakah kode rahasia? Atau apa?, Sebelum itu kita pernah menemukan hal seperti ini ketika melihat isi directory

```
[I] ◆ shell git:(main) ✗ ❯❯❯ ls -la
total 84
drwxrwxr-x 2 memet memet 4096 Sep 23 14:12 ./
drwxrwxr-x 4 memet memet 4096 Sep 15 14:35 ../
-rw-rw-r-- 1 memet memet 5166 Sep 23 06:39 array.md
-rw-rw-r-- 1 memet memet 2228 Sep 15 22:07 bc-command.md
-rw-rw-r-- 1 memet memet  732 Sep 23 06:48 break.md
-rw-rw-r-- 1 memet memet 1110 Sep 23 06:49 continue.md
-rw-rw-r-- 1 memet memet 3061 Sep 23 14:01 enviroment-variable.md
-rw-rw-r-- 1 memet memet 6933 Sep 23 06:53 funtions.md
-rw-rw-r-- 1 memet memet  666 Sep 15 14:55 hello-world.md
-rw-rw-r-- 1 memet memet 1647 Sep 15 14:47 index.md
-rw-rw-r-- 1 memet memet 3125 Sep 15 22:16 instruksi-logika.md
-rw-rw-r-- 1 memet memet    0 Sep 23 14:12 izin_file.md
-rw-rw-r-- 1 memet memet 3854 Sep 23 06:45 loops.md
-rw-rw-r-- 1 memet memet 1703 Sep 15 21:47 operasi-aritmatika.md
-rw-rw-r-- 1 memet memet 1110 Sep 23 14:05 operasi-file.md
-rw-rw-r-- 1 memet memet  913 Sep 23 14:06 operasi-folder.md
-rw-rw-r-- 1 memet memet 2803 Sep 15 16:00 operator.md
-rw-rw-r-- 1 memet memet 1349 Sep 16 02:29 user-input.md
-rw-rw-r-- 1 memet memet 2385 Sep 15 14:59 variabel.md
-rw-rw-r-- 1 memet memet 1831 Sep 15 15:04 variabel-spesial.md

```

Mungkin kita awali dengan stepnya , maksudnya step itu bagaimana? Mungkin bisa disebut user, permission file juga melibatkan beberapa user dalam melakukannya, kita ambil contoh file `test.sh`

|   Symbol  	|                Deskripsi               	|
|:---------:	|:--------------------------------------:	|
|   `-rwx`  	|   Oke ini untuk permission untuk user  	|
|   `r-x`   	|       Ini permission untuk group       	|
|   `r-x`   	|       Ini permission untuk other       	|


Loh heh penjelasanya bagaimana? untuk penjelasana apa itu `-rwx, r-x` kalian bisa melihat penjelasan dibawah ini, kalian bisa mengetahui apa yang dimaksud `-rwx, r-x` dan `chmod` apa yang digunakan

|  Symbol  	|                           Deskripsi                          	|
|:--------:	|:------------------------------------------------------------:	|
|    `r`   	|            Akses yang digunakan untuk membaca saja           	|
|    `w`   	|             Diberi akses untuk mengubah isi file             	|
|    `x`   	|              Permission untuk meng-eksekusi file             	|
|    `-`   	|                Tidak mendapatkan akses apapun                	|
|    `d`   	|             Tipenya merupakan folder / directory             	|

Dari tabel diatas menjelaskan bahwa setiap permission yang kita lakukan memiliki alur yang berbeda, ada yang memberikan akses keseluruhan dan ada juga yang hanya membaca saja. Lalu bagaimana kita mengetahuinya, bahwa akses itu hanya digunakan untuk membaca saja. Oke lihat tabel berikut ini

|    Nomor    	|       Permission Type      	|       Symbol       	|
|:-------------:|:-----------------------------:|:---------------------:|
|     `0`     	|        No Permission       	|         `-`        	|
|     `1`     	|           Execute          	|        `-x`        	|
|     `2`     	|            Write           	|        `-w`        	|
|     `3`     	|       Execute + Write      	|        `-wx`       	|
|     `4`     	|            Read            	|        `r-`        	|
|     `5`     	|       Read + Execute       	|        `r-x`       	|
|     `6`     	|        Read + Write        	|        `rw-`       	|
|     `7`     	|   Read + Write + Execute   	|        `rwx`       	|

Dari sini kita tahu bahwa setiap `file` yang di permission `chmod 777` maka akan mendapatkan kesluruhan akses , baik membaca, write, dan execute. Oke lalu bagaimana dengan yang `chmod +x`, `chown`, dan sebagainya. Next kita bahas di folder lainnya.

## Contoh Progam
Oke kita sudah tahu bahwa setiap file memiliki permission dan alur yang berbeda, nah kali ini kita akan mencoba membuat sebuah progam dengan shell scripting dimana progam ini akan chmod sebuah file yang kita input / panggil. Bagaimana kah itu?, oke disini mungkin sekalian mereview materi basic kembali, progam yang kita pakai ada bberapa metode, mulai dari `Function + Input User + If Statement +  Pemanggilan File`. Oya untuk chmodnya kita gunakan sesuai dengan inputan user, seperti inilah contohnya

```bash
#!/bin/bash

permission_file(){
    echo -e "Masukan File : \c"
    read file_name
    
    if [[ -f $file_name ]]
    then
        echo "Permission (ex. 777): "
        read permissions
        chmod $permissions $file_name
    else
        echo "Not Found"
    fi
}

permission_file
```
