---
description: Whether a provider gives a shell inside the running environment, root on the machine, or nothing at all.
lead: Whether there is a way in when something breaks.
---

Three answers on one scale, and the two useful ones are different kinds of shell rather than different amounts of one. A **jailed shell** is a command line inside the container that serves the site — enough to read a log, run one command and settle an argument about what production is actually doing. It is complete on its own terms and has no root behind it. **Root shell** means the machine is yours: install a package, change the web server, break it properly. **None** means the control panel is the only way in.

Which of the two a provider gives mostly follows from who holds the machine. Where the customer manages the operating system, or rents a server outright, the shell is root; where the provider manages a shared platform, it is jailed. That is an entailment rather than an inference, which is why most records can answer it without anyone guessing.

None is recorded but never offered as a filter: it is worth knowing about a host you are already reading, and nobody scans a register for the ones they cannot get into. How code *arrives* is a separate question, under [deployment](/deployment/).
