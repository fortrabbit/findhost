---
name: refresh-record
description: Re-read one or more provider records against the provider's own pages, update what the pages contradict, date what they confirm, set `status` on the provider's own announcement, and push the result to the rolling `claude/refresh` branch. Use when asked to refresh, re-check, or re-verify provider records, or when running as the scheduled refresh routine (MR-320).
---

# Refresh a provider record

Read the repository `CLAUDE.md` first. Every rule in it applies here, and three of them decide most of what this skill does: absent means unknown, `checkedAt` is a claim, and nothing may be guessed.

This runs unattended. Never ask a question. Where the procedure says stop, stop and report.

## Input

- `N`, how many records to refresh. Default 1.
- Optionally, explicit record ids. Then `N` is ignored and the pick step is skipped.

## 1. Branch

Two branches, one per lane, and the lane is decided per record in step 8. Start on main, up to date:

```sh
git fetch origin
git checkout -B work origin/main
pnpm install --frozen-lockfile
```

- **`claude/refresh`** is the confirmation lane: records re-read and found unchanged, with their `checkedAt` dates moved, plus the log. A GitHub Action merges it into `main` on its own after checking that dates are all that changed, then deletes the branch.
- **`claude/refresh-review`** is the review lane: anything that changes a value, a status or a source. A person reads the pull request from it and merges.

Never push to `main`, and never put a real change on `claude/refresh`; the Action would refuse it and go red.

## 2. Pick

```sh
node scripts/refresh-pick.mjs --n N
```

It prints the ids to refresh: the register's records, oldest `checkedAt` first, records with none first of all, skipping anything `research/refresh-log.tsv` lists in the last sixty days. Do not pick by hand.

## 3. Read

For each record, the pages to read are every URL under `urls` and every distinct URL in `sources`, except the sources of fields the scripts own, `referringSubnets` and `greenWebId`; those point at third parties, and the scripts under `scripts/` refresh them. Fetch each one. A page counts as read only when it answers 200 and the body is the page rather than a bot challenge, a login wall or an empty shell waiting for JavaScript. Anything else is **unreadable**. Note which and why, and read on.

Do not search the web for a fact. The provider's own pages are the only source this record may cite. If a page has moved, follow its redirect within the same domain and record the new URL as the source. A redirect to a different domain is read for what it says, see step 5, and never becomes a source.

## 4. Compare

Go through the record's `sources` entries. Each names a field and the page that supports it. For every entry whose page was read:

- **The page still supports the value.** Set that entry's `checkedAt` to today.
- **The page states something else.** Change the field to the value the page states, using the vocabulary in `src/data/fields.yml`, set `checkedAt` to today, and keep the quote that shows it for the commit body. Twenty words at most. If the page states something the vocabulary has no value for, do not change the field; report it.
- **The page no longer mentions it.** Leave the field and the entry as they are. Report it as a source that has gone stale. Do not go looking for a replacement page elsewhere on the site unless the redirect led there.

Fields with no `sources` entry are not compared. Do not add sources for them, and do not fill fields that are absent. A refresh confirms and corrects; it does not research.

Set the record's own `checkedAt` to today only when every page in `sources` was read. If any was unreadable, leave the record's `checkedAt` alone: the claim would not be true.

## 5. Status

`status` is the one field the record's own pages can change without a `sources` entry, because a provider's own announcement is the source. Everything on this branch is merged by a person, so a status change is a proposal in a diff, not a decision that ships on its own. Write it, and put the evidence in the commit body.

- **`discontinued`.** A page the provider publishes says the service has ended, or `urls.home` now redirects to a page that says so. Quote it.
- **`acquired`.** The provider's own pages announce the acquisition and the service is still sold. Quote it. Fill `parent` only if the vocabulary already has the acquirer.
- **`renamed`.** The provider's own pages announce the new name. Quote it, and do not touch `name` or `id`; a rename of the record is a person's job.
- **`out-of-scope`.** Only on the two criteria the provider's own pages can show, from the six in `CONTRIBUTING.md`: criterion 3, it no longer publishes a price without a login, and criterion 4, it no longer documents its platform publicly. Set `criterion` to 3 or 4 and quote what the page shows instead, a login wall, a contact-sales form, an empty docs domain. Never rule on the other four; they need sources this skill may not read.
- **Never `draft`.** That means a record somebody started and did not finish. A provider that fails a criterion is a decision, and `out-of-scope` is where the site records one with a page to argue with.

