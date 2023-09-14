---
title: Gentoo
description: gentoo
---

Gentoo Linux uses a unique package management system called Portage for handling software installation, updates, and removal.

### Portage Basics

Portage is a source-based package management system for Gentoo. It compiles packages from source code on your system, allowing for customization and optimization.

### Update Portage Tree

To ensure you have the latest package information, update the Portage tree:

```
sudo emerge --sync
```

### Install Packages

To install a package, use the `emerge` command followed by the package name:

```
sudo emerge [package_name]
```

### Remove Packages

To remove a package:

```
sudo emerge --unmerge [package_name]
```

### Update Packages

To update all installed packages:

```
sudo emerge --update --deep --with-bdeps=y --newuse @world
```

### Search for Packages

To search for packages by name:

```
eix [search_term]
```

### Show Package Information

To display detailed information about a package:

```
equery show [package_name]
```

### Additional Portage Commands

### Local Use Flags

Use flags are options that allow you to customize the features and dependencies of packages. You can manage local use flags by editing `/etc/portage/package.use` and `/etc/portage/package.mask`.

### Cleaning

To clean package build files:

```
sudo eclean-dist
```

### Keeping Your System Updated

Regularly update your system to ensure security and stability:

```
sudo emerge --sync sudo emerge --update --deep --with-bdeps=y --newuse @world
```

These commands should help you manage packages efficiently on your Gentoo system. Remember to use `sudo` to execute commands as a superuser when required.
