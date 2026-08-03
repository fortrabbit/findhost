---
title: Hosting and data privacy
description: Which privacy questions about a host can be answered from outside, why a region is not a jurisdiction, and which fields record the checkable parts.
lead: Which privacy questions about a host can be answered from the outside, and which cannot.
order: 50
figure:
  emoji: 🛂
  color: rgb(30, 42, 68)
  textColor: rgb(198, 210, 236)
  text: A region is not a jurisdiction.
---

A data-protection requirement narrows the field of hosts, but rarely along the line people expect. This page is about which of those questions are answerable from outside — from public pages, terms and company records — and which are not. It is an explainer, not legal advice, and this dataset is not a compliance service.

## Where the servers sit is not the same question as who can compel access

Two separate questions get collapsed into one. The first is physical: which building holds the disk and which country it stands in. The second is legal: which authorities can order the company operating that disk to hand over what is on it, and under what conditions. The answer to the second follows the company and its parents at least as much as it follows the metal, because an order is served on a legal entity rather than on a rack.

So a company headquartered in one country and running capacity in another is a different proposition from one native to the region it sells into. Not necessarily a worse one — but a different one, and the difference is invisible on a page that says "EU data centre". That is why the dataset keeps [regions](/regions/) and headquarters country as separate fields, and why [the map](/map/) shows where capacity runs rather than which law applies to it.

## The mechanism, since it is usually left unnamed

The reason the corporate address outranks the data-centre address is that several jurisdictions claim authority over data a company controls, wherever it is stored. The United States CLOUD Act of 2018 is the clearest statement of it: a provider subject to US jurisdiction can be ordered to produce data in its possession, custody or control regardless of the country the disk sits in. Britain's Investigatory Powers Act reaches similarly beyond its borders, and it is a mistake to read this as one country's peculiarity — the pattern is that a company's home law travels with the data.

It cuts the other way too. Article 48 of the GDPR says a foreign court order is not by itself a lawful basis for transferring personal data out of the EU, which sets up a genuine conflict rather than a settled answer: a provider can face two legal systems demanding opposite things, and the customer is not party to how that resolves.

None of this makes an American provider unusable or a European one safe, and this page is not the place to pretend otherwise — it is an explainer, not counsel. What it does mean is that "which country are the servers in" is the easy question, published everywhere and decisive of least, while "which legal system does this company answer to" is the harder one, published rarely and decisive of most. A dataset that recorded only the first would be measuring the wrong thing.

## The ownership chain decides more than the address does

Ownership is the part that most often goes unmentioned, and it is where residency claims quietly lose their meaning. Holding companies, private-equity majority stakes and acquisitions do not change the brand on the website, the support signature or the data-centre address, and none of them require a public announcement.

[WP Engine](/providers/wpengine/) is the legible version of the mechanism: an American company, majority-owned by a private-equity firm since 2018, with a European office, running customer sites on Google Cloud and AWS. Every step of that is published, so the chain can be followed to the end and weighed.

[Zerops](/providers/zerops/) is the more common version. A Czech platform with Czech capacity, and a jurisdiction that would otherwise be part of the appeal — but the record carries `resells-iaas` under [whose hardware](/hardware/), and neither the platform nor the record names whose infrastructure it is. The layer that actually decides the question is one step below anything the marketing describes. Both are named here because their records show the mechanism, not as verdicts: [ownership](/ownership/) is a field to apply a preference to, never a recommendation this site makes.

## A DPA is table stakes, not a differentiator

Any provider that seriously sells into Europe has a data-processing agreement, so its existence separates almost nobody. What varies is friction and content: whether it can be downloaded and signed without contacting sales, whether it is versioned and dated, and — the part worth actually reading — which sub-processors it names.

That is recorded as `gdprDpa`, with three values: available as standard, available on request, or unclear. The field is thinly filled so far, and absent means unknown rather than absent. `certifications` sits next to it and carries what a provider states, usually ISO 27001 or SOC 2. A certification is evidence that a process was audited on some scope at some date; it is not evidence about where data sits or who can reach it, and the certificate itself is not verified here.

## Sub-processors are where residency claims usually break

A provider can be incorporated and hosted in one country while the mail relay, CDN, object storage for backups, error tracking, analytics and support desk all sit elsewhere. The claim on the marketing page is generally true about the application servers and silent about everything around them — and support tooling in particular tends to hold exactly the personal data the requirement was about.

The dataset records the first layer of this and stops there. `runsOn` names the infrastructure a platform builds on where the platform publishes it, and [whose hardware](/hardware/) separates owning the metal, reselling someone else's and provisioning onto an account the customer brings. [Cloudways](/providers/cloudways/) shows the shape plainly: one control panel over five different infrastructure companies, picked per server at signup, which makes "where does this run" a question with five possible answers before anything else is asked. Past that first layer, the sub-processor list lives on the provider's own site, and reading it is the work.

## What this dataset can and cannot say

It records `hqCountry`, `regions`, `ownership`, `parent`, `gdprDpa` and `certifications`, and links to the terms page each record was read against. Those are inputs to a decision. It does not assess compliance, does not certify anyone, and will not: whether a specific processing activity is lawful depends on the data, the purpose and the contract, none of which are properties of a host. The wider version of that limit is in [policies](/policies/); the rest of the comparison is in [how to choose](/guide/how-to-choose-hosting/).

If this page has an effect, it should be less confidence in a residency claim and more in the questions behind it. "EU-based" is a statement about an address. Who owns the company, whose hardware it runs on and who appears in the sub-processor list are three further questions, all checkable, and all capable of pointing somewhere else entirely.

That is not a counsel of despair, and it is not an argument that the answers do not matter. They matter a great deal — enough that a buyer with a real requirement should treat a company's jurisdiction and ownership as first-order facts rather than footnotes, and should expect a provider that sells on data protection to publish both without being asked. Plenty do not. The fields are here so that a preference on this can be applied by the reader who holds it, rather than argued for by a site that does not know their circumstances.
