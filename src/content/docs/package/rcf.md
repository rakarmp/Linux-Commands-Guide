---
title: RHEL, CenOS, Fedora
description: rhel,centos,fedora
---

Red Hat Enterprise Linux (RHEL), CentOS, and Fedora use the DNF package manager for handling software installation, updates, and removal.

### DNF Basics

DNF (Dandified Yum) is a package manager designed for RHEL, CentOS, Fedora, and related distributions.

### Update Package Database

To ensure you have the latest package information, update the package database:

```
sudo dnf update
```

### Install Packages

To install a package, use the `dnf install` command followed by the package name:

```
sudo dnf install [package_name]
```

### Remove Packages

To remove a package:

```
sudo dnf remove [package_name]
```

### Upgrade Packages

To upgrade all installed packages:

```
sudo dnf upgrade
```

### Search for Packages

To search for packages by name:

```
dnf search [search_term]
```

### Show Package Information

To display detailed information about a package:

```
dnf info [package_name]
```

### Additional DNF Commands

### Group Management

DNF can also manage package groups. To install a package group:

```
sudo dnf groupinstall [group_name]
```

### Repositories

To list enabled repositories:

```
dnf repolist
```

### Cleaning

To clean package cache and free up space:

```
sudo dnf clean all
```

### RPM Fusion Repository

RPM Fusion is a third-party repository that provides additional packages for Fedora-based distributions. To enable it:

```
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
```

```
sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### Managing DNF Plugins

DNF has several plugins that provide additional functionalities. Some commonly used ones include:

- `dnf-automatic`: Automatically updates the system.
- `dnf-plugin-system-upgrade`: Supports system upgrades.

### Keep Your System Updated

Regularly update your system to ensure security and stability:

```
sudo dnf upgrade
```

These commands should help you manage packages efficiently on your RHEL, CentOS, or Fedora system. Remember to use `sudo` to execute commands as a superuser when required.
