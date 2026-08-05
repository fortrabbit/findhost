---
description: Whether a provider gives a shell on the running environment, root on the machine, or nothing at all.
lead: Whether there is a way in when something breaks.
---

Three answers on one scale. **None** means the control panel is the only way in. **Shell** means a command line on the thing that serves the site — enough to read a log, run one command and settle an argument about what production is actually doing. **Root** means the machine is yours: install a package, change the web server, break it properly.

It used to say "full" where it now says shell, and that was a judgement rather than a fact — full compared to what? A shell inside a container is complete and has no root behind it; a shell on a rented machine is the same word and a different thing. Root is the checkable one, so it is the one recorded, and every record that said "full" now says shell until someone has read the documentation and can say otherwise. How code *arrives* is a separate question, under [deployment](/deployment/).
