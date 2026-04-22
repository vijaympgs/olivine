Olivine Platform — Deployment & DNS Reference
1. Context

The Olivine platform is deployed on AWS Elastic Beanstalk with a Django application.

Infrastructure components already completed:

AWS S3 bucket for backups

AWS CLI configured

Deployment automation scripts

Elastic Beanstalk environment created

Git repository connected

GoDaddy domain purchased (olivine.co.in)

GoDaddy email configured (viji@olivine.co.in)

Current deployment issue:

Elastic Beanstalk health check failing
Gunicorn cannot find module: vijim_ai

This is typically a Python path / WSGI configuration issue.

2. Django Deployment Structure (Elastic Beanstalk)

Elastic Beanstalk expects the Django project at the repository root.

Expected Structure
project-root
│
├── manage.py
├── requirements.txt
├── Procfile
│
├── vijim_ai
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
└── apps/
Nested Structure Example

If the project is nested:

project-root
   backend/
      manage.py
      vijim_ai/

Gunicorn must reference the nested module.

3. Procfile Configuration

Standard configuration:

web: gunicorn vijim_ai.wsgi:application

If project is nested:

web: gunicorn backend.vijim_ai.wsgi:application

Recommended production-safe configuration:

web: gunicorn --chdir /var/app/current vijim_ai.wsgi:application
4. Elastic Beanstalk Configuration

Create:

.ebextensions/python.config

Content:

option_settings:
  aws:elasticbeanstalk:container:python:
    WSGIPath: vijim_ai/wsgi.py

If nested:

option_settings:
  aws:elasticbeanstalk:container:python:
    WSGIPath: backend/vijim_ai/wsgi.py
5. PYTHONPATH Safety Configuration

Create:

.ebextensions/path.config

Content:

container_commands:
  01_set_pythonpath:
    command: "export PYTHONPATH=$PYTHONPATH:/var/app/current"
6. Debugging via SSH

Connect to Elastic Beanstalk instance.

eb ssh

Navigate to application directory:

cd /var/app/current
ls

Expected files:

manage.py
vijim_ai
requirements.txt

Test module import:

python -c "import vijim_ai"

If import fails → Python path problem confirmed.

7. Gunicorn Log Inspection
sudo tail -f /var/log/web.stdout.log

or

sudo tail -f /var/log/web.stderr.log

These logs show the exact module import error.

8. Deployment Command

Redeploy after fixing configuration.

git add .
git commit -m "Fix EB Django WSGI module path"
eb deploy

Expected result:

EB health check turns green

Gunicorn starts correctly

Django app loads

9. Domain Architecture

Domain registered:

olivine.co.in

Structure uses subdomains for products.

Corporate Website
olivine.co.in
Purpose: Company corporate website
Founder Portfolio
vijim.olivine.co.in
Purpose: Founder portfolio
Personal Endpoint
viji.olivine.co.in
Purpose: Founder application endpoint
10. Olivine Product Subdomains

All initially routed to the same Elastic Beanstalk environment.

retail.olivine.co.in  → Retail ERP
app.olivine.co.in     → Platform entry
erp.olivine.co.in     → ERP module
crm.olivine.co.in     → CRM module
hrm.olivine.co.in     → HRM module
fms.olivine.co.in     → Financial Management System
pos.olivine.co.in     → POS module
meet.olivine.co.in    → Collaboration platform
11. Elastic Beanstalk Target

All application subdomains point to:

vijim-ai-prod.eba-smvi2mvs.us-east-1.elasticbeanstalk.com
12. GoDaddy DNS Configuration

Root domain record:

Host: @
Type: A
Value: 13.248.243.5
Purpose: Corporate website
Subdomain Configuration

All application subdomains:

Type: CNAME
Value: vijim-ai-prod.eba-smvi2mvs.us-east-1.elasticbeanstalk.com
TTL: 3600

Hosts:

vijim
viji
retail
app
erp
crm
hrm
fms
pos
meet
13. Email Configuration (GoDaddy)

Email account:

viji@olivine.co.in
MX Records
@ → smtp.secureserver.net (Priority 0)
@ → mailstore1.secureserver.net (Priority 10)
SPF Record
v=spf1 include:secureserver.net -all
DKIM
secureserver1._domainkey
secureserver2._domainkey
DMARC
_dmarc → v=DMARC1; p=quarantine

These must remain unchanged.

14. Current Architecture
GoDaddy
   │
   └── Domain + DNS
          │
          ▼
Elastic Beanstalk
          │
          ▼
Gunicorn
          │
          ▼
Django Application
15. Future Scalable Architecture (Optional)

For larger scale SaaS deployment:

Route53
   ↓
CloudFront
   ↓
Elastic Load Balancer
   ↓
Elastic Beanstalk
   ↓
Django
16. Final Status

Infrastructure:

AWS S3 backups          ✅
AWS CLI                 ✅
Elastic Beanstalk       ✅
Domain registered       ✅
Email configured        ✅
DNS architecture        ✅

Pending:

Django startup fix (Gunicorn module path)

Authority

Company: Olivine Technologies
Platform: Olivine Platform
Founder: Viji
Architectural Guide: Mindra