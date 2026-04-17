# Olivine.co.in Deployment Status & Handover

**Date:** April 17, 2026  10am
**Account Migration:** From `622370466597` (Closed) to `673981388490` (Active)  
**Goal:** Zero-cost static deployment using S3 + CloudFront with OAC and HTTPS.

---

## 🟢 Infrastructure Completed (Active Account: 673981388490)

The core AWS resources have been successfully provisioned:

1. **S3 Bucket:** `olivine-site-673981388490`
   - Created in `us-east-1`.
   - Security: Public access fully blocked.
   - Initial sync: Completed. All site files uploaded.
2. **Origin Access Control (OAC):**
   - Configured (`EXY7UGGY8SH58`) to allow CloudFront exclusive secure access to the private S3 bucket.
3. **CloudFront Distribution:**
   - **ID:** `E2K781O9900J5H`
   - **Domain (Testing URL):** [https://d1wez405wmtx95.cloudfront.net](https://d1wez405wmtx95.cloudfront.net)
   - Attached to the existing wildcard ACM certificate (`*.olivine.co.in`).
4. **CI/CD Pipeline (GitHub Actions):**
   - Updated `.github/workflows/deploy.yml` with the new S3 bucket and CloudFront ID.
   - Committed and pushed to `main`.

---

## 🟠 Pending Manual Actions (Requires Your Action)

Because of AWS's strict domain protections, aliases (`olivine.co.in`, `www.olivine.co.in`) could not be instantly attached to the new distribution while the DNS still points to the old, deleted distribution.

Please complete the following steps to finalize the migration:

### Step 1: Update GitHub Secrets (For CI/CD)
The automated GitHub pipeline now deploys to your *new* AWS account. It needs permissions:
1. Go to **GitHub** → Repository: `vijaympgs/olivine` → **Settings** → **Secrets and variables** → **Actions**.
2. Update `AWS_ACCESS_KEY_ID` with the key from account `673981388490`.
3. Update `AWS_SECRET_ACCESS_KEY` with the secret from account `673981388490`.

### Step 2: Update DNS Records
Log into your DNS Registrar (e.g., GoDaddy, Cloudflare) and point traffic to the new infrastructure:
- **Type ALIAS / CNAME** for root (`@` / `olivine.co.in`) → Target: `d1wez405wmtx95.cloudfront.net`
- **Type CNAME** for `www` → Target: `d1wez405wmtx95.cloudfront.net`

### Step 3: Attach Aliases to CloudFront
Once the DNS records have been updated and have had a moment to propagate, the aliases must be added to the new CloudFront distribution. 

Let the AI know when DNS is updated, or run the following AWS CLI command to finalize the attachment:
```bash
aws cloudfront get-distribution-config --id E2K781O9900J5H --output json > cf-final.json
# Manually open cf-final.json, strip the top-level "ETag" and "DistributionConfig" wrapper,
# and add "olivine.co.in" and "www.olivine.co.in" to the "Aliases" array.
aws cloudfront update-distribution --id E2K781O9900J5H --distribution-config file://cf-final.json --if-match <ETAG>
```
