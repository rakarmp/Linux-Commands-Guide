---
title: Arch
description: arch
---

Pacman is a powerful package manager designed for Arch Linux and its derivatives.

### Update Package Database

To ensure you have the latest package information, update the package database:

```
sudo pacman -Sy
```

### Install Packages

To install a package, use the `pacman -S` command followed by the package name:

```
sudo pacman -S [package_name]
```

### Remove Packages

To remove a package (while keeping configuration files):

```
sudo pacman -R [package_name]
```

To remove a package and its configuration files:

```
sudo pacman -Rs [package_name]
```

To remove a package and its unused dependencies:

```
sudo pacman -Rns [package_name]
```

### Upgrade Packages

To upgrade all installed packages:

```
sudo pacman -Syu
```

### Search for Packages

To search for packages by name or description:

```
pacman -Ss [search_term]
```

### Show Package Information

To display detailed information about a package:

```
pacman -Si [package_name]
```

### Additional Tools

### Yaourt (Deprecated)

While not recommended due to security concerns, Yaourt was a popular AUR helper. If you still use it, the commands are:

To install a package from the AUR:

```
yaourt -S [package_name]
```

### Yay

Yay is a popular and community-driven AUR helper:

To install a package from the AUR using yay:

```
yay -S [package_name]
```

### AUR (Arch User Repository)

The AUR contains user-contributed packages not found in official repositories.

### Building AUR Packages

To build and install a package from the AUR using `makepkg`:

1.  Download the AUR package source.
2.  Extract the source and navigate to the package directory.
3.  Build the package:

```
makepkg -si
```

### Managing Pacman Hooks

Pacman hooks are scripts that run at specific points during package installation and removal. Hooks can be found in `/usr/share/libalpm/hooks/`.

### Keep Your System Updated

Regularly update your system to ensure security and stability:

```
sudo pacman -Syu
```

These commands should help you manage packages efficiently on your Arch Linux system. Remember to use `sudo` to execute commands as a superuser when required.
