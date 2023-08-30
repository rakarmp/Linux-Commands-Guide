## Perintah Dasar Terminal Linux

Di bawah ini adalah daftar lengkap perintah dasar yang umum digunakan di terminal Linux. Perintah-perintah ini sangat penting untuk mengelola sistem, berinteraksi dengan file, dan melakukan berbagai tugas melalui antarmuka baris perintah.

### Navigasi

1.  `pwd`: Menampilkan direktori kerja saat ini.
2.  `ls`: Membuat daftar file dan direktori dalam direktori saat ini.
    - `ls -l`: Menampilkan informasi file/direktori dalam format panjang.
    - `ls -a`: Menampilkan semua file/direktori, termasuk yang tersembunyi.
3.  `cd`: Mengubah direktori.
    - `cd [nama_direktori]`: Pindah ke direktori yang ditentukan.
    - 4. `cd ..`: Pindah ke direktori induk.
    - `cd ~`: Pindah ke direktori home pengguna.
4.  `mkdir`: Membuat direktori baru.
    - 5. `mkdir [nama_direktori]`: Membuat direktori dengan nama tertentu.

### File dan Direktori

1.  `touch`: Membuat file kosong. - 2. `touch [nama_file]`: Membuat file dengan nama tertentu.
2.  `cp`: Menyalin file/direktori.
    - `cp [sumber] [tujuan]`: Menyalin sumber ke tujuan.
3.  `mv`: Memindahkan atau mengganti nama file/direktori.
    - `mv [sumber] [tujuan]`: Memindahkan sumber ke tujuan.
    - `mv [nama_lama] [nama_baru]`: Mengganti nama file/direktori.
4.  `rm`: Menghapus file/direktori.
    - `rm [nama_file]`: Menghapus file dengan nama tertentu.
    - `rm -r [nama_direktori]`: Menghapus direktori dan isinya secara rekursif.
5.  `cat`: Menampilkan isi file di terminal.
    - `cat [nama_file]`: Menampilkan isi file tertentu.

### Manipulasi File Teks Manipulasi File Teks

1.  `nano` atau `vim`: Mengedit file teks di terminal.
2.  `echo`: Menampilkan teks di terminal atau menyimpannya ke file.
    - `echo [text]`: Menampilkan teks di terminal.
    - `echo [teks] > [nama_file]`: Menyimpan teks ke file (menimpa konten).
    - `echo [teks] >> [nama_file]`: Menambahkan teks ke file (tanpa menimpa).

### Informasi Sistem Informasi Sistem

1.  `uname`: Menampilkan informasi tentang sistem.
    - `uname -a`: Menampilkan informasi sistem secara rinci.
2.  `top`: Menampilkan daftar proses yang sedang berjalan.
3.  `bebas`: Menampilkan daftar proses yang sedang berjalan. 3. `bebas`: Menampilkan penggunaan memori.
4.  `df`: Menampilkan informasi penggunaan ruang disk.

### Manajemen Pengguna dan Izin

1.  `sudo`: Menjalankan perintah sebagai pengguna super (root).
2.  `useradd`: Menambahkan pengguna baru.
3.  `passwd`: Mengubah kata sandi pengguna.
4.  `chmod`: Mengubah izin file/direktori.
5.  `chown`: Mengubah kepemilikan file/direktori.

### Jaringan

1.  `ping`: Mengirim paket gema ICMP ke alamat jaringan.
    `ping [ip_address]`: Mengirim paket ping ke alamat IP.
2.  `ifconfig` atau `ip`: Menampilkan informasi antarmuka jaringan.
3.  `ssh`: Mengakses mesin jarak jauh menggunakan Secure Shell (SSH).
    - `ssh [nama pengguna]@[alamat ip]`: Menyambungkan ke mesin jarak jauh.

## Ubuntu/Debian

APT adalah alat manajemen paket default untuk sistem Ubuntu dan Debian. Alat ini menyederhanakan manajemen perangkat lunak dengan menangani ketergantungan paket dan pembaruan.

#### Memperbarui Daftar Paket

