<!-- OLIVINE-PLATFORM-META -->
<!--
Issued By: Astra (Platform Owner-Olvine ERP platform)
Reviewed By: Viji (Product Owner & Final Decision Authority)
Created By: Astra
Created On: 2026-02-10 20:24:43
Last Updated By: Astra
Last Updated On: 2026-02-21 18:53:40
-->
# ASTRA DOCUMENT REGISTRY & LIFECYCLE GOVERNANCE

**Version**: 1.0  
2026-02-16 21:06 IST
**Status**: ✅ ACTIVE (FOUNDATIONAL)  
**Authority**: SCCB - Viji + Mindra  
**Scope**: `.agent/astra/*`

---

## 🔒 GOVERNANCE RULE

**This registry is the SINGLE SOURCE OF TRUTH for all Astra documents.**

- If a document is NOT listed here → it is considered NON-EXISTENT
- Orphaned documents are FORBIDDEN
- Direct file creation without registry update is FORBIDDEN
- Registry drift is treated as configuration drift

---

## 📋 DOCUMENT CATEGORIES

| Category | Retention | Deletion Policy |
|----------|-----------|-----------------|
| **CANONICAL** | Permanent | NEVER deleted |
| **ACTIVE_WORK** | Until completed | Promote to CANONICAL or ARCHIVE |
| **SESSION_REPORT** | 30 days | Move to archive/ after 30 days |
| **ARCHIVE** | 90 days | MAY delete after 90 days |

---

## 📚 CATEGORY 1: CANONICAL (Governance - NEVER DELETE)

| File | Purpose | Status |
|------|---------|--------|
| `astra-session-management/00_astra_binding_commitment.md` | Binding rules & non-negotiables | ✅ ACTIVE |
| `astra-session-management/00_astra_context_master.md` | Context loading master | ✅ ACTIVE |
| `astra-session-management/00_astra_registry_system.md` | File location registry | ✅ ACTIVE |
| `astra-session-management/01_quick_reference_patterns.md` | Quick reference patterns | ✅ ACTIVE |
| `astra-session-management/02_governance_rules_summary.md` | Governance summary | ✅ ACTIVE |
| `astra-session-management/06_platform_arch_toolbar_universal_mode_prop_v4.md` | Toolbar V4 Spec (CANONICAL) | ✅ ACTIVE |
| `astra-session-management/07_django_command_permanent_fix.md` | Django command fix | ✅ ACTIVE |
| `astra-session-management/08_astra_start.md` | /start workflow | ✅ ACTIVE |
| `astra-session-management/13_astra_operational_model_quick_ref.md` | Operational model | ✅ ACTIVE |

---

## 🔧 CATEGORY 2: ACTIVE_WORK (In Progress)

| File | Created | Purpose | Status | Next Action |
|------|---------|---------|--------|-------------|
| `astra-wip/toolbar-governance-v2-implementation-plan.md` | 2026-02-10 | Toolbar V2 rollout plan | 🟡 PENDING | Execute Phase 1 |
| `astra-session-management/03_astra_session_state_tracker.md` | 2026-02-01 | Session state tracking | ✅ ACTIVE | Update per session |
| `astra-session-management/04_astra_scope_and_ownership.md` | 2026-02-01 | Scope definition | ✅ ACTIVE | Reference doc |
| `astra-session-management/09_astra_session_current.md` | 2026-02-10 | Current session state | ✅ ACTIVE | Update at /end |
| `astra-session-management/10_astra_session_last.md` | 2026-02-10 | Last session summary | ✅ ACTIVE | Archive after next session |
| `astra-session-management/11_astra_session_next.md` | 2026-02-10 | Next session plan | ✅ ACTIVE | Execute at /start |
| `astra-session-management/12_astra_token_status.md` | 2026-02-10 | Token tracking | ✅ ACTIVE | Update per session |
| `astra-session-management/13_astra_checkpoint.md` | 2026-02-01 | Checkpoint mechanism | ✅ ACTIVE | Reference doc |
| `astra-session-management/14_astra_prompts.md` | 2026-02-01 | Prompt templates | ✅ ACTIVE | Reference doc |

---

## 📊 CATEGORY 3: SESSION_REPORT (30-Day Retention)

