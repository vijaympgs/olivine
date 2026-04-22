# 🦅 OLIVINE PLATFORM - VERSION 3.0 (CURRENT-ADVANCED VERSION)
**The Ultimate ERP Ecosystem**

**Version**: 3.0.0 (Current-Advanced)
**Release Date**: January 2026
**Architecture**: Monorepo
**Status**: Production / Advanced

---

## 🎯 **PLATFORM OVERVIEW**

Olivine Platform is a next-generation, modular Enterprise Resource Planning (ERP) ecosystem. This is the **Current-Advanced Version (v3.0)**, designed for high-scalability and modularity with recent architectural enhancements.

### **Core Philosophy**
- **Unified Shell**: Single integrated platform with modular architecture
- **Backend-Driven Configuration**: Toolbar and UI controls managed from database
- **Enterprise Standards**: VB.NET-inspired UI with keyboard shortcuts (F1-F12)
- **Multi-Tenant Ready**: Company-scoped data with location-based access control

---

## 🏗️ **ARCHITECTURAL HIGHLIGHTS**

### **1. Unified Application Shell**
Unlike traditional multi-app deployments, Olivine Platform uses a **Unified Shell Architecture**:

```
┌─────────────────────────────────────────────────┐
│         SINGLE UNIFIED PLATFORM                 │
├─────────────────────────────────────────────────┤
│  Backend:  Port 8000 (Django REST Framework)   │
│  Frontend: Port 3001 (React + TypeScript)      │
│  Database: SQLite (Dev) / PostgreSQL (Prod)    │
└─────────────────────────────────────────────────┘
                      ↓
    ┌─────────────────────────────────────┐
    │  Integrated Modules (4 Core Apps)   │
    ├─────────────────────────────────────┤
    │  📦 Retail  - Store Ops, Inventory  │
    │  👥 HRM     - Employees, Payroll    │
    │  🤝 CRM     - Customers, Leads      │
    │  💰 FMS     - Finance, Accounting   │
    └─────────────────────────────────────┘
```

**Benefits**:
- ✅ Single login for all modules
- ✅ Shared authentication and authorization
- ✅ Unified navigation via sidebar
- ✅ Cross-module data integration
- ✅ Simplified deployment and maintenance

---

### **2. Separate Backend/Frontend per Module**

Each module maintains **logical separation** while sharing infrastructure:

```
olivine-platform/
├── Retail/
│   ├── backend/          # Django apps (inventory, pos, sales)
│   └── frontend/         # Module-specific components (optional)
├── HRM/
│   ├── backend/          # Django apps (hrm domain)
│   └── frontend/         # Module-specific components (optional)
├── CRM/
│   ├── backend/          # Django apps (crm domain)
│   └── frontend/         # Module-specific components (optional)
├── FMS/
│   ├── backend/          # Django apps (fms domain)
│   └── frontend/         # Module-specific components (optional)
├── Common/               # Shared resources
│   └── qa-launcher-console/  # DevOps tools
├── backend/              # ⭐ UNIFIED BACKEND (Port 8000)
│   ├── erp_core/         # Django project settings
│   ├── manage.py
│   └── db.sqlite3        # Shared database
└── frontend/             # ⭐ UNIFIED FRONTEND (Port 3001)
    ├── src/
    │   ├── pages/        # All module pages
    │   ├── components/   # Shared UI components
    │   └── services/     # API clients
    └── vite.config.ts
```

**Key Points**:
- Each module has its own Django apps in `{Module}/backend/`
- All modules are registered in the unified `backend/erp_core/settings.py`
- Frontend is a single React app with module-based routing
- Shared components live in `frontend/src/components/`

---

### **3. Backend-Driven Toolbar System**

**Revolutionary Feature**: Toolbars are **NOT hardcoded** in the frontend!

#### **How It Works**:
1. **Database Configuration**: All toolbar actions stored in `ERPToolbarControl` table
2. **API-Driven**: Frontend fetches toolbar config via REST API
3. **Dynamic Rendering**: Toolbar buttons rendered based on:
   - Current view mode (VIEW/EDIT/CREATE)
   - User permissions
   - License status
   - Module context

