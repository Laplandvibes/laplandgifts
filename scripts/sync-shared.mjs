/**
 * Refresh this repo's VENDORED copy of the monorepo shared/ library.
 *
 * Why vendoring: src/ imports shared components (Footer, CookieBanner,
 * Legal/*, ...) which live in the PRIVATE parent monorepo at
 * ../shared — a directory that does not exist in this GitHub repo. A committed
 * vendored copy under src/shared/ is what lets GitHub Actions build this site
 * from a plain checkout, with no cross-repo token.
 *
 * This script keeps that copy fresh. It runs automatically before every local
 * `npm run build` / `npm run dev` (pre-scripts):
 *   - In the local monorepo: copies ../shared/<file> over each file we already
 *     vendor. Commit whatever it changes!
 *   - In CI / a standalone clone: ../shared doesn't exist → exits 0 and the
 *     committed snapshot is used as-is.
 *
 * Added 2026-08-13. Until then this repo had NO sync script, and the vendored
 * footer drifted ~26 lines behind canonical: it still carried
 * `rel="noopener noreferrer"` on the ecosystem grid and the yrityspaketit.fi
 * credit, i.e. it had missed the 2026-08-10 noreferrer removal (9c7bca9).
 * noreferrer strips the Referer header, so this site's outbound traffic to the
 * rest of the network landed in GA4 as "direct" instead of "referral" — a
 * measurement hole that no build error and no type check could reveal.
 *
 * ─── Three deliberate differences from the hub's scripts/sync-shared.mjs ────
 *
 * 1. REFRESH-ONLY, NOT A MIRROR (same as laplandwellness/tours/nightlife).
 *    It updates the files this repo ALREADY vendors and never pulls in new
 *    ones. The monorepo shared/ also holds things this site does not use
 *    (resortHubs/, ads/, destinations/, ...); mirroring them wholesale would
 *    put them under src/ where `tsc -b` type-checks them and Tailwind's
 *    @source "./shared/**" scans them — new build failures and dead CSS for
 *    zero benefit.
 *
 *    Vendoring a NEW shared file (when you add an import for it):
 *      cp ../shared/<file> src/shared/<file> && git add src/shared/<file>
 *    From then on this script keeps it in sync automatically.
 *
 * 2. IT DOES NOT TOUCH THE PRERENDERER. The wellness variant also vendors
 *    ../_prerender_routes.mjs straight over scripts/_prerender_routes.mjs.
 *    This site has its OWN, deliberately forked prerenderer at exactly that
 *    path — measured 2026-08-13 as different from the monorepo's, and locally
 *    modified on top of that. Vendoring the monorepo one would clobber the
 *    fork on the next build. Only src/shared/ is synced here.
 *
 * 3. IT REFUSES TO OVERWRITE WORK IT CANNOT GIVE BACK (see below).
 *
 * ─── 🔴 READS THE MONOREPO'S COMMITTED STATE, NOT ITS WORKING TREE ─────────
 *
 * `git show HEAD:shared/<file>`, never the file on disk. The monorepo shared/
 * tree is shared by ~26 worktrees and several agent sessions edit it at the
 * same time, so its working tree routinely holds someone else's half-finished
 * change; copying that in would ship it live from this repo.
 *
 * ─── 🔴 TWO GUARDS: never destroy another session's work ───────────────────
 *
 * A refresh is a delete-and-replace, and lv_permanent_rules §4 is explicit
 * that doing that to a file another session is holding is irreversible for
 * them. Both guards were written against cases measured in the sibling
 * laplandchristmas repo on 2026-08-13, not hypotheticals — this repo happened
 * to be clean under src/shared/ that day, but it is edited by the same
 * concurrent sessions (scripts/_prerender_routes.mjs, public/sitemap.xml and
 * src/components/AppPromo.tsx were all dirty at the time):
 *
 *   (a) SKIP a vendored file that is uncommitted HERE. Sibling sessions had
 *       PartnerSlot.tsx and NotFound.tsx locally modified in christmas while
 *       this script was being installed. Syncing them from HEAD would have
 *       thrown that work away with no copy anywhere.
 *
 *   (b) SKIP a vendored file whose upstream ../shared/<file> is dirty. HEAD can
 *       be OLDER than what is already committed and live here — christmas's
 *       NotFound.tsx carried the 2026-08-13 robots-meta rewrite while the
 *       monorepo copy was still uncommitted — and a sync would then silently
 *       revert a shipped fix. Wait for it to land; the next build picks it up.
 *
 * Both cases are reported as warnings so they are visible in the build log and
 * resolve on their own once the other session commits.
 *
 * NEVER edit files under src/shared/ by hand — edit the monorepo ../shared,
 * COMMIT there, then re-run `npm run sync:shared` (or any build).
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const monorepoRoot = resolve(repoRoot, '..');
const monorepoShared = join(monorepoRoot, 'shared');
const vendoredShared = join(repoRoot, 'src', 'shared');

const MARKER = '_VENDORED-DO-NOT-EDIT.md';

if (!existsSync(monorepoShared)) {
  console.log('[sync-shared] ../shared not found (CI / standalone checkout) — using committed vendored copy.');
  if (!existsSync(vendoredShared)) {
    console.error('[sync-shared] FATAL: src/shared/ is missing too. The vendored copy was never committed.');
    console.error('[sync-shared] Run `npm run sync:shared` in the local monorepo and commit src/shared/.');
    process.exit(1);
  }
  process.exit(0);
}

/** Every vendored file, relative to src/shared (recursive, marker excluded). */
function vendoredFiles(dir = vendoredShared) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    if (e.isDirectory()) return vendoredFiles(p);
    return e.name === MARKER ? [] : [relative(vendoredShared, p)];
  });
}

