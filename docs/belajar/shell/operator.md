---
template: overrides/main.html
title: 1.4 Shell - Operator
---


# operator

ada berbagai operator yang didukung oleh setiap shell antara lain

- operator aritmatika 
- operator relasional
- operator boolean

## Aritmatika
Bourne shell awalnya tidak memiliki mekanisme untuk melakukan operasi aritmatika sederhana tetapi menggunakan program eksternal, baik **awk** atau **expr**.

contoh operator aritmatikan antara lain yaitu

- penambahan (``+``)
- pengurangan (``-``)
- perkalian (``*``)
- pembagian (``\``)
- modulus (``%``)

```bash title="contoh"
#!/usr/bin/bash

penjumlahan=`expr 2 + 2`
pengurangan=`expr 5 - 3`
perkalian=`expr 3 * 4`
pembagian=`expr 6 / 2`

echo "Hasil penjumlahan 2 + 2 = $penjumlahan"
echo "Hasil pengurangan 5 - 3 = $pengurangan"
echo "Hasil perkalian 3 * 4 = $perkalian"
echo "Hasil pembagian 6 / 2 = $pembagian"

```
## Relasional

Bourne Shell mendukung operator relasional berikut yang khusus untuk nilai numerik. Operator ini tidak bekerja untuk nilai string kecuali nilainya numerik.

Misalnya, operator berikut akan bekerja untuk memeriksa hubungan antara 10 dan 20 serta di antara "10" dan "20" tetapi tidak di antara "sepuluh" dan "dua puluh".

| Operator      | Desktipsi | Contoh |
| ----------- | ------------------------------------ | -------- |
| `-eq`       | memeriksa apakah nilai dua operan sama atau tidak;, jika ya, maka kondisinya menjadi benar  | `[ $a -eq $b ]` tidak benar.
| `-ne`       | memeriksa apakah nilai dua opran sama atau tidak; jika nilainya tidak sama, maka kondisinya menjadi benar. | `[ $a -ne $b ]` benar.
| `-gt`    | memeriksa apakah nilai operan kiri lebih besar dari nilai operan kanan; jika ya, maka kondisinya menjadi benar. | `[ $a -gt $b ]` tidak benar.
| `-lt`    | memeriksa apakah nilai operan kiri kurang dari nilai operan kanan; jika ya, maka kondisinya menjadi benar. | `[ $a -lt $b ]` benar.
| `-ge`    | memeriksa apakah nilai operan kiri lebih besar atau sama dengan niai operan kanan jika ya, maka kondisinya menjadi benar. | `[ $a -ge $b ]` tidak benar.
| `-le`    | memeriksa apakah nilai operan kiri kurang dari atau sama dengan nilai operan kanan; jika ya, maka kondisinya menjadi benar. | `[ $a -le $b ]` benar.


## Boolean 

Operator Boolean berikut ini didukung oleh Bourne Shell.

Asumsikan variabel a menampung 5 dan variabel b menampung 3- maka

| Operator | Deskripsi | Contoh |
| ---------- | ---------- | --------- |
| `!` | ini adalaha negasi logis. ini membalikkan kondisi benar menjadi salah dan sebaliknya | `[!false]` benar
| `o` | ini logis **atau**. jika salah satu operan benar, maka kondisinya menjadi benar. | `[$a -lt 20 -o $b -gt 100]` benar
| `a` | ini adalah logis **dan**. jika kedua operan benar, makan kondisi menjadi benar dan jika tidak salah | `[$a -lt 20 -a $b -gt 100]` salah