Untuk memastikan Anda memiliki informasi paket terbaru, perbarui daftar paket:

`sudo apt update`

#### Menginstal Paket

Untuk menginstal sebuah paket, gunakan perintah `apt install` yang diikuti dengan nama paket:

`sudo apt install [nama_paket]`

#### Menghapus Paket

Untuk menghapus sebuah paket (sambil tetap menyimpan file konfigurasi):

`sudo apt hapus [nama_paket]`

Untuk menghapus sebuah paket dan file konfigurasinya:

`sudo apt hapus [nama_paket]`

#### Meningkatkan Paket

Untuk memutakhirkan semua paket yang terinstal:

`sudo apt upgrade`

Untuk melakukan pemutakhiran sistem secara keseluruhan (termasuk pemutakhiran kernel):

`sudo apt full-upgrade`

#### Mencari Paket

Untuk mencari paket berdasarkan nama:

`sudo apt search [search_term]`

#### Tampilkan Informasi Paket

Untuk menampilkan informasi rinci tentang sebuah paket:

`apt show [nama_paket]`

### Alat Manajemen Paket Tambahan

#### dpkg

Perintah `dpkg` adalah manajer paket tingkat rendah yang diandalkan oleh `apt`. Perintah ini dapat digunakan untuk memanipulasi paket-paket `.deb` secara langsung.

Untuk menginstall sebuah paket `.deb`:

`sudo dpkg -i [package_file.deb]`

#### Manajer Paket Synaptic

Synaptic menyediakan antarmuka pengguna grafis untuk manajemen paket. Instal dengan menggunakan:

`sudo apt install synaptic`

#### Aptitude

Aptitude adalah manajer paket baris perintah lain yang menyediakan kemampuan manajemen paket yang lebih canggih:

Untuk menginstal Aptitude:

`sudo apt install aptitude`

Untuk mencari paket:

`sudo apt search [search_term]`

Untuk menginstal sebuah paket:

`sudo aptitude install [nama_paket]`

Perintah-perintah ini seharusnya mencakup dasar-dasar manajemen paket pada sistem berbasis Ubuntu dan Debian. Ingatlah untuk menggunakan `sudo` untuk menjalankan perintah sebagai superuser jika diperlukan.

## Arch

Pacman adalah manajer paket yang kuat yang dirancang untuk Arch Linux dan turunannya.

#### Memperbarui Basis Data Paket

Untuk memastikan bahwa Anda memiliki informasi paket terbaru, perbarui basis data paket:

`sudo pacman -Sy`

#### Menginstal Paket

Untuk menginstall sebuah paket, gunakan perintah `pacman -S` diikuti dengan nama paket:

`sudo pacman -S [nama_paket]`

#### Menghapus Paket

Untuk menghapus sebuah paket (sambil menyimpan file konfigurasi):

`sudo pacman -R [nama_paket]`

Untuk menghapus sebuah paket dan file konfigurasinya:

`sudo pacman -Rs [nama_paket]`

Untuk menghapus sebuah paket dan dependensi yang tidak digunakan:

`sudo pacman -Rns [nama_paket]`

#### Upgrade Paket

Untuk mengupgrade semua paket yang terinstall:

`sudo pacman -Syu`

#### Mencari Paket

Untuk mencari paket berdasarkan nama atau deskripsi:

`pacman -Ss [istilah_pencarian]`

#### Tampilkan Informasi Paket

Untuk menampilkan informasi rinci tentang sebuah paket:

`pacman -Si [nama_paket]`

### Alat Tambahan

#### Yaourt (Tidak digunakan lagi)

Meskipun tidak direkomendasikan karena masalah keamanan, Yaourt adalah alat bantu AUR yang populer. Jika Anda masih menggunakannya, perintahnya adalah:

Untuk menginstal sebuah paket dari AUR:

`yaourt -S [nama_paket]`

#### Yay

Yay adalah pembantu AUR yang populer dan digerakkan oleh komunitas:

Untuk menginstal paket dari AUR menggunakan yay:

`yay -S [nama_paket]`

### AUR (Arch User Repository)

