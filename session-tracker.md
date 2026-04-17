# Session Tracker

## Session: 2026-04-17 09:57 IST

### CloudFront & AWS Infrastructure Migration (olivine.co.in)
- **Account Migration:** Moved `olivine.co.in` hosting stack from inactive AWS account (`622370466597`) to active account (`673981388490` / `vijim`).
- **S3 Bucket:** Created `olivine-site-673981388490` in `us-east-1` with static hosting and public access blocked.
- **Security:** Configured OAC (Origin Access Control) so that only CloudFront can read from the S3 bucket.
- **CloudFront Distribution:** Created new distribution `E2K781O9900J5H` (`d1wez405wmtx95.cloudfront.net`).
- **SSL / ACM:** Attached the existing wildcard certificate (`*.olivine.co.in`) located in account `673981388490`.
- **DNS (GoDaddy):** 
  - Updated `www` CNAME to `d1wez405wmtx95.cloudfront.net`.
  - Added TXT records (`_www` and `_`) to pass AWS's cross-account domain hijacking verification.
  - Successfully associated aliases `olivine.co.in` and `www.olivine.co.in` forcefully via CLI.
  - Root domain `olivine.co.in` continues to route correctly using GoDaddy's domain forwarding to `www`.
- **CI/CD Integration:** 
  - Updated `.github/workflows/deploy.yml` with the new S3 bucket URI and CloudFront distribution ID.
  - Rotated user GitHub Secrets (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`) to match the `vijim` profile so the CI/CD pipeline correctly pushes to the new account.

### Team Configuration Enhancements
- **Feature Addition (`team-config.js`):** Added explicit `order` properties (1 through 6) to every team member object.
- **Dynamic Sorting:** Both UI arrays (`renderBuyerTeam` and `renderDetailedTeam`) now automatically sort members numerically by `order` before rendering, eliminating the need to physically rearrange elements in the array to change their position on screen.
- **Roster Changes:** Swapped order of `Raja. A` and `Prabakaran` roles.

### Current Steady State
- The production site is live, secure, and securely attached to the new AWS architecture.
- Future git pushes to `main` will seamlessly build and deploy to `673981388490` at zero ongoing infrastructure cost.