| File | Created | Purpose | Archive Date | Status |
|------|---------|---------|--------------|--------|
| `astra-wip/sccb-documents-folder-implementation.md` | 2026-02-10 | Documents folder SCCB impl | 2026-03-12 | ✅ ACTIVE |
| `astra-wip/platform-registry-phase2-report.md` | 2026-02-10 | Platform registry Phase 2 execution | 2026-03-12 | ✅ ACTIVE |
| `astra-wip/platform-registry-deletion-plan.md` | 2026-02-10 | Deletion execution plan | 2026-03-12 | ✅ ACTIVE |
| `astra-wip/platform-registry-discovery-report.md` | 2026-02-10 | Platform registry discovery (SCCB Phase 1) | 2026-03-12 | ✅ ACTIVE |
| `astra-wip/sccb-document-registry-implementation.md` | 2026-02-10 | Document Registry SCCB impl | 2026-03-12 | ✅ ACTIVE |
| `astra-wip/dit-docs-reorganization-summary.md` | 2026-02-10 | DIT reorg report | 2026-03-12 | ✅ ACTIVE |
| `astra-wip/sccb-toolbar-v4.1-merge-report.md` | 2026-02-10 | Toolbar V4 SCCB merge | 2026-03-12 | ✅ ACTIVE |
| `astra-wip/sccb-ui-wiring-checklist-v1.1-report.md` | 2026-02-10 | UI Wiring V1.1 update | 2026-03-12 | ✅ ACTIVE |
| `astra-session-management/SESSION_SUMMARY_20260208.md` | 2026-02-08 | Session summary | 2026-03-10 | ✅ ACTIVE |
| `astra-session-management/SESSION_SUMMARY_20260208_FINANCE_UI.md` | 2026-02-08 | Finance UI session | 2026-03-10 | ✅ ACTIVE |
| `astra-wip/item_master_toolbar_fix_report.md` | 2026-02-01 | Item Master fix report | 2026-03-03 | ⚠️ ARCHIVE SOON |
| `astra-wip/sccb-toolbar-enforcement-report.md` | 2026-02-02 | Toolbar enforcement | 2026-03-04 | ⚠️ ARCHIVE SOON |
| `astra-wip/phase1-complete-report.md` | 2026-01-27 | Phase 1 completion | 2026-02-26 | ⚠️ ARCHIVE SOON |
| `astra-wip/retail_toolbar_audit_20260202.md` | 2026-02-02 | Retail toolbar audit | 2026-03-04 | ⚠️ ARCHIVE SOON |
| `astra-wip/retail_toolbar_audit_2026-02-02.md` | 2026-02-02 | Retail toolbar audit (dup) | 2026-03-04 | ⚠️ ARCHIVE SOON |

---

## 📦 CATEGORY 4: ARCHIVE (90-Day Retention - Eligible for Deletion)

| File | Created | Archived | Delete After | Purpose |
|------|---------|----------|--------------|---------|
| `astra-wip/ITEM_MASTER_TOOLBAR_FIX.md` | 2026-02-01 | 2026-02-10 | 2026-05-11 | Historical - Item Master fix |
| `astra-wip/ITEM_MASTER_TOOLBAR_FIX_SIGNOFF_MNDRA_VIJI-02-FEb-2026-335p.md` | 2026-02-01 | 2026-02-10 | 2026-05-11 | Historical - Sign-off doc |
| `astra-wip/ITEM_MASTER_TOOLBAR_VERIFICATION.md` | 2026-02-01 | 2026-02-10 | 2026-05-11 | Historical - Verification |
| `astra-wip/api-driven-toolbar-plan.md` | 2026-01-27 | 2026-02-10 | 2026-05-11 | Historical - Old plan |
| `astra-wip/api-toolbar-implementation-complete.md` | 2026-01-27 | 2026-02-10 | 2026-05-11 | Historical - Completion report |
| `astra-wip/centralized-table-name-fix.md` | 2026-01-29 | 2026-02-10 | 2026-05-11 | Historical - Table name fix |
| `astra-wip/cleansing_log_20260201_191816.md` | 2026-02-01 | 2026-02-10 | 2026-05-11 | Historical - Cleansing log |
| `astra-wip/duplicate-registration-fix.md` | 2026-01-27 | 2026-02-10 | 2026-05-11 | Historical - Dup fix |
| `astra-wip/governance_alignment_2901.md` | 2026-01-29 | 2026-02-10 | 2026-05-11 | Historical - Governance |
| `astra-wip/item_master_toolbar_sccb_compliance_addendum.md` | 2026-02-01 | 2026-02-10 | 2026-05-11 | Historical - SCCB addendum |
| `astra-wip/phase2-validation-checklist.md` | 2026-01-27 | 2026-02-10 | 2026-05-11 | Historical - Phase 2 checklist |
| `astra-wip/retail_master_toolbar_normalization_sccb.md` | 2026-02-01 | 2026-02-10 | 2026-05-11 | Historical - SCCB |
| `astra-wip/retail_master_toolbar_post_20260201_1952.md` | 2026-02-01 | 2026-02-10 | 2026-05-11 | Historical - Post audit |
| `astra-wip/retail_master_toolbar_pre_20260201_1950.md` | 2026-02-01 | 2026-02-10 | 2026-05-11 | Historical - Pre audit |
| `astra-wip/retail_toolbar_implementation_v3.md` | 2026-01-27 | 2026-02-10 | 2026-05-11 | Historical - V3 impl |
| `astra-wip/retail_viewid_audit_20260201.md` | 2026-02-01 | 2026-02-10 | 2026-05-11 | Historical - ViewID audit |

