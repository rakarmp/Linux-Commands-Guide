## Basic Linux Terminal Commands

Below is a comprehensive list of commonly used basic commands in the Linux terminal. These commands are essential for managing the system, interacting with files, and performing various tasks through the command-line interface.

### Navigation

1.  `pwd`: Display the current working directory.
2.  `ls`: List files and directories in the current directory.
    - `ls -l`: Display file/directory information in long format.
    - `ls -a`: Display all files/directories, including hidden ones.
3.  `cd`: Change directory.
    - `cd [directory_name]`: Move to the specified directory.
    - `cd ..`: Move to the parent directory.
    - `cd ~`: Move to the user's home directory.
4.  `mkdir`: Create a new directory.
    - `mkdir [directory_name]`: Create a directory with a specific name.

### Files and Directories

1.  `touch`: Create an empty file. - `touch [file_name]`: Create a file with a specific name.
2.  `cp`: Copy files/directories.
    - `cp [source] [destination]`: Copy source to destination.
3.  `mv`: Move or rename files/directories.
    - `mv [source] [destination]`: Move source to destination.
    - `mv [old_name] [new_name]`: Rename a file/directory.
4.  `rm`: Delete files/directories.
    - `rm [file_name]`: Delete a file with a specific name.
    - `rm -r [directory_name]`: Delete a directory and its contents recursively.
5.  `cat`: Display the contents of a file in the terminal.
    - `cat [file_name]`: Display the contents of a specific file.

### Text File Manipulation

1.  `nano` or `vim`: Edit text files in the terminal.
2.  `echo`: Display text in the terminal or save it to a file.
    - `echo [text]`: Display text in the terminal.
    - `echo [text] > [file_name]`: Save text to a file (overwrite content).
    - `echo [text] >> [file_name]`: Append text to a file (without overwriting).

### System Information

1.  `uname`: Display information about the system.
    - `uname -a`: Display detailed system information.
2.  `top`: Display a list of running processes.
3.  `free`: Display memory usage.
4.  `df`: Display disk space usage information.

### User and Permission Management

1.  `sudo`: Execute commands as a superuser (root).
2.  `useradd`: Add a new user.
3.  `passwd`: Change a user's password.
4.  `chmod`: Change file/directory permissions.
5.  `chown`: Change file/directory ownership.

### Networking

1.  `ping`: Send ICMP echo packets to a network address.
    - `ping [ip_address]`: Send ping packets to an IP address.
2.  `ifconfig` or `ip`: Display network interface information.
3.  `ssh`: Access a remote machine using Secure Shell (SSH).
    - `ssh [username]@[ip_address]`: Connect to a remote machine.

## Ubuntu/Debian

APT is the default package management tool for Ubuntu and Debian systems. It simplifies software management by handling package dependencies and updates.

#### Update Package Lists

To ensure you have the latest package information, update the package lists:

`sudo apt update`

#### Install Packages

To install a package, use the `apt install` command followed by the package name:

`sudo apt install [package_name]`

#### Remove Packages

To remove a package (while keeping configuration files):

`sudo apt remove [package_name]`

To remove a package and its configuration files:

`sudo apt purge [package_name]`

#### Upgrade Packages

To upgrade all installed packages:

`sudo apt upgrade`

To perform a full system upgrade (including kernel upgrades):

`sudo apt full-upgrade`

#### Search for Packages

To search for packages by name:

`apt search [search_term]`

#### Show Package Information

To display detailed information about a package:

`apt show [package_name]`

### Additional Package Management Tools

#### dpkg

The `dpkg` command is a lower-level package manager that `apt` relies on. It can be used to directly manipulate `.deb` packages.

To install a `.deb` package:

`sudo dpkg -i [package_file.deb]`

#### Synaptic Package Manager

Synaptic provides a graphical user interface for package management. Install it using:

`sudo apt install synaptic`

#### Aptitude

Aptitude is another command-line package manager that provides more advanced package management capabilities:

To install Aptitude:

`sudo apt install aptitude`

To search for packages:

`aptitude search [search_term]`

To install a package:

`sudo aptitude install [package_name]`

These commands should cover the basics of package management in Ubuntu and Debian-based systems. Remember to use `sudo` to execute commands as a superuser when required.

## Arch

Pacman is a powerful package manager designed for Arch Linux and its derivatives.

#### Update Package Database

To ensure you have the latest package information, update the package database:

`sudo pacman -Sy`

#### Install Packages

To install a package, use the `pacman -S` command followed by the package name:

`sudo pacman -S [package_name]`

#### Remove Packages

To remove a package (while keeping configuration files):

`sudo pacman -R [package_name]`

To remove a package and its configuration files:

`sudo pacman -Rs [package_name]`

To remove a package and its unused dependencies:

`sudo pacman -Rns [package_name]`

#### Upgrade Packages

To upgrade all installed packages:

`sudo pacman -Syu`

#### Search for Packages

To search for packages by name or description:

`pacman -Ss [search_term]`

#### Show Package Information

To display detailed information about a package:

`pacman -Si [package_name]`

### Additional Tools

#### Yaourt (Deprecated)

While not recommended due to security concerns, Yaourt was a popular AUR helper. If you still use it, the commands are:

To install a package from the AUR:

`yaourt -S [package_name]`

#### Yay