#### **Benefits**:
- ✅ **No Code Deployment**: Change toolbar without frontend rebuild
- ✅ **Role-Based Access**: Show/hide actions based on user role
- ✅ **License Control**: Disable features for unlicensed modules
- ✅ **Audit Trail**: Track toolbar configuration changes
- ✅ **Consistency**: Same toolbar behavior across all screens

#### **Example Flow**:
```
User opens "Item Master" screen
    ↓
Frontend calls: GET /api/toolbar-control/?menu_id=RETAIL_ITEM_MASTER&mode=VIEW
    ↓
Backend returns: { actions: [
    { code: "ADD", label: "Add", shortcut: "F2", enabled: true },
    { code: "EDIT", label: "Edit", shortcut: "F3", enabled: true },
    { code: "DELETE", label: "Delete", shortcut: "F8", enabled: false }
]}
    ↓
Frontend renders toolbar with enabled/disabled states
```

---

### **4. Unified App Launcher**

**QA Launcher Console** - The DevOps Command Center

**Location**: `Common/qa-launcher-console/`  
**Purpose**: Orchestrate and monitor all platform services

#### **Features**:
- 🚀 **One-Click Launch**: Start backend (8000) + frontend (3001) together
- 📊 **Real-Time Monitoring**: Live log streaming from all processes
- 🔍 **Health Checks**: Automatic port verification and status reporting
- 📋 **Readiness Matrix**: Track implementation status across modules
- 🎯 **Selective Execution**: Launch individual modules or full platform
- 💾 **Log Export**: Download execution logs for debugging

#### **Ports**:
- **Launcher Backend**: 3001 (Express + WebSocket)
- **Launcher Frontend**: 5174 (Vite dev server)
- **Platform Backend**: 8000 (Django)
- **Platform Frontend**: 3001 (React/Vite)

#### **Usage**:
```bash
# Start the launcher
cd Common/qa-launcher-console/backend
npm start

cd Common/qa-launcher-console/frontend
npm run dev

# Open http://localhost:5174
# Click "ERP Core - Retail, HRM, CRM, FMS" to launch platform
```

---

### **5. Advanced QA Test Console with Readiness Matrix**

The QA Console provides **comprehensive visibility** into platform readiness:

#### **Readiness Dimensions** (8 Checkpoints per Feature):
1. **UI**: User interface implemented
2. **Toolbar**: Toolbar integration complete
3. **BBP**: Business Blueprint documented
4. **Model**: Data model defined
5. **CRUD**: Create/Read/Update/Delete operations
6. **Validation**: Business rules implemented
7. **Persistence**: Database persistence working
8. **UAT**: User Acceptance Testing complete

#### **Current Status** (Retail Module):
```
┌──────────────┬─────────┬──────────┬─────────┐
│ Dimension    │ Total   │ Complete │ %       │
├──────────────┼─────────┼──────────┼─────────┤
│ UI           │ 141     │ 141      │ 100% ✅ │
│ Toolbar      │ 100     │ 13       │ 13%  ⚠️ │
│ BBP          │ 100     │ 75       │ 75%  ✅ │
│ Model        │ 141     │ 141      │ 100% ✅ │
│ CRUD         │ 141     │ 141      │ 100% ✅ │
│ Validation   │ 141     │ 141      │ 100% ✅ │
│ Persistence  │ 141     │ 141      │ 100% ✅ │
│ UAT          │ 141     │ 0        │ 0%   ❌ │
└──────────────┴─────────┴──────────┴─────────┘

Overall Readiness: 73% (584/800 checkpoints)
```

**Tracking Document**: `Steering/04_EXECUTION_PLANS_FIX_REFERENCES/RETAIL_IMPLEMENTATION_TRACKER.md`

---

## 📦 **MODULE BREAKDOWN**

### **1. Retail Module** (Primary - 141 Features)
**Status**: 100% UI Complete, 13% Toolbar Integration

#### **Sub-Modules**:
- **Store Operations (POS)**: 7 features
  - Checkout, Registers, Day Open/Close, Shift Management, Reconciliation
- **Sales**: 5 features
  - Quotes, Orders, Invoices, Returns, Configuration
- **Merchandising**: 9 features
  - Item Master, Categories, Brands, Attributes, Pricing, UOM
- **Inventory**: 63 features
  - Stock Management, Movements, Adjustments, Physical Inventory
  - Valuation, Replenishment, Batch/Serial Tracking, Reports
