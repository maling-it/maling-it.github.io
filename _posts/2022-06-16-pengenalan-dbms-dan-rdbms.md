---
title: Pengenalan DBMS dan RDBMS
author: memet
category: database
tags: database dbms rdbms
---

Database:
    Basis data (Database) adalah kumpulan informasi yang di simpan di dalam komputer secara sistematik sehingga dapat diperiksa menggunakan suatu program komputer untuk memperoleh informasi dari basis data tersebut. Database digunakan untuk menyimpan informasi atau data yang terintegrasi dengan baik dalam komputer.

DBMS:
    DBMS (Database Perangkat Lunak management System) adalah suatu sistem perangkat lunak yang memungkinkan user (pengguna) untuk membuat, memelihara, mengontrol, dan mengakses database secara praktis dan efisien. Dengan DBMS, user akan lebih mudah mengontrol dan manipulasi data yang ada.

RDBMS:
      RDBMS (Relationship Database Management System) adalah salah satu jenis DBMS yang mendukung adanya relationship atau hubungan antar tabel. Di samping RDBMS, terdapat jenis DBMS lain, misalnya Hierarchy DBMS, Object Oriented DBMS, dsb.

   Beberapa software atau perangkat lunak DBMS yang sering digunakan dalam aplikasi program antara lain:

- DB2
- Microsoft SQL Server
- Oracle
- Sybase
- Interbase
- Teradata
- Firebird
- MySQL
- PostgreSQL

Beberapa Istilah Database:

- `Table`  Sebuah tabel merupakan kumpulan data (nilai) yang diorganisasikan ke dalam
baris (record) dan kolom (field). Masing-masing kolom memiliki nama yang
spesifik dan unik.

- `Field`   Field merupakan kolom dari sebuah table. Field memiliki ukuran type data
tertentu yang menentukan bagaimana data nantinya tersimpan.

- `Record`
   Field merupakan sebuah kumpulan nilai yang saling terkait.

- `Key`
    Key merupakan suatu field yang dapat dijadikan kunci dalam operasi tabel.
Dalam konsep database, key memiliki banyak jenis diantaranya Primary Key,
Foreign Key, Composite Key, dll.

- `SQL`
   SQL atau Structured Query Language merupakan suatu bahasa (language) yang digunakan untuk mengakses database. SQL sering disebut juga sebagai query.



### MySQL

<img class="img-fluid w-100 shadow-lg rounded mw-full" src="https://raw.githubusercontent.com/Zxce3/Zxce3/main/icons/mysql-logo.svg" alt="https://raw.githubusercontent.com/Zxce3/Zxce3/main/icons/mysql-logo.svg">

MySQL adalah sebuah perangkat lunak sistem manajemen basis data SQL
(bahasa Inggris: database management system) atau DBMS yang multithread,
multi-user, dengan sekitar 6 juta instalasi di seluruh dunia. MySQL AB membuat
MySQL tersedia sebagai perangkat lunak gratis di bawah lisensi GNU General
Public License (GPL), tetapi mereka juga menjual dibawah lisensi komersial untuk kasus-kasus dimana penggunaannya tidak cocok dengan penggunaan GPL.

Fitur-fitur MySQL antara lain :
- Relational Database System. Seperti halnya software database lain yang ada di pasaran, MySQL termasuk RDBMS.
- Arsitektur Client-Server. MySQL memiliki arsitektur client-server dimana server database MySQL terinstal di server. Client MySQL dapat berada di komputer yang sama dengan server, dan dapat juga di komputer lain yang berkomunikasi dengan server melalui jaringan bahkan internet.
- Mengenal perintah SQL standar. SQL (Structured Query Language) merupakan suatu bahasa standar yang berlaku di hampir semua software database.
- Mendukung Sub Select. Mulai versi 4.1 MySQL telah mendukung select dalam select (sub select).
- Mendukung Views. MySQL mendukung views sejak versi 5.0
- Mendukung replication.
- Mendukung foreign key. 