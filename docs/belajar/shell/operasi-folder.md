---
template: overrides/main.html
title: 1.16 Shell - Operation Folder
---


# Operation Folder

Operation folder dimana kita memanggil folder dari komputer kita. Sebelum itu mari kita bahas, apa itu `mkdir`?. Oke `mkdir` ialah command linux yang digunakan untuk membuat sebuah folder. Untuk penjelasan lebih detail kita akan bahas di `usefull_command` yang penting kita tau bahwa `mkdir` command untuk buat folder.

```bash
variabel=$1
mkdir $variabel
```

Lalu bagaimana cara check bahwa directory sudah ada ? dengan `-d` dimaan fungsinya ini untuk mengecheck adakah directory yang kita masukan, untuk contoh progamnya seperti ini

```bash
echo -e "Enter Directory : \c"
read folder_name

if [[ -d $folder_name ]]
then
    echo "Folder Found"
else
    echo "Folder Not Found"
fi
```
Jadi logicnya ketika folder itu ada, maka menghasilkan output `Folder Found` dan jika tidak outputnya adalah `Folder Not Found`
