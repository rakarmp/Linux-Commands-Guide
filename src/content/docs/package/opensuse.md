---
title: openSUSE
description: opensuse
---

openSUSE uses the Zypper package manager for handling software installation, updates, and removal.

### Zypper Basics

Zypper is a powerful package manager designed for openSUSE distributions.

### Update Package Database

To ensure you have the latest package information, update the package database:

```
sudo zypper refresh
```

### Install Packages

To install a package, use the `zypper install` command followed by the package name:

```
sudo zypper install [package_name]
```

### Remove Packages

To remove a package:

```
sudo zypper remove [package_name]
```

### Upgrade Packages

To upgrade all installed packages:

```
sudo zypper update
```

### Search for Packages

To search for packages by name:

```
zypper search [search_term]
```

### Show Package Information

To display detailed information about a package:

```
zypper info [package_name]
```

### Additional Zypper Commands

### Repositories

To list enabled repositories:

```
zypper repos
```

### Adding Repositories

To add a repository:

```
sudo zypper addrepo [repository_url] [alias]
```

### Cleaning

To clean the package cache and free up space:

```
sudo zypper clean
```

### YaST (Yet another Setup Tool)

YaST is a comprehensive configuration and management tool for openSUSE. It provides a graphical interface for package management and other system tasks.

### Keeping Your System Updated

Regularly update your system to ensure security and stability:

```
sudo zypper update
```

These commands should help you manage packages efficiently on your openSUSE system. Remember to use `sudo` to execute commands as a superuser when required.