- **Procurement**: 11 features
  - Suppliers, Requisitions, RFQs, Purchase Orders, Receipts, Returns
- **Customers**: 3 features
  - Customer Master, Groups, Loyalty Programs

**Gold Standard**: UOM Setup (Decoupled scrolling, surgical spacing, robust toolbar handlers)

---

### **2. HRM Module** (Human Resource Management)
**Status**: Stable, Core Features Complete

#### **Features**:
- **Organization Chart**: Hierarchical visualization (1-4-4-4-4 distribution)
- **Employee Management**: Master data, personal info, employment details
- **Department Management**: Organizational structure
- **Payroll**: (Planned)
- **Attendance**: (Planned)

**Implementation Guide**: `HRM/bootstrap-hrm-only/HRM_CORE_IMPLEMENTATION_GUIDE.md`

---

### **3. CRM Module** (Customer Relationship Management)
**Status**: Backend Integration Phase

#### **Planned Features**:
- Customer Master
- Leads Management
- Opportunities
- Sales Funnel
- Marketing Campaigns
- Contact Management

---

### **4. FMS Module** (Financial Management System)
**Status**: Blocked (Waiting for Retail 100%)

#### **Planned Features**:
- General Ledger
- Accounts Receivable (AR)
- Accounts Payable (AP)
- Cash & Bank Management
- Payments
- Tax Management
- Financial Reports
- Period Closing

---

## 🎨 **UI/UX STANDARDS**

### **Design System**
- **Framework**: React 18 + TypeScript + Tailwind CSS
- **Build Tool**: Vite
- **Font**: Inter (professional, enterprise-grade)
- **Theme**: VB.NET-inspired with modern aesthetics

### **Typography Hierarchy** (L1-L4):
```css
L1: Page Titles      - 24px, weight 700
L2: Section Headers  - 18px, weight 600
L3: Subsection       - 14px, weight 600
L4: Body/Labels      - 12px, weight 400
```

### **Component Standards**:
- ✅ **Modals**: BaseModal (workspace C positioning)
- ✅ **Lookups**: LookupContainer (mandatory)
- ✅ **Buttons**: Centralized CSS variables (no hardcoded colors)
- ✅ **Toolbar**: VB.NET-style with F-key shortcuts (F1-F12)
- ✅ **Forms**: In-Place Swap pattern (preferred over modals)

### **UI Patterns**:
- **Master Data**: mst01 (Simple), mst02 (Complex), mst03 (Advanced)
- **Transactions**: txn01 (Simple), txn02 (Complex), txn03 (Advanced)

### **Keyboard Shortcuts**:
```
F1  - Help
F2  - Add New
F3  - Edit
F4  - Save
F5  - Refresh
F6  - Clone
F7  - Print
F8  - Delete
F9  - Search
F10 - Settings
F11 - Full Screen
F12 - Exit
```

---

## 🔐 **SECURITY & AUTHENTICATION**

### **Authentication Flow**:
1. User logs in → Backend issues JWT token
2. Frontend stores token in localStorage
3. All API requests include token in Authorization header
4. Backend validates token for each request

### **Authorization**:
- **Role-Based Access Control (RBAC)**
- **Company-Scoped Data**: All queries filtered by user's company
- **Location-Based Access**: Users assigned to specific locations
- **Permission Checks**: At both API and UI levels

### **Default Credentials** (Development):
```
Admin:              admin / admin123
Back Office Admin:  boadmin / boadmin123
Back Office User:   bouser / bouser123
POS Manager:        posadmin / posadmin123
POS User:           posuser / posuser123
```

### **Companies**:
- MINDRA
- RRI

---

## 🗄️ **DATA ARCHITECTURE**

### **Architectural Locks** (Critical):
```
✅ ItemMaster (NOT Item) - CANONICAL product model
✅ domain.company = Operational models ONLY
✅ business_entities = Licensing metadata ONLY
✅ Company (NOT OperatingCompany)
```

### **Key Models**:
| Model | Purpose | Table | App |
|-------|---------|-------|-----|
| Company | Licensing entity | be_company | business_entities |
| ItemMaster | Product master | be_item_master | domain.company |
| Category | Product categories | be_category | domain.company |
| Brand | Product brands | be_brand | domain.company |
| Location | Stores/Warehouses | be_location | domain.company |
| OperationalSupplier | Suppliers | be_supplier | domain.company |
| OperationalCustomer | Customers | be_customer | domain.company |