---

## 🗂️ SPECIAL CATEGORIES

### **UI Registry & Inventory**
| File | Purpose | Status |
|------|---------|--------|
| `astra-wip/retail_ui_inventory.md` | Retail UI registry (SCCB-30) | ✅ CANONICAL |

### **Duplicate Session Files** (Cleanup Needed)
| File | Issue | Action |
|------|-------|--------|
| `astra-session-management/12_astra_session_current.md` | Duplicate of 09 | 🔴 DELETE |

### **Legacy/Obsolete** (Immediate Cleanup)
| File | Reason | Action |
|------|--------|--------|
| `astra-wip/astra_bootstrap.md` | Superseded by 08_astra_start.md | 🔴 DELETE |
| `astra-wip/duplicate_intent_map.md` | Duplicate analysis | 🔴 DELETE |
| `astra-wip/agent-bootstrap-architecture-checklist.md` | Obsolete | 🔴 DELETE |
| `astra-session-management/05_toolbar_final_governance_v2_3001.md` | Superseded by V4 | 🔴 DELETE |
| `astra-session-management/06_new_ui_wiring_checklist_olivine.md` | Duplicate (canonical in /governance) | 🔴 DELETE |

---

## 🔄 LIFECYCLE ENFORCEMENT

### **Automatic Actions**

**Monthly Cleanup** (1st of each month):
1. Move SESSION_REPORT > 30 days to `archive/`
2. Flag ARCHIVE > 90 days for deletion
3. Update registry status

**Session Start**:
1. Review ACTIVE_WORK for relevant docs
2. Review CANONICAL for governance updates

**Session End**:
1. Add new documents to registry
2. Update status of modified docs
3. Archive completed SESSION_REPORTs

---

## 📁 ARCHIVE STRUCTURE

```
.agent/astra/archive/
├── 2026-01/
│   ├── phase1-complete-report.md
│   └── retail_toolbar_audit_20260127.md
├── 2026-02/
│   └── (will be populated on 2026-03-01)
└── README.md (retention policy)
```

---

## ✅ MANDATORY PROCESS (ASTRA)

### **On Document Creation**:
```markdown
1. Create document
2. Add entry to DOCUMENT_REGISTRY.md
3. Categorize (CANONICAL / ACTIVE_WORK / SESSION_REPORT / ARCHIVE)
4. Add metadata (date, purpose, retention)
```

### **On Session Start**:
```markdown
1. Read DOCUMENT_REGISTRY.md
2. Identify relevant CANONICAL docs
3. Identify relevant ACTIVE_WORK docs
4. Load context from registry
```

### **On Session End**:
```markdown
1. Update DOCUMENT_REGISTRY.md with new docs
2. Update status of modified docs
3. Apply lifecycle rules
```

---

## 🚨 VIOLATION HANDLING

**Orphaned Document Found**:
1. Add to registry immediately
2. Categorize retroactively
3. Document in session log

**Registry Drift Detected**:
1. Audit all files
2. Update registry
3. Document discrepancies

---

## 📊 REGISTRY METRICS

**Total Documents**: 84  
**CANONICAL**: 9  
**ACTIVE_WORK**: 9  
**SESSION_REPORT**: 10  
**ARCHIVE**: 16  
**CLEANUP NEEDED**: 5 (duplicates/obsolete)  
**UNCATEGORIZED**: 35 (to be processed)

---

## 🔗 RELATED GOVERNANCE

- **Binding Commitment**: `astra-session-management/00_astra_binding_commitment.md`
- **Toolbar V4 Spec**: `astra-session-management/06_platform_arch_toolbar_universal_mode_prop_v4.md`
- **UI Wiring Checklist**: `governance/NEW_UI_WIRING_CHECKLIST_OLIVINE.md`

---

2026-02-16 21:06 IST
**Registry Version**: 1.0  
**Next Cleanup**: 2026-03-01  
**Status**: ✅ ACTIVE


