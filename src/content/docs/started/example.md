---
title: Basic Linux Terminal Commands
description: Below is a comprehensive list of commonly used basic commands in the Linux terminal.
---

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
