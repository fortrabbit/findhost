---
description: Whether a hosting provider gives a shell inside the running environment, root on the machine, or nothing at all.
---

Two useful answers, and they are different kinds of shell rather than different amounts of one. A **jailed shell** is a command line inside the container that serves the site — enough to read a log, run one command and settle an argument about what production is actually doing — and it is complete on its own terms, with no root behind it. A **root shell** means the machine is yours: install a package, change the web server, break it properly. Which one a provider gives mostly follows from who holds the machine, so most records answer it without anyone guessing. Providers with no shell at all are recorded as such but not offered as a filter, because nobody scans a register for the hosts they cannot get into. How code *arrives* is a separate question, under [deployment](/deployment/).
