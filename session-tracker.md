# Session Tracker

## Session: 2026-04-04

### What Landed In This Session
- Created `team-config.js` for dynamic team member management:
  - Centralized configuration array with all 6 team member slots
  - Properties: id, name, role, shortRole, bio, photo, profileUrl, profileLabel, note, active
  - Dual rendering: buyer-focused `leader-grid` and detailed `t-grid-team`
- Updated `index.html` to render team from config:
  - Cleared hardcoded team HTML from both sections
  - Added `<script src="team-config.js"></script>` include
  - Dynamic rendering with `active` flag filtering
- Team roster update:
  - Removed `Raja. A` from active display (`active: false`)
  - Active members now: Viji Munuswamy, S. Tamilselvan
  - Placeholders M4, M5, M6 remain ready for future hires
- Deployed to production via `deploy-static.bat`
  - Production publish completed
  - Site updated within 2-3 minutes globally

### SEO, Domain, And Search Console Completion
- Confirmed canonical public site:
  - `https://www.olivine.co.in/`
- Confirmed apex domain handling:
  - `https://olivine.co.in/` now forwards to `https://www.olivine.co.in/`
- Added public SEO metadata in `index.html`:
  - meta description
  - canonical tag
  - Open Graph tags
  - Twitter card tags
  - robots directive
- Added crawl files:
  - `robots.txt`
  - `sitemap.xml`
- Added Google Search Console verification file:
  - `googlede9a897bc585b113.html`
- Deployed SEO and verification updates to production via `deploy-static.bat`
- Production refreshes triggered during SEO rollout:
  - `I46FT9EJN0BN0288ST8LHBWD1R`
  - `IA9IMFMD01KQQIO9F501X1H43X`
- Verified live public crawl files:
  - `https://www.olivine.co.in/robots.txt`
  - `https://www.olivine.co.in/sitemap.xml`
- Google Search Console completed:
  - `https://www.olivine.co.in/` verified
  - `olivine.co.in` domain property verified via DNS provider flow
  - sitemap submitted for `https://www.olivine.co.in/sitemap.xml`
  - indexing requested for:
    - `https://www.olivine.co.in/`
    - `https://olivine.co.in/`
- Outcome:
  - GoDaddy redirect, production hosting, and Google submission flow are complete
  - Remaining action is passive monitoring while Google refreshes search results over the coming days

---

## Session: 2026-03-28

### Project
- **Project:** `olivine.co.in`
- **Path:** `D:\viji\viji-olivine\00current\01olivine`
- **Primary files:** `index.html`, `explorer.html`
- **Deployment model:** static site on external hosting

### Current State
- Production site is live at:
  - `https://www.olivine.co.in/`
- Apex domain routing is also working to the `www` site.
- Desktop and mobile smoke checks were completed successfully.
- Final production commit already exists locally:
  - `712aa19` — `Launch olivine.co.in production site`

### What Landed In This Session
- Completed the investor-grade homepage polish in `index.html`.
- Added theme reflection across homepage and explorer page.
- Built the `explorer.html` platform showcase and walkthrough assets.
- Added the `Core Team` section with the first 3 real members:
  - `Viji Munuswamy`
  - `S. Tamilselvan`
  - `Raja. A`
- Added founder profile link for member 1.
- Fixed team anchor behavior so nav `Core Team` lands on the actual team subsection.
- Updated team photos to circular portraits with subtle double-ring styling.
- Hid placeholder members `M4`, `M5`, `M6` for now.
- Fixed metrics/proof-strip issues:
  - corrected `3-5x`
  - expanded the proof strip to full width
- Refined the header logo mark so it reads brighter and cleaner.

### Deployment Work Completed
- Completed production infrastructure setup and published the static site successfully.
- Attached the custom domain and finalized the static release flow.

### Safe Cleanup Already Done
- Removed unused tracked files:
  - `hero-bg.jpg`
  - `index_backup.html`
  - `index_clean.html`
  - `olcore-logo-dark.svg`
  - `olivine_forum_wire_final.html`
- Removed empty onboarding extraction folder.
- Kept deploy/config files for future releases.

### Current Known Good State
- Git branch: `main`
- Remote: `origin https://github.com/vijaympgs/olivine.git`
- Production site is serving correctly through the custom domain.
- Working tree was clean before this tracker update.

### Recommended Next Steps
1. Push the local production commits to GitHub.
2. Keep using `www.olivine.co.in` as the canonical live URL.
3. For the next release, use the new non-AWS deployment path for normal static updates
4. If the team expands, unhide placeholders and replace with real profiles.

### Notes For Next Session
- If any deployment update is needed, start from the new non-AWS hosting workflow for this site.
- If homepage changes are made, re-run a quick smoke test on:
  - homepage
  - theme toggle
  - `Explore Platform`
  - `Core Team`
  - mobile layout
- The current production baseline is stable and approved.