A domain that does not answer is not evidence of anything. A parked page, an NXDOMAIN, a timeout: leave `status` alone, report it, and a person looks at it in the pull request.

Set the record's `checkedAt` to today on any status change; the pages were read.

## 6. Never touch

- Prose below the frontmatter, `description`, `figure`, `favorite`, `favoriteNote`. A discontinued record's About keeps reading in the present tense until a person edits it.
- `name`, `id`, `addedAt`, `ai`.
- `referringSubnets` and `greenWebId`. Scripts own those.
- Any field whose page said nothing.

## 7. Stop instead of writing

Stop work on the record, write nothing to it, and open a Linear issue when any of these is true:

- More than five fields on one record would change, status not counted.
- `N` is five or more and more than a fifth of the batch would change.
- The pages contradict each other, or say something the vocabulary cannot hold, on a question that decides `status`.

The issue goes to team Marketing, project FindHost+, title `FindHost: <name>, <what happened>`, body starting with 🤖 on its own line, then the URL, what was seen, and the quote. One issue per record. Search Linear first, and comment on an existing open issue for the record instead of opening a second.

If Linear is not reachable, put the same text in the run report and continue.

## 8. Write

One record, one commit, and every record picked gets a commit, even one whose pages could not be read. The work happens on `work`; the last step moves the commit to its lane.

**Decide the lane.** Stage the record and ask the guard, the same check the Action runs before merging:

```sh
pnpm exec prettier --write src/content/providers/<id>.md
git add src/content/providers/<id>.md
node scripts/refresh-guard.ts HEAD --staged
```

It prints `confirmation` or `review`. Nothing staged counts as `confirmation`.

- **`confirmation`:** append a line to `research/refresh-log.tsv`, tab-separated, `<today>\t<id>\t<outcome>\t<note>`, where the outcome is `confirmed`, `unreadable` or `stopped` and the note is one clause, such as `Cloudflare challenge on home`. Stage it too. That line is what keeps the record out of tomorrow's pick, and it is why a run with nothing to confirm still pushes.
- **`review`:** no log line. The pick script skips records waiting on the review branch by itself.

**Validate, then commit on `work`:**

```sh
pnpm run validate
git commit
```

A failing `validate` means the change is wrong. Revert the record, log it as `stopped`, and commit that on the confirmation lane instead.

Commit subject: `Refresh <name>, read <today>`, or `Log <name> as unreadable, <today>` when nothing on the record changed. Body: a status change first, if any, with the quote and the URL. Then one line per changed field, `field: old → new`, followed by the quote and the URL. Then one line per stale source and one per unreadable page. End with `Co-Authored-By: Claude <noreply@anthropic.com>`.

**Move it to the lane and push.** `<lane>` is `claude/refresh` for a confirmation, `claude/refresh-review` for a review:

```sh
git checkout -B <lane> origin/<lane> 2>/dev/null || git checkout -B <lane> origin/main
git merge --no-edit work
git push origin <lane>
```

## 9. Pull request

Only for the review lane. If no open pull request exists from `claude/refresh-review` to `main`, open one titled `Refresh for review: <today>` with the run report as its body. If one exists, add the run report as a comment on it. Status changes go first in either, one line each with the quote; they are what the reviewer must see. If `gh` is missing or unauthenticated, skip this step; the commits carry the same information.

The confirmation lane needs no pull request. The Action merges it.

## 10. Report

End with a table, one row per record picked: id, pages read of total, fields confirmed, fields changed, status change if any, stale sources, and whether `checkedAt` was set. Below it, the status changes with their quotes, then the escalations. Nothing else.