AUR berisi paket-paket yang dikontribusikan oleh pengguna yang tidak ditemukan di repositori resmi.

#### Membangun Paket AUR

Untuk membangun dan menginstal paket dari AUR menggunakan `makepkg`:

1.  Unduh sumber paket AUR.
2.  Ekstrak sumber tersebut dan arahkan ke direktori paket.
3.  Bangun paket:

`makepkg -si`

### Mengelola Pacman Hooks

Pacman hooks adalah skrip yang berjalan pada titik-titik tertentu selama instalasi dan penghapusan paket. Hooks dapat ditemukan pada `/usr/share/libalpm/hooks/`.

### Menjaga Sistem Anda Tetap Terupdate

Perbarui sistem Anda secara teratur untuk memastikan keamanan dan stabilitas:

`sudo pacman -Syu`

Perintah-perintah ini akan membantu Anda mengelola paket secara efisien pada sistem Arch Linux. Ingatlah untuk menggunakan `sudo` untuk menjalankan perintah sebagai superuser jika diperlukan.

## RHEL, CentOS, Fedora

Red Hat Enterprise Linux (RHEL), CentOS, dan Fedora menggunakan manajer paket DNF untuk menangani instalasi, pembaruan, dan penghapusan perangkat lunak.

### Dasar-dasar DNF

DNF (Dandified Yum) adalah manajer paket yang dirancang untuk RHEL, CentOS, Fedora, dan distribusi terkait.

#### Perbarui Basis Data Paket

Untuk memastikan Anda memiliki informasi paket terbaru, perbarui basis data paket:

`sudo dnf update`

#### Menginstal Paket

Untuk menginstal sebuah paket, gunakan perintah `dnf install` diikuti dengan nama paket:

`sudo dnf install [nama_paket]`

#### Menghapus Paket

Untuk menghapus sebuah paket:

`sudo dnf hapus [nama_paket]`

#### Meningkatkan Paket

Untuk meng-upgrade semua paket yang terinstal:

`sudo dnf upgrade`

#### Mencari Paket

Untuk mencari paket berdasarkan nama:

`dnf search [search_term]`

#### Tampilkan Informasi Paket

Untuk menampilkan informasi rinci tentang sebuah paket:

`dnf info [nama_paket]`

### Perintah DNF Tambahan

#### Manajemen Grup

DNF juga dapat mengelola grup paket. Untuk menginstal grup paket:

`sudo dnf groupinstall [nama_grup]`

#### Repositori

Untuk membuat daftar repositori yang diaktifkan:

`dnf repolist`

#### Pembersihan

Untuk membersihkan cache paket dan mengosongkan ruang:

`sudo dnf clean all`

### Repositori RPM Fusion

RPM Fusion adalah repositori pihak ketiga yang menyediakan paket tambahan untuk distribusi berbasis Fedora. Untuk mengaktifkannya:

`sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm`

`sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm`

### Mengelola Plugin DNF

DNF memiliki beberapa plugin yang menyediakan fungsionalitas tambahan. Beberapa plugin yang umum digunakan antara lain:

- `dnf-automatic`: Memperbarui sistem secara otomatis.
- `dnf-plugin-system-upgrade`: Mendukung peningkatan sistem.

### Selalu Perbarui Sistem Anda

Perbarui sistem Anda secara teratur untuk memastikan keamanan dan stabilitas:

`sudo dnf upgrade`

Perintah-perintah ini akan membantu Anda mengelola paket secara efisien pada sistem RHEL, CentOS, atau Fedora. Ingatlah untuk menggunakan `sudo` untuk menjalankan perintah sebagai superuser jika diperlukan.

## openSUSE

openSUSE menggunakan manajer paket Zypper untuk menangani instalasi, pembaruan, dan penghapusan perangkat lunak.

### Dasar-dasar Zypper

Zypper adalah manajer paket yang kuat yang didesain untuk distribusi openSUSE.

#### Memperbarui Basis Data Paket

Untuk memastikan Anda memiliki informasi paket terbaru, perbarui basis data paket:

`sudo zypper refresh`

