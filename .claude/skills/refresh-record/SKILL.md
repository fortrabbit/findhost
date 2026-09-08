---
name: refresh-record
description: Re-read one or more provider records against the provider's own pages, update what the pages contradict, date what they confirm, and push the result to the rolling `refresh` branch. Use when asked to refresh, re-check, or re-verify provider records, or when running as the scheduled refresh routine (MR-320).
---

# Refresh a provider record

Read the repository `CLAUDE.md` first. Every rule in it applies here, and three of them decide most of what this skill does: absent means unknown, `checkedAt` is a claim, and nothing may be guessed.

This runs unattended. Never ask a question. Where the procedure says stop, stop and report.

## Input

- `N`, how many records to refresh. Default 1.
- Optionally, explicit record ids. Then `N` is ignored and the pick step is skipped.

## 1. Branch

```sh
git fetch origin
git checkout refresh 2>/dev/null || git checkout -b refresh origin/main
git merge --ff-only origin/refresh 2>/dev/null || true
git merge origin/main
pnpm install --frozen-lockfile
```

All work lands on `refresh`. It is merged to `main` by a person through a pull request, roughly weekly. Never push to `main`.

## 2. Pick

Candidates are the records in `src/content/providers/*.md` that the register shows: `status` absent, `active`, `acquired`, `renamed`, `winding-down` or `delisted-on-request`. Skip every other status. A `draft` or `out-of-scope` record has nothing to refresh, and a defunct one has no pages to read.

Skip any record already changed on this branch since `main`:

```sh
git diff --name-only origin/main...refresh
```

That is what stops a record whose pages cannot be read from being picked every day until somebody notices.

Order the rest by `checkedAt`, oldest first, records with no `checkedAt` first of all, ties alphabetical by id. Take the first `N`.

## 3. Read

For each record, the pages to read are every URL under `urls` and every distinct URL in `sources`. Fetch each one. A page counts as read only when it answers 200 and the body is the page rather than a bot challenge, a login wall or an empty shell waiting for JavaScript. Anything else is **unreadable**. Note which and why, and read on.

Do not search the web for a fact. The provider's own pages are the only source this record may cite. If a page has moved, follow its redirect within the same domain and record the new URL as the source. A redirect to a different domain is an escalation, see step 6.

## 4. Compare

Go through the record's `sources` entries. Each names a field and the page that supports it. For every entry whose page was read:

- **The page still supports the value.** Set that entry's `checkedAt` to today.
- **The page states something else.** Change the field to the value the page states, using the vocabulary in `src/data/fields.yml`, set `checkedAt` to today, and keep the quote that shows it for the commit body. Twenty words at most. If the page states something the vocabulary has no value for, do not change the field; report it.
- **The page no longer mentions it.** Leave the field and the entry as they are. Report it as a source that has gone stale. Do not go looking for a replacement page elsewhere on the site unless the redirect led there.

Fields with no `sources` entry are not compared. Do not add sources for them, and do not fill fields that are absent. A refresh confirms and corrects; it does not research.

Set the record's own `checkedAt` to today only when every page in `sources` was read. If any was unreadable, leave the record's `checkedAt` alone: the claim would not be true.

## 5. Never touch

- Prose below the frontmatter, `description`, `figure`, `favorite`, `favoriteNote`.
- `status`, `addedAt`, `ai`, `criterion`.
- `referringSubnets` and `greenWebId`. Scripts own those.
- Any field whose page said nothing.

## 6. Escalate instead of writing

Stop work on the record, write nothing to it, and open a Linear issue when any of these is true:

- `urls.home` is unreachable or answers with a parked page.
- Any page redirects to another domain.
- A page announces an acquisition, a rename, a shutdown or an end of sales.
- More than five fields on one record would change.
- `N` is five or more and more than a fifth of the batch would change.

The issue goes to team Marketing, project FindHost+, title `FindHost: <name>, <what happened>`, body starting with 🤖 on its own line, then the URL, what was seen, and the quote. One issue per record. Search Linear first, and comment on an existing open issue for the record instead of opening a second.

If Linear is not reachable, put the same text in the run report and continue.

## 7. Write

One record, one commit. Before committing:

```sh
pnpm exec prettier --write src/content/providers/<id>.md
pnpm run validate
```

A failing `validate` means the change is wrong. Revert the file, report the failure, move on.

Commit subject: `Refresh <name>, read <today>`. Body: one line per changed field, `field: old → new`, followed by the quote and the URL. Then one line per stale source and one per unreadable page. End with `Co-Authored-By: Claude <noreply@anthropic.com>`.

Push:

```sh
git push origin refresh
```

## 8. Pull request

If no open pull request exists from `refresh` to `main`, open one titled `Refresh: week of <Monday's date>` with the run report as its body. If one exists, add the run report as a comment on it. If `gh` is missing or unauthenticated, skip this step; the commits carry the same information.

## 9. Report

End with a table, one row per record picked: id, pages read of total, fields confirmed, fields changed, stale sources, and whether `checkedAt` was set. Below it, the escalations. Nothing else.
