---
template: overrides/main.html
title: 1.12 Shell - Continue
---

# Continue

Continue adalah sebuah method yang dimana ketika kondisi telah memenuhi syarat maka akan `lanjut` ke statement berikutnya. Loh heh, apa bedanya dengan break? Jadi gini si break kan akan melakukan berhenti ketika angkanya memang memenuhi syarat contohnya kaya contoh diatas 15 emang lebih dari 7. Dan akhirnya break terjadi. Oke kita ambil contoh seperti ini

```bash
for (( num=1; num<=15; num++ ))
do
  if (( $num < 7 ))
  then
    break
  fi
  echo $num
done
```

Maka akan yang terjadi tidak menampilkan output apa apa, loh heh kenapa? karena dikondisi mengatakan bahwa angka yang kurang dari 7 akan `break` yo sudah jelas dari awal sudah terpenuhi dan pasti akan ke `break`. Nah lalu bagaimana dengan `continue` kita samakan seperti diatas, tapi methodnya kita ubah ke `continue`

```bash
for (( num=1; num<=15; num++ ))
do
  if (( $num < 7 ))
  then
    continue
  fi
  echo $num
done
```
Nah berbeda di atas , kondisi terpenuhi maka angka yang dibawah 7 tidak ditampilkan melainkan angka yang di atas 7 lah yang ditampilkan
