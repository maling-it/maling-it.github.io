---
template: overrides/main.html
title: 1.5 Git - Instalasi Git
---

# Install Git

Sebelum Anda mulai menggunakan Git, Anda harus membuatnya tersedia pada komputer Anda. Meskipun sudah terpasang, adalah gagasan yang baik untuk memperbarui ke versi terakhir. Anda dapat memasangnya sebagai `package` atau melalui pemasang lainnya, atau mengunduh sumber kodenya dan meng-`compile`-nya sendiri.

!!! note

	Buku ini ditulis menggunakan Git versi `2.0.0`. Meski begitu, kebanyakan perintah yang kita gunakan seharusnya dapat bekerja meskipun pada versi Git yang sebelumnya, beberapa dari itu mungkin tidak bekerja atau bekerja dengan sedikit berbeda jika Anda menggunakan versi yang sebelumnya. Karena Git sangat baik dalam mempertahankan kesesuaian dengan versi sebelumnya, sebarang versi setelah 2.0 seharusnya dapat bekerja dengan baik.
___

## Install Di linux

Hal ini paling mudah untuk menginstal Git di Linux menggunakan pilihan paket manajer distribusi Linux anda. Jika anda lebih memilih untuk membangun dari sumber, anda dapat menemukan tarball di kernel.org. Versi terbaru adalah `2.37.3`.

=== "Debian/Ubuntu"

	Untuk versi stabil terbaru untuk rilis Debian/Ubuntu

	```
	apt-get install git
	```

	Untuk Ubuntu, PPA ini menyediakan versi stabil terbaru dari upstream Git 
	```
	 add-apt-repository ppa:git-core/ppa # apt update; apt install git
	```

=== "Fedora"
	```
	 yum install git (up to Fedora 21)
	 dnf install git (Fedora 22 and later)
	```

=== "Gentoo"
	```
	emerge --ask --verbose dev-vcs/git
	```

=== "Arch Linux"
	```
	pacman -S git
	```
	
=== "openSUSE"
	```
	zypper install git
	```

=== "Mageia"
	```
	urpmi git
	```

=== "Nix/NixOS"
	```
	nix-env -i git
	```

=== "FreeBSD"
	```
	pkg install git
	```

=== "Solaris 9/10/11 (OpenCSW)"
	```
	pkgutil -i git
	```

=== "Solaris 11 Express"
	```
	pkg install developer/versioning/git
	```

=== "OpenBSD"
	```
	pkg_add git
	```
	
=== "Alpine"
	```
	apk add git
	```

=== "Slitaz"
	```
	tazpkg add git
	```
	