Yay is a popular and community-driven AUR helper:

To install a package from the AUR using yay:

`yay -S [package_name]`

### AUR (Arch User Repository)

The AUR contains user-contributed packages not found in official repositories.

#### Building AUR Packages

To build and install a package from the AUR using `makepkg`:

1.  Download the AUR package source.
2.  Extract the source and navigate to the package directory.
3.  Build the package:

`makepkg -si`

### Managing Pacman Hooks

Pacman hooks are scripts that run at specific points during package installation and removal. Hooks can be found in `/usr/share/libalpm/hooks/`.

### Keep Your System Updated

Regularly update your system to ensure security and stability:

`sudo pacman -Syu`

These commands should help you manage packages efficiently on your Arch Linux system. Remember to use `sudo` to execute commands as a superuser when required.

## RHEL, CentOS, Fedora

Red Hat Enterprise Linux (RHEL), CentOS, and Fedora use the DNF package manager for handling software installation, updates, and removal.

### DNF Basics

DNF (Dandified Yum) is a package manager designed for RHEL, CentOS, Fedora, and related distributions.

#### Update Package Database

To ensure you have the latest package information, update the package database:

`sudo dnf update`

#### Install Packages

To install a package, use the `dnf install` command followed by the package name:

`sudo dnf install [package_name]`

#### Remove Packages

To remove a package:

`sudo dnf remove [package_name]`

#### Upgrade Packages

To upgrade all installed packages:

`sudo dnf upgrade`

#### Search for Packages

To search for packages by name:

`dnf search [search_term]`

#### Show Package Information

To display detailed information about a package:

`dnf info [package_name]`

### Additional DNF Commands

#### Group Management

DNF can also manage package groups. To install a package group:

`sudo dnf groupinstall [group_name]`

#### Repositories

To list enabled repositories:

`dnf repolist`

#### Cleaning

To clean package cache and free up space:

`sudo dnf clean all`

### RPM Fusion Repository

RPM Fusion is a third-party repository that provides additional packages for Fedora-based distributions. To enable it:

`sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm`

`sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm`

### Managing DNF Plugins

DNF has several plugins that provide additional functionalities. Some commonly used ones include:

- `dnf-automatic`: Automatically updates the system.
- `dnf-plugin-system-upgrade`: Supports system upgrades.

### Keep Your System Updated

Regularly update your system to ensure security and stability:

`sudo dnf upgrade`

These commands should help you manage packages efficiently on your RHEL, CentOS, or Fedora system. Remember to use `sudo` to execute commands as a superuser when required.

## openSUSE

openSUSE uses the Zypper package manager for handling software installation, updates, and removal.

### Zypper Basics

Zypper is a powerful package manager designed for openSUSE distributions.

#### Update Package Database

To ensure you have the latest package information, update the package database:

`sudo zypper refresh`

#### Install Packages

To install a package, use the `zypper install` command followed by the package name:

`sudo zypper install [package_name]`

#### Remove Packages

To remove a package:

`sudo zypper remove [package_name]`

#### Upgrade Packages

To upgrade all installed packages:

`sudo zypper update`

#### Search for Packages

To search for packages by name:

`zypper search [search_term]`

#### Show Package Information

To display detailed information about a package:

`zypper info [package_name]`

### Additional Zypper Commands

#### Repositories

To list enabled repositories:

`zypper repos`

#### Adding Repositories

To add a repository:

`sudo zypper addrepo [repository_url] [alias]`

#### Cleaning

To clean the package cache and free up space:

`sudo zypper clean`

### YaST (Yet another Setup Tool)

YaST is a comprehensive configuration and management tool for openSUSE. It provides a graphical interface for package management and other system tasks.

### Keeping Your System Updated

Regularly update your system to ensure security and stability:

`sudo zypper update`

These commands should help you manage packages efficiently on your openSUSE system. Remember to use `sudo` to execute commands as a superuser when required.

## Gentoo

Gentoo Linux uses a unique package management system called Portage for handling software installation, updates, and removal.

### Portage Basics

Portage is a source-based package management system for Gentoo. It compiles packages from source code on your system, allowing for customization and optimization.

#### Update Portage Tree

To ensure you have the latest package information, update the Portage tree:

`sudo emerge --sync`

#### Install Packages

To install a package, use the `emerge` command followed by the package name:

`sudo emerge [package_name]`

#### Remove Packages

To remove a package:

`sudo emerge --unmerge [package_name]`

#### Update Packages

To update all installed packages:

`sudo emerge --update --deep --with-bdeps=y --newuse @world`

#### Search for Packages

To search for packages by name:

`eix [search_term]`

#### Show Package Information

To display detailed information about a package:

`equery show [package_name]`

### Additional Portage Commands

#### Local Use Flags

Use flags are options that allow you to customize the features and dependencies of packages. You can manage local use flags by editing `/etc/portage/package.use` and `/etc/portage/package.mask`.

#### Cleaning

To clean package build files:

`sudo eclean-dist`

### Keeping Your System Updated

Regularly update your system to ensure security and stability:

`sudo emerge --sync sudo emerge --update --deep --with-bdeps=y --newuse @world`

These commands should help you manage packages efficiently on your Gentoo system. Remember to use `sudo` to execute commands as a superuser when required.

**If there are errors in this repository, please open an issue or you can contribute to improving this repository.**