**Reference**: `Steering/00AGENT_ONBOARDING/01_Governance/ARCHITECTURAL_LOCK_REFERENCE.md`

---

## 🚀 **GETTING STARTED**

### **Prerequisites**:
- Python 3.10+
- Node.js 18+
- npm or yarn
- Git

### **Quick Start**:

#### **Option 1: Using App Launcher (Recommended)**
```bash
# 1. Start the launcher
cd Common/qa-launcher-console/backend
npm install
npm start

# 2. In a new terminal, start launcher frontend
cd Common/qa-launcher-console/frontend
npm install
npm run dev

# 3. Open http://localhost:5174
# 4. Click "ERP Core - Retail, HRM, CRM, FMS"
# 5. Wait for services to start
# 6. Open http://localhost:3001
# 7. Login with admin / admin123
```

#### **Option 2: Manual Start**
```bash
# 1. Start backend
cd backend
python -m venv .venv
.venv\Scripts\activate  # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000

# 2. In a new terminal, start frontend
cd frontend
npm install
npm run dev -- --port 3001

# 3. Open http://localhost:3001
# 4. Login with admin / admin123
```

### **First-Time Setup**:
```bash
# Run migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Seed master data
python manage.py seed_enterprise_masters

# Access Django Admin
http://localhost:8000/admin
```

---

## 📚 **DOCUMENTATION STRUCTURE**

### **Root Level**:
- `README.md` - Quick start guide
- `ARCHITECTURE.md` - System architecture
- `PLATFORM_VERSION_INFO.md` - This file (version overview)
- `SESSION_NEXT.md` - Current development priorities
- `SESSION_LAST.md` - Last session accomplishments

### **Steering Documentation** (`.steering/`):
- `00AGENT_ONBOARDING/` - Onboarding guides
- `01_ARCH_GOVERNANCE/` - Architectural rules
- `02_PROMPT_LIBRARY/` - Behavioral contracts
- `04_EXECUTION_PLANS_FIX_REFERENCES/` - Implementation trackers
- `14UI_CANON/` - UI templates and patterns
- `20TOOLBAR_ROLLOUT/` - Toolbar implementation guides

### **Module Documentation**:
- `HRM/bootstrap-hrm-only/HRM_CORE_IMPLEMENTATION_GUIDE.md`
- `Common/qa-launcher-console/UNIFIED_APP_SHELL_GUIDE.md`
- `Steering/04_EXECUTION_PLANS_FIX_REFERENCES/RETAIL_IMPLEMENTATION_TRACKER.md`

---

## 🔧 **TECHNOLOGY STACK**

### **Backend**:
- **Framework**: Django 4.2+ with Django REST Framework
- **Database**: SQLite (Dev), PostgreSQL (Prod)
- **Authentication**: Token-based (DRF TokenAuthentication)
- **API**: RESTful with pagination, filtering, search
- **Admin**: Django Admin (enhanced)

### **Frontend**:
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS + Custom CSS Variables
- **State Management**: React Context + Local State
- **HTTP Client**: Axios
- **Routing**: React Router v6

### **DevOps**:
- **Process Management**: Node.js (Express + child_process)
- **Log Streaming**: WebSocket (ws library)
- **Version Control**: Git
- **Package Management**: npm (Frontend), pip (Backend)

---

## 📊 **CURRENT DEVELOPMENT STATUS**

### **Phase 1: Retail Module** (Current)
- **Progress**: 73% Overall (584/800 checkpoints)
- **UI**: 100% Complete (141/141)
- **Backend**: 100% Complete
- **Toolbar**: 13% Complete (13/100)
- **UAT**: 0% (Pending)

### **Phase 2: FMS Module** (Blocked)
- **Status**: Waiting for Retail 100%
- **Progress**: 0%

### **Ongoing**: HRM & CRM Modules
- **HRM**: Stable, core features complete
- **CRM**: Backend integration phase

---

## 🎯 **NEXT PRIORITIES**