=== "Red Hat Enterprise Linux, Oracle Linux, CentOS, Scientific Linux, dll."
	RHEL dan turunannya biasanya menggunakan paket versi git. Anda dapat [men-download tarball](https://www.kernel.org/pub/software/scm/git/) dan membangun dari sumber, atau gunakan pihak ke-3 repositori seperti [IUS Proyek Komunitas](https://ius.io/) untuk mendapatkan versi yang lebih baru dari git

## Install di Mac

Ada beberapa opsi untuk menginstal Git di macOS. Perhatikan bahwa setiap distribusi non-sumber disediakan oleh pihak ketiga, dan dapat tidak up to date dengan rilis sumber terbaru.

=== "Homebrew"
	Install [homebrew](https://brew.sh/) Jika belum memilikinya, lalu:
	```
	brew install git
	```
=== "MacPorts"
	Install [MacPorts](https://www.macports.org/) jika belum memilikinya, lalu:
	```
	sudo port install git
	```
=== "XCode"
	Apple membuat paket biner Git dengan [Xcode](https://developer.apple.com/xcode/). 
=== "Install Binary"
	Tim Harper menyediakan skript [instalasi](https://sourceforge.net/projects/git-osx-installer/) untuk Git. Versi terbaru adalah [2.33.0](https://www.kernel.org/pub/software/scm/git/git-2.37.3.tar.gz) , yang dirilis sekitar 1 tahun yang lalu, pada 2021-08-30.
=== "Membangun dari sumber"
	Jika Anda lebih suka membangun dari sumber, Anda dapat menemukan tarball di [kernel.org](https://www.kernel.org/pub/software/scm/git/) . Versi terbaru adalah [2.37.3](https://www.kernel.org/pub/software/scm/git/git-2.37.3.tar.gz).
=== "Install git-gui"
	Jika Anda ingin menginstal [git-gui](https://git-scm.com/docs/git-gui/) dan [gitk](https://git-scm.com/docs/gitk/), git's commit GUI dan browser riwayat interaktif, Anda dapat melakukannya menggunakan [homebrew](https://brew.sh/)
	```
	brew install git-gui
	```
Anda juga dapat memasangnya sebagai bagian dari pemasangan GitHub untuk Mac. GUI untuk Git mereka memiliki pilihan untuk memasang peralatan `command line` juga. Anda dapat mengunduh alatnya dari situs web GitHub untuk Mac, pada http://mac.github.com.

## Installl di Windows

Juga ada beberapa cara untuk memasang Git pada Windows. Bentuk resminya dapat diunduh pada situs web Git. Pergi ke http://git-scm.com/download/win dan unduhannya akan berjalan secara otomatis. Catat bahwa ini adalah proyek yang bernama Git untuk Windows (juga disebut dengan msysGit), yang terpisah dari Git itu sendiri; untuk informasi lebih lanjut, pergi ke http://msysgit.github.io/.

Cara mudah lainnya untuk memasang Git adalah dengan memasang GitHub untuk Windows. Pemasangnya menyertakan versi `command line` dari Git dan juga GUI-nya. Itu juga bekerja dengan baik pada Powershell, dan mengatur `credential caching` dengan solid dan pengaturan `sane CRLF`. Kita akan belajar lebih tentang hal-hal tersebut sebentar lagi, namun bisa dikatakan ini adalah yang Anda inginkan. Anda dapat mengunduh ini dari situs web GitHub untuk Windows, pada http://windows.github.com.

## Install dari sumber

Beberapa orang mungkin merasa memasang Git dari sumbernya adalah hal yang berguna, karena Anda akan mendapatkan versi yang paling mutakhir. Pemasang biner cenderung tertinggal, meski Git telah berkembang dalam beberapa tahun terakhir, hal ini tidak membuat perbedaan yang berarti.

Jika Anda ingin memasang Git dari sumbernya, Anda perlu memiliki library berikut yang Git bergantung padanya: `curl`, `zlib`, `openssl`, `expat`, dan `libiconv`. Sebagai contoh, jika Anda berada pada sistem yang memiliki `yum` (seperti Fedora) atau `apt-get` (seperti pada sistem berdasarkan Debian), Anda dapat menggunakan salah satu dari perintah-perintah berikut untuk memasang semua kebutuhannya:

=== "Fedora"
	```bash
	yum install curl-devel expat-devel gettext-devel \
	  openssl-devel zlib-devel
	```
=== "Debian/Ubuntu"
	```bash
	apt-get install libcurl4-gnutls-dev libexpat1-dev gettext \
	  libz-dev libssl-dev
	```

Ketika Anda telah memiliki semua yang dibutuhkan, Anda dapat pergi dan mengambil keluaran tarball terbaru dari beberapa tempat. Anda dapat mengambilnya lewat situs Kernel.org, pada https://www.kernel.org/pub/software/scm/git, atau dari `mirror milik` situs GitHub, pada https://github.com/git/git/releases. Pada umumnya nampak jelas versi apa yang paling mutakhir pada halaman GitHub, namun pada halaman kernel.org juga memiliki `release signature` jika Anda ingin memeriksa unduhan Anda.

Kemudian, `compile` dan pasang:
```bash linenums="1"
tar -zxf git-1.9.1.tar.gz
cd git-1.9.1
make configure
./configure --prefix=/usr
make all doc info
sudo make install install-doc install-html install-info
```

Setelah ini selesai, Anda juca dapat mengambil Git lewat Git itu sendiri untuk pembaruan:
```
 git clone git://git.kernel.org/pub/scm/git/git.git
```