/** Committed (HEAD) content of a monorepo path, or null if git can't provide it. */
function committed(monorepoRelPath) {
  const r = spawnSync('git', ['-C', monorepoRoot, 'show', `HEAD:${monorepoRelPath}`], {
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024,
  });
  return r.status === 0 ? r.stdout : null;
}

/** Non-empty `git status --porcelain` for a path, in the given repo. */
function dirtyIn(cwd, relPath) {
  const r = spawnSync('git', ['-C', cwd, 'status', '--porcelain', '--', relPath], { encoding: 'utf8' });
  return r.status === 0 && r.stdout.trim() !== '';
}

/** Line-ending-insensitive compare: this repo checks out CRLF, the monorepo is LF. */
const sameText = (a, b) => a.replace(/\r\n/g, '\n') === b.replace(/\r\n/g, '\n');

const updated = [];
const heldLocal = [];
const heldUpstream = [];
const stale = [];
const noGit = [];

/**
 * Refresh ONE vendored file from the monorepo's committed state, under both
 * guards. `monorepoRel` / `localRel` are repo-relative POSIX paths, used both
 * for the git queries and for what the log prints.
 */
function syncOne({ monorepoRel, localRel, dest, upstreamOnDisk }) {
  const head = committed(monorepoRel);

  if (head === null) {
    // Not in HEAD: either deleted/renamed upstream, or git is unavailable.
    if (existsSync(upstreamOnDisk)) noGit.push(localRel);
    else stale.push(localRel);
    return;
  }
  // `existsSync` first: vendoredFiles() enumerates from disk so those always
  // exist, but a file vendored by explicit path can be deleted out from under
  // us — restore it rather than crashing the build on a missing read.
  if (existsSync(dest) && sameText(head, readFileSync(dest, 'utf8'))) return;

  // Guard (a): uncommitted here — someone is holding this file, and a refresh
  // would be the one edit they cannot recover.
  if (dirtyIn(repoRoot, localRel)) {
    heldLocal.push(localRel);
    return;
  }
  // Guard (b): uncommitted upstream — HEAD may be OLDER than what is already
  // committed and live here, so syncing would revert a shipped fix.
  if (dirtyIn(monorepoRoot, monorepoRel)) {
    heldUpstream.push(monorepoRel);
    return;
  }

  writeFileSync(dest, head);
  updated.push(localRel);
}

for (const rel of vendoredFiles()) {
  const posix = rel.replace(/\\/g, '/');
  syncOne({
    monorepoRel: `shared/${posix}`,
    localRel: `src/shared/${posix}`,
    dest: join(vendoredShared, rel),
    upstreamOnDisk: join(monorepoShared, rel),
  });
}