#### Menginstal Paket

Untuk menginstall sebuah paket, gunakan perintah `zypper install` diikuti dengan nama paket:

`sudo zypper install [nama_paket]`

#### Menghapus Paket

Untuk menghapus sebuah paket:

`sudo zypper hapus [nama_paket]`

#### Meningkatkan Paket

Untuk memutakhirkan semua paket yang terinstal:

`sudo zypper update`

#### Mencari Paket

Untuk mencari paket berdasarkan nama:

`sudo zypper search [search_term]`

#### Tampilkan Informasi Paket

Untuk menampilkan informasi rinci tentang sebuah paket:

`zypper info [nama_paket]`

### Perintah Zypper Tambahan

#### Repositori

Untuk membuat daftar repositori yang diaktifkan:

`zypper repos`

#### Menambahkan Repositori

Untuk menambahkan repositori:

`sudo zypper addrepo [repository_url] [alias]`

#### Membersihkan

Untuk membersihkan cache paket dan mengosongkan ruang:

`sudo zypper clean`

### YaST (Alat Penyiapan lain)

YaST adalah alat konfigurasi dan manajemen yang komprehensif untuk openSUSE. Alat ini menyediakan antarmuka grafis untuk manajemen paket dan tugas-tugas sistem lainnya.

### Menjaga Sistem Anda Tetap Diperbarui

Perbarui sistem Anda secara teratur untuk memastikan keamanan dan stabilitas:

`sudo zypper update`

Perintah ini akan membantu Anda mengelola paket secara efisien pada sistem openSUSE Anda. Ingatlah untuk menggunakan `sudo` untuk menjalankan perintah sebagai superuser jika diperlukan.

## Gentoo

Gentoo Linux menggunakan sistem manajemen paket yang unik yang disebut Portage untuk menangani instalasi, pembaruan, dan penghapusan perangkat lunak.

### Dasar-dasar Portage

Portage adalah sistem manajemen paket berbasis sumber untuk Gentoo. Portage mengkompilasi paket dari kode sumber pada sistem Anda, sehingga memungkinkan untuk kustomisasi dan optimalisasi.

#### Perbarui Pohon Portage

Untuk memastikan Anda memiliki informasi paket terbaru, perbarui pohon Portage:

`sudo muncul --sinkronisasi`

#### Menginstal Paket

Untuk menginstal sebuah paket, gunakan perintah `emerge` diikuti dengan nama paket:

`sudo emerge [nama_paket]`

#### Menghapus Paket

Untuk menghapus sebuah paket:

`sudo emerge --unmerge [nama_paket]`

#### Memperbarui Paket

Untuk memperbarui semua paket yang terinstal:

`sudo emerge --update --deep --dengan-bdeps=y --newuse @world`

#### Mencari Paket

Untuk mencari paket berdasarkan nama:

`eix [search_term]`

#### Tampilkan Informasi Paket

Untuk menampilkan informasi rinci tentang sebuah paket:

`equery show [nama_paket]`

### Perintah-perintah Portage Tambahan

#### Bendera Penggunaan Lokal

Use flags adalah opsi yang memungkinkan Anda untuk menyesuaikan fitur dan ketergantungan paket. Anda dapat mengelola bendera penggunaan lokal dengan mengedit `/etc/portage/package.use` dan `/etc/portage/package.mask`.

#### Pembersihan

Untuk membersihkan berkas-berkas pembuatan paket:

`sudo eclean-dist`

### Menjaga Sistem Anda Tetap Terupdate

Perbarui sistem Anda secara teratur untuk memastikan keamanan dan stabilitas:

`sudo emerge --sync sudo emerge --update --deep --dengan-bdeps=y --newuse @world`

Perintah-perintah ini akan membantu Anda mengelola paket secara efisien pada sistem Gentoo Anda. Ingatlah untuk menggunakan `sudo` untuk menjalankan perintah sebagai superuser jika diperlukan.

**Jika ada kesalahan dalam repositori ini, silakan buka isu atau Anda dapat berkontribusi untuk memperbaiki repositori ini.**.
