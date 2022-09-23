---
template: overrides/main.html
title: 1.11 Shell - Break
---

# Break

Break adalah sebuah method yang dimana ketika kondisi telah memenuhi syarat maka akan berhenti, kondisi ini biasanya dipakai dalam perulangan ataupun `instruksi logika`. Lalu kenapa si break ini penting kita ambil contoh aja `loop`, disini kita ingin menampikan data yang kita inginkan saja dan data yang tidak penting maka tidak ditampilkan, contohnya seperti ini

```bash
for (( num=1; num<=15; num++ ))
do
  if (( $num > 7 ))
  then
    break
  fi
  echo $num
done
```

Dimana hasil outputnya ialah `1,2,3,4,5,6,7`, nah disini kita tahu bahwa angka yang lebih 7 itu tidak ditampilkan dan akan lanjut ke statement berikutnya. Oke next kita bahas `continue`