### **P0 - Critical**:
1. **CRM & FMS Verification**: Verify data loading from unified backend
2. **Retail Toolbar Rollout**: Complete 87 pending toolbar integrations

### **P1 - High**:
1. **Retail Feature Advancement**: Implement Pricing – Promotions
2. **Toolbar Permissions Audit**: Verify role-based access control

### **P2 - Medium**:
1. **UAT Testing**: Define and execute test cases
2. **Documentation**: Keep implementation guides updated

---

## 🏆 **KEY INNOVATIONS**

### **1. Backend-Driven UI Configuration**
- Toolbar actions stored in database
- No frontend code changes for UI updates
- License-controlled feature access

### **2. Unified Shell Architecture**
- Single login, single deployment
- Seamless cross-module navigation
- Shared authentication and authorization

### **3. Advanced QA Console**
- Real-time process monitoring
- Comprehensive readiness tracking
- One-click platform orchestration

### **4. Enterprise-Grade Standards**
- VB.NET-inspired keyboard shortcuts
- Consistent UI patterns (mst/txn)
- Centralized design system

### **5. Modular Yet Integrated**
- Logical module separation
- Shared infrastructure
- Cross-module data integration

---

## 📞 **SUPPORT & GOVERNANCE**

### **Authority Structure**:
```
VIJI (Product Owner - FINAL AUTHORITY)
    ↓
MINDRA (Chief Architect - Roles A/B/C/D)
    ↓
ASTRA (ERP Development - Retail + FMS)
    ↓
AGENT E (HRM + CRM)
```

### **Governance Rules**:
- ✅ `.steering/` is SINGLE SOURCE OF TRUTH
- ✅ Follow CANONICAL_RULESET.md (non-negotiable)
- ✅ Respect architectural locks
- ✅ Apps are CONSUMERS, not OWNERS
- ✅ Never touch `01practice-v2/` (READ-ONLY)

### **Development Workflow**:
- **ELOBS**: Extract → Layout → Organize → Build → Sync
- **Auto-Execution Mode**: Proceed end-to-end without confirmations
- **STOP Gates**: Only for missing input or governance violations

---

## 🌟 **VERSION HIGHLIGHTS**

### **What's New in v3.0 (Current-Advanced)**:
- ✅ Unified Shell Architecture (4 modules, 1 platform)
- ✅ Backend-Driven Toolbar System
- ✅ Advanced QA Launcher Console
- ✅ Readiness Matrix Tracking (8 dimensions)
- ✅ 141 Retail UIs (100% complete)
- ✅ HRM Organization Chart (Hybrid vertical layout)
- ✅ In-Place Swap UI Pattern (Gold Standard)
- ✅ Decoupled Scrolling (UOM Gold Standard)
- ✅ Comprehensive Steering Documentation

### **Breaking Changes from v1.0**:
- ❌ Removed: Separate backends/frontends per module
- ❌ Removed: Hardcoded toolbar configurations
- ❌ Deprecated: `Item` model (use `ItemMaster`)
- ❌ Deprecated: `OperatingCompany` (use `Company`)

---

## 📝 **LICENSE & COPYRIGHT**

**Copyright**: © 2026 Olivine Platform  
**License**: Proprietary (Internal Use Only)  
**Version**: 3.0.0
**Last Updated**: January 19, 2026

---

## 🚀 **QUICK REFERENCE**

### **URLs**:
- **Platform**: http://localhost:3001
- **Backend API**: http://localhost:8000/api/
- **Django Admin**: http://localhost:8000/admin/
- **QA Launcher**: http://localhost:5174

### **Key Commands**:
```bash
# Start platform (via launcher)
cd Common/qa-launcher-console/backend && npm start

# Start backend (manual)
cd backend && python manage.py runserver 8000

# Start frontend (manual)
cd frontend && npm run dev -- --port 3001

# Run migrations
cd backend && python manage.py migrate

# Seed data
cd backend && python manage.py seed_enterprise_masters
```

### **Keyboard Shortcuts**:
- **Ctrl+L**: Show this version info (on login screen)
- **F1-F12**: Toolbar actions (context-dependent)
- **Ctrl+S**: Save (in forms)
- **Esc**: Cancel/Close

---

**🎉 Welcome to Olivine Platform v3.0 - The Future of Enterprise Resource Planning!**
