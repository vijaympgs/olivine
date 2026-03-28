# Session Tracker

## Session: 2026-03-28

### Project
- **Project:** `olivine.co.in`
- **Path:** `D:\viji\viji-olivine\00current\01olivine`
- **Primary files:** `index.html`, `explorer.html`
- **Deployment model:** static site on `S3 + CloudFront`

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
- Added deployment files:
  - `deploy.config.ps1`
  - `deploy-static.ps1`
  - `deploy-static.bat`
  - `setup-s3-bucket.ps1`
  - `setup-s3-bucket.bat`
  - `DEPLOYMENT.md`
- Created S3 bucket:
  - `olivine.co.in`
- Created CloudFront distribution:
  - **Distribution ID:** `EZM6CBH3OTKTU`
  - **CloudFront domain:** `d3g2g3vq02hvwy.cloudfront.net`
- Attached alias:
  - `www.olivine.co.in`
- Uploaded the static site successfully.
- Updated `deploy.config.ps1` with the live distribution ID.
- Cleaned temporary deployment JSON files from S3 and added them to deploy excludes.

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
3. For the next release, use:
   - `setup-s3-bucket.ps1` only if infrastructure changes
   - `deploy-static.ps1` for normal static updates
4. If the team expands, unhide placeholders and replace with real profiles.

### Notes For Next Session
- If any deployment update is needed, start from `deploy.config.ps1` and `DEPLOYMENT.md`.
- If homepage changes are made, re-run a quick smoke test on:
  - homepage
  - theme toggle
  - `Explore Platform`
  - `Core Team`
  - mobile layout
- The current production baseline is stable and approved.