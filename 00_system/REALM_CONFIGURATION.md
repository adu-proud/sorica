---
type: realm_configuration
agent: Varro
created: 2026-05-21
updated: 2026-05-21
---

# Realm Configuration

Agents read this before major work.

```yaml
realm_type: research_framework
research_mode: evolving_complex_corpus
root_vault_path: "[path]"
root_vault_mode: protected_append_only

source_policy: internal_first
external_sources_allowed: explicit_request_only
external_logs:
  - 03_logs/external_queries.md
  - 03_logs/source_intake_log.md

claim_standard: source_link_required
l2_policy: backsearch_required

protected_paths:
  - "[root_vault_path]"
  - 02_user_realm/writing/

archive_path: 01_llm_realm/archive/
stale_after_days: 30
archive_after_days: 60
```

## Notes
- Change `external_sources_allowed` only when the researcher wants logged external monitoring.
- This file never grants permission to edit the Root Vault.