/**
 * 🔴 Vendored OUTSIDE src/shared/, and not part of the marker list above.
 *
 * scripts/_prerender_routes.mjs imports the crawlable-body helper dynamically
 * and "fails open" when it cannot resolve it. That was harmless while every
 * deploy came from a working tree that had ../ available. It stopped being
 * harmless when push-to-deploy went live (cbbc92f, 2026-08-21): the CI build
 * of e36cf70 (deploy 51c394a0, 2026-08-22) shipped every prerendered page at
 * 13 934 B instead of 38 245 B — the ecosystem link block missing from all
 * 2 460 files — with a green build and one NOTE in the log.
 *
 * The module is self-contained (node builtins only), so vendoring it costs
 * nothing and is the only thing that makes a plain checkout emit the same
 * bytes as a local build. Same two guards as everything else. This is a
 * deliberate exception to difference #2 in the header: that one is about
 * _prerender_routes.mjs, which this repo has genuinely FORKED — this helper
 * is not forked, so keeping it in sync is right.
 */
const CRAWLABLE = '_prerender_crawlable_body.mjs';
syncOne({
  monorepoRel: CRAWLABLE,
  localRel: `scripts/${CRAWLABLE}`,
  dest: join(repoRoot, 'scripts', CRAWLABLE),
  upstreamOnDisk: join(monorepoRoot, CRAWLABLE),
});

writeFileSync(
  join(vendoredShared, MARKER),
  [
    '# Vendored copy — do not edit',
    '',
    'These files are copies of the monorepo `../shared/` (source of truth for the',
    'whole LV ecosystem), taken from its **committed** state (`git show HEAD:...`),',
    'never from its working tree. They are committed here so GitHub Actions can',
    'build this repo standalone, without access to the private parent monorepo.',
    '',
    'Edit the monorepo `shared/` instead, COMMIT there, then run',
    '`npm run sync:shared` (also runs automatically before every local build/dev)',
    'and commit the refreshed copies here.',
    '',
    'Only the files listed below are vendored, on purpose — this is a refresh, not a',
    'mirror. To vendor a new one: `cp ../shared/<file> src/shared/<file>` and commit.',
    '',
    ...vendoredFiles()
      .map((f) => `- ${f.replace(/\\/g, '/')}`)
      .sort(),
    '',
    'Generated by `scripts/sync-shared.mjs`.',
    '',
  ].join('\n'),
);

// +1 for scripts/_prerender_crawlable_body.mjs, which is vendored from the
// monorepo root rather than from shared/ and so is not in vendoredFiles().
const total = vendoredFiles().length + 1;
if (updated.length) {
  console.log(`[sync-shared] Refreshed ${updated.length}/${total} vendored file(s) from the monorepo:`);
  updated.forEach((f) => console.log(`  • ${f}`));
  console.log('[sync-shared] Commit these so CI builds the same code.');
} else {
  console.log(`[sync-shared] ${total} vendored file(s) already up to date with the monorepo (or held, see below).`);
}
if (heldLocal.length) {
  console.warn(`[sync-shared] HELD: ${heldLocal.length} file(s) differ from the monorepo but are UNCOMMITTED here — left alone so the change is not destroyed:`);
  heldLocal.forEach((f) => console.warn(`  • ${f}`));
  console.warn('[sync-shared] Commit or discard them in this repo, then re-run to sync.');
}
if (heldUpstream.length) {
  console.warn(`[sync-shared] HELD: ${heldUpstream.length} file(s) have UNCOMMITTED changes in the monorepo — not synced, because HEAD may be older than what is live here:`);
  heldUpstream.forEach((f) => console.warn(`  • ../${f}`));
  console.warn('[sync-shared] Commit them in the monorepo and re-run to pick them up.');
}
if (stale.length) {
  console.warn(`[sync-shared] WARNING: ${stale.length} vendored file(s) no longer exist in ../shared at HEAD (renamed or deleted upstream?):`);
  stale.forEach((f) => console.warn(`  • ${f}`));
}
if (noGit.length) {
  console.warn(`[sync-shared] WARNING: could not read ${noGit.length} file(s) from monorepo git HEAD (git missing, or file untracked) — left untouched:`);
  noGit.forEach((f) => console.warn(`  • ${f}`));
}
