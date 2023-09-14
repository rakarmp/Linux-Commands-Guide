---
title: Debian/Ubuntu
description: debian/ubuntu
---

APT is the default package management tool for Ubuntu and Debian systems. It simplifies software management by handling package dependencies and updates.

### Update Package Lists

To ensure you have the latest package information, update the package lists:

```
sudo apt update
```

### Install Packages

To install a package, use the `apt install` command followed by the package name:

```
sudo apt install [package_name]
```

### Remove Packages

To remove a package (while keeping configuration files):

```
sudo apt remove [package_name]
```

To remove a package and its configuration files:

```
sudo apt purge [package_name]
```

### Upgrade Packages

To upgrade all installed packages:

```
sudo apt upgrade
```

To perform a full system upgrade (including kernel upgrades):

```
sudo apt full-upgrade
```

### Search for Packages

To search for packages by name:

```
apt search [search_term]
```

### Show Package Information

To display detailed information about a package:

```
apt show [package_name]
```

### Additional Package Management Tools

### dpkg

The `dpkg` command is a lower-level package manager that `apt` relies on. It can be used to directly manipulate `.deb` packages.

To install a `.deb` package:

```
sudo dpkg -i [package_file.deb]
```

### Synaptic Package Manager

Synaptic provides a graphical user interface for package management. Install it using:

```
sudo apt install synaptic
```

### Aptitude

Aptitude is another command-line package manager that provides more advanced package management capabilities:

To install Aptitude:

```
sudo apt install aptitude
```

To search for packages:

```
aptitude search [search_term]
```

To install a package:

```
sudo aptitude install [package_name]
```

These commands should cover the basics of package management in Ubuntu and Debian-based systems. Remember to use `sudo` to execute commands as a superuser when required.
